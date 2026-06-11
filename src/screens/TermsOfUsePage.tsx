import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/ATLAW/Header";
import { Footer } from "../components/ATLAW/Footer";
import { getLenis } from "../motion/SmoothScroll";

/* ────────────────────────────────────────────────────────────────────────────
   ATLAW — Terms of Use
   The quietest page on the site: paper-white throughout except the closing navy
   band, no watermarks/arcs/imagery, typography as the design. Editorial system
   shared with Hero / Global Reach (Fraunces display, Inter UI, antique-gold
   hairline accent #C9A24B).

   Signature move: every section pairs full legal text with a one-line
   "In plain English" gold-marked summary — the summary is set MORE prominently
   than the legalese (the whole point).

   ⚠️ LEGAL SUBSTANCE IS A WORKING DRAFT pending ATLAW attorney review/approval.
   Sections 06–12 ship intentionally-incomplete bracketed clauses, rendered as
   visible "Drafting note" placeholders so they cannot be mistaken for final copy.
   ──────────────────────────────────────────────────────────────────────────── */

const GOLD = "#C9A24B";
const NAVY = "#0B1F3A";
const INK = "#0E1B2C";
const INK_SOFT = "#3A4A63";
const STONE = "#7A7466";

const EMAIL = "info@atlawgroup.com";
// ⚠️ Working draft date — set the real "Last updated" value at publish and
// establish who owns updating it (see pre-ship checklist).
const LAST_UPDATED = "June 12, 2026";

type Section = {
  id: string;
  num: string;
  indexLabel: string; // short label for the index rail + section eyebrow
  title: string; // H2
  summary: string; // "In plain English"
  paragraphs: string[];
  pending?: boolean; // bracketed clauses awaiting final attorney language
};

