import { useState, useRef, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  categoryParentSlug,
  practiceAreas,
  type PracticeArea,
  type PracticeCategory,
} from "../../data/practiceAreas";

const NAVY = "#061B34";
const NAVY_PANEL = "#07223D";
const GOLD = "#D39A2A";

const ChevronDown = ({ open }: { open: boolean }): JSX.Element => (
  <svg
    aria-hidden="true"
    className={`ml-2 h-[10px] w-[10px] shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
);

const ArrowRight = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="ml-2 h-3 w-3 shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} />
  </svg>
);

type CategoryGroup = {
  category: PracticeCategory;
  number: PracticeArea["categoryNumber"];
  parent: PracticeArea;
  children: PracticeArea[];
};

const useCategoryGroups = (): CategoryGroup[] =>
  useMemo(() => {
    const order: PracticeCategory[] = ["RECOVER", "BUILD", "PROTECT", "DEFEND"];
    return order.map((category) => {
      const inCategory = practiceAreas.filter((entry) => entry.category === category);
      const parent = inCategory.find((entry) => entry.slug === categoryParentSlug[category]);
      const children = inCategory.filter((entry) => entry.slug !== categoryParentSlug[category]);
      return {
        category,
        number: parent ? parent.categoryNumber : ("01" as PracticeArea["categoryNumber"]),
        parent: parent!,
        children,
      };
    });
  }, []);

const CapabilitiesMegaMenu = ({ onClose }: { onClose: () => void }): JSX.Element => {
  const groups = useCategoryGroups();

  return (
    <div
      className="absolute left-0 right-0 top-full z-50 border-t border-white/10 shadow-[0_36px_70px_rgba(0,0,0,0.5)]"
      style={{ backgroundColor: NAVY_PANEL }}
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 py-10 sm:px-10 lg:px-16 lg:py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,3fr)] lg:gap-16">
          <div className="flex flex-col justify-between">
            <div>
              <p className="font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.28em] text-[#D39A2A]">
                <span className="mr-3 inline-block h-px w-8 align-middle bg-[#D39A2A]" />
                Capabilities
              </p>
              <h3 className="mt-6 font-serifDisplay text-[26px] font-normal leading-[1.12] tracking-[-0.015em] text-[#F5EFE5]">
                Strategic counsel for serious moments.
              </h3>
              <p className="mt-4 max-w-[280px] font-sans text-[13.5px] leading-[1.6] text-white/60">
                Four core practice categories. Twenty-one focused areas. One firm.
              </p>
            </div>
            <Link
              className="mt-10 inline-flex items-center font-sans text-[12px] font-semibold uppercase tracking-[0.24em] text-[#F5EFE5] transition-colors hover:text-[#D39A2A]"
              onClick={onClose}
              to="/capabilities"
            >
              View all capabilities
              <ArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {groups.map((group) => (
              <div key={group.category} className="flex flex-col">
                <p className="font-sans text-[10.5px] font-semibold uppercase leading-none tracking-[0.24em] text-[#D39A2A]">
                  {group.number} &mdash; {group.category}
                </p>
                <Link
                  className="mt-4 inline-flex items-baseline gap-2 font-serifDisplay text-[19px] font-normal leading-[1.15] tracking-[-0.01em] text-[#F5EFE5] transition-colors hover:text-[#D39A2A]"
                  onClick={onClose}
                  to={`/capabilities/${group.parent.slug}`}
                >
                  {group.parent.name}
                  <span aria-hidden="true" className="text-[#D39A2A]">.</span>
                </Link>

                <div className="mt-5 h-px w-10 bg-white/15" />

                <ul className="mt-5 flex flex-col gap-3">
                  {group.children.map((child) => (
                    <li key={child.slug}>
                      <Link
                        className="group inline-flex items-center font-sans text-[13.5px] leading-[1.45] text-white/75 transition-colors hover:text-[#F5EFE5]"
                        onClick={onClose}
                        to={`/capabilities/${child.slug}`}
                      >
                        <span className="mr-3 inline-block h-px w-0 bg-[#D39A2A] transition-[width] duration-200 group-hover:w-3" />
                        {child.navLabel ?? child.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const NewsInsightsDropdown = ({ onClose }: { onClose: () => void }): JSX.Element => (
  <div
    className="absolute left-0 right-0 top-full z-50 border-t border-white/10 shadow-[0_36px_70px_rgba(0,0,0,0.5)]"
    style={{ backgroundColor: NAVY_PANEL }}
  >
    <div className="mx-auto w-full max-w-[1440px] px-6 py-10 sm:px-10 lg:px-16">
      <p className="font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.28em] text-[#D39A2A]">
        <span className="mr-3 inline-block h-px w-8 align-middle bg-[#D39A2A]" />
        News &amp; Insights
      </p>
      <p className="mt-5 max-w-[640px] font-serifDisplay text-[22px] font-normal leading-[1.2] tracking-[-0.015em] text-[#F5EFE5]">
        Editorials, firm announcements, and field briefings.
      </p>
      <Link
        className="mt-6 inline-flex items-center font-sans text-[12px] font-semibold uppercase tracking-[0.24em] text-[#F5EFE5] transition-colors hover:text-[#D39A2A]"
        onClick={onClose}
        to="/"
      >
        Browse latest
        <ArrowRight />
      </Link>
    </div>
  </div>
);

type DropdownLabel = "CAPABILITIES" | "NEWS & INSIGHTS";

const dropdownLinks: { label: DropdownLabel }[] = [
  { label: "CAPABILITIES" },
  { label: "NEWS & INSIGHTS" },
];

const directLinks: { label: string; to: string }[] = [
  { label: "ABOUT US", to: "/about" },
  { label: "OUR TEAM", to: "/our-people" },
  { label: "GLOBAL REACH", to: "/#global-reach" },
  { label: "CONTACT", to: "/contact" },
];

export const Header = (): JSX.Element => {
  const [openMenu, setOpenMenu] = useState<DropdownLabel | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCapsOpen, setMobileCapsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();

  // Close dropdowns on route change
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileCapsOpen(false);
  }, [location.pathname]);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const groups = useCategoryGroups();

  const toggle = (label: DropdownLabel) =>
    setOpenMenu((prev) => (prev === label ? null : label));

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full border-b border-white/10"
      style={{ backgroundColor: NAVY }}
    >
      <div className="flex h-[72px] w-full items-stretch lg:h-[88px]">
        {/* Logo */}
        <Link
          aria-label="ATLAW home"
          className="flex shrink-0 items-center border-r border-white/10 px-6 lg:px-8"
          onClick={() => setOpenMenu(null)}
          to="/"
        >
          <img alt="ATLAW" className="h-6 w-auto lg:h-7" src="/assets/atlaw logo.svg" />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden flex-1 items-stretch lg:flex">
          {dropdownLinks.map(({ label }) => (
            <button
              aria-expanded={openMenu === label}
              aria-haspopup="true"
              className={`relative flex items-center whitespace-nowrap border-r border-white/10 px-5 font-sans text-[11.5px] font-semibold uppercase tracking-[0.18em] text-[#F5EFE5]/85 transition-all duration-150 hover:text-[#F5EFE5] focus-visible:bg-white/10 focus-visible:outline-none xl:px-6 ${
                openMenu === label ? "bg-white/[0.07] text-[#F5EFE5]" : "hover:bg-white/[0.04]"
              }`}
              key={label}
              onClick={() => toggle(label)}
              type="button"
            >
              {label}
              <ChevronDown open={openMenu === label} />
              {openMenu === label && (
                <span className="absolute bottom-[-1px] left-5 right-5 h-px bg-[#D39A2A]" />
              )}
            </button>
          ))}

          {directLinks.map(({ label, to }) => (
            <Link
              className="relative flex items-center whitespace-nowrap border-r border-white/10 px-5 font-sans text-[11.5px] font-semibold uppercase tracking-[0.18em] text-[#F5EFE5]/85 transition-all duration-150 hover:bg-white/[0.04] hover:text-[#F5EFE5] focus-visible:bg-white/10 focus-visible:outline-none xl:px-6"
              key={label}
              onClick={() => setOpenMenu(null)}
              to={to}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Spacer */}
        <div className="hidden flex-1 lg:flex" />

        {/* I NEED HELP CTA */}
        <Link
          aria-label="I need help — contact ATLAW"
          className="hidden items-center whitespace-nowrap px-7 font-sans text-[11.5px] font-semibold uppercase tracking-[0.22em] transition-all duration-150 hover:bg-[#0E2C4F] focus-visible:outline-none focus-visible:bg-[#0E2C4F] lg:flex"
          onClick={() => setOpenMenu(null)}
          style={{
            backgroundColor: "rgba(211,154,42,0.06)",
            color: GOLD,
            borderLeft: "1px solid rgba(211,154,42,0.5)",
          }}
          to="/contact"
        >
          I need help
          <span aria-hidden="true" className="ml-2">→</span>
        </Link>

        {/* Mobile menu button */}
        <button
          aria-controls="atlaw-mobile-nav"
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
          className="ml-auto flex items-center px-5 text-[#F5EFE5] focus-visible:outline-none focus-visible:bg-white/10 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          type="button"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" strokeWidth={1.8} />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeWidth={1.8} />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop dropdowns */}
      {openMenu === "CAPABILITIES" && <CapabilitiesMegaMenu onClose={() => setOpenMenu(null)} />}
      {openMenu === "NEWS & INSIGHTS" && <NewsInsightsDropdown onClose={() => setOpenMenu(null)} />}

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile primary"
          className="border-t border-white/10 lg:hidden"
          id="atlaw-mobile-nav"
          style={{ backgroundColor: NAVY }}
        >
          <div className="max-h-[calc(100vh-72px)] overflow-y-auto px-5 pb-8 pt-3">
            {/* Capabilities collapsible */}
            <button
              aria-controls="atlaw-mobile-caps"
              aria-expanded={mobileCapsOpen}
              className="flex w-full items-center justify-between border-b border-white/10 py-4 text-left font-sans text-[12px] font-semibold uppercase tracking-[0.22em] text-[#F5EFE5]"
              onClick={() => setMobileCapsOpen((v) => !v)}
              type="button"
            >
              Capabilities
              <ChevronDown open={mobileCapsOpen} />
            </button>
            {mobileCapsOpen && (
              <div className="border-b border-white/10 py-4" id="atlaw-mobile-caps">
                {groups.map((group) => (
                  <div className="mb-6" key={group.category}>
                    <p className="font-sans text-[10.5px] font-semibold uppercase tracking-[0.24em] text-[#D39A2A]">
                      {group.number} &mdash; {group.category}
                    </p>
                    <Link
                      className="mt-3 block font-serifDisplay text-[18px] leading-[1.2] tracking-[-0.01em] text-[#F5EFE5]"
                      onClick={() => setMobileOpen(false)}
                      to={`/capabilities/${group.parent.slug}`}
                    >
                      {group.parent.name}
                    </Link>
                    <ul className="mt-3 flex flex-col gap-2.5 pl-1">
                      {group.children.map((child) => (
                        <li key={child.slug}>
                          <Link
                            className="block font-sans text-[13.5px] leading-[1.45] text-white/75"
                            onClick={() => setMobileOpen(false)}
                            to={`/capabilities/${child.slug}`}
                          >
                            {child.navLabel ?? child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <Link
                  className="mt-2 inline-flex items-center font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D39A2A]"
                  onClick={() => setMobileOpen(false)}
                  to="/capabilities"
                >
                  View all capabilities <ArrowRight />
                </Link>
              </div>
            )}

            {/* News & Insights */}
            <Link
              className="block border-b border-white/10 py-4 font-sans text-[12px] font-semibold uppercase tracking-[0.22em] text-[#F5EFE5]"
              onClick={() => setMobileOpen(false)}
              to="/"
            >
              News &amp; Insights
            </Link>

            {directLinks.map(({ label, to }) => (
              <Link
                className="block border-b border-white/10 py-4 font-sans text-[12px] font-semibold uppercase tracking-[0.22em] text-[#F5EFE5]"
                key={label}
                onClick={() => setMobileOpen(false)}
                to={to}
              >
                {label}
              </Link>
            ))}

            <Link
              className="mt-6 flex items-center justify-center px-6 py-4 font-sans text-[12px] font-semibold uppercase tracking-[0.22em]"
              onClick={() => setMobileOpen(false)}
              style={{
                backgroundColor: "rgba(211,154,42,0.08)",
                color: GOLD,
                border: "1px solid rgba(211,154,42,0.5)",
              }}
              to="/contact"
            >
              I need help <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};
