import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

type Pillar = {
  number: string;
  title: string;
  body: string;
  proof: string;
};

const pillars: Pillar[] = [
  {
    number: "01.",
    title: "The network.",
    body:
      "Global affiliations and operating offices that let us hand a Riyadh matter to a Detroit attorney without losing forty-eight hours to coordination. Conflicts checks, engagement letters, and matter intake run on the same infrastructure across the network.",
    proof:
      "the firm has cleared cross-jurisdictional matters from the US to MENA, Asia, and the UK without changing client-facing teams mid-deal.",
  },
  {
    number: "02.",
    title: "The bench.",
    body:
      "A specialized resources network — attorneys and counsel whose practices map to specific industry verticals, transaction types, and regulatory regimes. Matters are matched to the bench, not assigned by partner availability.",
    proof:
      "a healthcare M&A matter routes to attorneys who have closed healthcare M&A, not to whoever is between deals that week.",
  },
  {
    number: "03.",
    title: "The stack.",
    body:
      "Document automation, encrypted client portals, matter management, and conflict-checking systems that compress the back-office work that defines the traditional firm experience. Faster intake, shorter response cycles, and integrated cross-office workflow.",
    proof:
      "clients receive engagement letters within hours of an intake conversation, not days.",
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
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
};

export const HowWeWorkSection = (): JSX.Element => {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      aria-labelledby="how-we-work-heading"
      className="relative isolate w-full overflow-hidden bg-[#061323] text-[#FFFFFF] scroll-mt-20"
      id="how-we-work"
    >
      {/* Decorative background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none">
        {/* Base gradient + soft radial wash */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 78% 32%, rgba(58, 110, 188, 0.22), transparent 70%), linear-gradient(180deg, #061323 0%, #071B33 50%, #061323 100%)",
          }}
        />

        {/* Faint global linework + dotted map texture (right side) */}
        <svg
          className="absolute inset-0 h-full w-full"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1440 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              height="9"
              id="hww-dots"
              patternUnits="userSpaceOnUse"
              width="9"
            >
              <circle cx="1" cy="1" fill="#FFFFFF" fillOpacity="0.35" r="0.75" />
            </pattern>
            <radialGradient cx="80%" cy="22%" id="hww-map-mask" r="38%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
            <mask id="hww-mask">
              <rect fill="url(#hww-map-mask)" height="1000" width="1440" />
            </mask>
          </defs>

          {/* Subtle grid lines */}
          <g stroke="#FFFFFF" strokeOpacity="0.045" strokeWidth="1">
            <path d="M0 200 Q 720 150 1440 200" />
            <path d="M0 380 Q 720 330 1440 380" />
            <path d="M0 560 Q 720 510 1440 560" />
            <path d="M0 740 Q 720 690 1440 740" />
            <path d="M260 0 Q 290 500 260 1000" />
            <path d="M540 0 Q 570 500 540 1000" />
            <path d="M820 0 Q 850 500 820 1000" />
            <path d="M1100 0 Q 1130 500 1100 1000" />
          </g>

          {/* Dotted map cluster, upper right */}
          <g mask="url(#hww-mask)" opacity="0.32">
            {/* Eurasia / Asia silhouette */}
            <path
              d="M 900 180 Q 1010 168 1110 178 Q 1200 192 1248 220 Q 1280 248 1268 282 Q 1232 312 1170 320 Q 1100 326 1030 320 Q 970 312 932 296 Q 902 278 898 248 Q 894 212 900 180 Z"
              fill="url(#hww-dots)"
            />
            {/* Middle East peninsula */}
            <path
              d="M 902 270 Q 942 274 970 292 Q 990 316 976 342 Q 956 356 928 352 Q 902 344 894 320 Q 894 290 902 270 Z"
              fill="url(#hww-dots)"
            />
            {/* Australia */}
            <path
              d="M 1140 380 Q 1190 376 1232 388 Q 1252 406 1238 428 Q 1206 442 1170 438 Q 1138 430 1140 408 Q 1140 388 1140 380 Z"
              fill="url(#hww-dots)"
            />
          </g>

          {/* Faint curved route lines */}
          <g fill="none" stroke="#6EA4E8" strokeOpacity="0.18" strokeWidth="1">
            <path d="M 720 460 C 900 320, 1080 280, 1280 240" />
            <path d="M 760 540 C 940 440, 1120 420, 1320 380" />
            <path d="M 820 620 C 980 540, 1160 500, 1340 480" strokeOpacity="0.12" />
          </g>
        </svg>

        {/* Oversized OPERATING MODEL ghost text on the left */}
        <span
          className="pointer-events-none absolute -left-[2vw] top-1/2 hidden -translate-y-1/2 whitespace-nowrap font-serifDisplay text-[14vw] font-normal uppercase leading-[0.86] tracking-[-0.04em] text-[#FFFFFF] opacity-[0.018] md:block"
          style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
        >
          OPERATING&nbsp;MODEL
        </span>
      </div>

      <div
        ref={ref}
        className="relative mx-auto w-full max-w-[1440px] px-6 pb-[120px] pt-[120px] sm:px-8 md:pb-[130px] md:pt-[130px] lg:px-12 lg:pb-[140px] lg:pt-[140px]"
      >
        {/* Header block */}
        <div
          className={`transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <p className="font-sans text-[12px] font-bold uppercase leading-none tracking-[0.24em] text-[#6EA4E8] md:text-[13px]">
            06 &mdash; HOW WE WORK
          </p>

          <h2
            className="mt-7 max-w-[1040px] font-serifDisplay text-[40px] font-normal leading-[1.06] tracking-[-0.025em] text-[#FFFFFF] sm:text-[52px] md:text-[62px] lg:text-[72px] xl:text-[78px]"
            id="how-we-work-heading"
          >
            The firm runs on three things.
          </h2>

          <p className="mt-8 max-w-[820px] font-sans text-[16px] leading-[1.6] text-white/[0.76] md:text-[18px] md:leading-[1.62] lg:text-[20px]">
            Legal work at ATLAW moves through a structured operating model:
            a connected network, a specialized bench, and a technology stack
            built to reduce delay without reducing judgment.
          </p>
        </div>

        {/* Three column grid */}
        <div className="mt-[72px] grid grid-cols-1 gap-y-12 md:mt-[84px] md:grid-cols-2 md:gap-x-12 md:gap-y-14 lg:mt-[90px] lg:grid-cols-3 lg:gap-x-[56px] xl:gap-x-[72px]">
          {pillars.map((pillar, index) => (
            <article
              className={[
                "relative flex flex-col",
                index > 0 ? "lg:border-l lg:border-white/[0.14] lg:pl-[40px] xl:pl-[56px]" : "",
                index > 0
                  ? "border-t border-white/[0.10] pt-12 md:border-t-0 md:pt-0"
                  : "",
                index === 1 ? "md:border-l md:border-white/[0.14] md:pl-12" : "",
                "transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none",
                visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
              ].join(" ")}
              key={pillar.title}
              style={{
                transitionDelay: visible ? `${180 + index * 120}ms` : "0ms",
              }}
            >
              <p className="font-sans text-[28px] font-medium leading-none tracking-[-0.01em] text-[#6EA4E8] md:text-[34px] lg:text-[36px]">
                {pillar.number}
              </p>

              <h3 className="mt-6 font-serifDisplay text-[28px] font-normal leading-[1.14] tracking-[-0.015em] text-[#FFFFFF] md:mt-7 md:text-[32px] lg:text-[34px]">
                {pillar.title}
              </h3>

              <p className="mt-6 font-sans text-[15px] leading-[1.68] text-white/[0.76] md:text-[16px] md:leading-[1.7]">
                {pillar.body}
              </p>

              <div className="mt-8 h-px w-full bg-white/[0.14]" />

              <p className="mt-5 font-sans text-[14px] leading-[1.6] text-[#FFFFFF]/[0.74] md:text-[15px] md:leading-[1.62]">
                <span className="font-semibold text-[#6EA4E8]">Proof:</span>{" "}
                {pillar.proof}
              </p>
            </article>
          ))}
        </div>

        {/* Secondary CTA */}
        <div
          className={`mt-[60px] transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none md:mt-[68px] lg:mt-[72px] ${
            visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          style={{ transitionDelay: visible ? "560ms" : "0ms" }}
        >
          <Link
            className="group inline-flex items-center gap-2 font-sans text-[16px] font-semibold text-[#6EA4E8] transition-colors duration-200 hover:text-[#A6C8F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6EA4E8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#061323] md:text-[17px]"
            to="/about#how-we-work"
          >
            <span className="border-b border-transparent group-hover:border-current">
              Read about the firm&rsquo;s operating model
            </span>
            <ArrowRight className="group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>

    </section>
  );
};
