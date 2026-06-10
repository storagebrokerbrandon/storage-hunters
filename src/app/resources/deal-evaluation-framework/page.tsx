import type { Metadata } from "next";
import { GuidePage } from "@/components/guide";

export const metadata: Metadata = {
  title: "Self-Storage Deal Evaluation Framework | Storage Hunters",
  description:
    "A staged framework for evaluating self-storage acquisitions: quick screen, revenue analysis, expense rebuild, value-add levers, and go/no-go criteria.",
  alternates: { canonical: "/resources/deal-evaluation-framework" },
};

export default function DealEvaluationFrameworkPage() {
  return (
    <GuidePage
      eyebrow="Investor Resource"
      title="Self-Storage Deal Evaluation Framework"
      intro="You can't deep-underwrite every listing that hits your inbox — and you shouldn't. The discipline is a staged funnel: kill bad deals fast with a quick screen, and only spend real hours on deals that survive each gate."
      sections={[
        {
          heading: "Stage 1: The 10-minute screen",
          body: "Before opening a spreadsheet, answer four questions. If any answer is bad, pass and move on.",
          items: [
            "Price per square foot — is it sane relative to recent comps and replacement cost?",
            "Market — is the trade area growing, flat, or shrinking?",
            "Occupancy — is there a story (upside or distress) or is it fully stabilized at a full price?",
            "Seller motivation — estate, burnout, partnership split, and loan maturity create real deals; 'testing the market' doesn't.",
          ],
        },
        {
          heading: "Stage 2: Revenue reality check",
          body: "Most storage pro formas inflate revenue the same three ways. Find them before they find you.",
          items: [
            "Gap between street rates and in-place rates: upside if in-place is low, risk if street rates are aspirational.",
            "Economic vs. physical occupancy: a facility 90% full but collecting 75% of gross potential has a management problem — which can be your opportunity.",
            "Concessions and discounts buried in 'effective' rates.",
          ],
        },
        {
          heading: "Stage 3: Rebuild the expenses yourself",
          body: "Never accept the seller's expense numbers. Rebuild from scratch using market norms, your re-assessed property taxes, a fresh insurance quote, and a management fee. Mom-and-pop financials chronically understate what it costs a new owner to run the property.",
        },
        {
          heading: "Stage 4: Identify the value-add levers",
          items: [
            "Raise below-market in-place rents to street.",
            "Add tenant insurance or a protection plan program.",
            "Fix weak marketing: website, Google Business Profile, and online rentals.",
            "Convert unused land or dead space into units or parking.",
            "Cut waste: renegotiate contracts, automate access, right-size payroll.",
          ],
        },
        {
          heading: "Stage 5: Go / no-go criteria",
          body: "Write your thresholds down before you fall in love with a deal, and let the numbers make the decision.",
          items: [
            "Minimum going-in cap rate and stabilized yield-on-cost for this market tier.",
            "Minimum debt service coverage at in-place income.",
            "Maximum capital expenditure surprise you can absorb.",
            "A clear answer to: why is the current owner leaving this upside for me?",
          ],
        },
      ]}
    />
  );
}
