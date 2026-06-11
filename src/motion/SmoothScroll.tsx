import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "./config";

gsap.registerPlugin(ScrollTrigger);

// Expose the active Lenis instance so leaf components (e.g. a "back to top"
// button) can call lenis.scrollTo without prop-drilling through the SPA.
let lenisInstance: Lenis | null = null;
export const getLenis = (): Lenis | null => lenisInstance;

/**
 * SmoothScroll — mounts once at the app root (around the Router in index.tsx).
 *
 * Drives Lenis from GSAP's ticker so smooth scrolling and ScrollTrigger share a
 * single clock (no double-RAF jitter). When the user prefers reduced motion we
 * skip Lenis entirely: native scroll, instant content, no smoothing.
 *
 * Renders its children untouched — it is a behavioural wrapper, not a layout one.
 */
export const SmoothScroll = ({ children }: { children: React.ReactNode }): JSX.Element => {
  useEffect(() => {
    // Reduced motion → no Lenis. ScrollTrigger still works on native scroll;
    // the reveal primitives independently collapse to instant fades.
    if (prefersReducedMotion()) {
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      // Mobile keeps smoothing but a touch looser so flick-scrolls feel native.
      smoothWheel: true,
    });
    lenisInstance = lenis;

    // Keep ScrollTrigger in lockstep with Lenis' virtual scroll position.
    lenis.on("scroll", ScrollTrigger.update);

    const onTick = (time: number) => {
      // gsap.ticker is in seconds; Lenis wants milliseconds.
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(onTick);
    // Let GSAP own the frame loop; disable its internal lag smoothing so scroll
    // velocity stays accurate under CPU throttle.
    gsap.ticker.lagSmoothing(0);

    // Recalculate trigger positions once everything (incl. fonts/images) settles.
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(onTick);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return <>{children}</>;
};
