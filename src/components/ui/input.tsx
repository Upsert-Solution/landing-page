import * as React from "react";

import { cn } from "@/src/lib/utils";

type InputVariant = "default" | "outline" | "glass";
type InputSize = "sm" | "md" | "lg";

const baseClasses =
  "flex w-full rounded-full border border-transparent bg-surface-low text-[15px] text-text-primary placeholder:text-text-muted shadow-[0_8px_20px_rgba(46,91,255,0.1)] transition focus-visible:outline-none focus-visible:border-brand-primary focus-visible:shadow-[0_0_0_4px_rgba(0,64,224,0.2)] disabled:cursor-not-allowed disabled:bg-surface-mid disabled:text-text-muted";

const variantClasses: Record<InputVariant, string> = {
  default: "",
  outline: "bg-surface-base border border-border-muted",
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
