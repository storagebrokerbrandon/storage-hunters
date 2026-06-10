import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Terms of Service & Refund Policy | Storage Hunters",
  description:
    "Terms of service, payment terms, and refund policy for Storage Hunters services and digital products.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    heading: "What we do",
    body: "Storage Hunters provides self-storage acquisition education, underwriting tools, deal review services, and buy-side advisory support. We help you analyze deals — all investment decisions, offers, and purchases are yours alone.",
  },
  {
    heading: "Not financial, legal, or tax advice",
    body: "Nothing on this site, in our tools, or in our reviews and calls is financial, legal, tax, or investment advice. Our analysis reflects opinions based on the information you provide. Always verify independently and consult licensed professionals (attorney, CPA, lender) before transacting. Real estate involves risk, including loss of principal.",
  },
  {
    heading: "Payments",
    body: "Paid services (deal screens, deal reviews, strategy calls, and memberships) are billed in advance through our payment processor, Stripe. We never see or store your card details. Prices are listed on the relevant page and confirmed at checkout.",
  },
  {
    heading: "Refunds — deal reviews and strategy calls",
    body: "If we have not yet started work on your deal review, you may cancel for a full refund — just email us. Once work has begun or the deliverable/call has been provided, fees are non-refundable. If you believe we missed the mark, email us within 7 days and we will make it right or refund at our discretion.",
  },
  {
    heading: "Refunds — memberships",
    body: "Memberships may be canceled anytime and will not renew at the next billing cycle. Charges for the current period are non-refundable once the period has begun, except where required by law.",
  },
  {
    heading: "Turnaround",
    body: "Quick Deal Screens are typically delivered within 2 business days, Full Deal Reviews within 5 business days of receiving complete deal information. Incomplete documents pause the clock — we'll tell you what's missing.",
  },
  {
    heading: "Your information",
    body: "Information you submit through our forms (contact details, buy box, deal information) is stored securely and used to provide our services and contact you about them. We don't sell your information. Deal documents you share are kept confidential and used only for your review.",
  },
  {
    heading: "Limitation of liability",
    body: "To the maximum extent permitted by law, Storage Hunters' total liability for any claim related to our services is limited to the amount you paid for the specific service in question. We are not liable for investment outcomes, lost profits, or decisions you make based on our analysis.",
  },
  {
    heading: "Contact",
    body: "Questions about these terms, billing, or refunds: storagebrokerbrandon@gmail.com.",
  },
];

export default function TermsPage() {
  return (
    <div className="flex flex-1 flex-col bg-white text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <article className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blaze-600">
            The Fine Print
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-forest-900 sm:text-4xl">
            Terms of Service &amp; Refund Policy
          </h1>
          <p className="mt-4 text-sm text-forest-800/60">
            Last updated: June 2026
          </p>
          <div className="mt-10 space-y-8">
            {sections.map((s) => (
              <section key={s.heading}>
                <h2 className="text-xl font-semibold text-forest-900">
                  {s.heading}
                </h2>
                <p className="mt-3 leading-7 text-forest-800/80">{s.body}</p>
              </section>
            ))}
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
