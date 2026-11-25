import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { MotionFadeIn } from "@/components/animation/MotionPrimitives";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <MotionFadeIn delay={delay} className={className}>
      {children}
    </MotionFadeIn>
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
        "relative overflow-hidden py-16 sm:py-20 lg:py-24",
        tone === "raised" ? "bg-[#FFF8F5] border-y border-[#FBE0D4]/60" : "dv-dot-bg",
        className,
      )}
    >
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-[#FF5422] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
      {children}
    </span>
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
      <h2 className="mt-4 text-[1.9rem] leading-[1.08] sm:text-4xl lg:text-[2.9rem] font-bold tracking-tight text-[#141210]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-stone-500">{subtitle}</p>
      )}
    </Reveal>
  );
}

export function Panel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-2xl border border-[#FBE0D4] bg-[#FFF5F1]", className)}>
      {children}
    </div>
  );
}

export function Glow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full blur-[120px] opacity-30",
        className,
      )}
    />
  );
}
