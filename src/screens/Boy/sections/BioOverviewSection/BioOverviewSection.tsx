import { Card, CardContent } from "../../../../components/ui/card";

const bioParagraphs = [
  "I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.",
  "I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.",
  "When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.",
];

export const BioOverviewSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-4 py-[60px] sm:px-6 lg:px-20">
      <div className="mx-auto w-full max-w-[1280px]">
        <Card className="border-0 bg-transparent shadow-none">
          <CardContent className="p-0">
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(320px,529.45px)_minmax(0,610px)] lg:justify-between lg:gap-10 lg:px-8">
              <figure className="w-full">
                <img
                  className="h-auto w-full max-w-[529.45px]"
                  alt="Illustration portrait"
                  src="/group-1000015845.png"
                />
              </figure>
              <article className="flex flex-col items-start gap-5">
                <header className="flex flex-wrap items-start gap-4 py-5">
                  <h2 className="text-primaryblack font-displaytext-regular text-[length:var(--displaytext-regular-font-size)] font-[number:var(--displaytext-regular-font-weight)] leading-[var(--displaytext-regular-line-height)] tracking-[var(--displaytext-regular-letter-spacing)] [font-style:var(--displaytext-regular-font-style)]">
                    About
                  </h2>
                  <span className="text-primaryblack font-displaytext-extra-bold text-[length:var(--displaytext-extra-bold-font-size)] font-[number:var(--displaytext-extra-bold-font-weight)] leading-[var(--displaytext-extra-bold-line-height)] tracking-[var(--displaytext-extra-bold-letter-spacing)] [font-style:var(--displaytext-extra-bold-font-style)]">
                    Me
                  </span>
                </header>
                <div className="flex w-full flex-col items-start justify-center gap-5">
                  {bioParagraphs.map((paragraph, index) => (
                    <p
                      key={`bio-paragraph-${index}`}
                      className="w-full max-w-[610px] font-paragraph-p2-regular text-[length:var(--paragraph-p2-regular-font-size)] font-[number:var(--paragraph-p2-regular-font-weight)] leading-[var(--paragraph-p2-regular-line-height)] tracking-[var(--paragraph-p2-regular-letter-spacing)] text-zinc-500 [font-style:var(--paragraph-p2-regular-font-style)]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
