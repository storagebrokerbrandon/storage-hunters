"use client";

import { useState } from "react";
import Link from "next/link";

const inputClass =
  "w-full rounded-md border border-forest-200 bg-white px-3 py-2.5 text-sm text-forest-900 outline-none transition-colors focus:border-blaze-600";
const labelClass = "mb-1.5 block text-sm font-medium text-forest-900";

const CONTACT_EMAIL = "storagebrokerbrandon@gmail.com";

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
        body: JSON.stringify(data),
      });
      if (res.ok) {
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
        <div>
          <label htmlFor="budget" className={labelClass}>
            Acquisition budget
          </label>
          <select id="budget" name="budget" className={inputClass}>
            <option value="">Select a range</option>
            <option>Under $500K</option>
            <option>$500K – $1M</option>
            <option>$1M – $3M</option>
            <option>$3M – $10M</option>
            <option>$10M+</option>
          </select>
        </div>
        <div>
          <label htmlFor="equity" className={labelClass}>
            Equity available
          </label>
          <select id="equity" name="equity" className={inputClass}>
            <option value="">Select a range</option>
            <option>Under $100K</option>
            <option>$100K – $250K</option>
            <option>$250K – $500K</option>
            <option>$500K – $1M</option>
            <option>$1M+</option>
          </select>
        </div>
        <div>
          <label htmlFor="financingStatus" className={labelClass}>
            Financing status
          </label>
          <select
            id="financingStatus"
            name="financingStatus"
            className={inputClass}
          >
            <option value="">Select one</option>
            <option>Cash buyer</option>
            <option>Pre-approved / lender lined up</option>
            <option>Exploring financing options</option>
            <option>Need financing guidance</option>
          </select>
        </div>
        <div>
          <label htmlFor="firstTimeBuyer" className={labelClass}>
            First-time buyer?
          </label>
          <select
            id="firstTimeBuyer"
            name="firstTimeBuyer"
            className={inputClass}
          >
            <option value="">Select one</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
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
        {/* Honeypot — hidden from real users */}
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
