"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/track";
import { inputClass, labelClass } from "@/components/lead-capture-form";

const CONTACT_EMAIL = "storagebrokerbrandon@gmail.com";

const dealFields = [
  { name: "dealLocation", label: "Deal location (city, state) *", required: true, placeholder: "e.g. Waco, TX" },
  { name: "askingPrice", label: "Asking price", placeholder: "e.g. $2,400,000" },
  { name: "nrsf", label: "NRSF / unit count", placeholder: "e.g. 45,000 SF / 350 units" },
  { name: "occupancy", label: "Occupancy", placeholder: "e.g. 88% physical" },
  { name: "revenue", label: "Gross revenue", placeholder: "e.g. $410,000 / yr" },
  { name: "noi", label: "NOI (if known)", placeholder: "e.g. $240,000" },
];

export function DealReviewForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          leadType: "deal_review_request",
          sourcePage: window.location.pathname,
        }),
      });
      if (res.ok) {
        trackEvent("deal_review_requested");
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
      <div className="rounded-lg border border-forest-200 bg-forest-50 p-10 text-center">
        <h3 className="text-2xl font-bold text-forest-900">
          Deal received. We&apos;re on it.
        </h3>
        <p className="mx-auto mt-3 max-w-md leading-7 text-forest-800/80">
          We&apos;ll review the numbers and reach out with next steps and
          pricing within one business day.
        </p>
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
          <label htmlFor="dr-name" className={labelClass}>
            Name *
          </label>
          <input id="dr-name" name="name" type="text" required className={inputClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="dr-email" className={labelClass}>
            Email *
          </label>
          <input id="dr-email" name="email" type="email" required className={inputClass} placeholder="you@example.com" />
        </div>
        <div>
          <label htmlFor="dr-phone" className={labelClass}>
            Phone
          </label>
          <input id="dr-phone" name="phone" type="tel" className={inputClass} placeholder="(555) 555-5555" />
        </div>
        <div>
          <label htmlFor="dr-reviewTier" className={labelClass}>
            What do you need?
          </label>
          <select id="dr-reviewTier" name="reviewTier" className={inputClass}>
            <option value="">Select one</option>
            <option>Quick Deal Screen ($99)</option>
            <option>Full Deal Review ($299)</option>
            <option>Acquisition Strategy Call ($499+)</option>
            <option>Not sure — recommend one</option>
          </select>
        </div>
        <div>
          <label htmlFor="dr-facilityType" className={labelClass}>
            Facility type
          </label>
          <select id="dr-facilityType" name="facilityType" className={inputClass}>
            <option value="">Select one</option>
            <option>Drive-up self-storage</option>
            <option>Climate-controlled</option>
            <option>Mixed (drive-up + climate)</option>
            <option>Boat / RV storage</option>
            <option>Conversion opportunity</option>
            <option>Portfolio</option>
          </select>
        </div>
        {dealFields.map((f) => (
          <div key={f.name}>
            <label htmlFor={`dr-${f.name}`} className={labelClass}>
              {f.label}
            </label>
            <input
              id={`dr-${f.name}`}
              name={f.name}
              type="text"
              required={f.required}
              className={inputClass}
              placeholder={f.placeholder}
            />
          </div>
        ))}
        <div className="sm:col-span-2">
          <label htmlFor="dr-docsLink" className={labelClass}>
            Link to OM / rent roll / T-12 (Dropbox, Google Drive, etc.)
          </label>
          <input
            id="dr-docsLink"
            name="docsLink"
            type="url"
            className={inputClass}
            placeholder="https://..."
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="dr-notes" className={labelClass}>
            Notes
          </label>
          <textarea
            id="dr-notes"
            name="notes"
            rows={4}
            className={inputClass}
            placeholder="The story on the deal: seller situation, upside you see, your questions"
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
            {status === "submitting" ? "Submitting..." : "Request Deal Review"}
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
