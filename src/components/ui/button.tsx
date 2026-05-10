import * as React from "react";

import { cn } from "@/src/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

const baseClasses =
  "cursor-pointer inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[-0.01em] transition-all duration-200 focus-visible:outline-none focus-visible:shadow-[0_0_0_4px_rgba(0,64,224,0.25)] disabled:pointer-events-none disabled:opacity-60 disabled:bg-surface-mid disabled:text-text-muted disabled:border-border-muted disabled:shadow-none";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "text-white bg-gradient-to-br from-brand-primary to-brand-secondary shadow-[0_12px_30px_rgba(46,91,255,0.25)]  hover:shadow-[0_18px_40px_rgba(46,91,255,0.3)] active:translate-y-0 active:shadow-[0_10px_24px_rgba(46,91,255,0.25)]",
  secondary:
    "bg-transparent text-on-secondary border-2 border-brand-secondary shadow-[0_10px_24px_rgba(0,204,249,0.12)] hover:bg-canvas-accent active:bg-canvas-muted",
  ghost: "bg-transparent text-text-primary hover:bg-surface-low active:bg-surface-mid",
  outline: "bg-surface-base text-text-primary border border-border-muted hover:bg-surface-low active:bg-surface-mid",
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
