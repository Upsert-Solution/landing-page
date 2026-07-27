import { FadeInSection, Flex } from "@/src/components/ui";
import HeroSection from "./_components/hero-section";
import TestimonialsSection from "./_components/testimonials-section";
import ProblemSolutionSection from "./_components/problem-solution-section";
import WhatWeDoSection from "./_components/what-we-do-section";
import ToolsSection from "./_components/tools-section";
import ProjectSection from "./_components/project-section";
import CtaSection from "./_components/cta-section";

const Page = () => {
  return (
    <>
      <FadeInSection className="w-full min-h-[calc(100svh-6rem)] py-16 lg:py-24">
        <Flex as="div" className="w-full items-center">
          <HeroSection />
        </Flex>
      </FadeInSection>

      <FadeInSection className="py-6 lg:py-12">
        <ProblemSolutionSection />
      </FadeInSection>

      <FadeInSection className="py-6 lg:py-12">
        <WhatWeDoSection />
      </FadeInSection>

      <FadeInSection className="py-6 lg:py-12">
        <ToolsSection />
      </FadeInSection>

      <FadeInSection className="py-6 lg:py-12">
        <ProjectSection />
      </FadeInSection>

      <FadeInSection className="py-6 lg:py-12">
        <TestimonialsSection />
      </FadeInSection>

      <FadeInSection className="py-12 lg:py-20">
        <CtaSection />
      </FadeInSection>
    </>
  );
};

export default Page;