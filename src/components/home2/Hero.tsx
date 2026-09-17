import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Braces,
  BrainCircuit,
  Database,
  Globe2,
  Languages,
  MessageSquareMore,
  Mic2,
  Network,
  Smartphone,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type IntroPhase = "scatter" | "line" | "orbit";

type Capability = {
  label: string;
  detail: string;
  path: string;
  icon: LucideIcon;
};

const capabilities: Capability[] = [
  { label: "AI Agents", detail: "Systems that reason and act", path: "/agents", icon: Bot },
  { label: "Voice AI", detail: "Natural customer conversations", path: "/solutions/ai", icon: Mic2 },
  { label: "Automation", detail: "Workflows without busywork", path: "/solutions/automation", icon: Workflow },
  { label: "Software", detail: "Product-grade platforms", path: "/solutions/software", icon: Braces },
  { label: "Multilingual", detail: "Hindi, Marathi and Hinglish", path: "/agents", icon: Languages },
  { label: "RAG Systems", detail: "Answers grounded in your data", path: "/solutions/ai", icon: Database },
  { label: "Intelligence", detail: "Context-aware decisions", path: "/solutions/ai", icon: BrainCircuit },
  { label: "Integrations", detail: "Tools working as one", path: "/solutions/automation", icon: Network },
  { label: "Conversational", detail: "Human customer experiences", path: "/agents", icon: MessageSquareMore },
  { label: "Web Products", detail: "Fast, scalable experiences", path: "/solutions/software", icon: Globe2 },
  { label: "Mobile", detail: "Products built for every screen", path: "/solutions/software", icon: Smartphone },
  { label: "AI Native", detail: "Built for what comes next", path: "/solutions", icon: Sparkles },
];

const lerp = (start: number, end: number, amount: number) =>
  start + (end - start) * amount;

