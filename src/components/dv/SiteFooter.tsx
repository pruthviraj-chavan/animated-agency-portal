import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FOOTER_COLUMNS, SOCIAL_LINKS } from "@/config/navigation";
import { SITE_CONFIG } from "@/config/site";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import {
  FooterCopyrightMark,
  WaveFooterBackgroundGlow,
  WaveFooterRibbon,
} from "@/components/dv/WaveFooterBand";

export function SiteFooter() {
  const year = 2026;

  return (
    <footer className="relative overflow-hidden bg-white text-[#141210]">
      {/* 4-column social strip */}
      <div className="border-t border-stone-200 bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-stone-200">
          {SOCIAL_LINKS.map((s) => (
            <TrackedLink
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              track={
                s.label === "WhatsApp"
                  ? { kind: "contact", channel: "whatsapp", sourcePage: "footer" }
                  : undefined
              }
              className="group relative flex items-center justify-center gap-1.5 py-5 sm:py-6 text-sm font-medium text-[#141210] transition-colors hover:bg-[#FFF4F0]"
            >
              <span>{s.label}</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-[#FF5422] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </TrackedLink>
          ))}
        </div>
      </div>

      {/* Dark charcoal editorial band */}
      <div className="relative overflow-hidden bg-[#161514] text-white pt-12 sm:pt-14 pb-10">
        <WaveFooterBackgroundGlow />
        <WaveFooterRibbon />

        <div className="container relative z-10 mx-auto px-5 sm:px-6 lg:px-8">
          <FooterCopyrightMark year={year} />

          {/* Direct contact & regional strip */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-6 gap-y-2 text-xs text-stone-400">
            <TrackedLink
              href={`mailto:${SITE_CONFIG.email}`}
              track={{ kind: "contact", channel: "email", sourcePage: "footer" }}
              className="hover:text-white transition-colors"
            >
              {SITE_CONFIG.email}
            </TrackedLink>
            <span aria-hidden="true">·</span>
            <TrackedLink
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noreferrer noopener"
              track={{ kind: "contact", channel: "whatsapp", sourcePage: "footer" }}
              className="hover:text-[#FF5422] transition-colors"
            >
              WhatsApp: {SITE_CONFIG.telephone}
            </TrackedLink>
            <span aria-hidden="true">·</span>
            <TrackedLink
              href={`tel:${SITE_CONFIG.telephoneE164}`}
              track={{ kind: "contact", channel: "phone", sourcePage: "footer" }}
              className="hover:text-white transition-colors"
            >
              Call: {SITE_CONFIG.telephone}
            </TrackedLink>
            <span aria-hidden="true" className="hidden sm:inline">
              ·
            </span>
            <span>
              {SITE_CONFIG.city}, {SITE_CONFIG.district}, {SITE_CONFIG.region}, India
            </span>
            <span aria-hidden="true" className="hidden sm:inline">
              ·
            </span>
            <span>{SITE_CONFIG.udyam}</span>
          </div>

          {/* Structured 4-column semantic navigation directory */}
          <nav
            aria-label="Footer sitemap"
            className="mt-10 border-t border-white/10 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-xs"
          >
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.heading}>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#FF5422] mb-3">
                  {col.heading}
                </p>
                <ul className="space-y-2">
                  {col.links.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-stone-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* Bottom bar */}
          <div className="mt-8 border-t border-white/10 pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-xs text-stone-400">
            <p className="text-center md:text-left">
              © {year} {SITE_CONFIG.legalName} ({SITE_CONFIG.brandName}). All rights reserved.
            </p>
            <p className="text-stone-400 text-center">
              Serving Kolhapur · Pune · Maharashtra · India &amp; Global Clients
            </p>
            <p className="text-stone-400 text-center md:text-right">
              Technology Solutions &amp; Study Abroad Consultancy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
