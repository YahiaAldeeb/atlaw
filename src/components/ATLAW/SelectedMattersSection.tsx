import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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

const FEATURED_HREF =
  "/news/atlaw-represents-personic-healthcare-in-2m-acquisition-of-tennessee-based-american-wound-care-centers";

const FeaturedMatterVisual = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="absolute inset-0 h-full w-full"
    fill="none"
    preserveAspectRatio="xMidYMid slice"
    viewBox="0 0 800 520"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <radialGradient id="sm-feat-glow" cx="58%" cy="44%" r="62%">
        <stop offset="0%" stopColor="#3D7DCC" stopOpacity="0.32" />
        <stop offset="55%" stopColor="#1B3A66" stopOpacity="0.10" />
        <stop offset="100%" stopColor="#061323" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="sm-feat-base" x1="0%" x2="100%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#0B1E36" />
        <stop offset="100%" stopColor="#061323" />
      </linearGradient>
      <pattern height="22" id="sm-feat-grid" patternUnits="userSpaceOnUse" width="22">
        <path
          d="M22 0H0V22"
          fill="none"
          stroke="#F7F3EA"
          strokeOpacity="0.05"
          strokeWidth="0.6"
        />
      </pattern>
      <pattern height="8" id="sm-feat-dots" patternUnits="userSpaceOnUse" width="8">
        <circle cx="1" cy="1" fill="#F7F3EA" fillOpacity="0.32" r="0.7" />
      </pattern>
      <radialGradient id="sm-feat-mask" cx="48%" cy="48%" r="46%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </radialGradient>
      <mask id="sm-feat-mask-clip">
        <rect fill="url(#sm-feat-mask)" height="520" width="800" />
      </mask>
    </defs>

    <rect fill="url(#sm-feat-base)" height="520" width="800" />
    <rect fill="url(#sm-feat-glow)" height="520" width="800" />
    <rect fill="url(#sm-feat-grid)" height="520" width="800" opacity="0.85" />

    {/* Faint document sheets, stacked */}
    <g opacity="0.55">
      <rect
        fill="#0E2440"
        height="240"
        rx="6"
        stroke="#F7F3EA"
        strokeOpacity="0.08"
        strokeWidth="1"
        transform="rotate(-7 110 380)"
        width="180"
        x="60"
        y="290"
      />
      <rect
        fill="#0E2440"
        height="240"
        rx="6"
        stroke="#F7F3EA"
        strokeOpacity="0.12"
        strokeWidth="1"
        transform="rotate(-2 150 360)"
        width="180"
        x="90"
        y="270"
      />
      <rect
        fill="#10263F"
        height="240"
        rx="6"
        stroke="#F7F3EA"
        strokeOpacity="0.18"
        strokeWidth="1"
        width="190"
        x="120"
        y="250"
      />
      <g stroke="#F7F3EA" strokeOpacity="0.22" strokeWidth="1">
        <line x1="140" x2="290" y1="278" y2="278" />
        <line x1="140" x2="270" y1="298" y2="298" />
        <line x1="140" x2="290" y1="318" y2="318" />
        <line x1="140" x2="250" y1="338" y2="338" />
        <line x1="140" x2="285" y1="358" y2="358" />
        <line x1="140" x2="260" y1="378" y2="378" />
        <line x1="140" x2="280" y1="398" y2="398" />
        <line x1="140" x2="240" y1="418" y2="418" />
      </g>
      {/* Tiny seal/health mark */}
      <g transform="translate(255 442)">
        <circle cx="0" cy="0" fill="none" r="14" stroke="#6EA4E8" strokeOpacity="0.5" strokeWidth="1" />
        <path
          d="M-5 0h10M0 -5v10"
          stroke="#6EA4E8"
          strokeLinecap="round"
          strokeOpacity="0.75"
          strokeWidth="1.6"
        />
      </g>
    </g>

    {/* Tennessee outline + map context, masked by radial */}
    <g mask="url(#sm-feat-mask-clip)">
      <rect fill="url(#sm-feat-dots)" height="520" opacity="0.34" width="800" x="0" y="0" />

      {/* Stylized Tennessee outline */}
      <path
        d="M 420 230 L 470 222 L 540 218 L 600 216 L 660 220 L 700 224 L 712 248 L 692 274 L 640 282 L 580 282 L 520 280 L 460 274 L 420 268 Z"
        fill="#0E2440"
        fillOpacity="0.6"
        stroke="#6EA4E8"
        strokeOpacity="0.55"
        strokeWidth="1.2"
      />

      {/* Acquisition route arc */}
      <path
        d="M 250 380 C 360 250, 520 200, 680 240"
        fill="none"
        stroke="#6EA4E8"
        strokeDasharray="3 5"
        strokeOpacity="0.55"
        strokeWidth="1"
      />
      <path
        d="M 250 380 C 360 250, 520 200, 680 240"
        fill="none"
        stroke="#6EA4E8"
        strokeOpacity="0.18"
        strokeWidth="1"
      />

      {/* Origin node */}
      <circle cx="250" cy="380" fill="#F7F3EA" r="3.5" />
      <circle cx="250" cy="380" fill="none" r="8" stroke="#F7F3EA" strokeOpacity="0.35" strokeWidth="1" />
      {/* Mid waypoint */}
      <circle cx="460" cy="278" fill="#6EA4E8" r="2.5" />
      {/* Destination (Tennessee) */}
      <circle cx="600" cy="248" fill="#F7F3EA" r="4.5" />
      <circle cx="600" cy="248" fill="none" r="11" stroke="#F7F3EA" strokeOpacity="0.5" strokeWidth="1" />
      <circle cx="600" cy="248" fill="none" r="18" stroke="#6EA4E8" strokeOpacity="0.3" strokeWidth="1" />
    </g>

    {/* Top labels */}
    <g fill="#F7F3EA" fillOpacity="0.55" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="2.4">
      <text x="56" y="58">DEAL · 2023</text>
      <text textAnchor="end" x="744" y="58">
        TENNESSEE
      </text>
    </g>
    <g stroke="#F7F3EA" strokeOpacity="0.16" strokeWidth="0.8">
      <line x1="56" x2="180" y1="70" y2="70" />
      <line x1="630" x2="744" y1="70" y2="70" />
    </g>

    {/* Bottom corner tick marks */}
    <g stroke="#F7F3EA" strokeOpacity="0.22" strokeWidth="1">
      <path d="M40 460 H 76 M40 460 V 484" />
      <path d="M760 460 H 724 M760 460 V 484" />
    </g>
  </svg>
);

