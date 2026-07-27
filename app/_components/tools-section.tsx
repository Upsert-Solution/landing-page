import { CardContainer, Flex, Stagger, StaggerItem } from "@/src/components/ui";
import { toolsOfTheTrade } from "../_constants/tools";
import { cn } from "@/src/lib/utils";

function ToolsSection() {
  return (
    <Stagger stagger={0.18} className="flex flex-col gap-12 lg:gap-16">
      <Flex className="text-center flex-col items-center gap-3 max-w-2xl mx-auto">
        <StaggerItem>
          <h2>Tools of the Trade</h2>
        </StaggerItem>
        <StaggerItem>
          <p className="max-w-xl text-text-secondary">
            Modern tech for modern solutions.
          </p>
        </StaggerItem>
      </Flex>

      <StaggerItem>
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
      </StaggerItem>
    </Stagger>
  );
}

export default ToolsSection;
