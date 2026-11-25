declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export type AnalyticsVertical = "technology" | "study_abroad" | "general";

const SENSITIVE_KEYS = new Set([
  "email",
  "phone",
  "mobile",
  "name",
  "full_name",
  "message",
  "user_email",
  "user_phone",
]);

function sanitizeParams(
  params?: Record<string, string | number | boolean | undefined>,
): Record<string, string | number | boolean> {
  const safe: Record<string, string | number | boolean> = {};
  if (!params) return safe;
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined) continue;
    if (SENSITIVE_KEYS.has(key.toLowerCase())) continue;
    safe[key] = value;
  }
  return safe;
}

export function getGaMeasurementId(): string {
  const envId =
    typeof import.meta !== "undefined" && import.meta.env?.VITE_GA_MEASUREMENT_ID
      ? String(import.meta.env.VITE_GA_MEASUREMENT_ID).trim()
      : "";
  return envId || "G-XLDPHSXXCS";
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean | undefined>,
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, sanitizeParams(params));
}

export function trackPageView(pathname: string, title?: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "page_view", {
    page_path: pathname,
    ...(title ? { page_title: title } : {}),
  });
}

export function trackEnquiryVerticalSelect(vertical: AnalyticsVertical, sourcePage: string) {
  trackEvent("enquiry_vertical_select", {
    vertical,
    source_page: sourcePage,
  });
}

export function trackLeadSubmission({
  vertical,
  serviceInterest,
  channel = "whatsapp",
  sourcePage,
}: {
  vertical: AnalyticsVertical;
  serviceInterest: string;
  channel?: "whatsapp" | "email" | "form";
  sourcePage: string;
}) {
  trackEvent("generate_lead", {
    vertical,
    service_interest: serviceInterest,
    channel,
    source_page: sourcePage,
  });
}

export function trackContactAction(
  channel: "whatsapp" | "phone" | "email",
  sourcePage: string,
  vertical: AnalyticsVertical = "general",
) {
  trackEvent(`${channel}_click`, {
    source_page: sourcePage,
    vertical,
  });
}

export function trackStudyAbroadCta(destination: string, sourcePage: string) {
  trackEvent("study_abroad_cta_click", {
    destination,
    source_page: sourcePage,
  });
}

export function trackServiceCta(serviceSlug: string, sourcePage: string) {
  trackEvent("service_cta_click", {
    service_slug: serviceSlug,
    source_page: sourcePage,
  });
}

export function trackBlogCategorySelect(category: string) {
  trackEvent("blog_category_filter", {
    category,
  });
}
