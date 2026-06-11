import { Link } from "react-router-dom";
import { NAVY_PANEL } from "../../../data/navigation";
import { useCategoryGroups } from "./useCategoryGroups";

export const CapabilitiesMegaMenu = ({ onClose }: { onClose: () => void }): JSX.Element => {
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
              <p className="font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.28em] text-[#C6A04A]">
                <span className="mr-3 inline-block h-px w-8 align-middle bg-[#C6A04A]" />
                Practice Areas
              </p>
              <h3 className="mt-6 font-serifDisplay text-[26px] font-normal leading-[1.12] tracking-[-0.015em] text-[#FFFFFF]">
                Strategic counsel for serious moments.
              </h3>
              <p className="mt-4 max-w-[280px] font-sans text-[13.5px] leading-[1.6] text-white/60">
                Four core practice categories. Twenty-one focused areas. One firm.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {groups.map((group) => (
              <div key={group.category} className="flex flex-col">
                <p className="font-sans text-[10.5px] font-semibold uppercase leading-none tracking-[0.24em] text-[#C6A04A]">
                  {group.number} &mdash; {group.category}
                </p>
                <Link
                  className="mt-4 inline-flex items-baseline gap-2 font-serifDisplay text-[19px] font-normal leading-[1.15] tracking-[-0.01em] text-[#FFFFFF] transition-colors hover:text-[#C6A04A]"
                  onClick={onClose}
                  to={`/practice-areas/${group.parent.slug}`}
                >
                  {group.parent.name}
                  <span aria-hidden="true" className="text-[#C6A04A]">.</span>
                </Link>

                <div className="mt-5 h-px w-10 bg-white/15" />

                <ul className="mt-5 flex flex-col gap-3">
                  {group.children.map((child) => (
                    <li key={child.slug}>
                      <Link
                        className="group inline-flex items-center font-sans text-[13.5px] leading-[1.45] text-white/75 transition-colors hover:text-[#FFFFFF]"
                        onClick={onClose}
                        to={`/practice-areas/${child.slug}`}
                      >
                        <span className="mr-3 inline-block h-px w-0 bg-[#C6A04A] transition-[width] duration-200 group-hover:w-3" />
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
