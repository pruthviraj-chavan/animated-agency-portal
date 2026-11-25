# Next.js Migration Audit (`Vite SPA` -> `Next.js 15 App Router`)

## 1. Migration Scope & Repository Baseline

- **Source baseline**: React `18.3.1` + Vite `5.4.1` + `react-router-dom` `6.26.2` + `react-helmet` + custom Puppeteer-free `scripts/prerender.mjs` SSR script (checkpoint commit `ac707f0` on branch `feature/nextjs-migration`; `main` untouched at `5656d14`).
- **Target runtime**: **Next.js `15.5.29` (App Router)** preserving React `18.3.1`, `framer-motion` `10.18.0`, Tailwind CSS `3.4.11`, shadcn/Radix UI primitives, and 100% of DieVekter Tech visual design, 3D Hero carousel physics/artwork, and dual-vertical content (Technology Solutions + Study Abroad Consultancy).

## 2. Legacy Vite Pain Points Identified

1. **Client-heavy initial bundle**: The legacy Vite client build shipped a `588K` main JS chunk (`index-*.js`) plus `173K` React vendor + `111K` Motion vendor (`1.3M` total assets), forcing browser hydration across static marketing pages (privacy, terms, services, solutions, guides).
2. **Ad-hoc static prerendering**: SEO HTML previously relied on `vite build --ssr src/entry-ssr.tsx` + `scripts/prerender.mjs` mutating static files in `dist/` and running a post-build script rather than framework-native Server Components, native Metadata API, or dynamic HTTP status codes.
3. **Head tag runtime mutation**: `<SeoHead />` relied on `react-helmet` client-side `<head>` updates instead of native `<head>` streaming / SSG HTML metadata.
4. **No server API surface**: Enquiries went solely to client-side `wa.me` links without server-side Zod validation, honeypot spam checks, IP rate limiting, or webhook forwarding readiness.
5. **Runtime HTTP status limits**: Legacy SPA hosting required rewrite fallbacks, making native HTTP `404` status on invalid dynamic slugs harder to guarantee reliably.

## 3. Obsolete Tooling Removed

Removed completely after Next.js App Router verification passed:

- Files removed: `vite.config.ts`, `index.html`, `tsconfig.app.json`, `tsconfig.node.json`, `dist/`, `dist-ssr/`, `src/main.tsx`, `src/App.tsx`, `src/AppRoutes.tsx`, `src/entry-ssr.tsx`, `src/index.css`, `src/vite-env.d.ts`, `src/pages/**`, `src/data/seoConfig.ts`, `src/components/CanonicalUrl.tsx`, `src/components/seo/SeoHead.tsx`, `src/lib/analytics.ts`, `scripts/prerender.mjs`, `scripts/validate-seo-build.mjs`, and conflicting static `public/robots.txt` & `public/sitemap.xml`.
- Packages removed (38 dependencies uninstalled via `npm uninstall`): `vite`, `@vitejs/plugin-react-swc`, `@lovable.dev/vite-plugin-dev-server-bridge`, `@lovable.dev/vite-plugin-hmr-gate`, `lovable-tagger`, `react-router-dom`, `react-helmet`, `@tanstack/react-query` (verified unused across `src/`), `three`, `@types/three` (verified unused across `src/`), and `eslint-plugin-react-refresh`.

## 4. Visual & Functional Parity Verification

- Scoped `.dv-home` typography and layout styling kept cleanly in `src/app/globals.css`.
- `HeroCarouselClient` renders 3D cylindrical artwork onto `<canvas>` safely inside `useEffect` (eliminating SSR hydration mismatches) while exposing deterministic dimensions and semantic `<nav>` links to all featured services.
- All business registration identifiers preserved cleanly in `src/config/site.ts` (`DIEVEKTER`, `UDYAM-MH-15-0320983`, `D-U-N-S: 312163123`, Radhanagari, Kolhapur, Maharashtra `416204`).
