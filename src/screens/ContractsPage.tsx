import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/ATLAW/Header";
import { ServiceAreas } from "../components/ATLAW/ServiceAreas";
import { Footer } from "../components/ATLAW/Footer";
// Reuse the Personal Injury capability-page styling (reveal motion + grain),
// the same stylesheet the M&A and Securities pages borrow.
import "./PersonalInjury.css";

const GOLD = "#C9A24B";
const headlineAxes = "'opsz' 144, 'wght' 360, 'SOFT' 0, 'WONK' 0";
const subHeadAxes = "'opsz' 96, 'wght' 400, 'SOFT' 0, 'WONK' 0";

const navyCanvas = "linear-gradient(180deg, #0E1B33 0%, #0A1428 100%)";

// Hero photo — drop the final asset here. Something that reads as an *agreement*
// fits best: a pen on a signed document, hands signing, or a close-up of contract
// pages (avoid anything courtroom-heavy). AVIF is the primary source; the JPG is a
// fallback for browsers without AVIF support. Place both in /public/assets/ next to
// the other practice-area heroes (e.g. securities-hero.*). The subject should sit in
// the right third so the left-side navy gradient keeps the headline legible.
const heroImageAvif = "/assets/contracts-hero.avif";
const heroImageJpg = "/assets/contracts-hero.jpg";

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
  "A contract is just a promise the law will enforce, but only if it says what you think it says. Most disputes do not come from bad faith. They come from a clause nobody read closely, a term that meant two different things to two parties, or a deal that was never written down at all. We draft the agreements you rely on, read the ones put in front of you before you sign, and step in when the other side stops holding up their end.";

const howWeWork =
  "We start by asking what you actually want the agreement to do, then write it so a stranger reading it in two years would reach the same conclusion you did today. When you are the one being handed a contract, we go through it line by line, flag the terms that quietly shift risk onto you, and tell you which ones are worth pushing back on. If a deal goes wrong, we already understand the document and can move straight to enforcing it or defending you under it. Good contract work is mostly about being clear now so you are not arguing about it later.";

type ServiceGroup = { title: string; body: string; items: string[] };

const serviceGroups: ServiceGroup[] = [
  {
    title: "Drafting and building agreements",
    body: "A contract written from a generic template tends to protect whoever wrote the template, not you. We draft agreements around your actual deal, your risks, and the outcome you are after, so the document works in your favor when it matters.",
    items: [
      "Custom contract drafting",
      "Reusable templates and form agreements",
      "Terms of service and privacy policies",
      "Statements of work and service agreements",
      "Amendments and addenda",
    ],
  },
  {
    title: "Review and negotiation",
    body: "Before you sign, someone should read the contract on your side and understand what it commits you to. We review the terms, mark up what needs to change, and negotiate the points that carry the most risk or money.",
    items: [
      "Contract review and risk analysis",
      "Redlining and revisions",
      "Term negotiation",
      "Plain-language summaries of key obligations",
      "Renewal and termination clause review",
    ],
  },
  {
    title: "Common business agreements",
    body: "Most companies sign the same handful of contracts over and over. We handle the ones you use most, so the language is consistent and the protections are actually there.",
    items: [
      "Vendor, supplier, and service contracts",
      "Employment and independent contractor agreements",
      "Nondisclosure and confidentiality agreements",
      "Licensing and intellectual property agreements",
      "Commercial leases and purchase agreements",
    ],
  },
  {
    title: "Enforcement and disputes",
    body: "When the other side misses a payment, walks away, or breaks a term, the contract decides what you can do about it. We enforce the agreements you hold and defend you against claims under the ones you have signed.",
    items: [
      "Breach of contract claims",
      "Demand letters and enforcement",
      "Contract termination and exit strategy",
      "Negotiation, mediation, and litigation",
      "Defense against contract claims",
    ],
  },
];

/* ─────────────────────────────── sections ─────────────────────────────── */

