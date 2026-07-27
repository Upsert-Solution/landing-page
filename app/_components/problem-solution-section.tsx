import { CardContainer, Flex, Stagger, StaggerItem } from "@/src/components/ui";
import { stepProcessData } from "../_constants/process";
import { cn } from "@/src/lib/utils";

function ProblemSolutionSection() {
  return (
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
                  {typeof Icon !== "string" && (
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  )}
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
  );
}

export default ProblemSolutionSection;
