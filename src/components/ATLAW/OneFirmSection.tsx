import { Fragment } from "react";

// Fraunces variable axes for the display lockup (resolves to Georgia until Fraunces loads) — matches the Hero/About headings.
const headlineAxes = "'opsz' 144, 'wght' 380, 'SOFT' 30, 'WONK' 0";

// Single source of truth for the centered practice-area row.
const practiceAreas = [
  "Personal Injury",
  "Business",
  "Criminal",
  "Estate",
  "Tax",
  "Immigration",
  "Litigation",
];

export const OneFirmSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="one-firm-heading"
      className="relative isolate w-full overflow-hidden bg-[#0B1A2D] text-[#FFFFFF]"
    >
      {/* Deep-navy field — soft radial glow up top, same family as the "Firm, in numbers" band below */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 18%, rgba(46, 95, 167, 0.20), transparent 65%), linear-gradient(180deg, #0B1A2D 0%, #10243D 45%, #061323 100%)",
        }}
      />

      {/* Decorative background: faint curved linework (top-left + bottom-right) + oversized ghost "ATLAW" wordmark */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none overflow-hidden">
        {/* Soft light arcs — entering top-left and bottom-right, mirrored diagonally. Hidden on very small screens. */}
        <svg
          className="absolute inset-0 hidden h-full w-full sm:block"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1440 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="rgba(158, 183, 213, 0.14)" strokeWidth="1">
            {/* top-left */}
            <path d="M-120 40 C 220 200 520 80 880 220" />
            <path d="M-120 -40 C 260 120 480 30 760 120" />
            {/* bottom-right */}
            <path d="M1560 760 C 1220 600 920 720 560 580" />
            <path d="M1560 840 C 1180 680 960 770 680 680" />
          </g>
        </svg>

        {/* Oversized ghost wordmark — centered behind the content, faint light tone, spans most of the width */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="whitespace-nowrap font-serifDisplay font-normal uppercase leading-none tracking-[-0.04em] text-[#FFFFFF] opacity-[0.03] text-[clamp(140px,24vw,360px)]"
            style={{ fontVariationSettings: headlineAxes }}
          >
            ATLAW
          </span>
        </div>
      </div>

      {/* ── Centered editorial column ── */}
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 py-[90px] text-center sm:px-10 md:py-[120px] lg:px-20 lg:py-[165px]">
        {/* Top gold divider */}
        <span
          aria-hidden="true"
          className="hero-rise block h-px w-[64px] bg-[#B88A2D]"
          style={{ animationDelay: "0ms" }}
        />

        {/* Section label */}
        <p
          className="hero-rise mt-9 font-sans text-[13px] font-semibold uppercase tracking-[0.2em] text-[#B88A2D]"
          style={{ animationDelay: "80ms" }}
        >
          04 &mdash; One Firm
        </p>

        {/* Main heading */}
        <h2
          className="hero-rise mt-7 max-w-[1000px] font-serifDisplay font-normal leading-[1.08] tracking-[-0.02em] text-[#FFFFFF] text-[clamp(36px,6vw,76px)]"
          id="one-firm-heading"
          style={{ fontVariationSettings: headlineAxes, animationDelay: "160ms" }}
        >
          <span className="block">One firm. The right attorney</span>
          <span className="block">
            for what you&rsquo;re dealing with<span className="text-[#B88A2D]">.</span>
          </span>
        </h2>

        {/* Paragraph */}
        <p
          className="hero-rise mt-10 max-w-[800px] font-serifDisplay leading-[1.65] tracking-[-0.005em] text-[#C9D4E2] [text-wrap:balance] text-[clamp(17px,1.45vw,21px)]"
          style={{ fontVariationSettings: "'opsz' 24, 'wght' 400", animationDelay: "240ms" }}
        >
          ATLAW represents people, families, and businesses in serious legal matters:
          personal injury, business, criminal, estate, tax, immigration, and litigation.
          We connect you with the attorney who handles that area for us, and we stay
          involved from the first call through the resolution.
        </p>

        {/* Practice-area row — wraps into centered rows on narrow screens, amber dots between items */}
        <ul
          className="hero-rise mt-[72px] flex max-w-[920px] flex-wrap items-center justify-center gap-x-3.5 gap-y-3 font-sans text-[13px] font-semibold uppercase tracking-[0.13em] text-[#FFFFFF] lg:mt-[80px]"
          style={{ animationDelay: "320ms" }}
        >
          {practiceAreas.map((area, index) => (
            <Fragment key={area}>
              {index > 0 && (
                <li aria-hidden="true">
                  <span className="block h-[5px] w-[5px] rounded-full bg-[#B88A2D]" />
                </li>
              )}
              <li>{area}</li>
            </Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
};
