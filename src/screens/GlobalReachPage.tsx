import { Header } from "../components/ATLAW/Header";
import { Footer } from "../components/ATLAW/Footer";
import {
  TYPEFORM,
  EMAIL,
  matterTypes,
  steps,
  stats,
} from "../data/global-reach";
import {
  GOLD,
  NAVY,
  INK,
  STEEL,
  Reveal,
  Eyebrow,
  Period,
  Cta,
  grain,
  SECTION,
  PAD,
} from "./global-reach/shared";
import { HeroSection } from "./global-reach/HeroSection";
import { LocationsSection } from "./global-reach/LocationsSection";

/* ────────────────────────────────────────────────────────────────────────────
   ATLAW — Global Reach
   Editorial "law as quiet authority" system (matches Hero / About / Footer):
   white canvas + deep-navy bands alternating, Fraunces display serif, Inter for
   labels, antique-gold (#C9A24B) used ONLY as hairline / period / marker, steel
   blue (#7E9CC4) reserved for data accents (stat numerals) only.

   Credibility page, one job: prove a founder-led Detroit firm genuinely handles
   cross-border matters — without inflating into "global megafirm" territory.
   No glowing globes, no spinning earths, no pin-cluttered world maps. The only
   "map" is a single gold hairline arc through three nodes. Copy is final per the
   Global Reach master prompt; office addresses/phones for Dubai & Manila are the
   only placeholders (pending bar-compliance confirmation of staffing).
   ──────────────────────────────────────────────────────────────────────────── */

/* ── Page ─────────────────────────────────────────────────────────────────── */

