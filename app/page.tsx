import type { ComponentType, SVGProps } from "react";

import { Globe, Headset, Lightbulb, PlaneLanding, RefreshCcw, TrendingDown, TrendingUp } from "lucide-react";

import { Button, CardContainer, FadeInSection, Flex, Stagger, StaggerItem } from "@/src/components/ui";
import { cn } from "@/src/lib/utils";
import HeroSection from "./_components/hero-section";
import Link from "next/link";

type Item = {
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  description: string;
  iconClass?: string;
};

const stepProcessData: Item[] = [
  {
    title: "The Problem",
    icon: TrendingDown,
    description: "Outdated websites drive potential clients straight to your competitors.",
    iconClass: "bg-red-100 text-red-900",
  },
  {
    title: "Our Solution",
    icon: Lightbulb,
    description: "We craft beautiful, lightning-fast, user-centric websites that guide visitors naturally toward making a purchase or inquiry.",
  },
  {
    title: "The Result",
    icon: TrendingUp,
    description: "Increased trust, higher conversion rates, and a digital presence you can truly be proud of.",
    iconClass: "bg-brand-secondary/5 text-brand-secondary",
  },
];

const whatWeDoBest: Item[] = [
  {
    title: "Business Websites",
    icon: Globe,
    description: "Comprehensive, multi-page sites designed to showcase your brand's full story and capabilities.",
    iconClass: "bg-brand-primary/10 text-brand-primary",
  },
  {
    title: "Landing Pages",
    icon: PlaneLanding,
    description: "High-converting, single-page experiences focused on driving specific actions and capturing leads.",
    iconClass: "bg-brand-secondary/5 text-brand-secondary",
  },
  {
    title: "Redesign",
    icon: RefreshCcw,
    description: "Breathe new life into your existing site with a modern facelift and improved user experience.",
    iconClass: "bg-brand-tertiary/10 text-neutral-600",
  },
  {
    title: "Ongoing Support",
    icon: Headset,
    description: "Reliable maintenance, updates, and optimization to keep your site running smoothly.",
    iconClass: "bg-neutral-200 text-neutral-900",
  },
];

const page = () => {
  return (
    <>
      <FadeInSection className="w-full min-h-[calc(100svh-6rem)] py-16 lg:py-24">
        <Flex as="div" className="w-full items-center">
          <HeroSection />
        </Flex>
      </FadeInSection>
      {/* Another Section */}
      <FadeInSection className="py-6 lg:py-12">
        <Flex as="div" className="flex-col gap-12 lg:gap-16">
          <Flex className="text-center flex-col items-center gap-3 max-w-2xl mx-auto">
            <h2>Stop Losing Customers to Outdated Design</h2>
            <p className="max-w-xl text-text-secondary">
              Your website is your digital storefront. Make sure it&apos;s welcoming, fast, and built to convert.
            </p>
          </Flex>
          <Stagger className="grid w-full md:grid-cols-3 gap-6 lg:gap-8">
            {stepProcessData.map((item, index) => {
              const Icon = item.icon;
              const isFeatured = index === 1;

              return (
                <StaggerItem key={item.title} className="h-full">
                  <CardContainer
                    direction="col"
                    align="start"
                    gap="md"
                    elevated
                    className={cn(
                      "h-full items-start text-left",
                      isFeatured &&
                        "md:-translate-y-2 md:scale-[1.03] bg-brand-primary! border-transparent! shadow-[0_24px_60px_rgba(46,91,255,0.35)]!",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface-low text-brand-primary",
                        isFeatured && "bg-white text-brand-primary",
                        item.iconClass && item.iconClass,
                      )}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className={cn("text-lg font-semibold", isFeatured && "text-white/95")}>{item.title}</h3>
                    <p className={cn("text-text-muted leading-relaxed", isFeatured && "text-white/85")}>{item.description}</p>
                  </CardContainer>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Flex>
      </FadeInSection>
      <FadeInSection className="py-6 lg:py-12">
        <Flex as="div" className="flex-col gap-12 lg:gap-16">
          <Flex className="text-center flex-col items-center gap-3 max-w-2xl mx-auto">
            <h2>What We Do Best</h2>
            <p className="max-w-xl text-text-secondary">From launch-ready landing pages to full brand websites, we cover the essentials.</p>
          </Flex>

          <Stagger className="grid w-full md:grid-cols-2 gap-6 lg:gap-8">
            {whatWeDoBest.map((item) => {
              const Icon = item.icon;

              return (
                <StaggerItem key={item.title} className="h-full">
                  <CardContainer className="h-full">
                    <Flex className="gap-6 items-start">
                      <span className={cn("flex h-11 w-11 shrink-0 items-center justify-center rounded-full", item.iconClass && item.iconClass)}>
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <Flex className="flex-col items-start gap-0">
                        <h6>{item.title}</h6>
                        <p className="text-text-muted leading-relaxed">{item.description}</p>
                      </Flex>
                    </Flex>
                  </CardContainer>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Flex>
      </FadeInSection>

      <FadeInSection className="py-12 lg:py-20">
        <Flex as="div" className="items-center">
          <CardContainer className="relative w-full mx-auto overflow-hidden border-2 border-white/70 bg-[radial-gradient(120%_120%_at_100%_0%,rgba(150,216,255,0.55)_0%,rgba(235,237,255,0.95)_40%,rgba(244,245,255,0.98)_70%),radial-gradient(140%_140%_at_0%_100%,rgba(140,155,255,0.75)_0%,rgba(180,195,255,0.6)_28%,rgba(220,230,255,0.35)_52%,rgba(244,245,255,0)_72%)] px-8 sm:px-12 lg:px-16 py-16 sm:py-20 text-center rounded-[36px]">
            <Flex className="flex-col items-center w-full gap-6">
              <h2 className="text-balance text-3xl sm:text-4xl font-semibold">Ready to Grow?</h2>
              <p className="max-w-2xl text-text-secondary">
                Let&apos;s build a website that not only looks incredible but actually grows your business.
              </p>
              <Link href="/contact">
                <Button>Start Your Project Today</Button>
              </Link>
            </Flex>
          </CardContainer>
        </Flex>
      </FadeInSection>
    </>
  );
};

export default page;
