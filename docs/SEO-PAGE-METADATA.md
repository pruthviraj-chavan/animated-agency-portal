# Page-by-Page SEO Metadata & Schema Reference

All titles, descriptions, canonical policies, headings and JSON-LD types below are configured centrally in `src/data/seoConfig.ts` and emitted cleanly during static prerendering by `src/components/seo/SeoHead.tsx`.

---

## 1. Core Company Pages

| Route | `<title>` | H1 | Indexing | JSON-LD Entities |
| :--- | :--- | :--- | :--- | :--- |
| `/` | `dieVekter \| Software Development, AI Agents & Study Abroad Consultancy` | Technology Solutions. Global Education Opportunities. | `index, follow` (`https://www.dievekter.tech/`) | `WebPage`, `Organization`, `LocalBusiness`, `WebSite`, `FAQPage` |
| `/about` | `About dieVekter \| Technology Studio & Study Abroad Advisory in India` | A focused studio for businesses with big plans. | `index, follow` | `WebPage`, `BreadcrumbList`, `Organization`, `LocalBusiness` |
| `/contact` | `Contact dieVekter \| Software Development & Study Abroad Consultation` | Let's build or plan together. | `index, follow` | `WebPage`, `BreadcrumbList`, `LocalBusiness` |
| `/projects` | `Shipped Websites & Client Projects Portfolio — dieVekter` | Our Shipped Projects. | `index, follow` | `WebPage`, `BreadcrumbList` |
| `/portfolio` | `Systems Portfolio & Selected Product Builds — dieVekter` | Selected systems & live builds. | `index, follow` | `WebPage`, `BreadcrumbList` |
| `/products` | `Software Products \| AI Billing, CRM, Attendance & Slack Migration — dieVekter` | Our Products | `index, follow` | `WebPage`, `BreadcrumbList` |
| `/agents` | `AI Agents Showcase \| Sales, Support, Voice & Operations Agents — dieVekter` | AI Agents & Voice Assistants | `index, follow` | `WebPage`, `BreadcrumbList`, `Service` |
| `/privacy` | `Privacy Policy — dieVekter` | Privacy Policy | `index, follow` | `WebPage`, `BreadcrumbList` |
| `/terms` | `Terms of Service & Consultancy Disclosures — dieVekter` | Terms of Service & Disclosures | `index, follow` | `WebPage`, `BreadcrumbList` |

---

## 2. Technology & Software Service Routes

Every `/services/*` route (except utility `/services/refer`) emits `WebPage`, `BreadcrumbList`, `Service` (linked to `#organization`), and `FAQPage` matching its visible accordion questions:

- `/services` — `Technology Services | Web, Mobile App, Software, AI & Automation — dieVekter`
- `/services/website-development` — `Website Development Company in Kolhapur & India | Custom React Websites — dieVekter`
- `/services/mobile-app-development` — `Mobile App Development | Android, iOS & React Native Apps — dieVekter`
- `/services/custom-software-development` — `Custom Software Development | Business Portals, SaaS & Retail Systems — dieVekter`
- `/services/ecommerce-development` — `E-commerce Website Development | Online Store, Checkout & Payment Integration — dieVekter`
- `/services/ai-agents` — `AI Agents & Voicebots | Multilingual Hindi, Marathi & English AI — dieVekter`
- `/services/ai-chatbots` — `AI Chatbot Development | Website & WhatsApp Lead Qualification Bots — dieVekter`
- `/services/business-automation` — `Business Process Automation | Eliminate Repetitive Workflows — dieVekter`
- `/services/crm-automation` — `CRM & Workflow Automation | Lead Routing, WhatsApp & Follow-Ups — dieVekter`
- `/services/api-integration` — `API Development & System Integrations | REST, Webhooks & Cloud — dieVekter`
- `/services/cloud-solutions` — `Cloud & Backend Development | Scalable Deployment, Security & DevOps — dieVekter`
- `/services/ui-ux-design` — `UI/UX Design Services | Web & Mobile Product Interfaces — dieVekter`
- `/services/seo-optimization` — `Technical SEO & Search Optimization Services — dieVekter`
- `/services/wordpress-development` — `WordPress Website Development & CMS Engineering — dieVekter`
- `/services/agentic-ai-training` — `Agentic AI & Vibe Coding Training Program — dieVekter`
- `/services/ai-training-workshops` — `AI Training & Workshops for Schools and Educators — dieVekter`

---

## 3. Study Abroad Consultancy Routes

Every `/study-abroad/*` page emits `WebPage`, `BreadcrumbList`, `Service`, and visible `FAQPage` structured data:

- `/study-abroad` — `Study Abroad Consultancy in Kolhapur & India | Germany & Global Admissions — dieVekter`
- `/study-abroad/germany` — `Study in Germany for Indian Students | APS, Public Universities & Visa Checklist — dieVekter`
- `/study-abroad/university-selection` — `Country & University Selection Counselling | Shortlisting Support — dieVekter`
- `/study-abroad/admission-assistance` — `University Application & Admission Assistance | SOP, LOR & Portal Filing — dieVekter`
- `/study-abroad/visa-guidance` — `Student Visa Documentation Guidance & Pre-Departure Support — dieVekter`
- `/study-abroad/student-resources` — `Official Study Abroad Student Resources, FAQs & Checklists — dieVekter`

---

## 4. Blog Categories, Articles & Non-Indexable Utility Routes

- **Category Hubs:** `/blog`, `/blog/study-in-germany`, `/blog/study-abroad`, `/blog/artificial-intelligence`, `/blog/website-development`, `/blog/mobile-app-development`, `/blog/business-automation`, `/blog/technology`.
- **Blog Articles (`/blog/:slug`):** Unique `BlogPosting` JSON-LD with `datePublished`, `dateModified`, `Person` author, `Organization` publisher reference, `BreadcrumbList`, no deprecated `meta keywords`.
- **Noindex Utility Routes (Excluded from `sitemap.xml`, emit `noindex, nofollow`, zero `<link rel="canonical">`):** `/404`, `/fun`, `/services/refer`.
- **Permanent 301 Redirects (`vercel.json`):** Legacy aliases (`/services/custom-website-development`, `/services/ecommerce-solutions`, `/services/api-development`, `/services/web-hosting`, `/about-us`, `/contact-us`) resolve cleanly to canonical counterparts.
