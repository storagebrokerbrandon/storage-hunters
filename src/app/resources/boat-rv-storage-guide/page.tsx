import type { Metadata } from "next";
import { GuidePage } from "@/components/guide";

export const metadata: Metadata = {
  title: "Boat & RV Storage Acquisition Guide | Storage Hunters",
  description:
    "How to evaluate boat and RV storage acquisitions: demand drivers, product types, revenue per acre, and the risks traditional storage buyers miss.",
  alternates: { canonical: "/resources/boat-rv-storage-guide" },
};

export default function Page() {
  return (
    <GuidePage
      eyebrow="Investor Resource"
      title="Boat & RV Storage Acquisition Guide"
      intro="Boat and RV storage is the land business wearing a storage costume. The economics, the customer, and the risks are different from mini-storage — and buyers who underwrite it like ordinary self-storage get burned or leave money on the table."
      sections={[
        {
          heading: "Why the niche is growing",
          items: [
            "RV and boat ownership keeps climbing while HOAs and municipalities increasingly ban driveway parking.",
            "Toys are getting bigger — modern rigs don't fit in garages.",
            "Supply is thin: most markets have far less dedicated vehicle storage than demand supports.",
            "Customers are sticky: once a 40-foot rig is parked, it rarely moves for a $15/month savings.",
          ],
        },
        {
          heading: "Know the product ladder",
          items: [
            "Open lot / gravel: cheapest to build, lowest rents, most exposed to new competition.",
            "Canopy / covered: meaningful rent premium for modest cost — often the best return on incremental capital.",
            "Fully enclosed: garage-style units commanding premium rents from premium toys.",
            "Luxury condo storage: club-style buildings, sometimes sold as units — a different business entirely.",
          ],
        },
        {
          heading: "Underwriting differences from mini-storage",
          items: [
            "Think revenue per acre, not per square foot — land efficiency drives everything.",
            "Lower expense ratios (no climate control, minimal buildings) but also lower absolute rents per space.",
            "Seasonality is real: lake markets churn in fall, snowbird markets in spring.",
            "Check zoning hard: outdoor vehicle storage is often a conditional use, and your expansion plans live or die on it.",
          ],
        },
        {
          heading: "The risks buyers miss",
          items: [
            "Low barriers on open-lot product: any farmer with road frontage is potential competition.",
            "Environmental: fuel, batteries, and decades-old fill on rural land — do your Phase I.",
            "Insurance and liability for stored vehicles differ from household goods.",
            "Exit liquidity: fewer institutional buyers chase pure vehicle storage; your buyer pool is thinner.",
          ],
        },
        {
          heading: "Where the money is made",
          body: "The classic play: buy underpriced land or an under-managed lot in the path of growth, add covered and enclosed product in phases as demand proves out, and operate it with real software and rate management. You're manufacturing institutional-quality income on land the market priced as dirt.",
        },
      ]}
    />
  );
}
