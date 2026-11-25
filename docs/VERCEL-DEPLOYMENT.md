# Vercel Deployment Guide (Next.js App Router)

## 1. Framework & Build Configuration on Vercel

When importing or updating the project in the Vercel Dashboard (`Project Settings -> Build & Development Settings`):

- **Framework Preset**: Select **Next.js** (switch away from the previous Vite preset).
- **Build Command**: `npm run build` (`next build`, override disabled or default Next.js).
- **Output Directory**: Leave default (`.next`, remove any legacy `dist` override).
- **Install Command**: `npm install` (or `npm ci` once lockfile is updated).
- **Node.js Version**: `20.x` or `22.x` LTS.

## 2. Domain & Redirect Configuration (`vercel.json` + `next.config.ts`)

- Set **`www.dievekter.tech`** as the primary custom domain in Vercel Project Settings -> Domains.
- Add **`dievekter.tech`** apex domain in Vercel; `vercel.json` enforces a permanent redirect from `dievekter.tech/*` to `https://www.dievekter.tech/$1`.
- Route-level canonical redirects (`/services/custom-website-development`, `/services/ecommerce-solutions`, `/services/api-development`, `/services/web-hosting`, `/about-us`, `/contact-us`, `/privacy-policy`, `/terms-and-conditions`, `/blog/category/:category`) live inside `next.config.ts` (`async redirects()`), preventing duplicated rules between Vercel edge config and Next.js routing.
- Legacy Vite overrides (`cleanUrls`, `trailingSlash`, custom `.js` Content-Type overrides, and blanket `Access-Control-Allow-Origin: *`) were removed from `vercel.json`.

## 3. Environment Variables in Vercel

Configure the following per environment (**Production** vs **Preview**):

- `NEXT_PUBLIC_SITE_URL`: `https://www.dievekter.tech` (Production; keeps canonicals clean across previews too).
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Production GA4 measurement ID (e.g. `G-VTEJ29Y132`).
- `CONTACT_WEBHOOK_URL` & `ENQUIRY_FORWARD_EMAIL`: Server-only CRM/webhook forwarding targets (optional; WhatsApp fallback still succeeds if omitted).

## 4. Recommended Rollout Workflow

1. Push `feature/nextjs-migration` to origin to generate a **Vercel Preview URL**.
2. Verify preview deployment passes build logs, visual layout checks on desktop/mobile, and returns `X-Robots-Tag: noindex, nofollow`.
3. Only merge `feature/nextjs-migration` into `main` after human approval of preview verification.
