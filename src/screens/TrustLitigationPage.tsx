import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/ATLAW/Header";
import { Footer } from "../components/ATLAW/Footer";
// Reuse the Estate Planning / capability-page styling (reveal motion + grain).
import "./PersonalInjury.css";

const GOLD = "#C9A24B";
const headlineAxes = "'opsz' 144, 'wght' 360, 'SOFT' 0, 'WONK' 0";
const subHeadAxes = "'opsz' 96, 'wght' 400, 'SOFT' 0, 'WONK' 0";

const navyCanvas = "linear-gradient(180deg, #0E1B33 0%, #0A1428 100%)";

// Hero photo — full-width background with a dark overlay for text legibility.
// AVIF is the primary source for fast loading; the WebP is a fallback for browsers
// without AVIF support. The left third of the source already falls off to deep navy,
// which sits cleanly under the existing left-side gradient.
const heroImageAvif = "/assets/trust-litigation-hero.avif";
const heroImageFallback = "/assets/trust-litigation-hero.webp";

// Soft grain over the navy canvas — same texture language as the rest of the site.
const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

/* ─────────────────────────────── shared bits ─────────────────────────────── */

const Grain = (): JSX.Element => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 opacity-[0.05]"
    style={{ backgroundImage: grain }}
  />
);

/* ─────────────────────────────── content (verbatim copy) ─────────────────── */

const intro =
  "Trust litigation is what happens when a dispute over a trust or estate ends up in court. Maybe a trustee is mismanaging the money, a will was signed under pressure, or the family can't agree on what a document actually means. These cases are hard because they're usually about money, grief, and family all at once. Our attorneys handle the legal fight so you can hold the right people accountable and protect what you're owed. We represent beneficiaries, heirs, trustees, and executors, on either side of the dispute.";

type Topic = { id: string; title: string; body: string; items: string[] };

const topics: Topic[] = [
  {
    id: "breach-of-fiduciary-duty",
    title: "Breach of fiduciary duty",
    body: "A trustee or executor has to act in the interest of the people the trust is meant to serve. When they put themselves first, hide information, or let assets waste away, they can be held responsible. We bring claims to recover what was lost and, where it's warranted, to remove the person in charge.",
    items: [
      "Trustee and executor misconduct",
      "Self-dealing and conflicts of interest",
      "Mismanagement or loss of trust assets",
      "Failure to provide an accounting",
      "Trustee removal and replacement",
      "Surcharge claims to recover losses",
    ],
  },
  {
    id: "will-and-trust-contests",
    title: "Will and trust contests",
    body: "Not every document reflects what the person who signed it actually wanted. We challenge wills and trusts, and defend them, when there's a real question about how they were created.",
    items: [
      "Lack of mental capacity",
      "Undue influence and coercion",
      "Fraud and forgery",
      "Improperly signed or witnessed documents",
      "Disputes over amendments and later versions",
    ],
  },
  {
    id: "beneficiary-and-inheritance-disputes",
    title: "Beneficiary and inheritance disputes",
    body: "Beneficiaries often have to fight just to get information, let alone their share. We step in when distributions stall, when a document is unclear, or when one heir is being treated unfairly.",
    items: [
      "Petitions to compel distribution",
      "Disputes over the meaning of trust or will terms",
      "Claims of unequal or improper treatment",
      "Challenges to a beneficiary's interest",
      "Disinheritance disputes",
    ],
  },
  {
    id: "accountings-and-financial-review",
    title: "Accountings and financial review",
    body: "You have a right to know what's happening with money that's supposed to be yours. We force trustees and executors to open the books, and we dig into the records when the numbers don't add up.",
    items: [
      "Petitions to compel an accounting",
      "Objections to a trustee's accounting",
      "Tracing missing or misused funds",
      "Reviewing fees charged by the trustee",
    ],
  },
  {
    id: "financial-elder-abuse",
    title: "Financial elder abuse",
    body: "Older adults are frequent targets for people who want control of their money or property. When someone uses a position of trust to take advantage of an elderly person, we pursue both the return of the assets and the legal consequences.",
    items: [
      "Misuse of a power of attorney",
      "Coerced gifts and transfers",
      "Theft of money or property",
      "Claims against caregivers, family, or advisors",
    ],
  },
  {
    id: "administration-disputes",
    title: "Administration disputes",
    body: "Even an honest trustee can end up in a fight over how to do the job. We handle the disagreements that come up while a trust or estate is being administered, and we go to court when the parties can't work it out themselves.",
    items: [
      "Interpretation of trust and will terms",
      "Trust modification, reformation, and termination",
      "Disputes among co-trustees",
      "Creditor claims against an estate or trust",
      "Property title and ownership disputes",
    ],
  },
  {
    id: "defending-trustees-and-executors",
    title: "Defending trustees and executors",
    body: "Being named in a lawsuit doesn't mean you did anything wrong. If you're a trustee or executor facing claims, we defend your decisions and keep the administration moving while the dispute gets resolved.",
    items: [
      "Defense against breach of duty claims",
      "Defense of accountings and fee disputes",
      "Responding to removal petitions",
      "Guidance to limit personal liability",
    ],
  },
  {
    id: "mediation-and-settlement",
    title: "Mediation and settlement",
    body: "Most of these cases settle, and many should. Where it makes sense, we work to resolve things without a drawn-out trial, so more of the estate stays with the family and less of it goes to legal fees.",
    items: [
      "Mediation and settlement negotiations",
      "Family settlement agreements",
      "Pre-litigation resolution",
    ],
  },
];

