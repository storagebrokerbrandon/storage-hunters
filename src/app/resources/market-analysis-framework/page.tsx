import type { Metadata } from "next";
import { GuidePage } from "@/components/guide";

export const metadata: Metadata = {
  title: "Self-Storage Market Analysis Framework | Storage Hunters",
  description:
    "How to analyze a self-storage market before buying: supply per capita, demand drivers, competitor rates, trade-area definition, and the new-supply pipeline.",
  alternates: { canonical: "/resources/market-analysis-framework" },
};

export default function MarketAnalysisFrameworkPage() {
  return (
    <GuidePage
      eyebrow="Investor Resource"
      title="Self-Storage Market Analysis Framework"
      intro="A great facility in an oversupplied market is a bad investment, and an average facility in a starving market can be a phenomenal one. Market analysis is how you tell the difference — and it's mostly free if you know where to look."
      sections={[
        {
          heading: "1. Define the real trade area",
          body: "Most storage demand comes from a short drive of the facility — commonly a 3-to-5-mile radius in suburban markets, tighter in dense urban areas, wider in rural ones. Analyze the radius your customers actually come from, not a city-wide average that smooths over the local story.",
        },
        {
          heading: "2. Measure supply per capita",
          items: [
            "Total net rentable storage square feet in the trade area ÷ population = square feet per capita.",
            "Compare against the national benchmark and, more importantly, against similar markets in the region.",
            "Raw oversupply isn't automatically fatal — check whether existing facilities are full anyway.",
            "Undersupply isn't automatically golden — confirm there's actual demand, not just absence of product.",
          ],
        },
        {
          heading: "3. Read the demand drivers",
          items: [
            "Population and household growth over the last 5–10 years and projected forward.",
            "Housing mix: apartments, smaller homes, and transitions (moves, downsizing) drive storage usage.",
            "Major employers, military bases, and universities — stable churn engines.",
            "Life-event drivers are recession-resistant: the four D's (downsizing, dislocation, divorce, death) don't stop in a downturn.",
          ],
        },
        {
          heading: "4. Shop the competition",
          items: [
            "Call or visit every competitor in the trade area and record street rates by unit size.",
            "Ask about availability — 'we only have one 10x10 left' is occupancy data.",
            "Note who's institutional (REIT-operated) vs. mom-and-pop: it shapes rate behavior and your management edge.",
            "Check their reviews, websites, and ability to rent online — weak operators are your rate umbrella and your acquisition targets.",
          ],
        },
        {
          heading: "5. Map the new-supply pipeline",
          items: [
            "Search municipal planning and permit records for storage projects in process.",
            "Drive the trade area for land clearing and construction signage.",
            "A facility delivered next year hits your lease-up and rate growth assumptions directly.",
            "Ask the planning department how storage-friendly zoning is — hard-to-build markets protect your investment.",
          ],
        },
        {
          heading: "6. Synthesize: rate the market before the deal",
          body: "Score the trade area on supply, demand trajectory, competition quality, and pipeline risk before you score the facility. A market grade sets the ceiling on any deal in it — underwriting cannot fix a market that's working against you.",
        },
      ]}
    />
  );
}
