import { ArrowUpRight, BadgeCheck, Building2, ShieldCheck } from "lucide-react";
import { MotionFadeIn } from "@/components/animation/MotionPrimitives";

const trustItems = [
  "Government Registered Enterprise",
  "Micro Enterprise",
  "D-U-N-S Identified",
  "Technology Services",
];

export function CredentialsSection() {
  return (
    <section
      id="credentials"
      className="relative overflow-hidden border-t border-stone-100 bg-white py-20 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-[#FF5422]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl"
      />

      <div className="container relative z-10 mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#FF5422] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
            <Building2 className="h-3.5 w-3.5" aria-hidden="true" /> Business Credentials
          </p>
          <h2
            className="mt-5 font-bold tracking-tight text-[#141210]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.06 }}
          >
            Registered. Recognized.{" "}
            <span className="text-[#FF5422]">Ready to Build.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-500">
            DIEVEKTER is a registered Indian Micro Enterprise with verified government and commercial
            business identifiers.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <MotionFadeIn>
            <article className="flex h-full flex-col justify-between rounded-2xl border border-[#FBE0D4] bg-[#FFF6F2] p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-[#FF5422]/25 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF5422]">
                    01 · Udyam Registration
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF5422] text-white">
                    <BadgeCheck className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>

                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-400">
                  Udyam Registration Number
                </p>
                <p className="mt-1.5 text-2xl sm:text-3xl font-bold tracking-tight text-[#141210]">
                  UDYAM-MH-15-0320983
                </p>

                <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-[#F5D6C8] pt-5">
                  <div>
                    <dt className="text-xs text-stone-400">Enterprise</dt>
                    <dd className="mt-0.5 text-sm font-semibold text-[#141210]">DIEVEKTER</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-stone-400">Enterprise Type</dt>
                    <dd className="mt-0.5 text-sm font-semibold text-[#141210]">Micro</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-stone-400">Classification Year</dt>
                    <dd className="mt-0.5 text-sm font-semibold text-[#141210]">2026–27</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-stone-400">Registration Date</dt>
                    <dd className="mt-0.5 text-sm font-semibold text-[#141210]">05/10/2026</dd>
                  </div>
                </dl>
              </div>

              <a
                href="https://udyamregistration.gov.in/Udyam_Verify.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[#FF5422] px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-[#e8460e]"
              >
                View Udyam Certificate <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </article>
          </MotionFadeIn>

          <MotionFadeIn delay={0.08}>
            <article className="flex h-full flex-col justify-between rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-stone-700">
                    02 · D-U-N-S Identifier
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#141210] text-white">
                    <BadgeCheck className="h-5 w-5 text-[#FF5422]" aria-hidden="true" />
                  </span>
                </div>

                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-400">
                  D-U-N-S Number
                </p>
                <p className="mt-1.5 text-2xl sm:text-3xl font-bold tracking-tight text-[#141210]">
                  312163123
                </p>

                <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-stone-100 pt-5">
                  <div>
                    <dt className="text-xs text-stone-400">Company</dt>
                    <dd className="mt-0.5 text-sm font-semibold text-[#141210]">DIEVEKTER</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-stone-400">Registry</dt>
                    <dd className="mt-0.5 text-sm font-semibold text-[#141210]">Dun &amp; Bradstreet</dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="text-xs text-stone-400">Identifier</dt>
                    <dd className="mt-0.5 text-sm font-semibold text-[#141210]">
                      Dun &amp; Bradstreet global commercial identifier
                    </dd>
                  </div>
                </dl>
              </div>

              <a
                href="https://www.dnb.com/duns-number/lookup.html"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-xs font-semibold text-[#141210] transition-colors hover:border-[#FF5422] hover:text-[#FF5422]"
              >
                View D-U-N-S Details <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </article>
          </MotionFadeIn>
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-stone-100 pt-6">
          {trustItems.map((t) => (
            <li key={t} className="inline-flex items-center gap-2 text-xs font-medium text-stone-500">
              <ShieldCheck className="h-4 w-4 text-[#FF5422]" aria-hidden="true" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
