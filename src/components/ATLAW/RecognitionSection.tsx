import { Fragment } from "react";
import { RevealText, RevealBlock, RevealStagger, DrawRule, Parallax } from "../../motion/primitives";
import { STAGGER } from "../../motion/config";

// Subtle film grain over the bone canvas — same texture as the Hero/About so the page reads as one system.
const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

// Fraunces variable axes — large editorial headline (mirrors the Hero/About/One Firm lockup).
const headlineAxes = "'opsz' 144, 'wght' 380, 'SOFT' 0, 'WONK' 0";
// Tighter optical size for the big plaque years.
const yearAxes = "'opsz' 96, 'wght' 360, 'SOFT' 0, 'WONK' 0";

type Award = {
  year: string;
  // visually emphasized centre plaque
  accent?: boolean;
};

// Single source of truth for the three plaques — edit the years here, not in the markup.
const awards: Award[] = [
  { year: "2026" },
  { year: "2025", accent: true },
  { year: "2024" },
];

// Metadata tokens joined by amber middots beneath the plaques.
const metaTokens = ["Dewnya Bazzi", "Thomson Reuters", "Michigan"];

// Four thin gold L-brackets inset into a plaque's corners — a quiet "engraved" detail, no medals/ribbons.
const CornerMarks = ({ accent }: { accent?: boolean }): JSX.Element => {
  const tone = accent ? "border-[#B88A2D]" : "border-[#B88A2D]/45";
  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0">
      <span className={`absolute left-3 top-3 h-3.5 w-3.5 border-l border-t ${tone}`} />
      <span className={`absolute right-3 top-3 h-3.5 w-3.5 border-r border-t ${tone}`} />
      <span className={`absolute bottom-3 left-3 h-3.5 w-3.5 border-b border-l ${tone}`} />
      <span className={`absolute bottom-3 right-3 h-3.5 w-3.5 border-b border-r ${tone}`} />
    </span>
  );
};

