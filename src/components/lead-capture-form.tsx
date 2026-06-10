"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/track";

export const inputClass =
  "w-full rounded-md border border-forest-200 bg-white px-3 py-2.5 text-sm text-forest-900 outline-none transition-colors focus:border-blaze-600";
export const labelClass = "mb-1.5 block text-sm font-medium text-forest-900";

const CONTACT_EMAIL = "storagebrokerbrandon@gmail.com";

export const BUYER_TYPES = [
  "First-time buyer",
  "Existing operator",
  "Private investor",
  "Family office",
  "Other",
];

export const BUDGET_RANGES = [
  "Under $500K",
  "$500K – $1M",
  "$1M – $3M",
  "$3M – $10M",
  "$10M+",
];

type FieldKey = "phone" | "buyerType" | "markets" | "budget";

export function LeadCaptureForm({
  leadType,
  trackName,
  fields = [],
  submitLabel,
  successTitle,
  successBody,
  successChildren,
}: {
  leadType: string;
  trackName: string;
  fields?: FieldKey[];
  submitLabel: string;
  successTitle: string;
  successBody: string;
  successChildren?: React.ReactNode;
}) {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const data = Object.fromEntries(
      new FormData(event.currentTarget).entries()
    );
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          leadType,
          sourcePage: window.location.pathname,
        }),
      });
      if (res.ok) {
        trackEvent(trackName);
        setStatus("success");
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
      <div className="rounded-lg border border-forest-200 bg-forest-50 p-8 text-center">
        <h3 className="text-2xl font-bold text-forest-900">{successTitle}</h3>
        <p className="mx-auto mt-3 max-w-md leading-7 text-forest-800/80">
          {successBody}
        </p>
        {successChildren && <div className="mt-6">{successChildren}</div>}
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-forest-100 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-4">
        <div>
          <label htmlFor={`${leadType}-name`} className={labelClass}>
            Name *
          </label>
          <input
            id={`${leadType}-name`}
            name="name"
            type="text"
            required
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor={`${leadType}-email`} className={labelClass}>
            Email *
          </label>
          <input
            id={`${leadType}-email`}
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>
        {fields.includes("phone") && (
          <div>
            <label htmlFor={`${leadType}-phone`} className={labelClass}>
              Phone (optional)
            </label>
            <input
              id={`${leadType}-phone`}
              name="phone"
              type="tel"
              className={inputClass}
              placeholder="(555) 555-5555"
            />
          </div>
        )}
        {fields.includes("buyerType") && (
          <div>
            <label htmlFor={`${leadType}-buyerType`} className={labelClass}>
              Buyer type
            </label>
            <select
              id={`${leadType}-buyerType`}
              name="buyerType"
              className={inputClass}
            >
              <option value="">Select one</option>
              {BUYER_TYPES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
        )}
        {fields.includes("markets") && (
          <div>
            <label htmlFor={`${leadType}-markets`} className={labelClass}>
              Markets of interest
            </label>
            <input
              id={`${leadType}-markets`}
              name="markets"
              type="text"
              className={inputClass}
              placeholder="e.g. Dallas–Fort Worth, Tampa"
            />
          </div>
        )}
        {fields.includes("budget") && (
          <div>
            <label htmlFor={`${leadType}-budget`} className={labelClass}>
              Acquisition budget
            </label>
            <select
              id={`${leadType}-budget`}
              name="budget"
              className={inputClass}
            >
              <option value="">Select a range</option>
              {BUDGET_RANGES.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
          </div>
        )}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-md bg-blaze-600 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-blaze-500 disabled:opacity-60"
        >
          {status === "submitting" ? "Submitting..." : submitLabel}
        </button>
        {status === "error" && (
          <p className="text-center text-sm text-red-700">
            {errorMessage} You can also email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
