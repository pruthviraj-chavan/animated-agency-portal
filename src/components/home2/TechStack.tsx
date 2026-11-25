import { motion } from "framer-motion";

const groups = [
  {
    t: "AI & ML",
    items: ["LLM orchestration", "RAG pipelines", "Speech-to-text / TTS", "Vector databases"],
  },
  {
    t: "Engineering",
    items: ["React & TypeScript", "Node & Python services", "REST & realtime APIs", "PostgreSQL"],
  },
  {
    t: "Automation",
    items: ["Workflow engines", "CRM & webhook integrations", "Event-driven jobs", "Scheduled pipelines"],
  },
  {
    t: "Platform",
    items: ["Cloud deployment", "CI/CD pipelines", "Observability & logging", "Access control"],
  },
];

export function TechStack() {
  return (
    <section className="bg-white border-y border-stone-100 py-20 sm:py-24" id="technology">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16 items-center">
          <div>
            <span className="inline-block rounded-full bg-[#FF5422] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white mb-5">
              Technology
            </span>
            <h2
              className="font-bold tracking-tight text-[#141210] leading-tight"
              style={{ fontSize: "clamp(26px, 3.6vw, 42px)" }}
            >
              A stack chosen for{" "}
              <span className="text-[#FF5422]">reliability.</span>
            </h2>
            <p className="mt-4 text-stone-500 leading-relaxed text-base max-w-md">
              No black boxes. Every system we ship is observable, testable, and owned by your team
              when we hand it over.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {groups.map((g, i) => (
              <motion.div
                key={g.t}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="rounded-2xl border border-[#FBE0D4] bg-[#FFF6F2] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-xs font-black uppercase tracking-[0.18em] text-[#FF5422]">
                  {g.t}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-sm text-stone-600">
                      <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FF5422]" />
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
