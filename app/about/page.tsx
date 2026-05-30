import Image from "next/image";

import { Eye, HeartHandshake, Lightbulb, Target, Users } from "lucide-react";

import { CardContainer, Flex, Grid } from "@/src/components/ui";

type HighlightCard = {
  title: string;
  description: string;
  icon: typeof Target;
  iconClass: string;
  surfaceClass: string;
};

type ValueCard = {
  title: string;
  description: string;
  icon: typeof Target;
  iconClass: string;
};

type TeamMember = {
  name: string;
  role: string;
  initials: string;
  image?: string;
  gradientClass: string;
};

const highlights: HighlightCard[] = [
  {
    title: "Our Mission",
    description:
      "To craft digital experiences that are as delightful to use as they are powerful. We make complex engineering feel simple, approachable, and joyful.",
    icon: Target,
    iconClass: "bg-brand-secondary/15 text-brand-primary",
    surfaceClass: "bg-gradient-to-br from-brand-secondary/10 via-white to-white",
  },
  {
    title: "Our Vision",
    description:
      "A future where technology adapts to people, not the other way around. We envision interfaces that reduce friction and elevate the human spirit.",
    icon: Eye,
    iconClass: "bg-brand-tertiary/35 text-neutral-800",
    surfaceClass: "bg-gradient-to-br from-brand-tertiary/15 via-white to-white",
  },
];

const coreValues: ValueCard[] = [
  {
    title: "Empathy First",
    description: "We design for human needs, listening deeply to understand the real problem before writing a single line of code.",
    icon: HeartHandshake,
    iconClass: "bg-brand-primary/10 text-brand-primary",
  },
  {
    title: "Joyful Innovation",
    description: "We explore the edges of possibility and bring a playful, creative lens to every solution we ship.",
    icon: Lightbulb,
    iconClass: "bg-brand-secondary/15 text-brand-primary",
  },
  {
    title: "Radical Collaboration",
    description: "Great ideas come from everywhere. We build in the open and invite every voice into the process.",
    icon: Users,
    iconClass: "bg-brand-tertiary/35 text-neutral-800",
  },
];

const teamMembers: TeamMember[] = [
  {
    name: "Elena Rodriguez",
    role: "Lead Engineer",
    initials: "ER",
    gradientClass: "from-brand-tertiary/40 via-brand-secondary/10 to-white",
  },
  {
    name: "Marcus Chen",
    role: "Systems Architect",
    initials: "MC",
    gradientClass: "from-neutral-900/15 via-brand-primary/10 to-white",
  },
  {
    name: "Sarah Jenkins",
    role: "Product Designer",
    initials: "SJ",
    gradientClass: "from-brand-secondary/30 via-brand-primary/10 to-white",
  },
  {
    name: "David Park",
    role: "Creative Director",
    initials: "DP",
    gradientClass: "from-brand-primary/20 via-brand-secondary/10 to-white",
  },
];

const page = () => {
  return (
    <div className="relative flex flex-col gap-16 lg:gap-20 pb-20">
      <div aria-hidden="true" className="pointer-events-none absolute -top-12 right-0 h-72 w-72 rounded-full bg-brand-secondary/20 blur-3xl" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-80 -left-10 h-64 w-64 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-brand-primary/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-24 right-10 h-80 w-80 rounded-[55%_45%_60%_40%/60%_50%_50%_40%] bg-brand-tertiary/25 blur-3xl"
      />

      <Flex as="section" direction="col" align="center" className="relative text-center gap-4 pt-6 lg:pt-12">
        <p className="type-label text-text-muted tracking-[0.28em] uppercase">About Us</p>
        <h1 className="type-h1 text-balance bg-linear-to-r from-brand-primary via-brand-secondary to-brand-primary bg-clip-text text-transparent">
          Engineering with a Human Touch.
        </h1>
        <p className="type-body-lg text-text-secondary max-w-2xl">
          We believe that the best technology feels invisible. It should empower, uplift, and bring joy to everyday tasks. We are building the future
          of software, one bubbly interface at a time.
        </p>
      </Flex>

      <Grid as="section" cols={1} mdCols={2} gap="xl" className="relative">
        {highlights.map((item) => {
          const Icon = item.icon;

          return (
            <CardContainer key={item.title} direction="col" align="start" gap="md" className={`relative overflow-hidden p-8 ${item.surfaceClass}`}>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-secondary/15 blur-3xl"
              />
              <span className={`flex h-12 w-12 items-center justify-center rounded-full ${item.iconClass}`}>
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-text-muted leading-relaxed">{item.description}</p>
            </CardContainer>
          );
        })}
      </Grid>

      <Flex as="section" direction="col" align="center" className="relative gap-10">
        <Flex direction="col" align="center" className="text-center gap-3">
          <p className="type-label text-brand-primary">Our Core Values</p>
          <h2 className="type-h2">The Principles That Shape Everything We Build</h2>
        </Flex>

        <Grid cols={1} mdCols={3} gap="lg" className="w-full">
          {coreValues.map((value) => {
            const Icon = value.icon;

            return (
              <CardContainer key={value.title} direction="col" align="center" gap="md" className="h-full text-center p-7">
                <span className={`flex h-11 w-11 items-center justify-center rounded-full ${value.iconClass}`}>
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold">{value.title}</h3>
                <p className="text-text-muted leading-relaxed">{value.description}</p>
              </CardContainer>
            );
          })}
        </Grid>
      </Flex>

      <Flex as="section" direction="col" align="center" className="relative gap-10">
        <Flex direction="col" align="center" className="text-center gap-3">
          <p className="type-label text-brand-primary">Meet the Team</p>
          <h2 className="type-h2">The humans behind the code</h2>
          <p className="text-text-secondary max-w-2xl">
            We are a diverse group of dreamers and doers dedicated to building better software experiences.
          </p>
        </Flex>

        <Grid cols={1} smCols={2} lgCols={4} gap="lg" className="w-full">
          {teamMembers.map((member) => (
            <CardContainer key={member.name} direction="col" align="start" gap="md" className="h-full p-5">
              <div
                className={`relative w-full aspect-4/5 overflow-hidden rounded-3xl bg-linear-to-br ${member.gradientClass}`}
                aria-label={`${member.name} portrait`}
              >
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 240px, (min-width: 640px) 40vw, 80vw"
                    className="object-cover"
                  />
                ) : (
                  <Flex className="absolute inset-0 items-center justify-center">
                    <span className="text-4xl font-semibold text-neutral-700/80">{member.initials}</span>
                  </Flex>
                )}
                <span className="pointer-events-none absolute inset-0 bg-linear-to-t from-neutral-900/35 via-transparent to-transparent" />
              </div>
              <Flex direction="col" align="start" gap="xs">
                <h3 className="text-base font-semibold">{member.name}</h3>
                <p className="text-sm text-text-muted">{member.role}</p>
              </Flex>
            </CardContainer>
          ))}
        </Grid>
      </Flex>
    </div>
  );
};

export default page;
