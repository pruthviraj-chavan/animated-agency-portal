# Technical SEO Implementation Specification

**Stack:** React 18 + Vite 5 + React Router 6 + React Helmet 6 + Tailwind CSS + Vercel Hosting (`cleanUrls: true`, `trailingSlash: false`)

---

## 1. Static SSR Prerendering Pipeline

To solve client-only empty `#root` rendering without rewriting the site onto another framework:

1. **Client Bundle (`vite build`)**  
   Builds browser JS/CSS assets with `base: "/"` so nested paths (`/services/website-development`, `/study-abroad/germany`, `/blog/<slug>`) load `/assets/*`, `/projects/*` and logos reliably.
2. **Utility Route Lazy Code Splitting (`src/App.tsx` + `src/AppRoutes.tsx`)**  
   Heavy interactive utility routes (`/development-kit`, `/ai-agents-library`, `/fun`, `/products`, `/jobs`, `/internship`) are dynamically code-split via `React.lazy` for browser visitors while imported synchronously in `src/entry-ssr.tsx` during static HTML generation.
3. **SSR Prerender Bundle (`vite build --ssr src/entry-ssr.tsx --outDir dist-ssr`)**  
   Uses `StaticRouter`, synchronous React `renderToString()`, and `Helmet.renderStatic()` across all static routes and dynamic blog slugs.
4. **Post-Build Generator (`scripts/prerender.mjs`)**  
   - Injects `<title>`, `<meta name="description">`, `<link rel="canonical">`, `<meta name="robots">`, Open Graph, Twitter Card and Schema.org `@graph` JSON-LD cleanly between `<!--SEO_HEAD_START-->` and `<!--SEO_HEAD_END-->` in `dist/index.html` (avoiding duplicate fallback tags).
   - Writes rendered HTML for `/` (`dist/index.html`) and `<route>.html` files (`dist/about.html`, `dist/study-abroad/germany.html`, `dist/404.html`, etc.).
   - Generates synchronized `sitemap.xml`, `robots.txt` and `llms.txt` in both `public/` and `dist/`, then removes temporary `dist-ssr/`.

---

## 2. Canonical, Redirect & HTTP Status Hygiene (`vercel.json`)

- **Host Canonicalization:** Permanent 301 redirect from `dievekter.tech/*` -> `https://www.dievekter.tech/$1`.
- **Legacy Alias 301 Redirects:**
  - `/services/custom-website-development` -> `/services/website-development`
  - `/services/ecommerce-solutions` -> `/services/ecommerce-development`
  - `/services/api-development` -> `/services/api-integration`
  - `/services/web-hosting` -> `/services/cloud-solutions`
  - `/about-us` -> `/about`
  - `/contact-us` -> `/contact`
- **Noindex & Soft-404 Prevention:**  
  - Removed the global `X-Robots-Tag: index, follow` HTTP override header.
  - Removed catch-all SPA fallback rewrite so missing routes serve `dist/404.html` cleanly with real 404 semantics, `<meta name="robots" content="noindex, nofollow" />`, and no `<link rel="canonical">`.
  - Utility routes `/fun` and `/services/refer` are prerendered with `noindex, nofollow`, zero canonical tag, and omitted from `sitemap.xml`.

---

## 3. Centralized Metadata & JSON-LD (`src/data/seoConfig.ts` & `src/components/seo/SeoHead.tsx`)

- Removed deprecated `<meta name="keywords">` globally from `index.html`, `BlogPost.tsx`, and all layouts.
- Enforced single `@graph` JSON-LD payload per route combining relevant schema types (`Organization`, `LocalBusiness` / `ProfessionalService`, `WebSite` + `SearchAction`, `WebPage`, `BreadcrumbList`, `Service`, `BlogPosting` + `Person`, and `FAQPage` tied exclusively to visible FAQ blocks).
- Enforced configurable base URL via `VITE_SITE_URL` (default `https://www.dievekter.tech`).

---

## 4. Automated Crawl & HTML Integrity Validation (`npm run seo:check`)

`scripts/validate-seo-build.mjs` runs against `dist/` after every build and checks:
- Exact `<html lang="en-IN">` presence
- Exactly 1 `<title>`, 1 `<meta name="description">`, and zero duplicate values across all indexable routes
- Zero `<meta name="keywords">` tags
- Exactly 1 `<link rel="canonical">` on indexable routes and 0 canonical tags + `noindex` on `/404`, `/fun`, `/services/refer`
- Exactly 1 visible `<h1>` per route and non-empty prerendered `#root` HTML
- Valid JSON syntax for every `<script type="application/ld+json">` tag
- Internal link target integrity across every HTML page
- 100% parity between `dist/sitemap.xml` URLs, canonicals, and generated HTML files.
