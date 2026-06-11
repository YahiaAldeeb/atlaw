import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { prefersReducedMotion } from "../config";

gsap.registerPlugin(useGSAP);

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  /** Max horizontal pull, px. Defaults to 6. */
  maxX?: number;
  /** Max vertical pull, px. Defaults to 4. */
  maxY?: number;
};

/**
 * MagneticButton — wraps a CTA in an inline-block span that drifts toward the
 * cursor (max 6×4px) when the pointer is within 1.4× the button bounds, then
 * springs back with elastic ease on leave. Desktop fine-pointer only; disabled
 * under reduced motion. No colour change — purely positional (keeps the navy
 * pills navy, per the design system).
 */
export const MagneticButton = ({
  children,
  className,
  maxX = 6,
  maxY = 4,
}: MagneticButtonProps): JSX.Element => {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (prefersReducedMotion() || !window.matchMedia("(pointer: fine)").matches) return;

      const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3.out" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3.out" });

      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        // Only pull while within 1.4× the bounds (a soft magnetic field).
        if (Math.abs(dx) > r.width * 0.7 || Math.abs(dy) > r.height * 0.7) {
          xTo(0);
          yTo(0);
          return;
        }
        xTo(gsap.utils.clamp(-maxX, maxX, (dx / (r.width / 2)) * maxX));
        yTo(gsap.utils.clamp(-maxY, maxY, (dy / (r.height / 2)) * maxY));
      };

      const onLeave = () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" });
      };

      window.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
      return () => {
        window.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
      };
    },
    { scope: ref },
  );

  return (
    <span ref={ref} className={className} style={{ display: "inline-block", willChange: "transform" }}>
      {children}
    </span>
  );
};