const Hero = (): JSX.Element => (
  <section
    aria-labelledby="contracts-hero-title"
    className="relative isolate w-full overflow-hidden"
    style={{ background: navyCanvas, color: "#F4F1EA" }}
  >
    {/* Background photo — AVIF primary source with a JPG fallback for older browsers */}
    <picture className="pointer-events-none absolute inset-0 z-0">
      <source srcSet={heroImageAvif} type="image/avif" />
      <img
        alt="A pen resting on a signed agreement, evoking contract drafting and review"
        className="h-full w-full object-cover object-right"
        src={heroImageJpg}
      />
    </picture>
    {/* Navy gradient: solid on the left so the text stays legible, fading toward the subject on the right */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        background:
          "linear-gradient(90deg, rgba(19,29,56,0.95) 0%, rgba(19,29,56,0.85) 30%, rgba(19,29,56,0.45) 70%, rgba(19,29,56,0.2) 100%)",
      }}
    />
    {/* Extra veil on narrow screens, where the text column runs full-width over the subject */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 bg-[rgba(19,29,56,0.55)] md:hidden"
    />

    <Grain />

    <div className="relative z-10 mx-auto w-full max-w-[1180px] px-6 pb-[96px] pt-[72px] sm:px-10 md:pb-[120px] md:pt-[104px] lg:px-16 lg:pb-[140px] lg:pt-[120px]">
      <div className="max-w-[820px]">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="pi-reveal mb-9 font-sans text-[11.5px] font-semibold uppercase leading-none tracking-[0.2em]"
          style={{ animationDelay: "0ms" }}
        >
          <ol className="flex flex-wrap items-center gap-x-3 gap-y-1 text-white/55">
            <li><Link className="transition-colors hover:text-white/90" to="/">ATLAW</Link></li>
            <li aria-hidden="true" className="text-white/30">/</li>
            <li><Link className="transition-colors hover:text-white/90" to="/practice-areas">Practice Areas</Link></li>
            <li aria-hidden="true" className="text-white/30">/</li>
            <li><span aria-current="page" className="text-white">Contracts</span></li>
          </ol>
        </nav>

        {/* Marker — Contracts sits under the BUILD category (02) in this site's taxonomy
            (the public-facing equivalent of "Transactions"). Matches Securities/M&A. */}
        <p
          className="pi-reveal font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.28em]"
          style={{ animationDelay: "90ms", color: GOLD, marginBottom: "28px" }}
        >
          <span>02</span>
          <span aria-hidden="true" className="mx-3 text-[rgba(201,162,75,0.55)]">&mdash;</span>
          <span>Build</span>
        </p>

        {/* H1 */}
        <h1
          className="pi-reveal font-serifDisplay font-normal tracking-[-0.03em] text-[#F4F1EA]"
          id="contracts-hero-title"
          style={{
            animationDelay: "200ms",
            fontSize: "clamp(52px, 8.5vw, 118px)",
            lineHeight: "0.95",
            fontVariationSettings: headlineAxes,
          }}
        >
          Contracts
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
          Know what you signed, and hold the other side to it.
        </p>
      </div>
    </div>
  </section>
);

const Body = (): JSX.Element => (
  <section
    aria-labelledby="contracts-body-heading"
    className="relative w-full overflow-hidden"
    style={{ backgroundColor: "#FFFFFF", color: "#0B1F3A" }}
  >
    <div className="relative mx-auto w-full max-w-[820px] px-6 pb-20 pt-20 sm:px-10 lg:pb-[120px] lg:pt-[120px]">
      {/* Overview eyebrow + intro */}
      <p className="pi-reveal flex items-center gap-3 font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#0B1F3A]">
        <span aria-hidden="true" className="h-px w-8" style={{ backgroundColor: "#B88A2D" }} />
        Overview
      </p>
      <h2 className="sr-only" id="contracts-body-heading">How we handle contracts</h2>
      <p
        className="pi-reveal mt-7 font-serifDisplay text-[22px] font-normal leading-[1.5] tracking-[-0.01em] text-[#0B1F3A] sm:text-[24px] lg:text-[26px]"
        style={{ animationDelay: "80ms", fontVariationSettings: subHeadAxes }}
      >
        {intro}
      </p>

      {/* How we work — prose only, no boxes */}
      <div className="mt-16 lg:mt-20">
        <span aria-hidden="true" className="block h-px w-10" style={{ backgroundColor: "#B88A2D" }} />
        <h3
          className="mt-6 font-serifDisplay font-normal leading-[1.12] tracking-[-0.02em] text-[#0B1F3A]"
          style={{ fontSize: "clamp(26px, 3.4vw, 38px)", fontVariationSettings: subHeadAxes }}
        >
          How we work
        </h3>
        <p className="mt-5 font-sans text-[18px] leading-[1.7] text-[#3A4A63] lg:text-[19px]">
          {howWeWork}
        </p>
      </div>
    </div>
  </section>
);

