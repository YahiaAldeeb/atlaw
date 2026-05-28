import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

type Pillar = {
  title: string;
  body: string;
};

const brandPillars: Pillar[] = [
  {
    title: "Limitless.",
    body: "We do not start a client engagement with a list of jurisdictions where we don't practice or matters we don't take. The default answer is “yes, let's figure it out” — and the network, the bench, and the stack are what makes “yes” a defensible answer.",
  },
  {
    title: "Persistent.",
    body: "The work we do is rarely the work that closes in two meetings. Cross-border deals stall. Trials extend. Regulatory matters take years. We are built to stay with a matter through the long middle — the part of the engagement where most firms quietly disengage.",
  },
  {
    title: "Inspiring.",
    body: "We are an unusual firm. Founded by an attorney who shouldn't statistically exist in this market. Built around a network that runs counter to how US firms have traditionally scaled. Staffed by attorneys whose backgrounds are part of why the work moves. We want the firm to inspire the kind of practice we want to be a part of.",
  },
];

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

export const BrandPillarsSection = (): JSX.Element => {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      aria-labelledby="brand-pillars-heading"
      className="relative isolate w-full overflow-hidden bg-ivory text-ink scroll-mt-20"
      id="brand-pillars"
    >
      {/* Decorative background layers */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none">
        {/* Soft cream / paper wash */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 18% 22%, rgba(46, 95, 167, 0.06), transparent 70%), radial-gradient(ellipse 60% 60% at 82% 70%, rgba(20, 35, 59, 0.05), transparent 72%), linear-gradient(180deg, #F5F3ED 0%, #F3F1EB 45%, #EFEDE6 100%)",
          }}
        />

        {/* Huge ghosted serif "AT" letterform — anchored bottom-right */}
        <span
          className="pointer-events-none absolute -bottom-[6vw] -right-[2vw] hidden whitespace-nowrap font-serifDisplay font-normal uppercase leading-[0.78] tracking-[-0.06em] text-ink opacity-[0.028] md:block"
          style={{ fontSize: "clamp(360px, 46vw, 760px)" }}
        >
          AT
        </span>

        {/* Faint oversized background words (editorial wash) */}
        <span
          className="pointer-events-none absolute right-[4vw] top-[6%] hidden whitespace-nowrap font-serifDisplay font-normal uppercase leading-[0.88] tracking-[-0.04em] text-ink opacity-[0.022] lg:block"
          style={{ fontSize: "clamp(110px, 13vw, 200px)" }}
        >
          LIMITLESS
        </span>
        <span
          className="pointer-events-none absolute -left-[3vw] top-[44%] hidden whitespace-nowrap font-serifDisplay font-normal uppercase leading-[0.88] tracking-[-0.04em] text-ink opacity-[0.018] lg:block"
          style={{ fontSize: "clamp(120px, 14vw, 220px)" }}
        >
          PERSISTENT
        </span>

        {/* Vertical rhythm lines */}
        <div className="absolute inset-y-0 left-[18%] hidden w-px bg-ink/[0.05] md:block" />
        <div className="absolute inset-y-0 left-[42%] hidden w-px bg-ink/[0.04] md:block" />
        <div className="absolute inset-y-0 left-[66%] hidden w-px bg-ink/[0.05] md:block" />
        <div className="absolute inset-y-0 left-[88%] hidden w-px bg-ink/[0.04] md:block" />

        {/* Subtle globe / route arcs on the right */}
        <svg
          className="absolute right-0 top-1/2 hidden h-[640px] w-[640px] -translate-y-1/2 translate-x-[18%] opacity-[0.08] lg:block"
          fill="none"
          viewBox="0 0 640 640"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="320" cy="320" r="300" stroke="#14233B" strokeWidth="1" />
          <circle cx="320" cy="320" r="240" stroke="#14233B" strokeWidth="1" />
          <ellipse cx="320" cy="320" rx="300" ry="120" stroke="#14233B" strokeWidth="1" />
          <ellipse cx="320" cy="320" rx="300" ry="200" stroke="#14233B" strokeWidth="1" />
          <ellipse cx="320" cy="320" rx="180" ry="300" stroke="#14233B" strokeWidth="1" />
          <ellipse cx="320" cy="320" rx="80" ry="300" stroke="#14233B" strokeWidth="1" />
          <path
            d="M 80 380 C 240 220, 440 200, 580 300"
            stroke="#2E5FA7"
            strokeDasharray="2 6"
            strokeWidth="1"
          />
          <g fill="#2E5FA7">
            <circle cx="80" cy="380" r="2.4" />
            <circle cx="580" cy="300" r="2.4" />
            <circle cx="320" cy="240" r="2" />
          </g>
        </svg>

        {/* Soft vignette edges to keep focus on content */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 80% at 50% 50%, transparent 60%, rgba(20,35,59,0.05) 100%)",
          }}
        />
      </div>

      <div
        ref={ref}
        className="relative mx-auto w-full max-w-[1440px] px-6 pb-[80px] pt-[110px] sm:px-8 md:pb-[90px] md:pt-[130px] lg:px-12 lg:pb-[90px] lg:pt-[140px]"
      >
        {/* Eyebrow */}
        <p
          className={`font-sans text-[12px] font-bold uppercase leading-none tracking-[0.24em] text-accent transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none md:text-[13px] ${
            visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          10 &mdash; THE FIRM&rsquo;S CHARACTER
        </p>

        {/* Main headline — three words stacked */}
        <h2
          className="mt-7 font-serifDisplay font-normal text-ink"
          id="brand-pillars-heading"
          style={{
            fontSize: "clamp(52px, 9.4vw, 135px)",
            lineHeight: "0.94",
            letterSpacing: "-0.035em",
          }}
        >
          {["Limitless.", "Persistent.", "Inspiring."].map((word, index) => (
            <span
              className={`block transition-all duration-[700ms] ease-out motion-reduce:transform-none motion-reduce:transition-none ${
                visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              key={word}
              style={{ transitionDelay: visible ? `${120 + index * 110}ms` : "0ms" }}
            >
              {word}
            </span>
          ))}
        </h2>

        {/* Pillar grid */}
        <div className="mt-[64px] grid grid-cols-1 gap-y-12 md:mt-[88px] md:grid-cols-3 md:gap-x-[48px] md:gap-y-0 lg:mt-[108px] lg:gap-x-[72px]">
          {brandPillars.map((pillar, index) => (
            <article
              className={[
                "relative flex flex-col",
                // Vertical divider on md+ for columns after the first
                index > 0 ? "md:border-l md:border-ink/[0.22] md:pl-[40px] lg:pl-[56px]" : "",
                // Mobile horizontal divider between stacked pillars
                index > 0 ? "border-t border-ink/[0.12] pt-12 md:border-t-0 md:pt-0" : "",
                "transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none",
                visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
              ].join(" ")}
              key={pillar.title}
              style={{ transitionDelay: visible ? `${460 + index * 130}ms` : "0ms" }}
            >
              <h3 className="font-serifDisplay text-[28px] font-normal leading-[1.1] tracking-[-0.012em] text-ink md:text-[34px] lg:text-[40px]">
                {pillar.title}
              </h3>

              <p className="mt-6 max-w-[360px] font-sans text-[15px] leading-[1.7] text-ink/[0.78] md:mt-7 md:text-[16px] md:leading-[1.72] lg:text-[17px]">
                {pillar.body}
              </p>
            </article>
          ))}
        </div>

        {/* Bottom thin horizontal divider */}
        <div
          aria-hidden="true"
          className={`mt-[48px] h-px w-full bg-ink/[0.2] transition-all duration-700 ease-out motion-reduce:transition-none md:mt-[60px] ${
            visible ? "scale-x-100 opacity-100" : "scale-x-50 opacity-0"
          }`}
          style={{ transformOrigin: "center", transitionDelay: visible ? "880ms" : "0ms" }}
        />

        {/* Closing transition line */}
        <p
          className={`mt-[28px] text-center font-sans text-[11px] font-bold uppercase leading-[1.5] text-accent transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none md:mt-[32px] md:text-[13px] ${
            visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          style={{
            letterSpacing: "0.26em",
            transitionDelay: visible ? "960ms" : "0ms",
          }}
        >
          Three Words. One Firm. Sixteen Cities And Counting.
        </p>

        {/* CTA — invitation to begin a conversation */}
        <div
          className={`relative mt-[72px] overflow-hidden rounded-[28px] border border-ink/[0.08] bg-white/55 px-7 py-12 shadow-[0_24px_60px_rgba(20,35,59,0.08)] backdrop-blur-sm transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none md:mt-[96px] md:px-14 md:py-14 lg:px-20 lg:py-16 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: visible ? "1080ms" : "0ms" }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 0% 50%, rgba(46,95,167,0.07), transparent 70%), radial-gradient(ellipse 60% 80% at 100% 50%, rgba(20,35,59,0.06), transparent 70%)",
            }}
          />

          <div className="relative grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-14">
            <div>
              <p className="font-sans text-[12px] font-bold uppercase tracking-[0.28em] text-accent md:text-[13px]">
                11 &mdash; START THE CONVERSATION
              </p>
              <h3
                className="mt-5 font-serifDisplay font-normal text-ink"
                style={{
                  fontSize: "clamp(34px, 4.8vw, 60px)",
                  lineHeight: "1.02",
                  letterSpacing: "-0.02em",
                }}
              >
                Let&rsquo;s talk about
                <br className="hidden sm:inline" /> what&rsquo;s next.
              </h3>
              <p className="mt-5 max-w-[520px] font-sans text-[15px] leading-[1.6] text-ink/70 md:text-[16px]">
                Tell us about your goals and challenges. ATLAW is here to help
                you find the right legal guidance and solutions — across
                jurisdictions, industries, and time horizons.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 md:items-end">
              <Link
                to="/contact"
                className="group inline-flex h-[54px] items-center justify-center rounded-full bg-ink px-8 text-[15px] font-medium text-ivory transition duration-200 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Contact ATLAW
                <span className="ml-2 transition duration-200 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center text-[12px] font-bold uppercase tracking-[0.24em] text-ink/70 transition hover:text-ink"
              >
                Or send us a message
                <span className="ml-2 transition duration-200 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
