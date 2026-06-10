"use client";

import { useState } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/track";
import {
  inputClass,
  labelClass,
  BUYER_TYPES,
  BUDGET_RANGES,
} from "@/components/lead-capture-form";

const CONTACT_EMAIL = "storagebrokerbrandon@gmail.com";

const selectFields = [
  {
    name: "buyerType",
    label: "Buyer type",
    options: BUYER_TYPES,
  },
  {
    name: "facilitySize",
    label: "Target facility size",
    options: [
      "Under 20,000 NRSF",
      "20,000 – 50,000 NRSF",
      "50,000 – 100,000 NRSF",
      "100,000+ NRSF",
      "Portfolio / multiple facilities",
    ],
  },
  {
    name: "budget",
    label: "Acquisition budget",
    options: BUDGET_RANGES,
  },
  {
    name: "equity",
    label: "Equity available",
    options: [
      "Under $100K",
      "$100K – $250K",
      "$250K – $500K",
      "$500K – $1M",
      "$1M+",
    ],
  },
  {
    name: "financingStatus",
    label: "Financing status",
    options: [
      "Cash buyer",
      "Pre-approved / lender lined up",
      "Exploring financing options",
      "Need financing guidance",
    ],
  },
  {
    name: "timeline",
    label: "Timeline to buy",
    options: ["0–3 months", "3–6 months", "6–12 months", "12+ months"],
  },
  {
    name: "dealType",
    label: "Preferred deal type",
    options: [
      "Stabilized",
      "Value-add",
      "Expansion",
      "Conversion",
      "Boat / RV storage",
      "Climate-controlled",
      "Open to anything",
    ],
  },
  {
    name: "firstTimeBuyer",
    label: "First-time buyer?",
    options: ["yes", "no"],
    optionLabels: ["Yes", "No"],
  },
  {
    name: "openToRep",
    label: "Open to buy-side representation?",
    options: ["yes", "no", "maybe"],
    optionLabels: ["Yes", "No", "Tell me more first"],
  },
  {
    name: "interestedPro",
    label: "Interested in Storage Hunters Pro?",
    options: ["yes", "no"],
    optionLabels: ["Yes — add me to the waitlist", "Not right now"],
  },
];

export function IntakeForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          leadType: "buyer_profile",
          sourcePage: window.location.pathname,
        }),
      });
      if (res.ok) {
        trackEvent("buyer_profile_submitted");
        setStatus("success");
        form.reset();
      } else {
        const payload = await res.json().catch(() => null);
        setErrorMessage(payload?.error ?? "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-forest-200 bg-forest-50 p-10 text-center">
        <h3 className="text-2xl font-bold text-forest-900">
          Got it. You&apos;re on the list.
        </h3>
        <p className="mx-auto mt-3 max-w-md leading-7 text-forest-800/80">
          We&apos;ll review your buy box and reach out. Want to move faster?
        </p>
        <Link
          href="/#book"
          className="mt-6 inline-block rounded-md bg-blaze-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-blaze-500"
        >
          Book a Free Acquisition Call
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-forest-100 bg-white p-8 shadow-sm"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={inputClass}
            placeholder="(555) 555-5555"
          />
        </div>
        <div>
          <label htmlFor="markets" className={labelClass}>
            Market(s) of interest
          </label>
          <input
            id="markets"
            name="markets"
            type="text"
            className={inputClass}
            placeholder="e.g. Dallas–Fort Worth, Tampa"
          />
        </div>
        <div>
          <label htmlFor="targetStates" className={labelClass}>
            Target state(s)
          </label>
          <input
            id="targetStates"
            name="targetStates"
            type="text"
            className={inputClass}
            placeholder="e.g. TX, FL, NC"
          />
        </div>
        {selectFields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className={labelClass}>
              {field.label}
            </label>
            <select id={field.name} name={field.name} className={inputClass}>
              <option value="">Select one</option>
              {field.options.map((opt, i) => (
                <option key={opt} value={opt}>
                  {field.optionLabels?.[i] ?? opt}
                </option>
              ))}
            </select>
          </div>
        ))}
        <div className="sm:col-span-2">
          <label htmlFor="notes" className={labelClass}>
            Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            className={inputClass}
            placeholder="Anything else about your goals, timeline, or experience"
          />
        </div>
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-md bg-blaze-600 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-blaze-500 disabled:opacity-60"
          >
            {status === "submitting" ? "Submitting..." : "Submit Buyer Profile"}
          </button>
          {status === "error" && (
            <p className="mt-3 text-center text-sm text-red-700">
              {errorMessage} You can also email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
