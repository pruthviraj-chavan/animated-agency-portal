"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useReducedMotion } from "framer-motion";
import { createCardDataUrl, HERO_CARDS } from "@/components/home2/heroCardTextures";

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
  desktopCardHeight: 270,
  desktopPerspective: 1480,
  desktopTiltXDeg: -13.5,
  mobileTiltXDeg: -12,
  desktopVerticalOffset: -94,
  mobileVerticalOffset: -86,
  dragSensitivity: 0.24,
  inertiaFriction: 0.94,
} as const;

const ANGULAR_SPACING_DEG = 360 / HERO_CARDS.length;
const ANGULAR_SPACING_RAD = (Math.PI * 2) / HERO_CARDS.length;
const AUTO_SPEED_DEG_PER_SEC = 360 / CAROUSEL_CONFIG.revolutionSeconds;

export function HeroCarouselClient() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const tiltRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const frontImgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const backImgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const router = useRouter();
  const reduceMotionHook = useReducedMotion();

  const [mounted, setMounted] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [hoveringCard, setHoveringCard] = useState(false);
  const [cardImages, setCardImages] = useState<string[]>([]);

  const reduceMotion = mounted && Boolean(reduceMotionHook);

  // Paint high-DPI canvas artwork only after mount to prevent SSR/hydration mismatch
  useEffect(() => {
    setMounted(true);
    setCardImages(HERO_CARDS.map((card) => createCardDataUrl(card.id)));
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    const tiltEl = tiltRef.current;
    const ringEl = ringRef.current;
    if (!stage || !tiltEl || !ringEl) return;

    const count = HERO_CARDS.length;
    let activeScale = 1;
    let currentRadius = CAROUSEL_CONFIG.desktopRadius;
    let currentTiltXDeg: number = CAROUSEL_CONFIG.desktopTiltXDeg;
    let inViewport = true;

    const syncGeometry = () => {
      const w = stage.clientWidth || 1280;
      const h = stage.clientHeight || 620;
      const isMobile = w < 640;

      const widthScale = isMobile ? Math.max(0.54, w / 690) : Math.min(1.22, w / 1380);
      const heightCap = isMobile ? h / 380 : h / 565;
      activeScale = Math.max(0.52, Math.min(1.22, Math.min(widthScale, heightCap * 1.06)));

      currentRadius = CAROUSEL_CONFIG.desktopRadius * activeScale;
      currentTiltXDeg = isMobile
        ? CAROUSEL_CONFIG.mobileTiltXDeg
        : CAROUSEL_CONFIG.desktopTiltXDeg;

      const cardW = Math.round(CAROUSEL_CONFIG.desktopCardWidth * activeScale);
      const cardH = Math.round(
        (cardW * CAROUSEL_CONFIG.desktopCardHeight) / CAROUSEL_CONFIG.desktopCardWidth,
      );
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
        const zWorld = currentRadius * cosA * cosTilt;
        const yContrib = currentRadius * cosA * sinTilt;
        cardEl.style.zIndex = String(1000 + Math.round(zWorld - yContrib * 0.1));

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
        // Ignore synthetic pointer events
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
        router.push(HERO_CARDS[activeCardIndex].to);
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
    intersectionObserver.observe(stage);

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
  }, [router, reduceMotion]);

  return (
    <div
      ref={stageRef}
      className="relative w-full h-[395px] sm:h-[520px] lg:h-[620px] select-none touch-pan-y overflow-visible"
      style={{
        cursor: dragging ? "grabbing" : hoveringCard ? "pointer" : "grab",
      }}
    >
      <div
        ref={tiltRef}
        className="absolute inset-0 pointer-events-none"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          ref={ringRef}
          className="relative h-full w-full pointer-events-none"
          style={{ transformStyle: "preserve-3d" }}
        >
          {HERO_CARDS.map((card, idx) => {
            const imgSrc = cardImages[idx];
            return (
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
                    router.push(card.to);
                  }
                }}
                className="pointer-events-auto absolute left-1/2 top-1/2 will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5422] focus-visible:rounded-[20px]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {imgSrc ? (
                  <>
                    <img
                      ref={(el) => {
                        frontImgRefs.current[idx] = el;
                      }}
                      src={imgSrc}
                      alt={card.label}
                      draggable={false}
                      className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_18px_32px_rgba(20,18,16,0.14)]"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "translateZ(0.5px)",
                      }}
                    />
                    <img
                      ref={(el) => {
                        backImgRefs.current[idx] = el;
                      }}
                      src={imgSrc}
                      alt=""
                      aria-hidden="true"
                      draggable={false}
                      className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_14px_24px_rgba(20,18,16,0.11)]"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg) translateZ(0.5px)",
                      }}
                    />
                  </>
                ) : (
                  <Link
                    href={card.to}
                    className="flex h-full w-full flex-col justify-between rounded-[22px] border border-[#FBE0D4] bg-[#FFF5F1] p-5 shadow-md"
                  >
                    <span className="inline-block w-fit rounded-full bg-[#FF5422] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      dieVekter
                    </span>
                    <span className="text-base font-bold text-[#141210]">{card.label}</span>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Crawl-accessible quick links for reduced motion & non-drag assistive navigation */}
      <nav aria-label="Featured capabilities" className="sr-only">
        {HERO_CARDS.map((card) => (
          <Link key={card.id} href={card.to}>
            {card.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
