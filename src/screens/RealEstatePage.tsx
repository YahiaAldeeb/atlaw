import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/ATLAW/Header";
import { ServiceAreas } from "../components/ATLAW/ServiceAreas";
import { Footer } from "../components/ATLAW/Footer";
import "./RealEstate.css";

const GOLD = "#C9A24B";
const headlineAxes = "'opsz' 144, 'wght' 360, 'SOFT' 0, 'WONK' 0";
const subHeadAxes = "'opsz' 96, 'wght' 400, 'SOFT' 0, 'WONK' 0";

const navyCanvas = "linear-gradient(180deg, #0E1B33 0%, #0A1428 100%)";

// Hero photo — full-width background with a dark overlay for text legibility.
// AVIF is the primary source for fast loading; the WebP is a fallback for browsers
// without AVIF support. The left third of the source already falls off to deep navy,
// which sits cleanly under the existing left-side gradient.
const heroImageAvif = "/assets/real-estate-hero.avif";
const heroImageFallback = "/assets/real-estate-hero.webp";

// Soft grain over the navy canvas — same texture language as the rest of the site.
const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

/* ─────────────────────────────── shared bits ─────────────────────────────── */

const Grain = (): JSX.Element => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 opacity-[0.05]"
    style={{ backgroundImage: grain }}
  />
);

/* ─────────────────────────────── content (verbatim copy) ─────────────────── */

const intro =
  "Real estate is one of the biggest financial moves most people and businesses ever make, and the paperwork behind it decides whether it goes smoothly or turns into a problem later. Our attorneys handle the legal side of buying, selling, leasing, developing, and fighting over property, so you know what you’re signing and what you’re actually getting. We work with homeowners, buyers and sellers, landlords and tenants, investors, developers, and businesses.";

type Topic = { title: string; body: string; items: string[] };

const topics: Topic[] = [
  {
    title: "Buying and selling property",
    body: "Most deals look simple until something in the contract or the title gets in the way. We review and negotiate the agreements, check that the title is clean, and handle the closing so ownership transfers the way it’s supposed to.",
    items: [
      "Residential purchases and sales",
      "Commercial purchases and sales",
      "Purchase agreement review and negotiation",
      "Title review and clearing title defects",
      "Closings and escrow",
      "For-sale-by-owner transactions",
    ],
  },
  {
    title: "Leasing",
    body: "A lease is a long commitment, and the terms matter more than people expect. We draft and negotiate leases for landlords and tenants, and we step in when one side isn’t holding up their end.",
    items: [
      "Commercial leases",
      "Residential leases",
      "Lease negotiation and review",
      "Assignments and subleases",
      "Lease disputes",
    ],
  },
  {
    title: "Land use, zoning, and development",
    body: "Before you build or change how a property is used, the local rules have to line up. We handle approvals, permits, and the hearings that come with them, and we push back when a decision is wrong.",
    items: [
      "Zoning applications and variances",
      "Land use approvals and permits",
      "Subdivision and platting",
      "Development agreements",
      "Appeals of zoning and planning decisions",
    ],
  },
  {
    title: "Construction",
    body: "Building projects involve a lot of money and a lot of moving parts, and disputes are common. We handle the contracts up front and the claims when a project goes sideways.",
    items: [
      "Construction contracts",
      "Owner, contractor, and subcontractor agreements",
      "Mechanic’s liens",
      "Construction defect claims",
      "Payment disputes",
    ],
  },
  {
    title: "Financing and title",
    body: "A property is only as good as its title and the terms of the loan against it. We work through the financing documents and resolve the title problems that can hold up or unwind a deal.",
    items: [
      "Mortgage and loan documents",
      "Refinancing",
      "Title insurance claims",
      "Liens and encumbrances",
      "Easements and rights of way",
    ],
  },
  {
    title: "Property disputes",
    body: "When a deal or a boundary turns into a fight, it usually comes down to what the documents say versus what happened on the ground. We handle these through negotiation when we can, and in court when we have to.",
    items: [
      "Breach of purchase or sale agreements",
      "Boundary and easement disputes",
      "Adverse possession claims",
      "Specific performance claims",
      "Quiet title actions",
    ],
  },
  {
    title: "Landlord and tenant matters",
    body: "Both sides have rights, and both sides have obligations that are easy to get wrong. We represent landlords and tenants in the disputes that come up during and after a tenancy.",
    items: [
      "Evictions",
      "Security deposit disputes",
      "Habitability and repair claims",
      "Lease enforcement",
      "Commercial tenant defaults",
    ],
  },
  {
    title: "HOA and condominium matters",
    body: "Living in a community with shared rules brings its own conflicts. We advise associations, boards, and owners on the rules, the dues, and the disputes that follow.",
    items: [
      "Association governance and bylaws",
      "Assessment and dues disputes",
      "Covenant enforcement",
      "Owner and board disputes",
    ],
  },
];

