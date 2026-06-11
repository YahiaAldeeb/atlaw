import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "../../motion/config";
import {
  NAVY,
  GOLD,
  directLinks,
  dropdownLinks,
  type DropdownLabel,
} from "../../data/navigation";
import { ChevronDown } from "./header/Icons";
import { useCategoryGroups } from "./header/useCategoryGroups";
import { CapabilitiesMegaMenu } from "./header/CapabilitiesMegaMenu";
import { NewsInsightsDropdown } from "./header/NewsInsightsDropdown";
import { MobileDrawer } from "./header/MobileDrawer";

gsap.registerPlugin(ScrollTrigger);

export const Header = (): JSX.Element => {
  const [openMenu, setOpenMenu] = useState<DropdownLabel | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCapsOpen, setMobileCapsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  // Live mirrors of open-state so the scroll callback reads them without
  // re-subscribing the ScrollTrigger each time a menu toggles.
  const openMenuRef = useRef(false);
  const mobileOpenRef = useRef(false);
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

  // Hide-on-scroll-down / reveal-on-scroll-up + a translucent blurred bar once
  // scrolled. Driven by ScrollTrigger so it shares Lenis' scroll clock. Reduced
  // motion keeps the bar permanently visible (no translate).
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    if (prefersReducedMotion()) return;

    const st = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const y = self.scroll();
        setScrolled(y > 8);
        // Never hide while a menu/drawer is open or near the very top.
        if (y < 120 || openMenuRef.current || mobileOpenRef.current) {
          gsap.to(el, { yPercent: 0, duration: 0.4, ease: "power3.out", overwrite: true });
          return;
        }
        gsap.to(el, {
          yPercent: self.direction === 1 ? -100 : 0,
          duration: 0.4,
          ease: "power3.out",
          overwrite: true,
        });
      },
    });
    return () => st.kill();
  }, []);

  openMenuRef.current = openMenu !== null;
  mobileOpenRef.current = mobileOpen;

  const groups = useCategoryGroups();

  const toggle = (label: DropdownLabel) =>
    setOpenMenu((prev) => (prev === label ? null : label));

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full border-b border-white/10 transition-colors duration-300 ${
        scrolled ? "backdrop-blur-md" : ""
      }`}
      // Close any open dropdown once the cursor leaves the header entirely.
      // The panels are DOM children of <header>, so moving down into a panel
      // does NOT fire this — the menu stays open while you're inside it.
      onMouseLeave={() => setOpenMenu(null)}
      style={{ backgroundColor: scrolled ? "rgba(14,27,51,0.82)" : NAVY }}
    >
      <div className="flex h-[72px] w-full items-stretch lg:h-[88px]">
        {/* Logo */}
        <Link
          aria-label="ATLAW home"
          className="flex shrink-0 items-center border-r border-white/10 px-6 lg:px-8"
          onClick={() => {
            setOpenMenu(null);
            setMobileOpen(false);
            // Bring the visitor back to the hero. <Link to="/"> alone won't
            // scroll when we're already on home (or after a route swap), so
            // nudge to the top explicitly.
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onMouseEnter={() => setOpenMenu(null)}
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
              className={`relative flex items-center whitespace-nowrap border-r border-white/10 px-5 font-sans text-[11.5px] font-semibold uppercase tracking-[0.18em] text-[#FFFFFF]/85 transition-all duration-150 hover:text-[#FFFFFF] focus-visible:bg-white/10 focus-visible:outline-none xl:px-6 ${
                openMenu === label ? "bg-white/[0.07] text-[#FFFFFF]" : "hover:bg-white/[0.04]"
              }`}
              key={label}
              onClick={() => toggle(label)}
              onMouseEnter={() => setOpenMenu(label)}
              type="button"
            >
              {label}
              <ChevronDown open={openMenu === label} />
              {openMenu === label && (
                <span className="absolute bottom-[-1px] left-5 right-5 h-px bg-[#C6A04A]" />
              )}
            </button>
          ))}

          {directLinks.map(({ label, to }) => (
            <Link
              className="relative flex items-center whitespace-nowrap border-r border-white/10 px-5 font-sans text-[11.5px] font-semibold uppercase tracking-[0.18em] text-[#FFFFFF]/85 transition-all duration-150 hover:bg-white/[0.04] hover:text-[#FFFFFF] focus-visible:bg-white/10 focus-visible:outline-none xl:px-6"
              key={label}
              onClick={() => setOpenMenu(null)}
              onMouseEnter={() => setOpenMenu(null)}
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
          onMouseEnter={() => setOpenMenu(null)}
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
          className="ml-auto flex items-center px-5 text-[#FFFFFF] focus-visible:outline-none focus-visible:bg-white/10 lg:hidden"
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
      {openMenu === "PRACTICE AREAS" && <CapabilitiesMegaMenu onClose={() => setOpenMenu(null)} />}
      {openMenu === "NEWS & INSIGHTS" && <NewsInsightsDropdown onClose={() => setOpenMenu(null)} />}

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <MobileDrawer
          groups={groups}
          mobileCapsOpen={mobileCapsOpen}
          setMobileCapsOpen={setMobileCapsOpen}
          setMobileOpen={setMobileOpen}
        />
      )}
    </header>
  );
};
