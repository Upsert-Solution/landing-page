import type { ComponentType, SVGProps } from "react";

import {
  ArrowUpRight,
  Globe,
  Headset,
  Lightbulb,
  PlaneLanding,
  RefreshCcw,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

import {
  Button,
  CardContainer,
  FadeInSection,
  Flex,
  Stagger,
  StaggerItem,
} from "@/src/components/ui";
import { cn } from "@/src/lib/utils";
import HeroSection from "./_components/hero-section";
import ProjectPreview from "./_components/project-preview";
import TestimonialsSection from "./_components/testimonials-section";

import Link from "next/link";

type Item = {
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>> | string;
  description?: string;
  iconClass?: string;
};

type Project = {
  title: string;
  description: string;
  url: string;
  fallbackImage: string;
  accentClass: string;
};

const stepProcessData: Item[] = [
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

const whatWeDoBest: Item[] = [
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

const toolsOfTheTrade: Item[] = [
  {
    title: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    iconClass: "bg-sky-100 text-sky-500",
  },
  {
    title: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    iconClass: "bg-neutral-200 text-neutral-900",
  },
  {
    title: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    iconClass: "bg-blue-100 text-blue-600",
  },
  {
    title: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    iconClass: "bg-cyan-100 text-cyan-500",
  },
  {
    title: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    iconClass: "bg-green-100 text-green-600",
  },
  {
    title: "Postgres",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    iconClass: "bg-red-100 text-red-500",
  },
  {
    title: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    iconClass: "bg-green-100 text-green-700",
  },
  {
    title: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    iconClass: "bg-sky-100 text-sky-600",
  },
  {
    title: "n8n",
    icon: "https://cdn.simpleicons.org/n8n/EA4B71",
    iconClass: "bg-rose-100 text-rose-500",
  },
  {
    title: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    iconClass: "bg-neutral-200 text-neutral-900",
  },
  {
    title: "Vercel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    iconClass: "bg-neutral-200 text-neutral-900",
  },
  {
    title: "GCP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
    iconClass: "bg-blue-100 text-blue-600",
  },
];

const recentProjects: Project[] = [
  {
    title: "Employra AI Career Intelligence",
    description:
      "A cutting-edge AI-driven platform that revolutionizes career development and job search strategies.",
    url: "https://employra.vercel.app/",
    fallbackImage: "/projects/employra.png",
    accentClass: "bg-brand-primary/10",
  },
  {
    title: "Money Trees Network",
    description:
      "Simple guides on saving money, budgeting, freelancing, VA work, and earning online responsibly.",
    url: "https://www.moneytreesnetwork.com/",
    fallbackImage: "/projects/money-trees-network.png",
    accentClass: "bg-brand-secondary/10",
  },
  {
    title: "TrackerTree",
    description:
      "Plan projects and routines, track goal costs, and come back to the right next step after interruptions.",
    url: "https://www.trackertree.com/",
    fallbackImage: "/projects/trackertree.png",
    accentClass: "bg-brand-tertiary/10",
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
              Your website is your digital storefront. Make sure it&apos;s
              welcoming, fast, and built to convert.
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
                    <h3
                      className={cn(
                        "text-lg font-semibold",
                        isFeatured && "text-white/95",
                      )}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={cn(
                        "text-text-muted leading-relaxed",
                        isFeatured && "text-white/85",
                      )}
                    >
                      {item.description}
                    </p>
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
            <p className="max-w-xl text-text-secondary">
              From launch-ready landing pages to full brand websites, we cover
              the essentials.
            </p>
          </Flex>

          <Stagger className="grid w-full md:grid-cols-2 gap-6 lg:gap-8">
            {whatWeDoBest.map((item) => {
              const Icon = item.icon;

              return (
                <StaggerItem key={item.title} className="h-full">
                  <CardContainer className="h-full">
                    <Flex className="gap-6 items-start">
                      <span
                        className={cn(
                          "flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
                          item.iconClass && item.iconClass,
                        )}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <Flex className="flex-col items-start gap-0">
                        <h6>{item.title}</h6>
                        <p className="text-text-muted leading-relaxed">
                          {item.description}
                        </p>
                      </Flex>
                    </Flex>
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
            <h2>Tools of the Trade</h2>
            <p className="max-w-xl text-text-secondary">
              Modern tech for modern solutions.
            </p>
          </Flex>

          <div className="relative w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <div className="flex w-max animate-marquee gap-4 sm:gap-6 lg:gap-8 hover:[animation-play-state:paused]">
              {[...toolsOfTheTrade, ...toolsOfTheTrade].map((tool, i) => {
                const Icon = tool.icon;

                return (
                  <CardContainer
                    key={`${tool.title}-${i}`}
                    direction="col"
                    align="center"
                    gap="xs"
                    elevated
                    className="w-28 sm:w-36 lg:w-44 shrink-0 items-center text-center py-5 px-3 sm:py-6 sm:px-4 lg:py-8 lg:px-6 rounded-2xl lg:rounded-3xl"
                  >
                    <span
                      className={cn(
                        "flex h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-16 shrink-0 items-center justify-center rounded-full",
                        tool.iconClass,
                      )}
                    >
                      {typeof Icon === "string" ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={Icon}
                          className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8"
                          alt={tool.title}
                        />
                      ) : (
                        <Icon
                          className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8"
                          aria-hidden="true"
                        />
                      )}
                    </span>
                    <p className="text-xs sm:text-sm lg:text-base font-bold text-text-primary leading-tight">
                      {tool.title}
                    </p>
                  </CardContainer>
                );
              })}
            </div>
          </div>
        </Flex>
      </FadeInSection>

      <FadeInSection className="py-6 lg:py-12">
        <Flex as="div" align="stretch" className="flex-col gap-12 lg:gap-16">
          <Flex className="flex-col items-center text-center gap-6 sm:flex-row sm:items-center sm:justify-between sm:text-left sm:gap-6 flex-wrap">
            <Flex className="flex-col items-center sm:items-start gap-3">
              <h2>Recent Splashes</h2>
              <p className="text-text-secondary">
                A look at some of our favorite creative collaborations.
              </p>
            </Flex>
            <Link href="/projects">
              <Button
                variant="secondary"
                className="border-2 border-brand-secondary text-text-primary font-bold px-6 py-3 text-base rounded-full whitespace-nowrap"
              >
                View All Projects
              </Button>
            </Link>
          </Flex>

          <Stagger className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {recentProjects.slice(0, 3).map((project) => (
              <StaggerItem key={project.title}>
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                >
                  <CardContainer
                    direction="col"
                    align="start"
                    gap="none"
                    elevated
                    className="h-full overflow-hidden p-0 rounded-3xl transition-transform duration-300 group-hover:-translate-y-1"
                  >
                    <ProjectPreview
                      url={project.url}
                      fallbackImage={project.fallbackImage}
                      title={project.title}
                      accentClass={project.accentClass}
                    />
                    <Flex className="flex-col items-start gap-2 p-6">
                      <Flex className="w-full items-center justify-between gap-2">
                        <h4>{project.title}</h4>
                        <ArrowUpRight
                          className="h-4 w-4 shrink-0 text-text-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-primary"
                          aria-hidden="true"
                        />
                      </Flex>
                      <p className="text-text-muted leading-relaxed">
                        {project.description}
                      </p>
                    </Flex>
                  </CardContainer>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Flex>
      </FadeInSection>

      <FadeInSection className="py-6 lg:py-12">
        <TestimonialsSection />
      </FadeInSection>

      <FadeInSection className="py-12 lg:py-20">
        <Flex as="div" className="items-center">
          <CardContainer className="relative w-full mx-auto overflow-hidden border-2 border-white/70 bg-[radial-gradient(120%_120%_at_100%_0%,rgba(150,216,255,0.55)_0%,rgba(235,237,255,0.95)_40%,rgba(244,245,255,0.98)_70%),radial-gradient(140%_140%_at_0%_100%,rgba(140,155,255,0.75)_0%,rgba(180,195,255,0.6)_28%,rgba(220,230,255,0.35)_52%,rgba(244,245,255,0)_72%)] px-8 sm:px-12 lg:px-16 py-16 sm:py-20 text-center rounded-[36px]">
            <Flex className="flex-col items-center w-full gap-6">
              <h2 className="text-balance text-3xl sm:text-4xl font-semibold">
                Ready to Grow?
              </h2>
              <p className="max-w-2xl text-text-secondary">
                Let&apos;s build a website that not only looks incredible but
                actually grows your business.
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
