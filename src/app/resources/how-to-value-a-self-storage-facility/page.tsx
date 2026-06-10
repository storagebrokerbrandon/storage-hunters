import type { Metadata } from "next";
import { GuidePage } from "@/components/guide";

export const metadata: Metadata = {
  title: "How to Value a Self-Storage Facility | Storage Hunters",
  description:
    "How self-storage facilities are actually valued: NOI, cap rates, price per square foot, replacement cost, and the adjustments buyers get wrong.",
  alternates: { canonical: "/resources/how-to-value-a-self-storage-facility" },
};

export default function Page() {
  return (
    <GuidePage
      eyebrow="Investor Resource"
      title="How to Value a Self-Storage Facility"
      intro="Storage facilities trade on income, not bricks. If you can build an honest NOI and apply the right cap rate, you can value almost any facility in the country — and know when a seller's price is a fantasy."
      sections={[
        {
          heading: "The core formula: NOI ÷ cap rate",
          body: "Value = net operating income divided by the market capitalization rate. A facility producing $200,000 of NOI in a 6.5% cap market is worth roughly $3.08M. Every fight about price is really a fight about one of those two numbers — and sellers inflate NOI while compressing the cap rate.",
        },
        {
          heading: "Build the NOI yourself",
          items: [
            "Start from actual collections (economic occupancy), not the rent roll's gross potential.",
            "Use trailing-12 actuals, weighted toward the most recent quarter.",
            "Rebuild expenses: re-assessed taxes, a real insurance quote, market payroll, and a management fee even if you'll self-manage.",
            "Exclude the seller's one-time items, but add back the recurring costs they ran through other entities.",
          ],
        },
        {
          heading: "Sanity-check with price per square foot",
          body: "Divide price by net rentable square feet and compare against recent sales and replacement cost. If you're paying well above what it costs to build new in that market, you need a reason new supply can't undercut you — zoning, land scarcity, or an irreplaceable location.",
        },
        {
          heading: "Adjust for the story",
          items: [
            "Lease-up deals: value on stabilized NOI minus the cost and risk of getting there — not on day-one income alone, and not on the seller's stabilized fantasy either.",
            "Expansion upside: pay for entitled, buildable expansion only if the market can absorb it; pay nothing for 'potential.'",
            "Deferred maintenance: roofs, doors, and asphalt come straight off the price.",
            "Mom-and-pop mismanagement: below-market rents and no online presence are real upside — but you pay for in-place income, not your own future work.",
          ],
        },
        {
          heading: "The number that matters: your max offer",
          body: "Work backwards from your required return. Set your minimum acceptable yield-on-cost, plug in your rebuilt NOI plus capex, and let that produce the highest price you can pay. Negotiate from your number, not theirs.",
        },
      ]}
    />
  );
}
