import * as React from "react";

import { cn } from "@/src/lib/utils";

type SelectVariant = "default" | "outline" | "glass";

type SelectSize = "sm" | "md" | "lg";

const baseClasses =
  "flex w-full appearance-none rounded-full border border-transparent bg-surface-mid text-[15px] text-text-primary shadow-[0_8px_20px_rgba(46,91,255,0.1)] transition focus-visible:outline-none focus-visible:border-brand-primary focus-visible:shadow-[0_0_0_4px_rgba(0,64,224,0.2)] disabled:cursor-not-allowed disabled:bg-surface-mid disabled:text-text-muted";

const variantClasses: Record<SelectVariant, string> = {
  default: "",
  outline: "bg-surface-base border border-border-muted",
  glass: "bg-[rgba(255,255,255,0.7)] border border-[rgba(255,255,255,0.8)] backdrop-blur-[10px]",
};

const sizeClasses: Record<SelectSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5",
  lg: "h-14 px-6 text-base",
};

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  variant?: SelectVariant;
  size?: SelectSize;
  wrapperClassName?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, wrapperClassName, variant = "default", size = "md", children, ...props }, ref) => {
    return (
      <div className={cn("relative", wrapperClassName)}>
        <select ref={ref} className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)} {...props}>
          {children}
        </select>
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted"
          fill="currentColor"
        >
          <path d="M5.25 7.5 10 12.25 14.75 7.5" />
        </svg>
      </div>
    );
  },
);

Select.displayName = "Select";

export { Select };
