# Production Launch Checklist

## Pre-Merge & Staging (Vercel Preview)

- [x] `npm run lint` passes with `0` errors
- [x] `npm run typecheck` (`tsc --noEmit`) passes with `0` errors
- [x] `npm run build` (`next build`) generates all 82 static/SSG pages cleanly
- [x] `npm run seo:check` verifies 33 SSR HTML routes, 404 responses, 9 permanent redirects, `robots.txt`, `sitemap.xml`, and `/api/{contact,enquiry}`
- [x] Non-production environments configured to emit `noindex, nofollow` (`VERCEL_ENV !== "production"`)
- [ ] Push `feature/nextjs-migration` and inspect **Vercel Preview** deployment manually on desktop & mobile (Hero 3D carousel spin, About ribbons/cards, Study Abroad globe, Services icons, Blog posts, Contact WhatsApp handoff)
- [ ] Run Lighthouse Desktop + Mobile audit against live Preview URL

## Vercel Project Settings Switch (At Merge Time)

- [ ] Set **Framework Preset** to `Next.js` (clear any stale Vite build command or `dist` output directory override)
- [ ] Confirm Production Environment Variables:
  - `NEXT_PUBLIC_SITE_URL=https://www.dievekter.tech`
  - `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-VTEJ29Y132`
  - Optional server-only `CONTACT_WEBHOOK_URL` / `ENQUIRY_FORWARD_EMAIL`
- [ ] Confirm primary domain `www.dievekter.tech` and apex redirect `dievekter.tech` -> `https://www.dievekter.tech/$1`

## Post-Production Verification

- [ ] Verify live HTTP headers: `curl -I https://www.dievekter.tech/` returns `200 OK` without `noindex`
- [ ] Verify `https://www.dievekter.tech/robots.txt` and `https://www.dievekter.tech/sitemap.xml` load with HTTP 200
- [ ] Re-submit `https://www.dievekter.tech/sitemap.xml` inside Google Search Console & Bing Webmaster Tools
- [ ] Test a real form submission on `/contact` (confirm Zod validation, `/api/contact` response, GA4 `generate_lead` event, and WhatsApp message handoff)
- [ ] Monitor Vercel runtime logs & Search Console Coverage report over the first 7 days
