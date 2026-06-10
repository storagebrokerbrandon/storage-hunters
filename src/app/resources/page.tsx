import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Self-Storage Investor Resources | Storage Hunters",
  description:
    "Free self-storage investment resources: underwriting checklist, deal evaluation framework, market analysis framework, and acquisition strategy guide.",
  alternates: { canonical: "/resources" },
};

const guides = [
  {
    href: "/resources/underwriting-checklist",
    title: "Self-Storage Underwriting Checklist",
    description:
      "Income verification, expense normalization, physical inspection, and debt stress-testing — everything to check before you buy.",
  },
  {
    href: "/resources/deal-evaluation-framework",
    title: "Deal Evaluation Framework",
    description:
      "A staged funnel for screening deals fast: kill bad ones in 10 minutes and spend real hours only on deals that earn them.",
  },
  {
    href: "/resources/market-analysis-framework",
    title: "Market Analysis Framework",
    description:
      "Supply per capita, demand drivers, competitor shopping, and the new-supply pipeline — how to grade a market before the deal.",
  },
  {
    href: "/resources/acquisition-strategy-guide",
    title: "Acquisition Strategy Guide",
    description:
      "Define your buy box, build a sourcing engine, run pipeline math, structure financing, and close with confidence.",
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
              Free frameworks and checklists from the buy-side: how to
              underwrite facilities, grade markets, and build an acquisition
              strategy that actually closes deals.
            </p>
          </div>
        </section>
        <section className="py-16 sm:py-20">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {guides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group rounded-lg border border-forest-100 bg-white p-8 transition-all hover:-translate-y-1 hover:border-forest-200 hover:shadow-lg hover:shadow-forest-900/10"
                >
                  <h2 className="text-xl font-semibold text-forest-900 group-hover:text-forest-600">
                    {guide.title}
                  </h2>
                  <p className="mt-3 leading-7 text-forest-800/70">
                    {guide.description}
                  </p>
                  <p className="mt-5 text-sm font-semibold text-forest-600">
                    Read the guide &rarr;
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
              <Link
                href="/#book"
                className="mt-6 inline-block rounded-md bg-blaze-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-blaze-500"
              >
                Book a Free Acquisition Call
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
