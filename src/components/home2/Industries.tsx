import { Building2, GraduationCap, HeartPulse, ShoppingBag, Truck, Landmark } from "lucide-react";
import { Reveal, Section, SectionHeading } from "@/components/dv/primitives";

const industries = [
  { icon: ShoppingBag, t: "Retail & D2C", d: "Order support, catalogue assistants, conversion automation." },
  { icon: HeartPulse, t: "Healthcare", d: "Appointment handling, patient follow-ups, records workflows." },
  { icon: GraduationCap, t: "Education", d: "Admissions agents, student support, multilingual counselling." },
  { icon: Building2, t: "Real Estate", d: "Lead qualification, site-visit scheduling, CRM sync." },
  { icon: Truck, t: "Logistics", d: "Status queries, dispatch coordination, exception alerts." },
  { icon: Landmark, t: "Financial Services", d: "KYC support flows, servicing assistants, ops automation." },
];

export function Industries() {
  return (
    <Section id="industries" tone="raised">
      <SectionHeading
        eyebrow="Where we operate"
        title="Built for businesses that run on operations"
        subtitle="We work with teams where conversations, data and processes have to hold up at volume."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((it, i) => (
          <Reveal key={it.t} delay={i * 0.05}>
            <div className="flex h-full items-start gap-4 rounded-2xl border border-dv-line bg-dv-bg/60 p-6 transition-colors hover:border-dv-accent/35">
              <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-dv-line bg-dv-elevated text-dv-accent">
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
