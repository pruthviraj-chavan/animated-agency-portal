import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type ForwardedRef,
  type MutableRefObject,
} from "react";
import {
  animate,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionStyle,
  type MotionValue,
} from "framer-motion";

// Scroll-linked effects. Each export maps the element's scroll progress straight to a style,
// so it plays forwards and backwards.

type Range = "through" | "center" | "fly";
type WrappedProps = { style?: MotionStyle; [key: string]: unknown };
type ProgressRef = MutableRefObject<HTMLElement | null>;

/**
 * Element scroll progress (0..1) computed from its on-screen position. Listens to scroll events
 * from any container in capture phase so nested scroll wrappers also update cleanly.
 */
function useScrollProgress(ref: ProgressRef, range: Range) {
  const progress = useMotionValue(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let frame = 0;
    let current = -1;

    const read = () => {
      const element = ref.current;
      if (!element) return current;
      const viewportHeight = window.innerHeight || 1;
      const rect = element.getBoundingClientRect();
      const value =
        range === "center"
          ? (viewportHeight - rect.top) / (viewportHeight * 0.5)
          : range === "fly"
            ? (viewportHeight - rect.top) / (viewportHeight * 0.55)
            : (viewportHeight - rect.top) / (viewportHeight + rect.height);
      return Math.min(1, Math.max(0, value));
    };

    // Glide toward scroll position each frame so wheel steps don't jump
    const measure = () => {
      frame = 0;
      const target = read();
      if (current < 0) current = target;
      current += (target - current) * 0.09;
      if (Math.abs(target - current) < 0.0005) current = target;
      progress.set(current);
      if (current !== target) frame = window.requestAnimationFrame(measure);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };

    measure();
    const timeout = window.setTimeout(measure, 300);
    document.addEventListener("scroll", onScroll, { capture: true, passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onScroll);
      window.clearTimeout(timeout);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [progress, range, ref]);

  return progress;
}

function useBelow(width: number) {
  const [below, setBelow] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const query = window.matchMedia(`(max-width: ${width}px)`);
    const update = () => setBelow(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, [width]);
  return below;
}

type ScrollStyles = {
  scaleUp: MotionValue<number>;
  driftX: MotionValue<number>;
  widthGrow: MotionValue<string>;
  teamSideScale: MotionValue<number>;
  teamMiddleScale: MotionValue<number>;
  teamY: MotionValue<number>;
  floatUp: MotionValue<number>;
  floatDown: MotionValue<number>;
  flyLeftX: MotionValue<number>;
  flyRightX: MotionValue<number>;
  flyY: MotionValue<number>;
  flyLeftRotateZ: MotionValue<number>;
  flyRightRotateZ: MotionValue<number>;
  flyLeftRotateY: MotionValue<number>;
  flyRightRotateY: MotionValue<number>;
  flyScale: MotionValue<number>;
  flyOpacity: MotionValue<number>;
};

function useScrollStyles(progress: MotionValue<number>): ScrollStyles {
  return {
    scaleUp: useTransform(progress, [0, 1], [0.5, 1.2]),
    driftX: useTransform(progress, [0, 1], [-50, 50]),
    widthGrow: useTransform(progress, [0, 1], ["54%", "92%"]),
    teamSideScale: useTransform(progress, [0, 1], [1, 0.8]),
    teamMiddleScale: useTransform(progress, [0, 1], [1, 1.2]),
    teamY: useTransform(progress, [0, 1], [-30, 30]),
    floatUp: useTransform(progress, [0, 1], [50, -50]),
    floatDown: useTransform(progress, [0, 1], [-50, 50]),
    flyLeftX: useTransform(progress, [0, 1], [160, 0]),
    flyRightX: useTransform(progress, [0, 1], [-180, 0]),
    flyY: useTransform(progress, [0, 1], [-320, 0]),
    flyLeftRotateZ: useTransform(progress, [0, 1], [-18, 0]),
    flyRightRotateZ: useTransform(progress, [0, 1], [14, 0]),
    flyLeftRotateY: useTransform(progress, [0, 1], [40, 0]),
    flyRightRotateY: useTransform(progress, [0, 1], [-40, 0]),
    flyScale: useTransform(progress, [0, 1], [0.55, 1]),
    flyOpacity: useTransform(progress, [0, 0.25], [0, 1]),
  };
}

function withScrollStyle<P extends WrappedProps>(
  Component: ComponentType<P>,
  range: Range,
  breakpointPx: number,
  selectStyle: (styles: ScrollStyles, below: boolean, reduce: boolean) => MotionStyle,
) {
  const Wrapped = forwardRef<HTMLElement, P>(
    (props, forwardedRef: ForwardedRef<HTMLElement>) => {
      const elementRef = useRef<HTMLElement | null>(null);
      const progress = useScrollProgress(elementRef, range);
      const below = useBelow(breakpointPx);
      const reduce = Boolean(useReducedMotion());
      const styles = useScrollStyles(progress);
      const style = selectStyle(styles, below, reduce);

      const setRef = useCallback(
        (element: HTMLElement | null) => {
          elementRef.current = element;
          if (typeof forwardedRef === "function") forwardedRef(element);
          else if (forwardedRef) (forwardedRef as MutableRefObject<HTMLElement | null>).current = element;
        },
        [forwardedRef],
      );

      return <Component {...(props as P)} ref={setRef} style={{ ...props.style, ...style }} />;
    },
  );
  Wrapped.displayName = `ScrollEffect(${Component.displayName || Component.name || "Element"})`;
  return Wrapped;
}

const REST: MotionStyle = { x: 0, y: 0, rotateZ: 0, rotateY: 0, scale: 1, opacity: 1 };

export const withScaleUp = <P extends WrappedProps>(Component: ComponentType<P>) =>
  withScrollStyle(Component, "through", 991, (styles, _below, reduce) => ({
    scale: reduce ? 1 : styles.scaleUp,
  }));

export const withDriftX = <P extends WrappedProps>(Component: ComponentType<P>) =>
  withScrollStyle(Component, "through", 991, (styles, _below, reduce) => ({
    x: reduce ? 0 : styles.driftX,
  }));

export const withWidthGrow = <P extends WrappedProps>(Component: ComponentType<P>) =>
  withScrollStyle(Component, "center", 991, (styles, below, reduce) => ({
    width: below || reduce ? "100%" : styles.widthGrow,
  }));

export const withTeamSide = <P extends WrappedProps>(Component: ComponentType<P>) =>
  withScrollStyle(Component, "through", 991, (styles, _below, reduce) =>
    reduce ? REST : { scale: styles.teamSideScale, y: styles.teamY },
  );

export const withTeamMiddle = <P extends WrappedProps>(Component: ComponentType<P>) =>
  withScrollStyle(Component, "through", 991, (styles, _below, reduce) => ({
    scale: reduce ? 1 : styles.teamMiddleScale,
  }));

export const withFloatUp = <P extends WrappedProps>(Component: ComponentType<P>) =>
  withScrollStyle(Component, "through", 991, (styles, below, reduce) => ({
    y: below || reduce ? 0 : styles.floatUp,
  }));

export const withFloatDown = <P extends WrappedProps>(Component: ComponentType<P>) =>
  withScrollStyle(Component, "through", 991, (styles, below, reduce) => ({
    y: below || reduce ? 0 : styles.floatDown,
  }));

export const withFlyInLeft = <P extends WrappedProps>(Component: ComponentType<P>) =>
  withScrollStyle(Component, "fly", 809, (styles, below, reduce) =>
    below || reduce
      ? REST
      : {
          x: styles.flyLeftX,
          y: styles.flyY,
          rotateZ: styles.flyLeftRotateZ,
          rotateY: styles.flyLeftRotateY,
          scale: styles.flyScale,
          opacity: styles.flyOpacity,
          transformPerspective: 1200,
        },
  );

export const withFlyInRight = <P extends WrappedProps>(Component: ComponentType<P>) =>
  withScrollStyle(Component, "fly", 809, (styles, below, reduce) =>
    below || reduce
      ? REST
      : {
          x: styles.flyRightX,
          y: styles.flyY,
          rotateZ: styles.flyRightRotateZ,
          rotateY: styles.flyRightRotateY,
          scale: styles.flyScale,
          opacity: styles.flyOpacity,
          transformPerspective: 1200,
        },
  );

export function withHideWhileScrolling<P extends WrappedProps>(Component: ComponentType<P>) {
  const Wrapped = forwardRef<HTMLElement, P>(
    (props, forwardedRef: ForwardedRef<HTMLElement>) => {
      const opacity = useMotionValue(1);
      const y = useMotionValue(0);
      const [hidden, setHidden] = useState(false);

      useEffect(() => {
        if (typeof window === "undefined") return;
        let timer = 0;
        let isHidden = false;
        const show = () => {
          isHidden = false;
          setHidden(false);
          animate(opacity, 1, { duration: 0.35, ease: [0.22, 1, 0.36, 1] });
          animate(y, 0, { duration: 0.35, ease: [0.22, 1, 0.36, 1] });
        };
        const onScroll = () => {
          if (!isHidden) {
            isHidden = true;
            setHidden(true);
            animate(opacity, 0, { duration: 0.2, ease: "easeOut" });
            animate(y, 24, { duration: 0.2, ease: "easeOut" });
          }
          window.clearTimeout(timer);
          timer = window.setTimeout(show, 450);
        };
        window.addEventListener("scroll", onScroll, { capture: true, passive: true });
        return () => {
          window.removeEventListener("scroll", onScroll, true);
          window.clearTimeout(timer);
        };
      }, [opacity, y]);

      return (
        <Component
          {...(props as P)}
          ref={forwardedRef}
          style={{ ...props.style, opacity, y, pointerEvents: hidden ? "none" : undefined }}
        />
      );
    },
  );
  Wrapped.displayName = `HideWhileScrolling(${Component.displayName || Component.name || "Element"})`;
  return Wrapped;
}

/**
 * Grows an element's width from 10% -> 100% as its top moves from viewport bottom to center.
 * Below 992px (or reduced motion) it stays full width cleanly.
 */
export function withScrollWidth<P extends WrappedProps>(Component: ComponentType<P>) {
  const Wrapped = forwardRef<HTMLElement, P>(
    (props, forwardedRef: ForwardedRef<HTMLElement>) => {
      const ref = useRef<HTMLElement | null>(null);
      const reduce = Boolean(useReducedMotion());
      const below = useBelow(991);
      const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "start center"],
      });
      const width = useTransform(scrollYProgress, [0, 1], ["10%", "100%"]);

      const setRef = useCallback(
        (node: HTMLElement | null) => {
          ref.current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) (forwardedRef as MutableRefObject<HTMLElement | null>).current = node;
        },
        [forwardedRef],
      );

      return (
        <Component
          {...(props as P)}
          ref={setRef}
          style={{ ...props.style, width: below || reduce ? "100%" : width }}
        />
      );
    },
  );
  Wrapped.displayName = `ScrollWidth(${Component.displayName || Component.name || "Element"})`;
  return Wrapped;
}

