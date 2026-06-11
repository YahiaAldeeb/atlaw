import { Link } from "react-router-dom";
import { NAVY, GOLD, directLinks } from "../../../data/navigation";
import { ChevronDown, ArrowRight } from "./Icons";
import type { CategoryGroup } from "./useCategoryGroups";

type MobileDrawerProps = {
  groups: CategoryGroup[];
  mobileCapsOpen: boolean;
  setMobileCapsOpen: (updater: (v: boolean) => boolean) => void;
  setMobileOpen: (value: boolean) => void;
};

export const MobileDrawer = ({
  groups,
  mobileCapsOpen,
  setMobileCapsOpen,
  setMobileOpen,
}: MobileDrawerProps): JSX.Element => (
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
        className="flex w-full items-center justify-between border-b border-white/10 py-4 text-left font-sans text-[12px] font-semibold uppercase tracking-[0.22em] text-[#FFFFFF]"
        onClick={() => setMobileCapsOpen((v) => !v)}
        type="button"
      >
        Practice Areas
        <ChevronDown open={mobileCapsOpen} />
      </button>
      {mobileCapsOpen && (
        <div className="border-b border-white/10 py-4" id="atlaw-mobile-caps">
          {groups.map((group) => (
            <div className="mb-6" key={group.category}>
              <p className="font-sans text-[10.5px] font-semibold uppercase tracking-[0.24em] text-[#C6A04A]">
                {group.number} &mdash; {group.category}
              </p>
              <Link
                className="mt-3 block font-serifDisplay text-[18px] leading-[1.2] tracking-[-0.01em] text-[#FFFFFF]"
                onClick={() => setMobileOpen(false)}
                to={`/practice-areas/${group.parent.slug}`}
              >
                {group.parent.name}
              </Link>
              <ul className="mt-3 flex flex-col gap-2.5 pl-1">
                {group.children.map((child) => (
                  <li key={child.slug}>
                    <Link
                      className="block font-sans text-[13.5px] leading-[1.45] text-white/75"
                      onClick={() => setMobileOpen(false)}
                      to={`/practice-areas/${child.slug}`}
                    >
                      {child.navLabel ?? child.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Link
            className="mt-2 inline-flex items-center font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C6A04A]"
            onClick={() => setMobileOpen(false)}
            to="/practice-areas"
          >
            View all practice areas <ArrowRight />
          </Link>
        </div>
      )}

      {/* News & Insights */}
      <Link
        className="block border-b border-white/10 py-4 font-sans text-[12px] font-semibold uppercase tracking-[0.22em] text-[#FFFFFF]"
        onClick={() => setMobileOpen(false)}
        to="/news-insights"
      >
        News &amp; Insights
      </Link>

      {directLinks.map(({ label, to }) => (
        <Link
          className="block border-b border-white/10 py-4 font-sans text-[12px] font-semibold uppercase tracking-[0.22em] text-[#FFFFFF]"
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
);
