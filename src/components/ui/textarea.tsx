import * as React from "react";

import { cn } from "@/src/lib/utils";

type TextareaVariant = "default" | "outline" | "glass";

type TextareaSize = "sm" | "md" | "lg";

const baseClasses =
  "flex w-full rounded-[28px] border border-transparent bg-surface-low text-[15px] text-text-primary placeholder:text-text-muted shadow-[0_8px_20px_rgba(46,91,255,0.1)] transition focus-visible:outline-none focus-visible:border-brand-primary focus-visible:shadow-[0_0_0_4px_rgba(0,64,224,0.2)] disabled:cursor-not-allowed disabled:bg-surface-mid disabled:text-text-muted";

const variantClasses: Record<TextareaVariant, string> = {
  default: "",
  outline: "bg-surface-base border border-border-muted",
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
