import { useRef, createElement } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "../config";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ParallaxProps = {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
  /** Start yPercent. Defaults to -8. */
  from?: number;
  /** End yPercent. Defaults to 8. */
  to?: number;
};

/**
 * Parallax — scrubbed vertical drift across the element's scroll span. Built for
 * the giant dark-section serif watermarks: slow, barely conscious. Distances
 * halve on mobile and the effect is disabled entirely under reduced motion.
 */
export const Parallax = ({
  children,
  as = "div",
  className,
  style,
  from = -8,
  to = 8,
}: ParallaxProps): JSX.Element => {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;
      const mobile = window.matchMedia("(max-width: 767px)").matches;
      const scale = mobile ? 0.5 : 1;
      gsap.fromTo(
        el,
        { yPercent: from * scale },
        {
          yPercent: to * scale,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        },
      );
    },
    { scope: ref },
  );

  return createElement(as, { ref, className, style }, children);
};
