import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const recognitions = [
  {
    year: "2026",
    recognition: "Government Registered Micro Enterprise",
    platform: "Udyam · MSME India",
    project: "UDYAM-MH-15-0320983",
    href: "https://udyamregistration.gov.in/Udyam_Verify.aspx",
    external: true,
  },
  {
    year: "2026",
    recognition: "Verified Business Identifier",
    platform: "Dun & Bradstreet",
    project: "D-U-N-S 312163123",
    href: "https://www.dnb.com/duns-number/lookup.html",
    external: true,
  },
  {
    year: "2025",
    recognition: "Rising Talent · 100% Job Success",
    platform: "Upwork Verified",
    project: "Pruthviraj C. · dieVekter",
    href: "https://www.upwork.com/freelancers/pruthviraj?mp_source=share",
    external: true,
  },
  {
    year: "2025",
    recognition: "AI Education & School Workshops",
    platform: "20+ Schools · Maharashtra",
    project: "2,000+ Students Trained",
    href: "/services/ai-training-workshops",
    external: false,
  },
  {
    year: "2025",
    recognition: "Multilingual Voice & Web Production",
    platform: "Dievekter Tech Deployments",
    project: "9+ Live Websites & 40+ Systems",
    href: "/projects",
    external: false,
  },
];

export function Proof() {
  return (
    <section className="dv-dot-bg py-20 sm:py-28" id="work">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-5xl">
        <div className="flex justify-center mb-5">
          <span className="inline-block rounded-full bg-[#FF5422] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
            Recognition &amp; Proof
          </span>
        </div>

        <h2
          className="text-center font-bold tracking-tight text-[#141210] mb-12"
          style={{ fontSize: "clamp(28px, 3.8vw, 44px)", lineHeight: 1.08 }}
        >
          Work that gets noticed.
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-stone-900/80 text-left text-[11px] font-semibold uppercase tracking-[0.14em] text-[#141210]">
                <th className="pb-3.5 pr-6">Year</th>
                <th className="pb-3.5 pr-6">Recognition</th>
                <th className="pb-3.5 pr-6 hidden sm:table-cell">Platform</th>
                <th className="pb-3.5 pr-4">Reference</th>
                <th className="pb-3.5 w-8" aria-label="Open link" />
              </tr>
            </thead>
            <tbody>
              {recognitions.map((row, i) => (
                <motion.tr
                  key={row.recognition}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.35 }}
                  className="group border-b border-stone-200/80 hover:bg-[#FFF4F0]/70 transition-colors"
                >
                  <td className="py-4 pr-6 text-stone-500 font-medium">{row.year}</td>
                  <td className="py-4 pr-6 text-[#141210] font-medium">{row.recognition}</td>
                  <td className="py-4 pr-6 text-stone-500 hidden sm:table-cell">{row.platform}</td>
                  <td className="py-4 pr-4 text-stone-600">{row.project}</td>
                  <td className="py-4 text-right">
                    {row.external ? (
                      <a
                        href={row.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Verify ${row.recognition}`}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full text-stone-500 group-hover:bg-[#FF5422] group-hover:text-white transition-colors"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : (
                      <Link
                        to={row.href}
                        aria-label={`View ${row.recognition}`}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full text-stone-500 group-hover:bg-[#FF5422] group-hover:text-white transition-colors"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
