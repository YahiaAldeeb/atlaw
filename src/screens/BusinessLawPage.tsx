import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/ATLAW/Header";
import { ServiceAreas } from "../components/ATLAW/ServiceAreas";
import { Footer } from "../components/ATLAW/Footer";
// Reuse the Personal Injury capability-page styling (reveal motion + grain).
import "./PersonalInjury.css";

const GOLD = "#C9A24B";
const headlineAxes = "'opsz' 144, 'wght' 360, 'SOFT' 0, 'WONK' 0";
const subHeadAxes = "'opsz' 96, 'wght' 400, 'SOFT' 0, 'WONK' 0";

const navyCanvas = "linear-gradient(180deg, #0E1B33 0%, #0A1428 100%)";

// Hero photo — subject sits in the right third; the gradient below keeps the left dark.
// AVIF is the primary source (matches the rest of the site, e.g. /assets/personal-injury-hero.avif);
// the JPG is a fallback for browsers without AVIF support.
const heroImageAvif = "/assets/business-law-hero.avif";
const heroImageJpg = "/assets/business-law-hero.jpg";

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
  "Every company runs on agreements, whether or not anyone wrote them down. Who owns what. Who gets paid, and when. What happens if a partner leaves or a deal goes bad. Business law is how those answers get put in writing before they turn into arguments. We work with founders, owners, and management teams to set the company up correctly, keep the paperwork clean as it grows, and step in when a contract or a partner becomes a problem.";

const howWeWork =
  "Good legal work for a business is mostly quiet. It is the operating agreement that settles a fight before it starts, the contract that says exactly who is liable, the structure that keeps your personal assets out of reach when something goes wrong. We handle that groundwork, and we handle the bigger moments too: raising money, buying or selling a company, bringing on a partner, closing a location. When a dispute does land, we negotiate first and litigate when we have to. The goal is the same either way — protect what you have built and keep the business moving.";

type ServiceGroup = { title: string; body: string; items: string[] };

const serviceGroups: ServiceGroup[] = [
  {
    title: "Starting and structuring a business",
    body: "The choices you make at the start follow you for years: how the company is taxed, who is personally on the hook, how decisions get made, what happens when an owner wants out. We help you pick the right structure and put the founding documents in place so the rules are clear from day one.",
    items: [
      "Entity formation (LLC, corporation, partnership)",
      "Founders and partnership agreements",
      "Operating agreements and bylaws",
      "Equity splits and ownership terms",
      "Licenses and regulatory registration",
    ],
  },
  {
    title: "Contracts and everyday operations",
    body: "Most business problems trace back to a contract that was vague, one-sided, or never signed. We draft and review the agreements you sign all the time, so you know what you are agreeing to and what you can hold the other side to.",
    items: [
      "Commercial contract drafting and review",
      "Vendor, supplier, and service agreements",
      "Employment agreements and contractor terms",
      "Nondisclosure and non-compete agreements",
      "Commercial leases",
    ],
  },
  {
    title: "Growth, deals, and financing",
    body: "At some point the question stops being how to run the company and becomes how to grow it or hand it off. Raising capital, taking on a partner, buying a competitor, selling the whole thing — each one is a transaction with real legal weight, and the terms decide who comes out ahead.",
    items: [
      "Mergers and acquisitions",
      "Buying and selling a business",
      "Financing and capital raises",
      "Joint ventures and strategic partnerships",
      "Shareholder and investor agreements",
    ],
  },
  {
    title: "Compliance, disputes, and exits",
    body: "Running a company means staying on the right side of rules that keep changing, and dealing with the day a partner, customer, or regulator pushes back. We keep you compliant, resolve the disputes that come up, and handle the exit when it is time to wind down or move on.",
    items: [
      "Corporate governance and compliance",
      "Contract and partnership disputes",
      "Negotiation, mediation, and litigation",
      "Business dissolution and succession planning",
    ],
  },
];

/* ─────────────────────────────── sections ─────────────────────────────── */

const Hero = (): JSX.Element => (
  <section
    aria-labelledby="bl-hero-title"
    className="relative isolate w-full overflow-hidden"
    style={{ background: navyCanvas, color: "#F4F1EA" }}
  >
    {/* Background photo — AVIF primary source with a JPG fallback for older browsers */}
    <picture className="pointer-events-none absolute inset-0 z-0">
      <source srcSet={heroImageAvif} type="image/avif" />
      <img
        alt="Business Law and corporate legal services"
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
            <li><span aria-current="page" className="text-white">Business Law</span></li>
          </ol>
        </nav>

        {/* Marker — business law is the parent of the BUILD category (02) in this site's taxonomy.
            (The atlawgroup.com source calls this "Advisory"; the repo's BUILD band is its equivalent.) */}
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
          id="bl-hero-title"
          style={{
            animationDelay: "200ms",
            fontSize: "clamp(52px, 8.5vw, 118px)",
            lineHeight: "0.95",
            fontVariationSettings: headlineAxes,
          }}
        >
          Business Law
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
          The legal backbone behind a company that wants to last.
        </p>
      </div>
    </div>
  </section>
);

const Body = (): JSX.Element => (
  <section
    aria-labelledby="bl-body-heading"
    className="relative w-full overflow-hidden"
    style={{ backgroundColor: "#FFFFFF", color: "#0B1F3A" }}
  >
    <div className="relative mx-auto w-full max-w-[820px] px-6 pb-20 pt-20 sm:px-10 lg:pb-[120px] lg:pt-[120px]">
      {/* Overview eyebrow + intro */}
      <p className="pi-reveal flex items-center gap-3 font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#0B1F3A]">
        <span aria-hidden="true" className="h-px w-8" style={{ backgroundColor: "#B88A2D" }} />
        Overview
      </p>
      <h2 className="sr-only" id="bl-body-heading">How we handle business law</h2>
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
    aria-labelledby="bl-services-heading"
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
        id="bl-services-heading"
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
    aria-labelledby="bl-cta-heading"
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
        id="bl-cta-heading"
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

export const BusinessLawPage = (): JSX.Element => {
  useEffect(() => {
    document.title = "Business Law | ATLAW Advisory";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "ATLAW handles the legal side of running a company — from forming the business and writing the contracts to financing, deals, and disputes.";
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
