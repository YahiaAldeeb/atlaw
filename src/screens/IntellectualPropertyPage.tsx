import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/ATLAW/Header";
import { ServiceAreas } from "../components/ATLAW/ServiceAreas";
import { Footer } from "../components/ATLAW/Footer";
// Reuse the Personal Injury capability-page styling (reveal motion + grain),
// the same stylesheet the Contracts, M&A, and Securities pages borrow.
import "./PersonalInjury.css";

const GOLD = "#C9A24B";
const headlineAxes = "'opsz' 144, 'wght' 360, 'SOFT' 0, 'WONK' 0";
const subHeadAxes = "'opsz' 96, 'wght' 400, 'SOFT' 0, 'WONK' 0";

const navyCanvas = "linear-gradient(180deg, #0E1B33 0%, #0A1428 100%)";

// Hero photo — a glowing-lightbulb image that reads as ideas/creation. AVIF is the
// primary source; the JPG is a fallback for browsers without AVIF support. Both live
// in /public/assets/ next to the other practice-area heroes (e.g. contracts-hero.*).
// The subject sits in the right third so the left-side navy gradient keeps the
// wide two-line headline legible.
const heroImageAvif = "/assets/intellectual-property-hero.avif";
const heroImageJpg = "/assets/intellectual-property-hero.jpg";

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
  "For a lot of companies, the most valuable thing they own is not on the balance sheet. It is the brand name customers recognize, the product nobody else has figured out, the code or the design or the process that makes the business worth copying. Intellectual property law is how you turn that into something you actually own and can defend. We help you secure your rights early, before someone else files first, and we go after the people who use your work without asking.";

const howWeWork =
  "The cheapest time to protect an idea is before it becomes valuable enough to steal. We start by figuring out what you have and what is worth protecting, then file the trademarks, patents, and copyrights that lock it down. We also write the agreements that keep your IP from leaking out through employees, contractors, and partners. When someone crosses the line — copies your brand, knocks off your product, walks out with your trade secrets — we send the letter, file the claim, or take it to court. Registration is the foundation, but a right you will not enforce is not worth much.";

type ServiceGroup = { title: string; body: string; items: string[] };

const serviceGroups: ServiceGroup[] = [
  {
    title: "Trademarks and brand protection",
    body: "Your name and logo are how customers find you, which is exactly why they are worth protecting. We clear the mark before you commit to it, register it, and keep watch so no one else trades on your reputation.",
    items: [
      "Trademark clearance searches",
      "Trademark registration and prosecution",
      "Brand and logo protection",
      "Trademark monitoring and renewals",
      "Domain name and online brand disputes",
    ],
  },
  {
    title: "Patents and inventions",
    body: "A patent turns an invention into a right you can hold, license, or enforce. We assess whether your idea is patentable and handle the application process from filing through to grant.",
    items: [
      "Patentability assessment",
      "Patent application drafting and filing",
      "Patent prosecution",
      "Utility and design patents",
      "Invention and inventor agreements",
    ],
  },
  {
    title: "Copyrights and creative work",
    body: "If you made it — the writing, the art, the software, the music — copyright protects it, and registration makes that protection enforceable. We register your work and structure how others are allowed to use it.",
    items: [
      "Copyright registration",
      "Software and code protection",
      "Content and media licensing",
      "Work-for-hire and assignment agreements",
      "Fair use and infringement analysis",
    ],
  },
  {
    title: "Licensing, trade secrets, and enforcement",
    body: "Most IP makes money when you let someone else use it on your terms, and most IP gets lost when nobody guards it. We draft the licenses and protections, and we enforce your rights when they are crossed.",
    items: [
      "Licensing and royalty agreements",
      "Trade secret protection and NDAs",
      "Technology transfer agreements",
      "Infringement claims and cease-and-desist letters",
      "IP litigation and dispute resolution",
    ],
  },
];

/* ─────────────────────────────── sections ─────────────────────────────── */

const Hero = (): JSX.Element => (
  <section
    aria-labelledby="ip-hero-title"
    className="relative isolate w-full overflow-hidden"
    style={{ background: navyCanvas, color: "#F4F1EA" }}
  >
    {/* Background photo — AVIF primary source with a JPG fallback for older browsers */}
    <picture className="pointer-events-none absolute inset-0 z-0">
      <source srcSet={heroImageAvif} type="image/avif" />
      <img
        alt="A glowing lightbulb abstraction, evoking original ideas, invention, and protected creative work"
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
            <li><span aria-current="page" className="text-white">Intellectual Property</span></li>
          </ol>
        </nav>

        {/* Marker — Intellectual Property sits under the BUILD category (02) in this
            site's taxonomy (the public-facing equivalent of "Advisory"). Matches the
            Contracts/Securities/M&A sibling pages. */}
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
          id="ip-hero-title"
          style={{
            animationDelay: "200ms",
            fontSize: "clamp(44px, 7.5vw, 104px)",
            lineHeight: "0.95",
            fontVariationSettings: headlineAxes,
          }}
        >
          Intellectual Property
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
          Own what you create, and stop others from taking it.
        </p>
      </div>
    </div>
  </section>
);

const Body = (): JSX.Element => (
  <section
    aria-labelledby="ip-body-heading"
    className="relative w-full overflow-hidden"
    style={{ backgroundColor: "#FFFFFF", color: "#0B1F3A" }}
  >
    <div className="relative mx-auto w-full max-w-[820px] px-6 pb-20 pt-20 sm:px-10 lg:pb-[120px] lg:pt-[120px]">
      {/* Overview eyebrow + intro */}
      <p className="pi-reveal flex items-center gap-3 font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#0B1F3A]">
        <span aria-hidden="true" className="h-px w-8" style={{ backgroundColor: "#B88A2D" }} />
        Overview
      </p>
      <h2 className="sr-only" id="ip-body-heading">How we handle intellectual property</h2>
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
    aria-labelledby="ip-services-heading"
    className="relative w-full overflow-hidden"
    style={{ backgroundColor: "#FFFFFF", color: "#0B1F3A" }}
  >
    <div className="relative mx-auto w-full max-w-[820px] px-6 pb-20 pt-4 sm:px-10 lg:pb-[120px] lg:pt-6">
      {/* Eyebrow — the site's numbered "05 — Service Areas" label. (The global
          office-locations band, also "05", renders below; this page's section is the
          IP service groups requested in the brief and carries the numbered label.) */}
      <p className="pi-reveal flex items-center gap-3 font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#0B1F3A]">
        <span aria-hidden="true" className="h-px w-8" style={{ backgroundColor: "#B88A2D" }} />
        05 &mdash; Service Areas
      </p>
      <h2
        className="mt-6 font-serifDisplay font-normal leading-[1.05] tracking-[-0.025em] text-[#0B1F3A]"
        id="ip-services-heading"
        style={{ fontSize: "clamp(30px, 4vw, 48px)", fontVariationSettings: headlineAxes }}
      >
        What we handle
        <span aria-hidden="true" style={{ color: "#B88A2D" }}>.</span>
      </h2>

      {/* Four service groups — no boxes, generous whitespace. Single column on a
          phone; the two-up grid kicks in on sm+. */}
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
    aria-labelledby="ip-cta-heading"
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
        id="ip-cta-heading"
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

export const IntellectualPropertyPage = (): JSX.Element => {
  useEffect(() => {
    document.title = "Intellectual Property | ATLAW Advisory";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Protection and enforcement strategies for brands, creative assets, and business ideas — trademarks, patents, copyrights, and the disputes that follow.";
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