/* ─────────────────────────────── sections ─────────────────────────────── */

const Hero = (): JSX.Element => (
  <section
    aria-labelledby="tl-hero-title"
    className="relative isolate w-full overflow-hidden"
    style={{ background: navyCanvas, color: "#F4F1EA" }}
  >
    {/* Full-width background photo — AVIF primary source with a PNG fallback for older browsers */}
    <picture className="pointer-events-none absolute inset-0 z-0">
      <source srcSet={heroImageAvif} type="image/avif" />
      <img
        alt="A Last Will and Testament document on a desk beside leather-bound law books, a fountain pen, reading glasses, and a pocket watch."
        className="h-full w-full object-cover object-center"
        src={heroImageFallback}
      />
    </picture>
    {/* Dark overlay across the whole image so the heading stays legible */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        background:
          "linear-gradient(90deg, rgba(19,29,56,0.92) 0%, rgba(19,29,56,0.78) 45%, rgba(19,29,56,0.55) 100%)",
      }}
    />
    {/* Extra veil on narrow screens, where the text column runs full-width over the image */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 bg-[rgba(19,29,56,0.55)] md:hidden"
    />

    <Grain />

    <div className="relative z-10 mx-auto w-full max-w-[1180px] px-6 pb-[96px] pt-[72px] sm:px-10 md:pb-[120px] md:pt-[104px] lg:px-16 lg:pb-[140px] lg:pt-[120px]">
      <div className="max-w-[820px]">
        {/* Breadcrumb / eyebrow — Capabilities → Litigation */}
        <nav
          aria-label="Breadcrumb"
          className="pi-reveal mb-9 font-sans text-[11.5px] font-semibold uppercase leading-none tracking-[0.2em]"
          style={{ animationDelay: "0ms" }}
        >
          <ol className="flex flex-wrap items-center gap-x-3 gap-y-1 text-white/55">
            <li>
              <Link className="transition-colors hover:text-white/90" to="/practice-areas">
                Capabilities
              </Link>
            </li>
            <li aria-hidden="true" className="text-white/30">/</li>
            <li><span aria-current="page" className="text-white">Litigation</span></li>
          </ol>
        </nav>

        {/* H1 */}
        <h1
          className="pi-reveal font-serifDisplay font-normal tracking-[-0.03em] text-[#F4F1EA]"
          id="tl-hero-title"
          style={{
            animationDelay: "200ms",
            fontSize: "clamp(52px, 8.5vw, 118px)",
            lineHeight: "0.95",
            fontVariationSettings: headlineAxes,
          }}
        >
          Trust Litigation
          <span aria-hidden="true" style={{ color: GOLD }}>.</span>
        </h1>

        {/* Gold accent rule */}
        <span
          aria-hidden="true"
          className="pi-reveal block"
          style={{ animationDelay: "280ms", width: "56px", height: "2px", background: GOLD, marginTop: "28px", marginBottom: "28px" }}
        />

        {/* Tagline */}
        <p
          className="pi-reveal max-w-[680px] font-sans text-[18px] leading-[1.55] text-[rgba(244,241,234,0.85)] md:text-[20px]"
          style={{ animationDelay: "340ms" }}
        >
          When a trust is mishandled, we help you set it right.
        </p>
      </div>
    </div>
  </section>
);

