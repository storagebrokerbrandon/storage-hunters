import type { Metadata } from "next";
import { GuidePage } from "@/components/guide";

export const metadata: Metadata = {
  title: "Self-Storage Rent Roll Red Flags | Storage Hunters",
  description:
    "The rent roll red flags that kill self-storage deals: phantom occupancy, concession games, delinquency, unit-mix problems, and related-party tenants.",
  alternates: { canonical: "/resources/rent-roll-red-flags" },
};

export default function Page() {
  return (
    <GuidePage
      eyebrow="Investor Resource"
      title="Rent Roll Red Flags"
      intro="The rent roll is where storage deals hide their secrets. Ten minutes of forensic reading catches problems that a summary page is designed to bury. Here's what to hunt for."
      sections={[
        {
          heading: "Occupancy games",
          items: [
            "Physical occupancy high, economic occupancy low: units are full of people who aren't paying.",
            "A spike of move-ins in the 60 days before listing — were units given away to dress the roll?",
            "'Occupied' units with $0 rent: manager units, owner storage, or freebies for friends.",
            "Company or related-party names occupying multiple units at suspiciously full rates.",
          ],
        },
        {
          heading: "Rate and concession tells",
          items: [
            "Wide gaps between identical units' rents — fine if it shows disciplined rate management, a problem if the street rate is the fantasy number.",
            "Heavy first-month-free or half-off promos that make 'in-place rent' overstate reality.",
            "Long-term tenants paying far below market: upside, but only if the market supports the move and you budget for the churn when you raise them.",
          ],
        },
        {
          heading: "Delinquency landmines",
          items: [
            "Always get the aging report: 30/60/90+ day buckets, not just a total.",
            "Tenants 90+ days delinquent are not income — they're future auctions and turnover costs.",
            "A big lien/auction backlog means management stopped enforcing, and collections will get worse before they get better.",
          ],
        },
        {
          heading: "Unit mix problems",
          items: [
            "One unit size dominating vacancy: the market is telling you the mix is wrong.",
            "All large units in a market renting small ones (or vice versa) limits your rate power.",
            "Compare the mix against competitors — fixing mix means construction, not management.",
          ],
        },
        {
          heading: "The cross-check that catches everything",
          body: "Tie the rent roll to the bank statements. Monthly collections per the roll should reconcile with actual deposits over the trailing three months. If the seller won't provide bank statements or merchant reports, treat the rent roll as fiction and price accordingly.",
        },
      ]}
    />
  );
}
