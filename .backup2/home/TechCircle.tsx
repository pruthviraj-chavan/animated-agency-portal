import { motion } from "framer-motion";

const technologies = [
  { name: "React", color: "61, 218, 251" },
  { name: "Node.js", color: "140, 200, 75" },
  { name: "TypeScript", color: "49, 120, 198" },
  { name: "Python", color: "55, 118, 171" },
  { name: "Next.js", color: "150, 150, 150" },
  { name: "MongoDB", color: "77, 179, 61" },
  { name: "PostgreSQL", color: "51, 103, 145" },
  { name: "Docker", color: "36, 150, 237" },
  { name: "AWS", color: "255, 153, 0" },
  { name: "TensorFlow", color: "255, 111, 0" },
  { name: "OpenAI", color: "116, 170, 156" },
  { name: "Figma", color: "162, 89, 255" },
];

export function TechCircle() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
      {technologies.map((tech, i) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          viewport={{ once: true }}
          whileHover={{ y: -6, scale: 1.05 }}
          className="group relative bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 flex flex-col items-center gap-3 cursor-pointer transition-all duration-300"
          style={{
            boxShadow: `0 0 0 rgba(${tech.color}, 0)`,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px rgba(${tech.color}, 0.3)`;
            (e.currentTarget as HTMLElement).style.borderColor = `rgba(${tech.color}, 0.5)`;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 rgba(${tech.color}, 0)`;
            (e.currentTarget as HTMLElement).style.borderColor = `rgba(255,255,255,0.1)`;
          }}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold transition-transform duration-300 group-hover:scale-110"
            style={{
              background: `rgba(${tech.color}, 0.15)`,
              color: `rgb(${tech.color})`,
            }}
          >
            {tech.name.slice(0, 2)}
          </div>
          <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
            {tech.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
