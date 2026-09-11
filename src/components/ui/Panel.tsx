import type { HTMLAttributes, ReactNode } from "react";

interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  shadow?: "sm" | "md" | "lg" | "xl";
}

const shadowClass: Record<NonNullable<PanelProps["shadow"]>, string> = {
  sm: "shadow-[var(--shadow-brutal-sm)]",
  md: "shadow-[var(--shadow-brutal)]",
  lg: "shadow-[var(--shadow-brutal-lg)]",
  xl: "shadow-[var(--shadow-brutal-xl)]",
};

export function Panel({ children, shadow = "md", className = "", ...rest }: PanelProps) {
  return (
    <div className={["border-2 border-hb-black bg-hb-white", shadowClass[shadow], className].join(" ")} {...rest}>
      {children}
    </div>
  );
}
