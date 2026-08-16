import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export const AITrustSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);
    };
    resize();
    window.addEventListener("resize", resize);

    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;

    let frame = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w(), h());
      const cx = w() / 2;
      const cy = h() / 2;

      // Draw concentric circles
      for (let r = 40; r < Math.max(w(), h()); r += 60) {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(180, 160, 120, ${Math.max(0, 0.08 - r * 0.0001)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Draw dotted globe/radar pattern
      const time = frame * 0.005;
      const dotSize = 2.5;
      const spacing = 14;

      for (let x = 0; x < w(); x += spacing) {
        for (let y = 0; y < h(); y += spacing) {
          const dx = x - cx;
          const dy = y - cy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = Math.max(w(), h()) * 0.45;

          if (dist > maxDist) continue;

          // Create globe-like shape using sine distortion
          const angle = Math.atan2(dy, dx);
          const normalizedDist = dist / maxDist;
          const globeEffect = Math.sin(normalizedDist * Math.PI) * Math.cos(angle * 3 + time);
          const waveEffect = Math.sin(dist * 0.02 - time * 2) * 0.5 + 0.5;

          const alpha = Math.max(0, (1 - normalizedDist * 0.8) * (0.15 + globeEffect * 0.25) * waveEffect);

          if (alpha > 0.02) {
            ctx.beginPath();
            ctx.arc(x, y, dotSize * (0.5 + alpha), 0, Math.PI * 2);
            ctx.fillStyle = `rgba(200, 180, 130, ${alpha})`;
            ctx.fill();
          }
        }
      }

      frame++;
      requestAnimationFrame(draw);
    };

    const animId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a1408 0%, #2a1f0a 30%, #1a1408 60%, #0f0d08 100%)" }}>
      {/* Canvas for dotted globe */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 1 }}
      />

      <div className="container mx-auto px-4 relative z-10 py-32 lg:py-44 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="text-amber-100/90">Businesses spend 60% of </span>
            <span className="text-white font-black">their time on repetitive tasks</span>
          </h2>

          <motion.a
            href="/contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-8 py-4 rounded-full font-bold text-lg"
            style={{
              background: "linear-gradient(135deg, #d4e157, #c6ff00)",
              color: "#1a1408",
            }}
          >
            Start automating now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