const AwardPlaque = ({ award }: { award: Award }): JSX.Element => {
  // Centre plaque: warmer fill, a fuller gold border, and a soft lift — emphasis without breaking the row.
  const surface = award.accent
    ? "border-[#C9A85C] bg-[#FFFFFF] shadow-[0_18px_48px_rgba(11,31,58,0.10)]"
    : "border-[#FFFFFF] bg-[#FFFFFF] shadow-[0_8px_26px_rgba(11,31,58,0.05)]";

  return (
    <article
      className={`relative flex h-full min-h-[280px] flex-col items-center justify-center rounded-[4px] border px-8 py-12 lg:min-h-[320px] ${surface}`}
    >
      <CornerMarks accent={award.accent} />

      {/* Year — large refined serif, navy */}
      <p
        className={`font-serifDisplay font-normal leading-none tracking-[-0.02em] text-[#0B1F3A] ${
          award.accent ? "text-[clamp(44px,5.2vw,66px)]" : "text-[clamp(40px,4.6vw,58px)]"
        }`}
        style={{ fontVariationSettings: yearAxes }}
      >
        {award.year}
      </p>

      {/* Thin gold divider with a centred gold dot */}
      <span aria-hidden="true" className="mt-7 flex w-full max-w-[124px] items-center gap-2">
        <span className="h-px flex-1 bg-gradient-to-l from-[#B88A2D]/45 to-transparent" />
        <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-[#B88A2D]" />
        <span className="h-px flex-1 bg-gradient-to-r from-[#B88A2D]/45 to-transparent" />
      </span>

      {/* Programme — uppercase, letter-spaced, muted gold */}
      <p className="mt-6 font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.28em] text-[#B88A2D]">
        Super Lawyers
      </p>

      {/* Short gold underline */}
      <span aria-hidden="true" className="mt-5 block h-px w-8 bg-[#B88A2D]/55" />

      {/* Honour — refined navy serif */}
      <p
        className="mt-5 font-serifDisplay text-[19px] font-normal leading-none tracking-[-0.01em] text-[#0B1F3A]"
        style={{ fontVariationSettings: "'opsz' 32, 'wght' 400" }}
      >
        Rising Star
      </p>
    </article>
  );
};

export const RecognitionSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="recognition-heading"
      className="relative isolate w-full overflow-hidden bg-[#FFFFFF] text-[#0B1F3A]"
    >
      {/* 3% grain overlay on the canvas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-multiply"
        style={{ backgroundImage: grain }}
      />

      {/* Decorative background: faint navy corner linework + oversized ghost "RECOGNITION" wordmark */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none overflow-hidden">
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.05]"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1440 900"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#0B1F3A" strokeWidth="1">
            {/* top-left */}
            <path d="M-120 60 C 240 220 520 110 880 240" />
            <path d="M-120 -20 C 280 140 480 50 760 140" />
            {/* bottom-right */}
            <path d="M1560 840 C 1200 680 920 800 560 660" />
            <path d="M1560 920 C 1160 760 940 850 660 760" />
          </g>
        </svg>

        {/* Oversized ghost wordmark — pale taupe, low opacity, sits behind the content */}
        <Parallax
          as="span"
          className="absolute left-1/2 top-[16%] hidden -translate-x-1/2 whitespace-nowrap font-serifDisplay font-normal uppercase leading-none tracking-[-0.04em] text-[#C9B89C] opacity-[0.14] text-[clamp(80px,13vw,210px)] md:block"
          style={{ fontVariationSettings: headlineAxes }}
        >
          Recognition
        </Parallax>
      </div>

      {/* ── Centered editorial column ── */}
      <div className="relative mx-auto flex w-full max-w-[1320px] flex-col items-center px-6 py-[56px] text-center sm:px-10 md:py-[80px] lg:px-20 lg:py-[96px]">
        {/* Top gold divider */}
        <DrawRule
          origin="center"
          className="block h-px w-[64px] bg-[#B88A2D]"
        />

        {/* Section label */}
        <RevealBlock
          as="p"
          className="mt-9 font-sans text-[12px] font-semibold uppercase tracking-[0.22em] text-[#B88A2D]"
        >
          05 &mdash; Recognition
        </RevealBlock>

        {/* Main heading */}
        <RevealText
          as="h2"
          className="mt-6 font-serifDisplay font-normal leading-[1.04] tracking-[-0.02em] text-[#0B1F3A] text-[clamp(44px,6.5vw,84px)]"
          id="recognition-heading"
          style={{ fontVariationSettings: headlineAxes }}
        >
          Recognition
        </RevealText>

        {/* Supporting paragraph */}
        <RevealBlock
          as="p"
          className="mt-7 max-w-[780px] font-sans text-[18px] leading-[1.65] text-[#3A4A63] [text-wrap:balance] lg:text-[19px]"
        >
          Super Lawyers selects under 2.5% of attorneys in each state for its Rising Stars list.
          Dewnya has been on the Michigan list three years running.
        </RevealBlock>

        {/* ── Three plaques: 1 col mobile · 3 across from sm up ── */}
        <RevealStagger
          amount={STAGGER.grid}
          className="mt-14 grid w-full max-w-[1040px] grid-cols-1 items-stretch gap-6 sm:grid-cols-3 lg:mt-[72px] lg:gap-8"
        >
          {awards.map((award) => (
            <AwardPlaque award={award} key={award.year} />
          ))}
        </RevealStagger>

        {/* ── Metadata line: gold dots between tokens, thin gold rules left & right ── */}
        <RevealBlock as="div" className="mt-16 flex w-full max-w-[860px] items-center gap-5">
          <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-l from-[#B88A2D]/40 to-transparent" />
          <p className="flex shrink-0 items-center gap-3 font-sans text-[13px] tracking-[0.04em] text-[#0B1F3A]">
            {metaTokens.map((token, index) => (
              <Fragment key={token}>
                {index > 0 && (
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#B88A2D]" />
                )}
                <span>{token}</span>
              </Fragment>
            ))}
          </p>
          <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-[#B88A2D]/40 to-transparent" />
        </RevealBlock>

        {/* ── Quatrefoil ornament — CSS/SVG only, no stock award art ── */}
        <svg
          aria-hidden="true"
          className="mt-12"
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

        {/* Bottom supporting statement */}
        <RevealBlock
          as="p"
          className="mt-8 max-w-[680px] font-serifDisplay text-[15px] leading-[1.6] tracking-[-0.005em] text-[#3A4A63] lg:text-[16px]"
          style={{ fontVariationSettings: "'opsz' 24, 'wght' 400" }}
        >
          She is also rated 10/10 on Avvo and was named to the National Academy of Personal Injury
          Attorneys&rsquo; Top 10 Under 40 list.
        </RevealBlock>
      </div>
    </section>
  );
};
