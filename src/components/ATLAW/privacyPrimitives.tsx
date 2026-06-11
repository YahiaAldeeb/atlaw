import { useEffect, useRef, useState } from "react";

/* ────────────────────────────────────────────────────────────────────────────
   ATLAW — Privacy Policy presentation primitives

   Motion, decorative marks, and inline icons extracted verbatim from
   PrivacyPolicyPage.tsx so the screen stays under the line cap. Behaviour and
   markup are unchanged; the page owns its layout JSX and content.
   ──────────────────────────────────────────────────────────────────────────── */

const GOLD = "#C9A24B";
const STONE = "#7A7466";

/* ── Motion: fade-up 12px on scroll, honouring prefers-reduced-motion ── */
export const useInView = <T extends HTMLElement>(): [React.RefObject<T>, boolean] => {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node || typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
};

export const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}): JSX.Element => {
  const [ref, visible] = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`transition-all duration-[600ms] ease-out motion-reduce:transform-none motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
};

export const Period = (): JSX.Element => (
  <span aria-hidden="true" style={{ color: GOLD }}>
    .
  </span>
);

export const Dot = (): JSX.Element => (
  <span
    aria-hidden="true"
    className="inline-block h-1 w-1 shrink-0 rounded-full"
    style={{ backgroundColor: GOLD }}
  />
);

export const LinkIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="h-[15px] w-[15px]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const ArrowRight = ({ className = "" }: { className?: string }): JSX.Element => (
  <svg
    aria-hidden="true"
    className={`h-[14px] w-[14px] transition-transform duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
  </svg>
);

export const Chevron = ({ open }: { open: boolean }): JSX.Element => (
  <svg
    aria-hidden="true"
    className={`h-3 w-3 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
);

/* Visible placeholder for clauses whose final language is pending attorney /
   developer-audit input — never mistakable for final copy. */
export const DraftingNote = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <p
    className="rounded-md border border-dashed px-4 py-3 font-sans text-[14px] leading-[1.6]"
    style={{
      borderColor: "rgba(201,162,75,0.55)",
      backgroundColor: "rgba(201,162,75,0.06)",
      color: STONE,
    }}
  >
    <span
      className="mr-2 inline-block font-semibold uppercase tracking-[0.16em]"
      style={{ color: GOLD, fontSize: "10.5px" }}
    >
      Drafting note
    </span>
    {children}
  </p>
);
