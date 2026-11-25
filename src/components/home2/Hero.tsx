import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import {
  withDriftX,
  withHideWhileScrolling,
  withScaleUp,
  withScrollWidth,
  withScrollWidthClip,
} from "@/components/home2/ScrollEffects";
import { createCardDataUrl, HERO_CARDS } from "@/components/home2/heroCardTextures";
import { trackServiceCta, trackStudyAbroadCta } from "@/lib/analytics";

const FloatingCta = withHideWhileScrolling(motion.div);
const HeroGlowBlob = withScaleUp(motion.div);
const HeroWatermark = withDriftX(motion.div);
const HeroWipeBg = withScrollWidth(motion.div);
const HeroWipeClip = withScrollWidthClip(motion.div);

const HERO_PILLARS = [
  "AI Agents",
  "Website Dev",
  "App Dev",
  "Workflow Automation",
  "Abroad Study Consultation",
];

function PillarItems({ dotClassName }: { dotClassName: string }) {
  return (
    <>
      {HERO_PILLARS.map((pillar, i) => (
        <span key={pillar} className="inline-flex items-center gap-2 sm:gap-3">
          <span>{pillar}</span>
          {i < HERO_PILLARS.length - 1 && (
            <span className={`h-1 w-1 rounded-full ${dotClassName}`} aria-hidden="true" />
          )}
        </span>
      ))}
    </>
  );
}

/**
 * Single source of truth for circular 3D carousel mathematics.
 * At radius R and 12 cards (30deg spacing), maximum non-intersecting chord is 2 * R * tan(15deg)
 * = 0.5359 * R (~270px at R=505px). Keeping base cardWidth=256px maintains ~7px separation per
 * side around the full 360deg cylinder while foreground projection scales ~1.52x (~390px wide).
 */
const CAROUSEL_CONFIG = {
  revolutionSeconds: 36,
  desktopRadius: 505,
  desktopCardWidth: 256,
  desktopCardHeight: 270, // Preserves exact 760:800 artwork aspect ratio
  desktopPerspective: 1480,
  desktopTiltXDeg: -13.5,
  mobileTiltXDeg: -12,
  desktopVerticalOffset: -94,
  mobileVerticalOffset: -86,
  dragSensitivity: 0.24, // Degrees per pixel dragged before viewport scale
  inertiaFriction: 0.94,
} as const;

