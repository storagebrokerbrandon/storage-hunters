import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

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

  const text = (v: unknown) =>
    typeof v === "string" && v.trim() ? v.trim().slice(0, 2000) : null;

  const supabase = createClient(url, key);
  const { error } = await supabase.from("leads").insert({
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
  });

  if (error) {
    console.error("Lead insert failed:", error.message);
    return NextResponse.json(
      { error: "Could not save your info. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
