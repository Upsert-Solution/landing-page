"use client";

import * as React from "react";

export type ToastVariant = "default" | "success" | "warning" | "error" | "info";

export type ToastPosition = "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center";

export type ToastAction = {
  label: string;
  onClick?: () => void;
  href?: string;
};

export type ToastData = {
  id: string;
  title?: string;
  description?: string;
  variant?: ToastVariant;
  position?: ToastPosition;
  duration?: number | null;
  action?: ToastAction;
  open?: boolean;
};

type ToastState = {
  toasts: ToastData[];
};

type ToastInput = Omit<ToastData, "id">;

type ToastActionType =
  | { type: "ADD_TOAST"; toast: ToastData }
  | { type: "UPDATE_TOAST"; toast: Partial<ToastData> & { id: string } }
  | { type: "DISMISS_TOAST"; id: string }
  | { type: "REMOVE_TOAST"; id: string }
  | { type: "CLEAR_TOASTS" };

const TOAST_LIMIT = 5;
const TOAST_DEFAULT_DURATION = 4500;
const TOAST_EXIT_DURATION = 200;

const listeners: Array<(state: ToastState) => void> = [];
let memoryState: ToastState = { toasts: [] };
const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();
const toastRemoveTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const reducer = (state: ToastState, action: ToastActionType): ToastState => {
  switch (action.type) {
    case "ADD_TOAST": {
      const toasts = [action.toast, ...state.toasts].slice(0, TOAST_LIMIT);
      return { toasts };
    }
    case "UPDATE_TOAST": {
      return {
        toasts: state.toasts.map((toast) => (toast.id === action.toast.id ? { ...toast, ...action.toast } : toast)),
      };
    }
    case "DISMISS_TOAST": {
      return {
        toasts: state.toasts.map((toast) => (toast.id === action.id ? { ...toast, open: false } : toast)),
      };
    }
    case "REMOVE_TOAST": {
      return { toasts: state.toasts.filter((toast) => toast.id !== action.id) };
    }
    case "CLEAR_TOASTS": {
      return { toasts: [] };
    }
    default:
      return state;
  }
};

const dispatch = (action: ToastActionType) => {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => listener(memoryState));
};

const createId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

const scheduleToastRemoval = (id: string, duration: number | null) => {
  if (duration === null) {
    return;
  }

  const timeout = setTimeout(() => dismiss(id), duration);
  toastTimeouts.set(id, timeout);
};

const scheduleToastRemoveQueue = (id: string) => {
  if (toastRemoveTimeouts.has(id)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastRemoveTimeouts.delete(id);
    dispatch({ type: "REMOVE_TOAST", id });
  }, TOAST_EXIT_DURATION);

  toastRemoveTimeouts.set(id, timeout);
};

const dismiss = (id: string) => {
  const timeout = toastTimeouts.get(id);
  if (timeout) {
    clearTimeout(timeout);
    toastTimeouts.delete(id);
  }

  dispatch({ type: "DISMISS_TOAST", id });
  scheduleToastRemoveQueue(id);
};

const clear = () => {
  toastTimeouts.forEach((timeout) => clearTimeout(timeout));
  toastTimeouts.clear();
  toastRemoveTimeouts.forEach((timeout) => clearTimeout(timeout));
  toastRemoveTimeouts.clear();

  memoryState.toasts.forEach((toast) => dismiss(toast.id));
};

const update = (toast: Partial<ToastData> & { id: string }) => {
  dispatch({ type: "UPDATE_TOAST", toast });
};

export const toast = (input: ToastInput) => {
  const id = createId();
  const duration = input.duration === undefined ? TOAST_DEFAULT_DURATION : input.duration;

  const toastData: ToastData = {
    id,
    duration,
    position: "top-right",
    variant: "default",
    open: true,
    ...input,
  };

  dispatch({ type: "ADD_TOAST", toast: toastData });
  scheduleToastRemoval(id, duration);

  return {
    id,
    dismiss: () => dismiss(id),
    update: (data: Partial<ToastData>) => update({ id, ...data }),
  };
};

export const useToast = () => {
  const [state, setState] = React.useState<ToastState>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);

    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, []);

  return {
    ...state,
    toast,
    dismiss,
    update,
    clear,
  };
};