const ANGULAR_SPACING_DEG = 360 / HERO_CARDS.length;
const ANGULAR_SPACING_RAD = (Math.PI * 2) / HERO_CARDS.length;
const AUTO_SPEED_DEG_PER_SEC = 360 / CAROUSEL_CONFIG.revolutionSeconds;

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const tiltRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const frontImgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const backImgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const navigate = useNavigate();
  const reduceMotion = Boolean(useReducedMotion());

  const [dragging, setDragging] = useState(false);
  const [hoveringCard, setHoveringCard] = useState(false);

  const cardImages = useMemo(() => {
    if (typeof document === "undefined") {
      return HERO_CARDS.map(() => "");
    }
    return HERO_CARDS.map((card) => createCardDataUrl(card.id));
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const tiltEl = tiltRef.current;
    const ringEl = ringRef.current;
    if (!section || !stage || !tiltEl || !ringEl) return;

    const count = HERO_CARDS.length;
    let activeScale = 1;
    let currentRadius = CAROUSEL_CONFIG.desktopRadius;
    let currentTiltXDeg = CAROUSEL_CONFIG.desktopTiltXDeg;
    let inViewport = true;

    const syncGeometry = () => {
      const w = stage.clientWidth || 1280;
      const h = stage.clientHeight || 620;
      const isMobile = w < 640;

      // Scale uniformly across 1920, 1440, 1280, 1024, 768, and 390px viewports
      const widthScale = isMobile ? Math.max(0.54, w / 690) : Math.min(1.22, w / 1380);
      const heightCap = isMobile ? h / 380 : h / 565;
      activeScale = Math.max(0.52, Math.min(1.22, Math.min(widthScale, heightCap * 1.06)));

      currentRadius = CAROUSEL_CONFIG.desktopRadius * activeScale;
      currentTiltXDeg = isMobile
        ? CAROUSEL_CONFIG.mobileTiltXDeg
        : CAROUSEL_CONFIG.desktopTiltXDeg;

      const cardW = Math.round(CAROUSEL_CONFIG.desktopCardWidth * activeScale);
      const cardH = Math.round((cardW * CAROUSEL_CONFIG.desktopCardHeight) / CAROUSEL_CONFIG.desktopCardWidth);
      const perspectivePx = Math.round(CAROUSEL_CONFIG.desktopPerspective * activeScale);
      const offsetY =
        (isMobile ? CAROUSEL_CONFIG.mobileVerticalOffset : CAROUSEL_CONFIG.desktopVerticalOffset) *
        activeScale;

      stage.style.perspective = `${perspectivePx}px`;
      stage.style.perspectiveOrigin = "50% 42%";
      tiltEl.style.transform = `translate3d(0, ${offsetY.toFixed(1)}px, 0) rotateX(${currentTiltXDeg}deg)`;

      for (let i = 0; i < count; i++) {
        const cardEl = cardRefs.current[i];
        if (!cardEl) continue;
        const cardAngleDeg = i * ANGULAR_SPACING_DEG;
        cardEl.style.width = `${cardW}px`;
        cardEl.style.height = `${cardH}px`;
        cardEl.style.marginLeft = `${-cardW / 2}px`;
        cardEl.style.marginTop = `${-cardH / 2}px`;
        cardEl.style.transform = `rotateY(${cardAngleDeg}deg) translateZ(${currentRadius.toFixed(1)}px)`;
      }
    };

    syncGeometry();
    const resizeObserver = new ResizeObserver(syncGeometry);
    resizeObserver.observe(stage);

    // Lead initially with AI Agents (0), Website Dev (1), App Dev (2), and Abroad Study (3)
    let orbitDeg = -ANGULAR_SPACING_DEG;
    let velocityDeg = 0;
    let isPointerDown = false;
    let pointerStartX = 0;
    let pointerLastX = 0;
    let dragDistance = 0;
    let activeCardIndex: number | null = null;
    let isHovered = false;
    let speedBlend = 1;
    let resumeHoldTimer = 0;
    let interactionPaused = false;

    const renderFrame = () => {
      ringEl.style.transform = `rotateY(${orbitDeg.toFixed(3)}deg)`;

      const orbitRad = (orbitDeg * Math.PI) / 180;
      const sinTilt = Math.sin((currentTiltXDeg * Math.PI) / 180);
      const cosTilt = Math.cos((currentTiltXDeg * Math.PI) / 180);

      for (let i = 0; i < count; i++) {
        const cardEl = cardRefs.current[i];
        if (!cardEl) continue;

        const worldAngleRad = orbitRad + i * ANGULAR_SPACING_RAD;
        const cosA = Math.cos(worldAngleRad);
        // Accurate depth along camera Z after ring Y-rotation and plane X-tilt
        const zWorld = currentRadius * cosA * cosTilt;
        const yContrib = currentRadius * cosA * sinTilt;
        cardEl.style.zIndex = String(1000 + Math.round(zWorld - yContrib * 0.1));

        // Subtle perspective lighting contrast on leaf <img> nodes only (keeps preserve-3d intact)
        const depthNorm = (cosA + 1) * 0.5;
        const brightness = `brightness(${(0.88 + 0.12 * depthNorm).toFixed(3)})`;
        const frontImg = frontImgRefs.current[i];
        const backImg = backImgRefs.current[i];
        if (frontImg) frontImg.style.filter = brightness;
        if (backImg) backImg.style.filter = brightness;
      }
    };

    const getCardIndexFromTarget = (target: EventTarget | null): number | null => {
      if (!(target instanceof Element)) return null;
      const el = target.closest("[data-hero-card-index]");
      if (!el) return null;
      const idx = Number(el.getAttribute("data-hero-card-index"));
      return Number.isInteger(idx) ? idx : null;
    };

    const onPointerDown = (e: PointerEvent) => {
      isPointerDown = true;
      interactionPaused = true;
      window.clearTimeout(resumeHoldTimer);
      pointerStartX = e.clientX;
      pointerLastX = e.clientX;
      dragDistance = 0;
      velocityDeg = 0;
      activeCardIndex = getCardIndexFromTarget(e.target);
      setDragging(true);
      try {
        stage.setPointerCapture(e.pointerId);
      } catch {
        // Ignore synthetic events without active pointer id
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      if (isPointerDown) {
        const dx = e.clientX - pointerLastX;
        dragDistance += Math.abs(dx);
        const stepDeg = (dx * CAROUSEL_CONFIG.dragSensitivity) / Math.max(0.6, activeScale);
        velocityDeg = stepDeg;
        orbitDeg += stepDeg;
        pointerLastX = e.clientX;
        if (reduceMotion || !inViewport) renderFrame();
        return;
      }

      const hovered = getCardIndexFromTarget(e.target) !== null;
      if (hovered !== isHovered) {
        isHovered = hovered;
        setHoveringCard(hovered);
      }
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!isPointerDown) return;
      isPointerDown = false;
      setDragging(false);

      if (dragDistance < 6 && Math.abs(e.clientX - pointerStartX) < 6 && activeCardIndex !== null) {
        navigate(HERO_CARDS[activeCardIndex].to);
      }
      activeCardIndex = null;

      window.clearTimeout(resumeHoldTimer);
      resumeHoldTimer = window.setTimeout(() => {
        interactionPaused = false;
      }, 650);
    };

    const onPointerLeave = () => {
      if (isHovered) {
        isHovered = false;
        setHoveringCard(false);
      }
    };

    stage.addEventListener("pointerdown", onPointerDown);
    stage.addEventListener("pointermove", onPointerMove);
    stage.addEventListener("pointerup", onPointerUp);
    stage.addEventListener("pointercancel", onPointerUp);
    stage.addEventListener("pointerleave", onPointerLeave);

    let rafId = 0;
    let lastTime = performance.now();

    const startLoop = () => {
      if (rafId || reduceMotion || !inViewport) return;
      lastTime = performance.now();
      rafId = requestAnimationFrame(tick);
    };

    const stopLoop = () => {
      if (!rafId) return;
      cancelAnimationFrame(rafId);
      rafId = 0;
    };

    const tick = (now: number) => {
      rafId = 0;
      if (reduceMotion || !inViewport) return;

      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      if (!isPointerDown) {
        if (Math.abs(velocityDeg) > 0.006) {
          orbitDeg += velocityDeg;
          velocityDeg *= Math.pow(CAROUSEL_CONFIG.inertiaFriction, dt * 60);
        } else {
          velocityDeg = 0;
          const targetBlend = interactionPaused ? 0 : isHovered ? 0.15 : 1;
          speedBlend += (targetBlend - speedBlend) * Math.min(1, dt * 3.2);
          orbitDeg += AUTO_SPEED_DEG_PER_SEC * speedBlend * dt;
        }
      }

      renderFrame();
      rafId = requestAnimationFrame(tick);
    };

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        inViewport = entry.isIntersecting;
        if (inViewport) startLoop();
        else stopLoop();
      },
      { threshold: 0.05 },
    );
    intersectionObserver.observe(section);

    renderFrame();
    startLoop();

    return () => {
      stopLoop();
      window.clearTimeout(resumeHoldTimer);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      stage.removeEventListener("pointerdown", onPointerDown);
      stage.removeEventListener("pointermove", onPointerMove);
      stage.removeEventListener("pointerup", onPointerUp);
      stage.removeEventListener("pointercancel", onPointerUp);
      stage.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [navigate, reduceMotion]);

  return (
    <section
      ref={sectionRef}
      className="dv-dot-bg relative overflow-hidden pt-20 pb-8 sm:pt-24 sm:pb-12 lg:min-h-[84vh] flex flex-col justify-center"
      aria-label="dieVekter 3D project showcase"
    >
      {/* Scroll-driven ambient radial glow behind 3D showcase (ScrollEffects.withScaleUp) */}
      <HeroGlowBlob
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 sm:h-[440px] sm:w-[440px] rounded-full bg-[#FF5422]/[0.07] blur-[110px]"
      />

      {/* Scroll-driven horizontal watermark drifting behind cards (ScrollEffects.withDriftX) */}
      <div
        className="pointer-events-none select-none overflow-hidden absolute inset-x-0 top-24 sm:top-28"
        aria-hidden="true"
      >
        <HeroWatermark className="whitespace-nowrap text-center font-bold tracking-tight text-stone-200/45 text-[42px] sm:text-[84px] lg:text-[118px] leading-none">
          ai agents · web dev · app dev · abroad study
        </HeroWatermark>
      </div>

      {/* Shared 3D Perspective Stage */}
      <div
        ref={stageRef}
        className="relative w-full h-[395px] sm:h-[520px] lg:h-[620px] select-none touch-pan-y overflow-visible"
        style={{
          cursor: dragging ? "grabbing" : hoveringCard ? "pointer" : "grab",
        }}
      >
        {/* Subtle global X-axis tilt producing the clean elliptical amphitheater */}
        <div
          ref={tiltRef}
          className="absolute inset-0 pointer-events-none"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Central shared Y-axis rotating cylinder */}
          <div
            ref={ringRef}
            className="relative h-full w-full pointer-events-none"
            style={{ transformStyle: "preserve-3d" }}
          >
            {HERO_CARDS.map((card, idx) => (
              <div
                key={card.id}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                data-hero-card-index={idx}
                role="link"
                tabIndex={0}
                aria-label={card.label}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    navigate(card.to);
                  }
                }}
                className="pointer-events-auto absolute left-1/2 top-1/2 will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5422] focus-visible:rounded-[20px]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front Face */}
                <img
                  ref={(el) => {
                    frontImgRefs.current[idx] = el;
                  }}
                  src={cardImages[idx]}
                  alt={card.label}
                  draggable={false}
                  className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_18px_32px_rgba(20,18,16,0.14)]"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "translateZ(0.5px)",
                  }}
                />
                {/* Rear Face (un-mirrored so distant rear-arc cards read naturally) */}
                <img
                  ref={(el) => {
                    backImgRefs.current[idx] = el;
                  }}
                  src={cardImages[idx]}
                  alt=""
                  aria-hidden="true"
                  draggable={false}
                  className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_14px_24px_rgba(20,18,16,0.11)]"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg) translateZ(0.5px)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Minimal drag cue matching reference */}
      <div className="mt-1 flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-400">
        <span className="h-1 w-1 rounded-full bg-[#FF5422]" />
        Drag to spin
        <span className="h-1 w-1 rounded-full bg-[#FF5422]" />
      </div>

      {/* Visible Dual-Vertical Headline & CTAs */}
      <div className="container relative z-10 mx-auto mt-6 sm:mt-7 max-w-4xl px-5 sm:px-6 text-center">
        <h1
          className="font-bold tracking-tight text-[#141210]"
          style={{ fontSize: "clamp(26px, 3.6vw, 44px)", lineHeight: 1.08 }}
        >
          Technology Solutions.{" "}
          <span className="text-[#FF5422]">Global Education Opportunities.</span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-stone-600">
          DieVekter Tech engineers custom websites, mobile apps, AI agents and business automation
          for growing teams—alongside dedicated Study Abroad Consultancy for Germany and global
          universities.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/services"
            onClick={() => trackServiceCta("all-services", "/")}
            className="inline-flex items-center gap-2 rounded-full bg-[#FF5422] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#e8460e]"
          >
            Explore Technology Services <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            to="/study-abroad"
            onClick={() => trackStudyAbroadCta("/study-abroad", "/")}
            className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#141210] transition-colors hover:border-[#FF5422] hover:text-[#FF5422]"
          >
            Explore Study Abroad Consultancy <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Scroll-width expanding Hero capabilities wipe strip (withScrollWidth + withScrollWidthClip) */}
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 mt-6 sm:mt-8 relative z-10 max-w-4xl">
        <div className="relative overflow-hidden rounded-full border border-[#FBE0D4] bg-[#FFF5F1] shadow-sm">
          {/* Expanding orange background sheet driven by scroll (10% -> 100%) */}
          <HeroWipeBg
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 bg-[#FF5422]"
          />

          {/* Base readable layer */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-1.5 px-4 sm:px-7 py-2.5 text-[11px] sm:text-xs font-semibold text-[#141210]">
            <PillarItems dotClassName="bg-[#FF5422]/60" />
          </div>

          {/* Companion clipped overlay revealed synchronously in white on top of expanding orange wipe */}
          <HeroWipeClip
            aria-hidden="true"
            className="pointer-events-none flex absolute inset-0 z-20 flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-1.5 px-4 sm:px-7 py-2.5 text-[11px] sm:text-xs font-semibold text-white"
          >
            <PillarItems dotClassName="bg-white/80" />
          </HeroWipeClip>
        </div>
      </div>

      {/* Floating CTA button that hides while scrolling (ScrollEffects.tsx) */}
      <FloatingCta className="fixed bottom-5 left-1/2 -translate-x-1/2 z-30">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-[#FF5422] px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-[0_12px_28px_rgba(255,84,34,0.38)] transition-transform hover:scale-105 hover:bg-[#e8460e]"
        >
          Start a project
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </FloatingCta>
    </section>
  );
}
