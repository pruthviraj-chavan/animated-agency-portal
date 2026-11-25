const rawSiteUrl =
  typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_URL
    ? String(import.meta.env.VITE_SITE_URL)
    : "https://www.dievekter.tech";

export const SITE_URL = rawSiteUrl.replace(/\/+$/, "");

export const SITE_INFO = {
  brandName: "dieVekter",
  alternateName: "DieVekter Tech",
  legalName: "DIEVEKTER",
  url: SITE_URL,
  email: "team.dievekter@gmail.com",
  telephone: "+91 94048 95667",
  telephoneE164: "+919404895667",
  whatsappUrl: "https://wa.me/919404895667",
  logo: `${SITE_URL}/dievektor_full_logo.png`,
  markLogo: `${SITE_URL}/dievektor_logo.png`,
  defaultOgImage: `${SITE_URL}/dievektor.png`,
  locale: "en_IN",
  city: "Radhanagari",
  district: "Kolhapur",
  region: "Maharashtra",
  country: "IN",
  udyam: "UDYAM-MH-15-0320983",
  duns: "312163123",
  upworkProfileName: "Pruthviraj C.",
  sameAs: [
    "https://www.instagram.com/dievekter_tech/",
    "https://www.linkedin.com/company/dievekter",
    "https://github.com/dievekter",
  ],
  founders: [
    { name: "Pruthviraj Chavan", jobTitle: "Founder & President" },
    { name: "Zaid Nandaniwala", jobTitle: "CEO & MD" },
    { name: "Akash Sakhare", jobTitle: "CTO & AI Architect" },
  ],
  areaServed: ["Kolhapur", "Pune", "Maharashtra", "India", "Global"],
} as const;

