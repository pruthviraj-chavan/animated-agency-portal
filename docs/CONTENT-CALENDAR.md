# Editorial Content Calendar (Dual-Vertical Roadmap)

**Cadence Target:** 2 high-accuracy articles per month (1 Technology & Engineering + 1 Study Abroad & Germany), prioritizing evergreen intent over thin daily fluff.

---

## Published Pillar Foundation (Live in Repository)

1. `Study in Germany for Indian Students: Universities, APS Certificate, Applications & Visa Checklist` (`/blog/study-in-germany-complete-guide-indian-students`)
2. `How to Shortlist Overseas Universities: Profile Matching, Intakes & Document Readiness` (`/blog/how-to-shortlist-overseas-universities-document-readiness`)
3. `Custom React Websites vs Templates: Performance, Technical SEO & Lead Conversion for Indian Businesses` (`/blog/custom-react-websites-vs-templates-technical-seo-indian-businesses`)
4. Plus existing technology & engineering articles (`id: 1–22`) organized cleanly across category clusters.

---

## Upcoming 90-Day Editorial Queue (Unpublished Topics to Draft Next)

| Target Month | Vertical | Proposed Article Title | Target Cluster URL | Internal Service Link Target | Primary Official Citations Needed |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Month 1 (Week 2) | **Study Abroad** | Winter vs Summer Intake in Germany: Application Windows for Indian Engineering & STEM Applicants | `/blog/study-in-germany` | `/study-abroad/germany`, `/study-abroad/admission-assistance` | DAAD, uni-assist |
| Month 1 (Week 4) | **Technology** | How Kolhapur & Pune SMEs Automate WhatsApp Lead Follow-Ups With CRM Workflows | `/blog/business-automation` | `/services/crm-automation`, `/services/ai-chatbots` | Internal production CRM architecture |
| Month 2 (Week 2) | **Study Abroad** | APS India Verification Preparation Checklist: Avoiding Common Transcript Delays | `/blog/study-in-germany` | `/study-abroad/germany`, `/study-abroad/student-resources` | APS India, German Missions India |
| Month 2 (Week 4) | **Technology** | Deploying Hindi & Marathi Voice AI Agents Safely: RAG Grounding & Human Escalation | `/blog/artificial-intelligence` | `/services/ai-agents`, `/solutions/ai` | Engineering safety architecture notes |
| Month 3 (Week 2) | **Study Abroad** | Blocked Account (Sperrkonto) & Student Health Insurance Basics for German Visas | `/blog/study-abroad` | `/study-abroad/visa-guidance`, `/study-abroad/germany` | German Missions India, Auswärtiges Amt |
| Month 3 (Week 4) | **Technology** | Integrating Razorpay, Retail Billing & Stock Inventory Without Spreadsheet Errors | `/blog/website-development` | `/services/ecommerce-development`, `/services/custom-software-development` | Live `products` / retail case lessons |

---

## Editorial Quality Checklist Before Publishing Any New Guide

- [ ] Assign an explicit `category` from `BLOG_CATEGORIES` in `src/lib/blog-data.tsx`
- [ ] Populate accurate `date`, `updatedDate` and realistic `readTime`
- [ ] Include semantic `##` / `###` headings so Table of Contents generates automatically
- [ ] Link organically to at least 2 commercial service or study-abroad hub pages (`relatedServices`)
- [ ] Attach verified primary source URLs (`officialReferences`) on any Germany, APS, or visa topic
- [ ] Verify zero fabricated fee schedules, unverified acceptance percentages, or embassy promises
- [ ] Re-run `npm run build && npm run seo:check` to prerender the new `/blog/<slug>.html` page and add it automatically to `sitemap.xml`
