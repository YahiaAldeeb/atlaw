import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/ATLAW/Header";
import { Footer } from "../components/ATLAW/Footer";
import { intro, topics, serviceAreas } from "../data/practice/tax";
import "./Tax.css";

const GOLD = "#C9A24B";
const INK = "#0B1F3A";
const headlineAxes = "'opsz' 144, 'wght' 360, 'SOFT' 0, 'WONK' 0";
const subHeadAxes = "'opsz' 96, 'wght' 400, 'SOFT' 0, 'WONK' 0";

const navyCanvas = "linear-gradient(180deg, #0E1B33 0%, #0A1428 100%)";

// Neutral, in-repo hero photo (documents on a desk) — same treatment the
// Plaintiff Injury template uses: photo behind a left-weighted navy gradient.
const heroImage = "/assets/contracts-hero.avif";

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

/* ─────────────────────────────── sections ─────────────────────────────── */

const Hero = (): JSX.Element => (
  <section
    aria-labelledby="tax-hero-title"
    className="relative isolate w-full overflow-hidden"
    style={{ background: navyCanvas, color: "#F4F1EA" }}
  >
    {/* Background photo */}
    <img
      alt="Documents and paperwork laid out on a desk"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-right"
      src={heroImage}
    />
    {/* Navy gradient: solid on the left so the text stays legible, fading toward the photo on the right */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        background:
          "linear-gradient(90deg, rgba(19,29,56,0.95) 0%, rgba(19,29,56,0.85) 30%, rgba(19,29,56,0.45) 70%, rgba(19,29,56,0.2) 100%)",
      }}
    />
    {/* Extra veil on narrow screens, where the text column runs full-width over the photo */}
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
          className="tax-reveal mb-9 font-sans text-[11.5px] font-semibold uppercase leading-none tracking-[0.2em]"
          style={{ animationDelay: "0ms" }}
        >
          <ol className="flex flex-wrap items-center gap-x-3 gap-y-1 text-white/55">
            <li><Link className="transition-colors hover:text-white/90" to="/">ATLAW</Link></li>
            <li aria-hidden="true" className="text-white/30">/</li>
            <li><Link className="transition-colors hover:text-white/90" to="/practice-areas">Practice Areas</Link></li>
            <li aria-hidden="true" className="text-white/30">/</li>
            <li><span aria-current="page" className="text-white">Tax</span></li>
          </ol>
        </nav>

        {/* H1 */}
        <h1
          className="tax-reveal font-serifDisplay font-normal tracking-[-0.03em] text-[#F4F1EA]"
          id="tax-hero-title"
          style={{
            animationDelay: "120ms",
            fontSize: "clamp(52px, 8.5vw, 118px)",
            lineHeight: "0.95",
            fontVariationSettings: headlineAxes,
          }}
        >
          Tax
          <span aria-hidden="true" style={{ color: GOLD }}>.</span>
        </h1>

        {/* Gold accent rule */}
        <span
          aria-hidden="true"
          className="tax-reveal block"
          style={{ animationDelay: "200ms", width: "56px", height: "2px", background: GOLD, marginTop: "28px", marginBottom: "28px" }}
        />

        {/* Tagline */}
        <p
          className="tax-reveal max-w-[680px] font-sans text-[18px] leading-[1.55] text-[rgba(244,241,234,0.85)] md:text-[20px]"
          style={{ animationDelay: "260ms" }}
        >
          Pay what you owe, and not a dollar more.
        </p>
      </div>
    </div>
  </section>
);

const Body = (): JSX.Element => (
  <section
    aria-labelledby="tax-body-heading"
    className="relative w-full overflow-hidden"
    style={{ backgroundColor: "#FFFFFF", color: INK }}
  >
    <div className="relative mx-auto w-full max-w-[820px] px-6 pb-20 pt-20 sm:px-10 lg:pb-[120px] lg:pt-[120px]">
      {/* Overview eyebrow + intro */}
      <p className="tax-reveal flex items-center gap-3 font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#0B1F3A]">
        <span aria-hidden="true" className="h-px w-8" style={{ backgroundColor: "#B88A2D" }} />
        Overview
      </p>
      <h2 className="sr-only" id="tax-body-heading">How we handle tax matters</h2>
      <p
        className="tax-reveal mt-7 font-sans text-[18px] leading-[1.7] text-[#3A4A63] lg:text-[19px]"
        style={{ animationDelay: "80ms" }}
      >
        {intro}
      </p>

      {/* Sub-topics — single continuous column, no boxes */}
      <div className="mt-20 space-y-16 lg:mt-24 lg:space-y-20">
        {topics.map((topic) => (
          <article key={topic.title}>
            <span aria-hidden="true" className="block h-px w-10" style={{ backgroundColor: "#B88A2D" }} />
            <h3
              className="mt-6 font-serifDisplay font-normal leading-[1.12] tracking-[-0.02em] text-[#0B1F3A]"
              style={{ fontSize: "clamp(26px, 3.4vw, 38px)", fontVariationSettings: subHeadAxes }}
            >
              {topic.title}
            </h3>
            <p className="mt-5 font-sans text-[18px] leading-[1.7] text-[#3A4A63] lg:text-[19px]">
              {topic.body}
            </p>
            <ul className="mt-6 space-y-2.5">
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

const ServiceAreasSection = (): JSX.Element => (
  <section aria-labelledby="tax-service-areas-heading" className="relative w-full" style={{ backgroundColor: "#FFFFFF", color: INK }}>
    <div className="relative mx-auto w-full max-w-[1180px] px-6 pb-20 pt-20 sm:px-10 lg:px-16 lg:pb-[120px] lg:pt-[120px]">
      {/* Gold top rule — echoes the site-wide "05 — Service Areas" band */}
      <span aria-hidden="true" className="block h-px w-16" style={{ backgroundColor: "#B88A2D" }} />

      {/* Numbered eyebrow — matches the .sa-eyebrow styling (12px / 600 / 0.22em) */}
      <p className="mt-7 font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em]">
        <span style={{ color: "#B88A2D" }}>05</span>
        <span aria-hidden="true" className="mx-3" style={{ color: "rgba(11,31,58,0.45)" }}>&mdash;</span>
        <span style={{ color: INK }}>Service Areas</span>
      </p>
      <h2 className="sr-only" id="tax-service-areas-heading">Tax service areas</h2>

      <ul className="mt-12 grid grid-cols-1 gap-x-12 gap-y-4 border-t border-[#0B1F3A]/12 pt-10 sm:grid-cols-2">
        {serviceAreas.map((area) => (
          <li className="flex items-start gap-3 font-sans text-[18px] leading-[1.5] text-[#3A4A63]" key={area}>
            <span aria-hidden="true" className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full" style={{ backgroundColor: "#B88A2D" }} />
            <span>{area}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export const TaxPage = (): JSX.Element => {
  useEffect(() => {
    document.title = "Tax Lawyers | ATLAW";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Tax planning and tax controversy for individuals, families, businesses, and nonprofits. ATLAW helps you plan ahead to lower what you owe and defends you when the IRS or the state comes after you.";
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <div className="atlaw-tax min-h-screen bg-ivory text-ink">
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
