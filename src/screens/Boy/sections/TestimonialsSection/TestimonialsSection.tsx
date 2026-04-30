import { Card, CardContent } from "../../../../components/ui/card";

const experiences = [
  {
    company: "Google",
    icon: "/google.svg",
    role: "Lead Software Engineer at Google",
    period: "Nov 2019 - Present",
    description:
      "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
    highlighted: false,
  },
  {
    company: "Youtube",
    icon: "/youtube.svg",
    role: "Software Engineer at Youtube",
    period: "Jan 2017 - Oct 2019",
    description:
      "At Youtube, I served as a Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
    highlighted: true,
  },
  {
    company: "Apple",
    icon: "/apple.svg",
    role: "Junior Software Engineer at Apple",
    period: "Jan 2016 - Dec 2017",
    description:
      "During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.",
    highlighted: false,
  },
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-primaryblack px-5 py-[60px] sm:px-8 lg:px-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-center gap-5 px-0 sm:px-4 lg:px-8">
        <header className="flex w-full items-center justify-center gap-4 px-0 py-5 text-center">
          <h2 className="flex flex-wrap items-center justify-center gap-4">
            <span className="mt-[-1.00px] w-fit whitespace-nowrap font-displaytext-regular text-[length:var(--displaytext-regular-font-size)] font-[number:var(--displaytext-regular-font-weight)] leading-[var(--displaytext-regular-line-height)] tracking-[var(--displaytext-regular-letter-spacing)] text-primarywhite [font-style:var(--displaytext-regular-font-style)]">
              My
            </span>
            <span className="mt-[-1.00px] w-fit whitespace-nowrap font-displaytext-extra-bold text-[length:var(--displaytext-extra-bold-font-size)] font-[number:var(--displaytext-extra-bold-font-weight)] leading-[var(--displaytext-extra-bold-line-height)] tracking-[var(--displaytext-extra-bold-letter-spacing)] text-primarywhite [font-style:var(--displaytext-extra-bold-font-style)]">
              Experience
            </span>
          </h2>
        </header>
        <div className="flex w-full flex-col items-start gap-8 px-0 py-6 sm:px-2 sm:py-8 lg:px-6 lg:py-10">
          {experiences.map((experience) => (
            <Card
              key={experience.role}
              className={`w-full rounded-[10px] ${
                experience.highlighted
                  ? "border-0 bg-zinc-800"
                  : "border border-solid border-[#71717a] bg-transparent"
              } shadow-none`}
            >
              <CardContent className="flex flex-col items-start gap-7 px-4 py-[30px] sm:px-6">
                <div className="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
                  <div className="flex min-w-0 items-center gap-[30px]">
                    <img
                      className="h-8 w-8 shrink-0"
                      alt={experience.company}
                      src={experience.icon}
                    />
                    <h3 className="min-w-0 font-heading-h4-semibold text-[length:var(--heading-h4-semibold-font-size)] font-[number:var(--heading-h4-semibold-font-weight)] leading-[var(--heading-h4-semibold-line-height)] tracking-[var(--heading-h4-semibold-letter-spacing)] text-primarywhite [font-style:var(--heading-h4-semibold-font-style)] md:whitespace-nowrap">
                      {experience.role}
                    </h3>
                  </div>
                  <p className="shrink-0 font-heading-h6-semibold text-[length:var(--heading-h6-semibold-font-size)] font-[number:var(--heading-h6-semibold-font-weight)] leading-[var(--heading-h6-semibold-line-height)] tracking-[var(--heading-h6-semibold-letter-spacing)] text-zinc-300 [font-style:var(--heading-h6-semibold-font-style)] md:text-right">
                    {experience.period}
                  </p>
                </div>
                <p className="self-stretch font-paragraph-p2-regular text-[length:var(--paragraph-p2-regular-font-size)] font-[number:var(--paragraph-p2-regular-font-weight)] leading-[var(--paragraph-p2-regular-line-height)] tracking-[var(--paragraph-p2-regular-letter-spacing)] text-zinc-300 [font-style:var(--paragraph-p2-regular-font-style)]">
                  {experience.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
