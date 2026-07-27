import Link from "next/link";
import {
  ShieldCheck,
  Users,
  Database,
  Settings2,
  Share2,
  Clock,
  SlidersHorizontal,
  ExternalLink,
  FileEdit,
  Mail,
} from "lucide-react";
import { Flex, CardContainer, FadeInSection } from "@/src/components/ui";
import { cn } from "@/src/lib/utils";

const sections = [
  { id: "who-this-applies-to", label: "Who This Policy Applies To", icon: Users },
  { id: "information-we-collect", label: "Information We Collect", icon: Database },
  { id: "how-we-use-information", label: "How We Use Information", icon: Settings2 },
  { id: "information-sharing", label: "Information Sharing", icon: Share2 },
  { id: "data-retention", label: "Data Retention", icon: Clock },
  { id: "your-choices", label: "Your Choices", icon: SlidersHorizontal },
  { id: "third-party-services", label: "Third-Party Services", icon: ExternalLink },
  { id: "changes", label: "Changes to This Policy", icon: FileEdit },
];

const iconBubbleColors = [
  "bg-doc-primary-container/15 text-doc-primary",
  "bg-accent-cyan/20 text-accent-cyan-fg",
  "bg-accent-gold/20 text-accent-gold-fg",
  "bg-accent-coral/60 text-accent-coral-fg",
];

const contentCardClass = cn(
  "scroll-mt-[120px] group relative overflow-hidden rounded-[2rem] border border-white/50 bg-doc-bg",
  "p-8 md:p-12",
  "shadow-doc-card hover:shadow-doc-card-hover",
  "hover:-translate-y-2 transition-all duration-500",
);

const CornerAccent = ({ position, tint }: { position: "top-right" | "bottom-left"; tint: string }) => (
  <div
    className={cn(
      "absolute w-48 h-48 pointer-events-none transition-transform duration-500 group-hover:scale-110",
      position === "top-right" ? "top-0 right-0 -mr-10 -mt-10 rounded-bl-full" : "bottom-0 left-0 -ml-10 -mb-10 rounded-tr-full",
      tint,
    )}
  />
);

const SectionHeading = ({
  icon: Icon,
  colorClass,
  children,
}: {
  icon: React.ElementType;
  colorClass: string;
  children: React.ReactNode;
}) => (
  <Flex align="start" gap="md" className="relative z-10">
    <span className={cn("flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full shadow-inner", colorClass)}>
      <Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" aria-hidden="true" />
    </span>
    <h2 className="headline-lg pt-1">{children}</h2>
  </Flex>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="relative z-10 flex flex-col gap-3">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3 rounded-full px-6 py-4 bg-doc-surface-container-low">
        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-doc-primary" />
        <span className="body-md text-doc-text-muted">{item}</span>
      </li>
    ))}
  </ul>
);

type SectionCardProps = {
  id?: string;
  title: string;
  icon: React.ElementType;
  colorClass: string;
  accent?: { position: "top-right" | "bottom-left"; tint: string };
  children: React.ReactNode;
  className?: string;
};

const SectionCard = ({ id, title, icon, colorClass, accent, children, className }: SectionCardProps) => (
  <FadeInSection id={id}>
    <CardContainer direction="col" align="stretch" gap="lg" className={cn(contentCardClass, className)}>
      {accent && <CornerAccent position={accent.position} tint={accent.tint} />}
      <SectionHeading icon={icon} colorClass={colorClass}>
        {title}
      </SectionHeading>
      {children}
    </CardContainer>
  </FadeInSection>
);

