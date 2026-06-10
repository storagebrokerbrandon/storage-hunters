import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { CTAButton } from "@/components/cta-button";

export const metadata: Metadata = {
  title: "Self-Storage Investor Resources | Storage Hunters",
  description:
    "Free self-storage investing resources: underwriting checklists, valuation guides, cap rates, rent roll red flags, T-12 normalization, market analysis, and acquisition strategy.",
  alternates: { canonical: "/resources" },
};

const resources = [
  {
    href: "/resources/underwriting-checklist",
    title: "Self-Storage Underwriting Checklist",
    description:
      "Everything to verify before you buy: income, expenses, physical condition, market, and debt.",
    cta: "Read the guide",
  },
  {
    href: "/resources/how-to-value-a-self-storage-facility",
    title: "How to Value a Self-Storage Facility",
    description:
      "NOI, cap rates, price per square foot, and the adjustments that separate price from value.",
    cta: "Read the guide",
  },
  {
    href: "/resources/cap-rates-explained",
    title: "Cap Rates Explained",
    description:
      "Going-in vs. stabilized vs. exit caps — and how sellers use pro forma cap rates against you.",
    cta: "Read the guide",
  },
  {
    href: "/resources/rent-roll-red-flags",
    title: "Rent Roll Red Flags",
    description:
      "Phantom occupancy, concession games, delinquency landmines, and the bank-statement cross-check.",
    cta: "Read the guide",
  },
  {
    href: "/resources/t12-expense-normalization",
    title: "T-12 Expense Normalization Guide",
    description:
      "Turn the seller's expenses into YOUR expenses: taxes, insurance, management, and the missing line items.",
    cta: "Read the guide",
  },
  {
    href: "/resources/market-analysis-framework",
    title: "Market Supply & Demand Analysis",
    description:
      "Square feet per capita explained, demand drivers, competitor shopping, and the new-supply pipeline.",
    cta: "Read the guide",
  },
  {
    href: "/resources/boat-rv-storage-guide",
    title: "Boat & RV Storage Acquisition Guide",
    description:
      "The land business in a storage costume: product types, revenue per acre, and niche-specific risks.",
    cta: "Read the guide",
  },
  {
    href: "/for/first-time-buyers",
    title: "First-Time Buyer Guide",
    description:
      "Why storage is a strong first commercial asset, where new buyers go wrong, and how to start.",
    cta: "Read the guide",
  },
  {
    href: "/resources/deal-evaluation-framework",
    title: "Deal Screening Framework",
    description:
      "Kill bad deals in 10 minutes and spend real hours only on deals that earn them.",
    cta: "Read the guide",
  },
  {
    href: "/intake",
    title: "Buy Box Builder",
    description:
      "Define your markets, budget, equity, and deal type — and get on the list for deals that match.",
    cta: "Build your buy box",
  },
  {
    href: "/resources/acquisition-strategy-guide",
    title: "Acquisition Strategy Guide",
    description:
      "Sourcing engine, pipeline math, offers, financing structures, and closing with confidence.",
    cta: "Read the guide",
  },
];

const tools = [
  {
    href: "/free-checklist",
    event: "resources_checklist",
    title: "Free Underwriting Checklist",
    description: "The printable pre-offer checklist, sent to your inbox.",
  },
  {
    href: "/free-model",
    event: "resources_model",
    title: "Free Starter Model",
    description: "Estimate NOI, value, DSCR, and cash-on-cash in two minutes.",
  },
  {
    href: "/deal-review",
    event: "resources_deal_review",
    title: "Deal Review",
    description: "Have a live deal? We'll stress-test the numbers with you.",
  },
];

export default function ResourcesPage() {
  return (
    <div className="flex flex-1 flex-col bg-white text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-forest-100 bg-gradient-to-b from-forest-50 to-white">
          <div className="mx-auto w-full max-w-6xl px-6 py-16 text-center sm:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blaze-600">
              Investor Resources
            </p>
            <h1 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-forest-900 sm:text-5xl">
              Learn how serious buyers evaluate self-storage
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-forest-800/80">
              Free frameworks, checklists, and tools from the buy-side: find
              better deals, kill bad ones faster, and know what to offer.
            </p>
          </div>
        </section>

        {/* Free tools strip */}
        <section className="border-b border-forest-100 bg-forest-900 py-10">
          <div className="mx-auto grid w-full max-w-6xl gap-4 px-6 sm:grid-cols-3">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group rounded-lg border border-white/10 bg-forest-800/60 p-5 transition-colors hover:border-blaze-500/50"
              >
                <h2 className="font-semibold text-white group-hover:text-blaze-500">
                  {tool.title} &rarr;
                </h2>
                <p className="mt-1.5 text-sm leading-6 text-forest-100/70">
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {resources.map((res) => (
                <Link
                  key={res.href}
                  href={res.href}
                  className="group flex flex-col rounded-lg border border-forest-100 bg-white p-7 transition-all hover:-translate-y-1 hover:border-forest-200 hover:shadow-lg hover:shadow-forest-900/10"
                >
                  <h2 className="text-lg font-semibold text-forest-900 group-hover:text-blaze-700">
                    {res.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-6 text-forest-800/70">
                    {res.description}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-blaze-600">
                    {res.cta} &rarr;
                  </p>
                </Link>
              ))}
            </div>
            <div className="mt-16 rounded-lg bg-forest-900 p-8 text-center sm:p-10">
              <h2 className="text-2xl font-bold tracking-tight text-white">
                Frameworks are the start. Deals are the goal.
              </h2>
              <p className="mx-auto mt-3 max-w-md text-base leading-7 text-forest-100/80">
                Book a free acquisition call and we&apos;ll apply all of this
                to your market and your buy box.
              </p>
              <div className="mt-6">
                <CTAButton href="/#book" event="resources_book_call">
                  Book a Free Acquisition Call
                </CTAButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
