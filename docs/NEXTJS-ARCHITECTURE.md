# Next.js 15 App Router Architecture

## 1. Directory Topology

```text
src/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx                         # Home (Server Component + islands)
│   │   ├── about/page.tsx                   # About studio & leadership
│   │   ├── agents/page.tsx                  # AI Agents showcase
│   │   ├── ai-agents-library/page.tsx       # Interactive prompt runner wrapper
│   │   ├── blog/
│   │   │   ├── page.tsx                     # Blog index (/blog)
│   │   │   └── [slug]/page.tsx              # Static params for categories + articles
│   │   ├── contact/page.tsx                 # Contact page & verified channels
│   │   ├── development-kit/page.tsx         # Interactive 36+ developer utilities
│   │   ├── fun/page.tsx                     # Memory card game (noindex)
│   │   ├── internship/page.tsx              # Student internships
│   │   ├── jobs/page.tsx                    # Careers board
│   │   ├── portfolio/page.tsx               # Selected systems + live builds
│   │   ├── privacy/page.tsx                 # Privacy Policy & verification disclosures
│   │   ├── products/page.tsx                # Software & retail billing products
│   │   ├── projects/page.tsx                # Shipped websites portfolio
│   │   ├── services/
│   │   │   ├── page.tsx                     # Technology services hub
│   │   │   ├── [slug]/page.tsx              # 13 core services (SSG, dynamicParams=false)
│   │   │   ├── agentic-ai-training/page.tsx # Agentic AI course track
│   │   │   ├── ai-training-workshops/page.tsx # School workshops track
│   │   │   └── refer/page.tsx               # Referral page (noindex)
│   │   ├── solutions/
│   │   │   ├── page.tsx                     # Solutions overview
│   │   │   ├── ai/page.tsx
│   │   │   ├── software/page.tsx
│   │   │   └── automation/page.tsx
│   │   ├── study-abroad/
│   │   │   ├── page.tsx                     # Study Abroad consultancy hub
│   │   │   ├── germany/page.tsx             # Study in Germany flagship guide
│   │   │   ├── university-selection/page.tsx
│   │   │   ├── admission-assistance/page.tsx
│   │   │   ├── visa-guidance/page.tsx
│   │   │   └── student-resources/page.tsx
│   │   └── terms/page.tsx                   # Terms & Study Abroad disclaimers
│   ├── api/
│   │   ├── contact/route.ts                 # POST /api/contact (Zod + rate limit + webhook)
│   │   └── enquiry/route.ts                 # POST /api/enquiry (Zod + rate limit + webhook)
│   ├── error.tsx                            # Client error boundary UI
│   ├── globals.css                          # Tailwind CSS + .dv-home scoped styling
│   ├── icon.png                             # App favicon asset
│   ├── layout.tsx                           # Root layout, next/font, GA4, Jotform, Toaster
│   ├── not-found.tsx                        # Native HTTP 404 page
│   ├── robots.ts                            # App-generated /robots.txt
│   └── sitemap.ts                           # App-generated /sitemap.xml
├── components/
│   ├── about/                               # Client interactive marquee & 3D team cards
│   ├── analytics/                           # AnalyticsRouteTracker + TrackedLink
│   ├── animation/                           # MotionPrimitives wrappers ("use client")
│   ├── blog/                                # ArticleContent (SSR), BlogCard, BlogArchiveClient
│   ├── careers/                             # JobsClient, InternshipClient
│   ├── devkit/                              # 36 interactive browser dev tools ("use client")
│   ├── dv/                                  # SiteNav, SiteFooter, WaveFooterBand, layouts
│   ├── forms/                               # ContactEnquiryForm ("use client")
│   ├── home2/                               # Homepage verticals + HeroCarouselClient
│   ├── layout/                              # ClientToaster
│   ├── sections/                            # Interactive wrappers (Products/Agents/DevKit/Fun)
│   ├── seo/                                 # JsonLd (SSR), FaqAccordion ("use client")
│   ├── services/                            # TrainingInteractive triggers
│   ├── studyAbroad/                         # InteractiveGlobeSection, ServicesGrid, Disclaimer
│   └── ui/                                  # shadcn/Radix UI primitives ("use client")
├── config/
│   ├── navigation.ts                        # Centralized header/footer links
│   └── site.ts                              # Brand constants, registration IDs & URLs
├── data/
│   ├── projects.ts                          # Studio client showcase data
│   ├── studyAbroadData.ts                   # Verified DAAD/APS/embassy FAQs & links
│   └── techServicesData.ts                  # Structured specs for all 13 services
└── lib/
    ├── analytics/gtag.ts                    # PII-safe GA4 event tracking
    ├── api/enquiryHandler.ts                # Shared Route Handler validation/rate-limit core
    ├── blog-data.tsx                        # Blog categories, articles & metadata helpers
    ├── seo/metadata.ts                      # buildPageMetadata() helper
    ├── seo/schema.ts                        # XSS-safe Schema.org JSON-LD graph builders
    ├── utils.ts                             # cn() class helper
    └── validation/enquiry.ts                # Zod schema for /api/contact & /api/enquiry
```

## 2. Server vs Client Boundary Principles

- Every route under `src/app/(marketing)/**/page.tsx` is a **React Server Component**.
- Static copy, headings (`<h1>`–`<h3>`), breadcrumbs, FAQ answers, legal disclosures, blog article bodies, official external citations, Schema.org `<script type="application/ld+json">` graphs, and footer markup render 100% on the server without adding JS execution blocking.
- Interactive islands (`"use client"`) are strictly scoped to stateful UI: hero 3D cylindrical card stage, scroll-driven Framer Motion transforms, interactive filter bars, accordions, developer kit simulators, and enquiry submission forms.
