import { useRef, createElement } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EASE, REVEAL_START, prefersReducedMotion } from "../config";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type CounterProps = {
  /** Target value to count up to. */
  value: number;
  prefix?: string;
  suffix?: string;
  /** Count duration, seconds. Defaults to 1. */
  duration?: number;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
  start?: string;
};

/**
 * Counter — counts up from 0 to `value` once on scroll-in (snap to integer).
 * Reduced motion renders the final value immediately. The accessible reading is
 * always the final number (aria-label), so SRs never announce intermediate ticks.
 */
export const Counter = ({
  value,
  prefix = "",
  suffix = "",
  duration = 1,
  as = "span",
  className,
  style,
  start = REVEAL_START,
}: CounterProps): JSX.Element => {
  const ref = useRef<HTMLElement>(null);
  const fmt = (n: number) => n.toLocaleString("en-US");
  const label = `${prefix}${fmt(value)}${suffix}`;

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (prefersReducedMotion()) {
        el.textContent = label;
        return;
      }
      const proxy = { v: 0 };
      el.textContent = `${prefix}0${suffix}`;
      gsap.to(proxy, {
        v: value,
        duration,
        ease: EASE.out,
        snap: { v: 1 },
        scrollTrigger: { trigger: el, start, once: true },
        onUpdate: () => {
          el.textContent = `${prefix}${fmt(Math.round(proxy.v))}${suffix}`;
        },
      });
    },
    { scope: ref, dependencies: [value] },
  );

  return createElement(as, { ref, className, style, "aria-label": label }, label);
};
