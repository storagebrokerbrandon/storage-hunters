import type { Metadata } from "next";
import { GuidePage } from "@/components/guide";

export const metadata: Metadata = {
  title: "Cap Rates Explained for Self-Storage Buyers | Storage Hunters",
  description:
    "What cap rates actually mean for self-storage buyers: going-in vs. stabilized vs. exit cap rates, what moves them, and how sellers use them against you.",
  alternates: { canonical: "/resources/cap-rates-explained" },
};

export default function Page() {
  return (
    <GuidePage
      eyebrow="Investor Resource"
      title="Cap Rates Explained for Self-Storage Buyers"
      intro="The cap rate is the most used and most abused number in storage deals. It's just NOI divided by price — but which NOI, and whose price, changes everything."
      sections={[
        {
          heading: "The three cap rates in every deal",
          items: [
            "Going-in cap: actual in-place NOI ÷ purchase price. The only one based on facts.",
            "Stabilized cap (yield-on-cost): projected NOI after your improvements ÷ total cost including capex. This is your business plan in one number.",
            "Exit cap: the rate you assume a buyer pays when you sell. Small changes here swing your returns more than almost anything else.",
          ],
        },
        {
          heading: "How sellers play the game",
          items: [
            "Quoting a cap rate on pro forma NOI — future income at today's price. You're buying their plan and paying them for executing it.",
            "Quoting NOI without a management fee or with last decade's tax bill.",
            "Comparing their deal to trades in stronger markets or better asset quality.",
            "The fix is always the same: compute the going-in cap on YOUR rebuilt NOI.",
          ],
        },
        {
          heading: "What actually moves cap rates",
          items: [
            "Interest rates: debt cost sets the floor — buyers can't pay 6% caps with 7.5% debt forever (negative leverage).",
            "Market quality: population growth and supply constraints compress caps; tertiary markets trade wider.",
            "Asset quality: new climate-controlled product trades tighter than 1980s drive-up.",
            "Deal size: institutional-sized deals attract cheaper capital and tighter caps.",
          ],
        },
        {
          heading: "Using cap rates like a buyer",
          body: "Demand a spread: your stabilized yield-on-cost should sit comfortably above the market cap rate — that spread is your compensation for doing the work and taking the risk. And assume your exit cap is higher than your entry cap; if the deal only works with cap compression, it's a bet on the market, not the deal.",
        },
      ]}
    />
  );
}
