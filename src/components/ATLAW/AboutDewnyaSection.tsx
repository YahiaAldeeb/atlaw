
// Subtle film grain over the bone canvas — same texture as the Hero/Capabilities so the page reads as one system.
const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

// Fraunces variable axes (kept for consistency with the Hero lockup; resolves to Georgia until Fraunces is loaded).
const headlineAxes = "'opsz' 144, 'wght' 380, 'SOFT' 30, 'WONK' 0";
const founderTitleAxes = "'opsz' 72, 'wght' 400, 'SOFT' 20, 'WONK' 0";
const statAxes = "'opsz' 36, 'wght' 400, 'SOFT' 20, 'WONK' 0";

type Stat = {
  // optional small label above the main value
  topLabel?: string;
  // optional small label below the main value
  bottomLabel?: string;
  // plain main value (serif/navy)
  main?: string;
  // main value rendered as tokens joined by amber middots (e.g. cities, years)
  mainList?: string[];
};

// Bottom stat strip — single source of truth for the founder card's four data points.
const stats: Stat[] = [
  { topLabel: "Founded in", main: "Detroit" },
  { main: "100+", bottomLabel: "team members" },
  { mainList: ["Detroit", "Dubai", "Manila"] },
  { topLabel: "Michigan Rising Star", mainList: ["2024", "2025", "2026"] },
];

