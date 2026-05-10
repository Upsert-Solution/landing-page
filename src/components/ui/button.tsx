import * as React from "react";

import { cn } from "@/src/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[-0.01em] transition-all duration-200 focus-visible:outline-none focus-visible:shadow-[0_0_0_4px_rgba(0,64,224,0.25)] disabled:pointer-events-none disabled:opacity-60 disabled:bg-[var(--bb-surface-dim,#d9d9e6)] disabled:text-[var(--bb-outline,#747688)] disabled:border-[var(--bb-outline-variant,#c4c5d9)] disabled:shadow-none";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "text-[var(--bb-on-primary,#ffffff)] bg-[linear-gradient(135deg,var(--bb-primary,#0040e0),var(--bb-secondary,#00ccf9))] shadow-[0_12px_30px_rgba(46,91,255,0.25)] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(46,91,255,0.3)] active:translate-y-0 active:shadow-[0_10px_24px_rgba(46,91,255,0.25)]",
  secondary:
    "bg-transparent text-[var(--bb-on-secondary-container,#005266)] border-2 border-[var(--bb-secondary,#00ccf9)] shadow-[0_10px_24px_rgba(0,204,249,0.12)] hover:bg-[rgba(0,204,249,0.12)] active:bg-[rgba(0,204,249,0.2)]",
  ghost:
    "bg-transparent text-[var(--bb-on-surface,#191b24)] hover:bg-[var(--bb-surface-container-low,#f3f2ff)] active:bg-[var(--bb-surface-container,#ededfa)]",
  outline:
    "bg-[var(--bb-surface-container-lowest,#ffffff)] text-[var(--bb-on-surface,#191b24)] border border-[var(--bb-outline-variant,#c4c5d9)] hover:bg-[var(--bb-surface-container-low,#f3f2ff)] active:bg-[var(--bb-surface-container,#ededfa)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-7 text-base",
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant = "primary", size = "md", ...props }, ref) => {
  return <button ref={ref} className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)} {...props} />;
});

Button.displayName = "Button";

export { Button };
