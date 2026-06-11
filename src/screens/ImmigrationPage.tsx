import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/ATLAW/Header";
import { ServiceAreas } from "../components/ATLAW/ServiceAreas";
import { Footer } from "../components/ATLAW/Footer";
import { intro, topics, serviceAreas } from "../data/practice/immigration";
import "./Immigration.css";

const GOLD = "#C9A24B";
const headlineAxes = "'opsz' 144, 'wght' 360, 'SOFT' 0, 'WONK' 0";
const subHeadAxes = "'opsz' 96, 'wght' 400, 'SOFT' 0, 'WONK' 0";

const navyCanvas = "linear-gradient(180deg, #0E1B33 0%, #0A1428 100%)";

// Hero photo — dedicated immigration shot, converted to web-optimized AVIF.
const heroImage = "/assets/immigration-hero.avif";

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
    aria-labelledby="immig-hero-title"
    className="relative isolate w-full overflow-hidden"
    style={{ background: navyCanvas, color: "#F4F1EA" }}
  >
    {/* Background photo (decorative) */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
    {/* Navy gradient: solid on the left so the text stays legible, fading right */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        background:
          "linear-gradient(90deg, rgba(19,29,56,0.95) 0%, rgba(19,29,56,0.85) 30%, rgba(19,29,56,0.45) 70%, rgba(19,29,56,0.2) 100%)",
      }}
    />
    {/* Extra veil on narrow screens, where the text column runs full-width */}
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
          className="immig-reveal mb-9 font-sans text-[11.5px] font-semibold uppercase leading-none tracking-[0.2em]"
          style={{ animationDelay: "0ms" }}
        >
          <ol className="flex flex-wrap items-center gap-x-3 gap-y-1 text-white/55">
            <li><Link className="transition-colors hover:text-white/90" to="/">ATLAW</Link></li>
            <li aria-hidden="true" className="text-white/30">/</li>
            <li><Link className="transition-colors hover:text-white/90" to="/practice-areas">Practice Areas</Link></li>
            <li aria-hidden="true" className="text-white/30">/</li>
            <li><span aria-current="page" className="text-white">Immigration</span></li>
          </ol>
        </nav>

        {/* Marker */}
        <p
          className="immig-reveal font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.28em]"
          style={{ animationDelay: "90ms", color: GOLD, marginBottom: "28px" }}
        >
          <span>03</span>
          <span aria-hidden="true" className="mx-3 text-[rgba(201,162,75,0.55)]">&mdash;</span>
          <span>Protect</span>
        </p>

        {/* H1 */}
        <h1
          className="immig-reveal font-serifDisplay font-normal tracking-[-0.03em] text-[#F4F1EA]"
          id="immig-hero-title"
          style={{
            animationDelay: "200ms",
            fontSize: "clamp(52px, 8.5vw, 118px)",
            lineHeight: "0.95",
            fontVariationSettings: headlineAxes,
          }}
        >
          Immigration
          <span aria-hidden="true" style={{ color: GOLD }}>.</span>
        </h1>

        {/* Gold accent rule */}
        <span
          aria-hidden="true"
          className="immig-reveal block"
          style={{ animationDelay: "280ms", width: "56px", height: "2px", background: GOLD, marginTop: "28px", marginBottom: "28px" }}
        />

        {/* Tagline */}
        <p
          className="immig-reveal max-w-[680px] font-sans text-[18px] leading-[1.55] text-[rgba(244,241,234,0.85)] md:text-[20px]"
          style={{ animationDelay: "340ms" }}
        >
          We help you and your family build a future here.
        </p>
      </div>
    </div>
  </section>
);

const Body = (): JSX.Element => (
  <section
    aria-labelledby="immig-body-heading"
    className="relative w-full overflow-hidden"
    style={{ backgroundColor: "#FFFFFF", color: "#0B1F3A" }}
  >
    <div className="relative mx-auto w-full max-w-[820px] px-6 pb-20 pt-20 sm:px-10 lg:pb-[120px] lg:pt-[120px]">
      {/* Overview eyebrow + intro */}
      <p className="immig-reveal flex items-center gap-3 font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#0B1F3A]">
        <span aria-hidden="true" className="h-px w-8" style={{ backgroundColor: "#B88A2D" }} />
        Overview
      </p>
      <h2 className="sr-only" id="immig-body-heading">How we handle immigration matters</h2>
      <p
        className="immig-reveal mt-7 font-serifDisplay text-[22px] font-normal leading-[1.5] tracking-[-0.01em] text-[#0B1F3A] sm:text-[24px] lg:text-[26px]"
        style={{ animationDelay: "80ms", fontVariationSettings: subHeadAxes }}
      >
        {intro}
      </p>

      {/* Sub-topics — single column, no boxes */}
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

const ServiceAreasList = (): JSX.Element => (
  <section aria-labelledby="immig-serviceareas-heading" className="relative w-full" style={{ backgroundColor: "#FFFFFF", color: "#0B1F3A" }}>
    <div className="relative mx-auto w-full max-w-[1180px] px-6 pb-20 pt-20 sm:px-10 lg:px-16 lg:pb-[120px] lg:pt-[120px]">
      <p className="flex items-center gap-3 font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#0B1F3A]">
        <span aria-hidden="true" className="h-px w-8" style={{ backgroundColor: "#B88A2D" }} />
        Service areas
      </p>
      <h2
        className="mt-6 max-w-[760px] font-serifDisplay font-normal leading-[1.05] tracking-[-0.025em] text-[#0B1F3A]"
        id="immig-serviceareas-heading"
        style={{ fontSize: "clamp(30px, 4vw, 52px)", fontVariationSettings: headlineAxes }}
      >
        What we handle
        <span aria-hidden="true" style={{ color: "#B88A2D" }}>.</span>
      </h2>

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

export const ImmigrationPage = (): JSX.Element => {
  useEffect(() => {
    document.title = "Immigration Lawyers | ATLAW";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "ATLAW handles the full range of immigration matters — removal defense, family-based petitions, citizenship, asylum, DACA, and work and investment visas — for individuals, families, and employers.";
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <div className="atlaw-immig min-h-screen bg-ivory text-ink">
      <Header />
      <main>
        <Hero />
        <Body />
        <ServiceAreasList />
        <ServiceAreas />
      </main>
      <Footer />
    </div>
  );
};
