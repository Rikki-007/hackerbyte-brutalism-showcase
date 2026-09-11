import type { ReactNode } from "react";

type BadgeTone = "green" | "yellow" | "pink" | "blue" | "black" | "white";

const toneClasses: Record<BadgeTone, string> = {
  green: "bg-hb-green text-hb-black",
  yellow: "bg-hb-yellow text-hb-black",
  pink: "bg-hb-pink text-hb-white",
  blue: "bg-hb-blue text-hb-black",
  black: "bg-hb-black text-hb-white",
  white: "bg-hb-white text-hb-black",
};

export function Badge({ tone = "black", children }: { tone?: BadgeTone; children: ReactNode }) {
  return (
    <span
      className={[
        "inline-flex items-center border-2 border-hb-black px-2 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wider",
        toneClasses[tone],
      ].join(" ")}
    >
      {children}
    </span>
  );
}
