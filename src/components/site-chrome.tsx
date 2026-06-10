import Link from "next/link";
const BOOKING_URL = "/#book";

export const navLinks = [
  { href: "/#who", label: "Who It's For" },
  { href: "/#services", label: "What We Do" },
  { href: "/#process", label: "Process" },
  { href: "/resources", label: "Resources" },
  { href: "/#contact", label: "Contact" },
];

export function LogoMark({ inverted = false }: { inverted?: boolean }) {
  return (
    <span
      className={`inline-flex h-8 w-8 items-center justify-center rounded-md text-sm font-bold ${
        inverted ? "bg-white text-navy-900" : "bg-navy-900 text-white"
      }`}
    >
      SH
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/95 shadow-sm shadow-navy-900/5 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-navy-900"
        >
          <LogoMark />
          <span>
            Storage <span className="text-navy-600">Hunters</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-navy-800 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-navy-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href={BOOKING_URL}
          className="rounded-md bg-navy-900 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-navy-700 hover:shadow-md"
        >
          Book a Call
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-navy-100 bg-navy-950 py-12">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
            <p className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white">
              <LogoMark inverted />
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
              className="font-semibold text-white transition-colors hover:text-navy-200"
            >
              Book a Call
            </Link>
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
  );
}
