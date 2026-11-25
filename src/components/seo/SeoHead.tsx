import { Helmet } from "react-helmet";
import {
  BreadcrumbItem,
  SITE_INFO,
  buildBreadcrumbSchema,
  getRouteMeta,
  toAbsoluteUrl,
} from "@/data/seoConfig";

export interface SeoHeadProps {
  path: string;
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  authorName?: string;
  section?: string;
  breadcrumbs?: BreadcrumbItem[];
  schemas?: Array<Record<string, unknown> | null | undefined>;
}

export function SeoHead({
  path,
  title,
  description,
  image,
  imageAlt,
  type = "website",
  noindex,
  publishedTime,
  modifiedTime,
  authorName,
  section,
  breadcrumbs,
  schemas = [],
}: SeoHeadProps) {
  const meta = getRouteMeta(path, { title, description, noindex, image });
  const resolvedTitle = title || meta.title;
  const resolvedDescription = description || meta.description;
  const isNoindex = Boolean(noindex ?? meta.noindex);
  const resolvedImage = image || meta.image || SITE_INFO.defaultOgImage;
  const resolvedImageAlt = imageAlt || resolvedTitle;
  const canonicalUrl = toAbsoluteUrl(path);

  const graphNodes: Array<Record<string, unknown>> = [];

  if (!isNoindex) {
    graphNodes.push({
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: resolvedTitle,
      description: resolvedDescription,
      inLanguage: "en-IN",
    });
  }

  if (breadcrumbs && breadcrumbs.length > 0 && !isNoindex) {
    graphNodes.push(buildBreadcrumbSchema(breadcrumbs));
  }

  for (const item of schemas) {
    if (item && typeof item === "object") {
      graphNodes.push(item);
    }
  }

  const jsonLd =
    graphNodes.length > 0
      ? JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graphNodes,
        })
      : null;

  return (
    <Helmet htmlAttributes={{ lang: "en-IN" }}>
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <meta
        name="robots"
        content={
          isNoindex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />
      {!isNoindex && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_INFO.brandName} />
      <meta property="og:locale" content={SITE_INFO.locale} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      {!isNoindex && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={resolvedImage} />
      <meta property="og:image:alt" content={resolvedImageAlt} />

      {/* Article Metadata */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === "article" && section && (
        <meta property="article:section" content={section} />
      )}
      {type === "article" && authorName && (
        <meta property="article:author" content={authorName} />
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={resolvedImage} />
      <meta name="twitter:image:alt" content={resolvedImageAlt} />

      {jsonLd && <script type="application/ld+json">{jsonLd}</script>}
    </Helmet>
  );
}
