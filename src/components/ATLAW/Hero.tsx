// Subtle film grain over the bone canvas — kills the digital "plasticky" feel (brief §8.7).
const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

// Fraunces variable axes for the display lockup (weight 380, optical size 144, SOFT 30, WONK 0).
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
    <section className="relative overflow-hidden bg-[#F4EFE6]">
      {/* 3% grain overlay on the canvas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-multiply"
        style={{ backgroundImage: grain }}
      />

      <div className="relative mx-auto w-full max-w-[1440px] lg:min-h-[82vh]">
        {/* ── Left column: editorial text block ── */}
        <div className="relative z-20 flex flex-col px-6 pb-4 pt-12 sm:px-10 lg:min-h-[82vh] lg:w-[58%] lg:justify-center lg:py-0 lg:pl-20 lg:pr-0">
          {/* Eyebrow — amber broadsheet rule + stone tracked label */}
          <p className="flex items-center gap-3.5">
            <span aria-hidden="true" className="h-px w-[52px] shrink-0 bg-[#B88A2D]" />
            <span className="font-sans text-[12px] font-medium uppercase tracking-[0.18em] text-[#7A7466]">
              Detroit. National network. Founded by Dewnya Bazzi.
            </span>
          </p>

          {/* Headline lockup — crosses slightly into the portrait zone */}
          <h1
            className="mt-8 font-serifDisplay leading-[0.92] tracking-[-0.025em] text-[#0B1F3A]"
            style={{ fontVariationSettings: headlineAxes }}
          >
            <span
              className="hero-rise block text-[clamp(42px,12vw,64px)] lg:text-[clamp(56px,5.5vw,88px)]"
              style={{ animationDelay: "0ms" }}
            >
              If it&rsquo;s law,
            </span>
            <span
              className="hero-rise block text-[clamp(56px,16vw,82px)] lg:whitespace-nowrap lg:text-[clamp(96px,11vw,170px)]"
              style={{ animationDelay: "60ms" }}
            >
              it&rsquo;s ATLAW<span className="text-[#B88A2D]">.</span>
            </span>
          </h1>

          {/* Everything below the headline fades in together at 800ms */}
          <div className="hero-fade" style={{ animationDelay: "800ms" }}>
            <p
              className="mt-9 max-w-[620px] font-serifDisplay text-[19px] leading-[1.55] tracking-[-0.005em] text-[#3A4A63]"
              style={{ fontVariationSettings: "'opsz' 24, 'wght' 400" }}
            >
              ATLAW represents individuals, families, and businesses across injury,
              criminal, business, estate, tax, and immigration matters. We connect
              every client with the right attorney for the issue in front of them.
            </p>

            {/* CTA pair */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#0B1F3A] px-7 py-4 font-sans text-[14px] font-medium text-[#F4EFE6] transition-all duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#1A2B47] hover:shadow-[0_8px_24px_rgba(11,31,58,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88A2D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4EFE6]"
                href="https://j098jiq3pk7.typeform.com/to/Mslg7Y7f"
                rel="noopener noreferrer"
                target="_blank"
              >
                Talk to a lawyer
                <ArrowRight className="group-hover:translate-x-1" />
              </a>
              <a
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-[rgba(11,31,58,0.20)] bg-transparent px-7 py-4 font-sans text-[14px] font-medium text-[#0B1F3A] transition-all duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#0B1F3A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88A2D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4EFE6]"
                href="#firm-thesis"
              >
                See what we do
                <ArrowRight className="group-hover:translate-x-1" />
              </a>
            </div>

            {/* Microcopy — amber dot prefix */}
            <p className="mt-5 flex items-center gap-2 font-sans text-[13px] italic text-[#7A7466]">
              <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full bg-[#B88A2D]" />
              30-minute first call. Free. No pressure to hire us.
            </p>
          </div>
        </div>

        {/* ── Right column: founder portrait (absolute on desktop, kisses the right edge) ── */}
        <div className="relative z-10 mt-12 px-6 sm:px-10 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:flex lg:w-[46%] lg:items-end lg:justify-end lg:px-0">
          {/* Vertical hairline "spine" — floor to ceiling of the hero */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 hidden w-px bg-[#E8E1D3] lg:block"
          />

          <img
            alt="Dewnya Bazzi, ATLAW founder and CEO"
            className="hero-fade mx-auto h-auto w-full max-w-[420px] object-contain object-bottom lg:mx-0 lg:max-w-[520px]"
            src="/assets/atlaw-portrait.png"
            style={{ animationDelay: "200ms", animationDuration: "1000ms" }}
          />
        </div>
      </div>
    </section>
  );
};
