import { Fragment } from "react";
import { Link } from "react-router-dom";

// Subtle film grain over the bone canvas — same texture as the Hero/Recognition so the page reads as one system.
const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

// Fraunces variable axes — large editorial headline (mirrors the Hero/Recognition lockup).
const headlineAxes = "'opsz' 144, 'wght' 380, 'SOFT' 30, 'WONK' 0";
// Tighter optical size for the small refined serif lines (location + supporting italic).
const fineAxes = "'opsz' 24, 'wght' 400";

// Top location line — gold middots between cities.
const cities = ["Detroit", "Dubai", "Manila"];

const ArrowRight = ({ className = "" }: { className?: string }): JSX.Element => (
  <svg
    aria-hidden="true"
    className={`h-[14px] w-[14px] transition-transform duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M5 12h14M13 5l7 7-7 7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const FinalCtaSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative isolate w-full overflow-hidden bg-[#0B1F3A] text-white"
    >
      {/* Subtle grain overlay on the navy canvas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{ backgroundImage: grain }}
      />

      {/* Decorative background: faint curved linework + oversized ghost "CONTACT" wordmark */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none overflow-hidden">
        <svg
          className="absolute inset-0 h-full w-full"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1440 760"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* one line sweeping in from the top-left — soft gold */}
          <g className="opacity-[0.14]" stroke="#B88A2D" strokeWidth="1">
            <path d="M-160 80 C 280 250 580 120 960 280" />
            <path d="M-160 -10 C 300 160 520 60 820 170" />
          </g>
          {/* one line sweeping in from the bottom-right — soft white */}
          <g className="opacity-[0.07]" stroke="#FFFFFF" strokeWidth="1">
            <path d="M1600 690 C 1180 520 880 650 480 500" />
            <path d="M1600 780 C 1140 600 900 700 620 610" />
          </g>
        </svg>

        {/* Oversized ghost wordmark — soft white, very low opacity, cropped at both edges */}
        <span
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-serifDisplay font-normal uppercase leading-none tracking-[-0.045em] text-white opacity-[0.05] text-[clamp(140px,21vw,360px)] md:block"
          style={{ fontVariationSettings: headlineAxes }}
        >
          Contact
        </span>
      </div>

      {/* ── Centered editorial column ── */}
      <div className="relative mx-auto flex w-full max-w-[1180px] flex-col items-center px-6 py-[90px] text-center sm:px-10 md:py-[140px] lg:px-20 lg:py-[160px]">
        {/* Top location line — white serif with gold dot separators */}
        <p
          className="hero-rise flex items-center gap-3.5 font-serifDisplay text-[15px] tracking-[0.05em] text-white lg:text-[16px]"
          style={{ fontVariationSettings: fineAxes, animationDelay: "0ms" }}
        >
          {cities.map((city, index) => (
            <Fragment key={city}>
              {index > 0 && (
                <span aria-hidden="true" className="h-[5px] w-[5px] shrink-0 rounded-full bg-[#B88A2D]" />
              )}
              <span>{city}</span>
            </Fragment>
          ))}
        </p>

        {/* Short gold divider beneath the location line */}
        <span
          aria-hidden="true"
          className="hero-rise mt-8 block h-px w-[64px] bg-[#B88A2D]"
          style={{ animationDelay: "80ms" }}
        />

        {/* Section label */}
        <p
          className="hero-rise mt-8 font-sans text-[12px] font-semibold uppercase tracking-[0.28em] text-[#B88A2D] lg:text-[13px]"
          style={{ animationDelay: "140ms" }}
        >
          06 &mdash; Final CTA
        </p>

        {/* Main heading — single amber "brand period" */}
        <h2
          className="hero-rise mt-6 font-serifDisplay font-normal leading-[1.04] tracking-[-0.02em] text-white text-[clamp(42px,7vw,92px)]"
          id="final-cta-heading"
          style={{ fontVariationSettings: headlineAxes, animationDelay: "220ms" }}
        >
          Tell us what happened<span className="text-[#B88A2D]">.</span>
        </h2>

        {/* Supporting paragraph */}
        <p
          className="hero-rise mt-8 max-w-[820px] font-sans text-[18px] leading-[1.6] text-white/80 [text-wrap:balance] lg:text-[21px]"
          style={{ animationDelay: "300ms" }}
        >
          The first conversation is free, and it stays between us. We&rsquo;ll listen, give you our
          honest read, and tell you whether we can help. If we can&rsquo;t, we&rsquo;ll point you to
          someone who can.
        </p>

        {/* ── CTA pair: filled navy primary + outlined navy phone ── */}
        <div
          className="hero-fade mt-12 flex w-full flex-col items-center justify-center gap-5 sm:flex-row sm:gap-10 lg:mt-14"
          style={{ animationDelay: "420ms" }}
        >
          <Link
            className="group inline-flex h-[64px] w-full max-w-[340px] items-center justify-center gap-2.5 rounded-full bg-white px-9 font-sans text-[15px] font-medium text-[#0B1F3A] transition-all duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#F4EFE6] hover:shadow-[0_10px_30px_rgba(0,0,0,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88A2D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1F3A] sm:w-[350px] lg:h-[68px]"
            to="/contact"
          >
            Schedule a call
            <ArrowRight className="group-hover:translate-x-1" />
          </Link>
          <a
            className="group inline-flex h-[64px] w-full max-w-[340px] items-center justify-center rounded-full border border-white/40 bg-transparent px-9 font-sans text-[15px] font-medium tracking-[0.02em] text-white transition-all duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88A2D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1F3A] sm:w-[350px] lg:h-[68px]"
            href="tel:+13134067606"
          >
            (313) 406-7606
          </a>
        </div>

        {/* ── Gold divider with a centred gold dot ── */}
        <span aria-hidden="true" className="mt-16 flex w-full max-w-[260px] items-center gap-3">
          <span className="h-px flex-1 bg-gradient-to-l from-[#B88A2D]/45 to-transparent" />
          <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-[#B88A2D]" />
          <span className="h-px flex-1 bg-gradient-to-r from-[#B88A2D]/45 to-transparent" />
        </span>

        {/* Supporting italic line — refined serif, understated */}
        <p
          className="mt-8 font-serifDisplay text-[16px] italic leading-[1.6] tracking-[-0.005em] text-white/70 lg:text-[19px]"
          style={{ fontVariationSettings: fineAxes }}
        >
          Office in Dearborn. Clients across the U.S.
        </p>

        {/* ── Quatrefoil ornament — same gold line motif as the Recognition section ── */}
        <svg
          aria-hidden="true"
          className="mt-10"
          fill="none"
          height="26"
          stroke="#B88A2D"
          strokeWidth="1"
          viewBox="0 0 26 26"
          width="26"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="13" cy="7" r="4" />
          <circle cx="13" cy="19" r="4" />
          <circle cx="7" cy="13" r="4" />
          <circle cx="19" cy="13" r="4" />
          <circle cx="13" cy="13" fill="#B88A2D" r="1.2" stroke="none" />
        </svg>
      </div>
    </section>
  );
};
