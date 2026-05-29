import { useState } from "react";
import { Header } from "../components/ATLAW/Header";
import { Footer } from "../components/ATLAW/Footer";

const reasons = [
  "Business Law",
  "Estate Planning",
  "Corporate Law",
  "Real Estate",
  "Immigration",
  "General Inquiry",
];

type InfoBlock = { label: string; value: string };

const infoBlocks: InfoBlock[] = [
  { label: "PHONE", value: "+1 (313) 406-7606" },
  { label: "EMAIL", value: "info@atlawgroup.com" },
  { label: "OFFICE HOURS", value: "Monday - Friday, 8:30 am to 5:00 pm" },
  {
    label: "HEADQUARTERS",
    value: "3 Park Ln Blvd Suite 1500, Dearborn, MI 48126",
  },
];

const ContactForm = (): JSX.Element => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: connect form handler to backend / mail service
    setSubmitting(true);
    setTimeout(() => setSubmitting(false), 600);
  };

  const fieldClass =
    "h-[54px] w-full rounded-[10px] border border-[#091F3C]/15 bg-white/55 px-[18px] text-[15px] text-[#071B35] placeholder:text-[#7C8796] outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 focus:bg-white";

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[560px] rounded-[28px] border border-[#0A1E37]/10 bg-white/70 p-7 shadow-[0_24px_60px_rgba(0,0,0,0.10)] backdrop-blur-sm md:p-12"
    >
      <p className="text-[13px] font-bold uppercase tracking-[0.35em] text-[#5F6B7A]">
        CONTACT
      </p>

      <div className="mt-7 space-y-[18px]">
        <label className="block">
          <span className="sr-only">Name</span>
          <input
            className={fieldClass}
            placeholder="Name"
            name="name"
            type="text"
            autoComplete="name"
            required
          />
        </label>

        <label className="block">
          <span className="sr-only">Email</span>
          <input
            className={fieldClass}
            placeholder="Email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </label>

        <label className="relative block">
          <span className="sr-only">Select reason</span>
          <select
            className={`${fieldClass} appearance-none pr-12`}
            name="reason"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select reason
            </option>
            {reasons.map((reason) => (
              <option key={reason} value={reason}>
                {reason}
              </option>
            ))}
          </select>
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute right-[18px] top-1/2 h-3 w-3 -translate-y-1/2 text-[#7C8796]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M19 9l-7 7-7-7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
        </label>

        <label className="block">
          <span className="sr-only">Message</span>
          <textarea
            className="min-h-[140px] w-full resize-y rounded-[10px] border border-[#091F3C]/15 bg-white/55 px-[18px] py-[14px] text-[15px] text-[#071B35] placeholder:text-[#7C8796] outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 focus:bg-white"
            placeholder="Message"
            name="message"
            rows={5}
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="group mt-3 inline-flex h-[52px] w-[190px] items-center justify-center rounded-full bg-[#031B39] px-7 text-[15px] font-medium text-white transition duration-200 hover:bg-[#0A2C57] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-70"
      >
        Send Message
        <span className="ml-2 transition duration-200 group-hover:translate-x-1">
          &rarr;
        </span>
      </button>
    </form>
  );
};

const ContactInfo = (): JSX.Element => (
  <div className="w-full max-w-[620px]">
    <h1 className="font-serifDisplay text-[44px] leading-[1.02] tracking-[-0.02em] text-[#071B35] sm:text-[58px] lg:text-[78px]">
      Let&apos;s Talk About
      <br />
      What&apos;s Next.
    </h1>

    <p className="mt-6 max-w-[560px] text-[17px] leading-[1.55] text-[#526174] md:text-[18px]">
      Tell us about your goals and challenges. ATLAW is here to help you find
      the right legal guidance and solutions.
    </p>

    <div className="my-[34px] h-px w-full bg-[#091F3C]/15" />

    <dl className="space-y-[22px]">
      {infoBlocks.map((block) => (
        <div key={block.label}>
          <dt className="text-[12px] font-bold uppercase tracking-[0.28em] text-[#667384]">
            {block.label}
          </dt>
          <dd className="mt-[7px] text-[16px] font-medium leading-[1.45] text-[#071B35]">
            {block.value}
          </dd>
        </div>
      ))}
    </dl>
  </div>
);

export const ContactPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-ivory text-ink [zoom:1.12]">
      <Header />
      <main>
        <section
          aria-labelledby="contact-heading"
          className="relative bg-[#FFFFFF]"
        >
          {/* subtle warmth */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,237,210,0.45),transparent_55%)]"
          />

          <div className="relative mx-auto w-full max-w-[1500px] px-5 py-12 sm:px-10 md:py-16 lg:px-[120px] lg:pt-[70px] lg:pb-[55px]">
            <div className="grid gap-12 md:grid-cols-[480px_1fr] md:gap-12 lg:grid-cols-[560px_1fr] lg:gap-20">
              <div className="order-2 flex justify-start md:order-1 md:pt-[65px]">
                <ContactForm />
              </div>
              <div className="order-1 md:order-2">
                <span id="contact-heading" className="sr-only">
                  Contact ATLAW
                </span>
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
