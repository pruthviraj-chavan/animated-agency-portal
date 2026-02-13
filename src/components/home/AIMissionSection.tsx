import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Settings, Cpu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  { icon: Zap, label: "Lightning-fast processing" },
  { icon: ShieldCheck, label: "Enterprise-grade security" },
  { icon: Settings, label: "Real-time, adaptive algorithms" },
];

export function AIMissionSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      t += 0.003;

      const cx = w / 2;
      const cy = h * 0.38;
      const rx = Math.min(w * 0.38, 280);
      const ry = rx * 0.9;

      // Glowing arc
      for (let pass = 0; pass < 3; pass++) {
        ctx.beginPath();
        const blur = [20, 8, 2][pass];
        const alpha = [0.15, 0.3, 0.7][pass];
        const width = [24, 10, 3][pass];
        ctx.shadowBlur = blur;
        ctx.shadowColor = `rgba(140, 130, 255, ${alpha})`;
        ctx.strokeStyle = `rgba(160, 150, 255, ${alpha})`;
        ctx.lineWidth = width;

        for (let i = 0; i <= 180; i++) {
          const angle = (Math.PI / 180) * (i - 90);
          const wobble = Math.sin(angle * 4 + t * 3) * 3;
          const x = cx + (rx + wobble) * Math.cos(angle);
          const y = cy + (ry + wobble) * Math.sin(angle);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Floating data particles along arc
      for (let i = 0; i < 60; i++) {
        const angle = (Math.PI / 180) * ((i * 3) - 90);
        const offset = Math.sin(t * 2 + i) * 15;
        const x = cx + (rx + offset) * Math.cos(angle);
        const y = cy + (ry + offset) * Math.sin(angle);
        const alpha = 0.3 + Math.sin(t * 3 + i * 0.5) * 0.3;
        ctx.fillStyle = `rgba(180, 170, 255, ${alpha})`;
        ctx.font = "9px monospace";
        const chars = ["0", "1", "a", "b", "c", "d"];
        ctx.fillText(chars[i % chars.length], x, y);
      }

      // Cross markers
      const markers = [
        { x: cx - rx - 30, y: cy - 20 },
        { x: cx + rx + 30, y: cy - 20 },
        { x: cx - rx * 0.6, y: cy - ry - 20 },
        { x: cx + rx * 0.6, y: cy - ry - 20 },
      ];
      ctx.strokeStyle = "rgba(160, 150, 255, 0.3)";
      ctx.lineWidth = 1;
      markers.forEach(({ x, y }) => {
        ctx.beginPath();
        ctx.moveTo(x - 6, y); ctx.lineTo(x + 6, y);
        ctx.moveTo(x, y - 6); ctx.lineTo(x, y + 6);
        ctx.stroke();
      });

      // Center chip icon
      ctx.strokeStyle = "rgba(180, 170, 255, 0.5)";
      ctx.lineWidth = 1.5;
      const chipSize = 18;
      ctx.strokeRect(cx - chipSize, cy - ry - 30 - chipSize, chipSize * 2, chipSize * 2);
      ctx.strokeRect(cx - chipSize + 5, cy - ry - 30 - chipSize + 5, chipSize * 2 - 10, chipSize * 2 - 10);

      // Small corner squares
      [[cx - rx * 0.1, cy - ry - 60], [cx + rx * 0.1, cy - ry - 65]].forEach(([sx, sy]) => {
        ctx.strokeRect(sx - 4, sy - 4, 8, 8);
      });

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[hsl(235,30%,10%)]">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: "none" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto pt-[220px] md:pt-[280px]">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border border-indigo-400/30 rounded px-4 py-1.5 mb-8"
          >
            <Cpu className="w-3.5 h-3.5 text-indigo-300" />
            <span className="text-xs tracking-[0.2em] uppercase text-indigo-300 font-mono">
              Next-Gen AI Engine
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-100 leading-tight mb-6"
          >
            AI-driven solutions,
            <br />
            <span className="text-indigo-300">perfected.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-indigo-200/70 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            <span className="text-indigo-100 font-semibold">Our mission is to revolutionize your business.</span>{" "}
            Dievektor redefines automation with self-learning AI, real-time optimization, and strategic intelligence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <Button
              asChild
              size="lg"
              className="bg-indigo-500 hover:bg-indigo-400 text-white rounded-full px-8 py-6"
            >
              <Link to="/agents">
                Join the Movement
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 md:gap-10"
          >
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-2.5 text-indigo-200/80">
                <f.icon className="w-4 h-4 text-indigo-400" />
                <span className="text-sm font-medium">{f.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
