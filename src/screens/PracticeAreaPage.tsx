import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Header } from "../components/ATLAW/Header";
import { ServiceAreas } from "../components/ATLAW/ServiceAreas";
import { Footer } from "../components/ATLAW/Footer";
import {
  practiceAreasBySlug,
  type PracticeArea,
} from "../data/practiceAreas";

const headlineAxes = "'opsz' 144, 'wght' 380, 'SOFT' 0, 'WONK' 0";
const subHeadlineAxes = "'opsz' 96, 'wght' 400, 'SOFT' 0, 'WONK' 0";

const NAVY_HERO = "#0e1b33";
const NAVY_DEEP = "#0a1428";
// Canonical navy band — matches the Service Areas scheme used site-wide.
const NAVY_CANVAS = "linear-gradient(180deg, #0e1b33 0%, #0a1428 100%)";
const IVORY = "#FFFFFF";
const GOLD = "#D39A2A";

const microcopyByCategory: Record<PracticeArea["category"], string> = {
  RECOVER: "For people hurt in accidents, collisions, medical errors, or on the job.",
  BUILD: "For founders, owners, and investors building something durable.",
  PROTECT: "For families and individuals planning ahead or sorting out a dispute.",
  DEFEND: "For clients facing criminal charges, investigations, or serious civil exposure.",
};

const HeroOrbitals = ({ category }: { category: PracticeArea["category"] }): JSX.Element => {
  // Slight variation per category so each page reads distinctly while staying in-system.
  const seed = { RECOVER: 0, BUILD: 1, PROTECT: 2, DEFEND: 3 }[category];
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1440 760"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* dotted curve (top-right sweep) */}
      <path
        d={`M ${1500 - seed * 30} ${120 + seed * 20} C 1100 ${260 + seed * 10}, 780 ${360 + seed * 15}, ${-60 + seed * 20} ${640 + seed * 10}`}
        stroke="rgba(211,154,42,0.28)"
        strokeDasharray="2 9"
        strokeLinecap="round"
        strokeWidth="1"
      />
      {/* solid curve (mid sweep, white) */}
      <path
        d={`M -60 ${380 - seed * 10} C 320 ${260 + seed * 8}, 760 ${500 + seed * 10}, 1520 ${300 + seed * 12}`}
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1"
      />
      {/* solid curve (bottom gold) */}
      <path
        d={`M -40 ${720 - seed * 8} C 420 ${600 - seed * 6}, 920 ${680 + seed * 4}, 1500 ${500 - seed * 10}`}
        stroke="rgba(211,154,42,0.16)"
        strokeWidth="1"
      />

      {/* gold dots along the curves */}
      <circle cx={1180 - seed * 20} cy={210 + seed * 6} fill={GOLD} r="3.5" />
      <circle cx={260} cy={310 + seed * 4} fill={GOLD} r="3" />
      <circle cx={920} cy={420 + seed * 8} fill={GOLD} r="3" />
      <circle cx={1320} cy={520 - seed * 6} fill={GOLD} r="3.5" />
      <circle cx={140 + seed * 30} cy={690 - seed * 4} fill={GOLD} r="3" />
    </svg>
  );
};

