import { useState } from "react";
import { Link } from "react-router-dom";

type NavLink = {
  label: string;
  to: string;
  external?: boolean;
};

type NavGroup = {
  title: string;
  links: NavLink[];
};

const navGroups: NavGroup[] = [
  {
    title: "CAPABILITIES",
    links: [
      { label: "Advisory", to: "/advisory" },
      { label: "Litigation", to: "/litigation" },
      { label: "Transactions", to: "/transactions" },
      {
        label: "Healthcare",
        to: "https://www.atlahealthcare.com/",
        external: true,
      },
      { label: "Global Reach", to: "/global-reach" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About", to: "/about" },
      { label: "Our People", to: "/our-people" },
      { label: "Careers", to: "/careers" },
      { label: "Connect With Us", to: "/connect" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "News & Insights", to: "/news-insights" },
      { label: "Consumer Insights", to: "/consumer-insights" },
      { label: "Business Insights", to: "/business-insights" },
      { label: "C-Level Insights", to: "/c-level-insights" },
    ],
  },
];

const socialLinks: { label: string; href: string }[] = [
  { label: "Instagram", href: "https://www.instagram.com/atlawgroup/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/at-law-group/" },
  { label: "Facebook", href: "https://www.facebook.com/atlawgroup/" },
];

const legalLinks: { label: string; to: string }[] = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Use", to: "/terms" },
  { label: "Attorney Advertising", to: "/attorney-advertising" },
  { label: "Disclaimer", to: "/disclaimer" },
];

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=3+Park+Ln+Blvd+Suite+1500%2C+Dearborn%2C+MI+48126";

const renderNavLink = (link: NavLink) => {
  const baseClass =
    "inline-block text-[17px] leading-[2] text-[#F7F3EA] transition-colors duration-200 hover:text-[#6EA4E8] focus-visible:outline-none focus-visible:text-[#6EA4E8] md:text-[18px]";

  if (link.external) {
    return (
      <a
        href={link.to}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
      >
        {link.label}
      </a>
    );
  }

  return (
    <Link to={link.to} className={baseClass}>
      {link.label}
    </Link>
  );
};

const MailIcon = () => (
  <svg
    aria-hidden="true"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M3 8l9 6 9-6M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.4}
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    aria-hidden="true"
    className="h-[18px] w-[18px] shrink-0 text-[#F7F3EA]/70"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M3 5.5A2.5 2.5 0 015.5 3h1.4a1 1 0 01.97.757l.94 3.76a1 1 0 01-.27.96l-1.5 1.5a13 13 0 006 6l1.5-1.5a1 1 0 01.96-.27l3.76.94a1 1 0 01.76.97V18.5A2.5 2.5 0 0118.5 21h-.5C9.716 21 3 14.284 3 6v-.5z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.4}
    />
  </svg>
);

const EmailIcon = () => (
  <svg
    aria-hidden="true"
    className="h-[18px] w-[18px] shrink-0 text-[#F7F3EA]/70"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M3 8l9 6 9-6M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.4}
    />
  </svg>
);

const PinIcon = () => (
  <svg
    aria-hidden="true"
    className="h-[18px] w-[18px] shrink-0 text-[#F7F3EA]/70"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.4}
    />
    <circle cx="12" cy="9" r="2.5" strokeWidth={1.4} />
  </svg>
);

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire to existing newsletter integration when available
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full"
      aria-label="Newsletter signup"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-0">
        <input
          id="newsletter-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          className="h-[58px] w-full rounded-full border border-white/20 bg-white/[0.04] px-7 text-[16px] text-[#F7F3EA] placeholder:text-white/55 outline-none transition focus:border-[#6EA4E8] focus:ring-2 focus:ring-[#6EA4E8]/30 sm:rounded-l-full sm:rounded-r-none sm:border-r-0 md:h-[62px] md:text-[17px]"
        />
        <button
          type="submit"
          className="group inline-flex h-[58px] items-center justify-center rounded-full bg-[#F7F3EA] px-8 text-[16px] font-semibold text-[#071B33] transition duration-200 hover:bg-white hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6EA4E8] sm:rounded-l-none sm:rounded-r-full md:h-[62px] md:px-10"
        >
          Subscribe
          <span className="ml-2 transition duration-200 group-hover:translate-x-1">
            &rarr;
          </span>
        </button>
      </div>

      <p
        aria-live="polite"
        className={`mt-3 text-[13px] transition ${
          status === "idle" ? "h-0 overflow-hidden opacity-0" : "opacity-100"
        } ${status === "success" ? "text-[#A7D08A]" : ""} ${
          status === "error" ? "text-[#E89AA1]" : ""
        }`}
      >
        {status === "success" &&
          "Thank you! Your submission has been received."}
        {status === "error" &&
          "Oops! Something went wrong while submitting the form."}
      </p>
    </form>
  );
};

