"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/src/lib/utils";
import { Button, Flex } from "../ui";
import { useState } from "react";

type Item = {
  name: string;
  path: string;
};

const navItems: Item[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [openForPath, setOpenForPath] = useState<string | null>(null);
  const isOpen = openForPath === pathname;
  const isActive = (path: string) => pathname === path;

  const linkClass = (path: string) =>
    cn(
      "px-3 py-2 text-sm transition-all duration-300 ease-out",
      isActive(path) ? "font-bold text-brand-primary" : "font-base text-neutral-400 hover:text-brand-primary",
    );

  return (
    <Flex
      as="header"
      className="fixed top-5 left-1/2 z-50 w-[calc(100%-2rem)] -translate-x-1/2 rounded-full border border-neutral-50 bg-bg  px-5 py-3 shadow-[0_0_1000px_rgba(46,91,255,0.7)] backdrop-blur-[20px] md:w-[calc(100%-3rem)] lg:w-[calc(100%-4rem)] max-w-400"
    >
      <Flex className="w-full items-center justify-between gap-4">
        <Link
          className="font-bold text-brand-primary tracking-[-0.02em] cursor-pointer hover:opacity-70 transition-all duration-200 ease-linear"
          href="/"
        >
          Upsert Solution
        </Link>
        <Flex className="mx-auto hidden md:flex items-center" gap="sm">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path} className={linkClass(item.path)} aria-current={pathname === item.path ? "page" : undefined}>
              {item.name}
            </Link>
          ))}
        </Flex>
        <Flex className="items-center gap-3">
          <Button size="sm" className="hidden md:inline-flex">
            Get Started
          </Button>
          <Button
            type="button"
            aria-expanded={isOpen}
            onClick={() => setOpenForPath(isOpen ? null : pathname)}
            variant="outline"
            className="relative h-10 w-10 border-none md:hidden"
          >
            <span
              className={cn(
                "absolute left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-current transition-all duration-300",
                isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-3",
              )}
            />
            <span
              className={cn(
                "absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current transition-all duration-300",
                isOpen ? "opacity-0" : "opacity-100",
              )}
            />
            <span
              className={cn(
                "absolute left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-current transition-all duration-300",
                isOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-3",
              )}
            />
          </Button>
        </Flex>
      </Flex>

      <div
        id="site-menu"
        className={cn(
          "pointer-events-none absolute left-1/2 top-full mt-4 w-full -translate-x-1/2 rounded-[28px] border border-neutral-50 bg-bg dark:bg-surface-base/80 p-4 shadow-[0_20px_50px_rgba(46,91,255,0.18)] backdrop-blur-lg transition-all duration-300 md:hidden",
          isOpen ? "pointer-events-auto translate-y-0 opacity-100" : "-translate-y-2 opacity-0",
        )}
      >
        <Flex className="flex-col" align="stretch" gap="sm">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={linkClass(item.path)}
              aria-current={pathname === item.path ? "page" : undefined}
              onClick={() => setOpenForPath(null)}
            >
              {item.name}
            </Link>
          ))}
          <Button size="sm" className="w-full" onClick={() => setOpenForPath(null)}>
            Get Started
          </Button>
        </Flex>
      </div>
    </Flex>
  );
};

export default Header;
