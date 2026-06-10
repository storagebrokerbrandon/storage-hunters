import Script from "next/script";

const BOOKING_URL = "#book";
const CALENDLY_URL =
  "https://calendly.com/storagebrokerbrandon/storage-hunters-acquisition-call";
const CONTACT_EMAIL = "storagebrokerbrandon@gmail.com";

const audiences = [
  {
    title: "First-Time Buyers",
    description:
      "Enter the asset class with a clear framework for evaluating your first facility.",
  },
  {
    title: "Existing Operators",
    description:
      "Expand your portfolio with disciplined underwriting and market intelligence.",
  },
  {
    title: "Private Investors",
    description:
      "Deploy capital into self-storage with institutional-grade acquisition support.",
  },
  {
    title: "Family Offices",
    description:
      "Build long-term storage allocations backed by rigorous deal analysis.",
  },
];

const services = [
  {
    title: "Deal Underwriting",
    description:
      "Stress-test revenue, expenses, and value-add assumptions before you commit capital.",
  },
  {
    title: "Market Selection",
    description:
      "Identify markets with favorable supply, demand, and demographic fundamentals.",
  },
  {
    title: "Financing Assumptions",
    description:
      "Model realistic debt structures, rates, and leverage for today's environment.",
  },
  {
    title: "Acquisition Strategy",
    description:
      "Define a repeatable buy box and pipeline process aligned with your goals.",
  },
  {
    title: "Buy-Side Representation",
    description:
      "Get an advocate in your corner from initial offer through closing.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Schedule a Call",
    description:
      "Book a free acquisition call to discuss your goals, capital, and timeline.",
  },
  {
    step: "02",
    title: "Define Your Buy Box",
    description:
      "Establish target markets, facility size, price range, and return criteria.",
  },
  {
    step: "03",
    title: "Review Opportunities",
    description:
      "Evaluate deals against your criteria with disciplined underwriting.",
  },
  {
    step: "04",
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

const navLinks = [
  { href: "#who", label: "Who It's For" },
  { href: "#services", label: "What We Do" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <a href="#" className="text-lg font-bold tracking-tight text-navy-900">
            Storage <span className="text-navy-600">Hunters</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-navy-800 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-navy-600"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={BOOKING_URL}
            className="rounded-md bg-navy-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-navy-700"
          >
            Book a Call
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-navy-100 bg-gradient-to-b from-navy-50 to-white">
          <div className="mx-auto w-full max-w-6xl px-6 py-24 text-center sm:py-32">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-navy-600">
              Self-Storage Acquisition Advisory
            </p>
            <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
              Looking to Buy Self-Storage?
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-navy-800/80">
              Storage Hunters helps investors identify opportunities, evaluate
              markets, underwrite deals, and build smarter acquisition
              strategies.
            </p>
            <div className="mt-10">
              <a
                href={BOOKING_URL}
                className="inline-block rounded-md bg-navy-900 px-8 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-navy-700"
              >
                Book a Free Acquisition Call
              </a>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section id="who" className="scroll-mt-16 py-20 sm:py-24">
          <div className="mx-auto w-full max-w-6xl px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy-600">
              Who This Is For
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Built for serious self-storage buyers
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {audiences.map((audience) => (
                <div
                  key={audience.title}
                  className="rounded-lg border border-navy-100 bg-white p-6 transition-shadow hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold text-navy-900">
                    {audience.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-navy-800/70">
                    {audience.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Help With */}
        <section
          id="services"
          className="scroll-mt-16 border-y border-navy-100 bg-navy-50/50 py-20 sm:py-24"
        >
          <div className="mx-auto w-full max-w-6xl px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy-600">
              What We Help With
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Acquisition support across the full deal lifecycle
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-lg border border-navy-100 bg-white p-6"
                >
                  <div className="mb-4 h-1 w-10 rounded bg-navy-600" />
                  <h3 className="text-lg font-semibold text-navy-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-navy-800/70">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="scroll-mt-16 py-20 sm:py-24">
          <div className="mx-auto w-full max-w-6xl px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy-600">
              Our Process
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              A disciplined path from strategy to closing
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <div key={step.step}>
                  <span className="text-sm font-bold tracking-widest text-navy-200">
                    {step.step}
                  </span>
                  <h3 className="mt-2 border-t-2 border-navy-900 pt-4 text-lg font-semibold text-navy-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-navy-800/70">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calendly */}
        <section
          id="book"
          className="scroll-mt-16 border-y border-navy-100 bg-navy-900 py-20 sm:py-24"
        >
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy-200">
                Get Started
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Book a Free Acquisition Call
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-navy-100/80">
                Pick a time that works for you. We&apos;ll discuss your goals
                and map out your acquisition strategy.
              </p>
            </div>
            <div
              id="calendly-embed"
              className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-lg bg-white shadow-lg"
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
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy-600">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                Have a question first?
              </h2>
              <p className="mt-6 text-lg leading-8 text-navy-800/80">
                Prefer email? Reach me at{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-semibold text-navy-600 underline-offset-4 hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-navy-100 bg-navy-950 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-6 text-center">
          <p className="text-lg font-bold tracking-tight text-white">
            Storage <span className="text-navy-200">Hunters</span>
          </p>
          <p className="text-sm text-navy-200/80">
            &copy; {new Date().getFullYear()} Storage Hunters. All rights
            reserved.
          </p>
          <p className="max-w-xl text-xs leading-5 text-navy-200/60">
            Storage Hunters is an independent platform and is not affiliated
            with RIPCO Self Storage.
          </p>
        </div>
      </footer>
    </div>
  );
}
