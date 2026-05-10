import * as React from "react";

import { cn } from "@/src/lib/utils";

type GridGap = "none" | "xs" | "sm" | "md" | "lg" | "xl";
type GridAlign = "start" | "center" | "end" | "stretch";
type GridJustify = "start" | "center" | "end" | "between" | "around" | "evenly";

type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type GridRows = 1 | 2 | 3 | 4 | 5 | 6;

type GridFlow = "row" | "col" | "dense" | "row-dense" | "col-dense";

const gapClasses: Record<GridGap, string> = {
  none: "gap-0",
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
};

const alignClasses: Record<GridAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

const justifyClasses: Record<GridJustify, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

const flowClasses: Record<GridFlow, string> = {
  row: "grid-flow-row",
  col: "grid-flow-col",
  dense: "grid-flow-dense",
  "row-dense": "grid-flow-row-dense",
  "col-dense": "grid-flow-col-dense",
};

const colClasses: Record<GridCols, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  7: "grid-cols-7",
  8: "grid-cols-8",
  9: "grid-cols-9",
  10: "grid-cols-10",
  11: "grid-cols-11",
  12: "grid-cols-12",
};

const rowClasses: Record<GridRows, string> = {
  1: "grid-rows-1",
  2: "grid-rows-2",
  3: "grid-rows-3",
  4: "grid-rows-4",
  5: "grid-rows-5",
  6: "grid-rows-6",
};

type AsProp<T extends React.ElementType> = {
  as?: T;
};

type PropsToOmit<T extends React.ElementType, P> = keyof (AsProp<T> & P);

type PolymorphicComponentProps<T extends React.ElementType, P> = React.PropsWithChildren<AsProp<T> & P> &
  Omit<React.ComponentPropsWithoutRef<T>, PropsToOmit<T, P>>;

type PolymorphicRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>["ref"];

type GridOwnProps = {
  cols?: GridCols;
  rows?: GridRows;
  gap?: GridGap;
  align?: GridAlign;
  justify?: GridJustify;
  flow?: GridFlow;
  smCols?: GridCols;
  mdCols?: GridCols;
  lgCols?: GridCols;
  xlCols?: GridCols;
  smRows?: GridRows;
  mdRows?: GridRows;
  lgRows?: GridRows;
  xlRows?: GridRows;
  smGap?: GridGap;
  mdGap?: GridGap;
  lgGap?: GridGap;
  xlGap?: GridGap;
  smAlign?: GridAlign;
  mdAlign?: GridAlign;
  lgAlign?: GridAlign;
  xlAlign?: GridAlign;
  smJustify?: GridJustify;
  mdJustify?: GridJustify;
  lgJustify?: GridJustify;
  xlJustify?: GridJustify;
  smFlow?: GridFlow;
  mdFlow?: GridFlow;
  lgFlow?: GridFlow;
  xlFlow?: GridFlow;
};

export type GridProps<T extends React.ElementType = "div"> = PolymorphicComponentProps<T, GridOwnProps>;

type GridComponent = (<T extends React.ElementType = "div">(props: GridProps<T> & { ref?: PolymorphicRef<T> }) => React.ReactElement | null) & {
  displayName?: string;
};

const Grid = React.forwardRef(
  (
    {
      as,
      className,
      cols = 2,
      rows,
      gap = "md",
      align = "stretch",
      justify = "start",
      flow = "row",
      smCols,
      mdCols,
      lgCols,
      xlCols,
      smRows,
      mdRows,
      lgRows,
      xlRows,
      smGap,
      mdGap,
      lgGap,
      xlGap,
      smAlign,
      mdAlign,
      lgAlign,
      xlAlign,
      smJustify,
      mdJustify,
      lgJustify,
      xlJustify,
      smFlow,
      mdFlow,
      lgFlow,
      xlFlow,
      ...props
    }: GridProps<React.ElementType>,
    ref: React.ForwardedRef<HTMLElement>,
  ) => {
    const Comp = as ?? "div";

    return (
      <Comp
        ref={ref as React.Ref<HTMLElement>}
        className={cn(
          "grid",
          colClasses[cols],
          rows ? rowClasses[rows] : null,
          gapClasses[gap],
          alignClasses[align],
          justifyClasses[justify],
          flowClasses[flow],
          smCols ? `sm:${colClasses[smCols]}` : null,
          mdCols ? `md:${colClasses[mdCols]}` : null,
          lgCols ? `lg:${colClasses[lgCols]}` : null,
          xlCols ? `xl:${colClasses[xlCols]}` : null,
          smRows ? `sm:${rowClasses[smRows]}` : null,
          mdRows ? `md:${rowClasses[mdRows]}` : null,
          lgRows ? `lg:${rowClasses[lgRows]}` : null,
          xlRows ? `xl:${rowClasses[xlRows]}` : null,
          smGap ? `sm:${gapClasses[smGap]}` : null,
          mdGap ? `md:${gapClasses[mdGap]}` : null,
          lgGap ? `lg:${gapClasses[lgGap]}` : null,
          xlGap ? `xl:${gapClasses[xlGap]}` : null,
          smAlign ? `sm:${alignClasses[smAlign]}` : null,
          mdAlign ? `md:${alignClasses[mdAlign]}` : null,
          lgAlign ? `lg:${alignClasses[lgAlign]}` : null,
          xlAlign ? `xl:${alignClasses[xlAlign]}` : null,
          smJustify ? `sm:${justifyClasses[smJustify]}` : null,
          mdJustify ? `md:${justifyClasses[mdJustify]}` : null,
          lgJustify ? `lg:${justifyClasses[lgJustify]}` : null,
          xlJustify ? `xl:${justifyClasses[xlJustify]}` : null,
          smFlow ? `sm:${flowClasses[smFlow]}` : null,
          mdFlow ? `md:${flowClasses[mdFlow]}` : null,
          lgFlow ? `lg:${flowClasses[lgFlow]}` : null,
          xlFlow ? `xl:${flowClasses[xlFlow]}` : null,
          className,
        )}
        {...props}
      />
    );
  },
) as GridComponent;

Grid.displayName = "Grid";

export { Grid };