const page = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-doc-bg text-doc-text">
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

      <main className="relative z-10 flex-1 w-full max-w-[1200px] mx-auto px-6 md:px-10 py-16">
        <FadeInSection>
          <Flex direction="col" align="center" gap="md" className="text-center max-w-2xl mx-auto mb-12">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-doc-bg shadow-doc-hero">
              <ShieldCheck className="h-9 w-9 text-doc-primary" aria-hidden="true" />
            </span>
            <h1 className="headline-xl text-doc-primary">Privacy Policy</h1>
            <p className="body-lg text-doc-text-muted max-w-2xl">
              How Upsert Solution collects, uses, and protects basic website
              information.
            </p>
             <span className="relative z-10 inline-flex items-center gap-2 text-label-bold rounded-full py-2 px-4 text-doc-outline bg-doc-surface-container">
                <Clock className="h-4 w-4" aria-hidden="true" />
                Effective Date: May 6, 2026
              </span>
          </Flex>
        </FadeInSection>

        <Flex direction="col" mdDirection="row" align="start" gap="xl">
      <aside className="hidden lg:block w-72 shrink-0 sticky top-24 self-start max-h-[calc(100vh-7rem)]">
            <CardContainer
                as="div"
                direction="col"
                align="start"
                gap="md"
                className={cn(
                "z-20 w-full rounded-[1.5rem] p-8",
                "max-h-[calc(100vh-6rem)] overflow-y-auto",
                "bg-doc-bg/90 backdrop-blur-md",
                "border border-doc-border/30",
                "shadow-doc-card",
                "hover:translate-y-0 transition-none"
                )}
            >
              <h3 className="text-label-bold uppercase tracking-wider text-doc-primary">Contents</h3>
              <nav className="flex w-full flex-col gap-4">
                {sections.map((s) => (
                  <Link
                    key={s.id}
                    href={`#${s.id}`}
                    className="group text-body-md flex items-center gap-2 text-doc-text hover:text-doc-primary transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-doc-border transition-colors group-hover:bg-doc-primary" />
                    {s.label}
                  </Link>
                ))}
              </nav>
            </CardContainer>
          </aside>

          <article className="flex-1 flex flex-col gap-8">
            <SectionCard
              id="who-this-applies-to"
              title="Who This Policy Applies To"
              icon={sections[0].icon}
              colorClass={iconBubbleColors[0]}
              accent={{ position: "top-right", tint: "bg-doc-primary-container/10" }}
            >
              <p className="relative z-10 body-lg text-doc-text-muted">
                This Privacy Policy applies to visitors, readers, subscribers, and users of the Upsert Solution website,
                including our blog, informational pages, contact forms, and related services.
              </p>
            </SectionCard>

            <SectionCard
              id="information-we-collect"
              title="Information We Collect"
              icon={sections[1].icon}
              colorClass={iconBubbleColors[1]}
              accent={{ position: "bottom-left", tint: "bg-accent-cyan/10" }}
            >
              <p className="relative z-10 body-lg text-doc-text-muted">
                We may collect information you provide directly and limited information collected automatically through
                normal website usage.
              </p>
              <BulletList
                items={[
                  "Name and email address when you voluntarily contact or subscribe.",
                  "Message content you send through email or future contact forms.",
                  "Basic technical information such as browser, device type, and pages viewed.",
                  "Limited analytics or performance information if analytics tools are used.",
                ]}
              />
            </SectionCard>

            <SectionCard
              id="how-we-use-information"
              title="How We Use Information"
              icon={sections[2].icon}
              colorClass={iconBubbleColors[2]}
            >
              <BulletList
                items={[
                  "To operate, maintain, and improve the website.",
                  "To respond to inquiries and messages.",
                  "To send updates or newsletters if you opted in.",
                  "To understand site usage and improve content quality.",
                  "To protect the website from abuse, spam, fraud, or security issues.",
                ]}
              />
            </SectionCard>

            <SectionCard
              id="information-sharing"
              title="Information Sharing"
              icon={sections[3].icon}
              colorClass={iconBubbleColors[3]}
              accent={{ position: "top-right", tint: "bg-accent-coral/10" }}
            >
              <p className="relative z-10 body-lg text-doc-text-muted">We do not sell your personal information.</p>
              <p className="relative z-10 body-lg text-doc-text-muted">
                We may share limited information only with service providers who help operate the site, when required by
                law, or when necessary to protect the rights, safety, or security of the platform and its users.
              </p>
            </SectionCard>

            <SectionCard
              id="data-retention"
              title="Data Retention"
              icon={sections[5].icon}
              colorClass={iconBubbleColors[1]}
              accent={{ position: "bottom-left", tint: "bg-accent-gold/10" }}
            >
              <p className="relative z-10 body-lg text-doc-text-muted">
                We keep personal information only for as long as reasonably necessary for the purpose it was collected,
                including communication, security, operational, and legal needs.
              </p>
            </SectionCard>

            <SectionCard
              id="your-choices"
              title="Your Choices"
              icon={sections[6].icon}
              colorClass={iconBubbleColors[2]}
            >
              <BulletList
                items={[
                  "You may unsubscribe from email communications at any time.",
                  "You may request correction or deletion of information you submitted, where appropriate."
                ]}
              />
            </SectionCard>

            <SectionCard
              id="third-party-services"
              title="Third-Party Services"
              icon={sections[7].icon}
              colorClass={iconBubbleColors[3]}
              accent={{ position: "top-right", tint: "bg-doc-primary-container/10" }}
            >
              <p className="relative z-10 body-lg text-doc-text-muted">
                If the site uses embedded content, newsletter platforms, analytics tools, or other third-party services,
                those providers may collect information according to their own policies.
              </p>
            </SectionCard>

            <SectionCard
              id="changes"
              title="Changes to This Policy"
              icon={sections[7].icon}
              colorClass={iconBubbleColors[0]}
            >
              <p className="relative z-10 body-lg text-doc-text-muted">
                We may update this Privacy Policy from time to time. When we do, we will revise the effective date shown
                at the top of the page.
              </p>
            </SectionCard>

          <FadeInSection>
            <div
                className="relative overflow-hidden rounded-[2rem] p-10 md:p-16 text-center shadow-doc-card-hover"
                style={{
                backgroundImage:
                    "radial-gradient(rgba(25,27,36,0.12) 1px, transparent 1px), linear-gradient(135deg, var(--doc-primary-fixed-dim), var(--doc-secondary-fixed))",
                backgroundSize: "16px 16px, 100% 100%",
                }}
            >
                <div className="relative z-10 flex flex-col items-center gap-4">
                <h2 className="headline-lg text-doc-primary">Still have questions?</h2>
                <p className="body-lg text-doc-text-muted max-w-md">
                    If you have questions about this page, our team is happy to help clarify things. Drop us a message.
                </p>
                <a
                    href="mailto:hello@upsertsolution.com"
                    className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-label-bold bg-white text-doc-primary shadow-doc-card hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    hello@upsertsolution.com
                </a>
                </div>
            </div>
            </FadeInSection>
          </article>
        </Flex>
      </main>
    </div>
  );
};

export default page;