"use server";

import { buildContactPayloadFromFormData, sendContactMessage } from "@/src/lib/contact";

export const submitContact = async (formData: FormData) => {
  const payload = buildContactPayloadFromFormData(formData);
  await sendContactMessage(payload);
};
