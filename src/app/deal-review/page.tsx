import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { DealReviewForm } from "@/components/deal-review-form";
import { CTAButton } from "@/components/cta-button";

export const metadata: Metadata = {
  title: "Self-Storage Deal Review & Underwriting | Storage Hunters",
  description:
    "Send us a self-storage deal and we'll stress-test the numbers: quick deal screens, full underwriting reviews, and acquisition strategy calls.",
  alternates: { canonical: "/deal-review" },
};

const tiers = [
  {
    name: "Quick Deal Screen",
    price: "$99",
    description:
      "A fast gut-check: is this deal worth your time? We screen price per SF, market, and headline numbers and flag the obvious problems.",
    items: ["48-hour turnaround", "Pass / dig-deeper verdict", "Top 3 risk flags"],
  },
  {
    name: "Full Deal Review",
    price: "$299",
    featured: true,
    description:
      "Full stress-test of the numbers: revenue reality check, expense rebuild, debt assumptions, and what the deal is actually worth.",
    items: [
      "Line-by-line underwriting review",
      "Rebuilt expense stack",
      "Valuation range and max offer guidance",
      "Written summary you can share with partners",
    ],
  },
  {
    name: "Acquisition Strategy Call",
    price: "$499+",
    description:
      "A working session on your whole acquisition: the deal, the market, the financing, and the negotiation plan — live, on a call.",
    items: [
      "Everything in Full Deal Review",
      "60-minute live strategy session",
      "Negotiation and structuring guidance",
    ],
  },
];

export default function DealReviewPage() {
  return (
    <div className="flex flex-1 flex-col bg-white text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-forest-100 bg-gradient-to-b from-forest-50 to-white">
          <div className="mx-auto w-full max-w-6xl px-6 py-16 text-center sm:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blaze-600">
              Deal Review
            </p>
            <h1 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-forest-900 sm:text-5xl">
              Send us a deal. We&apos;ll stress-test the numbers.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-forest-800/80">
              Don&apos;t trust a broker pro forma with your capital. Get an
              independent buy-side read on the deal before you write the offer.
            </p>
          </div>
        </section>
        <section className="py-16 sm:py-20">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid gap-6 lg:grid-cols-3">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`flex flex-col rounded-lg border p-8 ${
                    tier.featured
                      ? "border-blaze-600 bg-forest-900 shadow-xl"
                      : "border-forest-100 bg-white"
                  }`}
                >
                  <h2
                    className={`text-lg font-semibold ${
                      tier.featured ? "text-white" : "text-forest-900"
                    }`}
                  >
                    {tier.name}
                  </h2>
                  <p
                    className={`mt-2 text-4xl font-bold ${
                      tier.featured ? "text-blaze-500" : "text-forest-900"
                    }`}
                  >
                    {tier.price}
                  </p>
                  <p
                    className={`mt-4 text-sm leading-6 ${
                      tier.featured ? "text-forest-100/80" : "text-forest-800/70"
                    }`}
                  >
                    {tier.description}
                  </p>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {tier.items.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm leading-6">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mt-1 h-4 w-4 shrink-0 text-blaze-600"
                          aria-hidden="true"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <span
                          className={
                            tier.featured
                              ? "text-forest-100/80"
                              : "text-forest-800/70"
                          }
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <CTAButton
                      href="#deal-form"
                      event={`deal_review_tier_${tier.price}`}
                      variant={tier.featured ? "primary" : "dark"}
                      className="w-full text-center"
                    >
                      Request Deal Review
                    </CTAButton>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-forest-800/60">
              Submit the form below and we&apos;ll confirm scope and send a
              payment link — no charge until we agree on the work.
            </p>
          </div>
        </section>
        <section id="deal-form" className="scroll-mt-16 border-t border-forest-100 bg-forest-50/50 py-16 sm:py-20">
          <div className="mx-auto w-full max-w-3xl px-6">
            <h2 className="text-center text-2xl font-bold tracking-tight text-forest-900">
              Tell us about the deal
            </h2>
            <div className="mt-8">
              <DealReviewForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
