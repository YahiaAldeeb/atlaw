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

const quoteParagraphs: string[] = [
  "I built ATLAW because the firm I wanted to practice at didn’t exist. A firm that worked across borders without losing continuity. A firm where the technology served the work instead of the other way around. A firm whose leadership reflected the clients we wanted to serve.",
  "Every part of how ATLAW operates today — the network, the bench, the stack, the people — was a deliberate answer to a question I kept asking as an attorney: why does it have to be this slow, this transactional, this distant?",
  "It doesn’t. And that’s what ATLAW is for.",
];

export const LeadershipStorySection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="leadership-story-heading"
      className="relative isolate w-full overflow-hidden bg-[#F4F1EA] text-ink scroll-mt-20"
      id="leadership"
    >
      {/* Decorative background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Oversized faint background typography — left */}
        <span className="absolute -left-[3vw] top-[42%] hidden -translate-y-1/2 whitespace-nowrap font-serifDisplay text-[18vw] font-normal uppercase leading-[0.88] tracking-[-0.04em] text-[#0B1A2D] opacity-[0.02] md:block">
          LEA
        </span>
        {/* Oversized faint background typography — right */}
        <span className="absolute -right-[2vw] top-[58%] hidden -translate-y-1/2 whitespace-nowrap font-serifDisplay text-[18vw] font-normal uppercase leading-[0.88] tracking-[-0.04em] text-[#0B1A2D] opacity-[0.02] md:block">
          RSHIP
        </span>

        {/* Thin curved editorial linework */}
        <svg
          className="absolute inset-0 h-full w-full"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1440 900"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="rgba(11,26,45,0.08)" strokeWidth="1">
            <path d="M-40 820 Q 360 700 760 780 T 1500 720" />
            <path d="M-40 870 Q 420 760 820 830 T 1500 770" />
          </g>
          <g stroke="rgba(11,26,45,0.06)" strokeWidth="1">
            <path d="M-40 60 Q 320 -20 720 60 T 1500 40" />
          </g>
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-24 pt-24 sm:px-8 md:pb-28 md:pt-28 lg:px-12 lg:pb-[130px] lg:pt-[120px]">
        <div className="grid grid-cols-1 items-start gap-12 md:gap-16 lg:grid-cols-[minmax(0,46%)_minmax(0,54%)] lg:gap-[90px]">
          {/* LEFT — Portrait */}
          <div className="order-2 lg:order-1">
            <figure className="mx-auto w-full max-w-[440px] sm:max-w-[480px] lg:mx-0 lg:max-w-[540px]">
              <div className="overflow-hidden rounded-[22px] border border-[rgba(11,26,45,0.10)] shadow-[0_24px_60px_rgba(7,27,51,0.12)] md:rounded-[26px]">
                <img
                  alt="Dewnya Bazzi, Chief Executive Officer and Founding Partner of ATLAW"
                  className="block h-auto w-full object-cover"
                  src="/assets/atlaw-portrait.png"
                  style={{ aspectRatio: "4 / 5", objectPosition: "center top" }}
                />
              </div>
              <figcaption className="mt-7 text-center md:mt-8">
                <p className="font-serifDisplay text-[26px] font-normal leading-tight tracking-[-0.01em] text-ink md:text-[30px]">
                  Dewnya Bazzi
                </p>
                <p className="mt-2 font-sans text-[11px] font-semibold uppercase tracking-[0.20em] text-[#6E7A8A] md:text-[12px]">
                  Chief Executive Officer &amp; Founding Partner
                </p>
              </figcaption>
            </figure>
          </div>

          {/* RIGHT — Story */}
          <div className="order-1 lg:order-2 lg:pt-2">
            {/* Eyebrow */}
            <p className="font-sans text-[12px] font-bold uppercase leading-none tracking-[0.22em] text-[#4F8EDB] md:text-[13px]">
              07 &mdash; LEADERSHIP
            </p>

            {/* Heading */}
            <h2
              className="mt-6 font-serifDisplay text-[40px] font-normal leading-[1.05] tracking-[-0.025em] text-ink sm:text-[48px] md:mt-7 md:text-[58px] lg:text-[68px] lg:leading-[1.04]"
              id="leadership-story-heading"
            >
              The firm, in her words.
            </h2>

            {/* Quote */}
            <div className="relative mt-9 max-w-[600px] md:mt-10">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-2 -top-10 select-none font-serifDisplay text-[130px] leading-none text-[rgba(11,26,45,0.045)] md:-left-4 md:-top-14 md:text-[150px]"
              >
                &ldquo;
              </span>
              <blockquote className="relative space-y-[26px] font-sans text-[17px] leading-[1.66] text-[rgba(7,27,51,0.84)] md:text-[19px] md:leading-[1.64]">
                {quoteParagraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </blockquote>
            </div>

            {/* Divider */}
            <div className="mt-[30px] h-px w-full max-w-[560px] bg-[rgba(11,26,45,0.16)]" />

            {/* Attribution + CTA */}
            <div className="mt-6 flex flex-col items-start justify-between gap-7 md:flex-row md:items-end md:gap-10">
              <cite className="not-italic">
                <p className="font-serifDisplay text-[26px] font-normal leading-tight tracking-[-0.01em] text-ink md:text-[28px]">
                  Dewnya Bazzi
                </p>
                <p className="mt-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.20em] text-[#6E7A8A] md:text-[12px]">
                  Chief Executive Officer &amp; Founding Partner
                </p>
              </cite>

              <Link
                className="group inline-flex items-center gap-2 border-b border-[#4F8EDB]/40 pb-1 font-sans text-[16px] font-semibold text-[#4F8EDB] transition-colors duration-200 hover:border-[#4F8EDB] hover:text-[#2E5FA7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F8EDB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F1EA] md:text-[17px]"
                to="/our-people"
              >
                Meet the leadership team
                <ArrowRight className="group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
