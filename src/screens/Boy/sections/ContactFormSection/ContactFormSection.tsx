import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

const formFields = [
  { id: "name", type: "text", placeholder: "Your name" },
  { id: "email", type: "email", placeholder: "Email" },
  { id: "website", type: "text", placeholder: "Your website (If exists)" },
];

const socialLinks = [
  {
    label: "Social icon 3",
    iconClass: "bg-[url(/social-icon-3.svg)]",
    filled: true,
  },
  {
    label: "Social icon 1",
    iconClass: "bg-[url(/social-icon-1.svg)]",
    filled: false,
  },
  {
    label: "Social icon 2",
    iconClass: "bg-[url(/social-icon-2.svg)]",
    filled: false,
  },
  {
    label: "Social icon",
    iconClass: "bg-[url(/social-icon.svg)]",
    filled: false,
  },
];

export const ContactFormSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white px-4 py-[60px] sm:px-6 lg:px-20">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="flex w-full flex-col items-start justify-between gap-12 px-0 py-0 lg:flex-row lg:gap-10 lg:px-8">
          <form className="flex w-full flex-1 flex-col justify-center py-5">
            <div className="flex w-full flex-col items-start gap-5">
              {formFields.map((field) => (
                <div
                  key={field.id}
                  className="flex w-full flex-col items-start gap-3"
                >
                  <Input
                    id={field.id}
                    type={field.type}
                    defaultValue=""
                    placeholder={field.placeholder}
                    className="h-14 w-full max-w-[500px] rounded border-[1.4px] border-black px-6 py-4 font-heading-h6-regular text-[length:var(--heading-h6-regular-font-size)] font-[number:var(--heading-h6-regular-font-weight)] leading-[var(--heading-h6-regular-line-height)] tracking-[var(--heading-h6-regular-letter-spacing)] text-zinc-500 shadow-none placeholder:text-zinc-500 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              ))}

              <div className="flex w-full flex-col items-start gap-3">
                <Textarea
                  id="message"
                  defaultValue=""
                  placeholder="How can I help?*"
                  className="min-h-[140px] w-full max-w-[500px] resize-none rounded border-[1.4px] border-black px-6 py-4 font-heading-h6-regular text-[length:var(--heading-h6-regular-font-size)] font-[number:var(--heading-h6-regular-font-weight)] leading-[var(--heading-h6-regular-line-height)] tracking-[var(--heading-h6-regular-letter-spacing)] text-zinc-500 shadow-none placeholder:text-zinc-500 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <div className="flex flex-wrap items-start gap-4 sm:gap-6">
                <Button
                  type="submit"
                  className="h-14 rounded bg-primaryblack px-5 py-4 font-button-text-semibold text-[length:var(--button-text-semibold-font-size)] font-[number:var(--button-text-semibold-font-weight)] leading-[var(--button-text-semibold-line-height)] tracking-[var(--button-text-semibold-letter-spacing)] text-primarywhite hover:bg-primaryblack/90"
                >
                  Get In Touch
                </Button>
                {socialLinks.map((item) => (
                  <Button
                    key={item.label}
                    type="button"
                    variant="ghost"
                    className={`h-14 w-14 rounded p-4 ${
                      item.filled
                        ? "bg-primaryblack hover:bg-primaryblack/90"
                        : "border-2 border-black bg-transparent hover:bg-transparent"
                    }`}
                    aria-label={item.label}
                  >
                    <span
                      className={`block h-5 w-5 bg-[100%_100%] bg-no-repeat ${item.iconClass}`}
                      aria-hidden="true"
                    />
                  </Button>
                ))}
              </div>
            </div>
          </form>
          <div className="flex w-full flex-1 flex-col items-start justify-center gap-6 py-5">
            <div className="flex w-full flex-col items-start justify-center gap-10">
              <div className="flex w-full flex-col items-start gap-5">
                <header className="flex w-full flex-col items-start gap-3">
                  <div className="flex flex-wrap items-start gap-4">
                    <h2 className="font-displaytext-extra-bold text-[length:var(--displaytext-extra-bold-font-size)] font-[number:var(--displaytext-extra-bold-font-weight)] leading-[var(--displaytext-extra-bold-line-height)] tracking-[var(--displaytext-extra-bold-letter-spacing)] text-primaryblack [font-style:var(--displaytext-extra-bold-font-style)]">
                      Let&apos;s
                    </h2>
                    <span className="mt-[-4px] font-outlined-extra-bold text-[length:var(--outlined-extra-bold-font-size)] font-[number:var(--outlined-extra-bold-font-weight)] leading-[var(--outlined-extra-bold-line-height)] tracking-[var(--outlined-extra-bold-letter-spacing)] text-transparent [-webkit-text-stroke:3px_#000000] [font-style:var(--outlined-extra-bold-font-style)]">
                      talk
                    </span>
                    <span className="font-displaytext-extra-bold text-[length:var(--displaytext-extra-bold-font-size)] font-[number:var(--displaytext-extra-bold-font-weight)] leading-[var(--displaytext-extra-bold-line-height)] tracking-[var(--displaytext-extra-bold-letter-spacing)] text-primaryblack [font-style:var(--displaytext-extra-bold-font-style)]">
                      for
                    </span>
                  </div>
                  <h3 className="self-stretch font-displaytext-extra-bold text-[length:var(--displaytext-extra-bold-font-size)] font-[number:var(--displaytext-extra-bold-font-weight)] leading-[var(--displaytext-extra-bold-line-height)] tracking-[var(--displaytext-extra-bold-letter-spacing)] text-primaryblack [font-style:var(--displaytext-extra-bold-font-style)]">
                    Something special
                  </h3>
                </header>
                <p className="max-w-[560px] self-stretch font-paragraph-p2-regular text-[length:var(--paragraph-p2-regular-font-size)] font-[number:var(--paragraph-p2-regular-font-weight)] leading-[var(--paragraph-p2-regular-line-height)] tracking-[var(--paragraph-p2-regular-letter-spacing)] text-zinc-500 [font-style:var(--paragraph-p2-regular-font-style)]">
                  I seek to push the limits of creativity to create
                  high-engaging, user-friendly, and memorable interactive
                  experiences.
                </p>
              </div>
              <address className="flex w-full flex-col items-start gap-4 not-italic">
                <a
                  href="mailto:Youremail@gmail.com"
                  className="self-stretch font-heading-h3-semibold text-[length:var(--heading-h3-semibold-font-size)] font-[number:var(--heading-h3-semibold-font-weight)] leading-[var(--heading-h3-semibold-line-height)] tracking-[var(--heading-h3-semibold-letter-spacing)] text-primaryblack [font-style:var(--heading-h3-semibold-font-style)]"
                >
                  Youremail@gmail.com
                </a>
                <a
                  href="tel:1234567890"
                  className="self-stretch font-heading-h3-semibold text-[length:var(--heading-h3-semibold-font-size)] font-[number:var(--heading-h3-semibold-font-weight)] leading-[var(--heading-h3-semibold-line-height)] tracking-[var(--heading-h3-semibold-letter-spacing)] text-primaryblack [font-style:var(--heading-h3-semibold-font-style)]"
                >
                  1234567890
                </a>
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
