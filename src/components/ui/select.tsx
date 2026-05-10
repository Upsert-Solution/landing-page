import * as React from "react";

import { cn } from "@/src/lib/utils";

type SelectVariant = "default" | "outline" | "glass";

type SelectSize = "sm" | "md" | "lg";

const baseClasses =
  "flex w-full appearance-none rounded-full border border-transparent bg-[var(--bb-surface-container,#ededfa)] text-[15px] text-[var(--bb-on-surface,#191b24)] shadow-[0_8px_20px_rgba(46,91,255,0.1)] transition focus-visible:outline-none focus-visible:border-[var(--bb-primary,#0040e0)] focus-visible:shadow-[0_0_0_4px_rgba(0,64,224,0.2)] disabled:cursor-not-allowed disabled:bg-[var(--bb-surface-dim,#d9d9e6)] disabled:text-[var(--bb-outline,#747688)]";

const variantClasses: Record<SelectVariant, string> = {
  default: "",
  outline: "bg-[var(--bb-surface-container-lowest,#ffffff)] border border-[var(--bb-outline-variant,#c4c5d9)]",
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
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--bb-outline,#747688)]"
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
