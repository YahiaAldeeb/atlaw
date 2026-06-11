import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/ATLAW/Header";
import { Footer } from "../components/ATLAW/Footer";
import { getLenis } from "../motion/SmoothScroll";

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

const EMAIL = "info@atlawgroup.com";
// ⚠️ Working draft date — set the real "Last updated" value at publish, and use
// the SAME owner/date as the Terms page (they are a matched set).
const LAST_UPDATED = "June 12, 2026";

type Section = {
  id: string;
  num: string;
  indexLabel: string; // short label for the index rail + section eyebrow
  title: string; // H2
  summary: string; // "In plain English" — plain text default
  summaryNode?: React.ReactNode; // optional rich summary (e.g. with a cross-link)
  paragraphs: string[]; // legal text (rendered when `body` is absent)
  body?: React.ReactNode; // custom full-text content (01 cross-link, 05 table)
  pending?: boolean; // bracketed clauses awaiting final attorney language
};

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

/* Cross-reference between the two legal pages — rendered with a small gold ¶ so
   it reads as a legal cross-reference, distinct from an ordinary link. */
const CrossLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}): JSX.Element => (
  <span className="whitespace-normal">
    <span aria-hidden="true" className="mr-0.5 font-serifDisplay text-[0.95em]" style={{ color: GOLD }}>
      ¶
    </span>
    <Link
      to={to}
      className="font-medium underline underline-offset-2 transition hover:text-[#C9A24B]"
      style={{ color: INK }}
    >
      {children}
    </Link>
  </span>
);

/* Visible placeholder for clauses whose final language is pending attorney /
   developer-audit input — never mistakable for final copy. */
