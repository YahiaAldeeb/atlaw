import { Button } from "../../../../components/ui/button";

const socialLinks = [
  {
    icon: "/social-icon-3.svg",
    alt: "Social icon 3",
    filled: true,
  },
  {
    icon: "/social-icon-1.svg",
    alt: "Social icon 1",
    filled: false,
  },
  {
    icon: "/social-icon-2.svg",
    alt: "Social icon 2",
    filled: false,
  },
  {
    icon: "/social-icon-5.svg",
    alt: "Social icon 5",
    filled: false,
  },
];

export const IntroHeroSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#f6f6f6] px-6 py-8 sm:px-8 sm:py-10 lg:px-20 lg:py-[60px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <header className="flex w-full max-w-[600px] flex-col gap-8 py-2.5">
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap items-start gap-x-3 gap-y-1">
              <h1 className="font-displaytext-regular text-[length:var(--displaytext-regular-font-size)] font-[number:var(--displaytext-regular-font-weight)] leading-[var(--displaytext-regular-line-height)] tracking-[var(--displaytext-regular-letter-spacing)] text-primaryblack [font-style:var(--displaytext-regular-font-style)]">
                Hello I&apos;am
              </h1>
              <strong className="font-displaytext-extra-bold text-[length:var(--displaytext-extra-bold-font-size)] font-[number:var(--displaytext-extra-bold-font-weight)] leading-[var(--displaytext-extra-bold-line-height)] tracking-[var(--displaytext-extra-bold-letter-spacing)] text-primaryblack [font-style:var(--displaytext-extra-bold-font-style)]">
                Evren Shah.
              </strong>
            </div>
            <div className="flex flex-wrap items-start gap-x-3 gap-y-1">
              <strong className="font-displaytext-extra-bold text-[length:var(--displaytext-extra-bold-font-size)] font-[number:var(--displaytext-extra-bold-font-weight)] leading-[var(--displaytext-extra-bold-line-height)] tracking-[var(--displaytext-extra-bold-letter-spacing)] text-primaryblack [font-style:var(--displaytext-extra-bold-font-style)]">
                Frontend
              </strong>
              <span className="mt-0 lg:mt-[-4px] font-outlined-extra-bold text-[length:var(--outlined-extra-bold-font-size)] font-[number:var(--outlined-extra-bold-font-weight)] leading-[var(--outlined-extra-bold-line-height)] tracking-[var(--outlined-extra-bold-letter-spacing)] text-transparent [-webkit-text-stroke:3px_#000000] [font-style:var(--outlined-extra-bold-font-style)]">
                Developer
              </span>
            </div>
            <div className="flex flex-wrap items-start gap-x-3 gap-y-1">
              <span className="font-displaytext-regular text-[length:var(--displaytext-regular-font-size)] font-[number:var(--displaytext-regular-font-weight)] leading-[var(--displaytext-regular-line-height)] tracking-[var(--displaytext-regular-letter-spacing)] text-primaryblack [font-style:var(--displaytext-regular-font-style)]">
                Based In
              </span>
              <strong className="font-displaytext-extra-bold text-[length:var(--displaytext-extra-bold-font-size)] font-[number:var(--displaytext-extra-bold-font-weight)] leading-[var(--displaytext-extra-bold-line-height)] tracking-[var(--displaytext-extra-bold-letter-spacing)] text-primaryblack [font-style:var(--displaytext-extra-bold-font-style)]">
                India.
              </strong>
            </div>
          </div>
          <p className="max-w-[600px] font-paragraph-p2-regular text-[length:var(--paragraph-p2-regular-font-size)] font-[number:var(--paragraph-p2-regular-font-weight)] leading-[var(--paragraph-p2-regular-line-height)] tracking-[var(--paragraph-p2-regular-letter-spacing)] text-zinc-500 [font-style:var(--paragraph-p2-regular-font-style)]">
            I&#39;m Evren Shah Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry&#39;s
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to specimen book.
          </p>
          <nav aria-label="Social links" className="pt-1">
            <ul className="flex items-center gap-4 sm:gap-6 lg:gap-8">
              {socialLinks.map((item, _index) => (
                <li key={item.icon}>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className={`h-14 w-14 rounded border-2 ${
                      item.filled
                        ? "border-primaryblack bg-primaryblack text-primarywhite hover:bg-primaryblack hover:text-primarywhite"
                        : "border-black bg-transparent text-primaryblack hover:bg-transparent hover:text-primaryblack"
                    }`}
                    aria-label={item.alt}
                  >
                    <span
                      className="block h-5 w-5 bg-[100%_100%] bg-no-repeat"
                      style={{ backgroundImage: `url(${item.icon})` }}
                    />
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <div className="flex w-full justify-center lg:w-auto lg:justify-end">
          <img
            className="h-auto w-full max-w-[520px] lg:max-w-[560px]"
            alt="Banner"
            src="/banner.svg"
          />
        </div>
      </div>
    </section>
  );
};