export const SelectedMattersSection = (): JSX.Element => {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      aria-labelledby="selected-matters-heading"
      className="relative isolate w-full overflow-hidden bg-[#071B33] text-[#F7F3EA] scroll-mt-20"
      id="selected-matters"
    >
      {/* Decorative background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none">
        {/* Layered gradient base */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 22% 18%, rgba(78, 142, 219, 0.18), transparent 70%), radial-gradient(ellipse 50% 50% at 80% 78%, rgba(58, 110, 188, 0.16), transparent 70%), linear-gradient(180deg, #061323 0%, #071B33 50%, #061323 100%)",
          }}
        />

        {/* Oversized faint background typography */}
        <span className="pointer-events-none absolute -left-[2vw] top-[8%] hidden whitespace-nowrap font-serifDisplay text-[16vw] font-normal uppercase leading-[0.86] tracking-[-0.04em] text-[#F7F3EA] opacity-[0.018] lg:block">
          SELECTED
        </span>
        <span className="pointer-events-none absolute -right-[2vw] bottom-[6%] hidden whitespace-nowrap font-serifDisplay text-[16vw] font-normal uppercase leading-[0.86] tracking-[-0.04em] text-[#F7F3EA] opacity-[0.015] lg:block">
          MATTERS
        </span>

        {/* Thin global route lines / arcs */}
        <svg
          className="absolute inset-0 h-full w-full"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1440 1400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#F7F3EA" strokeOpacity="0.05" strokeWidth="1">
            <path d="M0 240 Q 720 180 1440 240" />
            <path d="M0 520 Q 720 460 1440 520" />
            <path d="M0 880 Q 720 820 1440 880" />
            <path d="M0 1180 Q 720 1120 1440 1180" />
          </g>
          <g stroke="#6EA4E8" strokeOpacity="0.14" strokeWidth="1">
            <path d="M120 1240 C 360 980, 720 920, 1320 760" />
            <path d="M80 1100 C 320 880, 740 800, 1380 660" strokeOpacity="0.08" />
          </g>
          <g fill="#6EA4E8" fillOpacity="0.35">
            <circle cx="120" cy="1240" r="2" />
            <circle cx="720" cy="940" r="2" />
            <circle cx="1320" cy="760" r="2.5" />
          </g>
        </svg>
      </div>

      <div
        ref={ref}
        className="relative mx-auto w-full max-w-[1440px] px-6 pb-[110px] pt-[110px] sm:px-8 md:pb-[130px] md:pt-[130px] lg:px-12 lg:pb-[150px] lg:pt-[150px]"
      >
        {/* Intro */}
        <div
          className={`transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <p className="font-sans text-[12px] font-bold uppercase leading-none tracking-[0.24em] text-[#6EA4E8] md:text-[13px]">
            08 &mdash; SELECTED MATTERS
          </p>

          <h2
            className="mt-7 max-w-[980px] font-serifDisplay text-[40px] font-normal leading-[1.06] tracking-[-0.025em] text-[#F7F3EA] sm:text-[52px] md:text-[64px] lg:text-[74px] xl:text-[80px]"
            id="selected-matters-heading"
          >
            Proof in the work.
          </h2>

          <div className="mt-7 max-w-[840px] space-y-5 font-sans text-[16px] leading-[1.62] text-white/[0.74] md:mt-8 md:text-[18px] md:leading-[1.62] lg:text-[20px]">
            <p>
              ATLAW&rsquo;s work spans transactions, disputes, healthcare,
              cross-border business, and advisory matters for clients moving
              through complex commercial moments.
            </p>
            <p>
              These selected matters show how the firm&rsquo;s model works in
              practice &mdash; coordinated teams, senior legal judgment, and
              execution across jurisdictions, industries, and time zones.
            </p>
          </div>
        </div>

        {/* Featured Matter */}
        <article
          aria-labelledby="selected-matters-featured-title"
          className={`group/feat relative mt-[78px] overflow-hidden rounded-[24px] border border-white/[0.12] bg-[linear-gradient(135deg,_rgba(16,35,59,0.95)_0%,_rgba(7,27,51,0.92)_55%,_rgba(11,30,54,0.95)_100%)] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] backdrop-blur-[1px] transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none md:mt-[88px] md:rounded-[28px] lg:mt-[96px] ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: visible ? "160ms" : "0ms" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,52%)_minmax(0,48%)]">
            {/* Text side */}
            <div className="relative z-[1] flex flex-col p-8 sm:p-10 md:p-12 lg:p-[52px]">
              <p className="font-sans text-[11px] font-bold uppercase leading-none tracking-[0.26em] text-[#6EA4E8] md:text-[12px]">
                FEATURED REPRESENTATION
              </p>

              <h3
                className="mt-6 max-w-[640px] font-serifDisplay text-[28px] font-normal leading-[1.16] tracking-[-0.018em] text-[#F7F3EA] md:mt-7 md:text-[36px] md:leading-[1.14] lg:text-[42px] lg:leading-[1.12]"
                id="selected-matters-featured-title"
              >
                ATLAW represented Personic Healthcare in the $2M acquisition
                of Tennessee-based American Wound Care Centers.
              </h3>

              <p className="mt-5 font-sans text-[13px] uppercase leading-[1.4] tracking-[0.14em] text-white/[0.58] md:mt-6 md:text-[14px]">
                Healthcare M&amp;A &middot; Transactional Counsel &middot; 2023
              </p>

              <p className="mt-6 max-w-[560px] font-sans text-[15px] leading-[1.62] text-white/[0.76] md:mt-7 md:text-[16px] md:leading-[1.65] lg:text-[17px]">
                A healthcare transaction involving acquisition strategy, deal
                documentation, diligence coordination, and legal support for a
                healthcare operator expanding its footprint.
              </p>

              <div className="mt-auto pt-8 md:pt-10">
                <Link
                  className="group/link inline-flex items-center gap-2 font-sans text-[16px] font-semibold text-[#6EA4E8] transition-colors duration-200 hover:text-[#A6C8F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6EA4E8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071B33] md:text-[17px]"
                  to={FEATURED_HREF}
                >
                  <span className="border-b border-[#6EA4E8]/40 pb-0.5 group-hover/link:border-[#6EA4E8]">
                    Read the matter
                  </span>
                  <ArrowRight className="group-hover/link:translate-x-1.5" />
                </Link>
                <p className="mt-3 truncate font-sans text-[11px] leading-[1.4] tracking-[0.04em] text-white/[0.42] md:text-[12px]">
                  {FEATURED_HREF}
                </p>
              </div>
            </div>

            {/* Visual side */}
            <div className="relative min-h-[280px] overflow-hidden border-t border-white/[0.08] sm:min-h-[320px] lg:min-h-[480px] lg:border-l lg:border-t-0">
              <FeaturedMatterVisual />
              {/* Inner edge fade so visual blends with card */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(7,27,51,0.55) 0%, rgba(7,27,51,0) 22%, rgba(7,27,51,0) 78%, rgba(7,27,51,0.5) 100%)",
                }}
              />
            </div>
          </div>
        </article>

      </div>
    </section>
  );
};
