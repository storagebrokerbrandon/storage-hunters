import Script from "next/script";

const BOOKING_URL = "#book";
const CALENDLY_URL =
  "https://calendly.com/storagebrokerbrandon/storage-hunters-acquisition-call";
const CONTACT_EMAIL = "storagebrokerbrandon@gmail.com";

function CardIcon({ path }: { path: string }) {
  return (
    <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy-50 text-navy-600">
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
    description:
      "Enter the asset class with a clear framework for evaluating your first facility.",
    icon: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M19 8v6 M22 11h-6",
  },
  {
    title: "Existing Operators",
    description:
      "Expand your portfolio with disciplined underwriting and market intelligence.",
    icon: "M3 21h18 M5 21V7l7-4 7 4v14 M9 9h1 M9 13h1 M9 17h1 M14 9h1 M14 13h1 M14 17h1",
  },
  {
    title: "Private Investors",
    description:
      "Deploy capital into self-storage with institutional-grade acquisition support.",
    icon: "M12 1v22 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
  },
  {
    title: "Family Offices",
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

const navLinks = [
  { href: "#who", label: "Who It's For" },
  { href: "#services", label: "What We Do" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-8 w-8 items-center justify-center rounded-md bg-navy-900 text-sm font-bold text-white ${className ?? ""}`}
    >
      SH
    </span>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/95 shadow-sm shadow-navy-900/5 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <a
            href="#"
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-navy-900"
          >
            <LogoMark />
            <span>
              Storage <span className="text-navy-600">Hunters</span>
            </span>
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
            className="rounded-md bg-navy-900 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-navy-700 hover:shadow-md"
          >
            Book a Call
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-navy-100 bg-gradient-to-b from-navy-50 to-white">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(10,34,64,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,34,64,0.05) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage:
                "radial-gradient(ellipse 80% 70% at 50% 30%, black, transparent)",
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto w-full max-w-6xl px-6 py-24 text-center sm:py-32">
            <p className="animate-fade-up mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-navy-600">
              Self-Storage Acquisition Advisory
            </p>
            <h1 className="animate-fade-up mx-auto max-w-3xl text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
              Looking to Buy Self-Storage?
            </h1>
            <p className="animate-fade-up animation-delay-150 mx-auto mt-6 max-w-2xl text-lg leading-8 text-navy-800/80">
              Storage Hunters helps investors identify opportunities, evaluate
              markets, underwrite deals, and build smarter acquisition
              strategies.
            </p>
            <div className="animate-fade-up animation-delay-300 mt-10 flex flex-col items-center gap-4">
              <a
                href={BOOKING_URL}
                className="inline-block rounded-md bg-navy-900 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-navy-900/20 transition-all hover:-translate-y-0.5 hover:bg-navy-700 hover:shadow-xl hover:shadow-navy-900/25"
              >
                Book a Free Acquisition Call
              </a>
              <p className="text-sm text-navy-800/60">
                Free 30-minute call &middot; No obligation
              </p>
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
                  className="rounded-lg border border-navy-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-navy-200 hover:shadow-lg hover:shadow-navy-900/10"
                >
                  <CardIcon path={audience.icon} />
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
                  className="rounded-lg border border-navy-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-navy-200 hover:shadow-lg hover:shadow-navy-900/10"
                >
                  <CardIcon path={service.icon} />
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
            <div className="relative mt-12">
              <div
                className="absolute left-0 right-0 top-6 hidden h-px bg-navy-100 lg:block"
                aria-hidden="true"
              />
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {processSteps.map((step) => (
                  <div key={step.step} className="relative">
                    <div className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-navy-900 bg-white text-lg font-bold text-navy-900">
                      {step.step}
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-navy-900">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-navy-800/70">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Calendly */}
        <section
          id="book"
          className="relative scroll-mt-16 overflow-hidden border-y border-navy-100 bg-navy-900 py-20 sm:py-24"
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
              className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-lg bg-white shadow-2xl shadow-navy-950/40"
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
      <footer className="border-t border-navy-100 bg-navy-950 py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
              <p className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white text-sm font-bold text-navy-900">
                  SH
                </span>
                <span>
                  Storage <span className="text-navy-200">Hunters</span>
                </span>
              </p>
              <p className="max-w-xs text-sm leading-6 text-navy-200/70">
                Smarter self-storage acquisitions, from first call to closing.
              </p>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-navy-200/80">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={BOOKING_URL}
                className="font-semibold text-white transition-colors hover:text-navy-200"
              >
                Book a Call
              </a>
            </nav>
          </div>
          <div className="mt-10 flex flex-col items-center gap-3 border-t border-white/10 pt-8 text-center">
            <p className="text-sm text-navy-200/80">
              &copy; {new Date().getFullYear()} Storage Hunters. All rights
              reserved.
            </p>
            <p className="max-w-xl text-xs leading-5 text-navy-200/60">
              Storage Hunters is an independent platform and is not affiliated
              with RIPCO Self Storage.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
