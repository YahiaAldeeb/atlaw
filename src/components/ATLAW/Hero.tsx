// Subtle film grain over the cream canvas — keeps the background from feeling digital/flat.
const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

// Fraunces variable axes for the display lockup.
const headlineAxes = "'opsz' 144, 'wght' 380, 'SOFT' 30, 'WONK' 0";

const ArrowRight = ({ className = "" }: { className?: string }) => (
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

export const Hero = (): JSX.Element => {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#F1ECE2] lg:h-[clamp(620px,82vh,820px)]">
      {/* Cream-grain texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-multiply"
        style={{ backgroundImage: grain }}
      />

      {/* Oversized ghost "A" watermark — partially off-canvas, far left */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute select-none font-serifDisplay leading-[0.8] hidden md:block"
        style={{
          left: "-6vw",
          top: "-4vw",
          fontSize: "min(52vw, 920px)",
          color: "#0E1B2C",
          opacity: 0.04,
          fontVariationSettings: "'opsz' 144, 'wght' 600",
        }}
      >
        A
      </span>

      <div className="relative flex w-full flex-col lg:h-full lg:flex-row">
        {/* ── Left column: editorial text block ── */}
        <div className="relative z-20 flex flex-col px-6 pb-14 pt-12 sm:px-10 lg:basis-[55%] lg:max-w-[55%] lg:pb-[clamp(32px,4vh,64px)] lg:pl-[clamp(48px,7vw,160px)] lg:pr-[clamp(24px,3vw,72px)] lg:pt-[clamp(48px,6vh,96px)]">
          {/* Eyebrow */}
          <p className="flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-[72px] shrink-0 bg-[#C6A04A]" />
            <span className="font-sans text-[12px] font-medium uppercase tracking-[0.24em] text-[#3A4A5E]">
              Detroit. National network. Founded by Dewnya Bazzi.
            </span>
          </p>

          {/* Headline lockup */}
          <h1
            className="mt-8 font-serifDisplay leading-[0.92] tracking-[-0.02em] text-[#0E1B2C] lg:mt-10"
            style={{ fontVariationSettings: headlineAxes }}
          >
            <span
              className="hero-rise block text-[clamp(46px,12vw,68px)] lg:text-[clamp(72px,6.4vw,104px)]"
              style={{ animationDelay: "0ms" }}
            >
              If it&rsquo;s law,
            </span>
            <span
              className="hero-rise block text-[clamp(56px,16vw,84px)] lg:whitespace-nowrap lg:text-[clamp(96px,8.4vw,140px)]"
              style={{ animationDelay: "80ms" }}
            >
              it&rsquo;s ATLAW
              <span
                aria-hidden="true"
                className="ml-[0.04em] inline-block h-[0.14em] w-[0.14em] translate-y-[0.02em] rounded-full bg-[#C6A04A] align-baseline"
              />
            </span>
          </h1>

          {/* Body + CTAs + reassurance fade in together */}
          <div className="hero-fade" style={{ animationDelay: "800ms" }}>
            <p
              className="mt-8 max-w-[640px] font-serifDisplay text-[18px] leading-[1.55] tracking-[-0.005em] text-[#3A4A5E] lg:mt-9 lg:text-[19px]"
              style={{ fontVariationSettings: "'opsz' 36, 'wght' 400" }}
            >
              ATLAW represents individuals, families, and businesses across injury,
              criminal, business, estate, tax, and immigration matters. We connect
              every client with the right attorney for the issue in front of them.
            </p>

            {/* CTA pair */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center lg:mt-9">
              <a
                className="group inline-flex h-[56px] items-center justify-center gap-2.5 rounded-full bg-[#0E1B2C] px-8 font-sans text-[15px] font-medium text-white transition-all duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#16263B] hover:shadow-[0_8px_24px_rgba(14,27,44,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A04A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F1ECE2] lg:h-[60px] lg:px-9"
                href="https://j098jiq3pk7.typeform.com/to/Mslg7Y7f"
                rel="noopener noreferrer"
                target="_blank"
              >
                Talk to a lawyer
                <ArrowRight className="group-hover:translate-x-1" />
              </a>
              <a
                className="group inline-flex h-[56px] items-center justify-center gap-2.5 rounded-full border border-[rgba(14,27,44,0.35)] bg-transparent px-8 font-sans text-[15px] font-medium text-[#0E1B2C] transition-all duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#0E1B2C] hover:bg-[#0E1B2C] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A04A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F1ECE2] lg:h-[60px] lg:px-9"
                href="#firm-thesis"
              >
                See what we do
                <ArrowRight className="group-hover:translate-x-1" />
              </a>
            </div>

            {/* Reassurance */}
            <p className="mt-6 flex items-center gap-2.5 font-serifDisplay text-[15px] italic text-[#3A4A5E] lg:mt-7 lg:text-[16px]">
              <span aria-hidden="true" className="h-[6px] w-[6px] shrink-0 rounded-full bg-[#C6A04A]" />
              30-minute first call. Free. No pressure to hire us.
            </p>
          </div>
        </div>

        {/* ── Right column: founder portrait ── */}
        <div className="relative z-10 flex flex-1 items-end justify-center lg:basis-[45%]">
          {/* Subtle vertical divider — anchored to ~55% of the hero on desktop */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-[60px] bottom-[40px] hidden w-px bg-[rgba(14,27,44,0.12)] lg:block"
          />

          <img
            alt="Dewnya Bazzi, ATLAW founder and CEO"
            className="hero-fade block h-auto w-[92vw] max-w-[460px] object-contain object-bottom lg:absolute lg:bottom-0 lg:right-[clamp(16px,2vw,48px)] lg:top-auto lg:h-full lg:max-h-full lg:w-auto lg:max-w-[46vw]"
            height={941}
            src="/assets/hero/atlaw-founder-cutout.avif"
            style={{ animationDelay: "200ms", animationDuration: "1000ms" }}
            width={1037}
          />
        </div>
      </div>
    </section>
  );
};