// Body — one continuous section: intro paragraph, then each sub-topic as a
// lightweight serif subheading + short paragraph + a plain bulleted list.
// No dividers between subheadings; no boxes, cards, or shaded panels.
const Body = (): JSX.Element => (
  <section
    aria-labelledby="tl-body-heading"
    className="relative w-full overflow-hidden"
    style={{ backgroundColor: "#FFFFFF", color: "#0B1F3A" }}
  >
    <div className="relative mx-auto w-full max-w-[820px] px-6 pb-20 pt-20 sm:px-10 lg:pb-[120px] lg:pt-[120px]">
      {/* Overview eyebrow + intro */}
      <p className="pi-reveal flex items-center gap-3 font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#0B1F3A]">
        <span aria-hidden="true" className="h-px w-8" style={{ backgroundColor: "#B88A2D" }} />
        Overview
      </p>
      <h2 className="sr-only" id="tl-body-heading">What trust litigation is and how we approach it</h2>

      {/* Intro paragraph — normal body size */}
      <p
        className="pi-reveal mt-7 font-sans text-[18px] leading-[1.7] text-[#3A4A63] lg:text-[19px]"
        style={{ animationDelay: "80ms" }}
      >
        {intro}
      </p>

      {/* Sub-topics — single continuous block, no boxes, no per-heading dividers */}
      <div className="mt-16 space-y-14 lg:mt-20 lg:space-y-16">
        {topics.map((topic) => (
          <article id={topic.id} key={topic.id} className="scroll-mt-28">
            <h3
              className="font-serifDisplay font-normal leading-[1.15] tracking-[-0.02em] text-[#0B1F3A]"
              style={{ fontSize: "clamp(24px, 3vw, 32px)", fontVariationSettings: subHeadAxes }}
            >
              {topic.title}
            </h3>
            <p className="mt-4 font-sans text-[18px] leading-[1.7] text-[#3A4A63] lg:text-[19px]">
              {topic.body}
            </p>
            <ul className="mt-5 space-y-2.5">
              {topic.items.map((item) => (
                <li className="flex items-start gap-3 font-sans text-[17px] leading-[1.55] text-[#3A4A63]" key={item}>
                  <span aria-hidden="true" className="mt-[8px] h-[5px] w-[5px] shrink-0 rounded-full" style={{ backgroundColor: "#B88A2D" }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

// 05 — Service Areas: a clean two-column text list of the eight topics.
// No boxes, no icons. Each item links down to its sub-topic in the body.
const ServiceAreasSection = (): JSX.Element => (
  <section
    aria-labelledby="tl-services-heading"
    className="relative w-full overflow-hidden"
    style={{ backgroundColor: "#FFFFFF", color: "#0B1F3A" }}
  >
    <div className="relative mx-auto w-full max-w-[820px] px-6 pb-20 pt-4 sm:px-10 lg:pb-[120px] lg:pt-6">
      {/* Numbered eyebrow — "05 — Service Areas" in the site's numbered style (accented number) */}
      <p
        className="pi-reveal font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.24em] text-[#0B1F3A]"
        id="tl-services-heading"
      >
        <span style={{ color: GOLD }}>05</span>
        <span aria-hidden="true" className="mx-3 text-[rgba(201,162,75,0.55)]">&mdash;</span>
        <span>Service Areas</span>
      </p>

      <ul className="mt-10 grid grid-cols-1 gap-x-12 gap-y-3.5 border-t border-[#0B1F3A]/12 pt-10 sm:grid-cols-2">
        {topics.map((topic) => (
          <li key={topic.id}>
            <a
              className="group inline-flex items-start gap-3 font-sans text-[18px] leading-[1.5] text-[#3A4A63] transition-colors hover:text-[#0B1F3A]"
              href={`#${topic.id}`}
            >
              <span aria-hidden="true" className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full" style={{ backgroundColor: "#B88A2D" }} />
              <span>{topic.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export const TrustLitigationPage = (): JSX.Element => {
  useEffect(() => {
    document.title = "Trust Litigation | ATLAW Litigation";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Trust litigation attorneys for breach of fiduciary duty, will and trust contests, beneficiary and inheritance disputes, accountings, financial elder abuse, and administration disputes. ATLAW represents beneficiaries, heirs, trustees, and executors.";
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <div className="atlaw-pi min-h-screen bg-ivory text-ink">
      <Header />
      <main>
        <Hero />
        <Body />
        <ServiceAreasSection />
      </main>
      <Footer />
    </div>
  );
};
