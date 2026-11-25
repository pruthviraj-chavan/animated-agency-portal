# Route Mapping & Redirect Matrix

## 1. Canonical Route Mapping (`Vite React Router` -> `Next.js App Router`)

| URL Path | Next.js File | Indexable | Schema / Metadata Type |
| --- | --- | --- | --- |
| `/` | `src/app/(marketing)/page.tsx` | Yes | `WebSite`, `Organization`, `LocalBusiness`, `WebPage` |
| `/about` | `src/app/(marketing)/about/page.tsx` | Yes | `WebPage`, `BreadcrumbList`, `Organization`, `LocalBusiness` |
| `/services` | `src/app/(marketing)/services/page.tsx` | Yes | `WebPage`, `BreadcrumbList` |
| `/services/[slug]` (13 slugs) | `src/app/(marketing)/services/[slug]/page.tsx` | Yes | `WebPage`, `BreadcrumbList`, `Service`, `FAQPage` |
| `/services/agentic-ai-training` | `src/app/(marketing)/services/agentic-ai-training/page.tsx` | Yes | `WebPage`, `BreadcrumbList`, `Service` |
| `/services/ai-training-workshops` | `src/app/(marketing)/services/ai-training-workshops/page.tsx` | Yes | `WebPage`, `BreadcrumbList`, `Service` |
| `/services/refer` | `src/app/(marketing)/services/refer/page.tsx` | **No** (`noindex`) | `WebPage`, `BreadcrumbList` + `X-Robots-Tag` |
| `/study-abroad` | `src/app/(marketing)/study-abroad/page.tsx` | Yes | `WebPage`, `BreadcrumbList`, `Service`, `FAQPage` |
| `/study-abroad/germany` | `src/app/(marketing)/study-abroad/germany/page.tsx` | Yes | `WebPage`, `BreadcrumbList`, `Service`, `FAQPage` |
| `/study-abroad/university-selection` | `src/app/(marketing)/study-abroad/university-selection/page.tsx` | Yes | `WebPage`, `BreadcrumbList`, `Service`, `FAQPage` |
| `/study-abroad/admission-assistance` | `src/app/(marketing)/study-abroad/admission-assistance/page.tsx` | Yes | `WebPage`, `BreadcrumbList`, `Service`, `FAQPage` |
| `/study-abroad/visa-guidance` | `src/app/(marketing)/study-abroad/visa-guidance/page.tsx` | Yes | `WebPage`, `BreadcrumbList`, `Service`, `FAQPage` |
| `/study-abroad/student-resources` | `src/app/(marketing)/study-abroad/student-resources/page.tsx` | Yes | `WebPage`, `BreadcrumbList`, `Service`, `FAQPage` |
| `/solutions`, `/solutions/{ai,software,automation}` | `src/app/(marketing)/solutions/**/page.tsx` | Yes | `WebPage`, `BreadcrumbList`, `Service` |
| `/projects`, `/portfolio`, `/products`, `/agents` | `src/app/(marketing)/*/page.tsx` | Yes | `WebPage`, `BreadcrumbList` (+ `Service` on products/agents) |
| `/blog`, `/blog/[slug]` (categories + articles) | `src/app/(marketing)/blog/**/page.tsx` | Yes | `WebPage`, `BreadcrumbList` (+ `BlogPosting` for articles) |
| `/contact`, `/jobs`, `/internship` | `src/app/(marketing)/*/page.tsx` | Yes | `WebPage`, `BreadcrumbList` (+ `LocalBusiness` on contact) |
| `/ai-agents-library`, `/development-kit` | `src/app/(marketing)/*/page.tsx` | Yes | `WebPage`, `BreadcrumbList` |
| `/privacy`, `/terms` | `src/app/(marketing)/*/page.tsx` | Yes | `WebPage`, `BreadcrumbList` |
| `/fun` | `src/app/(marketing)/fun/page.tsx` | **No** (`noindex`) | `WebPage`, `BreadcrumbList` + `X-Robots-Tag` |
| `/api/contact`, `/api/enquiry` | `src/app/api/{contact,enquiry}/route.ts` | N/A | JSON REST `POST` handlers |
| Any unknown URL | `src/app/not-found.tsx` | **No** (`noindex`) | Real HTTP `404` status |

## 2. Permanent 308 / 301 Redirects

Configured in `next.config.ts` (`async redirects()`) and `vercel.json`:

- Host canonicalization (`vercel.json`): `https://dievekter.tech/*` -> `https://www.dievekter.tech/$1` (`permanent: true`).
- Legacy slug normalization (`next.config.ts`):
  - `/services/custom-website-development` -> `/services/website-development`
  - `/services/ecommerce-solutions` -> `/services/ecommerce-development`
  - `/services/api-development` -> `/services/api-integration`
  - `/services/web-hosting` -> `/services/cloud-solutions`
  - `/about-us` -> `/about`
  - `/contact-us` -> `/contact`
  - `/privacy-policy` -> `/privacy`
  - `/terms-and-conditions` -> `/terms`
  - `/blog/category/:category` -> `/blog/:category`
