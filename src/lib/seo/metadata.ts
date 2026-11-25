import type { Metadata } from "next";
import { SITE_CONFIG, toAbsoluteUrl } from "@/config/site";

export interface PageMetadataInput {
  path: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  section?: string;
  absoluteTitle?: boolean;
}

export function buildPageMetadata({
  path,
  title,
  description,
  image,
  imageAlt,
  type = "website",
  noindex = false,
  publishedTime,
  modifiedTime,
  authors,
  section,
  absoluteTitle = false,
}: PageMetadataInput): Metadata {
  const canonicalUrl = toAbsoluteUrl(path);
  const ogImage = image || SITE_CONFIG.defaultOgImage;
  const resolvedAlt = imageAlt || title;

  const isPreviewEnv =
    Boolean(process.env.VERCEL_ENV) && process.env.VERCEL_ENV !== "production";
  const shouldNoindex = noindex || isPreviewEnv;

  const resolvedTitle: Metadata["title"] = absoluteTitle ? { absolute: title } : title;

  const openGraph: Metadata["openGraph"] =
    type === "article"
      ? {
          type: "article",
          locale: SITE_CONFIG.locale,
          siteName: SITE_CONFIG.brandName,
          url: canonicalUrl,
          title,
          description,
          publishedTime,
          modifiedTime,
          authors,
          section,
          images: [{ url: ogImage, alt: resolvedAlt }],
        }
      : {
          type: "website",
          locale: SITE_CONFIG.locale,
          siteName: SITE_CONFIG.brandName,
          url: canonicalUrl,
          title,
          description,
          images: [{ url: ogImage, alt: resolvedAlt }],
        };

  return {
    title: resolvedTitle,
    description,
    alternates: shouldNoindex ? undefined : { canonical: canonicalUrl },
    robots: shouldNoindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
