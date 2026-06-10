import type { Metadata } from "next";
import { GuidePage } from "@/components/guide";

export const metadata: Metadata = {
  title: "T-12 Expense Normalization Guide for Self-Storage | Storage Hunters",
  description:
    "How to normalize a self-storage T-12: re-assessed taxes, real insurance quotes, management fees, payroll, and the expenses mom-and-pop sellers leave out.",
  alternates: { canonical: "/resources/t12-expense-normalization" },
};

export default function Page() {
  return (
    <GuidePage
      eyebrow="Investor Resource"
      title="T-12 Expense Normalization Guide"
      intro="The seller's trailing-12 shows what it cost THEM to run the property. Your underwriting needs what it will cost YOU. The difference between those two numbers is where most overpaying happens."
      sections={[
        {
          heading: "The big two: taxes and insurance",
          items: [
            "Property taxes: the sale usually triggers reassessment at your purchase price. Call the assessor, learn the ratio and millage, and use the post-sale number — this alone can be a six-figure swing in value.",
            "Insurance: get an actual quote for your ownership. Premiums have repriced hard in coastal and storm-prone markets; the seller's legacy policy is not your future cost.",
          ],
        },
        {
          heading: "What mom-and-pop T-12s leave out",
          items: [
            "Management: owner ran it themselves for 'free.' Add 4–6% of revenue plus on-site payroll at market wages.",
            "Repairs and maintenance: deferred isn't saved, it's borrowed. Use a realistic per-SF reserve.",
            "Marketing: $0 marketing with full occupancy means under-market rents or a market you should verify.",
            "Software, merchant fees, call answering — the modern operating stack the seller never adopted.",
          ],
        },
        {
          heading: "What to back OUT of the seller's numbers",
          items: [
            "One-time items: legal settlements, a roof replacement, storm repairs.",
            "Personal expenses run through the property: vehicles, travel, family payroll.",
            "Depreciation, interest, and owner draws — below-the-line items that don't belong in NOI.",
          ],
        },
        {
          heading: "Build the normalized stack",
          body: "Line by line, take the higher of (a) the seller's actual or (b) your market-based estimate — except where the actual contains their problems, not yours. The result is usually an expense ratio in the mid-30s to mid-40s percent of revenue for a stabilized facility, varying with size, climate control, and payroll model. If your rebuilt ratio lands far outside that band, find out why before you trust it.",
        },
      ]}
    />
  );
}
