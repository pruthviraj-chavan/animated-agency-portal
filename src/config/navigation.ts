export const PRIMARY_NAV = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    prefixes: ["/services", "/solutions", "/agents"],
  },
  {
    name: "Study Abroad",
    href: "/study-abroad",
    prefixes: ["/study-abroad"],
  },
  {
    name: "Projects",
    href: "/projects",
    prefixes: ["/projects", "/portfolio", "/products"],
  },
  { name: "Blog", href: "/blog", prefixes: ["/blog"] },
  { name: "Contact", href: "/contact" },
] as const;

export const MOBILE_EXTRA_LINKS = [
  { name: "Study in Germany", href: "/study-abroad/germany" },
  { name: "AI Agents", href: "/services/ai-agents" },
  { name: "Website Dev", href: "/services/website-development" },
  { name: "Solutions", href: "/solutions" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Products", href: "/products" },
  { name: "Internships", href: "/internship" },
  { name: "Terms & Legal", href: "/terms" },
] as const;

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/dievekter" },
  { label: "GitHub", href: "https://github.com/dievekter" },
  { label: "Instagram", href: "https://www.instagram.com/dievekter_tech/" },
  {
    label: "WhatsApp",
    href: "https://wa.me/919404895667?text=Hi%20Dievekter%20Tech!%20I%20would%20like%20to%20discuss%20a%20project.",
  },
] as const;

export const FOOTER_COLUMNS = [
  {
    heading: "Technology Solutions",
    links: [
      { name: "All Technology Services", href: "/services" },
      { name: "Website Development", href: "/services/website-development" },
      { name: "Mobile App Development", href: "/services/mobile-app-development" },
      { name: "Custom Software", href: "/services/custom-software-development" },
      { name: "AI Agents & Voicebots", href: "/services/ai-agents" },
      { name: "Business & CRM Automation", href: "/services/business-automation" },
      { name: "API & Cloud Solutions", href: "/services/api-integration" },
    ],
  },
  {
    heading: "Study Abroad",
    links: [
      { name: "Study Abroad Consultancy", href: "/study-abroad" },
      { name: "Study in Germany Guide", href: "/study-abroad/germany" },
      { name: "University Selection", href: "/study-abroad/university-selection" },
      { name: "Admission Assistance", href: "/study-abroad/admission-assistance" },
      { name: "Visa & Pre-Departure", href: "/study-abroad/visa-guidance" },
      { name: "Student Resources & FAQs", href: "/study-abroad/student-resources" },
    ],
  },
  {
    heading: "Company & Journal",
    links: [
      { name: "About dieVekter", href: "/about" },
      { name: "Shipped Projects", href: "/projects" },
      { name: "Systems Portfolio", href: "/portfolio" },
      { name: "Software Products", href: "/products" },
      { name: "Editorial Journal", href: "/blog" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  {
    heading: "Legal & Region",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms & Disclaimers", href: "/terms" },
      { name: "Careers & Jobs", href: "/jobs" },
      { name: "Internships", href: "/internship" },
      { name: "Developer Kit", href: "/development-kit" },
    ],
  },
] as const;
