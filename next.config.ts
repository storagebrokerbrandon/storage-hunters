import type { NextConfig } from "next";

const securityHeaders = [
  // Force HTTPS for a year, including subdomains
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  // Don't let browsers guess content types
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Nobody gets to put this site in an iframe (clickjacking)
  { key: "X-Frame-Options", value: "DENY" },
  // Don't leak full URLs to other sites
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Lock down browser features we don't use
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
