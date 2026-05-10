import * as React from "react";

import { cn } from "@/src/lib/utils";

type TextareaVariant = "default" | "outline" | "glass";

type TextareaSize = "sm" | "md" | "lg";

const baseClasses =
  "flex w-full rounded-[28px] border border-transparent bg-[var(--bb-surface-container-low,#f3f2ff)] text-[15px] text-[var(--bb-on-surface,#191b24)] placeholder:text-[var(--bb-outline,#747688)] shadow-[0_8px_20px_rgba(46,91,255,0.1)] transition focus-visible:outline-none focus-visible:border-[var(--bb-primary,#0040e0)] focus-visible:shadow-[0_0_0_4px_rgba(0,64,224,0.2)] disabled:cursor-not-allowed disabled:bg-[var(--bb-surface-dim,#d9d9e6)] disabled:text-[var(--bb-outline,#747688)]";

const variantClasses: Record<TextareaVariant, string> = {
  default: "",
  outline: "bg-[var(--bb-surface-container-lowest,#ffffff)] border border-[var(--bb-outline-variant,#c4c5d9)]",
  glass: "bg-[rgba(255,255,255,0.7)] border border-[rgba(255,255,255,0.8)] backdrop-blur-[10px]",
};

const sizeClasses: Record<TextareaSize, string> = {
  sm: "min-h-[96px] px-4 py-3 text-sm",
  md: "min-h-[128px] px-5 py-4",
  lg: "min-h-[160px] px-6 py-4 text-base",
};

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: TextareaVariant;
  size?: TextareaSize;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, variant = "default", size = "md", ...props }, ref) => {
  return <textarea ref={ref} className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)} {...props} />;
});

Textarea.displayName = "Textarea";

export { Textarea };