const ServiceAreasSection = (): JSX.Element => (
  <section
    aria-labelledby="contracts-services-heading"
    className="relative w-full overflow-hidden"
    style={{ backgroundColor: "#FFFFFF", color: "#0B1F3A" }}
  >
    <div className="relative mx-auto w-full max-w-[820px] px-6 pb-20 pt-4 sm:px-10 lg:pb-[120px] lg:pt-6">
      {/* Eyebrow — native "Service Areas" label. (The site's numbered "05 — Service
          Areas" band, rendered below, is the global office-locations section; we
          keep this one un-numbered so the page doesn't show two "05"s.) */}
      <p className="pi-reveal flex items-center gap-3 font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#0B1F3A]">
        <span aria-hidden="true" className="h-px w-8" style={{ backgroundColor: "#B88A2D" }} />
        Service Areas
      </p>
      <h2
        className="mt-6 font-serifDisplay font-normal leading-[1.05] tracking-[-0.025em] text-[#0B1F3A]"
        id="contracts-services-heading"
        style={{ fontSize: "clamp(30px, 4vw, 48px)", fontVariationSettings: headlineAxes }}
      >
        What we handle
        <span aria-hidden="true" style={{ color: "#B88A2D" }}>.</span>
      </h2>

      {/* Four service groups — single column, no boxes, generous whitespace.
          Collapses cleanly on a phone; the two-up grid below kicks in on sm+. */}
      <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 sm:gap-y-14 lg:mt-20 lg:gap-x-16">
        {serviceGroups.map((group) => (
          <article key={group.title}>
            <span aria-hidden="true" className="block h-px w-10" style={{ backgroundColor: "#B88A2D" }} />
            <h3
              className="mt-6 font-serifDisplay font-normal leading-[1.15] tracking-[-0.02em] text-[#0B1F3A]"
              style={{ fontSize: "clamp(22px, 2.6vw, 28px)", fontVariationSettings: subHeadAxes }}
            >
              {group.title}
            </h3>
            <p className="mt-4 font-sans text-[16.5px] leading-[1.65] text-[#3A4A63] lg:text-[17px]">
              {group.body}
            </p>
            <ul className="mt-5 space-y-2.5">
              {group.items.map((item) => (
                <li className="flex items-start gap-3 font-sans text-[16px] leading-[1.5] text-[#3A4A63]" key={item}>
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

// Closing CTA — same navy "06 — Final CTA" treatment used site-wide (see FinalCtaSection).
const CtaBand = (): JSX.Element => (
  <section
    aria-labelledby="contracts-cta-heading"
    className="relative isolate w-full overflow-hidden bg-[linear-gradient(180deg,#0e1b33_0%,#0a1428_100%)] text-white"
  >
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
      style={{ backgroundImage: grain }}
    />
    <div className="relative mx-auto flex w-full max-w-[1180px] flex-col items-center px-6 py-[64px] text-center sm:px-10 md:py-[88px] lg:px-20 lg:py-[104px]">
      <span aria-hidden="true" className="block h-px w-[64px] bg-[#B88A2D]" />
      <h2
        className="mt-8 font-serifDisplay font-normal leading-[1.04] tracking-[-0.02em] text-white text-[clamp(36px,6vw,76px)]"
        id="contracts-cta-heading"
        style={{ fontVariationSettings: headlineAxes }}
      >
        Need Help? We&rsquo;re Here<span className="text-[#B88A2D]">!</span>
      </h2>
      <div className="mt-12 flex w-full items-center justify-center">
        {/* The site has no /connect route — "Get started" maps to /contact site-wide. */}
        <Link
          className="group inline-flex h-[64px] w-full max-w-[340px] items-center justify-center gap-2.5 rounded-full bg-white px-9 font-sans text-[15px] font-medium text-[#0B1F3A] transition-all duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#FFFFFF] hover:shadow-[0_10px_30px_rgba(0,0,0,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88A2D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1F3A] sm:w-[350px] lg:h-[68px]"
          to="/contact"
        >
          Get started
          <ArrowRight className="group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  </section>
);

export const ContractsPage = (): JSX.Element => {
  useEffect(() => {
    document.title = "Contracts | ATLAW Transactions";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Drafting, review, negotiation, and enforcement of business-critical agreements — so every deal you sign says exactly what you meant it to.";
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <div className="atlaw-pi min-h-screen bg-ivory text-ink">
      <Header />
      <main>
        <Hero />
        <Body />
        <ServiceAreasSection />
        <ServiceAreas />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
};
