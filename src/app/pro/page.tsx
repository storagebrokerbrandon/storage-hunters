import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { LeadCaptureForm } from "@/components/lead-capture-form";

export const metadata: Metadata = {
  title: "Storage Hunters Pro — Investor Membership Waitlist",
  description:
    "Monthly self-storage investor membership: market breakdowns, underwriting tools, deal reviews, member-only checklists, and early access to the AI deal analyzer.",
  alternates: { canonical: "/pro" },
};

const benefits = [
  "Monthly self-storage market breakdowns",
  "Deal review templates",
  "Underwriting tools and the full financial model",
  "Member-only acquisition checklists",
  "Live group deal reviews",
  "Early access to the AI deal analyzer",
  "Buyer and operator network",
];

export default function ProPage() {
  return (
    <div className="flex flex-1 flex-col bg-white text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-forest-950">
          <Image
            src="/photos/units-walkway.jpg"
            alt="Self-storage facility interior"
            fill
            priority
            className="object-cover opacity-25"
          />
          <div className="relative mx-auto w-full max-w-6xl px-6 py-20 text-center sm:py-28">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blaze-500">
              Storage Hunters Pro
            </p>
            <h1 className="mx-auto mt-3 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
              The membership for serious storage buyers
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-khaki-200/90">
              Tools, market intel, and deal reviews — everything you need to
              hunt smarter, every month.
            </p>
            <p className="mx-auto mt-6 inline-block rounded-full border border-blaze-500/50 bg-forest-900/80 px-5 py-2 text-sm font-semibold text-blaze-500">
              Founding Member Waitlist — target launch price $49/month
            </p>
          </div>
        </section>
        <section className="py-16 sm:py-20">
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-forest-900">
                What members get
              </h2>
              <ul className="mt-6 space-y-3">
                {benefits.map((item) => (
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
                Founding members lock the launch price for life and shape what
                gets built first. No payment now — joining the waitlist just
                holds your spot.
              </p>
            </div>
            <div>
              <LeadCaptureForm
                leadType="pro_waitlist"
                trackName="pro_waitlist_joined"
                fields={["buyerType"]}
                submitLabel="Join the Pro Waitlist"
                successTitle="You're on the founding list."
                successBody="We'll email you before launch with founding-member pricing. Until then, grab the free tools on the resources page."
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