// Service areas — the eight topics above, surfaced as a plain text list.
const serviceAreas: string[] = topics.map((topic) => topic.title);

/* ─────────────────────────────── sections ─────────────────────────────── */

const Hero = (): JSX.Element => (
  <section
    aria-labelledby="re-hero-title"
    className="relative isolate w-full overflow-hidden"
    style={{ background: navyCanvas, color: "#F4F1EA" }}
  >
    {/* Full-width background photo — AVIF primary source with a WebP fallback for older browsers */}
    <picture className="pointer-events-none absolute inset-0 z-0">
      <source srcSet={heroImageAvif} type="image/avif" />
      <img
        alt="A wooden judge's gavel resting beside a small wooden model house and a sealed legal document on a dark desk."
        className="h-full w-full object-cover object-right"
        src={heroImageFallback}
      />
    </picture>
    {/* Navy gradient: solid on the left so the text stays legible, fading toward the image on the right */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        background:
          "linear-gradient(90deg, rgba(19,29,56,0.95) 0%, rgba(19,29,56,0.85) 30%, rgba(19,29,56,0.45) 70%, rgba(19,29,56,0.2) 100%)",
      }}
    />
    {/* Extra veil on narrow screens, where the text column runs full-width over the image */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 bg-[rgba(19,29,56,0.55)] md:hidden"
    />

    <Grain />

    <div className="relative z-10 mx-auto w-full max-w-[1180px] px-6 pb-[96px] pt-[72px] sm:px-10 md:pb-[120px] md:pt-[104px] lg:px-16 lg:pb-[140px] lg:pt-[120px]">
      <div className="max-w-[820px]">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="re-reveal mb-9 font-sans text-[11.5px] font-semibold uppercase leading-none tracking-[0.2em]"
          style={{ animationDelay: "0ms" }}
        >
          <ol className="flex flex-wrap items-center gap-x-3 gap-y-1 text-white/55">
            <li><Link className="transition-colors hover:text-white/90" to="/">ATLAW</Link></li>
            <li aria-hidden="true" className="text-white/30">/</li>
            <li><Link className="transition-colors hover:text-white/90" to="/practice-areas">Practice Areas</Link></li>
            <li aria-hidden="true" className="text-white/30">/</li>
            <li><span aria-current="page" className="text-white">Real Estate</span></li>
          </ol>
        </nav>

        {/* Marker */}
        <p
          className="re-reveal font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.28em]"
          style={{ animationDelay: "90ms", color: GOLD, marginBottom: "28px" }}
        >
          <span>03</span>
          <span aria-hidden="true" className="mx-3 text-[rgba(201,162,75,0.55)]">&mdash;</span>
          <span>Protect</span>
        </p>

        {/* H1 */}
        <h1
          className="re-reveal font-serifDisplay font-normal tracking-[-0.03em] text-[#F4F1EA]"
          id="re-hero-title"
          style={{
            animationDelay: "200ms",
            fontSize: "clamp(52px, 8.5vw, 118px)",
            lineHeight: "0.95",
            fontVariationSettings: headlineAxes,
          }}
        >
          Real Estate
          <span aria-hidden="true" style={{ color: GOLD }}>.</span>
        </h1>

        {/* Gold accent rule */}
        <span
          aria-hidden="true"
          className="re-reveal block"
          style={{ animationDelay: "280ms", width: "56px", height: "2px", background: GOLD, marginTop: "28px", marginBottom: "28px" }}
        />

        {/* Tagline */}
        <p
          className="re-reveal max-w-[680px] font-sans text-[18px] leading-[1.55] text-[rgba(244,241,234,0.85)] md:text-[20px]"
          style={{ animationDelay: "340ms" }}
        >
          We make sure the deal holds up, from offer to closing.
        </p>
      </div>
    </div>
  </section>
);

