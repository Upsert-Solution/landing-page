"use server";

const getFieldValue = (formData: FormData, key: string) => {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
};

const getContactEndpoint = () => {
  const endpoint = process.env.CONTACT_FORM_ENDPOINT ?? process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;
  if (!endpoint) {
    throw new Error("Missing CONTACT_FORM_ENDPOINT in environment.");
  }

  return endpoint;
};

const buildContactPayload = (formData: FormData) => {
  return {
    firstName: getFieldValue(formData, "firstName"),
    lastName: getFieldValue(formData, "lastName"),
    email: getFieldValue(formData, "email"),
    topic: getFieldValue(formData, "topic"),
    message: getFieldValue(formData, "message"),
    source: "contact-page",
  };
};

const buildContactHeaders = () => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  const token = process.env.CONTACT_FORM_TOKEN ?? process.env.NEXT_PUBLIC_CONTACT_TOKEN;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
};

export const submitContact = async (formData: FormData) => {
  const endpoint = getContactEndpoint();
  const payload = buildContactPayload(formData);
  const headers = buildContactHeaders();

  const response = await fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Contact request failed.");
  }
};
