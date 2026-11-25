# Google Search Console, Bing Webmaster & GA4 Setup Guide

Follow these owner verification steps after deploying the updated build to Vercel (`https://www.dievekter.tech`).

---

## 1. Environment Variables (Optional Override Defaults)

The codebase reads these optional environment variables at build time (clean defaults remain active even if unset):

```bash
VITE_SITE_URL=https://www.dievekter.tech
VITE_GA_MEASUREMENT_ID=G-XLDPHSXXCS
```

Set them cleanly inside **Vercel Dashboard -> Project Settings -> Environment Variables** if switching domains or GA4 properties across staging vs production.

---

## 2. Google Search Console Verification & Sitemap Submission

1. Sign in to [Google Search Console](https://search.google.com/search-console).
2. Add Property -> Choose **Domain Property** (`dievekter.tech`) OR **URL Prefix** (`https://www.dievekter.tech/`).  
   - **Recommended:** Domain verification via TXT DNS record at your domain registrar so both `dievekter.tech` (301 redirect) and `www.dievekter.tech` (canonical) are monitored together.
3. Open **Indexing -> Sitemaps** -> Submit:  
   `https://www.dievekter.tech/sitemap.xml`
4. Use **URL Inspection -> Test Live URL -> Request Indexing** for high-priority pages:
   - `https://www.dievekter.tech/`
   - `https://www.dievekter.tech/services`
   - `https://www.dievekter.tech/services/website-development`
   - `https://www.dievekter.tech/services/ai-agents`
   - `https://www.dievekter.tech/study-abroad`
   - `https://www.dievekter.tech/study-abroad/germany`
   - `https://www.dievekter.tech/blog/study-in-germany-complete-guide-indian-students`
   - `https://www.dievekter.tech/contact`

---

## 3. Bing Webmaster Tools & IndexNow Ready

1. Open [Bing Webmaster Tools](https://www.bing.com/webmasters/).
2. You can import verified properties directly from Google Search Console or verify via DNS TXT record.
3. Submit `https://www.dievekter.tech/sitemap.xml`.

---

## 4. GA4 Custom Events & Key Conversions (`src/lib/analytics.ts`)

Privacy-safe custom events (stripping any personal names, phone numbers or emails before calling `gtag`) are now wired across the site using measurement ID `G-XLDPHSXXCS` (configurable via `VITE_GA_MEASUREMENT_ID`):

| Event Name | Parameters Sent | Triggered Where | Mark as Key Event? |
| :--- | :--- | :--- | :--- |
| `generate_lead` | `vertical` (`technology` / `study_abroad` / `general`), `service_interest`, `channel`, `source_page` | Submitting Contact form | **Yes** |
| `enquiry_vertical_select` | `vertical`, `source_page` | Switching vertical pill on `/contact` | No |
| `whatsapp_click` | `source_page`, `vertical` | Clicking WhatsApp links (Contact / CTA / Footer) | **Yes** |
| `phone_click` | `source_page`, `vertical` | Clicking `+91 94048 95667` tel link | **Yes** |
| `email_click` | `source_page`, `vertical` | Clicking `team.dievekter@gmail.com` mailto | Recommended |
| `study_abroad_cta_click` | `destination`, `source_page` | Clicking Study Abroad CTAs | No |
| `service_cta_click` | `service_slug`, `source_page` | Clicking Technology service CTAs | No |
| `blog_category_filter` | `category` | Clicking blog category hubs | No |
| `page_view` | `page_path`, `page_title` | Client-side route transitions (`CanonicalUrl.tsx`) | Built-in |

**Verify Events Live:** Open **GA4 -> Admin -> Data display -> DebugView** (or Realtime Events) while testing `/contact`, Study Abroad buttons and WhatsApp clicks. Under **Admin -> Events**, toggle `generate_lead`, `whatsapp_click`, and `phone_click` as **Key events** so conversions segment cleanly by `vertical`.