export interface RouteMetaEntry {
  path: string;
  title: string;
  description: string;
  noindex?: boolean;
  priority?: string;
  changefreq?: "daily" | "weekly" | "monthly" | "yearly";
  image?: string;
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export function normalizePathname(pathname: string): string {
  const clean = pathname.split("#")[0].split("?")[0].trim();
  if (!clean || clean === "/") return "/";
  return `/${clean.replace(/^\/+|\/+$/g, "")}`;
}

export function toAbsoluteUrl(path: string): string {
  const normalized = normalizePathname(path);
  return normalized === "/" ? `${SITE_URL}/` : `${SITE_URL}${normalized}`;
}

export const ORG_ID = `${SITE_URL}/#organization`;
export const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function buildOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_INFO.brandName,
    alternateName: SITE_INFO.alternateName,
    legalName: SITE_INFO.legalName,
    url: `${SITE_URL}/`,
    logo: {
      "@type": "ImageObject",
      url: SITE_INFO.logo,
    },
    image: SITE_INFO.defaultOgImage,
    email: SITE_INFO.email,
    telephone: SITE_INFO.telephoneE164,
    sameAs: [...SITE_INFO.sameAs],
    founder: SITE_INFO.founders.map((f) => ({
      "@type": "Person",
      name: f.name,
      jobTitle: f.jobTitle,
    })),
    identifier: [
      {
        "@type": "PropertyValue",
        propertyID: "Udyam Registration Number",
        value: SITE_INFO.udyam,
      },
      {
        "@type": "PropertyValue",
        propertyID: "D-U-N-S Number",
        value: SITE_INFO.duns,
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: SITE_INFO.telephoneE164,
        email: SITE_INFO.email,
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
    name: SITE_INFO.alternateName,
    alternateName: SITE_INFO.brandName,
    legalName: SITE_INFO.legalName,
    url: `${SITE_URL}/`,
    image: SITE_INFO.defaultOgImage,
    logo: SITE_INFO.logo,
    email: SITE_INFO.email,
    telephone: SITE_INFO.telephoneE164,
    parentOrganization: { "@id": ORG_ID },
    address: {
      "@type": "PostalAddress",
      addressLocality: `${SITE_INFO.city}, ${SITE_INFO.district}`,
      addressRegion: SITE_INFO.region,
      addressCountry: SITE_INFO.country,
    },
    areaServed: SITE_INFO.areaServed.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    knowsAbout: [
      "Website Development",
      "E-commerce Development",
      "Mobile App Development",
      "Custom Software Development",
      "AI Agents & Voicebots",
      "AI Chatbots",
      "Business Process Automation",
      "CRM Automation",
      "API Development & Integrations",
      "Cloud & Backend Engineering",
      "Study Abroad Consultancy",
      "Study in Germany Guidance",
    ],
    sameAs: [...SITE_INFO.sameAs],
  };
}

export function buildWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_INFO.alternateName,
    alternateName: SITE_INFO.brandName,
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

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
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

export function buildFaqSchema(faqs: FaqEntry[]) {
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
    image: image || SITE_INFO.defaultOgImage,
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

export const STATIC_ROUTE_META: Record<string, RouteMetaEntry> = {
  "/": {
    path: "/",
    title: "dieVekter | Software Development, AI Agents & Study Abroad Consultancy",
    description:
      "DieVekter Tech builds custom websites, mobile apps, AI agents and business automation in Kolhapur, Pune & Maharashtra, alongside Study Abroad Consultancy for Germany and global universities.",
    priority: "1.0",
    changefreq: "weekly",
  },
  "/about": {
    path: "/about",
    title: "About dieVekter | Technology Studio & Study Abroad Advisory in India",
    description:
      "Meet the Udyam-registered DIEVEKTER team in Radhanagari, Kolhapur building custom software, AI systems and overseas education guidance for students and businesses.",
    priority: "0.8",
    changefreq: "monthly",
  },
  "/services": {
    path: "/services",
    title: "Technology Services | Web, Mobile App, Software, AI & Automation — dieVekter",
    description:
      "Explore DieVekter Tech services: website development, e-commerce, mobile apps, custom software, AI agents, chatbots, CRM & workflow automation, API integration and cloud backends.",
    priority: "0.95",
    changefreq: "weekly",
  },
  "/services/website-development": {
    path: "/services/website-development",
    title: "Website Development Company in Kolhapur & India | Custom React Websites — dieVekter",
    description:
      "Fast, mobile-first React, TypeScript & SEO-ready website development by dieVekter for businesses in Kolhapur, Pune, Maharashtra and beyond.",
    priority: "0.9",
    changefreq: "monthly",
  },
  "/services/mobile-app-development": {
    path: "/services/mobile-app-development",
    title: "Mobile App Development | Android, iOS & React Native Apps — dieVekter",
    description:
      "Cross-platform Android and iOS mobile app development using React Native & Flutter with clean UI/UX, push notifications and backend API integration.",
    priority: "0.85",
    changefreq: "monthly",
  },
  "/services/custom-software-development": {
    path: "/services/custom-software-development",
    title: "Custom Software Development | Business Portals, SaaS & Retail Systems — dieVekter",
    description:
      "Tailored custom software engineering for billing, stock management, internal portals, SaaS platforms and multi-branch operations.",
    priority: "0.85",
    changefreq: "monthly",
  },
  "/services/ecommerce-development": {
    path: "/services/ecommerce-development",
    title: "E-commerce Website Development | Online Store, Checkout & Payment Integration — dieVekter",
    description:
      "High-converting e-commerce store development with Razorpay/Stripe payments, catalog search, GST-friendly billing, and mobile checkout.",
    priority: "0.85",
    changefreq: "monthly",
  },
  "/services/ai-agents": {
    path: "/services/ai-agents",
    title: "AI Agents & Voicebots | Multilingual Hindi, Marathi & English AI — dieVekter",
    description:
      "Autonomous AI agents and voice assistants with RAG knowledge bases and CRM execution, built for Indian and global business workflows.",
    priority: "0.9",
    changefreq: "monthly",
  },
  "/services/ai-chatbots": {
    path: "/services/ai-chatbots",
    title: "AI Chatbot Development | Website & WhatsApp Lead Qualification Bots — dieVekter",
    description:
      "24/7 AI chatbots for websites and WhatsApp that answer customer questions accurately, qualify enquiries, and book appointments.",
    priority: "0.85",
    changefreq: "monthly",
  },
  "/services/business-automation": {
    path: "/services/business-automation",
    title: "Business Process Automation | Eliminate Repetitive Workflows — dieVekter",
    description:
      "End-to-end business process automation connecting forms, spreadsheets, billing, notifications and internal approvals without manual bottlenecks.",
    priority: "0.85",
    changefreq: "monthly",
  },
  "/services/crm-automation": {
    path: "/services/crm-automation",
    title: "CRM & Workflow Automation | Lead Routing, WhatsApp & Follow-Ups — dieVekter",
    description:
      "Automated CRM pipelines with instant WhatsApp acknowledgements, lead scoring, follow-up reminders and reporting dashboards.",
    priority: "0.85",
    changefreq: "monthly",
  },
  "/services/api-integration": {
    path: "/services/api-integration",
    title: "API Development & System Integrations | REST, Webhooks & Cloud — dieVekter",
    description:
      "Custom REST APIs, third-party payment, WhatsApp, ERP and CRM integrations engineered with authentication, rate limiting and monitoring.",
    priority: "0.8",
    changefreq: "monthly",
  },
  "/services/cloud-solutions": {
    path: "/services/cloud-solutions",
    title: "Cloud & Backend Development | Scalable Deployment, Security & DevOps — dieVekter",
    description:
      "Reliable cloud architecture, backend APIs, SSL security, CI/CD deployment, automated backups and uptime monitoring for growing teams.",
    priority: "0.8",
    changefreq: "monthly",
  },
  "/services/ui-ux-design": {
    path: "/services/ui-ux-design",
    title: "UI/UX Design Services | Web & Mobile Product Interfaces — dieVekter",
    description:
      "Conversion-focused UI/UX design systems, wireframes, interactive prototypes and responsive interfaces built for clarity and accessibility.",
    priority: "0.8",
    changefreq: "monthly",
  },
  "/services/seo-optimization": {
    path: "/services/seo-optimization",
    title: "Technical SEO & Search Optimization Services — dieVekter",
    description:
      "Structured metadata, Core Web Vitals performance tuning, Schema.org markup, local SEO and clean site architecture that earns organic traffic.",
    priority: "0.8",
    changefreq: "monthly",
  },
  "/services/wordpress-development": {
    path: "/services/wordpress-development",
    title: "WordPress Website Development & CMS Engineering — dieVekter",
    description:
      "Custom WordPress builds, lightweight themes, WooCommerce storefronts, speed optimization and manageable editorial workflows.",
    priority: "0.75",
    changefreq: "monthly",
  },
  "/services/agentic-ai-training": {
    path: "/services/agentic-ai-training",
    title: "Agentic AI & Vibe Coding Training Program — dieVekter",
    description:
      "Hands-on technical training covering autonomous AI agents, tool calling, workflow automation and AI-assisted full-stack engineering.",
    priority: "0.7",
    changefreq: "monthly",
  },
  "/services/ai-training-workshops": {
    path: "/services/ai-training-workshops",
    title: "AI Training & Workshops for Schools and Educators — dieVekter",
    description:
      "Practical AI literacy workshops and bootcamps delivered across schools and colleges in Kolhapur and Radhanagari, Maharashtra.",
    priority: "0.7",
    changefreq: "monthly",
  },
  "/study-abroad": {
    path: "/study-abroad",
    title: "Study Abroad Consultancy in Kolhapur & India | Germany & Global Admissions — dieVekter",
    description:
      "Transparent overseas education consultancy from Kolhapur & Pune: country & university shortlisting, Study in Germany guidance, admission paperwork, student visa documentation checklist and pre-departure support.",
    priority: "0.95",
    changefreq: "weekly",
  },
  "/study-abroad/germany": {
    path: "/study-abroad/germany",
    title: "Study in Germany for Indian Students | APS, Public Universities & Visa Checklist — dieVekter",
    description:
      "Step-by-step Study in Germany guidance covering public vs private universities, DAAD research, APS India certificate preparation, uni-assist applications, blocked account overview and German student visa documentation.",
    priority: "0.9",
    changefreq: "weekly",
  },
  "/study-abroad/university-selection": {
    path: "/study-abroad/university-selection",
    title: "Country & University Selection Counselling | Shortlisting Support — dieVekter",
    description:
      "Profile-based country and university shortlisting aligned with your academic background, language proficiency, intake timelines and career goals.",
    priority: "0.8",
    changefreq: "monthly",
  },
  "/study-abroad/admission-assistance": {
    path: "/study-abroad/admission-assistance",
    title: "University Application & Admission Assistance | SOP, LOR & Portal Filing — dieVekter",
    description:
      "Structured admission assistance covering transcript checklists, CV formatting, SOP/motivation letter review, LOR planning and portal submissions.",
    priority: "0.8",
    changefreq: "monthly",
  },
  "/study-abroad/visa-guidance": {
    path: "/study-abroad/visa-guidance",
    title: "Student Visa Documentation Guidance & Pre-Departure Support — dieVekter",
    description:
      "Organized student visa document checklists, financial proof preparation, APS verification readiness and pre-departure briefing based on official mission guidelines.",
    priority: "0.8",
    changefreq: "monthly",
  },
  "/study-abroad/student-resources": {
    path: "/study-abroad/student-resources",
    title: "Official Study Abroad Student Resources, FAQs & Checklists — dieVekter",
    description:
      "Curated official links to DAAD, German Missions in India, APS India, uni-assist and study abroad preparation checklists.",
    priority: "0.8",
    changefreq: "monthly",
  },
  "/solutions": {
    path: "/solutions",
    title: "Business Technology Solutions | AI, Software Engineering & Automation — dieVekter",
    description:
      "Connected software engineering, AI agent deployment and process automation systems tailored to growing organizations.",
    priority: "0.8",
    changefreq: "monthly",
  },
  "/solutions/ai": {
    path: "/solutions/ai",
    title: "AI Solutions | Multilingual Voice AI, RAG Assistants & LLM Systems — dieVekter",
    description:
      "Deploy production AI voice agents, Hindi/Marathi/English chat assistants and enterprise RAG pipelines connected to your CRM.",
    priority: "0.85",
    changefreq: "monthly",
  },
  "/solutions/software": {
    path: "/solutions/software",
    title: "Custom Software & Full-Stack Engineering Solutions — dieVekter",
    description:
      "Reliable web applications, cross-platform mobile apps, APIs and cloud-ready backends engineered for clarity and speed.",
    priority: "0.8",
    changefreq: "monthly",
  },
  "/solutions/automation": {
    path: "/solutions/automation",
    title: "Workflow & CRM Automation Solutions — dieVekter",
    description:
      "Automate enquiry capture, CRM routing, notifications, billing triggers and operational handoffs across your business stack.",
    priority: "0.8",
    changefreq: "monthly",
  },
  "/projects": {
    path: "/projects",
    title: "Shipped Websites & Client Projects Portfolio — dieVekter",
    description:
      "Browse live client websites and web platforms built by DieVekter Tech across technology, education, real estate, fitness, events and digital media.",
    priority: "0.85",
    changefreq: "weekly",
  },
  "/portfolio": {
    path: "/portfolio",
    title: "Systems Portfolio & Selected Product Builds — dieVekter",
    description:
      "Selected AI assistants, retail billing systems, websites and mobile apps engineered by DieVekter Tech.",
    priority: "0.8",
    changefreq: "monthly",
  },
  "/products": {
    path: "/products",
    title: "Software Products | AI Billing, CRM, Attendance & Slack Migration — dieVekter",
    description:
      "Ready-to-deploy software products by dieVekter including smart retail billing, attendance management, CRM pipelines and workspace migration.",
    priority: "0.8",
    changefreq: "monthly",
  },
  "/agents": {
    path: "/agents",
    title: "AI Agents Showcase | Sales, Support, Voice & Operations Agents — dieVekter",
    description:
      "Explore domain-ready AI customer support, sales qualification, appointment booking and workflow agents by DieVekter Tech.",
    priority: "0.8",
    changefreq: "monthly",
  },
  "/ai-agents-library": {
    path: "/ai-agents-library",
    title: "AI Prompt & Agent Templates Library — dieVekter",
    description:
      "Interactive prompt library and workflow blueprints for marketing, operations, customer support and coding productivity.",
    priority: "0.65",
    changefreq: "monthly",
  },
  "/development-kit": {
    path: "/development-kit",
    title: "Developer Tools & System Simulators Kit — dieVekter",
    description:
      "Free browser-based developer utilities: JSON formatter, UUID generator, JWT decoder, regex tester and distributed systems visualizers.",
    priority: "0.7",
    changefreq: "monthly",
  },
  "/blog": {
    path: "/blog",
    title: "Journal | Software, AI Agents, Automation & Study Abroad Guides — dieVekter",
    description:
      "Practical engineering guides, AI implementation articles and verified Study in Germany & overseas education resources by DieVekter Tech.",
    priority: "0.85",
    changefreq: "weekly",
  },
  "/blog/technology": {
    path: "/blog/technology",
    title: "Technology & Software Engineering Guides | Journal — dieVekter",
    description:
      "Articles covering custom software engineering, API integration, e-commerce optimization and technical SEO.",
    priority: "0.75",
    changefreq: "weekly",
  },
  "/blog/website-development": {
    path: "/blog/website-development",
    title: "Website Development & SEO Guides | Journal — dieVekter",
    description:
      "Guides on website architecture, performance, technical SEO and conversion-focused web development for small businesses.",
    priority: "0.75",
    changefreq: "weekly",
  },
  "/blog/mobile-app-development": {
    path: "/blog/mobile-app-development",
    title: "Mobile App Development Guides | Journal — dieVekter",
    description:
      "Technical guides on React Native, Flutter, mobile UX and shipping production iOS and Android apps.",
    priority: "0.75",
    changefreq: "weekly",
  },
  "/blog/artificial-intelligence": {
    path: "/blog/artificial-intelligence",
    title: "Artificial Intelligence & AI Agents Guides | Journal — dieVekter",
    description:
      "Deep dives into agentic AI, voicebots, RAG assistants, AI literacy programs and responsible deployment.",
    priority: "0.75",
    changefreq: "weekly",
  },
  "/blog/business-automation": {
    path: "/blog/business-automation",
    title: "Business & CRM Automation Guides | Journal — dieVekter",
    description:
      "Guides on workflow automation, API integration, stock management and workspace data migration.",
    priority: "0.75",
    changefreq: "weekly",
  },
  "/blog/study-abroad": {
    path: "/blog/study-abroad",
    title: "Study Abroad & Admissions Guides | Journal — dieVekter",
    description:
      "Guides on university selection, SOP/LOR preparation, student visa documentation checklists and pre-departure planning.",
    priority: "0.8",
    changefreq: "weekly",
  },
  "/blog/study-in-germany": {
    path: "/blog/study-in-germany",
    title: "Study in Germany Guides for Indian Students | Journal — dieVekter",
    description:
      "Accurate checklists for public German universities, APS certificate requirements, uni-assist and student visa documentation.",
    priority: "0.85",
    changefreq: "weekly",
  },
  "/contact": {
    path: "/contact",
    title: "Contact dieVekter | Software Development & Study Abroad Consultation",
    description:
      "Contact DieVekter Tech in Radhanagari, Kolhapur, Maharashtra via WhatsApp (+91 94048 95667), phone or email (team.dievekter@gmail.com) for software or study abroad enquiries.",
    priority: "0.9",
    changefreq: "monthly",
  },
  "/jobs": {
    path: "/jobs",
    title: "Careers & Open Roles — dieVekter",
    description:
      "Explore engineering, AI and growth opportunities with the dieVekter team.",
    priority: "0.6",
    changefreq: "monthly",
  },
  "/internship": {
    path: "/internship",
    title: "Student Internships in Software & AI — dieVekter",
    description:
      "Apply for hands-on Python, React, backend, UI/UX and AI engineering internships at dieVekter.",
    priority: "0.6",
    changefreq: "monthly",
  },
  "/privacy": {
    path: "/privacy",
    title: "Privacy Policy — dieVekter",
    description:
      "How DIEVEKTER (dieVekter) collects, uses and protects enquiry and website visitor information, plus enterprise registration verification disclosures.",
    priority: "0.4",
    changefreq: "yearly",
  },
  "/terms": {
    path: "/terms",
    title: "Terms of Service & Consultancy Disclosures — dieVekter",
    description:
      "Terms governing website usage, software development engagements and Study Abroad Consultancy scope & official embassy/university disclaimers for DIEVEKTER.",
    priority: "0.4",
    changefreq: "yearly",
  },
  "/services/refer": {
    path: "/services/refer",
    title: "Partner & Client Referral Program — dieVekter",
    description: "Refer technology or software projects to dieVekter.",
    noindex: true,
  },
  "/fun": {
    path: "/fun",
    title: "Memory Card Game — dieVekter",
    description: "Interactive mini game built by dieVekter.",
    noindex: true,
  },
  "/404": {
    path: "/404",
    title: "Page Not Found (404) — dieVekter",
    description: "The requested page could not be found on DieVekter Tech.",
    noindex: true,
  },
};

export function getRouteMeta(path: string, fallback?: Partial<RouteMetaEntry>): RouteMetaEntry {
  const normalized = normalizePathname(path);
  return (
    STATIC_ROUTE_META[normalized] || {
      path: normalized,
      title: fallback?.title || "dieVekter | Technology Solutions & Study Abroad Consultancy",
      description:
        fallback?.description ||
        "DieVekter Tech builds custom software, AI agents and business automation, and guides students with Study Abroad Consultancy.",
      noindex: fallback?.noindex,
      priority: fallback?.priority || "0.7",
      changefreq: fallback?.changefreq || "monthly",
      image: fallback?.image,
    }
  );
}
