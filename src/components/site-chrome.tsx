import Link from "next/link";
import Image from "next/image";

const BOOKING_URL = "/#book";

export const navLinks = [
  { href: "/#who", label: "Who It's For" },
  { href: "/resources", label: "Resources" },
  { href: "/pro", label: "Pro" },
  { href: "/deal-review", label: "Deal Review" },
  { href: "/intake", label: "Buyer Intake" },
];

export function LogoMark() {
  return (
    <Image
      src="/brand/mark.png"
      alt="Storage Hunters mascot"
      width={40}
      height={40}
      className="h-10 w-10 rounded-full"
    />
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-forest-100 bg-white/95 shadow-sm shadow-forest-900/5 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-forest-900"
        >
          <LogoMark />
          <span>
            Storage <span className="text-blaze-600">Hunters</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-forest-800 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-forest-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href={BOOKING_URL}
          className="rounded-md bg-blaze-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-blaze-500 hover:shadow-md"
        >
          Book a Call
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-forest-100 bg-forest-950 py-12">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
            <p className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white">
              <LogoMark />
              <span>
                Storage <span className="text-blaze-500">Hunters</span>
              </span>
            </p>
            <p className="max-w-xs text-sm leading-6 text-khaki-300/80">
              We hunt storage deals. You profit.
            </p>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-forest-200/80">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={BOOKING_URL}
              className="font-semibold text-white transition-colors hover:text-forest-200"
            >
              Book a Call
            </Link>
          </nav>
        </div>
        <div className="mt-10 flex flex-col items-center gap-3 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-forest-200/80">
            &copy; {new Date().getFullYear()} Storage Hunters. All rights
            reserved.
          </p>
          <p className="max-w-xl text-xs leading-5 text-forest-200/60">
            Nothing on this site is financial, legal, or tax advice.{" "}
            <Link href="/terms" className="underline hover:text-white">
              Terms &amp; Refunds
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
