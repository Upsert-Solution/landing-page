import { CardContainer, Flex, Stagger, StaggerItem } from "@/src/components/ui";
import { whatWeDoBest } from "../_constants/what-we-do";
import { cn } from "@/src/lib/utils";

function WhatWeDoSection() {
  return (
    <Flex as="div" className="flex-col gap-12 lg:gap-16">
      <Flex className="text-center flex-col items-center gap-3 max-w-2xl mx-auto">
        <h2>What We Do Best</h2>
        <p className="max-w-xl text-text-secondary">
          From launch-ready landing pages to full brand websites, we cover the
          essentials.
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
                    {typeof Icon !== "string" && (
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    )}
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
  );
}

export default WhatWeDoSection;
