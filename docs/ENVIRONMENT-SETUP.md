# Environment Variables & Configuration Guide

All documented configuration variables live in `.env.example` (no secrets committed to git).

## 1. Public Browser Variables (`NEXT_PUBLIC_*`)

| Variable | Required | Default | Purpose |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes (Prod) | `https://www.dievekter.tech` | Sets `metadataBase`, canonical URLs, JSON-LD `@id` URLs, `robots.txt` sitemap URL, and `sitemap.xml` hosts |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Recommended | `G-VTEJ29Y132` | Enables GA4 tag loading & route-change tracking inside `RootLayout` and `AnalyticsRouteTracker` |
| `NEXT_PUBLIC_JOTFORM_AGENT_ID` | Optional | Project default ID | Loads the interactive Jotform AI agent script via `next/script` (`lazyOnload`) |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional | Unset | Emits `<meta name="google-site-verification">` if configuring DNS-free verification |
| `NEXT_PUBLIC_BING_VERIFICATION` | Optional | Unset | Emits `<meta name="msvalidate.01">` for Bing Webmaster Tools |

## 2. Server-Only Variables (Private — Never Prefix with `NEXT_PUBLIC_`)

| Variable | Required | Purpose |
| --- | --- | --- |
| `CONTACT_WEBHOOK_URL` | Optional | Private server endpoint receiving validated JSON enquiries from `POST /api/contact` and `POST /api/enquiry` |
| `ENQUIRY_FORWARD_EMAIL` | Optional | Target inbox metadata sent alongside webhook forwarding payload |

## 3. Vercel Platform Environment Variable Note

- `VERCEL_ENV` is automatically injected by Vercel (`production`, `preview`, or `development`). When `VERCEL_ENV !== "production"`, Next.js automatically enforces `noindex, nofollow` in both `buildPageMetadata()`, `robots.ts`, and `next.config.ts` `X-Robots-Tag` headers so preview deployments never compete with `www.dievekter.tech`.

## 4. Local Setup

```bash
cp .env.example .env.local
npm install
npm run dev
```
