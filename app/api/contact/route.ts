import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { ContactError } from "@/src/lib/errors/contact-error";
import { buildContactPayloadFromBody, getCorsHeaders, isOriginAllowed, sendContactMessage } from "@/src/lib/contact";

export const runtime = "nodejs";

const jsonResponse = (data: Record<string, unknown>, init?: ResponseInit) => {
  return NextResponse.json(data, init);
};

export const POST = async (request: NextRequest) => {
  const origin = request.headers.get("origin");
  if (!isOriginAllowed(origin)) {
    return jsonResponse({ error: "Origin not allowed." }, { status: 403 });
  }

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return jsonResponse({ error: "Unsupported content type." }, { status: 415 });
  }

  try {
    const body = await request.json();
    const payload = buildContactPayloadFromBody(body);

    await sendContactMessage(payload);

    return jsonResponse({ ok: true }, { status: 200, headers: getCorsHeaders(origin) });
  } catch (error) {
    if (error instanceof ContactError) {
      return jsonResponse({ error: error.message }, { status: error.status, headers: getCorsHeaders(origin) });
    }

    return jsonResponse({ error: "Unexpected error." }, { status: 500, headers: getCorsHeaders(origin) });
  }
};

export const OPTIONS = async (request: NextRequest) => {
  const origin = request.headers.get("origin");
  if (!isOriginAllowed(origin)) {
    return new NextResponse(null, { status: 403 });
  }

  return new NextResponse(null, {
    status: 204,
    headers: getCorsHeaders(origin),
  });
};
