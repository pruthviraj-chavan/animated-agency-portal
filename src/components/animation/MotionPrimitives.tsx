"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  withDriftX,
  withFloatDown,
  withFloatUp,
  withFlyInLeft,
  withFlyInRight,
  withHideWhileScrolling,
  withScaleUp,
  withScrollWidth,
  withScrollWidthClip,
  withTeamMiddle,
  withTeamSide,
  withWidthGrow,
} from "@/components/home2/ScrollEffects";

const DriftDiv = withDriftX(motion.div);
const ScaleDiv = withScaleUp(motion.div);
const WidthGrowDiv = withWidthGrow(motion.div);
const FlyLeftDiv = withFlyInLeft(motion.div);
const FlyRightDiv = withFlyInRight(motion.div);
const TeamSideDiv = withTeamSide(motion.div);
const TeamMidDiv = withTeamMiddle(motion.div);
const ScrollWipeBgDiv = withScrollWidth(motion.div);
const ScrollWipeClipDiv = withScrollWidthClip(motion.div);
const HideScrollDiv = withHideWhileScrolling(motion.div);
const FloatUpDiv = withFloatUp(motion.div);
const FloatDownDiv = withFloatDown(motion.div);

export function DriftWatermark({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <DriftDiv className={className}>{children}</DriftDiv>;
}

export function ScaleGlow({
  children,
  className,
  "aria-hidden": ariaHidden,
}: {
  children?: ReactNode;
  className?: string;
  "aria-hidden"?: boolean;
}) {
  return (
    <ScaleDiv aria-hidden={ariaHidden} className={className}>
      {children}
    </ScaleDiv>
  );
}

export function GrowBanner({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <WidthGrowDiv className={className}>{children}</WidthGrowDiv>;
}

export function FlyLeftBlock({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <FlyLeftDiv className={className}>{children}</FlyLeftDiv>;
}

export function FlyRightBlock({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <FlyRightDiv className={className}>{children}</FlyRightDiv>;
}

export function TeamSideMotion({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <TeamSideDiv className={className}>{children}</TeamSideDiv>;
}

export function TeamMiddleMotion({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <TeamMidDiv className={className}>{children}</TeamMidDiv>;
}

export function ScrollWipeBg({
  className,
  "aria-hidden": ariaHidden,
}: {
  className?: string;
  "aria-hidden"?: boolean;
}) {
  return <ScrollWipeBgDiv aria-hidden={ariaHidden} className={className} />;
}

export function ScrollWipeClip({
  children,
  className,
  "aria-hidden": ariaHidden,
}: {
  children: ReactNode;
  className?: string;
  "aria-hidden"?: boolean;
}) {
  return (
    <ScrollWipeClipDiv aria-hidden={ariaHidden} className={className}>
      {children}
    </ScrollWipeClipDiv>
  );
}

export function FloatingScrollCta({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <HideScrollDiv className={className}>{children}</HideScrollDiv>;
}

export function FloatUpColumn({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <FloatUpDiv className={className}>{children}</FloatUpDiv>;
}

export function FloatDownColumn({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <FloatDownDiv className={className}>{children}</FloatDownDiv>;
}

export function MotionFadeIn({
  children,
  delay = 0,
  direction = "up",
  hoverLift = false,
  className,
}: {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  hoverLift?: boolean;
  className?: string;
}) {
  const reduce = Boolean(useReducedMotion());
  const initial = reduce
    ? undefined
    : direction === "left"
      ? { opacity: 0, x: -16 }
      : direction === "right"
        ? { opacity: 0, x: 16 }
        : direction === "none"
          ? { opacity: 0 }
          : { opacity: 0, y: 16 };

  return (
    <motion.div
      initial={initial}
      whileInView={reduce ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.42, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hoverLift && !reduce ? { y: -5, scale: 1.015 } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SpringButtonWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = Boolean(useReducedMotion());
  return (
    <motion.div
      whileHover={reduce ? undefined : { scale: 1.04 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
