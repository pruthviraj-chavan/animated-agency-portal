"use client";

import type { ComponentProps, ReactNode } from "react";
import Link from "next/link";
import {
  trackContactAction,
  trackServiceCta,
  trackStudyAbroadCta,
  type AnalyticsVertical,
} from "@/lib/analytics/gtag";

type TrackEventSpec =
  | { kind: "service"; slug: string; sourcePage: string }
  | { kind: "study_abroad"; destination: string; sourcePage: string }
  | { kind: "contact"; channel: "whatsapp" | "phone" | "email"; sourcePage: string; vertical?: AnalyticsVertical };

export function TrackedLink({
  href,
  track,
  children,
  className,
  target,
  rel,
  ...rest
}: {
  href: string;
  track?: TrackEventSpec;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
} & Omit<ComponentProps<"a">, "href" | "children">) {
  const handleClick = () => {
    if (!track) return;
    if (track.kind === "service") {
      trackServiceCta(track.slug, track.sourcePage);
    } else if (track.kind === "study_abroad") {
      trackStudyAbroadCta(track.destination, track.sourcePage);
    } else if (track.kind === "contact") {
      trackContactAction(track.channel, track.sourcePage, track.vertical || "general");
    }
  };

  const isExternal =
    href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  if (isExternal) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onClick={handleClick}
        className={className}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleClick} className={className} {...rest}>
      {children}
    </Link>
  );
}
