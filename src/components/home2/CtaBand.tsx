import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { trackContactAction } from "@/lib/analytics";

const ORANGE_TICKER = [
  "AI agents built for real business work.",
  "Software people actually rely on.",
  "Multilingual voice & chat automation.",
  "Campaigns and platforms made to last.",
];

const GRAY_TICKER = [
  "Identity systems with a point of view.",
  "Ideas engineered for scale.",
  "From conversation to completed action.",
  "Built in India for global teams.",
];

export function CtaBand() {
  return (
    <>
      {/* Crossed Diagonal Ticker Ribbons (Screenshot 2) */}
      <div className="relative overflow-hidden py-14 sm:py-16 bg-white">
        {/* Back light gray tilted strip */}
        <div className="-mx-6 rotate-[-1.8deg] bg-[#F4F3F1] border-y border-stone-200/80 py-3.5 shadow-sm">
          <div className="dv-home-ticker-track dv-home-ticker-track--reverse">
            {[...GRAY_TICKER, ...GRAY_TICKER, ...GRAY_TICKER].map((text, idx) => (
              <span
                key={`g-${idx}`}
                className="inline-flex items-center gap-6 px-4 text-sm sm:text-lg font-semibold text-[#141210]"
              >
                {text}
                <span className="h-1.5 w-1.5 rounded-full bg-stone-400" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>

        {/* Overlapping front vibrant orange tilted strip */}
        <div className="-mx-6 -mt-4 rotate-[1.8deg] bg-[#FF5422] py-3.5 shadow-lg">
          <div className="dv-home-ticker-track">
            {[...ORANGE_TICKER, ...ORANGE_TICKER, ...ORANGE_TICKER].map((text, idx) => (
              <span
                key={`o-${idx}`}
                className="inline-flex items-center gap-6 px-4 text-sm sm:text-lg font-semibold text-white"
              >
                {text}
                <span className="h-1.5 w-1.5 rounded-full bg-white/70" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Final Light CTA */}
      <section className="dv-dot-bg py-20 sm:py-28">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2
            className="mx-auto max-w-3xl font-bold tracking-tight text-[#141210]"
            style={{ fontSize: "clamp(32px, 5vw, 58px)", lineHeight: 1.06 }}
          >
            Ready to build something{" "}
            <span className="text-[#FF5422]">remarkable?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-stone-500">
            Tell us the problem. We&apos;ll come back with an architecture, a scope and a realistic
            timeline.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row justify-center gap-3.5">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF5422] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#e8460e]"
            >
              Start a Project <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/919404895667?text=Hi%20Dievekter%20Tech!%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackContactAction("whatsapp", "cta-band")}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-7 py-3.5 text-sm font-semibold text-[#141210] transition-colors hover:border-[#FF5422] hover:text-[#FF5422]"
            >
              WhatsApp · +91 94048 95667 <ArrowUpRight className="h-4 w-4 text-[#FF5422]" />
            </a>
            <Link
              to="/agents"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-7 py-3.5 text-sm font-semibold text-[#141210] transition-colors hover:border-[#FF5422] hover:text-[#FF5422]"
            >
              See AI Agents
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
