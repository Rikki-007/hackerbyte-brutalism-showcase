import { useState } from "react";
import { pricingTiers, pricingFaq } from "../data/pricing";
import { PricingCard } from "../components/pricing/PricingCard";
import { Panel } from "../components/ui/Panel";

export function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-hb-green">./pricing --list</span>
        <h1 className="mt-1 font-display text-4xl sm:text-5xl">PAY FOR WHAT YOU BREAK</h1>
        <p className="mt-3 font-sans text-hb-black/70">
          Every tier includes the full open-source registry. Paid tiers just unlock more speed, more seats, and
          more ways to blame the CI pipeline instead of yourself.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
        {pricingTiers.map((tier) => (
          <PricingCard key={tier.id} tier={tier} />
        ))}
      </div>

      <div className="mt-20">
        <h2 className="text-center font-display text-3xl">FAQ</h2>
        <div className="mx-auto mt-6 max-w-3xl space-y-3">
          {pricingFaq.map((item, i) => {
            const isOpen = openFaq === i;
            return (
              <Panel key={item.question} shadow="sm" className="overflow-hidden">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left font-mono text-sm font-bold"
                  aria-expanded={isOpen}
                >
                  {item.question}
                  <span className="ml-4 shrink-0 border-2 border-hb-black bg-hb-yellow px-2 font-bold">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t-2 border-hb-black bg-hb-offwhite px-5 py-4 font-sans text-sm text-hb-black/80">
                    {item.answer}
                  </div>
                )}
              </Panel>
            );
          })}
        </div>
      </div>
    </div>
  );
}
