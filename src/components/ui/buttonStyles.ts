export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "dark";
export type ButtonSize = "sm" | "md" | "lg";

export const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-hb-green text-hb-black",
  secondary: "bg-hb-yellow text-hb-black",
  ghost: "bg-hb-white text-hb-black",
  danger: "bg-hb-pink text-hb-white",
  dark: "bg-hb-black text-hb-white",
};

export const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  fullWidth,
  className = "",
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
}) {
  return [
    "brutal-press inline-flex items-center justify-center gap-2 border-2 border-hb-black font-mono font-bold uppercase tracking-wide",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? "w-full" : "",
    className,
  ].join(" ");
}
