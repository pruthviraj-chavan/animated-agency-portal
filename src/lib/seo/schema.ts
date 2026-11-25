import { SITE_CONFIG, SITE_URL, toAbsoluteUrl } from "@/config/site";

export const ORG_ID = `${SITE_URL}/#organization`;
export const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export interface BreadcrumbNode {
  name: string;
  path: string;
}

export interface FaqSchemaItem {
  question: string;
  answer: string;
}

export function safeSerializeJsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
}

export function buildOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_CONFIG.brandName,
    alternateName: SITE_CONFIG.alternateName,
    legalName: SITE_CONFIG.legalName,
    url: `${SITE_URL}/`,
    logo: {
      "@type": "ImageObject",
      url: SITE_CONFIG.logo,
    },
    image: SITE_CONFIG.defaultOgImage,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.telephoneE164,
    sameAs: [...SITE_CONFIG.sameAs],
    founder: SITE_CONFIG.founders.map((f) => ({
      "@type": "Person",
      name: f.name,
      jobTitle: f.jobTitle,
    })),
    identifier: [
      {
        "@type": "PropertyValue",
        propertyID: "Udyam Registration Number",
        value: SITE_CONFIG.udyam,
      },
      {
        "@type": "PropertyValue",
        propertyID: "D-U-N-S Number",
        value: SITE_CONFIG.duns,
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: SITE_CONFIG.telephoneE164,
        email: SITE_CONFIG.email,
        areaServed: ["IN", "DE", "Global"],
        availableLanguage: ["English", "Hindi", "Marathi"],
      },
    ],
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": LOCAL_BUSINESS_ID,
    name: SITE_CONFIG.alternateName,
    alternateName: SITE_CONFIG.brandName,
    legalName: SITE_CONFIG.legalName,
    url: `${SITE_URL}/`,
    image: SITE_CONFIG.defaultOgImage,
    logo: SITE_CONFIG.logo,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.telephoneE164,
    parentOrganization: { "@id": ORG_ID },
    address: {
      "@type": "PostalAddress",
      addressLocality: `${SITE_CONFIG.city}, ${SITE_CONFIG.district}`,
      addressRegion: SITE_CONFIG.region,
      addressCountry: SITE_CONFIG.country,
    },
    areaServed: SITE_CONFIG.areaServed.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    knowsAbout: [...SITE_CONFIG.supportedServices],
    sameAs: [...SITE_CONFIG.sameAs],
  };
}

export function buildWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_CONFIG.alternateName,
    alternateName: SITE_CONFIG.brandName,
    url: `${SITE_URL}/`,
    inLanguage: "en-IN",
    publisher: { "@id": ORG_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildWebPageSchema({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = toAbsoluteUrl(path);
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: "en-IN",
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbNode[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
  };
}

export function buildServiceSchema({
  name,
  description,
  path,
  serviceType,
  areaServed = ["Kolhapur", "Pune", "Maharashtra", "India", "Global"],
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  areaServed?: string[];
}) {
  return {
    "@type": "Service",
    name,
    description,
    serviceType,
    url: toAbsoluteUrl(path),
    provider: { "@id": ORG_ID },
    areaServed: areaServed.map((nameItem) => ({
      "@type": "Place",
      name: nameItem,
    })),
  };
}

export function buildFaqSchema(faqs: FaqSchemaItem[]) {
  if (!faqs.length) return null;
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBlogPostingSchema({
  title,
  description,
  path,
  datePublished,
  dateModified,
  authorName,
  image,
  section,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  image?: string;
  section?: string;
}) {
  const url = toAbsoluteUrl(path);
  return {
    "@type": "BlogPosting",
    headline: title,
    description,
    image: image || SITE_CONFIG.defaultOgImage,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    datePublished,
    dateModified: dateModified || datePublished,
    inLanguage: "en-IN",
    ...(section ? { articleSection: section } : {}),
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@id": ORG_ID,
    },
  };
}
