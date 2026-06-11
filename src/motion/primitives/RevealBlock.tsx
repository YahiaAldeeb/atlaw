import { useRef, createElement } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DUR, EASE, REVEAL_START, REVEAL_TOGGLE, prefersReducedMotion } from "../config";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type RevealBlockProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  /** Distance to rise, px. Defaults to 16. */
  y?: number;
  delay?: number;
  start?: string;
};

/**
 * RevealBlock — the workhorse single-element fade-up (16px). Use for body
 * paragraphs, eyebrows, CTA rows, anything that should NOT be line-split.
 * The hidden initial state comes from gsap.from inside the effect (never a bare
 * CSS class) so content stays visible if JS fails. Honours reduced motion.
 */
export const RevealBlock = ({
  children,
  as = "div",
  y = 16,
  delay = 0,
  start = REVEAL_START,
  ...rest
}: RevealBlockProps): JSX.Element => {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const reduced = prefersReducedMotion();
      gsap.from(el, {
        autoAlpha: 0,
        y: reduced ? 0 : y,
        duration: reduced ? 0.01 : DUR.base,
        ease: EASE.out,
        delay: reduced ? 0 : delay,
        scrollTrigger: { trigger: el, start, once: true, toggleActions: REVEAL_TOGGLE },
      });
    },
    { scope: ref },
  );

  return createElement(as, { ref, ...rest }, children);
};
