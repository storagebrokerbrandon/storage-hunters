import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export type GuideSection = {
  heading: string;
  body?: string;
  items?: string[];
};

export function GuidePage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: GuideSection[];
}) {
  return (
    <div className="flex flex-1 flex-col bg-white text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <article className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-20">
          <Link
            href="/resources"
            className="text-sm font-medium text-forest-600 hover:underline"
          >
            &larr; All Investor Resources
          </Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-blaze-600">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-forest-900 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-forest-800/80">{intro}</p>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
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
              Want help applying this to a real deal?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-base leading-7 text-forest-100/80">
              Book a free acquisition call and we&apos;ll walk through your
              market, your buy box, and your next deal together.
            </p>
            <Link
              href="/#book"
              className="mt-6 inline-block rounded-md bg-blaze-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-blaze-500"
            >
              Book a Free Acquisition Call
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
