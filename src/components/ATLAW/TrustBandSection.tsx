type Stat = {
  value: string;
  description: string[];
};

const stats: Stat[] = [
  {
    value: "16",
    description: ["CITIES ACROSS", "THE AMERICAS, MENA,", "EUROPE, AND ASIA."],
  },
  {
    value: "50+",
    description: ["PRACTICE AREAS", "ACROSS ADVISORY,", "LITIGATION, AND", "TRANSACTIONS."],
  },
  {
    value: "4",
    description: ["CONTINENTS", "OPERATIONALLY", "ACTIVE."],
  },
  {
    value: "9+",
    description: ["LANGUAGES", "SPOKEN ACROSS", "THE NETWORK."],
  },
];

export const TrustBandSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="trust-band-eyebrow"
      className="relative isolate w-full overflow-hidden bg-[#0B1A2D] text-[#F7F3EA]"
    >
      {/* Decorative background: radial vignette + faint global latitude/longitude grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Soft radial gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 20%, rgba(46, 95, 167, 0.18), transparent 65%), linear-gradient(180deg, #0B1A2D 0%, #10243D 45%, #061323 100%)",
          }}
        />
        {/* Faint latitude/longitude grid (TODO: swap with a refined world-map SVG if asset becomes available) */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.06]"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1440 720"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Latitudes (curved horizontals) */}
          <g stroke="#F7F3EA" strokeWidth="1">
            <path d="M0 120 Q 720 60 1440 120" />
            <path d="M0 220 Q 720 170 1440 220" />
            <path d="M0 320 Q 720 280 1440 320" />
            <path d="M0 420 Q 720 380 1440 420" />
            <path d="M0 520 Q 720 480 1440 520" />
            <path d="M0 620 Q 720 580 1440 620" />
          </g>
          {/* Longitudes (curved verticals) */}
          <g stroke="#F7F3EA" strokeWidth="1">
            <path d="M180 0 Q 220 360 180 720" />
            <path d="M360 0 Q 400 360 360 720" />
            <path d="M540 0 Q 580 360 540 720" />
            <path d="M720 0 Q 720 360 720 720" />
            <path d="M900 0 Q 860 360 900 720" />
            <path d="M1080 0 Q 1040 360 1080 720" />
            <path d="M1260 0 Q 1220 360 1260 720" />
          </g>
          {/* Faint dot grid for extra texture */}
          <g fill="#F7F3EA">
            {Array.from({ length: 16 }).map((_, row) =>
              Array.from({ length: 28 }).map((__, col) => (
                <circle
                  cx={40 + col * 50}
                  cy={40 + row * 44}
                  key={`dot-${row}-${col}`}
                  r="0.8"
                />
              ))
            )}
          </g>
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-24 pt-24 sm:px-8 md:pb-32 md:pt-28 lg:px-12 lg:pb-[140px] lg:pt-[120px]">
        <p
          className="text-[12px] font-semibold uppercase tracking-[0.26em] text-[#9EB7D5] md:text-[13px]"
          id="trust-band-eyebrow"
        >
          THE FIRM, IN NUMBERS
        </p>

        <div className="mt-14 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-16 lg:mt-[64px] lg:grid-cols-4 lg:gap-x-0">
          {stats.map((stat, index) => (
            <dl
              className={[
                "relative flex flex-col",
                // Vertical dividers on lg: every column except the first gets a left border
                index > 0 ? "lg:border-l lg:border-white/15 lg:pl-10 xl:pl-14" : "lg:pr-10 xl:pr-14",
                // Horizontal dividers on mobile (every column except the first)
                index > 0 ? "border-t border-white/10 pt-12 sm:border-t-0 sm:pt-0" : "",
              ].join(" ")}
              key={stat.value}
            >
              <dd className="font-serifDisplay text-[64px] font-normal leading-[0.9] tracking-[-0.03em] text-[#F7F3EA] sm:text-[88px] md:text-[110px] lg:text-[128px] xl:text-[140px]">
                {stat.value}
              </dd>
              <dt className="mt-8 space-y-1 font-sans text-[13px] font-semibold uppercase leading-[1.75] tracking-[0.2em] text-white/70 md:text-[15px] md:tracking-[0.22em] lg:mt-10 lg:text-[16px] lg:leading-[1.85]">
                {stat.description.map((line) => (
                  <span className="block" key={line}>
                    {line}
                  </span>
                ))}
              </dt>
            </dl>
          ))}
        </div>
      </div>
    </section>
  );
};