const StatValue = ({ stat }: { stat: Stat }): JSX.Element => {
  const isList = Boolean(stat.mainList);

  if (isList) {
    return (
      <ul className="flex flex-col items-center gap-1 text-center">
        {stat.mainList?.map((token) => (
          <li
            className="font-serifDisplay text-[14px] font-normal leading-[1.3] tracking-[-0.01em] text-[#0B1F3A]"
            key={token}
            style={{ fontVariationSettings: statAxes }}
          >
            {token}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p
      className="whitespace-nowrap font-serifDisplay text-[16px] font-normal leading-[1.3] tracking-[-0.01em] text-[#0B1F3A] lg:text-[17px]"
      style={{ fontVariationSettings: statAxes }}
    >
      {stat.main}
    </p>
  );
};

export const AboutDewnyaSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="about-dewnya-heading"
      className="relative isolate w-full overflow-hidden bg-[#F4EFE6] text-[#0B1F3A]"
    >
      {/* 3% grain overlay on the canvas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-multiply"
        style={{ backgroundImage: grain }}
      />

      {/* Decorative background: faint curved linework + oversized ghost "ATLAW" wordmark (behind content) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none overflow-hidden">
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.05]"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1440 900"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#0B1F3A" strokeWidth="1">
            <path d="M-50 120 Q 420 -10 900 130 T 1520 90" />
            <path d="M-50 250 Q 480 110 980 250 T 1520 210" />
          </g>
        </svg>

        <span className="absolute -bottom-[6vw] left-1/2 hidden -translate-x-1/2 whitespace-nowrap font-serifDisplay text-[30vw] font-normal uppercase leading-none tracking-[-0.05em] text-[#0B1F3A] opacity-[0.02] md:block">
          ATLAW
        </span>
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-20 pt-20 sm:px-10 md:pb-24 md:pt-28 lg:px-20 lg:pb-[120px] lg:pt-[150px]">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,47%)_minmax(0,53%)] lg:gap-16 xl:gap-20">
          {/* ── Left: editorial narrative ── */}
          <div>
            {/* Eyebrow — amber broadsheet rule + stone tracked label */}
            <p className="flex items-center gap-3.5">
              <span aria-hidden="true" className="h-px w-[44px] shrink-0 bg-[#B88A2D]" />
              <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-[#7A7466]">
                03 &mdash; About Dewnya + ATLAW
              </span>
            </p>

            {/* Headline */}
            <h2
              className="mt-6 max-w-[620px] font-serifDisplay font-normal leading-[1.08] tracking-[-0.02em] text-[#0B1F3A] text-[clamp(42px,5vw,78px)]"
              id="about-dewnya-heading"
              style={{ fontVariationSettings: headlineAxes }}
            >
              A law firm organized around your situation<span className="text-[#B88A2D]">.</span>
            </h2>

            {/* Amber rule */}
            <div aria-hidden="true" className="mt-9 h-px w-[56px] bg-[#B88A2D]" />

            {/* Body copy */}
            <div className="mt-10 max-w-[610px] space-y-7">
              <p
                className="font-serifDisplay text-[18px] leading-[1.7] tracking-[-0.005em] text-[#3A4A63] lg:text-[19px]"
                style={{ fontVariationSettings: "'opsz' 24, 'wght' 400" }}
              >
                Founded by Dewnya Bazzi, ATLAW takes on the kind of legal work that needs more than a
                quick answer. A car accident with serious injuries. A business deal that has to be
                papered correctly before it closes. A criminal charge that needs a defense built
                quickly. An immigration matter that affects an entire family. A trust headed for
                probate court.
              </p>
              <p
                className="font-serifDisplay text-[18px] leading-[1.7] tracking-[-0.005em] text-[#3A4A63] lg:text-[19px]"
                style={{ fontVariationSettings: "'opsz' 24, 'wght' 400" }}
              >
                These are the matters we built the firm around. One firm. Attorneys with real depth in
                the practice you came in for. A team that picks up the phone when you call back.
              </p>
            </div>
          </div>

          {/* ── Right: founder feature card ── */}
          <article className="group overflow-hidden rounded-[26px] border border-[#D8D2C4] bg-[#F8F3EA] transition-all duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] hover:border-[#C2B79F]">
            {/* Top zone: portrait + bio */}
            <div className="grid grid-cols-1 items-stretch sm:grid-cols-[minmax(0,48%)_minmax(0,52%)]">
              {/* Portrait — fills the column, bottom-aligned so the hands/desk stay anchored (reused from the Hero) */}
              <div className="relative flex min-h-[360px] items-end justify-center overflow-hidden bg-[#F4EFE6] sm:min-h-[480px]">
                <img
                  alt="Dewnya Bazzi, ATLAW founder and CEO"
                  className="h-full w-full object-cover object-bottom"
                  src="/assets/atlaw-portrait.png"
                />
              </div>

              {/* Bio — vertical hairline on desktop, horizontal on mobile */}
              <div className="border-t border-[#D8D2C4] p-7 sm:border-l sm:border-t-0 lg:p-9">
                <h3
                  className="font-serifDisplay font-normal leading-[1.14] tracking-[-0.01em] text-[#0B1F3A] text-[clamp(25px,2.5vw,33px)]"
                  style={{ fontVariationSettings: founderTitleAxes }}
                >
                  Dewnya Bazzi
                  <span className="mt-0.5 block">
                    <span aria-hidden="true" className="text-[#B88A2D]">
                      &middot;
                    </span>{" "}
                    Founder &amp; CEO
                  </span>
                </h3>

                <p className="mt-5 font-sans text-[15px] leading-[1.65] text-[#3A4A63]">
                  Dewnya founded ATLAW in Detroit and still leads its personal injury practice. The
                  firm has grown to more than 100 people, with attorneys in Detroit and consultants in
                  Dubai and Manila. Super Lawyers named her a Michigan Rising Star in 2024, 2025, and
                  again in 2026.
                </p>
              </div>
            </div>

            {/* Bottom stat strip — 1 col → 2×2 → full 4-across only at ≥1440px (where the
                values still fit one line). Keeps every value inside its own box. */}
            <div className="grid grid-cols-1 gap-x-5 gap-y-7 border-t border-[#D8D2C4] px-6 py-7 min-[480px]:grid-cols-2 lg:px-9 lg:py-8 min-[1440px]:grid-cols-[0.85fr_0.9fr_1.55fr_1.4fr] min-[1440px]:gap-x-4 min-[1440px]:gap-y-0">
              {stats.map((stat, index) => (
                <div
                  className={[
                    "relative flex min-w-0 flex-col justify-center",
                    // thin vertical divider + amber dot between items on the widest layout
                    index > 0 ? "min-[1440px]:border-l min-[1440px]:border-[#D8D2C4] min-[1440px]:pl-4" : "",
                  ].join(" ")}
                  key={stat.main ?? stat.mainList?.join("-") ?? index}
                >
                  {index > 0 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-1/2 hidden h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B88A2D] min-[1440px]:block"
                    />
                  )}

                  {stat.topLabel && (
                    <p className="mb-2 font-sans text-[11px] font-medium uppercase leading-tight tracking-[0.16em] text-[#7A7466]">
                      {stat.topLabel}
                    </p>
                  )}

                  <StatValue stat={stat} />

                  {stat.bottomLabel && (
                    <p className="mt-2 font-sans text-[11px] font-medium uppercase leading-tight tracking-[0.16em] text-[#7A7466]">
                      {stat.bottomLabel}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
