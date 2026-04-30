import { Card, CardContent } from "../../../../components/ui/card";

const testimonials = [
  {
    imageSrc: "/frame-18-1.svg",
    imageAlt: "Evren Shah testimonial portrait",
    quote:
      "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    name: "Evren Shah",
    role: "Designer",
    dark: false,
  },
  {
    imageSrc: "/frame-18.svg",
    imageAlt: "Flora Sheen testimonial portrait",
    quote:
      "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    name: "Flora Sheen",
    role: "Designer",
    dark: true,
  },
  {
    imageSrc: "/frame-18-1.svg",
    imageAlt: "Evren Shah testimonial portrait",
    quote:
      "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    name: "Evren Shah",
    role: "Designer",
    dark: false,
  },
];

export const ContactCalloutSection = (): JSX.Element => {
  return (
    <section className="w-full bg-primarywhite px-4 py-[60px] sm:px-6 lg:px-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-center gap-5 px-0 lg:px-8">
        <header className="flex w-full items-center justify-center gap-4 px-0 py-5">
          <h2 className="flex flex-wrap items-center justify-center gap-4 text-center">
            <span className="mt-[-1.00px] w-fit whitespace-nowrap font-displaytext-regular text-[length:var(--displaytext-regular-font-size)] font-[number:var(--displaytext-regular-font-weight)] leading-[var(--displaytext-regular-line-height)] tracking-[var(--displaytext-regular-letter-spacing)] text-black [font-style:var(--displaytext-regular-font-style)]">
              My
            </span>
            <span className="mt-[-1.00px] w-fit whitespace-nowrap font-displaytext-extra-bold text-[length:var(--displaytext-extra-bold-font-size)] font-[number:var(--displaytext-extra-bold-font-weight)] leading-[var(--displaytext-extra-bold-line-height)] tracking-[var(--displaytext-extra-bold-letter-spacing)] text-black [font-style:var(--displaytext-extra-bold-font-style)]">
              Testimonial
            </span>
          </h2>
        </header>
        <div className="grid w-full grid-cols-1 gap-6 px-0 py-6 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:px-6 lg:py-10">
          {testimonials.map((testimonial, index) => (
            <Card
              key={`${testimonial.name}-${index}`}
              className={`rounded-[20px] border-0 shadow-[0px_8px_16px_-6px_#18274b14,0px_6px_8px_-6px_#18274b1f] ${
                testimonial.dark
                  ? "bg-primaryblack text-primarywhite"
                  : "bg-primarywhite text-primaryneutral"
              }`}
            >
              <CardContent className="flex h-full flex-col items-center justify-center gap-6 p-10">
                <img
                  className="relative shrink-0"
                  alt={testimonial.imageAlt}
                  src={testimonial.imageSrc}
                />
                <p
                  className={`self-stretch text-center font-button-text-2-regular text-[length:var(--button-text-2-regular-font-size)] font-[number:var(--button-text-2-regular-font-weight)] leading-[var(--button-text-2-regular-line-height)] tracking-[var(--button-text-2-regular-letter-spacing)] [font-style:var(--button-text-2-regular-font-style)] ${
                    testimonial.dark
                      ? "text-primarywhite"
                      : "text-primaryneutral"
                  }`}
                >
                  {testimonial.quote}
                </p>
                <div
                  className={`h-0.5 w-[120px] ${
                    testimonial.dark ? "bg-primarywhite" : "bg-primaryblack"
                  }`}
                />
                <h3
                  className={`self-stretch text-center font-heading-h5-semibold text-[length:var(--heading-h5-semibold-font-size)] font-[number:var(--heading-h5-semibold-font-weight)] leading-[var(--heading-h5-semibold-line-height)] tracking-[var(--heading-h5-semibold-letter-spacing)] [font-style:var(--heading-h5-semibold-font-style)] ${
                    testimonial.dark
                      ? "text-primarywhite"
                      : "text-primaryneutral"
                  }`}
                >
                  {testimonial.name}
                </h3>
                <p
                  className={`self-stretch text-center font-heading-h6-semibold text-[length:var(--heading-h6-semibold-font-size)] font-[number:var(--heading-h6-semibold-font-weight)] leading-[var(--heading-h6-semibold-line-height)] tracking-[var(--heading-h6-semibold-letter-spacing)] [font-style:var(--heading-h6-semibold-font-style)] ${
                    testimonial.dark ? "text-primarywhite" : "text-zinc-500"
                  }`}
                >
                  {testimonial.role}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
