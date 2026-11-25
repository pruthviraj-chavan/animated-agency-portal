"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { normalizePathname } from "@/config/site";
import { trackPageView } from "@/lib/analytics/gtag";

export function AnalyticsRouteTracker() {
  const pathname = usePathname() || "/";
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const normalized = normalizePathname(pathname);
    trackPageView(normalized, typeof document !== "undefined" ? document.title : undefined);
  }, [pathname]);

  return null;
}
