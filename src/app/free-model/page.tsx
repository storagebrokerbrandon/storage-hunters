import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { LeadCaptureForm } from "@/components/lead-capture-form";
import { StarterModel } from "@/components/starter-model";

export const metadata: Metadata = {
  title: "Free Self-Storage Starter Underwriting Model | Storage Hunters",
  description:
    "Download the free starter model and learn how to estimate revenue, expenses, NOI, cap rate value, and debt coverage on any self-storage deal.",
  alternates: { canonical: "/free-model" },
};

export default function FreeModelPage() {
  return (
    <div className="flex flex-1 flex-col bg-white text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-forest-100 bg-gradient-to-b from-forest-50 to-white">
          <div className="mx-auto w-full max-w-6xl px-6 py-16 text-center sm:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blaze-600">
              Free Tool
            </p>
            <h1 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-forest-900 sm:text-5xl">
              The Starter Underwriting Model
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-forest-800/80">
              Get the free starter model and learn how to estimate revenue,
              expenses, NOI, cap rate value, and debt coverage — in about two
              minutes per deal. This is the basic screening version; the full
              model is part of Storage Hunters Pro.
            </p>
          </div>
        </section>
        <section className="py-16 sm:py-20">
          <div className="mx-auto w-full max-w-3xl px-6">
            <LeadCaptureForm
              leadType="model_lead"
              trackName="model_downloaded"
              fields={["buyerType", "budget"]}
              submitLabel="Get the Free Model"
              successTitle="Unlocked. Your starter model is below."
              successBody="Plug in any deal's basics and watch NOI, valuation, DSCR, and cash-on-cash update live."
              successChildren={<StarterModel />}
            />
            <p className="mt-6 text-center text-sm text-forest-800/60">
              Want the full model with lease-up scenarios, expansion analysis,
              and sensitivity tables?{" "}
              <a href="/pro" className="font-semibold text-blaze-600 hover:underline">
                Join the Pro waitlist &rarr;
              </a>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
