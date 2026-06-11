import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DUR, EASE, STAGGER, REVEAL_START, prefersReducedMotion } from "./config";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export type RevealVariant =
  | "fade-up" // single block / paragraph: opacity + 16px rise
  | "rule" // hairline divider / gold rule: scaleX 0→1 from left
  | "stagger"; // direct children stagger up (grids, lists)

type RevealOptions = {
  /** Delay before the tween starts, seconds. */
  delay?: number;
  /** Override the ScrollTrigger start. Defaults to "top 80%". */
  start?: string;
  /** For "stagger": amount between children. Defaults to STAGGER.items. */
  stagger?: number;
};

/**
 * useReveal — reusable scroll-in reveal. Attach the returned ref to the element
 * you want revealed. Plays once. Honours reduced motion by snapping to the final
 * state instantly. All ScrollTriggers are created inside useGSAP's scope, so they
 * are cleaned up automatically on unmount / route change (zero leaks).
 */
export const useReveal = <T extends HTMLElement = HTMLDivElement>(
  variant: RevealVariant = "fade-up",
  options: RevealOptions = {},
) => {
  const ref = useRef<T>(null);
  const { delay = 0, start = REVEAL_START, stagger = STAGGER.items } = options;

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const reduced = prefersReducedMotion();
      const trigger = { trigger: el, start, once: true } as const;

      if (variant === "rule") {
        gsap.fromTo(
          el,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            duration: reduced ? 0.01 : DUR.base,
            ease: EASE.out,
            delay,
            scrollTrigger: trigger,
          },
        );
        return;
      }

      if (variant === "stagger") {
        gsap.fromTo(
          Array.from(el.children),
          { autoAlpha: 0, y: reduced ? 0 : 16 },
          {
            autoAlpha: 1,
            y: 0,
            duration: reduced ? 0.01 : DUR.base,
            ease: EASE.out,
            stagger: reduced ? 0 : stagger,
            delay,
            scrollTrigger: trigger,
          },
        );
        return;
      }

      // "fade-up"
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: reduced ? 0 : 16 },
        {
          autoAlpha: 1,
          y: 0,
          duration: reduced ? 0.01 : DUR.base,
          ease: EASE.out,
          delay,
          scrollTrigger: trigger,
        },
      );
    },
    { scope: ref },
  );

  return ref;
};
