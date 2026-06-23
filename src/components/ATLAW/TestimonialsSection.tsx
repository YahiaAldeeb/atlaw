import { useState } from "react";
import { RevealText, RevealBlock, RevealStagger } from "../../motion/primitives";
import { STAGGER } from "../../motion/config";

const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

interface Testimonial {
  quote: string;
  name: string;
  initials: string;
  caseType: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "[CONFIRM] After my car accident, I didn't know where to turn. ATLAW took my case and fought hard against the insurance company. They kept me informed every step of the way and got me a settlement I never expected. I can't thank Dewnya and her team enough.",
    name: "Sarah M.",
    initials: "SM",
    caseType: "Auto Accident",
  },
  {
    quote:
      "[CONFIRM] The team at ATLAW treated me like family from day one. They handled everything with the insurance company so I could focus on recovering from my injuries. Professional, compassionate, and they delivered results.",
    name: "Ahmad B.",
    initials: "AB",
    caseType: "Personal Injury",
  },
  {
    quote:
      "[CONFIRM] I was hesitant to hire a lawyer, but ATLAW made the process easy. No upfront costs, constant communication, and they fought for every dollar I deserved. Highly recommend to anyone dealing with an injury case.",
    name: "Jennifer K.",
    initials: "JK",
    caseType: "Slip & Fall",
  },
  {
    quote:
      "[CONFIRM] Dewnya personally handled my case and I could tell she genuinely cared about my well-being, not just the settlement. That kind of dedication is rare. Five stars isn't enough.",
    name: "Michael R.",
    initials: "MR",
    caseType: "Workers' Comp",
  },
  {
    quote:
      "[CONFIRM] From the free consultation to the final settlement, ATLAW exceeded my expectations. They were responsive, thorough, and got me significantly more than the insurance company's initial offer.",
    name: "Lisa T.",
    initials: "LT",
    caseType: "Medical Malpractice",
  },
  {
    quote:
      "[CONFIRM] I lost a family member due to negligence and ATLAW guided us through the most difficult time with compassion and strength. They fought for justice and delivered.",
    name: "David P.",
    initials: "DP",
    caseType: "Wrongful Death",
  },
];

const StarIcon = ({ size = 18 }: { size?: number }): JSX.Element => (
  <svg
    aria-hidden="true"
    className={`h-[${size}px] w-[${size}px]`}
    fill="#C6A04A"
    style={{ height: size, width: size }}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ChevronLeft = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M15 19l-7-7 7-7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

const ChevronRight = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M9 5l7 7-7 7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

const TestimonialCard = ({ item }: { item: Testimonial }): JSX.Element => (
  <div className="flex flex-col items-center">
    <article className="relative flex w-full flex-1 flex-col rounded-[16px] bg-white px-7 pb-8 pt-7 shadow-[0_4px_24px_rgba(11,31,58,0.08)] transition-all duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] hover:shadow-[0_12px_36px_rgba(11,31,58,0.14)] lg:px-8">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} size={16} />
        ))}
      </div>

      <blockquote className="mt-4 flex-1">
        <span
          aria-hidden="true"
          className="block font-serifDisplay text-[40px] leading-[0.6] text-[#C6A04A]"
        >
          &ldquo;
        </span>
        <p className="mt-3 font-serifDisplay text-[15px] italic leading-[1.75] tracking-[-0.005em] text-[#3A4A63] lg:text-[16px]">
          {item.quote}
        </p>
      </blockquote>

      <div
        aria-hidden="true"
        className="absolute -bottom-[10px] left-1/2 h-5 w-5 -translate-x-1/2 rotate-45 bg-white shadow-[4px_4px_8px_rgba(11,31,58,0.04)]"
      />
    </article>

    <div className="mt-5 flex flex-col items-center">
      <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#C6A04A] shadow-[0_2px_8px_rgba(198,160,74,0.35)]">
        <span className="font-sans text-[16px] font-bold tracking-[0.02em] text-white">
          {item.initials}
        </span>
      </div>
      <p className="mt-2.5 font-sans text-[14px] font-semibold text-[#0B1F3A]">
        {item.name}
      </p>
      <p className="mt-0.5 font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-[#B88A2D]">
        {item.caseType}
      </p>
    </div>
  </div>
);

