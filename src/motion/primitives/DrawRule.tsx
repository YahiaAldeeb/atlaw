import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DUR, EASE, REVEAL_START, REVEAL_TOGGLE, prefersReducedMotion } from "../config";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type DrawRuleProps = {
  className?: string;
  style?: React.CSSProperties;
  /** Origin the rule draws from. Defaults to "left". */
  origin?: "left" | "center" | "right";
  delay?: number;
  start?: string;
  "aria-hidden"?: boolean;
};

/**
 * DrawRule — a hairline / gold rule that draws in (scaleX 0→1) on scroll-in.
 * Renders the rule element itself (style its size/colour via className).
 */
export const DrawRule = ({
  className,
  style,
  origin = "left",
  delay = 0,
  start = REVEAL_START,
  "aria-hidden": ariaHidden = true,
}: DrawRuleProps): JSX.Element => {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const reduced = prefersReducedMotion();
      const transformOrigin =
        origin === "center" ? "center" : origin === "right" ? "right center" : "left center";
      gsap.from(el, {
        scaleX: 0,
        transformOrigin,
        duration: reduced ? 0.01 : DUR.base,
        ease: EASE.out,
        delay: reduced ? 0 : delay,
        scrollTrigger: { trigger: el, start, once: true, toggleActions: REVEAL_TOGGLE },
      });
    },
    { scope: ref },
  );

  return <span ref={ref} className={className} style={style} aria-hidden={ariaHidden} />;
};
