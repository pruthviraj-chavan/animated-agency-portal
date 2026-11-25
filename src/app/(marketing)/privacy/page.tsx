import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Database,
  ExternalLink,
  Eye,
  FileText,
  Lock,
  Mail,
  Shield,
  ShieldCheck,
} from "lucide-react";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/seo/schema";

const TITLE = "Privacy Policy";
const DESC =
  "How DIEVEKTER (dieVekter) collects, uses and protects enquiry and website visitor information, plus enterprise registration verification disclosures.";

export const metadata: Metadata = buildPageMetadata({
  path: "/privacy",
  title: TITLE,
  description: DESC,
});

const tableOfContents = [
  { id: "collection", title: "1. Information We Collect" },
  { id: "usage", title: "2. How We Use Information" },
  { id: "security", title: "3. Data Storage & Security" },
  { id: "cookies", title: "4. Cookies & Analytics" },
  { id: "third-party", title: "5. Third-Party Links & Study Portals" },
  { id: "verification", title: "6. Enterprise Registrations" },
  { id: "rights", title: "7. Your Privacy Rights" },
  { id: "contact", title: "8. Privacy Contact Details" },
];

const governmentSources = [
  {
    name: "Ministry of MSME — Udyam Registration Portal",
    identifier: `Registration No: ${SITE_CONFIG.udyam}`,
    url: "https://udyamregistration.gov.in/",
  },
  {
    name: "Dun & Bradstreet D-U-N-S Lookup",
    identifier: `D-U-N-S Number: ${SITE_CONFIG.duns}`,
    url: "https://www.dnb.com/",
  },
  {
    name: "Upwork Verified Agency / Freelancer Profile",
    identifier: `Profile: ${SITE_CONFIG.upworkProfileName}`,
    url: "https://www.upwork.com/",
  },
];

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#141210]">
      <JsonLd
        nodes={[
          buildWebPageSchema({ title: TITLE, description: DESC, path: "/privacy" }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Privacy Policy", path: "/privacy" },
          ]),
        ]}
      />
      <SiteNav />

      <main className="flex-grow pt-24 sm:pt-28 pb-20">
        <section className="dv-dot-bg py-12 sm:py-16">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-4xl">
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="inline-flex items-center gap-1.5 text-xs text-stone-500">
                <li>
                  <Link href="/" className="hover:text-[#FF5422]">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="h-3.5 w-3.5 text-stone-400" />
                </li>
                <li className="font-semibold text-[#141210]" aria-current="page">
                  Privacy Policy
                </li>
              </ol>
            </nav>

            <span className="inline-block rounded-full bg-[#FF5422] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white mb-4">
              Privacy &amp; Compliance
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#141210] mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl">
              How {SITE_CONFIG.legalName} (&ldquo;dieVekter&rdquo;) handles personal enquiries,
              Study Abroad applicant details, website analytics, and verifiable business identity
              disclosures.
            </p>
            <p className="mt-3 text-xs text-stone-400">Last updated: October 2026</p>
          </div>
        </section>

        <section className="border-t border-stone-100 bg-white py-12">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-4xl space-y-10 text-sm leading-relaxed text-stone-700">
            <div className="rounded-2xl border border-[#FBE0D4] bg-[#FFF8F5] p-6">
              <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-[#FF5422] mb-3 flex items-center gap-2">
                <FileText className="h-4 w-4" /> Contents
              </h2>
              <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm font-medium text-[#141210]">
                {tableOfContents.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="hover:text-[#FF5422] hover:underline">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div id="collection" className="scroll-mt-28">
              <h2 className="text-xl font-bold text-[#141210] mb-3 flex items-center gap-2">
                <Database className="h-5 w-5 text-[#FF5422]" /> 1. Information We Collect
              </h2>
              <p className="mb-3">
                We collect only information you choose to share directly when submitting project
                briefs or Study Abroad consultancy requests:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong>Contact identifiers:</strong> Name, email address, phone / WhatsApp
                  number, and organization or academic institution name.
                </li>
                <li>
                  <strong>Project or academic context:</strong> Software requirements, timelines,
                  preferred study destination, intake timeline, or university application queries.
                </li>
                <li>
                  <strong>Aggregate telemetry:</strong> Anonymized aggregate page visit statistics
                  without personally identifiable storage or unauthorized tracking pixels.
                </li>
              </ul>
            </div>

            <div id="usage" className="scroll-mt-28">
              <h2 className="text-xl font-bold text-[#141210] mb-3 flex items-center gap-2">
                <Eye className="h-5 w-5 text-[#FF5422]" /> 2. How We Use Information
              </h2>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Respond to technology consulting, software development, and AI agent requests.</li>
                <li>
                  Provide transparent course shortlisting, admission preparation checklists, and
                  visa documentation orientation for Study Abroad students.
                </li>
                <li>Deliver agreed proposals, invoices, and operational project milestones.</li>
                <li>We never sell or rent user contact information to third-party data brokers.</li>
              </ul>
            </div>

            <div id="security" className="scroll-mt-28">
              <h2 className="text-xl font-bold text-[#141210] mb-3 flex items-center gap-2">
                <Lock className="h-5 w-5 text-[#FF5422]" /> 3. Data Storage &amp; Security
              </h2>
              <p>
                All communications over www.dievekter.tech use encrypted HTTPS transport with modern
                transport security headers. Academic transcripts and sensitive identification papers
                for Study Abroad applications are requested only after formal onboarding.
              </p>
            </div>

            <div id="cookies" className="scroll-mt-28">
              <h2 className="text-xl font-bold text-[#141210] mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5 text-[#FF5422]" /> 4. Cookies &amp; Analytics
              </h2>
              <p>
                Our website uses Google Analytics measurement (configured for anonymous event &amp;
                conversion telemetry without collecting personal form field contents inside URLs or
                analytics events) to improve navigation clarity and technical service pages.
              </p>
            </div>

            <div id="third-party" className="scroll-mt-28">
              <h2 className="text-xl font-bold text-[#141210] mb-3">
                5. Third-Party Links &amp; Official Portals
              </h2>
              <p>
                Our Study Abroad and developer pages link out to primary authoritative portals such
                as DAAD, APS India, uni-assist, and diplomatic mission websites. Their respective
                privacy policies govern interactions once you leave www.dievekter.tech.
              </p>
            </div>

            <div id="verification" className="scroll-mt-28">
              <h2 className="text-xl font-bold text-[#141210] mb-3 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-[#FF5422]" /> 6. Enterprise Registrations &amp;
                Public Verification
              </h2>
              <div className="grid sm:grid-cols-3 gap-4 mt-4">
                {governmentSources.map((src) => (
                  <a
                    key={src.name}
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-stone-200 bg-[#FFF8F5] p-4 hover:border-[#FF5422] transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <p className="text-xs font-bold text-[#141210]">{src.name}</p>
                      <p className="text-[11px] font-mono text-[#FF5422] mt-1">{src.identifier}</p>
                    </div>
                    <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-stone-600">
                      Verify portal <ExternalLink className="h-3 w-3" />
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div id="rights" className="scroll-mt-28">
              <h2 className="text-xl font-bold text-[#141210] mb-3">7. Your Privacy Rights</h2>
              <p>
                You may request correction, export, or deletion of personal enquiry messages held by
                us at any time by emailing{" "}
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#FF5422] hover:underline">
                  {SITE_CONFIG.email}
                </a>
                .
              </p>
            </div>

            <div id="contact" className="scroll-mt-28 rounded-2xl border border-stone-200 bg-[#FFF8F5] p-6">
              <h2 className="text-xl font-bold text-[#141210] mb-2 flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#FF5422]" /> 8. Privacy Contact Details
              </h2>
              <p className="font-semibold text-[#141210]">{SITE_CONFIG.legalName} (dieVekter)</p>
              <p className="text-stone-600 mt-1">{SITE_CONFIG.addressLine}</p>
              <p className="text-stone-600 mt-1">
                Email:{" "}
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#FF5422] hover:underline">
                  {SITE_CONFIG.email}
                </a>{" "}
                · Phone / WhatsApp: {SITE_CONFIG.telephone}
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
