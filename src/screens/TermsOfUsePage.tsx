import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/ATLAW/Header";
import { Footer } from "../components/ATLAW/Footer";
import { PageMeta } from "../components/ATLAW/PageMeta";
import { EMAIL, LAST_UPDATED, sections } from "../data/legal/terms";
import {
  ArrowRight,
  Chevron,
  Dot,
  Period,
  Reveal,
  SectionBlock,
  scrollToSection,
} from "./TermsOfUsePage.ui";

/* ────────────────────────────────────────────────────────────────────────────
   ATLAW — Terms of Use
   The quietest page on the site: paper-white throughout except the closing navy
   band, no watermarks/arcs/imagery, typography as the design. Editorial system
   shared with Hero / Global Reach (Fraunces display, Inter UI, antique-gold
   hairline accent #C9A24B).

   Signature move: every section pairs full legal text with a one-line
   "In plain English" gold-marked summary — the summary is set MORE prominently
   than the legalese (the whole point). Content data lives in
   ../data/legal/terms.

   ⚠️ LEGAL SUBSTANCE IS A WORKING DRAFT pending ATLAW attorney review/approval.
   Sections 06–12 ship intentionally-incomplete bracketed clauses, rendered as
   visible "Drafting note" placeholders so they cannot be mistaken for final copy.
   ──────────────────────────────────────────────────────────────────────────── */

const GOLD = "#C9A24B";
const NAVY = "#0B1F3A";
const INK = "#0E1B2C";
const INK_SOFT = "#3A4A63";
const STONE = "#7A7466";

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
      <PageMeta
        title="Terms of Use | ATLAW — Dearborn Personal Injury Lawyers"
        description="ATLAW terms of use. Review the terms and conditions governing your use of the ATLAW website."
        canonical="/terms"
      />
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
