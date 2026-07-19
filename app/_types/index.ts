import type { ComponentType, SVGProps } from "react";

export type Item = {
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>> | string;
  description?: string;
  iconClass?: string;
};

export type Project = {
  title: string;
  description: string;
  url: string;
  fallbackImage: string;
  accentClass: string;
};

export type Testimonial = {
  quote: string;
  name?: string;
  role?: string;
  avatarClass?: string;
};