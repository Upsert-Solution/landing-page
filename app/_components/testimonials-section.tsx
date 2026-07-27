"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CardContainer, Flex, Stagger, StaggerItem } from "@/src/components/ui";
import { testimonials } from "../_constants/testimonial";
import type { Testimonial } from "../_types";
import { cn } from "@/src/lib/utils";

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
      {testimonial.name?.charAt(0) ?? "★"}
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
    <Stagger className="flex flex-col items-center gap-8 lg:gap-10 w-full">
      <StaggerItem className="w-full">
        <Flex className="text-center flex-col items-center gap-3 max-w-2xl mx-auto">
          <h2>What Our Clients Say</h2>
          <p className="max-w-xl text-text-secondary">
            We take pride in our work, but don&apos;t just take our word for it.
            Here&apos;s what some of our clients have to say about their
            experience with us.
          </p>
        </Flex>
      </StaggerItem>

      <StaggerItem className="w-full">
        {/* Mobile + Tablet: single card, buttons flanking directly */}
        <div className="relative flex lg:hidden w-full max-w-2xl mx-auto items-center justify-center gap-4">
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
              <p className="text-base sm:text-lg leading-relaxed text-text-primary text-center italic">
                &ldquo;{current.quote}&rdquo;
              </p>
            </Flex>

            <Flex className="items-center gap-3 mx-auto">
              <Avatar testimonial={current} size="sm" />
              <Flex className="flex-col items-start gap-0">
                {current.name && (
                  <p className="text-sm font-bold text-text-primary">
                    {current.name}
                  </p>
                )}
                {current.role && (
                  <p className="text-xs text-text-muted">{current.role}</p>
                )}
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
                {testimonials[prevIndex].name && (
                  <p className="text-sm font-bold text-text-primary">
                    {testimonials[prevIndex].name}
                  </p>
                )}
                {testimonials[prevIndex].role && (
                  <p className="text-xs text-text-muted">
                    {testimonials[prevIndex].role}
                  </p>
                )}
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
              <p className="text-xl leading-relaxed text-text-primary">
                &ldquo;{current.quote}&rdquo;
              </p>
            </Flex>

            <Flex className="items-center gap-3 mt-6">
              <Avatar testimonial={current} size="lg" />
              <Flex className="flex-col items-start gap-0">
                {current.name && (
                  <p className="text-base font-bold text-text-primary">
                    {current.name}
                  </p>
                )}
                {current.role && (
                  <p className="text-sm text-text-muted">{current.role}</p>
                )}
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
                {testimonials[nextIndex].name && (
                  <p className="text-sm font-bold text-text-primary">
                    {testimonials[nextIndex].name}
                  </p>
                )}
                {testimonials[nextIndex].role && (
                  <p className="text-xs text-text-muted">
                    {testimonials[nextIndex].role}
                  </p>
                )}
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
      </StaggerItem>

      <StaggerItem>
        <Flex className="items-center gap-2 rounded-full bg-surface-2 px-4 py-2">
          {testimonials.map((testimonial, i) => (
            <button
              key={testimonial.name ?? testimonial.quote}
              type="button"
              onClick={() => setIndex(i)}
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
      </StaggerItem>
    </Stagger>
  );
}

export default TestimonialsSection;
