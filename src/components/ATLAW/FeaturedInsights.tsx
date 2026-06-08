import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

type Insight = {
  category: string;
  title: string;
  image: string;
  alt: string;
  href: string;
};

const insights: Insight[] = [
  {
    category: "ADVISORY",
    title: "Seeking New Frontiers: ATLAW Team Explores Investment Prospects in Kuwait",
    image: "/assets/insight-kuwait.avif",
    alt: "ATLAW team meeting around a conference table during the Kuwait investment exploration trip",
    href: "/news-insights/seeking-new-frontiers-kuwait",
  },
  {
    category: "BLOG",
    title: "Mohamed Ali Banoon Joins ATLAW's Estate Planning Team",
    image: "/assets/insight-mohamed.avif",
    alt: "Announcement graphic welcoming Mohamed Ali Banoon to ATLAW's Estate Planning team",
    href: "/news-insights/mohamed-ali-banoon-joins-atlaw",
  },
  {
    category: "BLOG",
    title: "Nadia Hamade Joins ATLAW's Corporate Team",
    image: "/assets/insight-nadia.avif",
    alt: "Announcement graphic welcoming Nadia Hamade to ATLAW's Corporate team",
    href: "/news-insights/nadia-hamade-joins-atlaw",
  },
];

const ArrowRight = ({ className = "" }: { className?: string }) => (
  <svg
    aria-hidden="true"
    className={`h-[1em] w-[1em] transition-transform duration-200 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M5 12h14M13 5l7 7-7 7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
    />
  </svg>
);

const useReveal = <T extends Element>() => {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof window === "undefined") return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
};

type InsightCardProps = {
  insight: Insight;
  index: number;
  visible: boolean;
};

const InsightCard = ({ insight, index, visible }: InsightCardProps): JSX.Element => (
  <Link
    aria-label={`${insight.title} — read more`}
    className={`group/card flex h-full flex-col rounded-[22px] border border-[#A0BEE6]/[0.28] bg-[linear-gradient(160deg,_rgba(12,35,63,0.78)_0%,_rgba(7,25,47,0.85)_100%)] p-[22px] shadow-[0_24px_60px_-30px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-[2px] transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:border-[#7FB2FF]/55 hover:shadow-[0_32px_72px_-28px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.06)] focus-visible:-translate-y-1 focus-visible:border-[#7FB2FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5FA8FF]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#061527] motion-reduce:transform-none motion-reduce:transition-none ${
      visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
    }`}
    style={{ transitionDelay: visible ? `${220 + index * 110}ms` : "0ms" }}
    to={insight.href}
  >
    <div className="overflow-hidden rounded-[16px]">
      <img
        alt={insight.alt}
        className="h-[210px] w-full object-cover object-center transition-transform duration-[450ms] ease-out group-hover/card:scale-[1.03] sm:h-[240px] md:h-[280px] lg:h-[315px]"
        loading="lazy"
        src={insight.image}
      />
    </div>

    <span className="mt-[22px] inline-flex w-fit items-center rounded-full border border-[#55A0FF]/[0.16] bg-[#347FD2]/[0.18] px-[15px] py-[7px] font-sans text-[13px] font-bold uppercase leading-none tracking-[0.10em] text-[#7FB6FF]">
      {insight.category}
    </span>

    <h3 className="mt-[22px] font-serifDisplay text-[clamp(24px,2.2vw,32px)] font-medium leading-[1.12] tracking-[-0.012em] text-[#F4E7D0]">
      {insight.title}
    </h3>

    <div className="mt-auto pt-7">
      <span className="group/link inline-flex items-center gap-2 font-sans text-[17px] font-semibold text-[#5FA8FF] transition-colors duration-200 group-hover/card:text-[#9CC6FF]">
        Read More
        <ArrowRight className="group-hover/card:translate-x-1.5" />
      </span>
    </div>
  </Link>
);

export const FeaturedInsights = (): JSX.Element => {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      aria-labelledby="featured-insights-heading"
      className="relative isolate w-full overflow-hidden bg-[#061527] text-[#F4E7D0] scroll-mt-20"
      id="featured-insights"
    >
      {/* Decorative background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 18% 12%, rgba(58, 118, 198, 0.20), transparent 70%), radial-gradient(ellipse 55% 55% at 78% 60%, rgba(70, 130, 210, 0.16), transparent 72%), radial-gradient(ellipse 90% 70% at 50% 110%, rgba(4, 12, 26, 0.85), transparent 65%), linear-gradient(180deg, #04101F 0%, #061527 45%, #050F1F 100%)",
          }}
        />

        {/* Huge faint background "INSIGHTS" wordmark */}
        <span
          className="pointer-events-none absolute left-1/2 top-[60px] hidden -translate-x-1/2 whitespace-nowrap font-serifDisplay font-normal uppercase leading-[0.9] tracking-[-0.045em] text-[#A8C8F0] opacity-[0.02] md:block"
          style={{ fontSize: "clamp(150px, 17vw, 260px)" }}
        >
          INSIGHTS
        </span>

        {/* Soft vignette edge */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 80% at 50% 50%, transparent 55%, rgba(2,8,18,0.55) 100%)",
          }}
        />
      </div>

      <div
        ref={ref}
        className="relative mx-auto w-full max-w-[1740px] px-6 pb-[110px] pt-[105px] sm:px-8 md:pb-[120px] md:pt-[110px] lg:px-[96px] xl:px-[150px]"
      >
        {/* Eyebrow */}
        <p
          className={`font-sans text-[14px] font-bold uppercase leading-none tracking-[0.14em] text-[#5FA8FF] transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none md:text-[16px] ${
            visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          05 &mdash; NEWS &amp; INSIGHTS
        </p>

        {/* Heading + top-right link */}
        <div
          className={`mt-6 flex flex-col gap-6 transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none md:mt-7 md:flex-row md:items-end md:justify-between md:gap-12 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: visible ? "80ms" : "0ms" }}
        >
          <h2
            className="font-serifDisplay font-normal leading-[1.0] tracking-[-0.022em] text-[#F4E7D0]"
            id="featured-insights-heading"
            style={{ fontSize: "clamp(44px, 6.4vw, 92px)" }}
          >
            Featured Insights
          </h2>

          <Link
            className="group/view inline-flex items-center gap-2 self-start font-sans text-[17px] font-bold tracking-[0.01em] text-[#5FA8FF] transition-colors duration-200 hover:text-[#9CC6FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5FA8FF]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#061527] md:self-auto md:pb-3 md:text-[18px] lg:text-[19px]"
            to="/news-insights"
          >
            View All Insights
            <ArrowRight className="group-hover/view:translate-x-1.5" />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="mt-[52px] grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-[60px] md:gap-7 lg:grid-cols-3 lg:gap-8">
          {insights.map((insight, index) => (
            <InsightCard
              index={index}
              insight={insight}
              key={insight.title}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
