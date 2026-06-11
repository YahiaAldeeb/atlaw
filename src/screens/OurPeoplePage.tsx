import { useEffect, useRef, useState } from "react";
import { Header } from "../components/ATLAW/Header";
import { ServiceAreas } from "../components/ATLAW/ServiceAreas";
import { Footer } from "../components/ATLAW/Footer";

const IMG = "/team%20imgs/";

type Member = {
  name: string;
  title: string;
  specialty: string;
  location: string;
  initials: string;
  img: string;
};

const members: Member[] = [
  { name: "Dewnya A. Bazzi", title: "Chief Executive Officer", specialty: "Litigation", location: "Detroit", initials: "DB", img: `${IMG}63b39e38c09618561429f7ee_Dewnya-Bazzi.avif` },
  { name: "Jalal Moughania", title: "Principal Attorney", specialty: "Corporate", location: "Detroit", initials: "JM", img: `${IMG}63c1c57795309be38e705878_Jalal-Moughania.avif` },
  { name: "Nehme Bazzi", title: "Attorney", specialty: "Litigation", location: "Detroit", initials: "NB", img: `${IMG}63c1cca3d51739127a998834_atty-nehme-bazzi.avif` },
  { name: "Mohamed Ali Banoon", title: "Attorney", specialty: "Corporate Law", location: "Detroit", initials: "MB", img: `${IMG}65f8070a9616136a3012bd77_MABANOON_Portrait-p-500.avif` },
  { name: "Russ Farha", title: "Attorney", specialty: "Litigation", location: "Detroit", initials: "RF", img: `${IMG}65ba5fb07b4decd27d5a4f2a_farha-p-500.avif` },
  { name: "Nadia Hamade", title: "Attorney", specialty: "Corporate Law", location: "Detroit", initials: "NH", img: `${IMG}65801fe0a07870c109189f34_Nadia-Hamade-p-500.avif` },
  { name: "Lamis Baydoun", title: "Professional", specialty: "Business Relations & Development", location: "Detroit", initials: "LB", img: `${IMG}6411fc8525108d922d005e85_DSC00058-p-500.avif` },
  { name: "Deema Ghamloush", title: "Professional", specialty: "Client Services", location: "Detroit", initials: "DG", img: `${IMG}67e114de6af4ed1a698f9649_Deema-p-500.avif` },
  { name: "Madison Misovich", title: "Professional", specialty: "Administration", location: "Detroit", initials: "MM", img: `${IMG}67e115b3181ac0f438e8c514_Madison-p-500.avif` },
  { name: "Bedia Sleiman", title: "Professional", specialty: "Litigation & Client Services", location: "Detroit", initials: "BS", img: `${IMG}6411fc555228f4a8689c33ec_DSC00029-p-500.avif` },
  { name: "Maitha Abdulmunem", title: "Consultant", specialty: "International Law", location: "Dubai", initials: "MA", img: `${IMG}64187d528485d596fe7e912d_WhatsApp Image 2023-03-16 at 10.51.37 PM-p-500.avif` },
  { name: "Latifa Abdulmunem", title: "Consultant", specialty: "International Law", location: "Dubai", initials: "LA", img: `${IMG}64187da3eb47362df8e8834b_WhatsApp Image 2023-03-16 at 10.51.37 PM (1).avif` },
  { name: "Abdul Moneim Bin Suwaidan", title: "Consultant", specialty: "Legal, Business", location: "Dubai", initials: "AB", img: `${IMG}63f4e6073bd855a3f0112871_Abdul Moneim Bin Suwaidan.avif` },
  { name: "James Aguilar", title: "Professional", specialty: "Litigation", location: "Manila", initials: "JA", img: `${IMG}63f6df755cb0bfda1487c9ee_aguilar.avif` },
  { name: "John Caminade", title: "Professional", specialty: "Administration", location: "Manila", initials: "JC", img: `${IMG}641332f3db2bb40c50f453c3_John-Caminade-p-500.avif` },
  { name: "Dianne Caminade", title: "Professional", specialty: "Litigation", location: "Manila", initials: "DC", img: `${IMG}67e11507b0e9e3890feaaa84_Dianne-p-500.avif` },
  { name: "Arlyn Dungao", title: "Professional", specialty: "Creative", location: "Manila", initials: "AD", img: `${IMG}63f6dbb9ec180e545b0cb2d3_Dungao.avif` },
  { name: "Katrina Rosillo-Badillo", title: "Consultant", specialty: "Legal, Accounting", location: "Manila", initials: "KR", img: `${IMG}640936d484b6bfc5e4712571_Katrina-Rosillio-Badillo-p-500.avif` },
  { name: "Marla Sabrina", title: "Professional", specialty: "Technology", location: "Manila", initials: "MS", img: `${IMG}63f6dc7993476583c577c0b4_remolin.avif` },
  { name: "Mohamed Aljabery", title: "Consultant", specialty: "Legal", location: "Baghdad", initials: "MJ", img: `${IMG}65529ea7e0477176db90ed06_Mohamed Aljabery-p-500.avif` },
  { name: "Dalal Al-Mulla", title: "Consultant", specialty: "Legal, Business", location: "Kuwait City", initials: "DM", img: `${IMG}64124a392236e14ba19cbe91_WhatsApp Image 2023-03-15 at 3.44.44 PM (1)-p-500.avif` },
  { name: "Fadi Jamaluddin", title: "Consultant", specialty: "Legal, Enterprises", location: "Beirut", initials: "FJ", img: `${IMG}6411fd98d8510e0ce89d3010_WhatsApp Image 2023-03-15 at 11.27.51 AM.avif` },
];

