import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/ATLAW/Header";
import { Footer } from "../components/ATLAW/Footer";
import { EMAIL, LAST_UPDATED, sections } from "../data/legal/privacy";
import { ArrowRight, Chevron, Dot, Period, Reveal } from "../components/ATLAW/privacyPrimitives";
import { SectionBlock, scrollToSection } from "../components/ATLAW/privacySection";

/* ────────────────────────────────────────────────────────────────────────────
   ATLAW — Privacy Policy
   The design twin of the Terms of Use page: same layout system, sticky index
   rail, 720px measure, gold "In plain English" callouts set larger than the
   legal text, single fade-up motion, print stylesheet. Editorial system shared
   with Hero / Global Reach (Fraunces display, Inter UI, antique-gold #C9A24B).

   Ordered by reader anxiety, not legal convention: "What you send us" leads,
   because most readers are about to submit something sensitive through a form.

   Three elements unique to this page (per the brief):
     1. Hero trust line — "We do not sell your personal information…" set apart
        with a short gold rule. It is the page's thesis; it gets air.
     2. Cookie table (05) — the only table on the site: hairline rules, no zebra.
     3. Cross-links to the Terms page render with a gold ¶ mark so legal
        cross-references read differently from ordinary links.

   ⚠️ LEGAL SUBSTANCE IS A WORKING DRAFT pending ATLAW attorney review/approval.
   Sections 02–11 ship intentionally-incomplete bracketed clauses as visible
   "Drafting note" placeholders. Sections 02, 05, and 09 must be written FROM a
   developer audit of what actually runs in the build — not before it.
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

export const PrivacyPolicyPage = (): JSX.Element => {
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
      {/* Print stylesheet — single column, black on white, summaries retained,
          chrome + decorative numerals dropped. Twin of the Terms page. */}
      <style>{`
        @media print {
          header, footer, .privacy-no-print { display: none !important; }
          .privacy-section-number { display: none !important; }
          .privacy-content { max-width: 100% !important; }
          .privacy-summary { border-color: #000 !important; }
          .privacy-page, .privacy-page * { color: #000 !important; background: #fff !important; }
          .privacy-page a { text-decoration: underline; }
          .privacy-page table, .privacy-page th, .privacy-page td { border-color: #000 !important; }
        }
      `}</style>

      <Header />

      <main className="privacy-page">
        {/* ── 01 — HERO (compact, light) ── */}
        <section className="border-b border-[#0E1B2C]/10">
          <div className="mx-auto flex min-h-[50vh] w-full max-w-[1180px] flex-col justify-center px-6 pb-14 pt-20 sm:px-10 md:pt-24 lg:px-16">
            <Reveal>
              <p className="flex items-center gap-4">
                <span aria-hidden="true" className="h-px w-[52px] shrink-0" style={{ backgroundColor: GOLD }} />
                <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.22em] text-[#7A7466]">
                  Legal &mdash; Privacy Policy
                </span>
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1
                className="mt-7 font-serifDisplay text-[48px] font-normal leading-[1.02] tracking-[-0.02em] sm:text-[64px] md:text-[76px]"
                style={{ color: INK }}
              >
                Privacy Policy
                <Period />
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-[580px] font-serifDisplay text-[19px] leading-[1.6] text-[#3A4A5E] lg:text-[20px]">
                What we collect, why, and what we do with it &mdash; written to be read.
                Plain-English summaries appear throughout; the full text controls.
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
                <span>Reading time: ~7 minutes</span>
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
            {/* Trust line — the page's thesis. Short gold rule above; given air. */}
            <Reveal delay={260}>
              <div className="mt-10">
                <span aria-hidden="true" className="block h-px w-[40px]" style={{ backgroundColor: GOLD }} />
                <p className="mt-5 max-w-[620px] font-serifDisplay text-[20px] leading-[1.5]" style={{ color: INK }}>
                  We do not sell your personal information. Not to advertisers, not to data brokers,
                  not to anyone.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 02 — MOBILE STICKY CONTENTS ── */}
        <div className="privacy-no-print sticky top-[72px] z-40 border-b border-[#0E1B2C]/10 bg-white/95 backdrop-blur lg:hidden">
          <button
            type="button"
            aria-expanded={contentsOpen}
            aria-controls="privacy-contents-mobile"
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
              id="privacy-contents-mobile"
              aria-label="Privacy sections"
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
          <aside className="privacy-no-print hidden lg:block">
            <nav aria-label="Privacy sections" className="sticky top-[112px]">
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
          <div className="privacy-content max-w-[720px]">
            {sections.map((section) => (
              <SectionBlock key={section.id} section={section} />
            ))}
          </div>
        </div>

        {/* ── 04 — CLOSING BAND (navy, compact) ── */}
        <section
          className="relative isolate overflow-hidden"
          style={{ backgroundColor: NAVY }}
          aria-labelledby="privacy-closing-heading"
        >
          <div className="mx-auto w-full max-w-[1180px] px-6 py-20 text-center sm:px-10 md:py-24 lg:px-16">
            <Reveal>
              <h2
                id="privacy-closing-heading"
                className="mx-auto max-w-[18ch] font-serifDisplay text-[34px] font-normal leading-[1.08] tracking-[-0.015em] text-white sm:text-[44px]"
              >
                Ready to talk about your matter
                <Period />
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mx-auto mt-5 max-w-[520px] font-serifDisplay text-[18px] leading-[1.6] text-white/70">
                Start general &mdash; name, contact, the kind of issue. We&rsquo;ll tell you when
                it&rsquo;s time for details.
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
                  to="/terms"
                  className="group inline-flex items-center font-sans text-[14px] font-medium text-white/80 transition hover:text-[#C9A24B] focus-visible:outline-none focus-visible:text-[#C9A24B]"
                >
                  Read our Terms of Use
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
