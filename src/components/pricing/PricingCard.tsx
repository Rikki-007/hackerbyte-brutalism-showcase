import type { PricingTier } from "../../types";
import { Button } from "../ui/Button";

const accentTop: Record<PricingTier["accent"], string> = {
  green: "bg-hb-green",
  yellow: "bg-hb-yellow",
  black: "bg-hb-black",
};

const accentButton: Record<PricingTier["accent"], "primary" | "secondary" | "dark"> = {
  green: "primary",
  yellow: "secondary",
  black: "dark",
};

export function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <div
      className={[
        "relative flex flex-col border-2 border-hb-black bg-hb-white",
        tier.highlighted ? "shadow-[var(--shadow-brutal-xl)] lg:-translate-y-3" : "shadow-[var(--shadow-brutal-lg)]",
      ].join(" ")}
    >
      {tier.highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 border-2 border-hb-black bg-hb-pink px-3 py-1 font-mono text-xs font-bold uppercase text-hb-white shadow-[var(--shadow-brutal-sm)]">
          Most Installed
        </div>
      )}
      <div className={["h-3 border-b-2 border-hb-black", accentTop[tier.accent]].join(" ")} />
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3 className="font-display text-2xl">{tier.name}</h3>
        <p className="mt-2 font-sans text-sm text-hb-black/70">{tier.tagline}</p>

        <div className="mt-6 flex items-baseline gap-1 font-mono">
          <span className="text-4xl font-bold">${tier.price}</span>
          <span className="text-sm text-hb-black/50">/ {tier.billing}</span>
        </div>

        <ul className="mt-6 flex-1 space-y-3">
          {tier.features.map((f) => (
            <li key={f} className="flex items-start gap-2 font-mono text-sm">
              <span className="mt-0.5 shrink-0 font-bold text-hb-green">▣</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <Button variant={accentButton[tier.accent]} fullWidth className="mt-8">
          {tier.cta}
        </Button>
      </div>
    </div>
  );
}
