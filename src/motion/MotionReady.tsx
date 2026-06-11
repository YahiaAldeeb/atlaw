import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * MotionReady — keeps ScrollTrigger positions honest. Mount once INSIDE the
 * Router (it reads useLocation).
 *
 *  • On first mount: refresh after fonts and the window load event, so triggers
 *    aren't measured before late images/fonts shift layout.
 *  • On every route change: refresh after the new page has painted (double rAF),
 *    so downpage triggers on the navigated-to page are positioned correctly.
 *
 * useGSAP scoping in the primitives already kills triggers from unmounted
 * components; this only re-measures the survivors + new arrivals.
 */
export const MotionReady = (): null => {
  const { pathname } = useLocation();

  // First-mount: late-asset refreshes.
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);
    return () => window.removeEventListener("load", refresh);
  }, []);

  // Route change: refresh once the new content is on screen.
  useEffect(() => {
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => ScrollTrigger.refresh());
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [pathname]);

  return null;
};
