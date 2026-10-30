import type { CSSProperties } from "react";
import { Building2, GraduationCap, HeartPulse, ShoppingBag, Truck, Landmark } from "lucide-react";
import { Reveal, Section, SectionHeading } from "@/components/dv/primitives";

const industries = [
  { icon: ShoppingBag, t: "Retail & D2C", ca: "38 92% 58%", ca2: "26 90% 60%", d: "Order support, catalogue assistants, conversion automation." },
  { icon: HeartPulse, t: "Healthcare", ca: "330 85% 62%", ca2: "300 80% 64%", d: "Appointment handling, patient follow-ups, records workflows." },
  { icon: GraduationCap, t: "Education", ca: "246 84% 68%", ca2: "280 70% 66%", d: "Admissions agents, student support, multilingual counselling." },
  { icon: Building2, t: "Real Estate", ca: "199 95% 60%", ca2: "217 90% 62%", d: "Lead qualification, site-visit scheduling, CRM sync." },
  { icon: Truck, t: "Logistics", ca: "217 90% 62%", ca2: "231 80% 64%", d: "Status queries, dispatch coordination, exception alerts." },
  { icon: Landmark, t: "Financial Services", ca: "158 84% 45%", ca2: "187 92% 55%", d: "KYC support flows, servicing assistants, ops automation." },
];

export function Industries() {
  return (
    <Section id="industries" tone="raised">
      <div
        aria-hidden
        className="dv-sec-glow top-[-5rem] right-[10%] h-72 w-[480px]"
        style={{ "--ca": "246 84% 68%" } as CSSProperties}
      />
      <div
        aria-hidden
        className="dv-sec-glow bottom-[-5rem] left-[10%] h-72 w-[480px]"
        style={{ "--ca": "158 84% 45%" } as CSSProperties}
      />

      <SectionHeading
        eyebrow="Where we operate"
        title={
          <>
            Built for businesses that run on{" "}
            <span className="dv-text-gradient">operations</span>
          </>
        }
        subtitle="We work with teams where conversations, data and processes have to hold up at volume."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((it, i) => (
          <Reveal key={it.t} delay={i * 0.05}>
            <div
              className="dv-cardx flex h-full items-start gap-4 rounded-2xl border border-dv-line bg-dv-bg/60 p-6"
              style={{ "--ca": it.ca, "--ca2": it.ca2 } as CSSProperties}
            >
              <span className="dv-tile inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border">
                <it.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-dv-fg">{it.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-dv-muted">{it.d}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
