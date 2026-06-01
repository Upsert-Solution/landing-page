import { ContactError } from "@/src/lib/errors/contact-error";
import { sendContactEmail } from "@/src/lib/email";
import { CONTACT_DEFAULT_SOURCE, contactSchema, type ContactPayload } from "@/src/lib/schemas/contact";

export const buildContactPayload = (input: Record<string, unknown>): ContactPayload => {
  const result = contactSchema.safeParse(input);

  if (!result.success) {
    const message = result.error.issues[0]?.message ?? "Invalid contact payload.";
    throw new ContactError(message, 400);
  }

  return result.data;
};

export const buildContactPayloadFromFormData = (formData: FormData): ContactPayload => {
  return buildContactPayload({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    topic: formData.get("topic"),
    message: formData.get("message"),
    source: CONTACT_DEFAULT_SOURCE,
  });
};

export const buildContactPayloadFromBody = (body: unknown): ContactPayload => {
  const data = typeof body === "object" && body !== null ? (body as Record<string, unknown>) : {};
  return buildContactPayload(data);
};

export const sendContactMessage = async (payload: ContactPayload) => {
  try {
    await sendContactEmail(payload);
  } catch (error) {
    if (error instanceof ContactError) {
      throw error;
    }

    throw new ContactError("Contact request failed.", 502);
  }
};

export const getAllowedOrigins = () => {
  const raw = process.env.CONTACT_ALLOWED_ORIGINS ?? "";
  return raw
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
};

export const isOriginAllowed = (origin: string | null) => {
  const allowedOrigins = getAllowedOrigins();

  if (!allowedOrigins.length) {
    return true;
  }

  if (!origin) {
    return true;
  }

  return allowedOrigins.includes(origin);
};

export const getCorsHeaders = (origin: string | null): HeadersInit => {
  const headers: HeadersInit = {};
  const allowedOrigins = getAllowedOrigins();

  if (!origin || !allowedOrigins.includes(origin)) {
    return headers;
  }

  const record = headers as Record<string, string>;
  record["Access-Control-Allow-Origin"] = origin;
  record["Access-Control-Allow-Methods"] = "POST, OPTIONS";
  record["Access-Control-Allow-Headers"] = "Content-Type, Authorization";
  record.Vary = "Origin";

  return headers;
};