const sections: Section[] = [
  {
    id: "terms-01",
    num: "01",
    indexLabel: "Acceptance",
    title: "Acceptance of these terms",
    summary:
      "Using this site means you agree to these terms. If you don’t agree, don’t use the site.",
    paragraphs: [
      "By accessing or using atlawgroup.com (the “Site”), you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree, do not use the Site. These terms apply to all visitors and users.",
    ],
  },
  {
    id: "terms-02",
    num: "02",
    indexLabel: "No attorney-client relationship",
    title: "No attorney-client relationship",
    summary:
      "Reading this site, calling us, or sending a message does not make you our client. That only happens when both sides sign an engagement agreement.",
    paragraphs: [
      "Use of this Site, including contacting ATLAW through any form, email, or phone number listed here, does not create an attorney-client relationship. An attorney-client relationship is formed only by a written engagement agreement signed by both you and the firm. Until then, we represent no one by virtue of this Site.",
    ],
  },
  {
    id: "terms-03",
    num: "03",
    indexLabel: "Not legal advice",
    title: "Site content is not legal advice",
    summary:
      "Everything on this site is general information. Your situation is specific. Don’t act on anything here without talking to a lawyer about your facts.",
    paragraphs: [
      "Content on this Site is provided for general informational purposes only and does not constitute legal advice. Laws change and outcomes depend on specific facts. Do not act or refrain from acting based on Site content without obtaining advice from a licensed attorney regarding your particular circumstances.",
    ],
  },
  {
    id: "terms-04",
    num: "04",
    indexLabel: "Confidentiality of submissions",
    title: "Confidentiality of unsolicited submissions",
    summary:
      "Until we’ve agreed to represent you, don’t send us confidential details. Unsolicited information may not be protected and doesn’t prevent us from representing someone else.",
    paragraphs: [
      "Information submitted before an attorney-client relationship exists may not be treated as privileged or confidential, and sending it does not prevent the firm from representing a party adverse to you. Please limit initial communications to general subject matter and contact information; we will tell you when it is appropriate to share details.",
    ],
  },
  {
    id: "terms-05",
    num: "05",
    indexLabel: "Attorney advertising",
    title: "Attorney advertising",
    summary:
      "This website is attorney advertising. Past results don’t guarantee anything about your case.",
    paragraphs: [
      "This Site may be considered attorney advertising under applicable rules of professional conduct. Prior results do not guarantee a similar outcome. Any recognitions or ratings referenced (including Super Lawyers Rising Star) reflect the methodology of the granting organization and are not a promise of results. ATLAW attorneys are licensed in specific jurisdictions; we do not seek to represent anyone in a jurisdiction where this Site fails to comply with applicable rules.",
    ],
  },
  {
    id: "terms-06",
    num: "06",
    indexLabel: "Intellectual property",
    title: "Intellectual property",
    summary:
      "The content, design, and ATLAW name are ours. Read and share links freely; don’t copy or reuse the material commercially.",
    pending: true,
    paragraphs: [
      "Standard IP clause — Site content, trademarks including the ATLAW name and logo, design elements; limited license to view; no reproduction without written consent.",
    ],
  },
  {
    id: "terms-07",
    num: "07",
    indexLabel: "Acceptable use",
    title: "Acceptable use",
    summary:
      "Don’t misuse the site — no scraping, no hacking, no impersonation, no unlawful use.",
    pending: true,
    paragraphs: ["Standard acceptable-use clause."],
  },
  {
    id: "terms-08",
    num: "08",
    indexLabel: "Third-party links",
    title: "Third-party links",
    summary:
      "We link to outside sites sometimes. We don’t control them and aren’t responsible for them.",
    pending: true,
    paragraphs: ["Standard third-party links clause."],
  },
  {
    id: "terms-09",
    num: "09",
    indexLabel: "Disclaimers",
    title: "Disclaimers",
    summary:
      "The site is provided as-is. We work to keep it accurate but can’t warrant that everything is complete, current, or error-free.",
    pending: true,
    paragraphs: ["Standard warranty disclaimer."],
  },
  {
    id: "terms-10",
    num: "10",
    indexLabel: "Limitation of liability",
    title: "Limitation of liability",
    summary:
      "To the extent the law allows, we’re not liable for damages arising from your use of the website itself.",
    pending: true,
    paragraphs: ["Standard limitation clause — attorney to set scope and carve-outs."],
  },
  {
    id: "terms-11",
    num: "11",
    indexLabel: "Governing law",
    title: "Governing law & disputes",
    summary: "Michigan law governs these terms.",
    pending: true,
    paragraphs: [
      "Governing law: Michigan; venue; attorney to confirm dispute-resolution approach.",
    ],
  },
  {
    id: "terms-12",
    num: "12",
    indexLabel: "Changes",
    title: "Changes to these terms",
    summary:
      "If we update these terms, we’ll change the date at the top. Continued use means you accept the update.",
    pending: true,
    paragraphs: ["Standard amendment clause with “Last updated” mechanism."],
  },
  {
    id: "terms-13",
    num: "13",
    indexLabel: "Contact",
    title: "Contact",
    summary: "Questions about these terms? Email us.",
    paragraphs: [
      `Questions regarding these Terms of Use may be directed to ${EMAIL} or ATLAW Group, [address], Detroit, MI.`,
    ],
  },
];