const locationFilters = ["All", "Detroit", "Manila", "Dubai", "Global"] as const;
type LocationFilter = (typeof locationFilters)[number];

const globalLocations = new Set(["Baghdad", "Kuwait City", "Beirut"]);

function matchesFilter(member: Member, filter: LocationFilter): boolean {
  if (filter === "All") return true;
  if (filter === "Global") return globalLocations.has(member.location);
  return member.location === filter;
}

// Section-local palette (team-page hero only — self-contained, not global tokens):
//   navy #0A1B33 · paper #FAF8F4 · gold #C9A24B · steel #7E9CC4
const HeroArrow = ({ className = "" }: { className?: string }) => (
  <svg
    aria-hidden="true"
    className={`h-[14px] w-[14px] transition-transform duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
  </svg>
);

// Engraved stat number that counts up from 0 once it scrolls into view.
// Respects prefers-reduced-motion (jumps straight to the final value).
const CountUpStat = ({
  target,
  suffix = "",
  label,
}: {
  target: number;
  suffix?: string;
  label: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(target);
      return;
    }

    let raf = 0;
    let start = 0;
    const duration = 900;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const step = (ts: number) => {
          if (!start) start = ts;
          const progress = Math.min((ts - start) / duration, 1);
          // ease-out
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(eased * target));
          if (progress < 1) raf = window.requestAnimationFrame(step);
        };
        raf = window.requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(raf);
    };
  }, [target]);

  return (
    <div ref={ref}>
      <p className="font-serifDisplay text-[34px] leading-none text-[#7E9CC4] tabular-nums">
        {value}
        {suffix}
      </p>
      <p className="mt-2 font-sans text-[12px] uppercase tracking-[0.16em] text-white/55">
        {label}
      </p>
    </div>
  );
};

const LocationPinIcon = () => (
  <svg className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} />
    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} />
  </svg>
);

const MemberCard = ({ member }: { member: Member }) => (
  <article className="group flex flex-col rounded-2xl border border-ink/10 bg-ivory overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/8">
    {/* photo with dark blue overlay */}
    <div className="relative h-64 overflow-hidden bg-gray-300">
      <img
        alt={member.name}
        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        src={member.img}
      />
      {/* grey shade */}
      <div className="absolute inset-0 bg-gray-500/30 mix-blend-multiply" />
      {/* accent underline on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>

    {/* info */}
    <div className="flex flex-col flex-1 p-5">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent">
        {member.specialty}
      </p>
      <h3 className="mt-1.5 font-serifDisplay text-xl leading-tight text-ink">
        {member.name}
      </h3>
      <p className="mt-1 text-sm text-ink/60">{member.title}</p>
      <div className="mt-auto pt-4 flex items-center gap-1.5 text-xs text-ink/50">
        <LocationPinIcon />
        <span>{member.location}</span>
      </div>
    </div>
  </article>
);

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
