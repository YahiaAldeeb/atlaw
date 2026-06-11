import { Link } from "react-router-dom";
import { GOLD, IVORY, NAVY_DEEP, headlineAxes } from "./capabilities-tokens";

export const Hero = (): JSX.Element => (
  <section
    aria-labelledby="capabilities-title"
    className="relative isolate w-full overflow-hidden"
    style={{ backgroundColor: NAVY_DEEP, color: IVORY }}
  >
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 65% 55% at 20% 18%, rgba(38,72,124,0.34), transparent 70%), radial-gradient(ellipse 55% 60% at 82% 80%, rgba(20,42,76,0.45), transparent 70%), linear-gradient(180deg, #0e1b33 0%, #0a1428 100%)",
      }}
    />

    {/* Background word */}
    <span
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-serifDisplay font-bold uppercase leading-none text-white md:block"
      style={{
        fontSize: "clamp(180px, 22vw, 420px)",
        opacity: 0.045,
        letterSpacing: "-0.06em",
      }}
    >
      COUNSEL
    </span>

    {/* Orbital lines */}
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1440 760"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 1500 120 C 1100 260, 780 380, -60 660"
        stroke="rgba(211,154,42,0.28)"
        strokeDasharray="2 9"
        strokeLinecap="round"
        strokeWidth="1"
      />
      <path
        d="M -60 380 C 320 260, 760 500, 1520 300"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1"
      />
      <path
        d="M -40 720 C 420 600, 920 680, 1500 500"
        stroke="rgba(211,154,42,0.16)"
        strokeWidth="1"
      />
      <circle cx="1180" cy="210" fill={GOLD} r="3.5" />
      <circle cx="260" cy="310" fill={GOLD} r="3" />
      <circle cx="920" cy="420" fill={GOLD} r="3" />
      <circle cx="1320" cy="520" fill={GOLD} r="3.5" />
      <circle cx="140" cy="690" fill={GOLD} r="3" />
    </svg>

    <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-[110px] pt-[88px] sm:px-10 md:pb-[140px] md:pt-[120px] lg:px-20 lg:pb-[160px] lg:pt-[150px]">
      <div className="max-w-[920px]">
        <nav
          aria-label="Breadcrumb"
          className="font-sans text-[11.5px] font-semibold uppercase leading-[1.5] tracking-[0.22em]"
          style={{ marginBottom: "42px" }}
        >
          <ol className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <li>
              <Link className="text-white/55 transition-colors hover:text-white/90" to="/">
                ATLAW
              </Link>
            </li>
            <li aria-hidden="true" className="text-white/30">/</li>
            <li>
              <span aria-current="page" className="text-[#FFFFFF]">Practice Areas</span>
            </li>
          </ol>
        </nav>

        <p
          className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.28em]"
          style={{ color: GOLD, marginBottom: "28px" }}
        >
          The Practice
        </p>

        <h1
          className="font-serifDisplay font-normal tracking-[-0.025em] text-[#FFFFFF]"
          id="capabilities-title"
          style={{
            fontSize: "clamp(56px, 8.5vw, 125px)",
            lineHeight: "0.95",
            fontVariationSettings: headlineAxes,
            marginBottom: "28px",
          }}
        >
          Practice Areas
          <span aria-hidden="true" style={{ color: GOLD }}>.</span>
        </h1>

        <span
          aria-hidden="true"
          className="block"
          style={{ width: "56px", height: "2px", background: GOLD, marginBottom: "28px" }}
        />

        <p
          className="font-sans text-[17px] leading-[1.55] text-[rgba(245,239,229,0.85)] sm:text-[19px] lg:text-[21px]"
          style={{ maxWidth: "780px" }}
        >
          Strategic legal counsel for individuals, families, founders, and organizations navigating
          complex moments.
        </p>

        <p
          className="font-sans text-[14px] italic leading-[1.6] text-[rgba(245,239,229,0.55)]"
          style={{ marginTop: "14px", maxWidth: "640px" }}
        >
          Four core categories. Twenty-one focused practice areas.
        </p>
      </div>
    </div>
  </section>
);
