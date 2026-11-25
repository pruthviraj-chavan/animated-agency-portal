import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { normalizePathname } from "@/data/seoConfig";
import { trackPageView } from "@/lib/analytics";

/**
 * Handles client-side scroll restoration on route transitions and SPA page_view tracking.
 * Canonical tags, robots directives, titles and JSON-LD are managed centrally per route by <SeoHead />.
 */
export function CanonicalUrl() {
  const { pathname, hash } = useLocation();
  const isInitialMount = useRef(true);

  useEffect(() => {
    const normalized = normalizePathname(pathname);

    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }

    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    trackPageView(normalized, typeof document !== "undefined" ? document.title : undefined);
  }, [pathname, hash]);

  return null;
}
