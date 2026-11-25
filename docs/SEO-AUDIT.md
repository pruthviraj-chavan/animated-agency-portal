# DieVekter Tech — Technical & Content SEO Audit

**Domain Audited:** `https://www.dievekter.tech`  
**Business Entity:** DIEVEKTER (`dieVekter`), Radhanagari, Kolhapur, Maharashtra, India (`UDYAM-MH-15-0320983`, `D-U-N-S 312163123`)  
**Audit Scope:** Full React + Vite codebase inspection prior to SEO transformation and verification of post-fix architecture.

---

## 1. Baseline Issues Identified in Codebase Audit

### Critical Technical & Crawlability Findings
1. **Pure Client-Side SPA Rendering (`dist/index.html` empty `#root`)**  
   All routes compiled into an empty `<div id="root"></div>`, forcing search crawlers and social link scrapers to wait for full JavaScript execution and causing every non-JS inspection of inner routes to inherit homepage `<head>` tags.
2. **Relative Vite `base: "./"` Configuration (`vite.config.ts`)**  
   Relative base paths break asset resolution whenever static HTML files are served under nested URL paths such as `/services/website-development` or `/study-abroad/germany`.
3. **Missing `<Helmet>` / Per-Route Head Metadata Across ~25 Routes**  
   Only `About.tsx`, `Blog.tsx`, `BlogPost.tsx`, `AIAgentsLibrary.tsx`, `AgenticAITraining.tsx`, and `AITrainingWorkshops.tsx` rendered route-specific `<Helmet>` heads. Core commercial routes (`/services`, `/services/*`, `/solutions/*`, `/projects`, `/portfolio`, `/products`, `/agents`, `/contact`) shared default homepage metadata on initial load.
4. **Deprecated `<meta name="keywords">` Tag**  
   Present in both `index.html` and `src/pages/BlogPost.tsx`, offering zero search benefit while exposing target keyword lists cleanly removable without side effects.
5. **Catch-All SPA Rewrite Risking Soft 404s (`vercel.json`) + Blanket `X-Robots-Tag: index, follow`**  
   Routing unknown URLs to `/index.html` caused invalid routes to look like `200 OK` responses, and the global `X-Robots-Tag: index, follow` header conflicted with per-page `noindex` control for `/404` or utility pages.
6. **Unused `three` Library Imported in `heroCardTextures.ts`**  
   `src/components/home2/heroCardTextures.ts` statically imported `* as THREE` solely for an unused `createCardTexture` export, inflating the initial homepage JS bundle unnecessarily alongside eager loading of 30 simulator components in `DevelopmentKit.tsx`.
7. **Manual & Stale `public/sitemap.xml`**  
   `sitemap.xml` omitted newer routes (`/projects`, `/portfolio`, `/agents`, `/services/agentic-ai-training`, `/services/ai-training-workshops`, `/study-abroad/*`, `/terms`) and carried out-of-date `lastmod` timestamps.
8. **Deferred First Render on `BlogPost.tsx` & Plain Text Markdown**  
   `BlogPost.tsx` resolved `post` inside `useEffect`, outputting `null` on initial SSR render, and printed markdown syntax inside `<article>{post.content}</article>` instead of semantic `<h2>`/`<h3>`/list elements.

### Content, Architecture & Business Vertical Gaps
1. **Hidden Primary Homepage `<h1>` (`sr-only`)**  
   `Hero.tsx` placed the primary `<h1>` inside `.sr-only`, leaving `/` without a visible primary heading or visible introductory positioning statement covering both verticals.
2. **Under-Represented Study Abroad Consultancy Vertical**  
   Study Abroad was linked mainly via a hero card query parameter (`/contact?brief=Abroad%20Study%20Consultation`), lacking a dedicated `/study-abroad` hub, flagship `/study-abroad/germany` guide, admission/visa pathway pages, official DAAD/APS/mission citations, and visible homepage showcase.
3. **Thin Service Subpages (~36 Lines Each)**  
   Pages such as `CustomWebsiteDevelopment.tsx` and `MobileAppDevelopment.tsx` rendered only 6 bullet cards without problem framing, tech stack transparency, delivery workflow, visible FAQs, `Service` / `FAQPage` / `BreadcrumbList` JSON-LD, or contextual cross-linking.
4. **Missing Legal `/terms` Page & Unseparated Enquiry Tracking**  
   No dedicated `/terms` disclosure page existed for consultancy scope/non-government clarity, and `Contact.tsx` sent enquiries without vertical classification (`Technology Solutions` vs `Study Abroad Consultancy`) or structured GA4 lead event firing.

---

## 2. Severity Matrix & Resolution Summary

| Issue | Severity | Resolution Implemented |
| :--- | :--- | :--- |
| Client-only empty HTML shell | **Critical** | Static SSR prerendering (`src/entry-ssr.tsx` + `scripts/prerender.mjs`) generating `dist/**/*.html` |
| Duplicate / missing `<head>` tags & `meta keywords` | **High** | Centralized `SeoHead.tsx` + `seoConfig.ts` replacing `<!--SEO_HEAD_START-->...<!--SEO_HEAD_END-->` cleanly |
| `base: "./"` asset path risk on nested routes | **High** | Switched `vite.config.ts` to `base: "/"` + vendor chunking & lazy utility splitting |
| Soft 404 risk + blanket `X-Robots-Tag` | **High** | Static `/404.html` (`noindex`, no canonical), removed blanket `X-Robots-Tag`, added 301 legacy redirects in `vercel.json` |
| `sr-only` homepage `<h1>` & missing Study Abroad hub | **High** | Visible homepage `<h1>`, dual CTAs, `StudyAbroadShowcase.tsx`, `/study-abroad/*` hub + `/study-abroad/germany` |
| Thin service subpages & missing schema | **Medium** | Expanded `ServiceDetailLayout.tsx` + `techServicesData.ts` covering all core services with `Service` + `FAQPage` schema |
| Manual stale `sitemap.xml` | **Medium** | Automated build-time generation of `sitemap.xml`, `robots.txt` and `llms.txt` verified via `npm run seo:check` |
| Unparsed markdown & SSR delay on `BlogPost.tsx` | **Medium** | Synchronous post resolution + `ArticleContent.tsx` heading parser, TOC anchors & `BlogPosting` JSON-LD |
