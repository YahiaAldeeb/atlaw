import { getLenis } from "../../motion/SmoothScroll";
import { EMAIL, type Section } from "../../data/legal/privacy";
import { DraftingNote, LinkIcon, Period, Reveal } from "./privacyPrimitives";

/* ────────────────────────────────────────────────────────────────────────────
   ATLAW — Privacy Policy section renderer

   The per-section block plus its scroll/linkify helpers, extracted verbatim
   from PrivacyPolicyPage.tsx. The screen keeps the scroll-spy hook and the
   page layout; this module renders one section from the content data.
   ──────────────────────────────────────────────────────────────────────────── */

const GOLD = "#C9A24B";
const INK = "#0E1B2C";
const INK_SOFT = "#3A4A63";

/* Smooth-scroll to a section, accounting for the sticky header. Uses the shared
   Lenis instance when present; falls back to native smooth scroll. */
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
          className="privacy-section-number pointer-events-none absolute -left-1 -top-8 select-none font-serifDisplay text-[64px] font-normal leading-none text-[#0E1B2C]/[0.05]"
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
      <div className="privacy-summary my-6 border-l-2 pl-4" style={{ borderColor: GOLD }}>
        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: GOLD }}>
          In plain English
        </p>
        <p className="mt-2 font-serifDisplay text-[18px] italic leading-[1.55]" style={{ color: INK }}>
          {section.summaryNode ?? section.summary}
        </p>
        <p className="mt-2 font-sans text-[12px] not-italic leading-[1.5] text-[#7A7466]">
          A convenience summary, not a substitute for the full text below.
        </p>
      </div>

      {/* full legal text */}
      {section.body ? (
        section.body
      ) : (
        <div className="space-y-4">
          {section.paragraphs.map((para, i) =>
            section.pending ? (
              <DraftingNote key={i}>{para}</DraftingNote>
            ) : (
              <p key={i} className="font-serifDisplay text-[16px] leading-[1.65]" style={{ color: INK_SOFT }}>
                {renderParagraph(para)}
              </p>
            )
          )}
        </div>
      )}
    </Reveal>
  </section>
);
