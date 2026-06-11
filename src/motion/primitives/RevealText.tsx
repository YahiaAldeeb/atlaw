import { useRef, createElement } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { DUR, EASE, STAGGER, REVEAL_START, prefersReducedMotion } from "../config";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type RevealTextProps = React.HTMLAttributes<HTMLElement> & {
  /** Heading content. May include inline markup (e.g. a gold-period span) —
   *  split-type preserves nested elements while splitting the text. */
  children: React.ReactNode;
  /** Element to render. Defaults to a heading-friendly h2. */
  as?: keyof JSX.IntrinsicElements;
  /** ScrollTrigger start. Defaults to "top 85%". */
  start?: string;
  /** Delay before the first line begins, seconds. */
  delay?: number;
};

/**
 * RevealText — the signature move. Splits a headline into LINES, masks each line
 * behind an overflow-hidden wrapper, and rises them in (yPercent 110→0 + a 2°
 * settle) on scroll-in, once.
 *
 * Robustness:
 *  • Re-splits on document.fonts.ready and on debounced resize so line breaks
 *    never end up wrong (the classic split-text bug).
 *  • The host element keeps an aria-label with the full sentence and its split
 *    children are aria-hidden, so screen readers read clean prose.
 *  • Reduced motion → text is shown immediately, never split.
 *
 * Only pass a plain string as children — splitting requires raw text.
 */
export const RevealText = ({
  children,
  as = "h2",
  start = REVEAL_START,
  delay = 0,
  ...rest
}: RevealTextProps): JSX.Element => {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      // Screen readers read this clean sentence, not the fragmented spans.
      const sentence = el.textContent ?? "";
      el.setAttribute("aria-label", sentence);

      if (prefersReducedMotion()) {
        gsap.set(el, { autoAlpha: 1 });
        return;
      }

      // Preserve the pristine markup so every re-split starts from clean text
      // (SplitType.revert leaves our mask wrappers behind otherwise).
      const original = el.innerHTML;
      let split: SplitType | null = null;
      let st: ScrollTrigger | null = null;

      const build = () => {
        st?.kill();
        split?.revert();
        el.innerHTML = original;

        split = new SplitType(el, { types: "lines" });
        const lines = split.lines ?? [];

        // Wrap each line in an overflow-hidden mask so the rise is clipped.
        lines.forEach((line) => {
          line.setAttribute("aria-hidden", "true");
          const mask = document.createElement("span");
          mask.style.display = "block";
          mask.style.overflow = "hidden";
          line.parentNode?.insertBefore(mask, line);
          mask.appendChild(line);
        });

        gsap.set(el, { autoAlpha: 1 });
        const tween = gsap.from(lines, {
          yPercent: 110,
          rotate: 2,
          duration: DUR.base,
          ease: EASE.text,
          stagger: STAGGER.lines,
          delay,
          willChange: "transform",
          scrollTrigger: { trigger: el, start, once: true },
          onComplete: () => gsap.set(lines, { willChange: "auto" }),
        });
        st = tween.scrollTrigger ?? null;
      };

      build();

      // Re-split once webfonts swap in (line breaks depend on final metrics).
      let cancelled = false;
      document.fonts?.ready.then(() => {
        if (!cancelled) build();
      });

      // Re-split on resize, debounced.
      let t: number | undefined;
      const onResize = () => {
        window.clearTimeout(t);
        t = window.setTimeout(build, 200);
      };
      window.addEventListener("resize", onResize);

      return () => {
        cancelled = true;
        window.clearTimeout(t);
        window.removeEventListener("resize", onResize);
        split?.revert();
        el.innerHTML = original;
      };
    },
    { scope: ref },
  );

  // aria-label is applied in the effect from textContent; until then the raw
  // children are readable, so screen readers and no-JS users see clean text.
  return createElement(as, { ref, ...rest }, children);
};