const DraftingNote = ({ children }: { children: React.ReactNode }): JSX.Element => (
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

/* The only table on the site — hairline rules only, no zebra striping, sans
   14px, generous row height. Bracketed values are intentional: this is a
   template to be completed from the build audit (see section 05 drafting note). */
const cookieRows = [
  {
    name: "__session",
    purpose: "Keeps the site functioning during a visit",
    duration: "Session",
    type: "Essential",
  },
  {
    name: "[analytics_id]",
    purpose: "Anonymous usage measurement — pages viewed, device type",
    duration: "[duration]",
    type: "Analytics",
  },
  {
    name: "[embed_cookie]",
    purpose: "Set by an embedded map or font provider, where used",
    duration: "[duration]",
    type: "Third-party",
  },
];

const CookieTable = (): JSX.Element => (
  <div className="overflow-x-auto">
    <p className="mb-2.5 font-sans text-[11px] uppercase tracking-[0.16em]" style={{ color: STONE }}>
      Illustrative — replace with the audited cookie list
    </p>
    <table className="w-full border-collapse text-left font-sans text-[14px]">
      <caption className="sr-only">Cookies used on this site</caption>
      <thead>
        <tr className="border-b" style={{ borderColor: "rgba(14,27,44,0.20)" }}>
          {["Cookie", "Purpose", "Duration", "Type"].map((h) => (
            <th
              key={h}
              scope="col"
              className="py-3 pr-5 align-bottom font-sans text-[11px] font-semibold uppercase tracking-[0.16em]"
              style={{ color: STONE }}
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {cookieRows.map((row) => (
          <tr key={row.name} className="border-b" style={{ borderColor: "rgba(14,27,44,0.09)" }}>
            <td className="py-4 pr-5 align-top font-medium tabular-nums" style={{ color: INK }}>
              {row.name}
            </td>
            <td className="py-4 pr-5 align-top leading-[1.5]" style={{ color: INK_SOFT }}>
              {row.purpose}
            </td>
            <td className="py-4 pr-5 align-top whitespace-nowrap" style={{ color: INK_SOFT }}>
              {row.duration}
            </td>
            <td className="py-4 align-top whitespace-nowrap" style={{ color: INK_SOFT }}>
              {row.type}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const sections: Section[] = [
  {
    id: "privacy-01",
    num: "01",
    indexLabel: "What you send us",
    title: "What you send us",
    summary:
      "When you contact us, we use what you share to respond and evaluate your matter. Until we formally take you on as a client, limit details.",
    summaryNode: (
      <>
        When you contact us, we use what you share to respond and evaluate your matter. Until we
        formally take you on as a client, limit details &mdash;{" "}
        <CrossLink to="/terms#terms-04">here&rsquo;s why</CrossLink>.
      </>
    ),
    paragraphs: [],
    body: (
      <p className="font-serifDisplay text-[16px] leading-[1.65]" style={{ color: INK_SOFT }}>
        When you submit a form, email us, or call, we collect what you choose to provide: your name,
        contact details, and a description of your situation. We use it to respond, run conflict
        checks, and evaluate whether we can help. Note: information sent before an engagement
        agreement exists may not be privileged &mdash; see{" "}
        <CrossLink to="/terms#terms-04">
          Terms of Use, &ldquo;Confidentiality of unsolicited submissions.&rdquo;
        </CrossLink>{" "}
        We will tell you when it is appropriate to share details.
      </p>
    ),
  },
  {
    id: "privacy-02",
    num: "02",
    indexLabel: "Collected automatically",
    title: "What we collect automatically",
    summary:
      "Like most websites, we get basic technical data — pages visited, device type, approximate location — through analytics.",
    pending: true,
    paragraphs: [
      "Complete only after the developer confirms what actually runs: analytics platform, hosting logs (Vercel), embedded maps/fonts, and the newsletter provider. List each honestly — do not list tools that aren’t in use.",
    ],
  },
  {
    id: "privacy-03",
    num: "03",
    indexLabel: "How we use it",
    title: "How we use information",
    summary:
      "To respond to you, evaluate matters, run the firm, improve the site, and meet legal obligations. That’s it.",
    pending: true,
    paragraphs: [
      "Standard purposes clause: responding, conflict checks, client onboarding, newsletter (consent-based), site improvement, legal compliance, and security.",
    ],
  },
  {
    id: "privacy-04",
    num: "04",
    indexLabel: "When we share it",
    title: "When we share information",
    summary:
      "We don’t sell it. We share only with service providers who help us operate (under contract), within the firm and its affiliates working on your matter, or when the law requires.",
    pending: true,
    paragraphs: [
      "Categories: service providers (hosting, email, analytics, case management); affiliated attorneys working on your matter — including Dubai/Manila where applicable; legal and regulatory requirements. Never sold; never shared for third-party marketing.",
    ],
  },
  {
    id: "privacy-05",
    num: "05",
    indexLabel: "Cookies & analytics",
    title: "Cookies & analytics",
    summary:
      "We use a small set of cookies to make the site work and to understand how it’s used. You can control them.",
    paragraphs: [],
    body: (
      <div className="space-y-5">
        <DraftingNote>
          Complete this table from the actual build — analytics platform, hosting logs (Vercel),
          embedded maps/fonts, and the newsletter provider. List only tools that are in use. If the
          audited list plus an EU/UK audience requires it, add a consent banner and describe the
          mechanism here.
        </DraftingNote>
        <CookieTable />
      </div>
    ),
  },
  {
    id: "privacy-06",
    num: "06",
    indexLabel: "Data retention",
    title: "Data retention",
    summary:
      "We keep information as long as needed for the purpose we collected it — and where you become a client, as long as professional rules require us to keep files.",
    pending: true,
    paragraphs: [
      "Retention clause. Attorney records-retention obligations differ from marketing data — distinguish the two.",
    ],
  },
  {
    id: "privacy-07",
    num: "07",
    indexLabel: "Security",
    title: "Security",
    summary:
      "We use reasonable safeguards to protect your information. No website can promise perfect security, and we won’t pretend otherwise.",
    pending: true,
    paragraphs: [
      "Standard safeguards clause — honest, no overpromising. Describe actual measures at a general level: encryption in transit, access controls.",
    ],
  },
  {
    id: "privacy-08",
    num: "08",
    indexLabel: "Your rights & choices",
    title: "Your rights & choices",
    summary:
      "You can ask what we have about you, ask us to correct or delete it, and unsubscribe from the newsletter anytime. Email us and we’ll handle it.",
    pending: true,
    paragraphs: [
      "Rights clause. Michigan has no comprehensive state privacy law as of drafting, but the firm serves clients from other states and countries — attorney to decide whether to extend CCPA/GDPR-style rights voluntarily (simpler, and better optics, than jurisdiction-gating). Include: access, correction, deletion, newsletter opt-out, how to exercise (email info@atlawgroup.com), and a response timeframe.",
    ],
  },
  {
    id: "privacy-09",
    num: "09",
    indexLabel: "International transfers",
    title: "International data transfers",
    summary:
      "We operate from the US, with offices in Dubai and Manila. If your matter involves them, relevant information may be handled there under the same confidentiality obligations.",
    pending: true,
    paragraphs: [
      "Attorney + ops to confirm: where data is actually stored, whether cross-office transfers occur, and applicable safeguards. UAE and the Philippines both have data-protection statutes (PDPL; Data Privacy Act) — counsel should confirm obligations if data genuinely flows there.",
    ],
  },
  {
    id: "privacy-10",
    num: "10",
    indexLabel: "Children",
    title: "Children",
    summary:
      "This site isn’t directed at children, and we don’t knowingly collect their information.",
    pending: true,
    paragraphs: [
      "Standard under-13/COPPA clause; note that injury matters involving minors are handled through parents or guardians.",
    ],
  },
  {
    id: "privacy-11",
    num: "11",
    indexLabel: "Changes",
    title: "Changes to this policy",
    summary:
      "If we change this policy, we’ll update the date at the top. Material changes get a notice on this page.",
    pending: true,
    paragraphs: ["Standard amendment clause with the “Last updated” mechanism."],
  },
  {
    id: "privacy-12",
    num: "12",
    indexLabel: "Contact",
    title: "Contact",
    summary: "Privacy questions or requests: email us.",
    paragraphs: [
      `Privacy questions or requests may be directed to ${EMAIL} or ATLAW Group, [address], Detroit, MI. [Designate internally who answers privacy requests.]`,
    ],
  },
];

/* Smooth-scroll to a section, accounting for the sticky header. Uses the shared
   Lenis instance when present; falls back to native smooth scroll. */
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
