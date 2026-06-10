"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/track";

const variants = {
  primary:
    "rounded-md bg-blaze-600 text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-blaze-500",
  outline:
    "rounded-md border border-white/30 text-white transition-colors hover:bg-white/10",
  dark: "rounded-md bg-forest-900 text-white transition-colors hover:bg-forest-800",
} as const;

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
} as const;

export function CTAButton({
  href,
  event,
  variant = "primary",
  size = "md",
  className = "",
  children,
}: {
  href: string;
  event: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={() => trackEvent("cta_click", { cta: event, href })}
      className={`inline-block font-semibold uppercase tracking-wide ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
