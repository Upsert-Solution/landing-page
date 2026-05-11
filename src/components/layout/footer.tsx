"use client";

import Link from "next/link";
import { Flex, SocialIcon } from "../ui";
import type { SocialIconType } from "../ui/social-icon";

type FooterLink = {
  name: string;
  href: string;
};

type SocialLink = {
  id: SocialIconType;
  label: string;
  href: string;
};

const quickLinks: FooterLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const companyLinks: FooterLink[] = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Data Privacy", href: "/data-privacy" },
];

const socialLinks: SocialLink[] = [
  {
    id: "facebook",
    label: "Facebook",
    href: "#",
  },

  {
    id: "instagram",
    label: "Instagram",
    href: "#",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "#",
  },
  {
    id: "github",
    label: "GitHub",
    href: "#",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex as="footer" className="bg-bg-muted w-full ">
      <Flex className="max-w-400 mx-auto w-full px-4 sm:px-6 lg:px-8 pt-10 pb-7">
        <Flex className="w-full flex-col gap-8">
          <Flex className="w-full flex-col items-start gap-8 md:flex-row md:items-start">
            {/* Info */}
            <Flex className="flex-col items-start gap-2 md:max-w-[320px]">
              <h3 className="font-bold text-brand-primary tracking-[-0.02em] cursor-pointer hover:opacity-70 transition-all duration-200 ease-linear">
                Upsert Solution
              </h3>
              <p>Slogan of the company here</p>
            </Flex>

            <Flex className="w-full flex-col items-start gap-8 sm:flex-row sm:flex-wrap md:w-auto md:gap-10 md:ml-auto">
              {/* Quick Links */}
              <Flex className="flex-col gap-4 items-start min-w-35">
                <p className="font-semibold text-neutral-400 text-sm">Quick Links</p>
                <Flex className="flex-col gap-2 items-start">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-text-secondary hover:text-brand-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  ))}
                </Flex>
              </Flex>

              {/* Company */}
              <Flex className="flex-col gap-4 items-start min-w-35">
                <p className="font-semibold text-neutral-400 text-sm">Company</p>
                <Flex className="flex-col gap-2 items-start">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-text-secondary hover:text-brand-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  ))}
                </Flex>
              </Flex>

              {/* Social Links */}
              <Flex className="flex-col gap-4 items-start min-w-35">
                <p className="font-semibold text-neutral-400 text-sm">Follow Us</p>
                <Flex className="gap-3 flex-wrap">
                  {socialLinks.map((social) => (
                    <Link key={social.id} href={social.href} className="text-text-secondary hover:text-brand-primary transition-colors duration-200">
                      <SocialIcon className="h-4 w-4" type={social.id} label={social.label} />
                    </Link>
                  ))}
                </Flex>
              </Flex>
            </Flex>
          </Flex>

          {/* Divider */}
          <div className="w-full h-px bg-border" />

          {/* Copyright */}
          <Flex className="justify-center">
            <p className="text-text-muted text-sm">© {currentYear} Upsert Solution. All rights reserved.</p>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
