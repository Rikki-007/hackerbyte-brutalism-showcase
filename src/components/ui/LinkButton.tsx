import { Link, type LinkProps } from "react-router-dom";
import { buttonClasses, type ButtonSize, type ButtonVariant } from "./buttonStyles";

interface LinkButtonProps extends LinkProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

/** Button-styled react-router Link — use for navigation CTAs (never nest a Link inside a <button>). */
export function LinkButton({ variant = "primary", size = "md", fullWidth, className = "", ...rest }: LinkButtonProps) {
  return <Link className={buttonClasses({ variant, size, fullWidth, className })} {...rest} />;
}
