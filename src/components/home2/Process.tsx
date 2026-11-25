import { motion } from "framer-motion";

const steps = [
  { n: "01", t: "Discover", d: "We map the workflow, data and outcome that matter before writing a line of code." },
  { n: "02", t: "Design", d: "Architecture, interfaces and guardrails defined up front so systems stay maintainable." },
  { n: "03", t: "Build", d: "Short iterative cycles with working software and live demos you review every week." },
  { n: "04", t: "Deploy", d: "Production rollout with monitoring, fallbacks and complete ownership handover." },
  { n: "05", t: "Improve", d: "Measure, tune and extend — systems get smarter and faster with real usage." },
];

export function Process() {
  return (
    <section className="dv-dot-bg py-20 sm:py-24" id="process">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-5">
          <span className="inline-block rounded-full bg-[#FF5422] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
            How we work
          </span>
        </div>

        <h2
          className="text-center font-bold tracking-tight text-[#141210] mb-12"
          style={{ fontSize: "clamp(26px, 3.6vw, 42px)", lineHeight: 1.08 }}
        >
          An engineering process,{" "}
          <span className="text-[#FF5422]">not a project queue.</span>
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="rounded-2xl border border-[#FBE0D4] bg-[#FFF7F4] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5422]/40 hover:shadow-md"
            >
              <span className="text-sm font-black tracking-[0.16em] text-[#FF5422]">
                {s.n}
              </span>
              <h3 className="mt-3 text-lg font-bold text-[#141210]">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
