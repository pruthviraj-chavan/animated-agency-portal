# DieVekter Tech — SEO Launch & QA Checklist

## Pre-Launch Code & Build Verification (Completed in Repository)

- [x] Visible primary `<h1>` added on `/` (`Technology Solutions. Global Education Opportunities.`) while preserving the 3D Hero carousel
- [x] Dedicated Study Abroad Consultancy vertical added to homepage (`StudyAbroadShowcase.tsx`) and `SiteNav` + `SiteFooter`
- [x] Full Study Abroad Hub built (`/study-abroad`, `/study-abroad/germany`, `/study-abroad/university-selection`, `/study-abroad/admission-assistance`, `/study-abroad/visa-guidance`, `/study-abroad/student-resources`) citing official DAAD, APS India, uni-assist and German Missions in India sources
- [x] Expanded all Technology Service pages with distinct overviews, problems solved, tech stack, 4-stage workflow, visible FAQs and related internal links
- [x] Centralized `SeoHead.tsx` + `seoConfig.ts` removing deprecated `meta name="keywords"` and emitting unique titles, descriptions, canonical URLs, OG/Twitter tags and `@graph` Schema.org JSON-LD (`Organization`, `LocalBusiness`, `WebSite`, `Service`, `BreadcrumbList`, `BlogPosting`, `FAQPage`)
- [x] Static SSR prerendering configured in `npm run build` (`vite build` + SSR build + `scripts/prerender.mjs`)
- [x] Automated `sitemap.xml`, `robots.txt`, and `llms.txt` generated directly from real routes and blog articles
- [x] Permanent 301 redirects for legacy service slugs (`/services/custom-website-development` -> `/services/website-development`, etc.) configured in `vercel.json`, with `/404.html` emitting `noindex, nofollow` and omitting canonical tags
- [x] Vertical-aware enquiry form on `/contact` wired with PII-free GA4 custom conversion tracking (`src/lib/analytics.ts`)
- [x] Automated build & HTML validator (`npm run seo:check`) verifying zero broken internal links, duplicate metadata, or invalid JSON-LD

---

## Owner Post-Deployment Action Items (External & Pending Confirmation)

- [ ] **Deploy to Production:** Push updated code to Vercel and verify `https://www.dievekter.tech` serves `200 OK` HTML with populated `<div id="root">` (e.g., via View Page Source on `/`, `/services/website-development`, and `/study-abroad/germany`)
- [ ] **Verify 301 Redirects Live:** Confirm `https://dievekter.tech/` -> `https://www.dievekter.tech/` and `/services/custom-website-development` -> `/services/website-development` return permanent HTTP redirects cleanly
- [ ] **Google Search Console:** Complete DNS TXT verification and submit `https://www.dievekter.tech/sitemap.xml`
- [ ] **Rich Results & Schema Check:** Run Google Rich Results Test on `/`, `/services/ai-agents`, `/study-abroad/germany`, `/blog/study-in-germany-complete-guide-indian-students`, and `/contact`
- [ ] **Browser Lighthouse Audit:** Run Chrome DevTools Lighthouse (Mobile & Desktop) on production URL for Core Web Vitals verification (Chrome remote debugging was unavailable in the sandbox during implementation)
- [ ] **Confirm Business Confirmation Items:** Confirm exact consultancy fee ranges/structure before publishing pricing tables, and confirm exact public office street address/hours before adding `streetAddress` or launching Google Business Profile
- [ ] **GA4 Key Events:** Toggle `generate_lead`, `whatsapp_click`, and `phone_click` as Key Events in Google Analytics 4
