import nodemailer from "nodemailer";

import type { ContactPayload } from "@/src/lib/schemas/contact";
import { ContactError } from "@/src/lib/errors/contact-error";

const DEFAULT_SMTP_HOST = "smtp.gmail.com";
const DEFAULT_SMTP_PORT = 465;

const getEnvValue = (key: string) => {
  const value = process.env[key];
  return typeof value === "string" ? value.trim() : "";
};

const parsePort = (value: string) => {
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    throw new ContactError("Invalid SMTP_PORT configuration.", 500);
  }

  return parsed;
};

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/'/g, "&#39;");

const getSmtpConfig = () => {
  const host = getEnvValue("SMTP_HOST") || DEFAULT_SMTP_HOST;
  const port = parsePort(getEnvValue("SMTP_PORT") || String(DEFAULT_SMTP_PORT));
  const secure = getEnvValue("SMTP_SECURE") ? getEnvValue("SMTP_SECURE") === "true" : port === DEFAULT_SMTP_PORT;
  const user = getEnvValue("SMTP_USER");
  const pass = getEnvValue("SMTP_PASS");
  const fromEmail = getEnvValue("CONTACT_FROM_EMAIL") || user;
  const fromName = getEnvValue("CONTACT_FROM_NAME") || "Upsert Solution";
  const toEmail = getEnvValue("CONTACT_TO_EMAIL") || fromEmail;

  if (!user || !pass || !fromEmail || !toEmail) {
    throw new ContactError("Contact email configuration is incomplete.", 500);
  }

  return {
    host,
    port,
    secure,
    user,
    pass,
    fromEmail,
    fromName,
    toEmail,
  };
};

export const sendContactEmail = async (payload: ContactPayload) => {
  const { host, port, secure, user, pass, fromEmail, fromName, toEmail } = getSmtpConfig();
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });

  const replyTo = `${payload.firstName} ${payload.lastName} <${payload.email}>`;
  const subject = `New contact request: ${payload.topic}`;
  const escapedMessage = escapeHtml(payload.message).replace(/\n/g, "<br />");
  const escapedSource = escapeHtml(payload.source ?? "contact-page");

  const text = [
    `Name: ${payload.firstName} ${payload.lastName}`,
    `Email: ${payload.email}`,
    `Topic: ${payload.topic}`,
    `Message:\n${payload.message}`,
    `Source: ${payload.source ?? "contact-page"}`,
  ].join("\n\n");

  const html = `
    <div style="font-family: Arial, sans-serif; color: #0f1220;">
      <h2 style="margin: 0 0 12px;">New contact request</h2>
      <p><strong>Name:</strong> ${escapeHtml(payload.firstName)} ${escapeHtml(payload.lastName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Topic:</strong> ${escapeHtml(payload.topic)}</p>
      <p><strong>Message:</strong><br />${escapedMessage}</p>
      <p><strong>Source:</strong> ${escapedSource}</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `${fromName} <${fromEmail}>`,
      to: toEmail,
      replyTo,
      subject,
      text,
      html,
    });
  } catch {
    throw new ContactError("Contact request failed.", 502);
  }
};
