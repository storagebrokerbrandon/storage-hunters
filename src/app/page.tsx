import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { LeadCaptureForm } from "@/components/lead-capture-form";
import { CTAButton } from "@/components/cta-button";

const BOOKING_URL = "#book";
const CALENDLY_URL =
  "https://calendly.com/storagebrokerbrandon/storage-hunters-acquisition-call";
const CONTACT_EMAIL = "storagebrokerbrandon@gmail.com";

function CardIcon({ path }: { path: string }) {
  return (
    <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-forest-50 text-forest-600">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d={path} />
      </svg>
    </span>
  );
}

const audiences = [
  {
    title: "First-Time Buyers",
    href: "/for/first-time-buyers",
    description:
      "Enter the asset class with a clear framework for evaluating your first facility.",
    icon: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M19 8v6 M22 11h-6",
  },
  {
    title: "Existing Operators",
    href: "/for/existing-operators",
    description:
      "Expand your portfolio with disciplined underwriting and market intelligence.",
    icon: "M3 21h18 M5 21V7l7-4 7 4v14 M9 9h1 M9 13h1 M9 17h1 M14 9h1 M14 13h1 M14 17h1",
  },
  {
    title: "Private Investors",
    href: "/for/private-investors",
    description:
      "Deploy capital into self-storage with institutional-grade acquisition support.",
    icon: "M12 1v22 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
  },
  {
    title: "Family Offices",
    href: "/for/family-offices",
    description:
      "Build long-term storage allocations backed by rigorous deal analysis.",
    icon: "M3 21h18 M4 21V10l8-6 8 6v11 M9 21v-6a3 3 0 0 1 6 0v6",
  },
];

