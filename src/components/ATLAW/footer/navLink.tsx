import { Link } from "react-router-dom";
import type { NavLink } from "../../../data/footer";

export const navLinkClass =
  "inline-block font-sans text-[15px] leading-[1.45] text-white/75 transition-colors duration-200 hover:text-[#B88A2D] focus-visible:outline-none focus-visible:text-[#B88A2D]";

export const renderNavLink = (link: NavLink): JSX.Element => {
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
