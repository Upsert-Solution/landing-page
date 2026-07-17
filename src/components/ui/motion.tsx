"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/src/lib/utils";

type MotionConflicts = "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart";

type FadeInProps = Omit<React.ComponentPropsWithoutRef<"div">, MotionConflicts> & {
  delay?: number;
};

type FadeInSectionProps = Omit<React.ComponentPropsWithoutRef<"section">, MotionConflicts> & {
  delay?: number;
};

type StaggerProps = Omit<React.ComponentPropsWithoutRef<"div">, MotionConflicts> & {
  delay?: number;
  stagger?: number;
};

type StaggerItemProps = Omit<React.ComponentPropsWithoutRef<"div">, MotionConflicts>;

const useFadeConfig = (delay = 0) => {
  const prefersReducedMotion = useReducedMotion();

  return {
    prefersReducedMotion,
    variants: {
      hidden: { opacity: 0, y: 16 },
      show: {
        opacity: 1,
        y: 0,
        transition: prefersReducedMotion ? { duration: 0 } : { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
      },
    },
  };
};

export const FadeIn = ({ className, delay = 0, children, ...props }: FadeInProps) => {
  const { prefersReducedMotion, variants } = useFadeConfig(delay);

  return (
    <motion.div
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const FadeInSection = ({ className, delay = 0, children, ...props }: FadeInSectionProps) => {
  const { prefersReducedMotion, variants } = useFadeConfig(delay);
  const sectionClassName = cn(className, props.id ? "scroll-mt-[120px]" : undefined);

  return (
    <motion.section
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      className={sectionClassName}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export const Stagger = ({ className, delay = 0, stagger = 0.12, children, ...props }: StaggerProps) => {
  const prefersReducedMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: prefersReducedMotion ? { duration: 0 } : { staggerChildren: stagger, delayChildren: delay },
    },
  };

  return (
    <motion.div
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ className, children, ...props }: StaggerItemProps) => {
  const prefersReducedMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: prefersReducedMotion ? { duration: 0 } : { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div variants={variants} className={cn(className)} {...props}>
      {children}
    </motion.div>
  );
};