const Hero = ({ area }: { area: PracticeArea }): JSX.Element => {
  const microcopy = microcopyByCategory[area.category];

  return (
    <section
      aria-labelledby="practice-area-title"
      className="relative isolate w-full overflow-hidden"
      style={{ backgroundColor: NAVY_DEEP, color: IVORY }}
    >
      {/* depth gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 22% 18%, rgba(38,72,124,0.32), transparent 70%), radial-gradient(ellipse 55% 60% at 82% 80%, rgba(20,42,76,0.45), transparent 70%), linear-gradient(180deg, #0e1b33 0%, #0a1428 100%)",
        }}
      />

      {/* huge background word */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-serifDisplay font-bold uppercase leading-none text-white md:block"
        style={{
          fontSize: "clamp(180px, 24vw, 470px)",
          opacity: 0.045,
          letterSpacing: "-0.06em",
        }}
      >
        {area.category}
      </span>

      <HeroOrbitals category={area.category} />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-[100px] pt-[88px] sm:px-10 md:pb-[120px] md:pt-[112px] lg:px-20 lg:pb-[150px] lg:pt-[140px]">
        <div className="max-w-[820px]">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="font-sans text-[11.5px] font-semibold uppercase leading-[1.5] tracking-[0.22em]"
            style={{ marginBottom: "42px" }}
          >
            <ol className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <li>
                <Link
                  className="text-white/55 transition-colors hover:text-white/90"
                  to="/"
                >
                  ATLAW
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/30">
                /
              </li>
              <li>
                <Link
                  className="text-white/55 transition-colors hover:text-white/90"
                  to="/practice-areas"
                >
                  Practice Areas
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/30">
                /
              </li>
              <li>
                <span aria-current="page" className="text-[#FFFFFF]">
                  {area.name}
                </span>
              </li>
            </ol>
          </nav>

          {/* Marker */}
          <p
            className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.28em]"
            style={{ color: GOLD, marginBottom: "28px" }}
          >
            <span>{area.categoryNumber}</span>
            <span aria-hidden="true" className="mx-3 text-[rgba(211,154,42,0.55)]">&mdash;</span>
            <span>{area.category}</span>
          </p>

          {/* H1 */}
          <h1
            className="font-serifDisplay font-normal tracking-[-0.025em] text-[#FFFFFF]"
            id="practice-area-title"
            style={{
              fontSize: "clamp(52px, 8.5vw, 125px)",
              lineHeight: "0.95",
              fontVariationSettings: headlineAxes,
              marginBottom: "28px",
            }}
          >
            {area.name}
            <span aria-hidden="true" style={{ color: GOLD }}>.</span>
          </h1>

          {/* Gold accent rule under headline */}
          <span
            aria-hidden="true"
            className="block"
            style={{
              width: "56px",
              height: "2px",
              background: GOLD,
              marginBottom: "28px",
            }}
          />

          {/* Subtitle */}
          <p
            className="font-sans text-[17px] leading-[1.55] text-[rgba(245,239,229,0.85)] sm:text-[18.5px] lg:text-[20px]"
            style={{ marginTop: 0, maxWidth: "720px" }}
          >
            {area.subtitle}
          </p>

          {/* Microcopy */}
          <p
            className="font-sans text-[14px] italic leading-[1.6] text-[rgba(245,239,229,0.55)]"
            style={{ marginTop: "14px", maxWidth: "640px" }}
          >
            {microcopy}
          </p>
        </div>
      </div>
    </section>
  );
};

