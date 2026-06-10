import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { LeadCaptureForm } from "@/components/lead-capture-form";
import { CTAButton } from "@/components/cta-button";

export const metadata: Metadata = {
  title: "Free Self-Storage Underwriting Checklist | Storage Hunters",
  description:
    "Before you make an offer, know what to check: rent roll, T-12, taxes, insurance, occupancy, unit mix, market supply, expansion upside, and debt assumptions.",
  alternates: { canonical: "/free-checklist" },
};

const included = [
  "Rent roll review: in-place vs. street rates, delinquency, unit mix",
  "T-12 income verification and expense normalization",
  "Property taxes re-assessed at YOUR purchase price",
  "Insurance, payroll, and the line items mom-and-pop sellers hide",
  "Physical inspection: roof, doors, asphalt, security, HVAC",
  "Market supply check: square feet per capita and the new-supply pipeline",
  "Expansion upside and excess land analysis",
  "Debt assumptions and DSCR stress tests",
];

export default function FreeChecklistPage() {
  return (
    <div className="flex flex-1 flex-col bg-white text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-forest-100 bg-gradient-to-b from-forest-50 to-white">
          <div className="mx-auto w-full max-w-6xl px-6 py-16 text-center sm:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blaze-600">
              Free Download
            </p>
            <h1 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-forest-900 sm:text-5xl">
              The Self-Storage Underwriting Checklist
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-forest-800/80">
              Before you make an offer, know what to check: rent roll, T-12,
              taxes, insurance, occupancy, unit mix, market supply, expansion
              upside, and debt assumptions.
            </p>
          </div>
        </section>
        <section className="py-16 sm:py-20">
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-forest-900">
                What&apos;s inside
              </h2>
              <ul className="mt-6 space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex gap-3 leading-7">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1.5 h-4 w-4 shrink-0 text-blaze-600"
                      aria-hidden="true"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-forest-800/80">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 leading-7 text-forest-800/80">
                Why it matters: most first-time buyers lose money on the things
                they didn&apos;t check, not the things they did. This is the
                same checklist discipline used on institutional deals — sized
                for buyers doing their first one to five facilities.
              </p>
            </div>
            <div>
              <LeadCaptureForm
                leadType="checklist_lead"
                trackName="checklist_downloaded"
                fields={["phone", "buyerType", "markets"]}
                submitLabel="Get the Free Checklist"
                successTitle="You're in. Here's your checklist."
                successBody="Open it below — bookmark it, print it, and run it on every deal before you write an offer."
                successChildren={
                  <CTAButton
                    href="/resources/underwriting-checklist"
                    event="open_checklist"
                  >
                    Open the Checklist
                  </CTAButton>
                }
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
