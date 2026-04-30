import { Card, CardContent } from "../../../../components/ui/card";

const projects = [
  {
    id: "01",
    title: "Crypto Screener Application",
    description: [
      "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    ],
    imageSrc: "/image-771.png",
    imageAlt: "Crypto Screener Application preview",
    imageRounded: true,
    reverse: false,
  },
  {
    id: "02",
    title: "Euphoria - Ecommerce (Apparels) Website Template",
    description: [
      "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
      "when an unknown printer took a galley of type and scrambled it to specimen book.",
    ],
    imageSrc: "/image-770.png",
    imageAlt: "Euphoria Ecommerce Website Template preview",
    imageRounded: true,
    reverse: true,
  },
  {
    id: "03",
    title: "Blog Website Template",
    description: [
      "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    ],
    imageSrc: "/image-770-1.png",
    imageAlt: "Blog Website Template preview",
    imageRounded: false,
    reverse: false,
  },
];

export const ProjectsShowcaseSection = (): JSX.Element => {
  return (
    <section className="relative flex w-full bg-primaryblack px-4 py-[60px] sm:px-6 lg:px-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start gap-5 px-0 md:px-4 lg:px-8">
        <header className="flex w-full items-center justify-center gap-4 py-5">
          <h2 className="flex items-center justify-center gap-4 text-center">
            <span className="text-primarywhite relative w-fit mt-[-1.00px] font-displaytext-regular font-[number:var(--displaytext-regular-font-weight)] text-[length:var(--displaytext-regular-font-size)] tracking-[var(--displaytext-regular-letter-spacing)] leading-[var(--displaytext-regular-line-height)] whitespace-nowrap [font-style:var(--displaytext-regular-font-style)]">
              My
            </span>
            <span className="relative w-fit mt-[-1.00px] font-displaytext-extra-bold font-[number:var(--displaytext-extra-bold-font-weight)] text-primarywhite text-[length:var(--displaytext-extra-bold-font-size)] tracking-[var(--displaytext-extra-bold-letter-spacing)] leading-[var(--displaytext-extra-bold-line-height)] whitespace-nowrap [font-style:var(--displaytext-extra-bold-font-style)]">
              Projects
            </span>
          </h2>
        </header>
        <div className="flex w-full flex-col gap-0">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`relative flex w-full flex-col items-center gap-8 py-5 lg:gap-10 ${
                project.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div className="flex w-full items-center justify-center lg:max-w-[594px] lg:flex-1">
                <Card className="w-full border-0 bg-transparent shadow-none">
                  <CardContent className="p-0">
                    <img
                      className={`block h-auto w-full object-cover lg:max-w-[568px] ${
                        project.imageRounded ? "rounded-[18.76px]" : ""
                      }`}
                      alt={project.imageAlt}
                      src={project.imageSrc}
                    />
                  </CardContent>
                </Card>
              </div>
              <div className="flex w-full flex-1 flex-col items-start justify-center gap-6">
                <div
                  className={`flex w-full flex-col items-start ${
                    project.id === "03" ? "gap-[30px]" : "gap-7"
                  }`}
                >
                  <p className="relative self-stretch mt-[-1.00px] font-displaytext-extra-bold font-[number:var(--displaytext-extra-bold-font-weight)] text-primarywhite text-[length:var(--displaytext-extra-bold-font-size)] tracking-[var(--displaytext-extra-bold-letter-spacing)] leading-[var(--displaytext-extra-bold-line-height)] [font-style:var(--displaytext-extra-bold-font-style)]">
                    {project.id}
                  </p>
                  <h3 className="relative self-stretch font-heading-h2-bold font-[number:var(--heading-h2-bold-font-weight)] text-primarywhite text-[length:var(--heading-h2-bold-font-size)] tracking-[var(--heading-h2-bold-letter-spacing)] leading-[var(--heading-h2-bold-line-height)] [font-style:var(--heading-h2-bold-font-style)]">
                    {project.title}
                  </h3>
                  <div className="relative self-stretch font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-zinc-500 text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]">
                    {project.description.map((paragraph, index) => (
                      <p key={`${project.id}-paragraph-${index}`}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <button
                    type="button"
                    aria-label={`Read more about ${project.title}`}
                    className="inline-flex h-auto items-center justify-center"
                  >
                    <img
                      className="relative h-5 w-5"
                      alt="Read more"
                      src="/read-more.svg"
                    />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
