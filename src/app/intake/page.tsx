import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { IntakeForm } from "@/components/intake-form";

export const metadata: Metadata = {
  title: "Buyer Intake | Storage Hunters",
  description:
    "Tell us your self-storage buy box — markets, budget, equity, and financing status — and we'll start hunting deals that fit.",
  alternates: { canonical: "/intake" },
};

export default function IntakePage() {
  return (
    <div className="flex flex-1 flex-col bg-white text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-forest-100 bg-gradient-to-b from-forest-50 to-white">
          <div className="mx-auto w-full max-w-6xl px-6 py-16 text-center sm:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blaze-600">
              Buyer Intake
            </p>
            <h1 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-forest-900 sm:text-5xl">
              Tell us what you&apos;re hunting
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-forest-800/80">
              Give us your buy box — markets, budget, and financing — and
              we&apos;ll come to your call prepared, or reach out when deals
              match your criteria.
            </p>
          </div>
        </section>
        <section className="py-16 sm:py-20">
          <div className="mx-auto w-full max-w-3xl px-6">
            <IntakeForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