export const Footer = (): JSX.Element => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer
        className="relative isolate overflow-hidden bg-[#071B33] text-[#F7F3EA]"
        aria-labelledby="site-footer-heading"
      >
        <h2 id="site-footer-heading" className="sr-only">
          ATLAW site footer
        </h2>

        {/* Decorative layers */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 select-none"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #071B33 0%, #06182D 55%, #050F22 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 55% at 70% 45%, rgba(110, 164, 232, 0.07), transparent 70%)",
            }}
          />
          {/* faint oversized ATLAW watermark */}
          <span
            className="absolute -bottom-4 left-[-2vw] hidden whitespace-nowrap font-serifDisplay font-normal uppercase tracking-[-0.04em] text-white opacity-[0.035] md:block"
            style={{ fontSize: "clamp(160px, 22vw, 360px)", lineHeight: 0.8 }}
          >
            ATLAW
          </span>
          {/* faint globe / network arcs */}
          <svg
            className="absolute right-[-6%] top-1/2 hidden h-[640px] w-[640px] -translate-y-1/2 opacity-[0.08] lg:block"
            fill="none"
            viewBox="0 0 640 640"
          >
            <circle cx="320" cy="320" r="300" stroke="#F7F3EA" strokeWidth="1" />
            <circle cx="320" cy="320" r="220" stroke="#F7F3EA" strokeWidth="1" />
            <ellipse
              cx="320"
              cy="320"
              rx="300"
              ry="120"
              stroke="#F7F3EA"
              strokeWidth="1"
            />
            <ellipse
              cx="320"
              cy="320"
              rx="300"
              ry="200"
              stroke="#F7F3EA"
              strokeWidth="1"
            />
            <ellipse
              cx="320"
              cy="320"
              rx="180"
              ry="300"
              stroke="#F7F3EA"
              strokeWidth="1"
            />
            <path
              d="M 60 380 C 240 220, 440 200, 600 300"
              stroke="#6EA4E8"
              strokeDasharray="2 6"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-12 pt-20 sm:px-10 md:pb-14 md:pt-[110px] lg:px-[72px]">
          {/* Row 1 — main grid */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.25fr] lg:gap-14 xl:gap-20">
            {/* Brand */}
            <div className="md:col-span-2 lg:col-span-1">
              <Link to="/" className="inline-flex items-center" aria-label="ATLAW home">
                <img
                  alt="ATLAW"
                  className="h-8 w-auto md:h-9"
                  src="/assets/atlaw-wordmark.svg"
                />
              </Link>
              <p className="mt-8 max-w-[420px] font-sans text-[16px] leading-[1.55] text-white/72 md:text-[17px]">
                A global law firm using advanced technology and data to provide
                expert legal services and solutions.
              </p>
            </div>

            {/* Nav groups */}
            {navGroups.map((group) => (
              <nav
                key={group.title}
                aria-label={group.title}
                className="min-w-0"
              >
                <h3 className="text-[12px] font-bold uppercase tracking-[0.22em] text-white/56 md:text-[13px]">
                  {group.title}
                </h3>
                <ul className="mt-7 space-y-0 md:mt-8">
                  {group.links.map((link) => (
                    <li key={link.label}>{renderNavLink(link)}</li>
                  ))}
                </ul>
              </nav>
            ))}

            {/* Contact */}
            <div className="relative md:col-span-2 lg:col-span-1 lg:border-l lg:border-white/[0.18] lg:pl-12">
              <h3 className="text-[12px] font-bold uppercase tracking-[0.22em] text-white/56 md:text-[13px]">
                TALK TO US
              </h3>
              <ul className="mt-7 space-y-[14px] md:mt-8">
                <li>
                  <a
                    href="tel:+13134067606"
                    className="group inline-flex items-center gap-3 text-[17px] leading-[1.7] text-[#F7F3EA] transition hover:text-[#6EA4E8] md:text-[18px]"
                  >
                    <PhoneIcon />
                    +1 (313) 406-7606
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@atlawgroup.com"
                    className="group inline-flex items-center gap-3 text-[17px] leading-[1.7] text-[#F7F3EA] transition hover:text-[#6EA4E8] md:text-[18px]"
                  >
                    <EmailIcon />
                    info@atlawgroup.com
                  </a>
                </li>
              </ul>

              <div className="my-7 h-px w-full bg-white/[0.16]" />

              <div className="flex items-start gap-3">
                <PinIcon />
                <div>
                  <p className="text-[17px] leading-[1.5] text-[#F7F3EA] md:text-[18px]">
                    Headquarters: Detroit, MI
                  </p>
                  <a
                    href={MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-1 inline-flex items-center text-[15px] font-medium text-[#6EA4E8] transition hover:text-white md:text-[16px]"
                  >
                    View on map
                    <span className="ml-1.5 transition duration-200 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 — newsletter */}
          <div className="mt-16 grid grid-cols-1 gap-8 border-y border-white/[0.14] py-10 md:mt-20 md:grid-cols-[1fr_auto] md:items-center md:gap-12 md:py-12">
            <div className="flex items-start gap-5 md:items-center">
              <span
                aria-hidden="true"
                className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full border border-white/20 text-[#F7F3EA] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] md:h-[64px] md:w-[64px]"
              >
                <MailIcon />
              </span>
              <div>
                <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-[#F7F3EA] md:text-[14px]">
                  Subscribe to our newsletter
                </p>
                <p className="mt-2 max-w-[520px] font-sans text-[15px] leading-[1.55] text-white/70 md:text-[16px]">
                  Insights, news, and firm announcements, delivered monthly.
                </p>
              </div>
            </div>

            <div className="w-full md:w-[480px] lg:w-[540px]">
              <NewsletterForm />
            </div>
          </div>

          {/* Row 3 — bottom legal/social */}
          <div className="mt-10 flex flex-col items-start gap-6 md:mt-10 md:flex-row md:items-center md:justify-between md:gap-8">
            <p className="text-[13px] text-white/62 md:text-[14px]">
              &copy; {year} ATLAW. All rights reserved.
            </p>

            <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-white/72 transition hover:text-[#6EA4E8] md:text-[14px]"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>

            <ul className="flex flex-wrap items-center gap-y-2 text-[13px] text-white/62 md:text-[14px]">
              {legalLinks.map((link, idx) => (
                <li key={link.label} className="flex items-center">
                  <Link
                    to={link.to}
                    className="transition hover:text-[#6EA4E8]"
                  >
                    {link.label}
                  </Link>
                  {idx < legalLinks.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="mx-3 inline-block h-1 w-1 rounded-full bg-white/30"
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
