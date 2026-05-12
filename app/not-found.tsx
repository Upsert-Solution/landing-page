import Link from "next/link";

import { Button, Flex } from "@/src/components/ui";
import { Home, Info, Mail, PencilRuler } from "lucide-react";
import Image from "next/image";

const useFullLinks = [
  {
    name: "Services",
    path: "/services",
    icon: PencilRuler,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: Mail,
  },
  {
    name: "About",
    path: "/about",
    icon: Info,
  },
];

const NotFound = () => {
  return (
    <Flex as="section" className="min-h-screen w-full justify-center lg:-mt-25 mb-25 lg:mb-0">
      <Flex className="flex-col-reverse lg:flex-row">
        <Flex className="flex-col items-start  gap-5">
          <Flex className="gap-2 p-3 rounded-full border-white border bg-red-200 text-red-900">
            <Info className="w-4 h-4" />
            <p className="text-xs font-semibold">Error 404</p>
          </Flex>
          <h1 className="text-8xl bg-linear-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text">Oops!</h1>
          <p className="text-4xl">This page is not found.</p>
          <p className="max-w-xl">
            We can&apos;t seem to find the page you&apos;re looking for. It might have drifted off into the digital ether, or the link might be
            broken. Let&apos;s get you back to solid ground.
          </p>
          <Link href={"/"}>
            <Button size="sm">
              <Home className="w-4 h-4" />
              <p className="text-xs">Back to Home</p>
            </Button>
          </Link>
          <Flex className="flex-col  gap-3 bg-white rounded-full px-10 py-5 text-xs items-start">
            <p className="text-sm font-semibold">Helpful Links</p>
            <Flex className="gap-5">
              {useFullLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="inline-flex items-center gap-2 text-text-secondary hover:text-brand-primary p-2 px-3 rounded-full border border-black/10 bg-bg-subtle/20 text-brand-primary"
                  >
                    <Icon className="h-3 w-3" />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </Flex>
          </Flex>
        </Flex>
        <Image src="/images/404_illustration_upsert.svg" width={500} height={500} alt="404 image" />
      </Flex>
    </Flex>
  );
};

export default NotFound;
