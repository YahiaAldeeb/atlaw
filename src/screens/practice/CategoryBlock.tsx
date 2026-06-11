import { Link } from "react-router-dom";
import { GOLD, IVORY, subHeadlineAxes, type CategoryGroup } from "./capabilities-tokens";

export const CategoryBlock = ({ group, index }: { group: CategoryGroup; index: number }): JSX.Element => {
  const isBlue = index % 2 === 1;

  // Variant tokens — switch the whole block between light and dark with one prop.
  const v = isBlue
    ? {
        bg: "#0B1F3A",
        color: IVORY,
        accent: GOLD,
        rule: GOLD,
        eyebrow: GOLD,
        title: "#FFFFFF",
        body: "rgba(255,255,255,0.70)",
        link: "#FFFFFF",
        linkHover: GOLD,
        cardBg: "rgba(255,255,255,0.03)",
        cardBorder: "rgba(255,255,255,0.08)",
        cardHoverBorder: "rgba(211,154,42,0.45)",
        cardHoverBg: "rgba(255,255,255,0.06)",
        cardTitle: "#FFFFFF",
        cardBody: "rgba(255,255,255,0.55)",
        cardArrow: "rgba(255,255,255,0.30)",
      }
    : {
        bg: "#FFFFFF",
        color: "#0B1F3A",
        accent: "#B88A2D",
        rule: "#B88A2D",
        eyebrow: "#B88A2D",
        title: "#0B1F3A",
        body: "#3A4A63",
        link: "#0B1F3A",
        linkHover: "#B88A2D",
        cardBg: "#FFFFFF",
        cardBorder: "#FFFFFF",
        cardHoverBorder: "rgba(184,138,45,0.55)",
        cardHoverBg: "#FFFFFF",
        cardTitle: "#0B1F3A",
        cardBody: "#5C6675",
        cardArrow: "#B0AFA8",
      };

  return (
    <section
      aria-labelledby={`cat-${group.category.toLowerCase()}`}
      className="relative w-full"
      style={{ backgroundColor: v.bg, color: v.color }}
    >
      <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-20 pt-20 sm:px-10 lg:px-20 lg:pb-[120px] lg:pt-[120px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <p
              className="font-sans text-[11.5px] font-semibold uppercase leading-none tracking-[0.24em]"
              style={{ color: v.eyebrow }}
            >
              <span
                className="mr-3 inline-block h-px w-8 align-middle"
                style={{ backgroundColor: v.rule }}
              />
              {group.number} &mdash; {group.category}
            </p>

            <h2
              className="mt-6 font-serifDisplay text-[40px] font-normal leading-[1.04] tracking-[-0.02em] lg:text-[60px]"
              id={`cat-${group.category.toLowerCase()}`}
              style={{ color: v.title, fontVariationSettings: subHeadlineAxes }}
            >
              {group.parent.name}
              <span aria-hidden="true" style={{ color: v.accent }}>.</span>
            </h2>

            <p
              className="mt-5 max-w-[440px] font-sans text-[15.5px] leading-[1.65]"
              style={{ color: v.body }}
            >
              {group.parent.subtitle}
            </p>

            <Link
              className="mt-7 inline-flex items-center font-sans text-[12px] font-semibold uppercase tracking-[0.24em] transition-colors"
              onMouseEnter={(e) => (e.currentTarget.style.color = v.linkHover)}
              onMouseLeave={(e) => (e.currentTarget.style.color = v.link)}
              style={{ color: v.link }}
              to={`/practice-areas/${group.parent.slug}`}
            >
              Explore {group.parent.name.toLowerCase()}
              <span aria-hidden="true" className="ml-2">&rarr;</span>
            </Link>
          </div>

          <div>
            <p
              className="font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.24em]"
              style={{ color: v.eyebrow }}
            >
              Key Areas
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {group.children.map((child) => (
                <li key={child.slug}>
                  <Link
                    className="group relative flex h-full flex-col rounded-[16px] border p-5 transition-all duration-[200ms]"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = v.cardHoverBorder;
                      e.currentTarget.style.backgroundColor = v.cardHoverBg;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = v.cardBorder;
                      e.currentTarget.style.backgroundColor = v.cardBg;
                    }}
                    style={{ backgroundColor: v.cardBg, borderColor: v.cardBorder }}
                    to={`/practice-areas/${child.slug}`}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-5 h-6 w-0 transition-[width] duration-200 group-hover:w-[3px]"
                      style={{ backgroundColor: v.accent }}
                    />
                    <div className="flex items-baseline justify-between gap-3">
                      <h3
                        className="font-serifDisplay text-[19px] font-normal leading-[1.2] tracking-[-0.01em]"
                        style={{ color: v.cardTitle, fontVariationSettings: subHeadlineAxes }}
                      >
                        {child.navLabel ?? child.name}
                      </h3>
                      <span
                        aria-hidden="true"
                        className="font-sans text-[15px] transition-colors"
                        style={{ color: v.cardArrow }}
                      >
                        &rarr;
                      </span>
                    </div>
                    <p
                      className="mt-2 font-sans text-[13px] leading-[1.55]"
                      style={{ color: v.cardBody }}
                    >
                      {child.subtitle}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
