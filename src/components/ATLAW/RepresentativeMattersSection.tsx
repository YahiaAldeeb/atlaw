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

type Matter = {
  category: string;
  title: string;
  description: string;
  metadata: string;
  cta: string;
  href: string;
  external?: boolean;
};

const matters: Matter[] = [
  {
    category: "CROSS-BORDER ADVISORY",
    title: "International business expansion and market-entry counsel.",
    description:
      "Advisory support for clients moving between the United States, MENA, and international markets, including entity planning, commercial agreements, and jurisdiction-sensitive legal strategy.",
    metadata: "Advisory · Global Reach",
    cta: "Explore advisory",
    href: "/capabilities/advisory",
  },
  {
    category: "COMMERCIAL DISPUTES",
    title: "High-stakes commercial dispute strategy and defense.",
    description:
      "Counsel for businesses facing commercial disputes, contract conflicts, regulatory pressure, and litigation risk that requires coordinated legal strategy from intake through resolution.",
    metadata: "Litigation · Dispute Resolution",
    cta: "Explore litigation",
    href: "/capabilities/litigation",
  },
  {
    category: "TRANSACTIONS",
    title: "Capital, contracts, and business combinations.",
    description:
      "Transactional counsel for companies, founders, investors, and operators handling acquisitions, capital movement, commercial finance, governance, and long-form business agreements.",
    metadata: "Transactions · Corporate Counsel",
    cta: "Explore transactions",
    href: "/capabilities/transactions",
  },
  {
    category: "HEALTHCARE",
    title: "Healthcare operators, provider groups, and recovery-side matters.",
    description:
      "Legal support for healthcare businesses navigating acquisition, regulatory, compliance, payor, real estate, restructuring, and operational matters through ATLA Healthcare.",
    metadata: "Healthcare · ATLA Healthcare",
    cta: "Visit ATLA Healthcare",
    href: "https://www.atlahealthcare.com/",
    external: true,
  },
  {
    category: "GOVERNMENT & POLICY",
    title: "Policy-sensitive counsel for regulated business environments.",
    description:
      "Strategic legal support for clients operating in heavily regulated industries where business decisions require awareness of public policy, government relations, and commercial risk.",
    metadata: "Advisory · Government Relations",
    cta: "Explore capability",
    href: "/capabilities/government-relations-policy",
  },
  {
    category: "ESTATE & SUCCESSION",
    title: "Planning for families, founders, and business continuity.",
    description:
      "Counsel for estate planning, trusts, succession planning, asset protection, and long-term family or business continuity needs.",
    metadata: "Advisory · Private Client",
    cta: "Explore capability",
    href: "/capabilities/trusts-estate",
  },
];

export const RepresentativeMattersSection = (): JSX.Element => {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      aria-labelledby="representative-matters-heading"
      className="relative isolate w-full overflow-hidden bg-white text-ink scroll-mt-20"
      id="representative-matters"
    >
      <div
        ref={ref}
        className="relative mx-auto w-full max-w-[1440px] px-6 pb-[110px] pt-[100px] sm:px-8 md:pb-[130px] md:pt-[120px] lg:px-12 lg:pb-[150px] lg:pt-[140px]"
      >
        <h2 className="sr-only" id="representative-matters-heading">
          Representative Matters
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-8">
          {matters.map((matter, index) => {
            const cardClasses = [
              "group/card relative flex h-full min-h-[340px] flex-col rounded-[20px] border border-ink/[0.10] bg-white p-7 shadow-[0_1px_2px_rgba(20,35,59,0.04)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_50px_-20px_rgba(20,35,59,0.18)] focus-visible:-translate-y-1 focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 motion-reduce:transform-none motion-reduce:transition-none md:min-h-[360px] md:p-8 lg:min-h-[380px]",
              "transition-opacity duration-700 motion-reduce:transition-none",
              visible ? "opacity-100" : "opacity-0",
            ].join(" ");

            const inner = (
              <>
                <p className="font-sans text-[11px] font-bold uppercase leading-none tracking-[0.18em] text-accent md:text-[12px]">
                  {matter.category}
                </p>

                <h3 className="mt-6 font-serifDisplay text-[26px] font-normal leading-[1.18] tracking-[-0.015em] text-ink md:mt-7 md:text-[30px] lg:text-[31px]">
                  {matter.title}
                </h3>

                <p className="mt-5 font-sans text-[15px] leading-[1.66] text-ink/70 md:mt-6 md:text-[16px] md:leading-[1.68]">
                  {matter.description}
                </p>

                <div className="mt-auto pt-7">
                  <div className="h-px w-full bg-ink/10" />
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                    <p className="font-sans text-[13px] leading-[1.45] tracking-[0.02em] text-ink/55 md:text-[14px]">
                      {matter.metadata}
                    </p>
                    <span className="inline-flex items-center gap-1.5 font-sans text-[15px] font-semibold text-accent transition-colors duration-200 group-hover/card:text-[#1F4685] md:text-[16px]">
                      {matter.cta}
                      <ArrowRight className="group-hover/card:translate-x-1.5" />
                    </span>
                  </div>
                </div>
              </>
            );

            return matter.external ? (
              <a
                aria-label={`${matter.cta} (opens in a new tab)`}
                className={cardClasses}
                href={matter.href}
                key={matter.title}
                rel="noopener noreferrer"
                style={{
                  transitionDelay: visible ? `${120 + index * 70}ms` : "0ms",
                }}
                target="_blank"
              >
                {inner}
              </a>
            ) : (
              <Link
                className={cardClasses}
                key={matter.title}
                style={{
                  transitionDelay: visible ? `${120 + index * 70}ms` : "0ms",
                }}
                to={matter.href}
              >
                {inner}
              </Link>
            );
          })}
        </div>

        <div
          className={`mt-[60px] flex flex-col items-start gap-8 transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none md:mt-[68px] md:flex-row md:items-end md:justify-between md:gap-12 lg:mt-[72px] ${
            visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          style={{ transitionDelay: visible ? "640ms" : "0ms" }}
        >
          <Link
            className="group/more inline-flex items-center gap-2 font-sans text-[16px] font-semibold text-accent transition-colors duration-200 hover:text-[#1F4685] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white md:text-[17px] lg:text-[18px]"
            to="/news-insights"
          >
            <span className="border-b border-accent/40 pb-0.5 group-hover/more:border-accent">
              View more representative work
            </span>
            <ArrowRight className="group-hover/more:translate-x-1.5" />
          </Link>

          <p className="max-w-[620px] font-sans text-[12px] leading-[1.55] text-ink/55 md:text-[13px]">
            Representative matters are provided for informational purposes only.
            Past results do not guarantee future outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};
