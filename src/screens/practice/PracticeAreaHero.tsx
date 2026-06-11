import { Link } from "react-router-dom";
import type { PracticeArea } from "../../data/practiceAreas";
import {
  GOLD,
  IVORY,
  NAVY_DEEP,
  headlineAxes,
  microcopyByCategory,
} from "./practiceAreaTokens";

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

export const Hero = ({ area }: { area: PracticeArea }): JSX.Element => {
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
