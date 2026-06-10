import type { MetadataRoute } from "next";

const BASE = "https://www.joinstoragehunters.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: BASE, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${BASE}/intake`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE}/resources`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...[
      "underwriting-checklist",
      "deal-evaluation-framework",
      "market-analysis-framework",
      "acquisition-strategy-guide",
    ].map((slug) => ({
      url: `${BASE}/resources/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
