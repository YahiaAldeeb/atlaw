// Canonical navy — matches the Service Areas band (linear-gradient #0e1b33 → #0a1428)
// so every blue surface across the site reads as one scheme.
export const NAVY = "#0e1b33";
export const NAVY_PANEL = "#0a1428";
export const GOLD = "#C6A04A";

export type NewsItem = {
  category: string;
  title: string;
  image: string;
  href: string;
};

// Latest articles surfaced directly in the header dropdown.
export const newsItems: NewsItem[] = [
  {
    category: "Advisory",
    title: "Seeking New Frontiers: ATLAW Team Explores Investment Prospects in Kuwait",
    image: "/assets/insight-kuwait.avif",
    href: "/news-insights/seeking-new-frontiers-kuwait",
  },
  {
    category: "Blog",
    title: "Mohamed Ali Banoon Joins ATLAW's Estate Planning Team",
    image: "/assets/insight-mohamed.avif",
    href: "/news-insights/mohamed-ali-banoon-joins-atlaw",
  },
  {
    category: "Blog",
    title: "Nadia Hamade Joins ATLAW's Corporate Team",
    image: "/assets/insight-nadia.avif",
    href: "/news-insights/nadia-hamade-joins-atlaw",
  },
];

export type DropdownLabel = "PRACTICE AREAS" | "NEWS & INSIGHTS";

export const dropdownLinks: { label: DropdownLabel }[] = [
  { label: "PRACTICE AREAS" },
  { label: "NEWS & INSIGHTS" },
];

export const directLinks: { label: string; to: string }[] = [
  { label: "ABOUT US", to: "/about" },
  { label: "OUR TEAM", to: "/our-people" },
  { label: "GLOBAL REACH", to: "/global-reach" },
  { label: "CONTACT", to: "/contact" },
];
