"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { CardContainer, Flex } from "@/src/components/ui";
import { cn } from "@/src/lib/utils";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatarClass: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Easier branding and marketing with Upsert Solution. They helped us create a cohesive brand identity that resonates with our audience.",
    name: "Patrick",
    role: "Marketing Manager",
    avatarClass: "bg-brand-primary/15 text-brand-primary",
  },
  {
    quote:
      "The team at Upsert Solution is incredibly professional and dedicated. They went above and beyond to ensure our project was a success. We couldn't be happier with the results.Also, their customer support is outstanding. They are always available to answer our questions and provide guidance.",
    name: "Rovic",
    role: "Client",
    avatarClass: "bg-brand-tertiary/20 text-brand-tertiary-600",
  },
  {
    quote:
      "From a simple website to a complex e-commerce platform, Upsert Solution has the expertise to deliver exceptional results. Their attention to detail and commitment to quality is which help boost the success of our business. We highly recommend their services to anyone looking for top-notch web development.",
    name: "Carlos",
    role: "Client",
    avatarClass: "bg-brand-secondary/15 text-brand-secondary-600",
  },
];

function Avatar({
  testimonial,
  size,
}: {
  testimonial: Testimonial;
  size: "sm" | "lg";
}) {
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full font-bold",
        size === "lg" ? "h-12 w-12 text-base" : "h-10 w-10 text-sm",
        testimonial.avatarClass,
      )}
    >
      {testimonial.name.charAt(0)}
    </span>
  );
}

