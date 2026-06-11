import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DUR, EASE, REVEAL_START, prefersReducedMotion } from "../config";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type RevealImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  /** Class on the clipping wrapper (sizing/aspect lives here to avoid CLS). */
  wrapperClassName?: string;
  wrapperStyle?: React.CSSProperties;
  start?: string;
};

/**
 * RevealImage — clip-path reveal (inset(100% 0 0 0) → inset(0)) with a synced
 * inner scale (1.15 → 1). Give the wrapper an explicit aspect ratio / size so
 * layout is reserved before the image decodes (CLS-safe). Reduced motion shows
 * the image immediately with no clip or scale.
 */
export const RevealImage = ({
  wrapperClassName,
  wrapperStyle,
  className,
  start = REVEAL_START,
  ...imgProps
}: RevealImageProps): JSX.Element => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      const wrap = wrapRef.current;
      const img = imgRef.current;
      if (!wrap || !img) return;
      if (prefersReducedMotion()) {
        gsap.set([wrap, img], { clearProps: "all" });
        return;
      }
      gsap
        .timeline({ scrollTrigger: { trigger: wrap, start, once: true } })
        .fromTo(
          wrap,
          { clipPath: "inset(100% 0 0 0)" },
          { clipPath: "inset(0% 0 0 0)", duration: DUR.slow, ease: EASE.out },
          0,
        )
        .fromTo(img, { scale: 1.15 }, { scale: 1, duration: DUR.slow, ease: EASE.out }, 0);
    },
    { scope: wrapRef },
  );

  return (
    <div
      ref={wrapRef}
      className={wrapperClassName}
      style={{ overflow: "hidden", ...wrapperStyle }}
    >
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img ref={imgRef} className={className} {...imgProps} />
    </div>
  );
};
