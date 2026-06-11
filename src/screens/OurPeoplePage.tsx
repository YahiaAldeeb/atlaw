import { useState } from "react";
import { Header } from "../components/ATLAW/Header";
import { ServiceAreas } from "../components/ATLAW/ServiceAreas";
import { Footer } from "../components/ATLAW/Footer";
import { members, type Member } from "../data/team";
import { HeroArrow, CountUpStat, MemberCard } from "../components/ATLAW/OurPeoplePieces";

const locationFilters = ["All", "Detroit", "Manila", "Dubai", "Global"] as const;
type LocationFilter = (typeof locationFilters)[number];

const globalLocations = new Set(["Baghdad", "Kuwait City", "Beirut"]);

function matchesFilter(member: Member, filter: LocationFilter): boolean {
  if (filter === "All") return true;
  if (filter === "Global") return globalLocations.has(member.location);
  return member.location === filter;
}

export const OurPeoplePage = (): JSX.Element => {
  const [activeFilter, setActiveFilter] = useState<LocationFilter>("All");

  const visible = members.filter((m) => matchesFilter(m, activeFilter));

  return (
    <div className="min-h-screen bg-ivory text-ink [zoom:1.12]">
      <Header />
      <main>

        {/* ── 1. HERO — one full-bleed cinematic layer + one floating data layer ─ */}
        <section
          className="relative isolate w-full overflow-hidden bg-[#0A1B33] lg:min-h-[calc(100svh-88px)]"
          aria-label="Our People hero"
        >
          {/* Layer 1 — full-bleed navy environmental photograph (brand watermark
              + gold arc + bookshelf light are baked into the source image) */}
          <img
            aria-hidden="true"
            alt=""
            className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover object-center"
            src="/assets/our-people-hero.avif"
          />
          {/* Navy multiply wash + edge-darkening gradient so both text zones stay readable */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[#0A1B33]/80 mix-blend-multiply"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#0A1B33] via-[#0A1B33]/45 to-[#0A1B33]/70"
          />

          <div className="relative mx-auto flex w-full max-w-[1760px] flex-col gap-12 px-6 py-20 sm:px-10 md:py-28 lg:flex-row lg:items-center lg:gap-16 lg:px-[clamp(48px,5vw,80px)] lg:py-32">
            {/* ── Copy block ── */}
            <div className="hero-fade flex-1 lg:max-w-[46%]">
              {/* Eyebrow */}
              <p className="flex items-center gap-4">
                <span aria-hidden="true" className="h-px w-[32px] shrink-0 bg-[#C9A24B]" />
                <span className="font-sans text-[13px] font-medium uppercase tracking-[0.24em] text-[#C9A24B]">
                  02 &mdash; Our People
                </span>
              </p>

              {/* Headline lockup */}
              <h1 className="mt-7 font-serifDisplay leading-[1.04] tracking-[-0.015em] text-[#FAF8F4] text-[clamp(2.75rem,7vw,5.5rem)]">
                <span className="hero-rise block" style={{ animationDelay: "120ms" }}>
                  The skilled
                </span>
                <span
                  className="hero-rise block italic text-[#7E9CC4]"
                  style={{ animationDelay: "200ms" }}
                >
                  professionals
                </span>
                <span className="hero-rise block" style={{ animationDelay: "280ms" }}>
                  behind ATLAW
                  <span
                    aria-hidden="true"
                    className="ml-[0.04em] inline-block h-[0.13em] w-[0.13em] rounded-full bg-[#C9A24B] align-baseline"
                  />
                </span>
              </h1>

              {/* Supporting paragraph */}
              <p className="mt-7 max-w-[460px] font-serifDisplay text-[19px] leading-[1.6] text-white/80">
                Attorneys, consultants, and specialists working as one firm &mdash; matched to your
                matter by what it actually needs, not by who&rsquo;s available.
              </p>

              {/* CTA row — navy bg, so the primary inverts to white fill */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  className="group inline-flex h-[56px] items-center justify-center gap-2.5 rounded-full bg-[#FAF8F4] px-7 font-sans text-[15px] font-medium text-[#0A1B33] transition-all duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white hover:shadow-[0_8px_24px_rgba(0,0,0,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A24B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1B33]"
                  href="#team-heading"
                >
                  Meet the team
                  <HeroArrow className="group-hover:translate-x-1" />
                </a>
                <a
                  className="group inline-flex h-[56px] items-center justify-center gap-2.5 rounded-full border border-white/40 px-7 font-sans text-[15px] font-medium text-[#FAF8F4] transition-all duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A24B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1B33]"
                  href="/about"
                >
                  How we work
                  <HeroArrow className="group-hover:translate-x-1" />
                </a>
              </div>

              {/* Microcopy */}
              <p className="mt-7 flex items-center gap-2.5 font-serifDisplay text-[15px] italic text-white/60">
                <span aria-hidden="true" className="h-[6px] w-[6px] shrink-0 rounded-full bg-[#C9A24B]" />
                Every matter is led by a named attorney. You&rsquo;ll always know who.
              </p>
            </div>

            {/* ── Stat card — glassmorphic evidence layer floating over the portrait ── */}
            <div className="hero-fade w-full shrink-0 lg:w-[440px]" style={{ animationDelay: "200ms" }}>
              <article className="rounded-2xl border border-white/12 bg-white/[0.04] p-9 backdrop-blur-2xl">
                <div className="h-[2px] w-[28px] bg-[#C9A24B]" />
                <h2 className="mt-5 font-serifDisplay text-[26px] leading-snug text-[#FAF8F4]">
                  Global Team
                </h2>
                <p className="mt-3 font-sans text-[15px] leading-[1.6] text-white/75">
                  Spanning six cities across four continents, our team brings local insight to every
                  cross-border matter.
                </p>
                <div className="mt-7 grid grid-cols-3 gap-4 border-t border-white/12 pt-7">
                  <CountUpStat target={22} suffix="+" label="Professionals" />
                  <CountUpStat target={6} label="Cities" />
                  <CountUpStat target={4} label="Continents" />
                </div>
                <a
                  className="group mt-7 inline-flex items-center gap-2 font-sans text-[13px] font-medium text-[#C9A24B] transition-colors hover:text-[#dcb868] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A24B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1B33]"
                  href="#team-heading"
                >
                  Where we show up
                  <HeroArrow className="group-hover:translate-x-1" />
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* ── 2. TEAM GRID ───────────────────────────────────────────── */}
        <section className="bg-ivory" aria-labelledby="team-heading">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24">

            {/* heading + filter row */}
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">
                  MEET THE TEAM
                </p>
                <h2
                  id="team-heading"
                  className="mt-4 font-serifDisplay text-4xl leading-tight md:text-5xl"
                >
                  Expertise Across Borders.
                </h2>
              </div>

              {/* location filters */}
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by location">
                {locationFilters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold tracking-[0.12em] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink ${
                      activeFilter === filter
                        ? "bg-ink text-ivory"
                        : "border border-ink/20 text-ink/70 hover:border-ink/50 hover:text-ink"
                    }`}
                    aria-pressed={activeFilter === filter}
                  >
                    {filter === "Global" ? "Global Offices" : filter}
                  </button>
                ))}
              </div>
            </div>

            {/* count */}
            <p className="mt-8 text-sm text-ink/50">
              {visible.length} {visible.length === 1 ? "professional" : "professionals"}
              {activeFilter !== "All" ? ` in ${activeFilter === "Global" ? "global offices" : activeFilter}` : ""}
            </p>

            {/* grid */}
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {visible.map((member) => (
                <MemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. CLOSING CTA ─────────────────────────────────────────── */}
        <section className="bg-ivory" aria-labelledby="people-cta-heading">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24">
            <div className="rounded-3xl bg-ink px-8 py-16 text-center md:px-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ivory/50">
                JOIN OUR TEAM
              </p>
              <h2
                id="people-cta-heading"
                className="mx-auto mt-4 max-w-2xl font-serifDisplay text-4xl leading-tight text-ivory md:text-5xl"
              >
                Become Part of Something Global.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ivory/70">
                ATLAW is always looking for talented attorneys, consultants, and professionals who
                share our passion for innovative, cross-border legal work.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  className="group inline-flex items-center rounded-full bg-ivory px-5 py-3 text-sm font-medium text-ink transition duration-200 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
                  href="/"
                >
                  View Careers
                  <span className="ml-2 transition duration-200 group-hover:translate-x-1">&rarr;</span>
                </a>
                <a
                  className="group inline-flex items-center rounded-full border border-ivory/30 px-5 py-3 text-sm font-medium text-ivory transition duration-200 hover:bg-ivory/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
                  href="/"
                >
                  Contact Us
                  <span className="ml-2 transition duration-200 group-hover:translate-x-1">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <ServiceAreas />
      </main>
      <Footer />
    </div>
  );
};
