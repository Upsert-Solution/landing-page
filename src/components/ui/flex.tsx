import * as React from "react";

import { cn } from "@/src/lib/utils";

type FlexDirection = "row" | "row-reverse" | "col" | "col-reverse";
type FlexAlign = "start" | "center" | "end" | "stretch" | "baseline";
type FlexJustify = "start" | "center" | "end" | "between" | "around" | "evenly";
type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";

type FlexGap = "none" | "xs" | "sm" | "md" | "lg" | "xl";

const directionClasses: Record<FlexDirection, string> = {
  row: "flex-row",
  "row-reverse": "flex-row-reverse",
  col: "flex-col",
  "col-reverse": "flex-col-reverse",
};

const alignClasses: Record<FlexAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
};

const justifyClasses: Record<FlexJustify, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

const wrapClasses: Record<FlexWrap, string> = {
  nowrap: "flex-nowrap",
  wrap: "flex-wrap",
  "wrap-reverse": "flex-wrap-reverse",
};

const gapClasses: Record<FlexGap, string> = {
  none: "gap-0",
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
};

type AsProp<T extends React.ElementType> = {
  as?: T;
};

type PropsToOmit<T extends React.ElementType, P> = keyof (AsProp<T> & P);

type PolymorphicComponentProps<T extends React.ElementType, P> = React.PropsWithChildren<AsProp<T> & P> &
  Omit<React.ComponentPropsWithoutRef<T>, PropsToOmit<T, P>>;

type PolymorphicRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>["ref"];

type FlexOwnProps = {
  direction?: FlexDirection;
  align?: FlexAlign;
  justify?: FlexJustify;
  wrap?: FlexWrap;
  gap?: FlexGap;
  inline?: boolean;
  smDirection?: FlexDirection;
  mdDirection?: FlexDirection;
  lgDirection?: FlexDirection;
  xlDirection?: FlexDirection;
  smAlign?: FlexAlign;
  mdAlign?: FlexAlign;
  lgAlign?: FlexAlign;
  xlAlign?: FlexAlign;
  smJustify?: FlexJustify;
  mdJustify?: FlexJustify;
  lgJustify?: FlexJustify;
  xlJustify?: FlexJustify;
  smWrap?: FlexWrap;
  mdWrap?: FlexWrap;
  lgWrap?: FlexWrap;
  xlWrap?: FlexWrap;
  smGap?: FlexGap;
  mdGap?: FlexGap;
  lgGap?: FlexGap;
  xlGap?: FlexGap;
  smInline?: boolean;
  mdInline?: boolean;
  lgInline?: boolean;
  xlInline?: boolean;
};

export type FlexProps<T extends React.ElementType = "div"> = PolymorphicComponentProps<T, FlexOwnProps>;

type FlexComponent = (<T extends React.ElementType = "div">(props: FlexProps<T> & { ref?: PolymorphicRef<T> }) => React.ReactElement | null) & {
  displayName?: string;
};

const Flex = React.forwardRef(
  (
    {
      as,
      className,
      direction = "row",
      align = "center",
      justify = "start",
      wrap = "nowrap",
      gap = "md",
      inline = false,
      smDirection,
      mdDirection,
      lgDirection,
      xlDirection,
      smAlign,
      mdAlign,
      lgAlign,
      xlAlign,
      smJustify,
      mdJustify,
      lgJustify,
      xlJustify,
      smWrap,
      mdWrap,
      lgWrap,
      xlWrap,
      smGap,
      mdGap,
      lgGap,
      xlGap,
      smInline,
      mdInline,
      lgInline,
      xlInline,
      ...props
    }: FlexProps<React.ElementType>,
    ref: React.ForwardedRef<HTMLElement>,
  ) => {
    const Comp = as ?? "div";

    return (
      <Comp
        ref={ref as React.Ref<HTMLElement>}
        className={cn(
          inline ? "inline-flex" : "flex",
          directionClasses[direction],
          alignClasses[align],
          justifyClasses[justify],
          wrapClasses[wrap],
          gapClasses[gap],
          smDirection ? `sm:${directionClasses[smDirection]}` : null,
          mdDirection ? `md:${directionClasses[mdDirection]}` : null,
          lgDirection ? `lg:${directionClasses[lgDirection]}` : null,
          xlDirection ? `xl:${directionClasses[xlDirection]}` : null,
          smAlign ? `sm:${alignClasses[smAlign]}` : null,
          mdAlign ? `md:${alignClasses[mdAlign]}` : null,
          lgAlign ? `lg:${alignClasses[lgAlign]}` : null,
          xlAlign ? `xl:${alignClasses[xlAlign]}` : null,
          smJustify ? `sm:${justifyClasses[smJustify]}` : null,
          mdJustify ? `md:${justifyClasses[mdJustify]}` : null,
          lgJustify ? `lg:${justifyClasses[lgJustify]}` : null,
          xlJustify ? `xl:${justifyClasses[xlJustify]}` : null,
          smWrap ? `sm:${wrapClasses[smWrap]}` : null,
          mdWrap ? `md:${wrapClasses[mdWrap]}` : null,
          lgWrap ? `lg:${wrapClasses[lgWrap]}` : null,
          xlWrap ? `xl:${wrapClasses[xlWrap]}` : null,
          smGap ? `sm:${gapClasses[smGap]}` : null,
          mdGap ? `md:${gapClasses[mdGap]}` : null,
          lgGap ? `lg:${gapClasses[lgGap]}` : null,
          xlGap ? `xl:${gapClasses[xlGap]}` : null,
          smInline === true ? "sm:inline-flex" : smInline === false ? "sm:flex" : null,
          mdInline === true ? "md:inline-flex" : mdInline === false ? "md:flex" : null,
          lgInline === true ? "lg:inline-flex" : lgInline === false ? "lg:flex" : null,
          xlInline === true ? "xl:inline-flex" : xlInline === false ? "xl:flex" : null,
          className,
        )}
        {...props}
      />
    );
  },
) as FlexComponent;

Flex.displayName = "Flex";

export { Flex };