const Body = (): JSX.Element => (
  <section
    aria-labelledby="re-body-heading"
    className="relative w-full overflow-hidden"
    style={{ backgroundColor: "#FFFFFF", color: "#0B1F3A" }}
  >
    <div className="relative mx-auto w-full max-w-[820px] px-6 pb-20 pt-20 sm:px-10 lg:pb-[120px] lg:pt-[120px]">
      {/* Overview eyebrow + intro */}
      <p className="re-reveal flex items-center gap-3 font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#0B1F3A]">
        <span aria-hidden="true" className="h-px w-8" style={{ backgroundColor: "#B88A2D" }} />
        Overview
      </p>
      <h2 className="sr-only" id="re-body-heading">How we handle real estate matters</h2>
      <p
        className="re-reveal mt-7 font-serifDisplay text-[22px] font-normal leading-[1.5] tracking-[-0.01em] text-[#0B1F3A] sm:text-[24px] lg:text-[26px]"
        style={{ animationDelay: "80ms", fontVariationSettings: subHeadAxes }}
      >
        {intro}
      </p>

      {/* Sub-topics — single column, no boxes */}
      <div className="mt-20 space-y-16 lg:mt-24 lg:space-y-20">
        {topics.map((topic) => (
          <article key={topic.title}>
            <span aria-hidden="true" className="block h-px w-10" style={{ backgroundColor: "#B88A2D" }} />
            <h3
              className="mt-6 font-serifDisplay font-normal leading-[1.12] tracking-[-0.02em] text-[#0B1F3A]"
              style={{ fontSize: "clamp(26px, 3.4vw, 38px)", fontVariationSettings: subHeadAxes }}
            >
              {topic.title}
            </h3>
            <p className="mt-5 font-sans text-[18px] leading-[1.7] text-[#3A4A63] lg:text-[19px]">
              {topic.body}
            </p>
            <ul className="mt-6 space-y-2.5">
              {topic.items.map((item) => (
                <li className="flex items-start gap-3 font-sans text-[17px] leading-[1.55] text-[#3A4A63]" key={item}>
                  <span aria-hidden="true" className="mt-[8px] h-[5px] w-[5px] shrink-0 rounded-full" style={{ backgroundColor: "#B88A2D" }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const ServiceAreaList = (): JSX.Element => (
  <section aria-labelledby="re-service-areas-heading" className="relative w-full" style={{ backgroundColor: "#FFFFFF", color: "#0B1F3A" }}>
    <div className="relative mx-auto w-full max-w-[1180px] px-6 pb-20 pt-20 sm:px-10 lg:px-16 lg:pb-[120px] lg:pt-[120px]">
      <p className="flex items-center gap-3 font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#0B1F3A]">
        <span aria-hidden="true" className="h-px w-8" style={{ backgroundColor: "#B88A2D" }} />
        Service areas
      </p>
      <h2
        className="mt-6 max-w-[760px] font-serifDisplay font-normal leading-[1.05] tracking-[-0.025em] text-[#0B1F3A]"
        id="re-service-areas-heading"
        style={{ fontSize: "clamp(30px, 4vw, 52px)", fontVariationSettings: headlineAxes }}
      >
        What we handle
        <span aria-hidden="true" style={{ color: "#B88A2D" }}>.</span>
      </h2>

      <ul className="mt-12 grid grid-cols-1 gap-x-12 gap-y-4 border-t border-[#0B1F3A]/12 pt-10 sm:grid-cols-2">
        {serviceAreas.map((area) => (
          <li className="flex items-start gap-3 font-sans text-[18px] leading-[1.5] text-[#3A4A63]" key={area}>
            <span aria-hidden="true" className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full" style={{ backgroundColor: "#B88A2D" }} />
            <span>{area}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export const RealEstatePage = (): JSX.Element => {
  useEffect(() => {
    document.title = "Real Estate Lawyers | ATLAW";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "ATLAW handles the legal side of real estate — buying, selling, leasing, land use, construction, financing, title, and property disputes — so you know what you're signing and what you're getting.";
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <div className="atlaw-re min-h-screen bg-ivory text-ink">
      <Header />
      <main>
        <Hero />
        <Body />
        <ServiceAreaList />
        <ServiceAreas />
      </main>
      <Footer />
    </div>
  );
};
