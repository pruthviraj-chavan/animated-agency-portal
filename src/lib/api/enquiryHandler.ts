import { NextResponse, type NextRequest } from "next/server";
import { SITE_CONFIG } from "@/config/site";
import { enquirySchema } from "@/lib/validation/enquiry";

const MAX_BODY_BYTES = 16_384;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 8;

const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) || []).filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);
  if (timestamps.length >= RATE_LIMIT_MAX) {
    requestLog.set(ip, timestamps);
    return true;
  }
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  if (requestLog.size > 1000) {
    for (const [key, list] of requestLog.entries()) {
      const fresh = list.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);
      if (fresh.length === 0) requestLog.delete(key);
      else requestLog.set(key, fresh);
    }
  }
  return false;
}

export async function handleEnquirySubmission(request: NextRequest, sourceEndpoint: string) {
  try {
    const contentLength = Number(request.headers.get("content-length") || "0");
    if (contentLength > MAX_BODY_BYTES) {
      return NextResponse.json(
        { ok: false, error: "Request payload exceeds maximum allowed size." },
        { status: 413 },
      );
    }

    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "anonymous";

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { ok: false, error: "Too many submissions. Please wait a minute before trying again." },
        { status: 429 },
      );
    }

    const rawText = await request.text();
    if (rawText.length > MAX_BODY_BYTES) {
      return NextResponse.json(
        { ok: false, error: "Request payload exceeds maximum allowed size." },
        { status: 413 },
      );
    }

    let body: unknown;
    try {
      body = JSON.parse(rawText);
    } catch {
      return NextResponse.json({ ok: false, error: "Invalid JSON payload." }, { status: 400 });
    }

    const parsed = enquirySchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: parsed.error.issues[0]?.message || "Validation failed.",
          issues: parsed.error.issues.map((i) => ({ path: i.path.join("."), message: i.message })),
        },
        { status: 400 },
      );
    }

    const { name, email, phone, vertical, category, message, companyWebsite } = parsed.data;

    // Honeypot trap silently drops bot submissions
    if (companyWebsite && companyWebsite.trim().length > 0) {
      return NextResponse.json({ ok: true, accepted: true }, { status: 200 });
    }

    const verticalLabel =
      vertical === "study_abroad"
        ? "Study Abroad Consultancy"
        : vertical === "technology"
          ? "Technology Solutions"
          : "General / Partnership";

    // Forward optionally to server-only webhook URL if configured cleanly
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL?.trim();
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sourceEndpoint,
            vertical,
            verticalLabel,
            category,
            name,
            email,
            phone,
            message,
            receivedAt: new Date().toISOString(),
          }),
          signal: AbortSignal.timeout(5000),
        });
      } catch {
        // Non-fatal fallback: WhatsApp handoff remains immediately available
      }
    }

    const whatsappMessage = `New ${verticalLabel} Enquiry (${category}) via dievekter.tech:
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Vertical: ${verticalLabel}
Message: ${message}`;

    const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    return NextResponse.json(
      {
        ok: true,
        vertical,
        verticalLabel,
        whatsappUrl,
        recipientEmail: process.env.ENQUIRY_FORWARD_EMAIL || SITE_CONFIG.email,
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unable to process enquiry right now. Please contact us via WhatsApp or email." },
      { status: 500 },
    );
  }
}
