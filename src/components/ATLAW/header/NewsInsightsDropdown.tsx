import { Link } from "react-router-dom";
import { NAVY_PANEL, newsItems } from "../../../data/navigation";
import { ArrowRight } from "./Icons";

export const NewsInsightsDropdown = ({ onClose }: { onClose: () => void }): JSX.Element => (
  <div
    className="absolute left-0 right-0 top-full z-50 border-t border-white/10 shadow-[0_36px_70px_rgba(0,0,0,0.5)]"
    style={{ backgroundColor: NAVY_PANEL }}
  >
    <div className="mx-auto w-full max-w-[1440px] px-6 py-10 sm:px-10 lg:px-16 lg:py-14">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,3fr)] lg:gap-16">
        {/* Intro */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-sans text-[11px] font-semibold uppercase leading-none tracking-[0.28em] text-[#C6A04A]">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-[#C6A04A]" />
              News &amp; Insights
            </p>
            <h3 className="mt-6 font-serifDisplay text-[26px] font-normal leading-[1.12] tracking-[-0.015em] text-[#FFFFFF]">
              Editorials, firm announcements, and field briefings.
            </h3>
          </div>
          <Link
            className="mt-10 inline-flex items-center font-sans text-[12px] font-semibold uppercase tracking-[0.24em] text-[#FFFFFF] transition-colors hover:text-[#C6A04A]"
            onClick={onClose}
            to="/news-insights"
          >
            Browse latest
            <ArrowRight />
          </Link>
        </div>

        {/* Latest articles */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {newsItems.map((item) => (
            <Link
              className="group flex flex-col"
              key={item.href}
              onClick={onClose}
              to={item.href}
            >
              <div className="overflow-hidden rounded-[10px] border border-white/10">
                <img
                  alt={item.title}
                  className="h-[132px] w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.04]"
                  loading="lazy"
                  src={item.image}
                />
              </div>
              <p className="mt-4 font-sans text-[10.5px] font-semibold uppercase leading-none tracking-[0.24em] text-[#C6A04A]">
                {item.category}
              </p>
              <h4 className="mt-3 font-serifDisplay text-[16px] font-normal leading-[1.3] tracking-[-0.01em] text-[#FFFFFF] transition-colors group-hover:text-[#C6A04A]">
                {item.title}
              </h4>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
);