function CapabilityCard({
  item,
  index,
  target,
  compact,
}: {
  item: Capability;
  index: number;
  target: { x: number; y: number; rotate: number; scale: number; opacity: number };
  compact: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      animate={target}
      transition={{ type: "spring", stiffness: 48, damping: 18, mass: 0.85 }}
      className="group absolute left-1/2 top-1/2 cursor-pointer"
      style={{
        width: compact ? 62 : 86,
        height: compact ? 84 : 116,
        marginLeft: compact ? -31 : -43,
        marginTop: compact ? -42 : -58,
        perspective: 900,
        transformStyle: "preserve-3d",
        willChange: "transform, opacity",
      }}
    >
      <Link to={item.path} aria-label={`${item.label}: ${item.detail}`} className="block h-full w-full">
        <motion.span
          className="relative block h-full w-full"
          whileHover={compact ? undefined : { rotateY: 180 }}
          transition={{ type: "spring", stiffness: 220, damping: 22 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <span
            className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-xl border border-dv-line bg-dv-elevated/95 p-2.5 shadow-[var(--dv-shadow)] backdrop-blur-md"
            style={{ backfaceVisibility: "hidden" }}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-dv-accent/25 bg-dv-accent/10 text-dv-accent">
              <Icon className="h-3.5 w-3.5" aria-hidden />
            </span>
            <span>
              <span className="block text-[8px] font-semibold uppercase leading-tight text-dv-fg sm:text-[10px]">
                {item.label}
              </span>
              <span className="mt-1 block h-px w-5 bg-dv-accent/60" />
            </span>
            <span className="text-[7px] font-medium text-dv-dim">0{index + 1}</span>
          </span>

          <span
            className="absolute inset-0 flex flex-col items-center justify-center rounded-xl border border-dv-accent/30 bg-dv-surface p-2 text-center shadow-[var(--dv-glow)]"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <span className="text-[8px] font-semibold uppercase text-dv-accent">Explore</span>
            <span className="mt-1 text-[8px] leading-tight text-dv-fg sm:text-[10px]">{item.detail}</span>
            <ArrowUpRight className="mt-2 h-3 w-3 text-dv-accent" aria-hidden />
          </span>
        </motion.span>
      </Link>
    </motion.div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<IntroPhase>(reduceMotion ? "orbit" : "scatter");
  const [size, setSize] = useState({ width: 1200, height: 760 });
  const [scrollValue, setScrollValue] = useState(0);
  const [parallaxValue, setParallaxValue] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const morph = useSpring(useTransform(scrollYProgress, [0.08, 0.72], [0, 1]), {
    stiffness: 70,
    damping: 24,
  });
  const mouseX = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 45, damping: 24 });

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const observer = new ResizeObserver(([entry]) => {
      if (!entry) return;
      setSize({ width: entry.contentRect.width, height: entry.contentRect.height });
    });
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const lineTimer = window.setTimeout(() => setPhase("line"), 280);
    const orbitTimer = window.setTimeout(() => setPhase("orbit"), 1450);
    return () => {
      window.clearTimeout(lineTimer);
      window.clearTimeout(orbitTimer);
    };
  }, [reduceMotion]);

  useEffect(() => {
    const unsubscribeMorph = morph.on("change", setScrollValue);
    const unsubscribeParallax = smoothMouseX.on("change", setParallaxValue);
    return () => {
      unsubscribeMorph();
      unsubscribeParallax();
    };
  }, [morph, smoothMouseX]);

  const scatterPositions = useMemo(
    () =>
      capabilities.map((_, index) => ({
        x: ((index * 173) % 1100) - 550,
        y: ((index * 241) % 720) - 360,
        rotate: ((index * 47) % 150) - 75,
        scale: 0.62,
        opacity: 0,
      })),
    [],
  );

  const compact = size.width < 768;
  const visibleCapabilities = compact ? capabilities.slice(0, 9) : capabilities;
  const progress = reduceMotion ? 1 : scrollValue;
  const orbitOpacity = phase === "orbit" ? Math.max(0, 1 - progress * 1.7) : 0;
  const contentOpacity = phase === "orbit" ? Math.min(1, Math.max(0, (progress - 0.3) / 0.35)) : 0;

  return (
    <section
      ref={sectionRef}
      className="relative h-[118svh] min-h-[760px] bg-dv-bg sm:h-[140svh] sm:min-h-[900px]"
      aria-label="dieVektor technology overview"
    >
      <div
        ref={stageRef}
        onMouseMove={(event) => {
          if (compact || reduceMotion) return;
          const rect = event.currentTarget.getBoundingClientRect();
          mouseX.set(((event.clientX - rect.left) / rect.width - 0.5) * 70);
        }}
        onMouseLeave={() => mouseX.set(0)}
        className="sticky top-0 h-[100svh] min-h-[640px] overflow-hidden bg-dv-bg"
      >
        <div className="dv-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px dv-hairline" aria-hidden />

        <motion.div
          animate={{ opacity: orbitOpacity, y: orbitOpacity > 0 ? 0 : -16 }}
          transition={{ duration: 0.35 }}
          className="pointer-events-none absolute inset-x-5 top-[16%] z-10 text-center sm:top-[17%]"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-dv-accent sm:text-xs">
            AI • Software • Automation
          </p>
          <h1 className="mx-auto mt-4 max-w-4xl text-3xl font-semibold leading-[1.04] text-dv-fg sm:text-5xl lg:text-6xl">
            The future is built on <span className="dv-text-gradient">intelligent systems.</span>
          </h1>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-dv-dim">
            Scroll to explore
          </p>
        </motion.div>

        <motion.div
          animate={{ opacity: contentOpacity, y: contentOpacity > 0 ? 0 : 18 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-x-5 top-[13%] z-20 mx-auto flex max-w-4xl flex-col items-center text-center sm:top-[15%]"
          style={{ pointerEvents: contentOpacity > 0.8 ? "auto" : "none" }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-dv-accent sm:text-xs">
            One technology partner. Every layer.
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.04] text-dv-fg sm:text-5xl lg:text-6xl">
            Build intelligent systems. <span className="text-dv-muted">Not just software.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-dv-muted sm:text-lg">
            dieVektor combines AI agents, product engineering and automation to help businesses communicate, operate and scale.
          </p>
          <div className="mt-7 flex w-full max-w-md flex-col justify-center gap-3 sm:w-auto sm:max-w-none sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-dv-fg px-7 text-dv-bg hover:bg-dv-fg/90">
              <Link to="/contact">
                Start a Project <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-dv-line bg-dv-surface/80 px-7 text-dv-fg hover:bg-dv-elevated hover:text-dv-fg">
              <Link to="/solutions">
                Explore Solutions <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>

        <div className="absolute inset-0" aria-hidden={phase !== "orbit"}>
          {visibleCapabilities.map((item, index) => {
            let target = { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 };

            if (phase === "scatter") {
              target = scatterPositions[index];
            } else if (phase === "line") {
              const spacing = compact ? 68 : 96;
              target = {
                x: (index - (visibleCapabilities.length - 1) / 2) * spacing,
                y: compact ? 30 : 20,
                rotate: 0,
                scale: 0.9,
                opacity: 1,
              };
            } else {
              const count = visibleCapabilities.length;
              const minDimension = Math.min(size.width, size.height);
              const radius = Math.min(minDimension * (compact ? 0.34 : 0.33), compact ? 230 : 340);
              const circleAngle = -90 + (index / count) * 360;
              const circleRadians = (circleAngle * Math.PI) / 180;
              const circleX = Math.cos(circleRadians) * radius;
              const circleY = Math.sin(circleRadians) * radius + (compact ? 38 : 30);

              const spread = compact ? 112 : 136;
              const arcRadius = Math.min(size.width * (compact ? 0.9 : 0.64), compact ? 370 : 790);
              const arcAngle = -90 - spread / 2 + (index / (count - 1)) * spread;
              const arcRadians = (arcAngle * Math.PI) / 180;
              const arcCenterY = size.height * (compact ? 1.03 : 1.08);
              const arcX = Math.cos(arcRadians) * arcRadius + parallaxValue;
              const arcY = Math.sin(arcRadians) * arcRadius + arcCenterY;

              target = {
                x: lerp(circleX, arcX, progress),
                y: lerp(circleY, arcY, progress),
                rotate: lerp(circleAngle + 90, arcAngle + 90, progress),
                scale: lerp(compact ? 0.82 : 0.9, compact ? 1.05 : 1.22, progress),
                opacity: 1,
              };
            }

            return <CapabilityCard key={item.label} item={item} index={index} target={target} compact={compact} />;
          })}
        </div>

        <motion.div
          animate={{ opacity: phase === "orbit" && progress < 0.25 ? 0.8 : 0 }}
          className="pointer-events-none absolute bottom-5 left-1/2 z-20 -translate-x-1/2 text-dv-dim"
          aria-hidden
        >
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}