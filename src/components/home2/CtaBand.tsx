import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/dv/primitives";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-dv-bg py-20 sm:py-28">
      <div className="dv-grid absolute inset-0 opacity-25" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-dv-accent/10 blur-[150px]"
      />
      <div className="container relative z-10 mx-auto px-5 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-[2rem] leading-[1.1] sm:text-4xl lg:text-5xl font-semibold tracking-tight text-dv-fg">
            Let's build your next <span className="dv-text-gradient">intelligent system</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-dv-muted sm:text-lg">
            Tell us the problem. We'll come back with an architecture, a scope and a realistic timeline.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-dv-fg px-7 py-3.5 text-sm font-semibold text-dv-bg transition-transform hover:-translate-y-0.5"
            >
              Start a Project <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/agents"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-dv-line bg-dv-surface px-7 py-3.5 text-sm font-semibold text-dv-fg transition-colors hover:border-dv-accent/40"
            >
              See AI Agents
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
