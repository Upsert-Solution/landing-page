import * as React from "react";

import { cn } from "@/src/lib/utils";
import { Flex, type FlexProps } from "./flex";

type CardContainerProps = FlexProps<React.ElementType> & {
  elevated?: boolean;
};

const baseClasses =
  "rounded-[28px] border border-transparent bg-surface-base px-7 py-6 shadow-[0_18px_40px_rgba(46,91,255,0.12),0_6px_18px_rgba(15,18,32,0.06)]";

const elevatedClasses = "shadow-[0_26px_60px_rgba(46,91,255,0.16),0_10px_28px_rgba(15,18,32,0.08)]";

const CardContainer = ({ className, elevated = false, ...props }: CardContainerProps) => {
  return (
    <Flex
      className={cn(baseClasses, elevated && elevatedClasses, "transition-all duration-100  ease-linear hover:-translate-y-1.5", className)}
      {...props}
    />
  );
};

CardContainer.displayName = "CardContainer";

export { CardContainer };
