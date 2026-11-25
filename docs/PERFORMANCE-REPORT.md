# Bundle & Rendering Performance Comparison

> **Measurement Note**: All bundle sizes below are **directly observed build outputs** from running `vite build` (pre-migration checkpoint) vs `next build` (`Next.js 15.5.29`, post-migration) in this workspace. Real-user Core Web Vitals (`LCP`, `INP`, `CLS`) and external Lighthouse scores can only be measured accurately after deploying to staging/Vercel Preview, because headless browser/CrUX telemetry was not executed in this offline local build verification pass.

## 1. Observed Bundle Comparison (`Vite 5.4.1` vs `Next.js 15.5.29`)

### Legacy Vite Build Output (`dist/assets/`)

- Total `dist/` output (including prerendered route HTML clones): `8.9 MB`
- Total `dist/assets/` client bundle directory: `1.3 MB`
- Monolithic entry bundle (`dist/assets/index-*.js`): `588 KB` uncompressed (parsed on every initial load alongside vendor bundles)
- Vendor chunks loaded upfront: `vendor-react` (`173 KB`), `vendor-motion` (`111 KB`), `vendor-icons` (`59 KB`), `select` (`58 KB`), global stylesheet (`index-*.css`, `117 KB`).

### Migrated Next.js 15 App Router Build Output (`next build`)

- Compiled build cleanly in `3.1s` across `82/82` pre-generated pages.
- Shared base runtime (`First Load JS shared by all`): `103 KB` (`chunks/1255-*.js` `46.3 KB` + `chunks/4bd1b696-*.js` `54.2 KB` + `1.94 KB` other).
- Observed First Load JS per route type:
  - Content, Legal & Guide pages (`/privacy`, `/terms`, `/services`, `/services/[slug]`, `/solutions/*`, `/study-abroad/admission-assistance`, `/study-abroad/visa-guidance`, `/study-abroad/university-selection`, `/study-abroad/student-resources`): `201 B`–`950 B` route code, **`167 KB` First Load JS** (down from `~900+ KB` combined entry + vendor JS parsed in Vite).
  - `/study-abroad/germany`: `212 B` route code, **`171 KB` First Load JS**.
  - `/` (Home with full interactive 3D hero stage + Motion primitives + vertical sections): `8.56 KB` route code, **`182 KB` First Load JS**.
  - `/study-abroad` (interactive cards + globe): `6.09 KB` route code, **`177 KB` First Load JS**.
  - `/contact`: `19.2 KB` route code (including Zod schema validation + interactive UI inputs), **`194 KB` First Load JS**.
  - `/blog` (`208 B` route code, `212 KB` First Load JS) & `/blog/[slug]` (`4.08 KB` route code, `224 KB` First Load JS).
  - `/development-kit` (36 browser developer utilities + system simulators): `33.6 KB` route code, **`228 KB` First Load JS** (isolated to `/development-kit`, never penalized on marketing pages).

## 2. Structural Architecture Gains

1. **Zero Page-Level Hydration on Editorial & SEO Routes**: Privacy, Terms, Service Detail pages, Study Abroad checklist pages, Solutions pages, Agents overview, and Products render static headings, FAQs, breadcrumbs, JSON-LD graphs, and body copy cleanly as React Server Components.
2. **Scoped Client Islands**: Interactive Framer Motion, Lucide, Radix dialogs, and the 3D Hero canvas carousel remain isolated inside `"use client"` leaf modules.
3. **Self-Hosted Google Fonts via `next/font/google`**: `Plus_Jakarta_Sans` and `Newsreader` compile into self-hosted font CSS with `display: "swap"` and zero render-blocking external Google Fonts stylesheet waterfall.
4. **Native `next/image` Delivery**: Responsive `sizes` attributes and modern image format negotiation enabled for homepage previews, client showcases, school training photos, and blog article covers (`images.unsplash.com` configured cleanly).

## 3. Recommended Post-Deploy Field/Lab Verification

Once deployed to a live HTTPS Vercel Preview URL, run:

- Lighthouse CI (Mobile & Desktop) on `/`, `/services/website-development`, `/study-abroad/germany`, and `/blog/study-in-germany-complete-guide-indian-students`.
- Google PageSpeed Insights / Core Web Vitals field monitoring in Search Console after indexing stabilizes.
