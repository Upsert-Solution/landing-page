"use client";

import { cn } from "@/src/lib/utils";
import { Toast } from "./toast";
import { useToast, type ToastPosition } from "./use-toast";

const positions: ToastPosition[] = ["top-right", "top-left", "bottom-right", "bottom-left", "top-center", "bottom-center"];

const positionClasses: Record<ToastPosition, string> = {
  "top-right": "top-6 right-6 items-end",
  "top-left": "top-6 left-6 items-start",
  "bottom-right": "bottom-6 right-6 items-end",
  "bottom-left": "bottom-6 left-6 items-start",
  "top-center": "top-6 left-1/2 -translate-x-1/2 items-center",
  "bottom-center": "bottom-6 left-1/2 -translate-x-1/2 items-center",
};

export const Toaster = () => {
  const { toasts, dismiss } = useToast();
  const grouped = positions.reduce(
    (acc, position) => {
      acc[position] = [];
      return acc;
    },
    {} as Record<ToastPosition, typeof toasts>,
  );

  toasts.forEach((toast) => {
    const position = toast.position ?? "top-right";
    grouped[position].push(toast);
  });

  return (
    <>
      {positions.map((position) => {
        const items = grouped[position];
        if (!items.length) {
          return null;
        }

        return (
          <div
            key={position}
            className={cn("pointer-events-none fixed z-50 flex w-[360px] max-w-[calc(100%-2rem)] flex-col gap-3", positionClasses[position])}
          >
            {items.map((toast) => (
              <Toast key={toast.id} {...toast} onDismiss={() => dismiss(toast.id)} />
            ))}
          </div>
        );
      })}
    </>
  );
};
