"use client";

import { useState } from "react";

const fields = [
  { key: "nrsf", label: "Net rentable SF", def: 40000 },
  { key: "rate", label: "Avg rate ($/SF/year)", def: 11 },
  { key: "occ", label: "Economic occupancy (%)", def: 85 },
  { key: "opex", label: "Operating expenses (% of revenue)", def: 38 },
  { key: "price", label: "Purchase price ($)", def: 2400000 },
  { key: "capRate", label: "Market cap rate (%)", def: 6.5 },
  { key: "ltv", label: "Loan-to-value (%)", def: 70 },
  { key: "interest", label: "Interest rate (%)", def: 7 },
  { key: "amort", label: "Amortization (years)", def: 25 },
] as const;

type Inputs = Record<(typeof fields)[number]["key"], number>;

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export function StarterModel() {
  const [inputs, setInputs] = useState<Inputs>(
    Object.fromEntries(fields.map((f) => [f.key, f.def])) as Inputs
  );

  const gpr = inputs.nrsf * inputs.rate;
  const egi = gpr * (inputs.occ / 100);
  const opexAmt = egi * (inputs.opex / 100);
  const noi = egi - opexAmt;
  const valueAtCap = inputs.capRate > 0 ? noi / (inputs.capRate / 100) : 0;
  const goingInCap = inputs.price > 0 ? (noi / inputs.price) * 100 : 0;
  const loan = inputs.price * (inputs.ltv / 100);
  const r = inputs.interest / 100 / 12;
  const n = inputs.amort * 12;
  const monthly =
    r > 0 ? (loan * r) / (1 - Math.pow(1 + r, -n)) : n > 0 ? loan / n : 0;
  const debtService = monthly * 12;
  const dscr = debtService > 0 ? noi / debtService : 0;
  const equity = inputs.price - loan;
  const cashFlow = noi - debtService;
  const coc = equity > 0 ? (cashFlow / equity) * 100 : 0;

  const outputs = [
    ["Gross potential revenue", fmt(gpr)],
    ["Effective gross income", fmt(egi)],
    ["Operating expenses", fmt(opexAmt)],
    ["Net operating income (NOI)", fmt(noi)],
    ["Value at market cap rate", fmt(valueAtCap)],
    ["Going-in cap rate", `${goingInCap.toFixed(2)}%`],
    ["Annual debt service", fmt(debtService)],
    ["DSCR", dscr.toFixed(2)],
    ["Cash required (equity)", fmt(equity)],
    ["Cash flow after debt", fmt(cashFlow)],
    ["Cash-on-cash return", `${coc.toFixed(1)}%`],
  ];

  return (
    <div className="grid gap-8 text-left lg:grid-cols-2">
      <div className="rounded-lg border border-forest-100 bg-white p-6">
        <h3 className="text-lg font-semibold text-forest-900">Inputs</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {fields.map((f) => (
            <div key={f.key}>
              <label
                htmlFor={`sm-${f.key}`}
                className="mb-1 block text-xs font-medium text-forest-800/80"
              >
                {f.label}
              </label>
              <input
                id={`sm-${f.key}`}
                type="number"
                value={inputs[f.key]}
                step="any"
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    [f.key]: parseFloat(e.target.value) || 0,
                  })
                }
                className="w-full rounded-md border border-forest-200 bg-white px-3 py-2 text-sm text-forest-900 outline-none focus:border-blaze-600"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-lg bg-forest-900 p-6">
        <h3 className="text-lg font-semibold text-white">Outputs</h3>
        <dl className="mt-4 divide-y divide-white/10">
          {outputs.map(([label, value]) => (
            <div key={label} className="flex items-center justify-between py-2.5">
              <dt className="text-sm text-forest-100/80">{label}</dt>
              <dd
                className={`text-sm font-semibold ${
                  label === "Net operating income (NOI)" ||
                  label === "Cash-on-cash return"
                    ? "text-blaze-500"
                    : "text-white"
                }`}
              >
                {value}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-xs leading-5 text-forest-100/60">
          Starter model for quick screening only — always rebuild revenue and
          expenses from actual financials before making an offer.
        </p>
      </div>
    </div>
  );
}
