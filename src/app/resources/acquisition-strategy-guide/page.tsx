import type { Metadata } from "next";
import { GuidePage } from "@/components/guide";

export const metadata: Metadata = {
  title: "Self-Storage Acquisition Strategy Guide | Storage Hunters",
  description:
    "Build a repeatable self-storage acquisition strategy: define your buy box, source deals, run a disciplined pipeline, structure financing, and close with confidence.",
  alternates: { canonical: "/resources/acquisition-strategy-guide" },
};

export default function AcquisitionStrategyGuidePage() {
  return (
    <GuidePage
      eyebrow="Investor Resource"
      title="Self-Storage Acquisition Strategy Guide"
      intro="Buying a storage facility isn't a single decision — it's a system. Investors who close good deals consistently aren't luckier; they have a defined buy box, a sourcing engine, and a disciplined process that runs every week whether or not a deal is hot. Here's the system."
      sections={[
        {
          heading: "1. Define your buy box first",
          body: "Every hour spent on deals outside your criteria is wasted. Write down your buy box and let it filter everything:",
          items: [
            "Target markets or states (and why those).",
            "Facility size range in net rentable square feet and unit count.",
            "Price range and required returns (cash-on-cash, yield-on-cost, IRR).",
            "Deal profile: stabilized cash flow, value-add, lease-up, or expansion.",
            "Management plan: self-manage, third-party, or remote with kiosk/tech.",
          ],
        },
        {
          heading: "2. Build a multi-channel sourcing engine",
          items: [
            "Broker relationships — most institutional-quality deals still trade through brokers; be the buyer they think of first.",
            "Direct-to-owner outreach: mail, calls, and visits to mom-and-pop facilities in your buy box.",
            "Online marketplaces for volume, with the discipline to ignore the overpriced majority.",
            "Your network: lenders, attorneys, and managers hear about deals before they list.",
          ],
        },
        {
          heading: "3. Run pipeline math, not deal-by-deal hope",
          body: "Acquisitions is a numbers game with a predictable funnel: many leads become a few underwrites, fewer offers, and occasionally a close. If you aren't reviewing a steady flow of deals weekly, the problem isn't your underwriting — it's the top of your funnel.",
        },
        {
          heading: "4. Make offers that protect you",
          items: [
            "Letter of intent with clear price, terms, due diligence period, and financing contingency.",
            "Due diligence long enough to verify income, inspect the asset, and finalize debt.",
            "Earnest money structured to stay refundable until diligence ends.",
            "Re-trade only on real findings — your reputation is a sourcing asset.",
          ],
        },
        {
          heading: "5. Choose the right financing structure",
          items: [
            "Local and regional banks: relationship-driven, often the best all-around terms.",
            "SBA 7(a)/504: higher leverage for owner-operators, at the cost of fees and process.",
            "Seller financing: powerful with retiring mom-and-pop owners — ask on every off-market deal.",
            "Credit unions and debt funds for deals banks won't stretch on.",
          ],
        },
        {
          heading: "6. Close, transition, execute",
          items: [
            "Day-one plan: software, gate codes, bank accounts, insurance, vendor handoffs, and tenant notification.",
            "Re-rate analysis and marketing fixes in the first 90 days.",
            "Track performance against your underwriting monthly — your assumptions are now a budget.",
            "Document what you learned; your second acquisition should be faster and better than your first.",
          ],
        },
      ]}
    />
  );
}
