import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, Smartphone, PenTool, Boxes, ArrowRight } from "lucide-react";

const services = [
  { icon: Globe, title: "Websites & web platforms", path: "/services/custom-website-development" },
  { icon: Smartphone, title: "Mobile applications", path: "/services/mobile-app-development" },
  { icon: Boxes, title: "Custom software & APIs", path: "/services/api-development" },
  { icon: PenTool, title: "UI/UX design", path: "/services/ui-ux-design" },
];

export function SecondaryServicesSection() {
  return (
    <section className="py-16 md:py-20 bg-[hsl(232,32%,7%)] border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500 mb-3">
              Supporting services
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Engineering services that support our AI work
            </h2>
            <p className="mt-3 text-sm text-slate-400">
              Product and platform engineering we deliver alongside AI agents — often the systems our
              agents integrate with.
            </p>
          </div>
          <Link to="/services" className="inline-flex items-center text-sm font-semibold text-cyan-300 hover:text-cyan-200">
            All services
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
            >
              <Link
                to={s.path}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 hover:border-white/25 transition-colors"
              >
                <s.icon className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-200">{s.title}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
