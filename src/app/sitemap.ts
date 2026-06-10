import type { MetadataRoute } from "next";

const BASE = "https://www.joinstoragehunters.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: BASE, lastModified, changeFrequency: "monthly", priority: 1 },
    ...["intake", "free-checklist", "free-model", "pro", "deal-review"].map(
      (slug) => ({
        url: `${BASE}/${slug}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      })
    ),
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
      "how-to-value-a-self-storage-facility",
      "cap-rates-explained",
      "rent-roll-red-flags",
      "t12-expense-normalization",
      "boat-rv-storage-guide",
    ].map((slug) => ({
      url: `${BASE}/resources/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...[
      "first-time-buyers",
      "existing-operators",
      "private-investors",
      "family-offices",
    ].map((slug) => ({
      url: `${BASE}/for/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
