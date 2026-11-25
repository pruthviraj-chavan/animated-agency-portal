const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://www.dievekter.tech";

export const SITE_URL = rawSiteUrl.replace(/\/+$/, "");

export const SITE_CONFIG = {
  brandName: "dieVekter",
  alternateName: "DieVekter Tech",
  legalName: "DIEVEKTER",
  url: SITE_URL,
  defaultTitle: "dieVekter | Software Solutions & Study Abroad Consultancy",
  defaultDescription:
    "DieVekter Tech provides custom website development, mobile apps, AI agents, workflow automation and Study Abroad Consultancy across Kolhapur, Pune, India and globally.",
  email: "team.dievekter@gmail.com",
  telephone: "+91 94048 95667",
  telephoneE164: "+919404895667",
  whatsappNumber: "919404895667",
  whatsappUrl: "https://wa.me/919404895667",
  logo: `${SITE_URL}/dievektor_full_logo.png`,
  markLogo: `${SITE_URL}/dievektor_logo.png`,
  defaultOgImage: `${SITE_URL}/dievektor.png`,
  locale: "en_IN",
  city: "Radhanagari",
  district: "Kolhapur",
  region: "Maharashtra",
  country: "IN",
  addressLine: "Flat 4, Rohidas Nagar, Radhanagari, Kolhapur, Maharashtra 416204, India",
  udyam: "UDYAM-MH-15-0320983",
  duns: "312163123",
  upworkProfileName: "Pruthviraj C.",
  upworkUrl: "https://www.upwork.com/freelancers/pruthviraj?mp_source=share",
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
  supportedServices: [
    "Website Development",
    "Mobile Application Development",
    "Custom Software Development",
    "E-commerce Solutions",
    "AI Agents & Voicebots",
    "AI Chatbots",
    "Business Automation",
    "CRM Automation",
    "API Development & Integrations",
    "Cloud & Backend Solutions",
    "UI/UX Design",
    "Study Abroad Consultancy",
    "Study in Germany Guidance",
  ],
} as const;

export function normalizePathname(pathname: string): string {
  const clean = pathname.split("#")[0].split("?")[0].trim();
  if (!clean || clean === "/") return "/";
  return `/${clean.replace(/^\/+|\/+$/g, "")}`;
}

export function toAbsoluteUrl(path: string): string {
  const normalized = normalizePathname(path);
  return normalized === "/" ? `${SITE_URL}/` : `${SITE_URL}${normalized}`;
}
