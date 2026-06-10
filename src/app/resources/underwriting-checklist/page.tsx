import type { Metadata } from "next";
import { GuidePage } from "@/components/guide";

export const metadata: Metadata = {
  title: "Self-Storage Underwriting Checklist | Storage Hunters",
  description:
    "A practical self-storage underwriting checklist: income verification, expense normalization, physical inspection, market checks, and debt assumptions before you buy.",
  alternates: { canonical: "/resources/underwriting-checklist" },
};

export default function UnderwritingChecklistPage() {
  return (
    <GuidePage
      eyebrow="Investor Resource"
      title="Self-Storage Underwriting Checklist"
      intro="Underwriting is where storage deals are won or lost. Before you put a facility under contract, work through every item on this checklist. The goal is simple: make sure the income is real, the expenses are honest, and the price reflects the asset you're actually buying."
      sections={[
        {
          heading: "1. Verify the income",
          items: [
            "Pull 12–24 months of management reports, not just a broker pro forma.",
            "Compare physical occupancy to economic occupancy — the gap reveals discounting, delinquency, and concessions.",
            "Review the rent roll for unit mix, street rates vs. in-place rates, and long-term tenants paying below market.",
            "Identify ancillary income (tenant insurance, late fees, merchandise, truck rental) and confirm it's sustainable.",
            "Check delinquency aging — how much of the rent roll is 30/60/90+ days behind?",
          ],
        },
        {
          heading: "2. Normalize the expenses",
          items: [
            "Rebuild the expense stack line by line: taxes, insurance, payroll, utilities, marketing, repairs, admin.",
            "Re-assess property taxes at YOUR purchase price, not the seller's current assessment.",
            "Get a real insurance quote — premiums have moved sharply in many markets.",
            "Add a management fee even if you'll self-manage; the next buyer will underwrite one.",
            "Watch for owner-operators who run expenses through the business or skip line items entirely.",
          ],
        },
        {
          heading: "3. Inspect the physical asset",
          items: [
            "Roof age and condition — the single most common surprise capital expense.",
            "Doors, latches, and springs: count units needing replacement and price it.",
            "Asphalt/concrete condition, drainage, and grading.",
            "Gate, cameras, lighting, and access control systems.",
            "Climate-controlled systems: HVAC age, dehumidification, and utility cost history.",
            "Expansion potential: excess land, allowable density, and zoning.",
          ],
        },
        {
          heading: "4. Check the market",
          items: [
            "Square feet per capita in a 1/3/5-mile radius vs. equilibrium for the market type.",
            "Mystery-shop every competitor: street rates, discounts, occupancy hints.",
            "New supply pipeline — permits, construction, and recently delivered facilities still in lease-up.",
            "Population and household growth trends in the trade area.",
          ],
        },
        {
          heading: "5. Stress-test the debt",
          items: [
            "Underwrite at today's actual quotes, not last year's rates.",
            "Confirm debt service coverage at in-place NOI, not stabilized projections.",
            "Model refinance risk: what happens if rates are higher at maturity?",
            "Compare bank, credit union, SBA, and seller-financing structures.",
          ],
        },
        {
          heading: "6. Run the sensitivity analysis",
          items: [
            "What does the deal look like if occupancy drops 5–10 points?",
            "What if rate growth is zero for two years?",
            "What if exit cap rates are 50–100 bps higher than entry?",
            "If the deal only works in the best case, it doesn't work.",
          ],
        },
      ]}
    />
  );
}