export const GlobalReachPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white text-[#0E1B2C] [zoom:1.12]">
      <Header />
      <main>
        <HeroSection />

        {/* ══ 02 — WHY IT MATTERS (light, copy left / cards right) ═════════ */}
        <section aria-labelledby="why-heading" className="w-full bg-white">
          <div className={`${SECTION} ${PAD}`}>
            <div className="grid gap-12 lg:grid-cols-[7fr_5fr] lg:gap-16">
              {/* Copy */}
              <div>
                <Reveal>
                  <Eyebrow num="02" label="Cross-Border Matters" />
                </Reveal>
                <Reveal delay={80}>
                  <h2
                    id="why-heading"
                    className="mt-8 max-w-[18ch] font-serifDisplay text-[34px] font-normal leading-[1.06] tracking-[-0.02em] sm:text-[44px] md:text-[52px]"
                    style={{ color: INK }}
                  >
                    When your matter crosses a border, most firms hand you off
                    <Period />
                  </h2>
                </Reveal>
                <Reveal delay={160}>
                  <p className="mt-8 max-w-[560px] font-serifDisplay text-[18px] leading-[1.62] text-[#3A4A5E] lg:text-[19px]">
                    The usual path: your local lawyer refers you to a stranger in another country, and
                    suddenly you&rsquo;re managing two firms, two bills, and two versions of the story.
                  </p>
                  <p className="mt-5 max-w-[560px] font-serifDisplay text-[18px] leading-[1.62] text-[#3A4A5E] lg:text-[19px]">
                    At ATLAW, the matter stays under one roof. Your Detroit attorney remains your point
                    of contact while our people and partners abroad do the on-the-ground work. One
                    firm. One file. One person who owes you answers.
                  </p>
                </Reveal>
              </div>

              {/* Matter-type cards — hairline rows, gold dot, no shadow */}
              <Reveal delay={120} className="lg:pt-2">
                <ul className="border-t border-[#0E1B2C]/12">
                  {matterTypes.map((m) => (
                    <li key={m.title} className="flex gap-4 border-b border-[#0E1B2C]/12 py-6">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-[7px] w-[7px] shrink-0 rounded-full"
                        style={{ backgroundColor: GOLD }}
                      />
                      <div>
                        <h3
                          className="font-serifDisplay text-[21px] font-normal leading-tight tracking-[-0.01em]"
                          style={{ color: INK }}
                        >
                          {m.title}
                        </h3>
                        <p className="mt-2 font-sans text-[14.5px] leading-[1.55] text-[#3A4A5E]/90">
                          {m.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <LocationsSection />

        {/* ══ 04 — HOW IT WORKS (light, 3 steps) ══════════════════════════ */}
        <section aria-labelledby="how-heading" className="w-full bg-white">
          <div className={`${SECTION} ${PAD}`}>
            <Reveal>
              <Eyebrow num="04" label="How It Works" />
            </Reveal>
            <Reveal delay={80}>
              <h2
                id="how-heading"
                className="mt-8 max-w-[20ch] font-serifDisplay text-[36px] font-normal leading-[1.05] tracking-[-0.02em] sm:text-[48px] md:text-[58px]"
                style={{ color: INK }}
              >
                One point of contact. Wherever the work happens
                <Period />
              </h2>
            </Reveal>

            <div className="relative mt-16 grid gap-y-12 md:mt-20 md:grid-cols-3 md:gap-x-12 lg:gap-x-16">
              {/* Hairline connecting the steps */}
              <span aria-hidden="true" className="absolute left-0 right-0 top-[14px] hidden h-px md:block" style={{ backgroundColor: "rgba(201,162,75,0.30)" }} />
              {steps.map((step, i) => (
                <Reveal key={step.num} delay={140 + i * 120}>
                  <article className="relative">
                    {/* oversized ghost number */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-10 left-0 select-none font-serifDisplay text-[110px] font-normal leading-none opacity-[0.05]"
                      style={{ color: INK }}
                    >
                      {step.num}
                    </span>
                    <span
                      aria-hidden="true"
                      className="relative inline-block h-[7px] w-[7px] rounded-full"
                      style={{ backgroundColor: GOLD }}
                    />
                    <h3 className="relative mt-7 font-serifDisplay text-[24px] font-normal leading-[1.14] tracking-[-0.01em] md:text-[26px]" style={{ color: INK }}>
                      <span className="font-sans text-[15px] font-semibold tracking-[0.1em] text-[#7A7466]">
                        {step.num}
                      </span>
                      <br />
                      {step.title}
                    </h3>
                    <p className="mt-5 font-sans text-[15px] leading-[1.7] text-[#3A4A5E] md:text-[16px]">
                      {step.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={140}>
              <div className="mt-16 md:mt-20">
                <Cta to={TYPEFORM} external variant="primaryLight">
                  Start with a free call
                </Cta>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══ 05 — THE NETWORK, HONESTLY (dark navy, quiet, centered) ═════ */}
        <section
          aria-labelledby="network-heading"
          className="relative isolate w-full overflow-hidden text-white"
          style={{ backgroundColor: NAVY }}
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: grain }} />
          <div className={`relative ${PAD}`}>
            <div className="mx-auto flex w-full max-w-[640px] flex-col items-start px-6">
              <Reveal>
                <Eyebrow num="05" label="The Network" onDark />
              </Reveal>
              <Reveal delay={80}>
                <h2
                  id="network-heading"
                  className="mt-8 font-serifDisplay text-[34px] font-normal leading-[1.08] tracking-[-0.02em] text-white sm:text-[44px] md:text-[52px]"
                >
                  Affiliates we&rsquo;d hire ourselves
                  <Period />
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-8 font-serifDisplay text-[18px] leading-[1.62] text-white/75 lg:text-[19px]">
                  &ldquo;Network&rdquo; can mean anything, so here&rsquo;s what it means to us:
                  attorneys we know, whose work we&rsquo;ve checked, operating under clear engagement
                  terms &mdash; not a directory we license. When an affiliate works on your matter,
                  ATLAW stays responsible for keeping the work to our standard and keeping you
                  informed.
                </p>
              </Reveal>

              {/* Stat strip — steel-blue serif numerals on a hairline-topped row */}
              <Reveal delay={220} className="mt-12 w-full">
                <ul className="flex flex-wrap items-baseline gap-x-10 gap-y-6 border-t border-white/15 pt-8">
                  {stats.map((s, i) => (
                    <li key={s.label} className="flex items-baseline gap-3">
                      <span
                        className="font-serifDisplay text-[40px] font-normal leading-none tracking-[-0.02em] md:text-[48px]"
                        style={{ color: STEEL }}
                      >
                        {s.num}
                      </span>
                      <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-white/60">
                        {s.label}
                      </span>
                      {i < stats.length - 1 && (
                        <span aria-hidden="true" className="ml-7 hidden h-[5px] w-[5px] self-center rounded-full sm:inline-block" style={{ backgroundColor: GOLD }} />
                      )}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══ 06 — CLOSING CTA (light, centered, maximum whitespace) ══════ */}
        <section aria-labelledby="closing-heading" className="w-full bg-white">
          <div className={`${SECTION} py-[112px] text-center md:py-[150px] lg:py-[180px]`}>
            <Reveal className="flex flex-col items-center">
              <span className="flex items-center gap-4">
                <span aria-hidden="true" className="h-px w-[52px]" style={{ backgroundColor: GOLD }} />
                <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.22em] text-[#7A7466]">
                  <span style={{ color: GOLD }}>06</span> &mdash; Next Step
                </span>
                <span aria-hidden="true" className="h-px w-[52px]" style={{ backgroundColor: GOLD }} />
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2
                id="closing-heading"
                className="mx-auto mt-8 max-w-[16ch] font-serifDisplay text-[40px] font-normal leading-[1.04] tracking-[-0.02em] sm:text-[54px] md:text-[64px]"
                style={{ color: INK }}
              >
                Wherever it happened, start here
                <Period />
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mx-auto mt-6 max-w-[560px] font-serifDisplay text-[18px] leading-[1.6] text-[#3A4A5E] lg:text-[19px]">
                One free call. We&rsquo;ll tell you which borders your matter actually crosses &mdash;
                and what to do about each one.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10 flex justify-center">
                <Cta to={TYPEFORM} external variant="primaryLight">
                  Talk to a lawyer
                </Cta>
              </div>
              <p className="mt-7 font-sans text-[14px] text-[#7A7466]">
                Calling from abroad?{" "}
                <a className="font-medium text-[#0E1B2C] underline-offset-4 transition hover:text-[#C9A24B] hover:underline" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>{" "}
                &mdash; we reply within one business day.
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
