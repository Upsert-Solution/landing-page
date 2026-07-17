import Link from "next/link";
import { ShieldCheck, Clock, Mail } from "lucide-react";
import { Flex, CardContainer, FadeInSection } from "@/src/components/ui";
import { cn } from "@/src/lib/utils";

const sections = [
  { id: "acceptance", label: "Acceptance of Terms" },
  { id: "use", label: "Use of the Platform" },
  { id: "informational", label: "Informational Purpose Only" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "third-party", label: "Third-Party Links" },
  { id: "guarantees", label: "No Guarantees" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "changes", label: "Changes to These Terms" },
];

const numberBadges = [
  "bg-accent-cyan text-accent-cyan-fg",
  "bg-accent-gold text-accent-gold-fg",
  "bg-accent-coral text-accent-coral-fg",
  "bg-accent-indigo text-accent-indigo-fg",
  "bg-accent-cyan text-accent-cyan-fg",
  "bg-accent-gold text-accent-gold-fg",
  "bg-accent-coral text-accent-coral-fg",
  "bg-accent-indigo text-accent-indigo-fg",
];

const contentCardClass = cn(
  "scroll-mt-[120px] rounded-[2rem] border border-doc-border/10 bg-doc-bg",
  "p-8 md:p-12",
  "shadow-doc-card hover:shadow-doc-card-hover",
  "transition-shadow duration-300",
  "!translate-y-0 hover:!translate-y-0",
);

