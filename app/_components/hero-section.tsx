import Image from "next/image";
import { Rocket, Sparkles } from "lucide-react";

import { Button, Flex } from "@/src/components/ui";
import Link from "next/link";

const HeroSection = () => {
  return (
    <Flex className="w-full flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-16">
      <Flex className="flex-col w-full lg:max-w-130 xl:max-w-145 items-center lg:items-start gap-5 text-center lg:text-left">
        <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.02em] leading-[1.05]">
          Websites That Turn Visitors Into <span className="text-brand-primary">Customers.</span>
        </h1>
        <p className="text-text-secondary text-pretty max-w-lg leading-relaxed">
          We help businesses create modern, high-performing websites that build trust and drive real results.
        </p>
        <Flex className="items-center lg:items-start flex-col sm:flex-row gap-4">
          <Link href="/contact">
            <Button size="sm">Start Your Project</Button>
          </Link>
          <Button size="sm" variant="secondary">
            View Our Work
          </Button>
        </Flex>
      </Flex>
      <div className="relative w-full max-w-130 sm:max-w-140 lg:max-w-160 xl:max-w-180 mx-auto lg:mx-0">
        <div className="pointer-events-none absolute -bottom-12 right-6 h-44 w-44 rounded-full bg-brand-secondary/35 blur-3xl" />
        <Image
          src="/images/hero_browser.svg"
          width={780}
          height={780}
          alt="Website preview"
          className="w-full h-auto drop-shadow-[0_28px_60px_rgba(46,91,255,0.22)] lg:rotate-2"
          sizes="(min-width: 1280px) 720px, (min-width: 1024px) 640px, (min-width: 640px) 560px, 90vw"
          priority
        />
        <div className="pointer-events-none absolute -bottom-4 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand-secondary text-white shadow-[0_14px_28px_rgba(0,204,249,0.35)] motion-reduce:animate-none animate-[float_7s_ease-in-out_infinite]">
          <Sparkles className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="pointer-events-none absolute -top-4 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand-tertiary text-white shadow-[0_16px_30px_rgba(255,214,0,0.3)] motion-reduce:animate-none animate-[float_8s_ease-in-out_infinite] [animation-delay:0.6s]">
          <Rocket className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>
    </Flex>
  );
};

export default HeroSection;
