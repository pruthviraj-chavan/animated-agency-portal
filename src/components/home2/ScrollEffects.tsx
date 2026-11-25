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
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionStyle,
  type MotionValue,
} from "framer-motion";

type Range = "through" | "center" | "fly";
type WrappedProps = { style?: MotionStyle; [key: string]: any };
type ProgressRef = MutableRefObject<HTMLElement | null>;

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
      const value = range === "center"
        ? (viewportHeight - rect.top) / (viewportHeight * 0.5)
        : range === "fly"
          ? (viewportHeight - rect.top) / (viewportHeight * 0.55)
          : (viewportHeight - rect.top) / (viewportHeight + rect.height);
      return Math.min(1, Math.max(0, value));
    };

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
  teamScale: MotionValue<number>;
  teamY: MotionValue<number>;
  floatUp: MotionValue<number>;
  floatDown: MotionValue<number>;
  flyLeftX: MotionValue<number>;
  flyRightX: MotionValue<number>;
  flyLeftY: MotionValue<number>;
  flyRightY: MotionValue<number>;
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
    teamScale: useTransform(progress, [0, 1], [1, 0.8]),
    teamY: useTransform(progress, [0, 1], [-30, 30]),
    floatUp: useTransform(progress, [0, 1], [50, -50]),
    floatDown: useTransform(progress, [0, 1], [-50, 50]),
    flyLeftX: useTransform(progress, [0, 1], [160, 0]),
    flyRightX: useTransform(progress, [0, 1], [-180, 0]),
    flyLeftY: useTransform(progress, [0, 1], [-320, 0]),
    flyRightY: useTransform(progress, [0, 1], [-320, 0]),
    flyLeftRotateZ: useTransform(progress, [0, 1], [-18, 0]),
    flyRightRotateZ: useTransform(progress, [0, 1], [14, 0]),
    flyLeftRotateY: useTransform(progress, [0, 1], [40, 0]),
    flyRightRotateY: useTransform(progress, [0, 1], [-40, 0]),
    flyScale: useTransform(progress, [0, 1], [0.55, 1]),
    flyOpacity: useTransform(progress, [0, 0.25], [0, 1]),
  };
}

function withScrollStyle(
  Component: ComponentType<any>,
  range: Range,
  selectStyle: (styles: ScrollStyles, below: boolean, reduce: boolean) => MotionStyle,
) {
  const Wrapped = forwardRef<HTMLElement, WrappedProps>((props, forwardedRef: ForwardedRef<HTMLElement>) => {
    const elementRef = useRef<HTMLElement | null>(null);
    const progress = useScrollProgress(elementRef, range);
    const below = useBelow(991);
    const reduce = Boolean(useReducedMotion());
    const styles = useScrollStyles(progress);
    const style = selectStyle(styles, below, reduce);
    const setRef = useCallback((element: HTMLElement | null) => {
      elementRef.current = element;
      if (typeof forwardedRef === "function") forwardedRef(element);
      else if (forwardedRef) (forwardedRef as MutableRefObject<HTMLElement | null>).current = element;
    }, [forwardedRef]);

    return <Component {...props} ref={setRef} style={{ ...props.style, ...style }} />;
  });
  Wrapped.displayName = `ScrollEffect(${Component.displayName || Component.name || "Element"})`;
  return Wrapped;
}

const REST: MotionStyle = { x: 0, y: 0, rotateZ: 0, rotateY: 0, scale: 1, opacity: 1 };

export const withScaleUp = (Component: ComponentType<any>) =>
  withScrollStyle(Component, "through", (styles, _below, reduce) => ({
    scale: reduce ? 1 : styles.scaleUp,
  }));

export const withDriftX = (Component: ComponentType<any>) =>
  withScrollStyle(Component, "through", (styles, _below, reduce) => ({
    x: reduce ? 0 : styles.driftX,
  }));

export const withWidthGrow = (Component: ComponentType<any>) =>
  withScrollStyle(Component, "center", (styles, below, reduce) => ({
    width: below || reduce ? "100%" : styles.widthGrow,
  }));

export const withTeamSide = (Component: ComponentType<any>) =>
  withScrollStyle(Component, "through", (styles, _below, reduce) => reduce
    ? REST
    : {
      scale: styles.teamScale,
      y: styles.teamY,
    });

export const withTeamMiddle = (Component: ComponentType<any>) =>
  withScrollStyle(Component, "through", (styles, _below, reduce) => ({
    scale: reduce ? 1 : styles.teamScale,
  }));

export const withFloatUp = (Component: ComponentType<any>) =>
  withScrollStyle(Component, "through", (styles, below, reduce) => ({
    y: below || reduce ? 0 : styles.floatUp,
  }));

export const withFloatDown = (Component: ComponentType<any>) =>
  withScrollStyle(Component, "through", (styles, below, reduce) => ({
    y: below || reduce ? 0 : styles.floatDown,
  }));

export const withFlyInLeft = (Component: ComponentType<any>) =>
  withScrollStyle(Component, "fly", (styles, below, reduce) =>
    below || reduce ? REST : {
      x: styles.flyLeftX,
      y: styles.flyLeftY,
      rotateZ: styles.flyLeftRotateZ,
      rotateY: styles.flyLeftRotateY,
      scale: styles.flyScale,
      opacity: styles.flyOpacity,
      transformPerspective: 1200,
    });

export const withFlyInRight = (Component: ComponentType<any>) =>
  withScrollStyle(Component, "fly", (styles, below, reduce) =>
    below || reduce ? REST : {
      x: styles.flyRightX,
      y: styles.flyRightY,
      rotateZ: styles.flyRightRotateZ,
      rotateY: styles.flyRightRotateY,
      scale: styles.flyScale,
      opacity: styles.flyOpacity,
      transformPerspective: 1200,
    });

export function withHideWhileScrolling(Component: ComponentType<any>) {
  const Wrapped = forwardRef<HTMLElement, WrappedProps>((props, forwardedRef: ForwardedRef<HTMLElement>) => {
    const opacity = useMotionValue(1);
    const y = useMotionValue(0);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
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
        {...props}
        ref={forwardedRef}
        style={{ ...props.style, opacity, y, pointerEvents: hidden ? "none" : undefined }}
      />
    );
  });
  Wrapped.displayName = `HideWhileScrolling(${Component.displayName || Component.name || "Element"})`;
  return Wrapped;
}