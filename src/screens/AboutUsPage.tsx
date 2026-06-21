import { Header } from "../components/ATLAW/Header";
import { Footer } from "../components/ATLAW/Footer";
import { practiceTags } from "../data/about";
import {
  GOLD,
  NAVY,
  INK,
  Reveal,
  Eyebrow,
  Period,
  Cta,
  grain,
  SECTION,
  PAD,
} from "./about/primitives";
import { FounderSection, HowWeWorkSection, PracticeAreasSection } from "./about/sections";

/* ────────────────────────────────────────────────────────────────────────────
   ATLAW — About Us
   Editorial "law as quiet authority" system (matches Hero / Footer):
   white canvas + deep-navy bands alternating, Lustria display serif, Mulish
   for labels, antique-gold (#C9A24B) used ONLY as hairline / period / marker.
   Copy is final and approved — see the About master prompt.
   Shared primitives live in ./about/primitives; content data in ../data/about.
   ──────────────────────────────────────────────────────────────────────────── */

// Intake + key destinations (real, not placeholder — verified against Footer / Hero).
const TYPEFORM = "https://j098jiq3pk7.typeform.com/to/Mslg7Y7f";
const PRACTICE_AREAS = "/personal-injury";
const OUR_PEOPLE = "/team";
const EMAIL = "info@atlawgroup.com";
const PHONE_DISPLAY = "(313) 406-7606";
const PHONE_HREF = "tel:+13134067606";

/* ── Page ─────────────────────────────────────────────────────────────────── */

