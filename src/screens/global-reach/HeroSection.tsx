import { TYPEFORM } from "../../data/global-reach";
import { GOLD, NAVY, Reveal, Eyebrow, Period, Cta, grain, PAD } from "./shared";

/* ══ 01 — HERO (dark navy, centered, hairline arcs) ══════════════ */
export const HeroSection = (): JSX.Element => (
  <section
    aria-labelledby="reach-hero-heading"
    className="relative isolate w-full overflow-hidden text-white"
    style={{ backgroundColor: NAVY }}
  >
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: grain }} />

    {/* Three hairline gold arcs of differing radii — an implied geography. */}
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1440 820"
    >
      <path d="M-120 250 C 420 540 1020 540 1560 230" stroke="rgba(201,162,75,0.20)" strokeWidth="1" />
      <path d="M-120 430 C 460 700 980 700 1560 410" stroke="rgba(201,162,75,0.12)" strokeWidth="1" />
      <path d="M-120 120 C 380 360 1060 360 1560 90" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      <circle cx="250" cy="372" r="3.5" fill={GOLD} fillOpacity="0.75" />
      <circle cx="1150" cy="372" r="3" fill={GOLD} fillOpacity="0.6" />
      <circle cx="700" cy="250" r="3" fill={GOLD} fillOpacity="0.5" />
    </svg>

    {/* Oversized GLOBAL watermark bleeding off both edges. */}
    <span
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-serifDisplay font-normal uppercase leading-none tracking-[-0.045em] text-white opacity-[0.04] md:block"
      style={{ fontSize: "clamp(220px, 30vw, 520px)" }}
    >
      GLOBAL
    </span>

    <div className={`relative ${PAD}`}>
      <div className="mx-auto flex w-full max-w-[680px] flex-col items-center px-6 text-center">
        <Reveal>
          <Eyebrow num="01" label="Global Reach" onDark />
        </Reveal>
        <Reveal delay={80}>
          <h1
            id="reach-hero-heading"
            className="mt-8 font-serifDisplay text-[40px] font-normal leading-[1.04] tracking-[-0.02em] text-white sm:text-[54px] md:text-[64px]"
          >
            Rooted in Detroit. Reachable from anywhere
            <Period />
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 max-w-[600px] font-serifDisplay text-[18px] leading-[1.6] text-white/75 lg:text-[19px]">
            Legal problems don&rsquo;t respect borders. A family member waiting on a visa, a
            business deal in the Gulf, an estate with assets in two countries. ATLAW handles
            cross-border matters from Detroit, with offices in Dubai and Manila and a vetted
            network beyond them.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Cta to={TYPEFORM} external variant="primaryDark">
              Talk to a lawyer
            </Cta>
            <Cta to="#locations" anchor variant="secondaryDark">
              See where we work
            </Cta>
          </div>
          <p className="mt-6 flex items-center justify-center gap-2.5 font-serifDisplay text-[15px] italic text-white/70 lg:text-[16px]">
            <span aria-hidden="true" className="h-[6px] w-[6px] shrink-0 rounded-full" style={{ backgroundColor: GOLD }} />
            30-minute first call. Free. Time zones are our problem, not yours.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);
