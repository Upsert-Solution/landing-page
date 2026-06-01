"use client";

import Image from "next/image";

import * as React from "react";
import type { LucideIcon } from "lucide-react";
import { Mail, Send } from "lucide-react";

import { Button, CardContainer, Flex, Input, Select, Textarea, toast } from "@/src/components/ui";
import { CONTACT_DEFAULT_SOURCE, contactSchema, type ContactPayload } from "@/src/lib/schemas/contact";
import { cn } from "@/src/lib/utils";
import { submitContact } from "../actions";

type InfoItem = {
  label: string;
  href?: string;
};

type InfoCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  iconClass: string;
  cornerClass: string;
  items: InfoItem[];
  image?: string;
  imageAlt?: string;
};

const infoCards: InfoCard[] = [
  {
    title: "Drop us a line",
    description: "We usually respond within 24 hours.",
    icon: Mail,
    iconClass: "bg-brand-secondary/20 text-brand-primary",
    cornerClass: "-top-10 -right-10 bg-brand-primary/15",
    items: [{ label: "hello@upsertsolution.com", href: "mailto:hello@upsertsolution.com" }],
  },
  //   {
  //     title: "Our Bubble",
  //     description: "Come float with us at our HQ.",
  //     icon: MapPin,
  //     iconClass: "bg-brand-tertiary/35 text-neutral-800",
  //     cornerClass: "-top-10 -right-10 bg-brand-tertiary/20",
  //     items: [{ label: "123 Bubbly Blvd, Suite 404" }, { label: "San Francisco, CA 94107" }],
  //   },
];

const contactTopics = [
  { value: "business-website", label: "Business Website" },
  { value: "landing-page", label: "Landing Page" },
  { value: "redesign", label: "Website Redesign" },
  { value: "support", label: "Ongoing Support" },
];

type FieldLabelProps = React.ComponentPropsWithoutRef<"label">;

const FieldLabel = ({ className, ...props }: FieldLabelProps) => {
  return <label className={cn("flex flex-col gap-2 text-sm", className)} {...props} />;
};

type FieldLabelTextProps = React.ComponentPropsWithoutRef<"span">;

const FieldLabelText = ({ className, ...props }: FieldLabelTextProps) => {
  return <span className={cn("type-label text-text-muted", className)} {...props} />;
};

type ContactField = keyof Pick<ContactPayload, "firstName" | "lastName" | "email" | "topic" | "message">;
type FieldErrors = Partial<Record<ContactField, string>>;

const getErrorId = (field: ContactField) => `${field}-error`;

const FieldError = ({ id, message }: { id: string; message?: string }) => {
  if (!message) {
    return null;
  }

  return (
    <span id={id} className="text-xs font-medium text-(--status-error-text)">
      {message}
    </span>
  );
};

const getContactPayloadFromFormData = (formData: FormData) => ({
  firstName: formData.get("firstName"),
  lastName: formData.get("lastName"),
  email: formData.get("email"),
  topic: formData.get("topic"),
  message: formData.get("message"),
  source: CONTACT_DEFAULT_SOURCE,
});

const buildFieldErrors = (issues: Array<{ path: (string | number)[]; message: string }>) => {
  const nextErrors: FieldErrors = {};

  issues.forEach((issue) => {
    const field = issue.path[0];
    if (typeof field !== "string") {
      return;
    }

    if (field in nextErrors) {
      return;
    }

    if (field === "firstName" || field === "lastName" || field === "email" || field === "topic" || field === "message") {
      nextErrors[field] = issue.message;
    }
  });

  return nextErrors;
};

export const InfoCardList = () => {
  return (
    <Flex direction="col" align="stretch" gap="lg" className="w-full">
      {infoCards.map((card) => {
        const Icon = card.icon;

        return (
          <CardContainer key={card.title} direction="col" align="start" gap="md" className="relative overflow-hidden p-7">
            <span aria-hidden="true" className={cn("pointer-events-none absolute h-28 w-28 rounded-full", card.cornerClass)} />
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-surface-1">
              {card.image ? (
                <Image src={card.image} alt={card.imageAlt ?? card.title} fill sizes="48px" className="object-cover" />
              ) : (
                <span className={cn("flex h-12 w-12 items-center justify-center rounded-full", card.iconClass)}>
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
              )}
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-text-muted">{card.description}</p>
            </div>
            <div className="space-y-1 text-sm text-text-secondary">
              {card.items.map((item) =>
                item.href ? (
                  <a key={item.label} href={item.href} className="text-brand-primary hover:text-brand-primary/80 transition-colors">
                    {item.label}
                  </a>
                ) : (
                  <p key={item.label}>{item.label}</p>
                ),
              )}
            </div>
          </CardContainer>
        );
      })}
    </Flex>
  );
};

