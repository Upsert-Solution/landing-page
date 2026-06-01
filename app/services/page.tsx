import Image from "next/image";

import type { LucideIcon } from "lucide-react";
import { CheckCircle2, LifeBuoy, Monitor, RefreshCcw, Rocket } from "lucide-react";

import { CardContainer, FadeInSection, Flex, Stagger, StaggerItem } from "@/src/components/ui";
import { cn } from "@/src/lib/utils";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  iconClass: string;
  cornerClass: string;
  bullets: string[];
  image?: string;
  imageAlt?: string;
};

const services: Service[] = [
  {
    title: "Business Websites",
    description:
      "Complete, multi-page digital headquarters designed to convert. We craft responsive, high-performance websites that tell your story with extreme clarity and soft-minimalist flair.",
    icon: Monitor,
    iconClass: "bg-brand-secondary/15 text-brand-primary",
    cornerClass: "-top-10 -right-10 bg-brand-primary/15",
    bullets: ["Custom Soft-Minimalist Design", "Fluid Responsive Layouts", "SEO Optimized Architecture"],
  },
  {
    title: "Landing Pages",
    description:
      "High-converting, single-page experiences focused on a singular goal. Perfect for product launches, marketing campaigns, or app downloads with a tactile glassmorphism touch.",
    icon: Rocket,
    iconClass: "bg-brand-tertiary/40 text-neutral-800",
    cornerClass: "-top-12 -right-12 bg-brand-tertiary/30",
    bullets: ["Conversion Focused Layouts", "A/B Testing Ready", "Rapid Deployment"],
  },
  {
    title: "Website Redesign",
    description:
      "Breathe new life into your existing platform. We modernize clunky interfaces into buoyant, breathable experiences that align with current tech-savvy audience expectations.",
    icon: RefreshCcw,
    iconClass: "bg-brand-primary/12 text-brand-primary",
    cornerClass: "-top-10 -right-10 bg-brand-secondary/20",
    bullets: ["UX/UI Modernization", "Performance Optimization", "Brand Alignment"],
  },
  {
    title: "Ongoing Support",
    description:
      "Continuous care to keep your digital bubble afloat. We handle updates, security, and enhancements so you can focus on growing your core business without technical friction.",
    icon: LifeBuoy,
    iconClass: "bg-brand-secondary/15 text-brand-primary",
    cornerClass: "-top-12 -right-12 bg-brand-primary/10",
    bullets: ["24/7 Uptime Monitoring", "Monthly Feature Updates", "Priority Bug Fixes"],
  },
];

const page = () => {
  return (
    <div className="relative flex flex-col gap-12 lg:gap-16 pb-20">
      <div aria-hidden="true" className="pointer-events-none absolute -top-6 left-8 h-72 w-72 rounded-full bg-brand-secondary/20 blur-3xl" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-64 -right-12 h-80 w-80 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-brand-primary/15 blur-3xl"
      />

      <FadeInSection className="pt-6 lg:pt-10">
        <Flex as="div" direction="col" align="center" className="text-center gap-4">
          <h1 className="type-h1 bg-linear-to-r from-brand-primary via-brand-secondary to-brand-primary bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="type-body-lg text-text-secondary max-w-2xl">
            We build digital experiences that float above the rest. From concept to launch, we deliver bubbly, high-energy solutions tailored for
            modern brands.
          </p>
        </Flex>
      </FadeInSection>

      <FadeInSection className="relative">
        <Stagger className="grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <StaggerItem key={service.title} className="h-full">
                <CardContainer direction="col" align="start" gap="md" className="relative h-full overflow-hidden p-8">
                  <span aria-hidden="true" className={cn("pointer-events-none absolute h-28 w-28 rounded-full", service.cornerClass)} />
                  <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-surface-1">
                    {service.image ? (
                      <Image src={service.image} alt={service.imageAlt ?? service.title} fill sizes="48px" className="object-cover" />
                    ) : (
                      <span className={cn("flex h-12 w-12 items-center justify-center rounded-full", service.iconClass)}>
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    <p className="text-text-muted leading-relaxed">{service.description}</p>
                  </div>
                  <ul className="mt-1 space-y-2 text-sm text-text-secondary">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-brand-primary" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContainer>
              </StaggerItem>
            );
          })}
        </Stagger>
      </FadeInSection>
    </div>
  );
};

export default page;