/* ── Motion: fade-up 12px on scroll, honouring prefers-reduced-motion ── */
const useInView = <T extends HTMLElement>(): [React.RefObject<T>, boolean] => {
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

const Reveal = ({
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

const Period = (): JSX.Element => (
  <span aria-hidden="true" style={{ color: GOLD }}>
    .
  </span>
);

const Dot = (): JSX.Element => (
  <span
    aria-hidden="true"
    className="inline-block h-1 w-1 shrink-0 rounded-full"
    style={{ backgroundColor: GOLD }}
  />
);

const LinkIcon = (): JSX.Element => (
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

const ArrowRight = ({ className = "" }: { className?: string }): JSX.Element => (
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

const Chevron = ({ open }: { open: boolean }): JSX.Element => (
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
const scrollToSection = (id: string): void => {
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

/* Scroll-spy: marks the section nearest the top of the viewport as active. */
const useScrollSpy = (ids: string[]): string => {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        const onscreen = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (onscreen[0]) setActive(onscreen[0].target.id);
      },
      { rootMargin: "-18% 0px -72% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
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

const SectionBlock = ({ section }: { section: Section }): JSX.Element => (
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

export const TermsOfUsePage = (): JSX.Element => {
  const ids = sections.map((s) => s.id);
  const active = useScrollSpy(ids);
  const [contentsOpen, setContentsOpen] = useState(false);
  const activeSection = sections.find((s) => s.id === active) ?? sections[0];

  const handleNav = (id: string) => {
    scrollToSection(id);
    setContentsOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#0E1B2C]">
      {/* Print stylesheet — this page gets printed: single column, black on
          white, summaries retained, chrome + decorative numerals dropped. */}
      <style>{`
        @media print {
          header, footer, .terms-no-print { display: none !important; }
          .terms-section-number { display: none !important; }
          .terms-content { max-width: 100% !important; }
          .terms-summary { border-color: #000 !important; }
          .terms-page, .terms-page * { color: #000 !important; background: #fff !important; }
          .terms-page a { text-decoration: underline; }
        }
      `}</style>

      <Header />

      <main className="terms-page">
        {/* ── 01 — HERO (compact, light) ── */}
        <section className="border-b border-[#0E1B2C]/10">
          <div className="mx-auto flex min-h-[46vh] w-full max-w-[1180px] flex-col justify-center px-6 pb-14 pt-20 sm:px-10 md:pt-24 lg:px-16">
            <Reveal>
              <p className="flex items-center gap-4">
                <span aria-hidden="true" className="h-px w-[52px] shrink-0" style={{ backgroundColor: GOLD }} />
                <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.22em] text-[#7A7466]">
                  Legal &mdash; Terms of Use
                </span>
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1
                className="mt-7 font-serifDisplay text-[48px] font-normal leading-[1.02] tracking-[-0.02em] sm:text-[64px] md:text-[76px]"
                style={{ color: INK }}
              >
                Terms of Use
                <Period />
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-[560px] font-serifDisplay text-[19px] leading-[1.6] text-[#3A4A5E] lg:text-[20px]">
                These terms govern your use of atlawgroup.com. We&rsquo;ve written them to be
                read, and added plain-English summaries throughout. The full text controls.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap items-center gap-x-3.5 gap-y-2 font-sans text-[13px] text-[#7A7466]">
                <span>
                  <span className="font-semibold" style={{ color: INK }}>
                    Last updated:
                  </span>{" "}
                  {LAST_UPDATED}
                </span>
                <Dot />
                <span>Reading time: ~6 minutes</span>
                <Dot />
                <span>
                  Questions:{" "}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="font-medium underline underline-offset-2 transition hover:text-[#C9A24B]"
                    style={{ color: INK }}
                  >
                    {EMAIL}
                  </a>
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 02 — MOBILE STICKY CONTENTS ── */}
        <div className="terms-no-print sticky top-[72px] z-40 border-b border-[#0E1B2C]/10 bg-white/95 backdrop-blur lg:hidden">
          <button
            type="button"
            aria-expanded={contentsOpen}
            aria-controls="terms-contents-mobile"
            onClick={() => setContentsOpen((v) => !v)}
            className="flex w-full items-center justify-between px-6 py-3.5 sm:px-10"
          >
            <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.2em] text-[#7A7466]">
              Contents
            </span>
            <span className="flex items-center gap-2 font-sans text-[13px] font-medium" style={{ color: INK }}>
              <span style={{ color: GOLD }}>{activeSection.num}</span>
              {activeSection.indexLabel}
              <Chevron open={contentsOpen} />
            </span>
          </button>
          {contentsOpen && (
            <nav
              id="terms-contents-mobile"
              aria-label="Terms sections"
              className="max-h-[60vh] overflow-y-auto border-t border-[#0E1B2C]/10 px-6 py-3 sm:px-10"
            >
              <ul className="flex flex-col">
                {sections.map((s) => {
                  const isActive = s.id === active;
                  return (
                    <li key={s.id}>
                      <button
                        type="button"
                        onClick={() => handleNav(s.id)}
                        aria-current={isActive ? "true" : undefined}
                        className="flex w-full items-center gap-3 py-2.5 text-left font-sans text-[14px] transition-colors focus-visible:outline-none"
                        style={{ color: isActive ? GOLD : INK_SOFT }}
                      >
                        <span className="w-6 shrink-0 tabular-nums text-[12px]" style={{ color: isActive ? GOLD : STONE }}>
                          {s.num}
                        </span>
                        {s.indexLabel}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}
        </div>

        {/* ── 03 — TWO-COLUMN: sticky index rail + content ── */}
        <div className="mx-auto w-full max-w-[1180px] px-6 py-16 sm:px-10 md:py-20 lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-x-16 lg:px-16">
          {/* Desktop index rail */}
          <aside className="terms-no-print hidden lg:block">
            <nav aria-label="Terms sections" className="sticky top-[112px]">
              <p className="mb-5 font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7A7466]">
                Contents
              </p>
              <ul className="flex flex-col gap-0.5">
                {sections.map((s) => {
                  const isActive = s.id === active;
                  return (
                    <li key={s.id}>
                      <button
                        type="button"
                        onClick={() => handleNav(s.id)}
                        aria-current={isActive ? "true" : undefined}
                        className="group flex w-full items-baseline gap-3 rounded-sm py-1.5 text-left font-sans text-[13.5px] leading-[1.35] transition-colors duration-200 focus-visible:outline-none focus-visible:text-[#C9A24B]"
                        style={{ color: isActive ? GOLD : STONE }}
                      >
                        <span
                          className="w-5 shrink-0 tabular-nums text-[11.5px] transition-colors"
                          style={{ color: isActive ? GOLD : "rgba(122,116,102,0.6)" }}
                        >
                          {s.num}
                        </span>
                        <span className={`transition-colors duration-200 ${isActive ? "" : "group-hover:text-[#0E1B2C]"}`}>
                          {s.indexLabel}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          {/* Content column — 720px measure for legal-text readability */}
          <div className="terms-content max-w-[720px]">
            {sections.map((section) => (
              <SectionBlock key={section.id} section={section} />
            ))}
          </div>
        </div>

        {/* ── 04 — CLOSING BAND (navy, compact) ── */}
        <section
          className="relative isolate overflow-hidden"
          style={{ backgroundColor: NAVY }}
          aria-labelledby="terms-closing-heading"
        >
          <div className="mx-auto w-full max-w-[1180px] px-6 py-20 text-center sm:px-10 md:py-24 lg:px-16">
            <Reveal>
              <h2
                id="terms-closing-heading"
                className="mx-auto max-w-[16ch] font-serifDisplay text-[34px] font-normal leading-[1.08] tracking-[-0.015em] text-white sm:text-[44px]"
              >
                Have an actual legal question
                <Period />
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mx-auto mt-5 max-w-[480px] font-serifDisplay text-[18px] leading-[1.6] text-white/70">
                That&rsquo;s the part we&rsquo;re good at. The first 30 minutes are free.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-9 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-7">
                <Link
                  to="/contact"
                  className="group inline-flex h-[54px] items-center justify-center gap-2.5 rounded-full bg-white px-9 font-sans text-[15px] font-medium text-[#0B1F3A] transition-all duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.30)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A24B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1F3A]"
                >
                  Talk to a lawyer
                  <ArrowRight className="group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/privacy"
                  className="group inline-flex items-center font-sans text-[14px] font-medium text-white/80 transition hover:text-[#C9A24B] focus-visible:outline-none focus-visible:text-[#C9A24B]"
                >
                  Read our Privacy Policy
                  <ArrowRight className="ml-1.5 group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
