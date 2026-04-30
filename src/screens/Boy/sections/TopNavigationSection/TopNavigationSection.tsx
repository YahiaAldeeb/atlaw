import { Button } from "../../../../components/ui/button";

const navItems = ["About Me", "Skills", "Project", "Contact Me"];

export const TopNavigationSection = (): JSX.Element => {
  return (
    <header className="relative w-full bg-transparent px-4 py-4 sm:px-6 lg:px-20 lg:py-6">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-0 lg:px-8">
        <div className="flex items-center gap-3">
          <img className="h-10 w-[39.91px]" alt="Logo" src="/logo-1.svg" />
          <span className="whitespace-nowrap font-heading-h5-bold text-[length:var(--heading-h5-bold-font-size)] font-[number:var(--heading-h5-bold-font-weight)] leading-[var(--heading-h5-bold-line-height)] tracking-[var(--heading-h5-bold-letter-spacing)] text-primaryblack [font-style:var(--heading-h5-bold-font-style)]">
            Personal
          </span>
        </div>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center justify-center gap-8">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  className="inline-flex items-center justify-center whitespace-nowrap font-heading-h5-semibold text-[length:var(--heading-h5-semibold-font-size)] font-[number:var(--heading-h5-semibold-font-weight)] leading-[var(--heading-h5-semibold-line-height)] tracking-[var(--heading-h5-semibold-letter-spacing)] text-primaryblack transition-opacity hover:opacity-70 [font-style:var(--heading-h5-semibold-font-style)]"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <Button
          type="button"
          className="h-auto rounded bg-primaryblack px-5 py-4 font-button-text-semibold text-[length:var(--button-text-semibold-font-size)] font-[number:var(--button-text-semibold-font-weight)] leading-[var(--button-text-semibold-line-height)] tracking-[var(--button-text-semibold-letter-spacing)] text-primarywhite hover:bg-primaryblack/90 [font-style:var(--button-text-semibold-font-style)]"
        >
          <span className="whitespace-nowrap">Resume</span>
          <img className="h-5 w-5" alt="Download" src="/download.svg" />
        </Button>
      </div>
    </header>
  );
};