function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const prevIndex = (index - 1 + total) % total;
  const nextIndex = (index + 1) % total;

  const goPrev = () => {
    setIndex((i) => (i - 1 + total) % total);
  };
  const goNext = () => {
    setIndex((i) => (i + 1) % total);
  };

  const current = testimonials[index];

  return (
    <Flex as="div" className="flex-col items-center gap-8 lg:gap-10 w-full">
      <Flex className="text-center flex-col items-center gap-3 max-w-2xl mx-auto">
        <h2>What Our Clients Say</h2>
        <p className="max-w-xl text-text-secondary">
          We take pride in our work, but don&apos;t just take our word for it.
          Here&apos;s what some of our clients have to say about their
          experience with us.
        </p>
      </Flex>

      {/* Mobile + Tablet: single card, buttons flanking directly */}
      <div className="relative flex lg:hidden w-full max-w-2xl items-center justify-center gap-4">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous testimonial"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-primary to-brand-primary-600 shadow-lg transition-transform hover:scale-105"
        >
          <ArrowLeft
            className="h-6 w-6 text-white"
            strokeWidth={2.75}
            aria-hidden="true"
          />
        </button>

        <CardContainer
          direction="col"
          align="start"
          justify="between"
          gap="md"
          elevated
          className="relative flex-1 min-h-[220px] rounded-3xl p-6 sm:p-8 border-2 border-brand-secondary/40 transition-all duration-300"
        >
          <Flex direction="col" align="start" gap="sm" className="w-full">
            <p
              className={cn(
                "text-base sm:text-lg leading-relaxed text-text-primary text-center italic",
              )}
            >
              &ldquo;{current.quote}&rdquo;
            </p>
          </Flex>

          <Flex className="items-center gap-3 mx-auto">
            <Avatar testimonial={current} size="sm" />
            <Flex className="flex-col items-start gap-0">
              <p className="text-sm font-bold text-text-primary">
                {current.name}
              </p>
              <p className="text-xs text-text-muted">{current.role}</p>
            </Flex>
          </Flex>

          <span
            aria-hidden="true"
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-6 w-6 rotate-45 rounded-sm border-b-2 border-r-2 border-brand-secondary/40 bg-surface-1"
          />
        </CardContainer>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next testimonial"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-secondary to-brand-secondary-600 shadow-lg transition-transform hover:scale-105"
        >
          <ArrowRight
            className="h-6 w-6 text-white"
            strokeWidth={2.75}
            aria-hidden="true"
          />
        </button>
      </div>

      {/* Desktop only: prev/current/next with edge buttons */}
      <div className="relative hidden lg:flex w-full items-start justify-center gap-6">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous testimonial"
          className="absolute left-0 top-32 z-20 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-primary to-brand-primary-600 shadow-lg transition-transform hover:scale-105"
        >
          <ArrowLeft
            className="h-6 w-6 text-white"
            strokeWidth={2.75}
            aria-hidden="true"
          />
        </button>

        <CardContainer
          direction="col"
          align="start"
          justify="between"
          gap="md"
          elevated
          className="flex w-full max-w-sm h-[260px] scale-95 opacity-70 blur-[1px] rounded-3xl p-7 transition-all duration-500"
        >
          <p className="text-base leading-relaxed text-text-primary line-clamp-3">
            &ldquo;{testimonials[prevIndex].quote}&rdquo;
          </p>
          <Flex className="items-center gap-3">
            <Avatar testimonial={testimonials[prevIndex]} size="sm" />
            <Flex className="flex-col items-start gap-0">
              <p className="text-sm font-bold text-text-primary">
                {testimonials[prevIndex].name}
              </p>
              <p className="text-xs text-text-muted">
                {testimonials[prevIndex].role}
              </p>
            </Flex>
          </Flex>
        </CardContainer>

        <CardContainer
          direction="col"
          align="start"
          justify="start"
          gap="md"
          elevated
          className="relative z-10 flex w-full max-w-xl min-h-[300px] scale-100 opacity-100 rounded-3xl p-10 border-2 border-brand-secondary/50 transition-all duration-500"
        >
          <Flex direction="col" align="start" gap="sm" className="w-full">
            <p className={cn("text-xl leading-relaxed text-text-primary")}>
              &ldquo;{current.quote}&rdquo;
            </p>
          </Flex>

          <Flex className="items-center gap-3 mt-6">
            <Avatar testimonial={current} size="lg" />
            <Flex className="flex-col items-start gap-0">
              <p className="text-base font-bold text-text-primary">
                {current.name}
              </p>
              <p className="text-sm text-text-muted">{current.role}</p>
            </Flex>
          </Flex>

          <span
            aria-hidden="true"
            className="absolute -bottom-3 left-12 h-6 w-6 rotate-45 rounded-sm border-b-2 border-r-2 border-brand-secondary/50 bg-surface-1"
          />
        </CardContainer>

        <CardContainer
          direction="col"
          align="start"
          justify="between"
          gap="md"
          elevated
          className="flex w-full max-w-sm h-[260px] scale-95 opacity-70 blur-[1px] rounded-3xl p-7 transition-all duration-500"
        >
          <p className="text-base leading-relaxed text-text-primary line-clamp-3">
            &ldquo;{testimonials[nextIndex].quote}&rdquo;
          </p>
          <Flex className="items-center gap-3">
            <Avatar testimonial={testimonials[nextIndex]} size="sm" />
            <Flex className="flex-col items-start gap-0">
              <p className="text-sm font-bold text-text-primary">
                {testimonials[nextIndex].name}
              </p>
              <p className="text-xs text-text-muted">
                {testimonials[nextIndex].role}
              </p>
            </Flex>
          </Flex>
        </CardContainer>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next testimonial"
          className="absolute right-0 top-32 z-20 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-secondary to-brand-secondary-600 shadow-lg transition-transform hover:scale-105"
        >
          <ArrowRight
            className="h-6 w-6 text-white"
            strokeWidth={2.75}
            aria-hidden="true"
          />
        </button>
      </div>

      <Flex className="items-center gap-2 rounded-full bg-surface-2 px-4 py-2">
        {testimonials.map((testimonial, i) => (
          <button
            key={testimonial.name}
            type="button"
            onClick={() => {
              setIndex(i);
            }}
            aria-label={`Go to testimonial ${i + 1}`}
            className={cn(
              "h-2.5 rounded-full transition-all duration-300",
              i === index
                ? "w-7 bg-brand-primary shadow-sm"
                : "w-2.5 bg-[var(--neutral-300)] hover:bg-[var(--neutral-400)]",
            )}
          />
        ))}
      </Flex>
    </Flex>
  );
}

export default TestimonialsSection;
