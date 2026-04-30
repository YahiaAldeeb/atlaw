import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const capabilitiesCol1 = [
  "Compensation",
  "Employee Benefits",
  "Franchising & Scaling",
  "Government Relations & Policy",
  "Impact & ESG",
  "Mergers & Acquisitions",
  "Planning",
  "Privacy & Cybersecurity",
  "Recovery & Renewal",
  "Residency",
  "Trusts & Estate",
];

const capabilitiesCol2 = [
  "Corporate Counseling & Governance",
  "Executive & Equity",
  "Government Funding & Grants",
  "Immigration & Global Mobility",
  "IP Counseling & Prosecution",
  "Non-governmental Organizations",
  "Post-Pandemic Recovery & Renewal",
  "Real Estate Investing",
  "Remote Workforces",
  "Trade Secrets & Non-Competes",
];

const ChevronDown = () => (
  <svg className="ml-1.5 h-3 w-3 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} />
  </svg>
);

const ArrowRight = () => (
  <svg className="ml-1 h-3 w-3 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
);

const CapabilitiesMegaMenu = ({ onClose }: { onClose: () => void }) => (
  <div className="absolute left-0 top-full w-full bg-white shadow-xl border-t border-gray-100 z-50">
    <div className="flex min-h-[420px]">
      {/* left panel — description */}
      <div className="w-72 shrink-0 bg-[#f5f7fa] px-8 py-10 flex flex-col justify-between border-r border-gray-200">
        <div>
          <p className="text-sm leading-relaxed text-[#1a2a4a]/80">
            ATLAW is a global law firm that uses advanced technology and data to provide expert legal
            services and solutions. Our goal is to help clients create value and achieve their
            business goals.
          </p>
        </div>
        <Link
          className="mt-8 inline-flex items-center justify-between rounded bg-[#1a3a7c] px-5 py-3 text-sm font-semibold text-white hover:bg-[#162f69] transition"
          onClick={onClose}
          to="/capabilities"
        >
          Explore Capabilities
          <span className="ml-2">→</span>
        </Link>
      </div>

      {/* categories column */}
      <div className="w-52 shrink-0 px-8 py-10 border-r border-gray-100">
        <div className="flex flex-col gap-8">
          {["ADVISORY", "LITIGATION", "TRANSACTIONS"].map((cat) => (
            <Link
              className="flex items-center text-sm font-semibold tracking-widest text-[#1a3a7c] hover:text-[#162f69] transition"
              key={cat}
              onClick={onClose}
              to="/"
            >
              {cat} <ArrowRight />
            </Link>
          ))}
        </div>
      </div>

      {/* capability links col 1 */}
      <div className="flex-1 px-8 py-10 border-r border-gray-100">
        <ul className="flex flex-col gap-3">
          {capabilitiesCol1.map((item) => (
            <li key={item}>
              <Link
                className="flex items-center justify-between text-sm text-[#1a3a7c] hover:text-[#162f69] transition group"
                onClick={onClose}
                to="/"
              >
                {item}
                <span className="text-gray-400 group-hover:text-[#1a3a7c] transition">›</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* capability links col 2 */}
      <div className="flex-1 px-8 py-10">
        <ul className="flex flex-col gap-3">
          {capabilitiesCol2.map((item) => (
            <li key={item}>
              <Link
                className="flex items-center justify-between text-sm text-[#1a3a7c] hover:text-[#162f69] transition group"
                onClick={onClose}
                to="/"
              >
                {item}
                <span className="text-gray-400 group-hover:text-[#1a3a7c] transition">›</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const dropdownLinks = [
  { label: "CAPABILITIES", hasDropdown: true },
  { label: "NEWS & INSIGHTS", hasDropdown: true },
] as const;

const directLinks = [
  { label: "ABOUT US", to: "/about" },
  { label: "OUR TEAM", to: "/our-people" },
  { label: "GLOBAL REACH", to: "/" },
  { label: "CONTACT", to: "/" },
] as const;

export const Header = (): JSX.Element => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const toggle = (label: string) =>
    setOpenMenu((prev) => (prev === label ? null : label));

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-[#0d1b2e]">
      <div className="flex w-full items-stretch">
        {/* logo */}
        <Link
          className="flex items-center px-6 py-4 shrink-0 border-r border-white/10"
          to="/"
          onClick={() => setOpenMenu(null)}
        >
          <img alt="ATLAW" className="h-7 w-auto" src="/assets/atlaw logo.svg" />
        </Link>

        {/* nav items */}
        <nav className="hidden md:flex items-stretch flex-1">
          {/* dropdown buttons */}
          {dropdownLinks.map(({ label }) => (
            <button
              key={label}
              type="button"
              onClick={() => toggle(label)}
              className={`relative flex items-center px-4 text-xs font-semibold tracking-[0.12em] text-white/90 hover:text-white transition border-r border-white/10 focus-visible:outline-none whitespace-nowrap ${
                openMenu === label ? "bg-white/8" : "hover:bg-white/5"
              }`}
            >
              {label}
              <ChevronDown />
              {openMenu === label && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
              )}
            </button>
          ))}

          {/* direct links */}
          {directLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              onClick={() => setOpenMenu(null)}
              className="relative flex items-center px-4 text-xs font-semibold tracking-[0.12em] text-white/90 hover:text-white hover:bg-white/5 transition border-r border-white/10 focus-visible:outline-none whitespace-nowrap"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* spacer */}
        <div className="hidden md:flex flex-1" />

        {/* I NEED HELP button */}
        <Link
          to="/"
          onClick={() => setOpenMenu(null)}
          className="hidden md:flex items-center px-8 text-xs font-semibold tracking-[0.15em] text-white/90 hover:text-white bg-[#1a2e4a] hover:bg-[#1e3555] border-l border-white/10 transition"
        >
          I NEED HELP <span className="ml-2">→</span>
        </Link>

        {/* mobile hamburger */}
        <button
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          className="md:hidden ml-auto flex items-center px-4 text-white"
          onClick={() => setMobileOpen((v) => !v)}
          type="button"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeWidth={1.8} />
          </svg>
        </button>
      </div>

      {/* mega menus */}
      {openMenu === "CAPABILITIES" && (
        <CapabilitiesMegaMenu onClose={() => setOpenMenu(null)} />
      )}
      {openMenu === "NEWS & INSIGHTS" && (
        <div className="absolute left-0 top-full w-full bg-white shadow-xl border-t border-gray-100 z-50 px-10 py-8">
          <p className="text-sm text-[#1a3a7c]">News & Insights coming soon.</p>
        </div>
      )}

      {/* mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-white/10 bg-[#0d1b2e] px-4 py-4 flex flex-col gap-3 text-sm text-white">
          {dropdownLinks.map(({ label }) => (
            <button
              key={label}
              type="button"
              className="text-left px-2 py-2 text-xs font-semibold tracking-widest text-white/80 hover:text-white transition"
              onClick={() => { toggle(label); setMobileOpen(false); }}
            >
              {label}
            </button>
          ))}
          {directLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="px-2 py-2 text-xs font-semibold tracking-widest text-white/80 hover:text-white transition"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            className="mt-2 rounded bg-[#1a3a7c] px-4 py-3 text-center text-xs font-semibold tracking-widest text-white"
            onClick={() => setMobileOpen(false)}
            to="/"
          >
            I NEED HELP →
          </Link>
        </nav>
      )}
    </header>
  );
};