const NumberedHeading = ({ number, children }: { number: number; children: React.ReactNode }) => (
  <Flex align="center" gap="sm">
    <span className={cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold", numberBadges[number - 1])}>
      {number}
    </span>
    <h2 className="headline-lg">{children}</h2>
  </Flex>
);

const page = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-doc-bg text-doc-text">
      {/* background blobs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div
          className="absolute rounded-full blur-[100px] bg-doc-primary-fixed-dim/20 animate-float"
          style={{ top: "-10%", left: "-10%", width: "50vw", height: "50vw" }}
        />
        <div
          className="absolute rounded-full blur-[120px] bg-doc-secondary-fixed/20 animate-float"
          style={{ bottom: "-10%", right: "-10%", width: "60vw", height: "60vw", animationDelay: "-7s" }}
        />
      </div>

      <main className="relative z-10 flex-1 w-full max-w-[1200px] mx-auto px-6 md:px-10 py-12 flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="hidden lg:block w-72 shrink-0">
          <CardContainer
            as="div"
            direction="col"
            align="start"
            gap="md"
            className={cn(
              "sticky top-[100px] w-full rounded-[1.5rem] p-8",
              "bg-doc-bg/90 backdrop-blur-md",
              "border border-doc-border/30",
              "shadow-doc-card",
              "!translate-y-0 hover:!translate-y-0",
            )}
          >
            <h3 className="text-label-bold uppercase tracking-wider text-doc-primary">
              Contents
            </h3>
            <ul className="flex w-full flex-col gap-4">
              {sections.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`#${s.id}`}
                    className="group text-body-md flex items-center gap-2 text-doc-text hover:text-doc-primary transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-doc-border transition-colors group-hover:bg-doc-primary" />
                    {s.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#contact"
                  className="group text-body-md flex items-center gap-2 text-doc-text hover:text-doc-primary transition-colors"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-doc-border transition-colors group-hover:bg-doc-primary" />
                  Contact
                </Link>
              </li>
            </ul>
          </CardContainer>
        </aside>

        <article className="flex-1 flex flex-col gap-8">
          {/* Hero */}
          <FadeInSection>
            <CardContainer
              direction="col"
              align="start"
              gap="lg"
              className={cn(
                "relative overflow-hidden rounded-[2rem] p-10 md:p-16",
                "bg-doc-bg",
                "border border-doc-border/20",
                "shadow-doc-hero",
                "hover:!-translate-y-1 transition-transform duration-500",
              )}
            >
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none bg-doc-secondary-fixed/30"
                style={{ transform: "translate(33%, -50%)" }}
              />
              <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full shadow-lg bg-doc-primary-container text-doc-on-primary-container">
                <ShieldCheck className="h-7 w-7" aria-hidden="true" />
              </span>
              <h1 className="relative z-10 headline-xl">Terms & Conditions</h1>
              <p className="relative z-10 body-lg max-w-2xl text-doc-text-muted">
                Basic rules for using the Upsert Solution website, platform,
                and content — kept as clear and breezy as everything else we
                build.
              </p>
              <span className="relative z-10 inline-flex items-center gap-2 text-label-bold rounded-full py-2 px-4 text-doc-outline bg-doc-surface-container">
                <Clock className="h-4 w-4" aria-hidden="true" />
                Effective Date: May 6, 2026
              </span>
            </CardContainer>
          </FadeInSection>

          <FadeInSection>
            <div className="relative w-full h-48 rounded-xl overflow-hidden bg-doc-surface-container-low shadow-[inset_0_2px_8px_rgba(46,91,255,0.06)]">
              <img
                src="/images/bubbles-banner.png"
                alt="Abstract 3D glossy bubbles in cobalt blue and mint green"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeInSection>

          {/* 1. Acceptance of Terms */}
          <FadeInSection id="acceptance">
            <CardContainer direction="col" align="stretch" gap="md" className={contentCardClass}>
              <NumberedHeading number={1}>Acceptance of Terms</NumberedHeading>
              <p className="body-md text-doc-text-muted">
                By accessing or using Upsert Solution, you agree to be bound
                by these Terms and Conditions. If you do not agree, please
                do not use the website or platform.
              </p>
            </CardContainer>
          </FadeInSection>

          {/* 2. Use of the Platform */}
          <FadeInSection id="use">
            <CardContainer direction="col" align="stretch" gap="md" className={contentCardClass}>
              <NumberedHeading number={2}>Use of the Platform</NumberedHeading>
              <p className="body-md text-doc-text-muted">
                You may use Upsert Solution only for lawful purposes and in
                a way that does not violate the rights of others or
                interfere with the operation of our services.
              </p>
              <div className="relative overflow-hidden rounded-xl p-6 border border-doc-primary/10 bg-doc-surface-container-low">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl bg-doc-primary/5 pointer-events-none" />
                <ul className="relative z-10 list-disc list-inside space-y-2 text-sm text-doc-text-muted">
                  <li>Do not attempt unauthorized access to the site or related systems.</li>
                  <li>Do not misuse, disrupt, scrape, or abuse the platform.</li>
                  <li>Do not copy or republish content in misleading or unauthorized ways.</li>
                  <li>Do not impersonate another person or misrepresent your identity.</li>
                </ul>
              </div>
            </CardContainer>
          </FadeInSection>

          {/* 3. Informational Purpose Only */}
          <FadeInSection id="informational">
            <CardContainer direction="col" align="stretch" gap="md" className={contentCardClass}>
              <NumberedHeading number={3}>Informational Purpose Only</NumberedHeading>
              <p className="body-md text-doc-text-muted">
                Upsert Solution provides educational and informational
                content about web design, development practices, branding,
                and growing an online business.
              </p>
              <p className="body-md text-doc-text-muted">
                Nothing on the site should be treated as legal, financial,
                or professional business advice specific to your situation.
              </p>
            </CardContainer>
          </FadeInSection>

          {/* 4. Intellectual Property */}
          <FadeInSection id="intellectual-property">
            <CardContainer direction="col" align="stretch" gap="md" className={contentCardClass}>
              <NumberedHeading number={4}>Intellectual Property</NumberedHeading>
              <p className="body-md text-doc-text-muted">
                Unless otherwise stated, the website content, branding,
                text, graphics, and design elements are owned by or licensed
                to Upsert Solution and are protected by applicable
                intellectual property laws.
              </p>
              <div className="relative overflow-hidden rounded-xl p-6 border border-doc-primary/10 bg-doc-surface-container-low">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl bg-doc-primary/5 pointer-events-none" />
                <ul className="relative z-10 list-disc list-inside space-y-2 text-sm text-doc-text-muted">
                  <li>You may read and share links to our content.</li>
                  <li>You may not republish full content without permission.</li>
                  <li>You may not claim our content, branding, or materials as your own.</li>
                </ul>
              </div>
            </CardContainer>
          </FadeInSection>

          {/* 5. Third-Party Links */}
          <FadeInSection id="third-party">
            <CardContainer direction="col" align="stretch" gap="md" className={contentCardClass}>
              <NumberedHeading number={5}>Third-Party Links</NumberedHeading>
              <p className="body-md text-doc-text-muted">
                The website may contain links to third-party websites,
                tools, or services. These are provided for convenience only,
                and we are not responsible for their content, policies, or
                outcomes.
              </p>
            </CardContainer>
          </FadeInSection>

          {/* 6. No Guarantees */}
          <FadeInSection id="guarantees">
            <CardContainer direction="col" align="stretch" gap="md" className={contentCardClass}>
              <NumberedHeading number={6}>No Guarantees</NumberedHeading>
              <p className="body-md text-doc-text-muted">
                We do not guarantee specific results, including revenue
                growth, conversion rates, search rankings, or uninterrupted
                access to the website or platform.
              </p>
            </CardContainer>
          </FadeInSection>

          {/* 7. Limitation of Liability */}
          <FadeInSection id="liability">
            <CardContainer direction="col" align="stretch" gap="md" className={contentCardClass}>
              <NumberedHeading number={7}>Limitation of Liability</NumberedHeading>
              <p className="body-md text-doc-text-muted">
                To the fullest extent permitted by law, Upsert Solution will
                not be liable for losses or damages arising from your use of
                the website, reliance on its content, or inability to
                access the platform.
              </p>
            </CardContainer>
          </FadeInSection>

          {/* 8. Changes to These Terms */}
          <FadeInSection id="changes">
            <CardContainer direction="col" align="stretch" gap="md" className={contentCardClass}>
              <NumberedHeading number={8}>Changes to These Terms</NumberedHeading>
              <p className="body-md text-doc-text-muted">
                We may revise these Terms from time to time. Continued use
                of the website after changes means you accept the updated
                version.
              </p>
            </CardContainer>
          </FadeInSection>

          {/* Contact */}
          <FadeInSection id="contact">
            <CardContainer direction="col" align="start" gap="sm" className={cn(contentCardClass, "items-start")}>
              <Flex align="center" gap="sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-doc-primary-container/12 text-doc-primary">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </span>
                <h2 className="headline-lg">Contact</h2>
              </Flex>
              <p className="body-md text-doc-text-muted">
                If you have questions about this page, contact us at{" "}
                <a
                  href="mailto:hello@upsertsolution.com"
                  className="text-doc-primary underline underline-offset-2 hover:text-doc-primary/80"
                >
                  hello@upsertsolution.com
                </a>
                .
              </p>
            </CardContainer>
          </FadeInSection>
        </article>
      </main>
    </div>
  );
};

export default page;