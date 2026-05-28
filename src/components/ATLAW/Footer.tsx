import { useState } from "react";
import { Link } from "react-router-dom";

/* ────────────────────────────────────────────────────────────────────────────
   ATLAW global footer — dark editorial direction.
   Matches the "editorial law as quiet authority" system established by the Hero
   and the "06 — Final CTA" section that sits directly above it (also navy):
   deep-navy canvas, white ink, hairline amber micro-accents, serif display.
   Tokens: navy canvas #0B1F3A · white text (with /75, /55 mutes) · amber #B88A2D.
   ──────────────────────────────────────────────────────────────────────────── */

// Same film grain used across the page so the footer reads as one canvas.
const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

// Fraunces variable axes for the display lockup (mirrors Hero / Final CTA).
const headlineAxes = "'opsz' 144, 'wght' 380, 'SOFT' 30, 'WONK' 0";

type NavLink = { label: string; to: string; external?: boolean };
type NavGroup = { title: string; links: NavLink[] };

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
      { label: "Connect With Us", to: "/contact" },
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

const navLinkClass =
  "inline-block font-sans text-[15px] leading-[1.45] text-white/75 transition-colors duration-200 hover:text-[#B88A2D] focus-visible:outline-none focus-visible:text-[#B88A2D]";

const renderNavLink = (link: NavLink): JSX.Element => {
  if (link.external) {
    return (
      <a
        href={link.to}
        target="_blank"
        rel="noopener noreferrer"
        className={navLinkClass}
      >
        {link.label}
      </a>
    );
  }
  return (
    <Link to={link.to} className={navLinkClass}>
      {link.label}
    </Link>
  );
};

/* ── Icons — drawn in amber to stay within the micro-accent discipline ── */

const PhoneIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="h-[17px] w-[17px] shrink-0 text-[#B88A2D]"
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

