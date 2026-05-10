import { twMerge } from "tailwind-merge";

export type ClassValue = string | number | null | false | undefined | ClassDictionary | ClassArray;

type ClassDictionary = Record<string, boolean | null | undefined>;
type ClassArray = ClassValue[];

export const cn = (...inputs: ClassValue[]): string => {
  const classes: string[] = [];

  const visit = (input: ClassValue): void => {
    if (!input) return;

    if (typeof input === "string" || typeof input === "number") {
      classes.push(String(input));
      return;
    }

    if (Array.isArray(input)) {
      input.forEach(visit);
      return;
    }

    if (typeof input === "object") {
      Object.entries(input).forEach(([key, value]) => {
        if (value) classes.push(key);
      });
    }
  };

  inputs.forEach(visit);

  return twMerge(classes.join(" "));
};
