import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/ATLAW/Header";
import { Footer } from "../components/ATLAW/Footer";
import {
  categoryParentSlug,
  practiceAreas,
  type PracticeArea,
  type PracticeCategory,
} from "../data/practiceAreas";

const NAVY_DEEP = "#061426";
const IVORY = "#FFFFFF";
const GOLD = "#D39A2A";

const headlineAxes = "'opsz' 144, 'wght' 380, 'SOFT' 30, 'WONK' 0";
const subHeadlineAxes = "'opsz' 96, 'wght' 400, 'SOFT' 25, 'WONK' 0";

type CategoryGroup = {
  category: PracticeCategory;
  number: PracticeArea["categoryNumber"];
  parent: PracticeArea;
  children: PracticeArea[];
};

const useCategoryGroups = (): CategoryGroup[] =>
  useMemo(() => {
    const order: PracticeCategory[] = ["RECOVER", "BUILD", "PROTECT", "DEFEND"];
    return order.map((category) => {
      const inCategory = practiceAreas.filter((entry) => entry.category === category);
      const parent = inCategory.find((entry) => entry.slug === categoryParentSlug[category])!;
      const children = inCategory.filter((entry) => entry.slug !== categoryParentSlug[category]);
      return { category, number: parent.categoryNumber, parent, children };
    });
  }, []);