export const TestimonialsSection = (): JSX.Element => {
  const cardsPerPage = 3;
  const maxPage = Math.ceil(testimonials.length / cardsPerPage) - 1;
  const [page, setPage] = useState(0);

  const visible = testimonials.slice(
    page * cardsPerPage,
    page * cardsPerPage + cardsPerPage
  );

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative isolate w-full overflow-hidden bg-[#FFFFFF] text-[#0B1F3A]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-multiply"
        style={{ backgroundImage: grain }}
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-20 pt-20 sm:px-10 md:pb-24 md:pt-28 lg:px-20 lg:pb-[120px] lg:pt-[140px]">
        <header className="mx-auto flex flex-col items-center text-center">
          <RevealBlock className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} size={22} />
            ))}
          </RevealBlock>

          <RevealText
            as="h2"
            className="mt-5 font-serifDisplay font-normal leading-[1.04] tracking-[-0.02em] text-[#0B1F3A] text-[clamp(36px,5.5vw,72px)]"
            id="testimonials-heading"
          >
            Backed by <span className="text-[#C6A04A]">Five-Star</span> Reviews<span className="text-[#B88A2D]">.</span>
          </RevealText>

          <RevealBlock
            as="p"
            className="mt-6 max-w-[680px] font-sans text-[18px] leading-[1.6] text-[#3A4A63] lg:text-[19px]"
          >
            Real stories from real clients. Every testimonial represents a life
            changed and a fight won.
          </RevealBlock>
        </header>

        <div className="relative mt-14 lg:mt-[64px]">
          {maxPage > 0 && (
            <>
              <button
                aria-label="Previous testimonials"
                className="absolute -left-2 top-[40%] z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(11,31,58,0.2)] bg-white text-[#0B1F3A] shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all duration-200 hover:border-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-[rgba(11,31,58,0.2)] disabled:hover:bg-white disabled:hover:text-[#0B1F3A] lg:-left-5 lg:flex"
                disabled={page === 0}
                onClick={() => setPage((p) => p - 1)}
                type="button"
              >
                <ChevronLeft />
              </button>

              <button
                aria-label="Next testimonials"
                className="absolute -right-2 top-[40%] z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(11,31,58,0.2)] bg-white text-[#0B1F3A] shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all duration-200 hover:border-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-[rgba(11,31,58,0.2)] disabled:hover:bg-white disabled:hover:text-[#0B1F3A] lg:-right-5 lg:flex"
                disabled={page === maxPage}
                onClick={() => setPage((p) => p + 1)}
                type="button"
              >
                <ChevronRight />
              </button>
            </>
          )}

          <RevealStagger
            amount={STAGGER.grid}
            className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-7"
          >
            {visible.map((item) => (
              <TestimonialCard item={item} key={item.name} />
            ))}
          </RevealStagger>
        </div>

        {maxPage > 0 && (
          <div className="mt-10 flex items-center justify-center gap-4 lg:hidden">
            <button
              aria-label="Previous testimonials"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(11,31,58,0.2)] text-[#0B1F3A] transition-all duration-200 hover:border-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
              disabled={page === 0}
              onClick={() => setPage((p) => p - 1)}
              type="button"
            >
              <ChevronLeft />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: maxPage + 1 }).map((_, i) => (
                <button
                  aria-label={`Page ${i + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition-colors duration-200 ${
                    i === page ? "bg-[#C6A04A]" : "bg-[rgba(11,31,58,0.15)]"
                  }`}
                  key={i}
                  onClick={() => setPage(i)}
                  type="button"
                />
              ))}
            </div>

            <button
              aria-label="Next testimonials"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(11,31,58,0.2)] text-[#0B1F3A] transition-all duration-200 hover:border-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
              disabled={page === maxPage}
              onClick={() => setPage((p) => p + 1)}
              type="button"
            >
              <ChevronRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
