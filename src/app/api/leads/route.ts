import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const LEAD_TYPES = new Set([
  "checklist_lead",
  "model_lead",
  "buyer_profile",
  "pro_waitlist",
  "deal_review_request",
  "acquisition_call_request",
]);

const text = (v: unknown) =>
  typeof v === "string" && v.trim() ? v.trim().slice(0, 2000) : null;

function scoreLead(body: Record<string, unknown>, leadType: string): number {
  let score = 0;
  const budget = text(body.budget) ?? "";
  if (["$1M – $3M", "$3M – $10M", "$10M+"].includes(budget)) score += 5;
  const equity = text(body.equity) ?? "";
  if (["$250K – $500K", "$500K – $1M", "$1M+"].includes(equity)) score += 5;
  const timeline = text(body.timeline) ?? "";
  if (["0–3 months", "3–6 months"].includes(timeline)) score += 10;
  if (body.openToRep === "yes") score += 10;
  if (leadType === "deal_review_request") score += 5;
  if (leadType === "pro_waitlist" || body.interestedPro === "yes") score += 3;
  return score;
}

export async function POST(request: Request) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    return NextResponse.json(
      { error: "Lead intake is not configured yet." },
      { status: 503 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot field: real users never fill this in.
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!name || !email || !email.includes("@")) {
    return NextResponse.json(
      { error: "Name and a valid email are required." },
      { status: 400 }
    );
  }

  const leadType = LEAD_TYPES.has(String(body.leadType))
    ? String(body.leadType)
    : "buyer_profile";

  const base = {
    name: name.slice(0, 200),
    email: email.slice(0, 200),
    phone: text(body.phone),
    markets: text(body.markets),
    target_states: text(body.targetStates),
    budget: text(body.budget),
    equity: text(body.equity),
    financing_status: text(body.financingStatus),
    first_time_buyer:
      body.firstTimeBuyer === "yes"
        ? true
        : body.firstTimeBuyer === "no"
          ? false
          : null,
    notes: text(body.notes),
  };

  // Deal-review specifics and anything non-columnar goes into `extra`.
  const extraEntries = Object.entries({
    facilitySize: text(body.facilitySize),
    dealLocation: text(body.dealLocation),
    askingPrice: text(body.askingPrice),
    facilityType: text(body.facilityType),
    nrsf: text(body.nrsf),
    occupancy: text(body.occupancy),
    revenue: text(body.revenue),
    noi: text(body.noi),
    docsLink: text(body.docsLink),
    reviewTier: text(body.reviewTier),
  }).filter(([, v]) => v !== null);
  const extra = extraEntries.length
    ? Object.fromEntries(extraEntries)
    : null;

  const segmented = {
    ...base,
    lead_type: leadType,
    source_page: text(body.sourcePage),
    buyer_type: text(body.buyerType),
    timeline: text(body.timeline),
    deal_type: text(body.dealType),
    open_to_rep: text(body.openToRep),
    interested_pro: text(body.interestedPro),
    lead_score: scoreLead(body, leadType),
    extra,
  };

  const supabase = createClient(url, key);
  let { error } = await supabase.from("leads").insert(segmented);

  // If migration-002 hasn't been run yet, the new columns don't exist.
  // Fall back to base columns and pack everything else into notes so the
  // lead is never lost.
  if (error && /column/i.test(error.message)) {
    const packed = {
      ...base,
      notes: [
        base.notes,
        `[${leadType} | score ${segmented.lead_score} | ${segmented.source_page ?? ""}]`,
        extra ? JSON.stringify(extra) : null,
        segmented.buyer_type ? `buyer_type: ${segmented.buyer_type}` : null,
        segmented.timeline ? `timeline: ${segmented.timeline}` : null,
        segmented.deal_type ? `deal_type: ${segmented.deal_type}` : null,
        segmented.open_to_rep ? `open_to_rep: ${segmented.open_to_rep}` : null,
        segmented.interested_pro
          ? `interested_pro: ${segmented.interested_pro}`
          : null,
      ]
        .filter(Boolean)
        .join("\n")
        .slice(0, 2000),
    };
    ({ error } = await supabase.from("leads").insert(packed));
  }

  if (error) {
    console.error("Lead insert failed:", error.message);
    return NextResponse.json(
      { error: "Could not save your info. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