const Hero = (): JSX.Element => (
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
          "radial-gradient(ellipse 65% 55% at 20% 18%, rgba(38,72,124,0.34), transparent 70%), radial-gradient(ellipse 55% 60% at 82% 80%, rgba(20,42,76,0.45), transparent 70%), linear-gradient(180deg, #071B34 0%, #061426 60%, #050F1F 100%)",
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
              <span aria-current="page" className="text-[#FFFFFF]">Capabilities</span>
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
          Capabilities
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

const CategoryBlock = ({ group, index }: { group: CategoryGroup; index: number }): JSX.Element => {
  const isBlue = index % 2 === 1;

  // Variant tokens — switch the whole block between light and dark with one prop.
  const v = isBlue
    ? {
        bg: "#0B1F3A",
        color: IVORY,
        accent: GOLD,
        rule: GOLD,
        eyebrow: GOLD,
        title: "#FFFFFF",
        body: "rgba(255,255,255,0.70)",
        link: "#FFFFFF",
        linkHover: GOLD,
        cardBg: "rgba(255,255,255,0.03)",
        cardBorder: "rgba(255,255,255,0.08)",
        cardHoverBorder: "rgba(211,154,42,0.45)",
        cardHoverBg: "rgba(255,255,255,0.06)",
        cardTitle: "#FFFFFF",
        cardBody: "rgba(255,255,255,0.55)",
        cardArrow: "rgba(255,255,255,0.30)",
      }
    : {
        bg: "#FFFFFF",
        color: "#0B1F3A",
        accent: "#B88A2D",
        rule: "#B88A2D",
        eyebrow: "#B88A2D",
        title: "#0B1F3A",
        body: "#3A4A63",
        link: "#0B1F3A",
        linkHover: "#B88A2D",
        cardBg: "#FFFFFF",
        cardBorder: "#FFFFFF",
        cardHoverBorder: "rgba(184,138,45,0.55)",
        cardHoverBg: "#FFFFFF",
        cardTitle: "#0B1F3A",
        cardBody: "#5C6675",
        cardArrow: "#B0AFA8",
      };

  return (
    <section
      aria-labelledby={`cat-${group.category.toLowerCase()}`}
      className="relative w-full"
      style={{ backgroundColor: v.bg, color: v.color }}
    >
      <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-20 pt-20 sm:px-10 lg:px-20 lg:pb-[120px] lg:pt-[120px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <p
              className="font-sans text-[11.5px] font-semibold uppercase leading-none tracking-[0.24em]"
              style={{ color: v.eyebrow }}
            >
              <span
                className="mr-3 inline-block h-px w-8 align-middle"
                style={{ backgroundColor: v.rule }}
              />
              {group.number} &mdash; {group.category}
            </p>

            <h2
              className="mt-6 font-serifDisplay text-[40px] font-normal leading-[1.04] tracking-[-0.02em] lg:text-[60px]"
              id={`cat-${group.category.toLowerCase()}`}
              style={{ color: v.title, fontVariationSettings: subHeadlineAxes }}
            >
              {group.parent.name}
              <span aria-hidden="true" style={{ color: v.accent }}>.</span>
            </h2>

            <p
              className="mt-5 max-w-[440px] font-sans text-[15.5px] leading-[1.65]"
              style={{ color: v.body }}
            >
              {group.parent.subtitle}
            </p>

            <Link
              className="mt-7 inline-flex items-center font-sans text-[12px] font-semibold uppercase tracking-[0.24em] transition-colors"
              onMouseEnter={(e) => (e.currentTarget.style.color = v.linkHover)}
              onMouseLeave={(e) => (e.currentTarget.style.color = v.link)}
              style={{ color: v.link }}
              to={`/capabilities/${group.parent.slug}`}
            >
              Explore {group.parent.name.toLowerCase()}
              <span aria-hidden="true" className="ml-2">&rarr;</span>
            </Link>
          </div>

          <div>
            <p
              className="font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.24em]"
              style={{ color: v.eyebrow }}
            >
              Key Areas
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {group.children.map((child) => (
                <li key={child.slug}>
                  <Link
                    className="group relative flex h-full flex-col rounded-[16px] border p-5 transition-all duration-[200ms]"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = v.cardHoverBorder;
                      e.currentTarget.style.backgroundColor = v.cardHoverBg;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = v.cardBorder;
                      e.currentTarget.style.backgroundColor = v.cardBg;
                    }}
                    style={{ backgroundColor: v.cardBg, borderColor: v.cardBorder }}
                    to={`/capabilities/${child.slug}`}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-5 h-6 w-0 transition-[width] duration-200 group-hover:w-[3px]"
                      style={{ backgroundColor: v.accent }}
                    />
                    <div className="flex items-baseline justify-between gap-3">
                      <h3
                        className="font-serifDisplay text-[19px] font-normal leading-[1.2] tracking-[-0.01em]"
                        style={{ color: v.cardTitle, fontVariationSettings: subHeadlineAxes }}
                      >
                        {child.navLabel ?? child.name}
                      </h3>
                      <span
                        aria-hidden="true"
                        className="font-sans text-[15px] transition-colors"
                        style={{ color: v.cardArrow }}
                      >
                        &rarr;
                      </span>
                    </div>
                    <p
                      className="mt-2 font-sans text-[13px] leading-[1.55]"
                      style={{ color: v.cardBody }}
                    >
                      {child.subtitle}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalCta = (): JSX.Element => (
  <section
    aria-labelledby="caps-cta"
    className="relative w-full"
    style={{ backgroundColor: "#FFFFFF", color: "#0B1F3A" }}
  >
    <div className="relative mx-auto w-full max-w-[1180px] px-6 pb-28 pt-20 sm:px-10 lg:px-20 lg:pb-[160px] lg:pt-[120px]">
      <div
        className="grid grid-cols-1 items-center gap-10 rounded-[28px] border p-8 sm:p-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16 lg:p-16"
        style={{
          backgroundColor: "#FFFFFF",
          borderColor: "#FFFFFF",
          boxShadow: "0 18px 50px rgba(11,31,58,0.08)",
        }}
      >
        <div>
          <p
            className="font-sans text-[11.5px] font-semibold uppercase leading-none tracking-[0.28em]"
            style={{ color: "#B88A2D" }}
          >
            Need guidance on a matter
          </p>
          <h2
            className="mt-5 font-serifDisplay text-[30px] font-normal leading-[1.1] tracking-[-0.02em] text-[#0B1F3A] lg:text-[42px]"
            id="caps-cta"
            style={{ fontVariationSettings: subHeadlineAxes }}
          >
            Tell us what you&rsquo;re facing
            <span aria-hidden="true" style={{ color: GOLD }}>.</span>
          </h2>
          <p className="mt-5 max-w-[560px] font-sans text-[16px] leading-[1.65] text-[#3A4A63]">
            Initial consultations are confidential. We&rsquo;ll listen, give you a direct read on
            the next move, and tell you whether this is something we&rsquo;re the right firm for.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-end">
          <Link
            className="inline-flex h-[54px] items-center justify-center px-8 font-sans text-[12px] font-semibold uppercase tracking-[0.22em] transition-all hover:bg-[#0B1F3A]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88A2D]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            style={{ backgroundColor: "#0B1F3A", color: "#FFFFFF" }}
            to="/contact"
          >
            Start a Conversation
            <span aria-hidden="true" className="ml-2">&rarr;</span>
          </Link>
          <a
            className="inline-flex h-[54px] items-center justify-center border px-8 font-sans text-[12px] font-semibold uppercase tracking-[0.22em] transition-colors hover:bg-[#FFFFFF]"
            href="tel:+13134067606"
            style={{ borderColor: "rgba(11,31,58,0.2)", color: "#0B1F3A" }}
          >
            +1 (313) 406-7606
          </a>
        </div>
      </div>
    </div>
  </section>
);

export const CapabilitiesLandingPage = (): JSX.Element => {
  const groups = useCategoryGroups();

  useEffect(() => {
    document.title = "Capabilities — ATLAW Group";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Strategic legal counsel for individuals, families, founders, and organizations navigating complex moments.";
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Header />
      <main>
        <Hero />
        {groups.map((group, index) => (
          <CategoryBlock group={group} index={index} key={group.category} />
        ))}
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
};