const services = [
  {
    title: "Deal Underwriting",
    description:
      "Stress-test revenue, expenses, and value-add assumptions before you commit capital.",
    icon: "M9 7h6 M9 11h6 M9 15h3 M5 3h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z",
  },
  {
    title: "Market Selection",
    description:
      "Identify markets with favorable supply, demand, and demographic fundamentals.",
    icon: "M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  },
  {
    title: "Financing Assumptions",
    description:
      "Model realistic debt structures, rates, and leverage for today's environment.",
    icon: "M19 5L5 19 M6.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z M17.5 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  },
  {
    title: "Acquisition Strategy",
    description:
      "Define a repeatable buy box and pipeline process aligned with your goals.",
    icon: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  },
  {
    title: "Buy-Side Representation",
    description:
      "Get an advocate in your corner from initial offer through closing.",
    icon: "M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8z M9 12l2 2 4-4",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Schedule a Call",
    description:
      "Book a free acquisition call to discuss your goals, capital, and timeline.",
  },
  {
    step: "2",
    title: "Define Your Buy Box",
    description:
      "Establish target markets, facility size, price range, and return criteria.",
  },
  {
    step: "3",
    title: "Review Opportunities",
    description:
      "Evaluate deals against your criteria with disciplined underwriting.",
  },
  {
    step: "4",
    title: "Execute with Confidence",
    description:
      "Move from offer to close with a clear strategy and experienced support.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Storage Hunters",
  url: "https://www.joinstoragehunters.com",
  email: CONTACT_EMAIL,
  description:
    "Storage Hunters helps investors identify self-storage opportunities, evaluate markets, underwrite deals, and build smarter acquisition strategies.",
  areaServed: "United States",
  serviceType: [
    "Deal Underwriting",
    "Market Selection",
    "Financing Assumptions",
    "Acquisition Strategy",
    "Buy-Side Representation",
  ],
};

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-forest-800 bg-gradient-to-b from-forest-950 to-forest-900">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(195,176,139,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(195,176,139,0.07) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage:
                "radial-gradient(ellipse 80% 70% at 50% 30%, black, transparent)",
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto w-full max-w-6xl px-6 py-14 text-center sm:py-16">
            <Image
              src="/brand/logo-hero.png"
              alt="Storage Hunters"
              width={300}
              height={300}
              priority
              className="animate-fade-up mx-auto mb-6 h-40 w-auto drop-shadow-2xl sm:h-48"
            />
            <h1 className="animate-fade-up mx-auto max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Find Better <span className="text-blaze-600">Self-Storage</span>{" "}
              Deals
            </h1>
            <p className="animate-fade-up animation-delay-150 mx-auto mt-4 max-w-md text-base leading-7 text-khaki-200/80">
              Buy-side support for storage investors — from deal search to
              closing.
            </p>
            <div className="animate-fade-up animation-delay-300 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/intake"
                className="inline-block rounded-md bg-blaze-600 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-forest-950/40 transition-all hover:-translate-y-0.5 hover:bg-blaze-500 hover:shadow-xl"
              >
                Submit Buyer Profile
              </Link>
              <Link
                href="/free-checklist"
                className="inline-block rounded-md border border-white/30 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
              >
                Free Checklist
              </Link>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section id="who" className="scroll-mt-16 py-20 sm:py-24">
          <div className="mx-auto w-full max-w-6xl px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blaze-600">
              Who This Is For
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-forest-900 sm:text-4xl">
              Built for serious self-storage buyers
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {audiences.map((audience) => (
                <Link
                  key={audience.title}
                  href={audience.href}
                  className="group rounded-lg border border-forest-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-blaze-600/40 hover:shadow-lg hover:shadow-forest-900/10"
                >
                  <CardIcon path={audience.icon} />
                  <h3 className="text-lg font-semibold text-forest-900 group-hover:text-blaze-700">
                    {audience.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-forest-800/70">
                    {audience.description}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-blaze-600">
                    Learn more &rarr;
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* What We Help With */}
        <section
          id="services"
          className="scroll-mt-16 border-y border-forest-100 bg-forest-50/50 py-20 sm:py-24"
        >
          <div className="mx-auto w-full max-w-6xl px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blaze-600">
              What We Help With
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-forest-900 sm:text-4xl">
              Acquisition support across the full deal lifecycle
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-lg border border-forest-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-forest-200 hover:shadow-lg hover:shadow-forest-900/10"
                >
                  <CardIcon path={service.icon} />
                  <h3 className="text-lg font-semibold text-forest-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-forest-800/70">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead magnet */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blaze-600">
                Free Download
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-forest-900 sm:text-4xl">
                Free Self-Storage Underwriting Checklist
              </h2>
              <p className="mt-4 leading-7 text-forest-800/80">
                Before you make an offer, know what to check: rent roll, T-12,
                taxes, insurance, occupancy, unit mix, market supply, expansion
                upside, and debt assumptions.
              </p>
              <p className="mt-4 leading-7 text-forest-800/80">
                Kill bad deals faster. Know what to offer on the good ones.
              </p>
            </div>
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
        </section>

        {/* Choose Your Hunting Lane */}
        <section className="border-y border-forest-100 bg-forest-50/50 py-20 sm:py-24">
          <div className="mx-auto w-full max-w-6xl px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blaze-600">
              Pick Your Path
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-forest-900 sm:text-4xl">
              Choose Your Hunting Lane
            </h2>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "Free Buyer Profile",
                  description:
                    "For serious buyers who want deal flow and acquisition support. Define your buy box and get on the list.",
                  cta: "Submit Buyer Profile",
                  href: "/intake",
                  event: "lane_buyer_profile",
                },
                {
                  title: "Storage Hunters Pro",
                  description:
                    "Monthly investor membership: templates, market breakdowns, deal reviews, and member-only resources.",
                  cta: "Join the Waitlist",
                  href: "/pro",
                  event: "lane_pro",
                },
                {
                  title: "Deal Review",
                  description:
                    "Already have a deal? Send it over and we'll stress-test the numbers before you make an offer.",
                  cta: "Request Deal Review",
                  href: "/deal-review",
                  event: "lane_deal_review",
                },
              ].map((lane) => (
                <div
                  key={lane.title}
                  className="flex flex-col rounded-lg border border-forest-100 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-forest-900/10"
                >
                  <h3 className="text-xl font-semibold text-forest-900">
                    {lane.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-forest-800/70">
                    {lane.description}
                  </p>
                  <div className="mt-6">
                    <CTAButton
                      href={lane.href}
                      event={lane.event}
                      className="w-full text-center"
                    >
                      {lane.cta}
                    </CTAButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo CTA band */}
        <section className="relative overflow-hidden bg-forest-950">
          <Image
            src="/photos/units-corridor.jpg"
            alt="Self-storage facility interior with rows of storage units"
            fill
            className="object-cover opacity-25"
          />
          <div className="relative mx-auto w-full max-w-6xl px-6 py-20 text-center sm:py-24">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Your next facility is out there.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-khaki-200/90">
              Let&apos;s define your buy box and go hunt it down.
            </p>
            <a
              href={BOOKING_URL}
              className="mt-8 inline-block rounded-md bg-blaze-600 px-8 py-4 text-base font-semibold uppercase tracking-wide text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-blaze-500"
            >
              Book a Free Acquisition Call
            </a>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="scroll-mt-16 py-20 sm:py-24">
          <div className="mx-auto w-full max-w-6xl px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blaze-600">
              Our Process
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-forest-900 sm:text-4xl">
              A disciplined path from strategy to closing
            </h2>
            <div className="relative mt-12">
              <div
                className="absolute left-0 right-0 top-6 hidden h-px bg-forest-100 lg:block"
                aria-hidden="true"
              />
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {processSteps.map((step) => (
                  <div key={step.step} className="relative">
                    <div className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-forest-900 bg-white text-lg font-bold text-forest-900">
                      {step.step}
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-forest-900">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-forest-800/70">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-14 text-center">
              <a
                href={BOOKING_URL}
                className="inline-block rounded-md bg-blaze-600 px-8 py-4 text-base font-semibold uppercase tracking-wide text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-blaze-500"
              >
                Start with Step 1 — Book Your Call
              </a>
            </div>
          </div>
        </section>

        {/* Calendly */}
        <section
          id="book"
          className="relative scroll-mt-16 overflow-hidden border-y border-forest-100 bg-forest-900 py-20 sm:py-24"
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto w-full max-w-6xl px-6">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-khaki-300">
                Get Started
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Looking to Acquire Self-Storage?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-forest-100/80">
                If you&apos;re actively looking to buy, Storage Hunters can
                help define your buy box, review opportunities, evaluate
                markets, and support you through the acquisition process. Book
                a free call below.
              </p>
            </div>
            <div
              id="calendly-embed"
              className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-lg bg-white shadow-2xl shadow-forest-950/40"
            >
              <div
                className="calendly-inline-widget"
                data-url={CALENDLY_URL}
                style={{ minWidth: "320px", height: "700px" }}
              />
            </div>
            <Script
              src="https://assets.calendly.com/assets/external/widget.js"
              strategy="lazyOnload"
            />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-16 py-20 sm:py-24">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blaze-600">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-forest-900 sm:text-4xl">
                Have a question first?
              </h2>
              <p className="mt-6 text-lg leading-8 text-forest-800/80">
                Prefer email? Reach me at{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-semibold text-forest-600 underline-offset-4 hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p className="mt-4 text-base leading-7 text-forest-800/70">
                Serious about buying?{" "}
                <Link
                  href="/intake"
                  className="font-semibold text-blaze-600 underline-offset-4 hover:underline"
                >
                  Submit your buyer profile &rarr;
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
