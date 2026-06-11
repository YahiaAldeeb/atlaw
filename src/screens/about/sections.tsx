import { NAVY, INK, GOLD, Reveal, Eyebrow, Period, Cta, grain, SECTION, PAD } from "./primitives";
import { steps, practiceAreas } from "../../data/about";

/* ────────────────────────────────────────────────────────────────────────────
   ATLAW — About Us section components, extracted verbatim from AboutUsPage.
   JSX / styling / motion wiring unchanged; rendered output is identical.
   ──────────────────────────────────────────────────────────────────────────── */

/* ══ 03 — THE FOUNDER (light, reverse split + pull-quote) ═════════ */
export const FounderSection = ({ ourPeople }: { ourPeople: string }): JSX.Element => (
  <section aria-labelledby="founder-heading" className="w-full bg-white">
    <div className={`${SECTION} ${PAD}`}>
      <div className="grid items-center gap-12 lg:grid-cols-[45fr_55fr] lg:gap-16">
        {/* Portrait left */}
        <Reveal className="order-1">
          <div className="overflow-hidden rounded-[20px]" style={{ backgroundColor: NAVY }}>
            <img
              alt="Dewnya Bazzi, founder of ATLAW"
              className="block h-full w-full object-cover"
              height={563}
              src="/assets/about-hero.avif"
              width={1000}
            />
          </div>
        </Reveal>

        {/* Copy right */}
        <div className="order-2">
          <Reveal>
            <Eyebrow num="03" label="The Founder" />
          </Reveal>
          <Reveal delay={80}>
            <h2
              id="founder-heading"
              className="mt-8 font-serifDisplay text-[40px] font-normal leading-[1.02] tracking-[-0.02em] sm:text-[52px] md:text-[60px]"
              style={{ color: INK }}
            >
              Dewnya Bazzi
              <Period />
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-[560px] font-serifDisplay text-[18px] leading-[1.6] text-[#3A4A5E]">
              Dewnya founded ATLAW in Detroit and still leads it today. She built the firm
              around the way she practices: direct answers, realistic expectations, and a plan
              you can actually follow.
            </p>
            <p className="mt-5 max-w-[560px] font-serifDisplay text-[18px] leading-[1.6] text-[#3A4A5E]">
              She has been named a Super Lawyers Rising Star three years running &mdash; a
              peer-reviewed recognition given to a small percentage of attorneys in each state.
            </p>
          </Reveal>

          {/* Super Lawyers year chips */}
          <Reveal delay={200}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              {["2024", "2025", "2026"].map((year) => (
                <span
                  key={year}
                  className="inline-flex items-center rounded-full border px-4 py-1.5 font-sans text-[13px] font-semibold tracking-[0.08em]"
                  style={{ borderColor: GOLD, color: GOLD }}
                >
                  {year}
                </span>
              ))}
              <span className="font-sans text-[12px] uppercase tracking-[0.14em] text-[#7A7466]">
                Super Lawyers Rising Star
              </span>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-7 max-w-[560px] font-serifDisplay text-[18px] leading-[1.6] text-[#3A4A5E]">
              When you hire ATLAW, the firm&rsquo;s standards are her standards. That&rsquo;s
              what founder-led means here.
            </p>
            <div className="mt-8">
              <Cta to={ourPeople} variant="secondaryLight">
                Read Dewnya&rsquo;s full bio
              </Cta>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Pull-quote, full width */}
      <Reveal delay={120}>
        <figure className="relative mt-20 border-t border-[#0E1B2C]/10 pt-14 md:mt-24 md:pt-16">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-2 select-none font-serifDisplay leading-none"
            style={{ color: GOLD, opacity: 0.28, fontSize: "120px" }}
          >
            &ldquo;
          </span>
          <blockquote className="relative mx-auto max-w-[940px] text-center font-serifDisplay text-[26px] font-normal leading-[1.32] tracking-[-0.01em] text-[#0E1B2C] sm:text-[32px] md:text-[40px]">
            Clients don&rsquo;t need a lecture on the law. They need to know what happens next,
            and who&rsquo;s handling it
            <Period />
          </blockquote>
          <figcaption className="mt-7 text-center font-sans text-[13px] font-semibold uppercase tracking-[0.18em] text-[#7A7466]">
            Dewnya Bazzi &middot; Founder
          </figcaption>
        </figure>
      </Reveal>
    </div>
  </section>
);

/* ══ 04 — HOW WE WORK (dark navy, 3 steps) ═══════════════════════ */
export const HowWeWorkSection = ({ typeform }: { typeform: string }): JSX.Element => (
  <section
    aria-labelledby="how-heading"
    className="relative isolate w-full overflow-hidden text-white"
    style={{ backgroundColor: NAVY }}
  >
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: grain }} />
    <div className={`relative ${SECTION} ${PAD}`}>
      <Reveal>
        <Eyebrow num="04" label="How We Work" onDark />
      </Reveal>
      <Reveal delay={80}>
        <h2
          id="how-heading"
          className="mt-8 max-w-[20ch] font-serifDisplay text-[36px] font-normal leading-[1.06] tracking-[-0.02em] text-white sm:text-[48px] md:text-[58px]"
        >
          Simple to start. Clear the whole way through
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
                className="pointer-events-none absolute -top-10 left-0 select-none font-serifDisplay text-[110px] font-normal leading-none text-white opacity-[0.06]"
              >
                {step.num}
              </span>
              <span
                aria-hidden="true"
                className="relative inline-block h-[7px] w-[7px] rounded-full"
                style={{ backgroundColor: GOLD }}
              />
              <h3 className="relative mt-7 font-serifDisplay text-[26px] font-normal leading-[1.12] tracking-[-0.01em] text-white md:text-[28px]">
                <span className="font-sans text-[15px] font-semibold tracking-[0.1em] text-white/45">
                  {step.num}
                </span>
                <br />
                {step.title}
              </h3>
              <p className="mt-5 font-sans text-[15px] leading-[1.7] text-white/72 md:text-[16px]">
                {step.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={140}>
        <div className="mt-16 md:mt-20">
          <Cta to={typeform} external variant="primaryDark">
            Start with a free call
          </Cta>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ══ 05 — PRACTICE AREAS (light, broadsheet grid) ════════════════ */
export const PracticeAreasSection = ({ practiceAreasHref }: { practiceAreasHref: string }): JSX.Element => (
  <section aria-labelledby="handle-heading" className="w-full bg-white">
    <div className={`${SECTION} ${PAD}`}>
      <Reveal>
        <Eyebrow num="05" label="Practice Areas" />
      </Reveal>
      <Reveal delay={80}>
        <h2
          id="handle-heading"
          className="mt-8 max-w-[18ch] font-serifDisplay text-[36px] font-normal leading-[1.05] tracking-[-0.02em] sm:text-[48px] md:text-[58px]"
          style={{ color: INK }}
        >
          Serious matters. Sixteen practice areas. One door
          <Period />
        </h2>
      </Reveal>
      <Reveal delay={140}>
        <p className="mt-6 max-w-[640px] font-serifDisplay text-[18px] leading-[1.6] text-[#3A4A5E]">
          If your situation touches more than one of these &mdash; and most do &mdash; it stays
          under one roof.
        </p>
      </Reveal>

      <Reveal delay={180}>
        <ul className="mt-14 grid grid-cols-1 border-t border-[#0E1B2C]/12 sm:grid-cols-2 lg:grid-cols-4">
          {practiceAreas.map((area) => (
            <li
              key={area.title}
              className="group border-b border-[#0E1B2C]/12 px-1 py-6 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:pr-7 sm:[&:nth-child(even)]:pl-7 sm:border-[#0E1B2C]/12 lg:px-6 lg:[&:not(:nth-child(4n))]:border-r lg:[&:nth-child(odd)]:pr-6 lg:[&:nth-child(even)]:pl-6"
            >
              <h3
                className="font-serifDisplay text-[21px] font-normal leading-tight tracking-[-0.01em] transition-colors duration-200 group-hover:text-[#C9A24B]"
                style={{ color: INK }}
              >
                {area.title}
              </h3>
              <p className="mt-2 font-sans text-[14px] leading-[1.55] text-[#3A4A5E]/90">
                {area.desc}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-14">
          <Cta to={practiceAreasHref} variant="secondaryLight">
            See all practice areas
          </Cta>
        </div>
      </Reveal>
    </div>
  </section>
);