export const AboutUsPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white text-[#0E1B2C] [zoom:1.12]">
      <Header />
      <main>
        {/* ══ 01 — HERO (light, split) ════════════════════════════════════ */}
        <section aria-labelledby="about-hero-heading" className="relative w-full overflow-hidden bg-white">
          <div className={`${SECTION} grid items-center gap-12 pb-20 pt-24 md:pb-24 md:pt-28 lg:grid-cols-[55fr_45fr] lg:gap-16 lg:pb-28 lg:pt-32`}>
            {/* Copy */}
            <div className="order-2 lg:order-1">
              <Reveal>
                <Eyebrow num="01" label="About ATLAW" />
              </Reveal>
              <Reveal delay={80}>
                <h1
                  id="about-hero-heading"
                  className="mt-8 max-w-[16ch] font-serifDisplay text-[40px] font-normal leading-[1.04] tracking-[-0.02em] sm:text-[52px] md:text-[60px] lg:text-[64px]"
                  style={{ color: INK }}
                >
                  Built in Detroit. Run by the person whose name is on the door
                  <Period />
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-7 max-w-[560px] font-serifDisplay text-[18px] leading-[1.6] text-[#3A4A5E] lg:text-[19px]">
                  ATLAW was founded by attorney Dewnya Bazzi on a simple idea: people in serious
                  legal trouble shouldn&rsquo;t have to guess which lawyer to call. You call us. We
                  put the right attorney on your matter and stay with you until it&rsquo;s resolved.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Cta to={TYPEFORM} external variant="primaryLight">
                    Talk to a lawyer
                  </Cta>
                  <Cta to={OUR_PEOPLE} variant="secondaryLight">
                    Meet the team
                  </Cta>
                </div>
                <p className="mt-6 flex items-center gap-2.5 font-serifDisplay text-[15px] italic text-[#3A4A5E] lg:text-[16px]">
                  <span aria-hidden="true" className="h-[6px] w-[6px] shrink-0 rounded-full" style={{ backgroundColor: GOLD }} />
                  30-minute first call. Free. No pressure to hire us.
                </p>
              </Reveal>
            </div>

            {/* Portrait */}
            <Reveal delay={120} className="order-1 lg:order-2">
              <div className="relative mx-auto w-full max-w-[440px] lg:max-w-none">
                <span
                  aria-hidden="true"
                  className="absolute -right-2 bottom-6 top-6 hidden w-px lg:block"
                  style={{ backgroundColor: "rgba(14,27,44,0.10)" }}
                />
                <img
                  alt="Dewnya Bazzi, founder of ATLAW"
                  className="block h-auto w-full object-contain"
                  height={941}
                  src="/assets/atlaw-portrait.avif"
                  width={773}
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══ 02 — WHY WE EXIST (dark navy, centered) ═════════════════════ */}
        <section
          aria-labelledby="story-heading"
          className="relative isolate w-full overflow-hidden text-white scroll-mt-20"
          id="our-story"
          style={{ backgroundColor: NAVY }}
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: grain }} />
          {/* Oversized ATLAW watermark, offset left */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-[-4%] top-1/2 hidden -translate-y-1/2 whitespace-nowrap font-serifDisplay font-normal uppercase leading-none tracking-[-0.045em] text-white opacity-[0.04] md:block"
            style={{ fontSize: "clamp(220px, 30vw, 520px)" }}
          >
            ATLAW
          </span>

          <div className={`relative ${PAD}`}>
            <div className="mx-auto flex w-full max-w-[680px] flex-col items-start px-6 text-left">
              <Reveal>
                <Eyebrow num="02" label="Why We Exist" onDark />
              </Reveal>
              <Reveal delay={80}>
                <h2
                  id="story-heading"
                  className="mt-8 font-serifDisplay text-[34px] font-normal leading-[1.08] tracking-[-0.02em] text-white sm:text-[44px] md:text-[54px]"
                >
                  Legal problems don&rsquo;t arrive one at a time
                  <Period />
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-8 font-serifDisplay text-[18px] leading-[1.62] text-white/75 lg:text-[19px]">
                  A car accident turns into an insurance dispute, a medical bill, and lost income. A
                  business sale raises tax, real estate, and contract questions all at once. Most
                  firms handle one piece and refer out the rest.
                </p>
                <p className="mt-5 font-serifDisplay text-[18px] leading-[1.62] text-white/75 lg:text-[19px]">
                  We built ATLAW differently. One firm, attorneys across the practice areas that
                  actually overlap in real life, and one point of contact who knows your whole
                  situation.
                </p>
              </Reveal>

              {/* Practice-area tag row */}
              <Reveal delay={220} className="mt-12 w-full">
                <ul className="flex flex-wrap items-center gap-x-1.5 gap-y-3 border-t border-white/15 pt-8">
                  {practiceTags.map((tag, i) => (
                    <li key={tag} className="flex items-center font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-white/70">
                      {tag}
                      {i < practiceTags.length - 1 && (
                        <span aria-hidden="true" className="mx-3 inline-block h-[5px] w-[5px] rounded-full" style={{ backgroundColor: GOLD }} />
                      )}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══ 03 — THE FOUNDER (light, reverse split + pull-quote) ═════════ */}
        <FounderSection ourPeople={OUR_PEOPLE} />

        {/* ══ 04 — HOW WE WORK (dark navy, 3 steps) ═══════════════════════ */}
        <HowWeWorkSection typeform={TYPEFORM} />

        {/* ══ 05 — PRACTICE AREAS (light, broadsheet grid) ════════════════ */}
        <PracticeAreasSection practiceAreasHref={PRACTICE_AREAS} />

        {/* ══ 06 — WHERE WE'RE FROM (dark navy) ═══════════════════════════ */}
        <section
          aria-labelledby="detroit-heading"
          className="relative isolate w-full overflow-hidden text-white"
          style={{ backgroundColor: NAVY }}
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: grain }} />
          {/* Curved hairline arcs */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
            viewBox="0 0 1440 760"
          >
            <path d="M-100 120 C 420 360 980 360 1540 100" stroke="rgba(201,162,75,0.16)" strokeWidth="1" />
            <path d="M-100 300 C 460 560 1000 560 1540 320" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <circle cx="1040" cy="232" r="3" fill={GOLD} fillOpacity="0.7" />
          </svg>

          <div className={`relative ${SECTION} ${PAD}`}>
            <div className="max-w-[760px]">
              <Reveal>
                <Eyebrow num="06" label="Where We're From" onDark />
              </Reveal>
              <Reveal delay={80}>
                <h2
                  id="detroit-heading"
                  className="mt-8 font-serifDisplay text-[36px] font-normal leading-[1.06] tracking-[-0.02em] text-white sm:text-[48px] md:text-[58px]"
                >
                  Detroit is home. The network is national
                  <Period />
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-8 max-w-[660px] font-serifDisplay text-[18px] leading-[1.62] text-white/75 lg:text-[19px]">
                  We know Michigan courts, Michigan insurance law, and Michigan timelines because we
                  work in them every week. And when a matter crosses state lines, our national
                  network of attorneys means you don&rsquo;t have to start over with a stranger.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══ 07 — NEXT STEP (light, centered) ════════════════════════════ */}
        <section aria-labelledby="next-heading" className="w-full bg-white">
          <div className={`${SECTION} py-[112px] text-center md:py-[150px] lg:py-[180px]`}>
            <Reveal className="flex flex-col items-center">
              <span className="flex items-center gap-4">
                <span aria-hidden="true" className="h-px w-[52px]" style={{ backgroundColor: GOLD }} />
                <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.22em] text-[#7A7466]">
                  <span style={{ color: GOLD }}>07</span> &mdash; Next Step
                </span>
                <span aria-hidden="true" className="h-px w-[52px]" style={{ backgroundColor: GOLD }} />
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2
                id="next-heading"
                className="mx-auto mt-8 max-w-[18ch] font-serifDisplay text-[40px] font-normal leading-[1.04] tracking-[-0.02em] sm:text-[54px] md:text-[64px]"
                style={{ color: INK }}
              >
                Tell us what you&rsquo;re dealing with
                <Period />
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mx-auto mt-6 max-w-[520px] font-serifDisplay text-[18px] leading-[1.6] text-[#3A4A5E] lg:text-[19px]">
                Thirty minutes, free, no pressure. You&rsquo;ll hang up knowing where you stand.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10 flex justify-center">
                <Cta to={TYPEFORM} external variant="primaryLight">
                  Talk to a lawyer
                </Cta>
              </div>
              <p className="mt-7 font-sans text-[14px] text-[#7A7466]">
                Prefer email?{" "}
                <a className="font-medium text-[#0E1B2C] underline-offset-4 transition hover:text-[#C9A24B] hover:underline" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>{" "}
                &middot; Or call{" "}
                <a className="font-medium text-[#0E1B2C] underline-offset-4 transition hover:text-[#C9A24B] hover:underline" href={PHONE_HREF}>
                  {PHONE_DISPLAY}
                </a>
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
