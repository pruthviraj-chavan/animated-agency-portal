import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
  y = 22,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Section({
  children,
  className,
  id,
  tone = "base",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "base" | "raised";
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-20 sm:py-24 lg:py-32",
        tone === "raised" ? "bg-dv-surface" : "bg-dv-bg",
        className,
      )}
    >
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-dv-accent">
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 text-[1.9rem] leading-[1.1] sm:text-4xl lg:text-[3.1rem] font-semibold tracking-tight text-dv-fg">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-dv-muted">{subtitle}</p>
      )}
    </Reveal>
  );
}

export function Panel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-dv-line bg-dv-surface/70 backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Glow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full blur-[140px] opacity-40",
        className,
      )}
    />
  );
}
