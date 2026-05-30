import { z } from "zod";

const MAX_NAME_LENGTH = 80;
const MAX_EMAIL_LENGTH = 320;
const MAX_TOPIC_LENGTH = 120;
const MAX_MESSAGE_LENGTH = 2000;
const MAX_SOURCE_LENGTH = 120;

export const CONTACT_DEFAULT_SOURCE = "contact-page";

const requiredText = (label: string, max: number) =>
  z.preprocess(
    (value) => (typeof value === "string" ? value.trim() : ""),
    z.string().min(1, `${label} is required.`).max(max, `${label} is too long.`),
  );

const optionalText = (label: string, max: number) =>
  z
    .preprocess(
      (value) => {
        if (typeof value !== "string") {
          return undefined;
        }

        const trimmed = value.trim();
        return trimmed.length ? trimmed : undefined;
      },
      z.string().max(max, `${label} is too long.`).optional(),
    )
    .default(CONTACT_DEFAULT_SOURCE);

export const contactSchema = z.object({
  firstName: requiredText("First name", MAX_NAME_LENGTH),
  lastName: requiredText("Last name", MAX_NAME_LENGTH),
  email: z.preprocess(
    (value) => (typeof value === "string" ? value.trim() : ""),
    z.string().min(1, "Email is required.").max(MAX_EMAIL_LENGTH, "Email is too long.").email("Invalid email address."),
  ),
  topic: requiredText("Topic", MAX_TOPIC_LENGTH),
  message: requiredText("Message", MAX_MESSAGE_LENGTH),
  source: optionalText("Source", MAX_SOURCE_LENGTH),
});

export type ContactPayload = z.infer<typeof contactSchema>;
