import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

type AudienceSection = {
  heading: string;
  body?: string;
  items?: string[];
};

type Audience = {
  title: string;
  metaTitle: string;
  description: string;
  photo: string;
  intro: string;
  sections: AudienceSection[];
};

const audiences: Record<string, Audience> = {
  "first-time-buyers": {
    title: "First-Time Self-Storage Buyers",
    metaTitle: "For First-Time Self-Storage Buyers | Storage Hunters",
    description:
      "Buying your first self-storage facility? Get a proven framework for finding, underwriting, and closing your first deal with buy-side support.",
    photo: "/photos/doors-exterior.jpg",
    intro:
      "Your first facility is the hardest one. You don't have a lender history, a deal pipeline, or the pattern recognition that comes from losing money on bad assumptions. That's exactly the gap we fill — so your first deal is a good one.",
    sections: [
      {
        heading: "Why storage is a strong first commercial asset",
        items: [
          "Simple operations: no toilets, no tenants living on site, short leases that re-price fast.",
          "Resilient demand: moves, downsizing, and life transitions keep units filled in good times and bad.",
          "Fragmented ownership: most facilities are still owned by mom-and-pop operators, which means real opportunities to buy below institutional pricing.",
          "Financeable: banks, credit unions, and SBA programs all actively lend on storage.",
        ],
      },
      {
        heading: "Where first-time buyers go wrong",
        items: [
          "Trusting the seller's numbers instead of rebuilding them.",
          "Buying in a market they never analyzed for supply and demand.",
          "Underestimating what it costs a new owner to run the property.",
          "Overpaying because they had no pipeline — when you only see one deal, every deal looks good.",
        ],
      },
      {
        heading: "How we work with you",
        body: "We start with a free call to define your buy box — target markets, size, budget, and financing path. Then we help you build a pipeline, underwrite what comes through it, and stay disciplined from offer to closing. You make the decisions; we make sure they're informed ones.",
      },
    ],
  },
  "existing-operators": {
    title: "Existing Self-Storage Operators",
    metaTitle: "For Existing Self-Storage Operators | Storage Hunters",
    description:
      "Already operate self-storage? Expand your portfolio with disciplined market selection, underwriting support, and buy-side deal flow.",
    photo: "/photos/units-corridor.jpg",
    intro:
      "You know how to run a facility. The question is what to buy next, where, and at what price — without burning your operating bandwidth on deals that die in diligence. We work as your acquisitions desk so you can keep operating while the pipeline keeps moving.",
    sections: [
      {
        heading: "Where we add leverage for operators",
        items: [
          "Market screening for your next expansion — supply per capita, pipeline risk, and rate trends before you commit a weekend to a site visit.",
          "Second-opinion underwriting: pressure-test your assumptions against someone whose only job is the buy side.",
          "Off-market sourcing strategy targeting the mom-and-pop facilities around your existing footprint.",
          "Portfolio strategy: when to add, when to refinance, and when the smarter move is selling.",
        ],
      },
      {
        heading: "The operator's advantage",
        body: "You have something first-time buyers don't: real operating data. We help you weaponize it — using your own expense ratios, lease-up curves, and rate history to underwrite acquisitions more accurately than any broker pro forma.",
      },
      {
        heading: "How we work with you",
        body: "A free call to understand your current portfolio and growth goals, then a defined buy box for your next acquisition. From there we support sourcing, underwriting, and negotiation as deals surface — you stay focused on operations.",
      },
    ],
  },
  "private-investors": {
    title: "Private Self-Storage Investors",
    metaTitle: "For Private Investors | Storage Hunters",
    description:
      "Deploy private capital into self-storage with institutional-grade market analysis, underwriting, and buy-side representation.",
    photo: "/photos/units-walkway.jpg",
    intro:
      "You have capital and you've heard the storage story — strong yields, recession resilience, fragmented sellers. The story is real, but the spread between a good storage deal and a bad one is wide. We bring the discipline that protects your downside.",
    sections: [
      {
        heading: "What private capital needs in this asset class",
        items: [
          "Honest underwriting: economic occupancy, normalized expenses, and realistic rate growth — not broker pro formas.",
          "Market selection that accounts for new supply, which is the #1 killer of storage returns.",
          "A clear operating plan: self-manage, third-party manage, or remote-manage with technology.",
          "Exit thinking from day one: who buys this from you, and at what cap rate?",
        ],
      },
      {
        heading: "Active or passive — know which game you're playing",
        body: "Direct ownership gives you control, depreciation, and the full upside — but it's a business, not a bond. We help you decide whether direct acquisition fits your time and risk profile, and if it does, we make sure your first acquisition is built on numbers that survive contact with reality.",
      },
      {
        heading: "How we work with you",
        body: "A free strategy call to map your capital, return targets, and involvement level into a concrete buy box. Then deal-by-deal underwriting and buy-side representation through closing.",
      },
    ],
  },
  "family-offices": {
    title: "Family Offices & Storage Allocations",
    metaTitle: "For Family Offices | Storage Hunters",
    description:
      "Build a long-term self-storage allocation with rigorous market analysis, disciplined underwriting, and buy-side representation.",
    photo: "/photos/units-floor.jpg",
    intro:
      "Self-storage has earned its place in institutional portfolios: durable cash flow, low capex relative to other asset classes, and operational upside that rewards patient capital. For a family office, the challenge isn't the thesis — it's execution at the deal level.",
    sections: [
      {
        heading: "Why storage fits long-horizon capital",
        items: [
          "Month-to-month leases re-price with inflation faster than almost any other real estate.",
          "Low tenant improvement and turnover costs protect cash flow.",
          "Fragmented market: roughly two-thirds of facilities remain independently owned — a long runway for consolidation.",
          "Proven institutional exit market: REITs and funds actively acquire stabilized portfolios.",
        ],
      },
      {
        heading: "Building the allocation deliberately",
        items: [
          "Define the mandate: stabilized yield, value-add, or development-adjacent risk.",
          "Concentrate geographically enough to build operating leverage, diversified enough to absorb a local supply shock.",
          "Underwrite every deal against the same disciplined framework so the portfolio stays coherent.",
          "Plan the management layer before the first closing, not after.",
        ],
      },
      {
        heading: "How we work with you",
        body: "A confidential call to understand the mandate, then market selection, pipeline development, underwriting, and buy-side representation — deal by deal, with full transparency into every assumption.",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(audiences).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const audience = audiences[slug];
  if (!audience) return {};
  return {
    title: audience.metaTitle,
    description: audience.description,
    alternates: { canonical: `/for/${slug}` },
  };
}

export default async function AudiencePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const audience = audiences[slug];
  if (!audience) notFound();

  return (
    <div className="flex flex-1 flex-col bg-white text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-forest-950">
          <Image
            src={audience.photo}
            alt="Self-storage facility"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="relative mx-auto w-full max-w-6xl px-6 py-20 text-center sm:py-28">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blaze-500">
              Who We Serve
            </p>
            <h1 className="mx-auto mt-3 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
              {audience.title}
            </h1>
            <div className="mt-8">
              <Link
                href="/#book"
                className="inline-block rounded-md bg-blaze-600 px-8 py-4 text-base font-semibold uppercase tracking-wide text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-blaze-500"
              >
                Book a Free Acquisition Call
              </Link>
            </div>
          </div>
        </section>

        <article className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-20">
          <p className="text-lg leading-8 text-forest-800/80">
            {audience.intro}
          </p>
          <div className="mt-12 space-y-10">
            {audience.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-semibold text-forest-900">
                  {section.heading}
                </h2>
                {section.body && (
                  <p className="mt-3 leading-7 text-forest-800/80">
                    {section.body}
                  </p>
                )}
                {section.items && (
                  <ul className="mt-4 space-y-2.5">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3 leading-7">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mt-1.5 h-4 w-4 shrink-0 text-forest-600"
                          aria-hidden="true"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <span className="text-forest-800/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-16 rounded-lg bg-forest-900 p-8 text-center sm:p-10">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Ready to start hunting?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-base leading-7 text-forest-100/80">
              Book a free acquisition call — we&apos;ll define your buy box and
              map your path to a deal. Or send your criteria through the buyer
              intake form.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/#book"
                className="rounded-md bg-blaze-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-blaze-500"
              >
                Book a Free Acquisition Call
              </Link>
              <Link
                href="/intake"
                className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
              >
                Submit Buyer Profile
              </Link>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
