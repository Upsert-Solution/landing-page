import * as React from "react";

import { cn } from "@/src/lib/utils";

type InputVariant = "default" | "outline" | "glass";
type InputSize = "sm" | "md" | "lg";

const baseClasses =
  "flex w-full rounded-full border border-transparent bg-[var(--bb-surface-container-low,#f3f2ff)] text-[15px] text-[var(--bb-on-surface,#191b24)] placeholder:text-[var(--bb-outline,#747688)] shadow-[0_8px_20px_rgba(46,91,255,0.1)] transition focus-visible:outline-none focus-visible:border-[var(--bb-primary,#0040e0)] focus-visible:shadow-[0_0_0_4px_rgba(0,64,224,0.2)] disabled:cursor-not-allowed disabled:bg-[var(--bb-surface-dim,#d9d9e6)] disabled:text-[var(--bb-outline,#747688)]";

const variantClasses: Record<InputVariant, string> = {
  default: "",
  outline: "bg-[var(--bb-surface-container-lowest,#ffffff)] border border-[var(--bb-outline-variant,#c4c5d9)]",
  glass: "bg-[rgba(255,255,255,0.7)] border border-[rgba(255,255,255,0.8)] backdrop-blur-[10px]",
};

const sizeClasses: Record<InputSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5",
  lg: "h-14 px-6 text-base",
};

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: InputVariant;
  size?: InputSize;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, variant = "default", size = "md", ...props }, ref) => {
  return <input ref={ref} className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)} {...props} />;
});

Input.displayName = "Input";

export { Input };