const MailIcon = ({ className = "h-[17px] w-[17px]" }: { className?: string }): JSX.Element => (
  <svg
    aria-hidden="true"
    className={`${className} shrink-0`}
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

const PinIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="h-[17px] w-[17px] shrink-0 text-[#B88A2D]"
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

const ArrowRight = ({ className = "" }: { className?: string }): JSX.Element => (
  <svg
    aria-hidden="true"
    className={`h-[14px] w-[14px] transition-transform duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M5 12h14M13 5l7 7-7 7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

const NewsletterForm = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire to the firm's newsletter integration when available.
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full" aria-label="Newsletter signup">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-3">
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
          className="h-[54px] w-full rounded-full border border-white/25 bg-white/10 px-6 font-sans text-[15px] text-white placeholder:text-white/50 outline-none transition focus:border-[#B88A2D] focus:ring-2 focus:ring-[#B88A2D]/30 sm:w-[260px] lg:w-[280px]"
        />
        <button
          type="submit"
          className="group inline-flex h-[54px] shrink-0 items-center justify-center rounded-full bg-white px-8 font-sans text-[15px] font-medium text-[#0B1F3A] transition-all duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#F4EFE6] hover:shadow-[0_8px_24px_rgba(0,0,0,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88A2D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1F3A]"
        >
          Subscribe
          <ArrowRight className="ml-2 group-hover:translate-x-1" />
        </button>
      </div>

      <p
        aria-live="polite"
        className={`mt-2.5 text-[13px] transition ${
          status === "idle" ? "h-0 overflow-hidden opacity-0" : "opacity-100"
        } ${status === "success" ? "text-[#86D996]" : ""} ${
          status === "error" ? "text-[#F2A3A9]" : ""
        }`}
      >
        {status === "success" && "Thank you — you're on the list."}
        {status === "error" && "Please enter a valid email address."}
      </p>
    </form>
  );
};

export const Footer = (): JSX.Element => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative isolate w-full overflow-hidden bg-[#0B1F3A] text-white"
      aria-labelledby="site-footer-heading"
    >
      <h2 id="site-footer-heading" className="sr-only">
        ATLAW site footer
      </h2>

      {/* ── Decorative layers (behind everything) ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none"
      >
        {/* subtle grain overlay on the navy canvas */}
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{ backgroundImage: grain }}
        />
        {/* faint curved linework sweeping in from the right */}
        <svg
          className="absolute inset-0 hidden h-full w-full md:block"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1440 900"
        >
          <g className="opacity-[0.13]" stroke="#B88A2D" strokeWidth="1">
            <path d="M1640 120 C 1180 300 980 200 640 360" />
            <path d="M1640 40 C 1220 220 1020 130 700 260" />
          </g>
          <g className="opacity-[0.07]" stroke="#FFFFFF" strokeWidth="1">
            <path d="M1660 860 C 1200 700 980 800 560 660" />
          </g>
        </svg>
        {/* oversized ghost ATLAW wordmark behind the newsletter / bottom rows */}
        <span
          className="absolute bottom-[-3%] left-1/2 hidden -translate-x-1/2 whitespace-nowrap font-serifDisplay font-normal uppercase leading-none tracking-[-0.045em] text-white opacity-[0.025] md:block"
          style={{ fontVariationSettings: headlineAxes, fontSize: "clamp(160px, 26vw, 460px)" }}
        >
          ATLAW
        </span>
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-6 pb-12 pt-[88px] sm:px-10 md:pb-14 md:pt-[112px] lg:px-16">
        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-[1.65fr_1fr_1fr_1fr_1.35fr] lg:gap-y-0">
          {/* Brand block */}
          <div className="sm:col-span-2 lg:col-span-1 lg:pr-8">
            <Link to="/" className="inline-flex items-center" aria-label="ATLAW home">
              <img
                alt="ATLAW"
                className="h-8 w-auto md:h-9"
                src="/assets/atlaw-wordmark.svg"
              />
            </Link>
            <div className="mt-5 h-px w-14 bg-[#B88A2D]/70" />
            <p className="mt-6 max-w-[320px] font-sans text-[14.5px] leading-[1.65] text-white/75">
              A boutique law firm built on trust, strategy, and results. We connect
              every client with the right attorney for the issue in front of them.
            </p>
          </div>

          {/* Nav groups */}
          {navGroups.map((group, idx) => (
            <nav
              key={group.title}
              aria-label={group.title}
              className={`min-w-0 ${
                idx === 0 ? "lg:border-l lg:border-white/[0.12] lg:pl-8" : ""
              }`}
            >
              <h4 className="font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-[#B88A2D]">
                {group.title}
              </h4>
              <ul className="mt-6 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>{renderNavLink(link)}</li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-1 lg:border-l lg:border-white/[0.12] lg:pl-8">
            <h4 className="font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-[#B88A2D]">
              TALK TO US
            </h4>
            <address className="mt-6 not-italic">
              <ul className="space-y-3.5">
                <li>
                  <a
                    href="tel:+13134067606"
                    className="group inline-flex items-center gap-2.5 font-sans text-[15px] leading-[1.4] text-white transition hover:text-[#B88A2D]"
                  >
                    <PhoneIcon />
                    +1 (313) 406-7606
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@atlawgroup.com"
                    className="group inline-flex items-center gap-2.5 font-sans text-[15px] leading-[1.4] text-white transition hover:text-[#B88A2D]"
                  >
                    <MailIcon className="h-[17px] w-[17px] text-[#B88A2D]" />
                    info@atlawgroup.com
                  </a>
                </li>
              </ul>

              <div className="my-6 h-px w-full bg-[#B88A2D]/25" />

              <div className="flex items-start gap-2.5">
                <span className="mt-0.5">
                  <PinIcon />
                </span>
                <div>
                  <p className="font-sans text-[13px] leading-[1.4] text-white/55">
                    Headquarters:
                  </p>
                  <p className="font-sans text-[15px] leading-[1.5] text-white">
                    Detroit, MI
                  </p>
                  <a
                    href={MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-1.5 inline-flex items-center font-sans text-[14px] font-medium text-[#B88A2D] transition hover:text-white"
                  >
                    View on map
                    <span className="ml-1.5 transition duration-200 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* ── Newsletter bar ── */}
        <div className="mt-16 flex flex-col gap-7 rounded-2xl border border-[#B88A2D]/35 bg-white/[0.05] px-6 py-7 md:mt-20 md:flex-row md:items-center md:justify-between md:gap-10 md:px-10 md:py-8">
          <div className="flex items-center gap-5">
            <span
              aria-hidden="true"
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#B88A2D]/50 text-[#B88A2D]"
            >
              <MailIcon className="h-6 w-6" />
            </span>
            <div>
              <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-[#B88A2D]">
                Stay Informed
              </p>
              <p className="mt-1.5 max-w-[420px] font-sans text-[14.5px] leading-[1.55] text-white/75">
                Insights, news, and firm announcements, delivered monthly.
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <NewsletterForm />
          </div>
        </div>

        {/* ── Bottom row ── */}
        <div className="mt-12 border-t border-[#B88A2D]/20 pt-7">
          <div className="flex flex-col items-center gap-5 text-center lg:flex-row lg:justify-between lg:gap-8 lg:text-left">
            <p className="order-3 font-sans text-[13px] text-white/55 lg:order-1">
              &copy; {year} ATLAW. All rights reserved.
            </p>

            <ul className="order-1 flex flex-wrap items-center justify-center gap-y-2 lg:order-2">
              {socialLinks.map((social, idx) => (
                <li key={social.label} className="flex items-center">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-[13px] text-white/75 transition hover:text-[#B88A2D]"
                  >
                    {social.label}
                  </a>
                  {idx < socialLinks.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="mx-3 inline-block h-1 w-1 rounded-full bg-[#B88A2D]/60"
                    />
                  )}
                </li>
              ))}
            </ul>

            <ul className="order-2 flex flex-wrap items-center justify-center gap-y-2 lg:order-3">
              {legalLinks.map((link, idx) => (
                <li key={link.label} className="flex items-center">
                  <Link
                    to={link.to}
                    className="font-sans text-[13px] text-white/55 transition hover:text-[#B88A2D]"
                  >
                    {link.label}
                  </Link>
                  {idx < legalLinks.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="mx-3 inline-block h-1 w-1 rounded-full bg-[#B88A2D]/60"
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
