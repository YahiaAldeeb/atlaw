import { useEffect, useRef, useState } from "react";
import { getLenis } from "../motion/SmoothScroll";
import { EMAIL, type Section } from "../data/legal/terms";

/* ────────────────────────────────────────────────────────────────────────────
   ATLAW — Terms of Use — presentational primitives
   Self-contained motion + icon components and the per-section block, extracted
   from the screen verbatim (rendered markup unchanged). Shares the antique-gold
   accent #C9A24B.
   ──────────────────────────────────────────────────────────────────────────── */

const GOLD = "#C9A24B";
const INK = "#0E1B2C";
const INK_SOFT = "#3A4A63";
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

/* Smooth-scroll to a section, accounting for the sticky header. Uses the shared
   Lenis instance when present; falls back to native smooth scroll (reduced
   motion / Lenis off). */
export const scrollToSection = (id: string): void => {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(el, { offset: -100 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
  if (typeof window !== "undefined" && window.history?.replaceState) {
    window.history.replaceState(null, "", `#${id}`);
  }
};

/* Linkify the firm email inside a legal paragraph. */
const renderParagraph = (text: string): React.ReactNode => {
  const parts = text.split(EMAIL);
  if (parts.length === 1) return text;
  return parts.map((part, i) => (
    <span key={i}>
      {i > 0 && (
        <a
          href={`mailto:${EMAIL}`}
          className="font-medium underline underline-offset-2 transition hover:text-[#C9A24B]"
          style={{ color: INK }}
        >
          {EMAIL}
        </a>
      )}
      {part}
    </span>
  ));
};

export const SectionBlock = ({ section }: { section: Section }): JSX.Element => (
  <section
    id={section.id}
    aria-labelledby={`${section.id}-heading`}
    className="scroll-mt-[112px] border-t border-[#0E1B2C]/10 py-11 first:border-t-0 first:pt-0 lg:py-14"
  >
    <Reveal>
      {/* numbered eyebrow */}
      <p className="flex items-center gap-4">
        <span aria-hidden="true" className="h-px w-[40px] shrink-0" style={{ backgroundColor: GOLD }} />
        <span className="font-sans text-[11.5px] font-semibold uppercase tracking-[0.22em] text-[#7A7466]">
          <span style={{ color: GOLD }}>{section.num}</span> &mdash; {section.indexLabel}
        </span>
      </p>

      {/* H2 with oversized low-opacity number behind it + hover anchor */}
      <div className="relative mt-4">
        <span
          aria-hidden="true"
          className="terms-section-number pointer-events-none absolute -left-1 -top-8 select-none font-serifDisplay text-[64px] font-normal leading-none text-[#0E1B2C]/[0.05]"
        >
          {section.num}
        </span>
        <h2
          id={`${section.id}-heading`}
          className="group relative flex items-center font-serifDisplay text-[26px] font-normal leading-[1.12] tracking-[-0.015em] sm:text-[30px]"
          style={{ color: INK }}
        >
          {section.title}
          <Period />
          <a
            href={`#${section.id}`}
            aria-label={`Link to “${section.title}”`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(section.id);
            }}
            className="ml-3 inline-flex text-[#7A7466] opacity-0 transition-opacity duration-150 hover:text-[#C9A24B] focus-visible:opacity-100 focus-visible:outline-none group-hover:opacity-100"
          >
            <LinkIcon />
          </a>
        </h2>
      </div>

      {/* "In plain English" — the summary is set MORE prominently than the legalese */}
      <div className="terms-summary my-6 border-l-2 pl-4" style={{ borderColor: GOLD }}>
        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: GOLD }}>
          In plain English
        </p>
        <p
          className="mt-2 font-serifDisplay text-[18px] italic leading-[1.55]"
          style={{ color: INK }}
        >
          {section.summary}
        </p>
        <p className="mt-2 font-sans text-[12px] not-italic leading-[1.5] text-[#7A7466]">
          A convenience summary, not a substitute for the full text below.
        </p>
      </div>

      {/* full legal text */}
      <div className="space-y-4">
        {section.paragraphs.map((para, i) =>
          section.pending ? (
            <p
              key={i}
              className="rounded-md border border-dashed px-4 py-3 font-sans text-[14px] leading-[1.6]"
              style={{ borderColor: "rgba(201,162,75,0.55)", backgroundColor: "rgba(201,162,75,0.06)", color: STONE }}
            >
              <span
                className="mr-2 inline-block font-semibold uppercase tracking-[0.16em]"
                style={{ color: GOLD, fontSize: "10.5px" }}
              >
                Drafting note
              </span>
              {para}
            </p>
          ) : (
            <p
              key={i}
              className="font-serifDisplay text-[16px] leading-[1.65]"
              style={{ color: INK_SOFT }}
            >
              {renderParagraph(para)}
            </p>
          )
        )}
      </div>
    </Reveal>
  </section>
);