export const ContactForm = () => {
  const [isPending, startTransition] = React.useTransition();
  const [errors, setErrors] = React.useState<FieldErrors>({});

  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = event.currentTarget;
    if (!name) {
      return;
    }

    setErrors((current) => {
      if (!(name in current)) {
        return current;
      }

      const nextErrors = { ...current };
      delete nextErrors[name as ContactField];
      return nextErrors;
    });
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const result = contactSchema.safeParse(getContactPayloadFromFormData(formData));

    if (!result.success) {
      setErrors(buildFieldErrors(result.error.issues));
      return;
    }

    setErrors({});

    startTransition(async () => {
      try {
        await submitContact(formData);
        toast({
          title: "Message sent",
          description: "We will get back within 24 hours.",
          variant: "success",
        });
        form.reset();
      } catch {
        toast({
          title: "Message failed",
          description: "Something went wrong. Please try again.",
          variant: "error",
        });
      }
    });
  };

  return (
    <CardContainer
      direction="col"
      align="stretch"
      gap="lg"
      className="w-full p-7 sm:p-8 border border-white/70 bg-[radial-gradient(120%_120%_at_100%_0%,rgba(150,216,255,0.35)_0%,rgba(235,237,255,0.7)_42%,rgba(255,255,255,0.95)_72%),radial-gradient(120%_120%_at_0%_100%,rgba(255,214,0,0.18)_0%,rgba(255,214,0,0)_55%)]"
    >
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <FieldLabel>
            <FieldLabelText>First Name</FieldLabelText>
            <Input
              name="firstName"
              placeholder="Jane"
              autoComplete="given-name"
              required
              variant="glass"
              aria-invalid={Boolean(errors.firstName)}
              aria-describedby={errors.firstName ? getErrorId("firstName") : undefined}
              onChange={handleFieldChange}
            />
            <FieldError id={getErrorId("firstName")} message={errors.firstName} />
          </FieldLabel>
          <FieldLabel>
            <FieldLabelText>Last Name</FieldLabelText>
            <Input
              name="lastName"
              placeholder="Doe"
              autoComplete="family-name"
              required
              variant="glass"
              aria-invalid={Boolean(errors.lastName)}
              aria-describedby={errors.lastName ? getErrorId("lastName") : undefined}
              onChange={handleFieldChange}
            />
            <FieldError id={getErrorId("lastName")} message={errors.lastName} />
          </FieldLabel>
        </div>

        <FieldLabel>
          <FieldLabelText>Email Address</FieldLabelText>
          <Input
            name="email"
            type="email"
            placeholder="jane@example.com"
            autoComplete="email"
            required
            variant="glass"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? getErrorId("email") : undefined}
            onChange={handleFieldChange}
          />
          <FieldError id={getErrorId("email")} message={errors.email} />
        </FieldLabel>

        <FieldLabel>
          <FieldLabelText>What are you looking for?</FieldLabelText>
          <Select
            name="topic"
            required
            defaultValue=""
            variant="glass"
            aria-invalid={Boolean(errors.topic)}
            aria-describedby={errors.topic ? getErrorId("topic") : undefined}
            onChange={handleFieldChange}
          >
            <option value="" disabled>
              Select an option...
            </option>
            {contactTopics.map((topic) => (
              <option key={topic.value} value={topic.value}>
                {topic.label}
              </option>
            ))}
          </Select>
          <FieldError id={getErrorId("topic")} message={errors.topic} />
        </FieldLabel>

        <FieldLabel>
          <FieldLabelText>Your Message</FieldLabelText>
          <Textarea
            name="message"
            placeholder="Tell us about your project..."
            required
            variant="glass"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? getErrorId("message") : undefined}
            onChange={handleFieldChange}
          />
          <FieldError id={getErrorId("message")} message={errors.message} />
        </FieldLabel>

        <Button type="submit" size="sm" className="gap-2 self-start" disabled={isPending}>
          {isPending ? "Sending..." : "Send Message"}
          <Send className="h-4 w-4" aria-hidden="true" />
        </Button>
      </form>
    </CardContainer>
  );
};
