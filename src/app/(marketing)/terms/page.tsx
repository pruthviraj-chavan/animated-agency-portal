import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/seo/schema";

const TITLE = "Terms of Service & Consultancy Disclosures";
const DESC =
  "Terms governing website usage, software development engagements and Study Abroad Consultancy scope & official embassy/university disclaimers for DIEVEKTER.";

export const metadata: Metadata = buildPageMetadata({
  path: "/terms",
  title: TITLE,
  description: DESC,
});

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#141210]">
      <JsonLd
        nodes={[
          buildWebPageSchema({ title: TITLE, description: DESC, path: "/terms" }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Terms & Disclaimers", path: "/terms" },
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
                  Terms &amp; Disclaimers
                </li>
              </ol>
            </nav>

            <span className="inline-block rounded-full bg-[#FF5422] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white mb-4">
              Legal &amp; Governance
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#141210] mb-4">
              Terms of Service &amp; Disclosures
            </h1>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Terms governing the use of www.dievekter.tech, software &amp; AI consulting
              engagements, and Study Abroad Consultancy guidance offered by {SITE_CONFIG.legalName} (&ldquo;dieVekter&rdquo;).
            </p>
            <p className="mt-3 text-xs text-stone-400">Last updated: October 2026</p>
          </div>
        </section>

        <section className="border-t border-stone-100 bg-white py-12">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-4xl space-y-8 text-sm leading-relaxed text-stone-700">
            <div>
              <h2 className="text-xl font-bold text-[#141210] mb-2">
                1. Business Identity &amp; Non-Government Status
              </h2>
              <p>
                {SITE_CONFIG.legalName} (&ldquo;dieVekter&rdquo;) is a private business enterprise registered under India&apos;s
                Udyam framework (Udyam Registration Number: {SITE_CONFIG.udyam}) in {SITE_CONFIG.city},
                {SITE_CONFIG.district}, {SITE_CONFIG.region}, India, and listed with Dun &amp; Bradstreet (D-U-N-S: {SITE_CONFIG.duns}).
                We are not affiliated with, endorsed by, or part of any government body, embassy or
                statutory agency.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#141210] mb-2">
                2. Technology &amp; Software Services Scope
              </h2>
              <p>
                Custom software, website development, mobile app development, AI agents and business
                automation deliverables are governed by written project proposals or statements of work
                specifying milestones, intellectual property ownership, timelines and commercial terms
                confirmed directly between dieVekter and the client prior to kickoff.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#141210] mb-2">
                3. Study Abroad Consultancy Disclosures
              </h2>
              <p>
                All overseas education, university shortlisting, Study in Germany, admission
                assistance and student visa checklist materials published on this site are general
                informational guidance only. Admissions decisions remain exclusively with the
                respective universities, and student visa approvals rest solely with the concerned
                embassies or consulates. dieVekter does not issue visas, does not alter official
                eligibility criteria, and never guarantees admission or visa outcomes. Consultancy fees
                and deliverables are always confirmed in writing prior to paid engagement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#141210] mb-2">
                4. External Official Portals &amp; Accuracy
              </h2>
              <p>
                For German higher education and visa rules, applicants should always verify live rules
                on official websites such as DAAD, APS India, uni-assist and the German Missions in
                India. Statutory rules, semester timelines and financial requirements change without
                prior notice.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#141210] mb-2">
                5. Contact for Legal &amp; Privacy Questions
              </h2>
              <p>
                Email{" "}
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="font-semibold text-[#FF5422] underline underline-offset-4"
                >
                  {SITE_CONFIG.email}
                </a>{" "}
                or call {SITE_CONFIG.telephone}. See also our{" "}
                <Link
                  href="/privacy"
                  className="font-semibold text-[#141210] underline underline-offset-4 hover:text-[#FF5422]"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
