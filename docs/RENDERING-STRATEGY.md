# Rendering Strategy (`SSG`, `RSC`, `SSR`, `Dynamic API`)

## 1. Strategy by Route Group

| Route / Pattern | Next.js Mode | `dynamicParams` | Client JS Role | Rationale |
| --- | --- | --- | --- | --- |
| `/` | Static (`○`) Server Component | N/A | `HeroCarouselClient`, `Industries`, scroll animations, `WaveFooterBand`, `SiteNav` | Fast global CDN HTML delivery while keeping full interactive hero stage and scroll reveals |
| `/about`, `/privacy`, `/terms`, `/products`, `/agents`, `/solutions/*`, `/study-abroad/germany` | Static (`○`) Server Component | N/A | Nav/footer/motion primitives + interactive globe on `/study-abroad/germany` | Editorial & legal pages ship zero page-level JS bloat (`201 B`–`2.32 kB` route code) |
| `/services/[slug]` (13 services) | SSG (`●`) via `generateStaticParams` | `false` | Interactive FAQ accordion + nav/footer (`895 B` route code, `167 kB` First Load JS) | Unknown slugs immediately return HTTP 404 without running dynamic render |
| `/blog` | Static (`○`) | N/A | `BlogArchiveClient` (no Suspense fallback hiding SSR cards) | Full initial post index in static HTML + client search/tag filtering |
| `/blog/[slug]` (7 categories + 25 posts = 32 paths) | SSG (`●`) via `generateStaticParams` | `false` | `ShareArticleButton` / `BlogArchiveClient` | Pre-built HTML with unique per-article OpenGraph & `BlogPosting` JSON-LD; unknown slugs return real HTTP 404 |
| `/contact`, `/jobs`, `/internship`, `/ai-agents-library`, `/development-kit`, `/fun` | Static (`○`) shell + Client Island | N/A | Interactive form / filters / 36 dev tools / memory game | Page chrome & SEO headings/JSON-LD remain server-rendered |
| `/api/contact`, `/api/enquiry` | Dynamic (`ƒ`) Route Handler | N/A | None (`POST` endpoint) | Validates JSON via Zod, checks honeypot & rate limit, optionally forwards to webhook |
| `/robots.txt`, `/sitemap.xml` | Static (`○`) Metadata Route | N/A | None | App Router natively generates canonical TXT & XML outputs |

## 2. Why Global `loading.tsx` Was Omitted

Testing `verify-nextjs-production.mjs` revealed that placing a root `loading.tsx` above public marketing routes caused Next.js 15 to stream a `200 OK` loading shell ahead of `notFound()`, preventing clean HTTP `404` status responses on non-existent paths. Removing `src/app/loading.tsx` and setting `export const dynamicParams = false` on `[slug]` routes guarantees synchronous HTTP `404` headers on unknown URLs and full SEO HTML in the first byte stream.
