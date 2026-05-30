"use client";

import type { LucideIcon } from "lucide-react";
import { AlertTriangle, CheckCircle2, Info, X, XCircle } from "lucide-react";

import { cn } from "@/src/lib/utils";
import type { ToastAction, ToastData, ToastVariant } from "./use-toast";

type ToastProps = ToastData & {
  onDismiss: () => void;
};

const variantShellClasses: Record<ToastVariant, string> = {
  default: "border-white/80 bg-surface-base",
  success: "border-[var(--status-success-border)] bg-[var(--status-success-bg)]",
  warning: "border-[var(--status-warning-border)] bg-[var(--status-warning-bg)]",
  error: "border-[var(--status-error-border)] bg-[var(--status-error-bg)]",
  info: "border-[var(--status-info-border)] bg-[var(--status-info-bg)]",
};

const variantIconClasses: Record<ToastVariant, string> = {
  default: "bg-brand-secondary/20 text-brand-primary",
  success: "bg-[var(--status-success-bg)] text-[var(--status-success-text)]",
  warning: "bg-[var(--status-warning-bg)] text-[var(--status-warning-text)]",
  error: "bg-[var(--status-error-bg)] text-[var(--status-error-text)]",
  info: "bg-[var(--status-info-bg)] text-[var(--status-info-text)]",
};

const variantIcons: Record<ToastVariant, LucideIcon> = {
  default: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  error: XCircle,
  info: Info,
};

const renderToastAction = (action?: ToastAction) => {
  if (!action) {
    return null;
  }

  const actionClasses =
    "inline-flex items-center justify-center rounded-full border border-border-muted px-3 py-1 text-xs font-semibold text-text-secondary transition hover:bg-surface-low";

  if (action.href) {
    return (
      <a href={action.href} className={actionClasses}>
        {action.label}
      </a>
    );
  }

  return (
    <button type="button" onClick={action.onClick} className={actionClasses}>
      {action.label}
    </button>
  );
};

export const Toast = ({ title, description, variant = "default", action, onDismiss }: ToastProps) => {
  const Icon = variantIcons[variant];

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "pointer-events-auto flex w-full max-w-sm gap-3 rounded-[24px] border p-4 shadow-[0_18px_40px_rgba(46,91,255,0.18)] backdrop-blur",
        variantShellClasses[variant],
      )}
    >
      <span className={cn("flex h-10 w-10 items-center justify-center rounded-full", variantIconClasses[variant])}>
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div className="flex-1 space-y-1">
        {title ? <p className="text-sm font-semibold text-text-primary">{title}</p> : null}
        {description ? <p className="text-sm text-text-muted">{description}</p> : null}
        {action ? <div className="pt-2">{renderToastAction(action)}</div> : null}
      </div>
      <button
        type="button"
        onClick={onDismiss}
        className="rounded-full border border-transparent p-1 text-text-muted transition hover:bg-surface-low hover:text-text-primary"
        aria-label="Dismiss notification"
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
};
