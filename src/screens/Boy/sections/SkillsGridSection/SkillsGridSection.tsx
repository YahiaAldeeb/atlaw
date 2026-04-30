import { Card, CardContent } from "../../../../components/ui/card";

const skillRows = [
  [
    {
      name: "Git",
      icon: "/icon-git.svg",
      alt: "Icon git",
      highlighted: false,
    },
    {
      name: "Javascript",
      icon: "/icon-javscript.svg",
      alt: "Icon javscript",
      highlighted: true,
    },
    {
      name: "Sass/scss",
      icon: "/icon-sass.svg",
      alt: "Icon sass",
      highlighted: false,
    },
    {
      name: "Nest.js",
      icon: "/icon-nest.svg",
      alt: "Icon nest",
      highlighted: false,
    },
    {
      name: "Storybook",
      icon: "/icon-storybook.svg",
      alt: "Icon storybook",
      highlighted: false,
    },
  ],
  [
    {
      name: "Nest.js",
      icon: "/icon-nest.svg",
      alt: "Icon nest",
      highlighted: false,
    },
    {
      name: "Git",
      icon: "/icon-git.svg",
      alt: "Icon git",
      highlighted: false,
    },
    {
      name: "Storybook",
      icon: "/icon-storybook.svg",
      alt: "Icon storybook",
      highlighted: false,
    },
    {
      name: "Socket.io",
      icon: "/icon-socket.svg",
      alt: "Icon socket",
      highlighted: false,
    },
    {
      name: "Sass/scss",
      icon: "/icon-sass.svg",
      alt: "Icon sass",
      highlighted: false,
    },
  ],
];

export const SkillsGridSection = (): JSX.Element => {
  return (
    <section className="relative flex w-full justify-center px-6 py-[60px] sm:px-10 lg:px-20">
      <div className="flex w-full max-w-[1280px] flex-col items-start gap-5 px-0 sm:px-4 lg:px-8">
        <header className="flex w-full items-center justify-center gap-4 py-5">
          <h2 className="flex items-center justify-center gap-4 whitespace-nowrap text-center">
            <span className="mt-[-1.00px] font-displaytext-regular text-[length:var(--displaytext-regular-font-size)] font-[number:var(--displaytext-regular-font-weight)] leading-[var(--displaytext-regular-line-height)] tracking-[var(--displaytext-regular-letter-spacing)] text-primaryblack [font-style:var(--displaytext-regular-font-style)]">
              My
            </span>
            <span className="mt-[-1.00px] font-displaytext-extra-bold text-[length:var(--displaytext-extra-bold-font-size)] font-[number:var(--displaytext-extra-bold-font-weight)] leading-[var(--displaytext-extra-bold-line-height)] tracking-[var(--displaytext-extra-bold-letter-spacing)] text-primaryblack [font-style:var(--displaytext-extra-bold-font-style)]">
              Skills
            </span>
          </h2>
        </header>
        <div className="flex w-full flex-col items-center py-5">
          {skillRows.map((row, rowIndex) => (
            <div
              key={`skill-row-${rowIndex}`}
              className="grid w-full grid-cols-2 gap-4 py-5 sm:grid-cols-3 lg:grid-cols-5 lg:gap-[22px]"
            >
              {row.map((skill, skillIndex) => (
                <Card
                  key={`skill-${rowIndex}-${skillIndex}`}
                  className={`h-[186px] rounded border-2 border-solid border-black shadow-none ${
                    skill.highlighted
                      ? "bg-primaryblack text-primarywhite"
                      : "bg-primarywhite text-primaryblack"
                  }`}
                >
                  <CardContent className="flex h-full flex-col items-center justify-center gap-8 p-6">
                    <img
                      className="h-14 w-14"
                      alt={skill.alt}
                      src={skill.icon}
                    />
                    <div
                      className={`self-stretch text-center font-heading-h5-bold text-[length:var(--heading-h5-bold-font-size)] font-[number:var(--heading-h5-bold-font-weight)] leading-[var(--heading-h5-bold-line-height)] tracking-[var(--heading-h5-bold-letter-spacing)] [font-style:var(--heading-h5-bold-font-style)] ${
                        skill.highlighted
                          ? "text-primarywhite"
                          : "text-primaryblack"
                      }`}
                    >
                      {skill.name}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
