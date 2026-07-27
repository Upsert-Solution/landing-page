import Link from "next/link";

import { Button, CardContainer, Flex } from "@/src/components/ui";

function CtaSection() {
  return (
    <Flex as="div" className="items-center">
      <CardContainer className="relative w-full mx-auto overflow-hidden border-2 border-white/70 bg-[radial-gradient(120%_120%_at_100%_0%,rgba(150,216,255,0.55)_0%,rgba(235,237,255,0.95)_40%,rgba(244,245,255,0.98)_70%),radial-gradient(140%_140%_at_0%_100%,rgba(140,155,255,0.75)_0%,rgba(180,195,255,0.6)_28%,rgba(220,230,255,0.35)_52%,rgba(244,245,255,0)_72%)] px-8 sm:px-12 lg:px-16 py-16 sm:py-20 text-center rounded-[36px]">
        <Flex className="flex-col items-center w-full gap-6">
          <h2 className="text-balance text-3xl sm:text-4xl font-semibold">
            Ready to Grow?
          </h2>
          <p className="max-w-2xl text-text-secondary">
            Let&apos;s build a website that not only looks incredible but
            actually grows your business.
          </p>
          <Link href="/contact">
            <Button>Start Your Project Today</Button>
          </Link>
        </Flex>
      </CardContainer>
    </Flex>
  );
}

export default CtaSection;