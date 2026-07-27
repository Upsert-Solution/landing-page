import { Lightbulb, TrendingDown, TrendingUp } from "lucide-react";

import type { Item } from "../_types";

export const stepProcessData: Item[] = [
  {
    title: "The Problem",
    icon: TrendingDown,
    description:
      "Outdated websites drive potential clients straight to your competitors.",
    iconClass: "bg-red-100 text-red-900",
  },
  {
    title: "Our Solution",
    icon: Lightbulb,
    description:
      "We craft beautiful, lightning-fast, user-centric websites that guide visitors naturally toward making a purchase or inquiry.",
  },
  {
    title: "The Result",
    icon: TrendingUp,
    description:
      "Increased trust, higher conversion rates, and a digital presence you can truly be proud of.",
    iconClass: "bg-brand-secondary/5 text-brand-secondary",
  },
];
