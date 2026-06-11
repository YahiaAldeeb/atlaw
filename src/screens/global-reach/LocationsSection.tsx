import { locations } from "../../data/global-reach";
import {
  NAVY,
  Reveal,
  Eyebrow,
  Period,
  CityClock,
  LocationsArc,
  grain,
  SECTION,
  PAD,
} from "./shared";

/* ══ 03 — WHERE WE SHOW UP (dark navy, the centerpiece) ══════════ */
export const LocationsSection = (): JSX.Element => (
  <section
    aria-labelledby="locations-heading"
    className="relative isolate w-full overflow-hidden text-white scroll-mt-20"
    id="locations"
    style={{ backgroundColor: NAVY }}
  >
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: grain }} />

    <div className={`relative ${SECTION} ${PAD}`}>
      <Reveal>
        <Eyebrow num="03" label="Our Locations" onDark />
      </Reveal>
      <Reveal delay={80}>
        <h2
          id="locations-heading"
          className="mt-8 font-serifDisplay text-[36px] font-normal leading-[1.06] tracking-[-0.02em] text-white sm:text-[48px] md:text-[58px]"
        >
          Three cities. One standard
          <Period />
        </h2>
      </Reveal>
      <Reveal delay={140}>
        <p className="mt-7 max-w-[640px] font-serifDisplay text-[18px] leading-[1.62] text-white/75 lg:text-[19px]">
          Wherever you reach us, you get the same firm: direct answers, a named attorney, and a
          clear next step.
        </p>
      </Reveal>

      {/* Three broadsheet columns, hairline-separated, with the single gold arc above. */}
      <div className="relative mt-16 md:mt-20">
        <LocationsArc />
        <div className="grid gap-y-12 md:grid-cols-3 md:gap-x-0">
          {locations.map((loc, i) => (
            <Reveal key={loc.city} delay={140 + i * 120}>
              <article
                className={`relative h-full md:px-8 lg:px-10 ${
                  i > 0 ? "md:border-l md:border-white/12" : ""
                }`}
              >
                <h3 className="font-serifDisplay text-[40px] font-normal leading-none tracking-[-0.02em] text-white md:text-[48px]">
                  {loc.city}
                  <Period />
                </h3>
                <p className="mt-4 font-sans text-[11.5px] font-semibold uppercase tracking-[0.2em] text-white/55">
                  {loc.region}
                  <span aria-hidden="true" className="mx-2 text-white/30">·</span>
                  <CityClock timeZone={loc.timeZone} />
                </p>
                <p className="mt-6 font-sans text-[15px] leading-[1.65] text-white/72">
                  {loc.body}
                </p>
                <a
                  href={loc.contact.href}
                  className="mt-6 inline-block font-sans text-[14px] leading-[1.5] text-white/85 underline-offset-4 transition hover:text-[#C9A24B] hover:underline"
                >
                  {loc.contact.label}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Beyond-these-cities line */}
      <Reveal delay={160}>
        <p className="mt-16 border-t border-white/12 pt-8 font-sans text-[12px] font-semibold uppercase tracking-[0.22em] text-white/55 md:mt-20">
          Beyond these cities &mdash; a vetted network of affiliated attorneys across four
          continents.
        </p>
      </Reveal>
    </div>
  </section>
);
