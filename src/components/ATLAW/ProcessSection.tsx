import { RevealText, RevealBlock, RevealStagger } from "../../motion/primitives";
import { STAGGER } from "../../motion/config";

const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const headlineAxes = "'opsz' 144, 'wght' 380, 'SOFT' 0, 'WONK' 0";
const numberAxes = "'opsz' 96, 'wght' 360, 'SOFT' 0, 'WONK' 0";

type Step = {
  number: string;
  title: string;
  description: string;
  gradient: string;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Call ATLAW",
    description: "Contact us for a free case review.",
    gradient: "linear-gradient(170deg, #162d50 0%, #0e1b33 40%, #0a1428 100%)",
  },
  {
    number: "02",
    title: "We Investigate",
    description: "We gather evidence and handle the paperwork.",
    gradient: "linear-gradient(170deg, #1a2a3e 0%, #12243c 35%, #0e1b33 70%, #0a1428 100%)",
  },
  {
    number: "03",
    title: "We Fight",
    description: "We negotiate or litigate for maximum recovery.",
    gradient: "linear-gradient(170deg, #0e1b33 0%, #0a1428 100%)",
  },
  {
    number: "04",
    title: "You Recover",
    description: "Focus on healing. We handle the rest.",
    gradient: "linear-gradient(170deg, #142640 0%, #0f1e35 50%, #0c1729 100%)",
  },
];

const StepCard = ({ step }: { step: Step }): JSX.Element => (
  <article
    className="group relative flex min-h-[280px] flex-col overflow-hidden rounded-[16px] px-7 pb-9 pt-10 shadow-[0_10px_30px_rgba(5,15,28,0.18)] transition-all duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[3px] hover:shadow-[0_18px_42px_rgba(5,15,28,0.30)] lg:min-h-[320px] lg:px-8 lg:pb-10 lg:pt-12"
    style={{ background: step.gradient }}
  >
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
      style={{ backgroundImage: grain }}
    />

    <span
      className="relative font-serifDisplay font-normal leading-none tracking-[-0.02em] text-[#C6A04A] text-[clamp(48px,5vw,72px)]"
      style={{ fontVariationSettings: numberAxes }}
    >
      {step.number}
    </span>

    <span aria-hidden="true" className="relative mt-6 block h-px w-12 bg-gradient-to-r from-[#B88A2D] to-[#B88A2D]/20" />

    <h3
      className="relative mt-6 font-serifDisplay text-[22px] font-normal leading-[1.18] tracking-[-0.01em] text-white lg:text-[24px]"
      style={{ fontVariationSettings: "'opsz' 48, 'wght' 400" }}
    >
      {step.title}
    </h3>

    <p className="relative mt-3 font-sans text-[15px] leading-[1.6] text-white/70">
      {step.description}
    </p>

    <span
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#B88A2D]/25 to-transparent"
    />
  </article>
);

export const ProcessSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="process-heading"
      className="relative isolate w-full overflow-hidden bg-[#FFFFFF]"
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
            <path d="M-50 180 Q 420 50 900 180 T 1520 140" />
            <path d="M-50 360 Q 480 230 980 360 T 1520 320" />
          </g>
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-20 pt-20 sm:px-10 md:pb-24 md:pt-28 lg:px-20 lg:pb-[120px] lg:pt-[140px]">
        <header className="mx-auto flex flex-col items-center text-center">
          <RevealBlock
            as="p"
            className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#B88A2D]"
          >
            How It Works
          </RevealBlock>

          <RevealText
            as="h2"
            className="mt-5 font-serifDisplay font-normal leading-[1.08] tracking-[-0.02em] text-[#0B1F3A] text-[clamp(36px,5.5vw,68px)]"
            id="process-heading"
            style={{ fontVariationSettings: headlineAxes }}
          >
            What to Do After an{" "}
            <span className="text-[#B88A2D]">Injury</span>
          </RevealText>

          <RevealBlock
            as="p"
            className="mt-6 max-w-[680px] font-sans text-[18px] leading-[1.6] text-[#3A4A63] lg:text-[19px]"
          >
            Four steps between your injury and your recovery. We handle steps two and three so you can focus on four.
          </RevealBlock>
        </header>

        <RevealStagger
          amount={STAGGER.grid}
          className="mt-14 grid grid-cols-1 items-stretch gap-5 md:mt-16 md:grid-cols-2 lg:mt-[64px] lg:gap-6 xl:grid-cols-4"
        >
          {steps.map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </RevealStagger>
      </div>
    </section>
  );
};