function findClippingAncestor(node: HTMLElement | null): HTMLElement | null {
  let el = node?.parentElement || null;
  while (el && el !== document.body) {
    const ov = getComputedStyle(el).overflow;
    if (ov === "hidden" || ov === "clip") return el;
    el = el.parentElement;
  }
  return node?.parentElement || null;
}

/**
 * Companion to withScrollWidth: clips overlaid content tightly at the growing background's
 * advancing right edge so foreground colors switch crisply as the wipe progresses.
 */
export function withScrollWidthClip<P extends WrappedProps>(Component: ComponentType<P>) {
  const Wrapped = forwardRef<HTMLElement, P>(
    (props, forwardedRef: ForwardedRef<HTMLElement>) => {
      const ref = useRef<HTMLElement | null>(null);
      const sectionRef = useRef<HTMLElement | null>(null);
      const reduce = Boolean(useReducedMotion());
      const below = useBelow(991);
      const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "start center"],
      });
      const hidden = useMotionValue(0);

      useEffect(() => {
        if (typeof window === "undefined") return;
        let box = { left: 0, width: 0, section: 1 };
        const recompute = () => {
          const p = Math.min(1, Math.max(0, scrollYProgress.get()));
          const bgRight = box.section * (0.1 + 0.9 * p);
          hidden.set(Math.max(0, box.left + box.width - bgRight));
        };
        const measure = () => {
          const el = ref.current;
          const sec = sectionRef.current;
          if (!el || !sec) return;
          const r = el.getBoundingClientRect();
          const sr = sec.getBoundingClientRect();
          box = {
            left: r.left - sr.left,
            width: r.width,
            section: sr.width || 1,
          };
          recompute();
        };
        measure();
        const unsub = scrollYProgress.on("change", recompute);
        const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
        if (ro && ref.current) ro.observe(ref.current);
        if (ro && sectionRef.current) ro.observe(sectionRef.current);
        return () => {
          unsub();
          ro?.disconnect();
        };
      }, [hidden, scrollYProgress]);

      const clipPath = useMotionTemplate`inset(-300px ${hidden}px -300px -300px)`;

      const setRef = useCallback(
        (node: HTMLElement | null) => {
          ref.current = node;
          if (node) sectionRef.current = findClippingAncestor(node);
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) (forwardedRef as MutableRefObject<HTMLElement | null>).current = node;
        },
        [forwardedRef],
      );

      return (
        <Component
          {...(props as P)}
          ref={setRef}
          style={below || reduce ? props.style : { ...props.style, clipPath }}
        />
      );
    },
  );
  Wrapped.displayName = `ScrollWidthClip(${Component.displayName || Component.name || "Element"})`;
  return Wrapped;
}
