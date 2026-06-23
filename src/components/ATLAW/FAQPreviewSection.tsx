import { useState } from "react";
import { Link } from "react-router-dom";
import { RevealText, RevealBlock, RevealStagger } from "../../motion/primitives";
import { STAGGER } from "../../motion/config";

const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const headlineAxes = "'opsz' 144, 'wght' 380, 'SOFT' 0, 'WONK' 0";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "How much is my case worth?",
    answer:
      "Every case is different. The value depends on the severity of your injuries, medical expenses, lost wages, and the impact on your daily life. We evaluate all of these factors during your free consultation and give you an honest assessment.",
  },
  {
    question: "Do I need a lawyer after a car accident?",
    answer:
      "If you were injured or the accident involved significant property damage, having an attorney protects your rights and ensures you receive fair compensation. Insurance companies often try to settle quickly for less than your claim is worth.",
  },
  {
    question: "How long do I have to file a claim in Michigan?",
    answer:
      "Michigan's statute of limitations for most personal injury claims is three years from the date of the injury. However, certain cases have shorter deadlines, so it is important to speak with an attorney as soon as possible to preserve your rights.",
  },
  {
    question: "What if I can't afford a lawyer?",
    answer:
      "We work on a contingency fee basis, which means you pay nothing upfront and no fees unless we win your case. Our payment comes as a percentage of your recovery, so there is no financial risk to you.",
  },
  {
    question: "How long does a personal injury case take?",
    answer:
      "Timelines vary depending on the complexity of your case, the severity of injuries, and whether a settlement can be reached or litigation is necessary. Some cases resolve in a few months, while others may take a year or more. We keep you informed at every step.",
  },
];

const Chevron = ({ open }: { open: boolean }): JSX.Element => (
  <svg
    aria-hidden="true"
    className={`h-5 w-5 shrink-0 text-[#B88A2D] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M6 9l6 6 6-6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

const AccordionItem = ({ item }: { item: FAQItem }): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#0B1F3A]/10">
      <button
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors duration-150 hover:text-[#0B1F3A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88A2D]/60 focus-visible:ring-offset-2"
        onClick={() => setOpen(!open)}
        type="button"
      >
        <span className="font-serifDisplay text-[18px] leading-[1.4] tracking-[-0.01em] text-[#0B1F3A] lg:text-[20px]">
          {item.question}
        </span>
        <Chevron open={open} />
      </button>
      <div
        className={`grid transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 pr-10 font-sans text-[15px] leading-[1.7] text-[#3A4A63] lg:text-[16px]">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const ArrowRight = ({ className = "" }: { className?: string }): JSX.Element => (
  <svg
    aria-hidden="true"
    className={`h-[14px] w-[14px] transition-transform duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M5 12h14M13 5l7 7-7 7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const FAQPreviewSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="faq-preview-heading"
      className="relative isolate w-full overflow-hidden bg-[#F7F7F5] text-[#0B1F3A]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-multiply"
        style={{ backgroundImage: grain }}
      />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none overflow-hidden">
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.05]"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1440 900"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#0B1F3A" strokeWidth="1">
            <path d="M-50 180 Q 400 60 860 200 T 1500 160" />
            <path d="M-50 360 Q 460 230 940 360 T 1500 330" />
          </g>
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-10 md:py-24 lg:px-20 lg:py-[120px]">
        <header className="mx-auto flex flex-col items-center text-center">
          <RevealBlock
            as="p"
            className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#B88A2D]"
          >
            09 &mdash; FAQ
          </RevealBlock>

          <RevealText
            as="h2"
            className="mt-5 font-serifDisplay font-normal leading-[1.08] tracking-[-0.02em] text-[#0B1F3A] text-[clamp(36px,5vw,64px)]"
            id="faq-preview-heading"
            style={{ fontVariationSettings: headlineAxes }}
          >
            Frequently Asked Questions<span className="text-[#B88A2D]">.</span>
          </RevealText>
        </header>

        <RevealStagger
          amount={STAGGER.items}
          className="mx-auto mt-14 max-w-[820px] border-t border-[#0B1F3A]/10 lg:mt-16"
        >
          {faqs.map((item) => (
            <AccordionItem item={item} key={item.question} />
          ))}
        </RevealStagger>

        <RevealBlock className="mt-12 flex justify-center">
          <Link
            className="group inline-flex items-center gap-2.5 font-sans text-[15px] font-medium text-[#0B1F3A] transition-colors duration-150 hover:text-[#B88A2D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88A2D]/60 focus-visible:ring-offset-2"
            to="/contact"
          >
            See All FAQs
            <ArrowRight className="group-hover:translate-x-1" />
          </Link>
        </RevealBlock>
      </div>
    </section>
  );
};
