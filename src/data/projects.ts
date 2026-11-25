export type ProjectCategory =
  | "All"
  | "Tech & Enterprise"
  | "Education & IT"
  | "Real Estate & Fitness"
  | "Media & Events";

export interface StudioProject {
  id: string;
  index: string;
  title: string;
  domain: string;
  url: string;
  previewImage: string;
  category: Exclude<ProjectCategory, "All">;
  industryBadge: string;
  description: string;
  highlights: string[];
  accentBg: string;
  accentFg: string;
  accentPill: string;
  clientType: string;
}

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "All",
  "Tech & Enterprise",
  "Education & IT",
  "Real Estate & Fitness",
  "Media & Events",
];

export const STUDIO_PROJECTS: StudioProject[] = [
  {
    id: "bhrigu-tech",
    index: "01",
    title: "Bhrigu Tech",
    domain: "www.bhrigu.tech",
    url: "https://www.bhrigu.tech/",
    previewImage: "/projects/bhrigu-tech.jpg",
    category: "Tech & Enterprise",
    industryBadge: "AI & Enterprise",
    description:
      "BhriguOne industrial SaaS web platform built for regulated manufacturing workflows, GxP compliance, IT/OT convergence, and operational intelligence.",
    highlights: ["Enterprise Web", "AI-Native Platform", "Free Trial Funnel"],
    accentBg: "#141210",
    accentFg: "#FFFFFF",
    accentPill: "#FF5422",
    clientType: "Technology Platform",
  },
  {
    id: "phonda-education",
    index: "02",
    title: "Phonda Education Society",
    domain: "www.phondaeducationsociety.com",
    url: "https://www.phondaeducationsociety.com/",
    previewImage: "/projects/phonda-education.jpg",
    category: "Education & IT",
    industryBadge: "Education",
    description:
      "Digital campus portal for Phonda Education Society in Phondaghat serving classes 5th to 12th with institutional highlights, faculty updates, and admissions enquiries.",
    highlights: ["Academic Portal", "Admissions Info", "Mobile First"],
    accentBg: "#FFF4F0",
    accentFg: "#141210",
    accentPill: "#FF5422",
    clientType: "Educational Society",
  },
  {
    id: "new-door-properties",
    index: "03",
    title: "New Door Properties",
    domain: "www.newdoorproperties.in",
    url: "https://www.newdoorproperties.in/",
    previewImage: "/projects/new-door-properties.jpg",
    category: "Real Estate & Fitness",
    industryBadge: "Real Estate",
    description:
      "Full-featured real estate marketplace supporting Buy, Rent, Resale, Commercial, Land, Loan Assistance, location filters, and scheduled site visits.",
    highlights: ["Property Search", "Visit Scheduling", "Loan Assistance"],
    accentBg: "#0F172A",
    accentFg: "#FFFFFF",
    accentPill: "#FF5422",
    clientType: "Real Estate Advisory",
  },
  {
    id: "the-eventors",
    index: "04",
    title: "The Eventors",
    domain: "www.theeventors.in",
    url: "https://www.theeventors.in/",
    previewImage: "/projects/the-eventors.jpg",
    category: "Media & Events",
    industryBadge: "Events & Production",
    description:
      "Luxury event management & wedding production platform covering Wedding, Corporate, Social, and Birthday celebrations with gallery & booking flows.",
    highlights: ["Event Showcase", "Story-Driven UX", "Custom Animations"],
    accentBg: "#2E0A0C",
    accentFg: "#FFFFFF",
    accentPill: "#E8B878",
    clientType: "Event Management",
  },
  {
    id: "vfa-gym",
    index: "05",
    title: "VFA Gym",
    domain: "www.vfagym.com",
    url: "https://www.vfagym.com/",
    previewImage: "/projects/vfa-gym.jpg",
    category: "Real Estate & Fitness",
    industryBadge: "Fitness & Health",
    description:
      "Interactive gym & fitness center experience featuring a custom playable discount mini-game, workout programs, and direct membership enquiries.",
    highlights: ["Interactive Mini-Game", "Fitness Programs", "Lead Funnel"],
    accentBg: "#191716",
    accentFg: "#FFFFFF",
    accentPill: "#FF5422",
    clientType: "Fitness Center",
  },
  {
    id: "jaihind-electricals",
    index: "06",
    title: "Jaihind Electricals",
    domain: "www.jaihindelectricals.co.in",
    url: "https://www.jaihindelectricals.co.in/",
    previewImage: "/projects/jaihind-electricals.jpg",
    category: "Tech & Enterprise",
    industryBadge: "Service & Retail",
    description:
      "Kolhapur home appliance repair & electrical services platform serving 50,000+ clients with 90-day warranty info, direct Call Now, and WhatsApp booking.",
    highlights: ["WhatsApp Booking", "Same Day Service", "Local SEO"],
    accentBg: "#1B232D",
    accentFg: "#FFFFFF",
    accentPill: "#FF5422",
    clientType: "Appliance Service & Shop",
  },
  {
    id: "mahaa-connect-news",
    index: "07",
    title: "Mahaa Connect News",
    domain: "www.mahaaconnectnews.in",
    url: "https://www.mahaaconnectnews.in/",
    previewImage: "/projects/mahaa-connect-news.jpg",
    category: "Media & Events",
    industryBadge: "Digital News",
    description:
      "Regional Marathi digital news publication from Kolhapur with breaking news ticker, category feeds, editorial opinion, and high-speed mobile reading.",
    highlights: ["Marathi News Portal", "Live Ticker", "High Readability"],
    accentBg: "#FF5422",
    accentFg: "#FFFFFF",
    accentPill: "#141210",
    clientType: "News Media Portal",
  },
  {
    id: "incite-computer",
    index: "08",
    title: "Incite Computer",
    domain: "www.incitecomputer.com",
    url: "https://www.incitecomputer.com/",
    previewImage: "/projects/incite-computer.jpg",
    category: "Education & IT",
    industryBadge: "IT Institute",
    description:
      "IT training and MSBTE/MS-CIT certification institute website featuring course finder, student circulars, workshops, and multi-center admissions enquiries.",
    highlights: ["Course Catalogue", "Student Notices", "Admissions Flow"],
    accentBg: "#10324A",
    accentFg: "#FFFFFF",
    accentPill: "#FF5422",
    clientType: "IT Training Institute",
  },
  {
    id: "incite-computer-phondaghat",
    index: "09",
    title: "Incite Computer Phondaghat",
    domain: "www.incitecomputerphondaghat.co.in",
    url: "https://www.incitecomputerphondaghat.co.in/",
    previewImage: "/projects/incite-computer-phondaghat.jpg",
    category: "Education & IT",
    industryBadge: "Regional Campus",
    description:
      "MKCL-recognized Phondaghat branch portal featuring MS-CIT, Typing & CCTP course search, AI tools section, countdown admission alerts, and direct enquiry.",
    highlights: ["Course Search", "AI Tools Portal", "Student Admissions"],
    accentBg: "#0B3A75",
    accentFg: "#FFFFFF",
    accentPill: "#FF5422",
    clientType: "Computer Training Center",
  },
];