const Intro = ({ area }: { area: PracticeArea }): JSX.Element => (
  <section
    aria-labelledby="intro-heading"
    className="relative w-full"
    style={{ backgroundColor: "#FFFFFF", color: "#0B1F3A" }}
  >
    <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-20 pt-20 sm:px-10 lg:px-20 lg:pb-[120px] lg:pt-[120px]">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:gap-20">
        <div>
          <p className="font-sans text-[11.5px] font-semibold uppercase leading-none tracking-[0.24em] text-[#B88A2D]">
            <span className="mr-3 inline-block h-px w-8 align-middle bg-[#B88A2D]" />
            Overview
          </p>
          <h2
            className="mt-6 font-serifDisplay text-[32px] font-normal leading-[1.08] tracking-[-0.02em] text-[#0B1F3A] lg:text-[42px]"
            id="intro-heading"
            style={{ fontVariationSettings: subHeadlineAxes }}
          >
            How we practice {area.name.toLowerCase()}
            <span aria-hidden="true" style={{ color: GOLD }}>.</span>
          </h2>
        </div>

        <div className="space-y-6 font-sans text-[16.5px] leading-[1.75] text-[#3A4A63] lg:text-[18px]">
          {area.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const WhatWeHandle = ({ area }: { area: PracticeArea }): JSX.Element => (
  <section
    aria-labelledby="key-areas-heading"
    className="relative w-full"
    style={{ background: NAVY_CANVAS, color: IVORY }}
  >
    <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-20 pt-20 sm:px-10 lg:px-20 lg:pb-[120px] lg:pt-[120px]">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:gap-20">
        <div>
          <p className="font-sans text-[11.5px] font-semibold uppercase leading-none tracking-[0.24em] text-[#D39A2A]">
            <span className="mr-3 inline-block h-px w-8 align-middle bg-[#D39A2A]" />
            Key Areas
          </p>
          <h2
            className="mt-6 font-serifDisplay text-[32px] font-normal leading-[1.08] tracking-[-0.02em] text-[#FFFFFF] lg:text-[42px]"
            id="key-areas-heading"
            style={{ fontVariationSettings: subHeadlineAxes }}
          >
            Specific work inside this practice
            <span aria-hidden="true" style={{ color: GOLD }}>.</span>
          </h2>
        </div>

        <ul className="grid grid-cols-1 divide-y divide-white/10 border-y border-white/10">
          {area.whatWeHandle.map((item, index) => (
            <li
              className="flex items-start gap-6 py-5 font-sans text-[16px] leading-[1.55] text-[#FFFFFF] lg:text-[17.5px]"
              key={item}
            >
              <span
                aria-hidden="true"
                className="mt-[6px] inline-block w-8 shrink-0 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D39A2A]"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const WhenToCall = ({ area }: { area: PracticeArea }): JSX.Element => (
  <section
    aria-labelledby="when-to-call-heading"
    className="relative w-full"
    style={{ backgroundColor: "#FFFFFF", color: "#0B1F3A" }}
  >
    <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-20 pt-20 sm:px-10 lg:px-20 lg:pb-[120px] lg:pt-[120px]">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:gap-20">
        <div>
          <p className="font-sans text-[11.5px] font-semibold uppercase leading-none tracking-[0.24em] text-[#B88A2D]">
            <span className="mr-3 inline-block h-px w-8 align-middle bg-[#B88A2D]" />
            When to call us
          </p>
          <h2
            className="mt-6 font-serifDisplay text-[32px] font-normal leading-[1.08] tracking-[-0.02em] text-[#0B1F3A] lg:text-[42px]"
            id="when-to-call-heading"
            style={{ fontVariationSettings: subHeadlineAxes }}
          >
            Common triggers for engaging us
            <span aria-hidden="true" style={{ color: GOLD }}>.</span>
          </h2>
          <p className="mt-6 font-sans text-[14.5px] italic leading-[1.6] text-[#7A7466]">
            If any of these apply, the next move usually benefits from being early.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {area.whenToCall.map((item) => (
            <div
              className="flex h-full flex-col rounded-[18px] border border-[#FFFFFF] bg-white p-6 shadow-[0_6px_22px_rgba(11,31,58,0.06)] transition-colors hover:border-[#FFFFFF]"
              key={item}
            >
              <span
                aria-hidden="true"
                className="font-serifDisplay text-[28px] leading-none"
                style={{ color: GOLD }}
              >
                &middot;
              </span>
              <p className="mt-4 font-sans text-[15.5px] leading-[1.65] text-[#3A4A63]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Approach = ({ area }: { area: PracticeArea }): JSX.Element => (
  <section
    aria-labelledby="approach-heading"
    className="relative w-full"
    style={{ background: NAVY_CANVAS, color: IVORY }}
  >
    <div className="relative mx-auto w-full max-w-[1180px] px-6 pb-24 pt-24 sm:px-10 lg:px-20 lg:pb-[140px] lg:pt-[140px]">
      <p
        className="text-center font-sans text-[11.5px] font-semibold uppercase leading-none tracking-[0.28em]"
        id="approach-heading"
        style={{ color: GOLD }}
      >
        Our approach
      </p>
      <blockquote
        className="mx-auto mt-8 max-w-[960px] text-center font-serifDisplay font-normal leading-[1.2] tracking-[-0.015em] text-[#FFFFFF]"
        style={{
          fontSize: "clamp(26px, 2.8vw, 42px)",
          fontVariationSettings: subHeadlineAxes,
        }}
      >
        &ldquo;{area.approach}&rdquo;
      </blockquote>
    </div>
  </section>
);

const RelatedAreas = ({ area }: { area: PracticeArea }): JSX.Element => {
  const related = area.relatedSlugs
    .map((slug) => practiceAreasBySlug[slug])
    .filter((entry): entry is PracticeArea => Boolean(entry));

  if (related.length === 0) return <></>;

  return (
    <section
      aria-labelledby="related-heading"
      className="relative w-full"
      style={{ backgroundColor: "#FFFFFF", color: "#0B1F3A" }}
    >
      <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-20 pt-20 sm:px-10 lg:px-20 lg:pb-[120px] lg:pt-[120px]">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-sans text-[11.5px] font-semibold uppercase leading-none tracking-[0.24em] text-[#B88A2D]">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-[#B88A2D]" />
              Related practice areas
            </p>
            <h2
              className="mt-6 font-serifDisplay text-[28px] font-normal leading-[1.1] tracking-[-0.02em] text-[#0B1F3A] lg:text-[38px]"
              id="related-heading"
              style={{ fontVariationSettings: subHeadlineAxes }}
            >
              Adjacent work that often shows up alongside this
              <span aria-hidden="true" style={{ color: GOLD }}>.</span>
            </h2>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {related.map((entry) => (
            <Link
              className="group flex h-full flex-col rounded-[20px] border border-[#FFFFFF] bg-white p-6 shadow-[0_8px_24px_rgba(11,31,58,0.06)] transition-all duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[3px] hover:border-[rgba(184,138,45,0.5)] hover:shadow-[0_18px_38px_rgba(11,31,58,0.14)]"
              key={entry.slug}
              to={`/practice-areas/${entry.slug}`}
            >
              <p className="font-sans text-[10.5px] font-semibold uppercase leading-none tracking-[0.22em] text-[#B88A2D]">
                {entry.categoryNumber} &mdash; {entry.category}
              </p>
              <h3
                className="mt-4 font-serifDisplay text-[22px] font-normal leading-[1.18] tracking-[-0.015em] text-[#0B1F3A]"
                style={{ fontVariationSettings: subHeadlineAxes }}
              >
                {entry.navLabel ?? entry.name}
              </h3>
              <p className="mt-3 font-sans text-[14px] leading-[1.55] text-[#3A4A63]">
                {entry.subtitle}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-sans text-[11.5px] font-semibold uppercase tracking-[0.22em] text-[#0B1F3A] transition-colors group-hover:text-[#B88A2D]">
                Read more
                <span aria-hidden="true">&rarr;</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export const PracticeAreaPage = (): JSX.Element => {
  const { slug } = useParams<{ slug: string }>();
  const area = slug ? practiceAreasBySlug[slug] : undefined;

  useEffect(() => {
    if (!area) return;
    document.title = `${area.name} — ATLAW Group`;
    // SEO: meta description
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = area.subtitle;

    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [area]);

  if (!area) {
    return <Navigate replace to="/practice-areas" />;
  }

  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Header />
      <main>
        <Hero area={area} />
        <Intro area={area} />
        <WhatWeHandle area={area} />
        <WhenToCall area={area} />
        <Approach area={area} />
        <RelatedAreas area={area} />
        <ServiceAreas />
      </main>
      <Footer />
    </div>
  );
};
