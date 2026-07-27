import {
  Globe,
  Headset,
  Lightbulb,
  PlaneLanding,
  RefreshCcw,
} from "lucide-react";

import type { Item } from "../_types";

export const whatWeDoBest: Item[] = [
  {
    title: "Business Websites",
    icon: Globe,
    description:
      "Comprehensive, multi-page sites designed to showcase your brand's full story and capabilities.",
    iconClass: "bg-brand-primary/10 text-brand-primary",
  },
  {
    title: "Landing Pages",
    icon: PlaneLanding,
    description:
      "High-converting, single-page experiences focused on driving specific actions and capturing leads.",
    iconClass: "bg-brand-secondary/5 text-brand-secondary",
  },
  {
    title: "Redesign",
    icon: RefreshCcw,
    description:
      "Breathe new life into your existing site with a modern facelift and improved user experience.",
    iconClass: "bg-brand-tertiary/10 text-neutral-600",
  },
  {
    title: "Ongoing Support",
    icon: Headset,
    description:
      "Reliable maintenance, updates, and optimization to keep your site running smoothly.",
    iconClass: "bg-neutral-200 text-neutral-900",
  },
  {
    title: "SEO & Performance",
    icon: Lightbulb,
    description:
      "Optimized architecture and content strategies to improve search rankings and site speed.",
    iconClass: "bg-brand-primary/10 text-brand-primary",
  },
];
