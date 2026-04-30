import { useRef } from "react";

type Capability = {
  title: string;
  category: string;
};

type Props = {
  items: Capability[];
};

const capabilityImages: Record<string, string> = {
  Compensation: "/assets/cap-compensation.png",
  "Employee Benefits": "/assets/cap-employee-benefits.png",
  "Franchising & Scaling": "/assets/cap-franchising-scaling.png",
  "Government Relations & Policy": "/assets/cap-government-relations-policy.png",
  "Impact & ESG": "/assets/cap-impact-esg.png",
  "Mergers & Acquisitions": "/assets/cap-mergers-acquisitions.png",
  Planning: "/assets/cap-planning.png",
  "Privacy & Cybersecurity": "/assets/cap-privacy-cybersecurity.png",
  "Recovery & Renewal": "/assets/cap-recovery-renewal.png",
  Residency: "/assets/cap-residency.png",
  "Trusts & Estate": "/assets/cap-trusts-estate.png",
};

export const Capabilities = ({ items }: Props): JSX.Element => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollCards = (direction: "next" | "prev") => {
    if (!sliderRef.current) {
      return;
    }

    const amount = sliderRef.current.clientWidth * 0.72;
    sliderRef.current.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="overflow-hidden bg-ivory">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-ink/60">
          CAPABILITIES
        </p>
        <h2 className="mt-4 text-center font-serifDisplay text-4xl leading-tight text-ink md:text-6xl">
          Capabilities Built for Complex Business Needs
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-ink/80">
          Counsel across advisory, litigation, and transactions - built for complex business needs
          and informed by technology, data, and senior legal judgment.
        </p>

        <div
          className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden hover:[&>article:not(:hover)]:scale-[0.98] hover:[&>article:not(:hover)]:blur-[2px] hover:[&>article:not(:hover)]:opacity-65"
          ref={sliderRef}
        >
          {items.map((item) => (
            <article
              className="group relative h-[25rem] w-[17.5rem] flex-none snap-start overflow-hidden border border-accent/45 bg-ink shadow-[0_10px_28px_rgba(20,35,59,0.18)] transition duration-300 ease-out hover:z-10 hover:-translate-y-1 hover:scale-[1.035] hover:shadow-[0_20px_38px_rgba(20,35,59,0.26)]"
              key={item.title}
            >
              <img
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 ease-out group-hover:scale-110"
                src={capabilityImages[item.title]}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[#d9b58b]">{item.category}</p>
                <h3 className="font-serifDisplay text-3xl leading-tight text-[#d9b58b]">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-7 flex items-center justify-end gap-3">
          <button
            aria-label="Scroll capabilities left"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent/55 text-ink transition hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            onClick={() => scrollCards("prev")}
            type="button"
          >
            <span aria-hidden>&larr;</span>
          </button>
          <button
            aria-label="Scroll capabilities right"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent/55 text-ink transition hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            onClick={() => scrollCards("next")}
            type="button"
          >
            <span aria-hidden>&rarr;</span>
          </button>
        </div>

        <div className="mt-7">
          <a className="group inline-flex items-center text-sm font-medium text-ink" href="#">
            View All Capabilities
            <span className="ml-2 transition duration-200 group-hover:translate-x-1">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};
