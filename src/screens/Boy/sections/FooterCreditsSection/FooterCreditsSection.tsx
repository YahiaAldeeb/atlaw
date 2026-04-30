import { Card, CardContent } from "../../../../components/ui/card";

const footerMeta = ["@ 2019-2023 Personal", "Made In Figma"];

export const FooterCreditsSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-primaryblack px-4 py-4 sm:px-6 md:px-10 lg:px-20 lg:py-6">
      <Card className="mx-auto w-full max-w-[1280px] border-0 bg-transparent shadow-none">
        <CardContent className="flex flex-col gap-4 px-0 py-0 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img
              className="h-10 w-[39.91px] shrink-0"
              alt="Logo"
              src="/logo-1.svg"
            />
            <p className="w-fit whitespace-nowrap font-heading-h5-bold font-[number:var(--heading-h5-bold-font-weight)] text-[length:var(--heading-h5-bold-font-size)] leading-[var(--heading-h5-bold-line-height)] tracking-[var(--heading-h5-bold-letter-spacing)] text-primarywhite [font-style:var(--heading-h5-bold-font-style)]">
              Personal
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 sm:items-end">
            {footerMeta.map((item) => (
              <p
                key={item}
                className="w-fit whitespace-nowrap font-heading-h6-semibold font-[number:var(--heading-h6-semibold-font-weight)] text-[length:var(--heading-h6-semibold-font-size)] leading-[var(--heading-h6-semibold-line-height)] tracking-[var(--heading-h6-semibold-letter-spacing)] text-primarywhite sm:text-right [font-style:var(--heading-h6-semibold-font-style)]"
              >
                {item}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>
    </footer>
  );
};
