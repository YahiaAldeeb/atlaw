/* ────────────────────────────────────────────────────────────────────────────
   ATLAW — Press Releases / News

   Press-release-style blog (client-confirmed format). The three entries below
   are DRAFTS built only from facts already confirmed elsewhere on the site
   (3× Super Lawyers Rising Star, $7,163,973 recovered / 538 cases closed,
   founded 2013 in Dearborn, 29-person team). Replace or extend with client-
   approved copy as real announcements are issued. Newest first.
   ──────────────────────────────────────────────────────────────────────────── */

export interface NewsBlock {
  type: "paragraph" | "heading";
  text: string;
}

export interface NewsPost {
  slug: string;
  title: string;
  category: string;
  /** ISO date, e.g. "2026-06-15" — used for schema + sorting. */
  date: string;
  /** Human display date, e.g. "June 15, 2026". */
  dateDisplay: string;
  /** Dateline city, e.g. "DEARBORN, MI". */
  dateline: string;
  excerpt: string;
  image?: string;
  body: NewsBlock[];
}

export const newsPosts: NewsPost[] = [
  {
    slug: "dewnya-bazzi-super-lawyers-rising-star-2026",
    title:
      "ATLAW Founder Dewnya Bazzi Named Super Lawyers Rising Star for Third Consecutive Year",
    category: "Recognition",
    date: "2026-06-15",
    dateDisplay: "June 15, 2026",
    dateline: "DEARBORN, MI",
    excerpt:
      "Dewnya Bazzi, founder and CEO of ATLAW, has again been named a Super Lawyers Rising Star — a peer-reviewed honor given to a small percentage of Michigan attorneys.",
    image: "/assets/dewnya/dewnya-chair-portrait.avif",
    body: [
      {
        type: "paragraph",
        text: "ATLAW today announced that founder and CEO Dewnya Bazzi has been named a Super Lawyers Rising Star for 2026 — the third consecutive year she has received the honor. The Rising Star designation is awarded through a peer-review and independent-research process to no more than 2.5% of attorneys in Michigan.",
      },
      {
        type: "paragraph",
        text: "“This recognition belongs to our clients as much as it does to me,” said Bazzi. “Every year we’re trusted with more families who were hurt and treated unfairly by insurance companies. Fighting for them is the honor.”",
      },
      {
        type: "heading",
        text: "A founder-led firm built on “unreasonable hospitality”",
      },
      {
        type: "paragraph",
        text: "Bazzi founded ATLAW in 2013 in Dearborn, Michigan, the community where she grew up. The firm has since grown to a 29-person team while remaining founder-led and personally involved in its cases. Bazzi also holds a 10.0 “Superb” rating on Avvo and was selected as a Top 10 Under 40 by the National Academy of Personal Injury Attorneys.",
      },
      {
        type: "paragraph",
        text: "ATLAW represents injured clients across Southeast Michigan in auto accident, medical malpractice, wrongful death, premises liability, dog bite, and workers’ compensation matters. The firm serves clients in both English and Arabic and works on a contingency-fee basis — clients pay nothing unless the firm recovers money for them.",
      },
    ],
  },
  {
    slug: "atlaw-surpasses-7-million-in-client-recoveries",
    title: "ATLAW Surpasses $7 Million Recovered for Injured Michigan Clients",
    category: "Firm News",
    date: "2026-05-01",
    dateDisplay: "May 1, 2026",
    dateline: "DEARBORN, MI",
    excerpt:
      "The Dearborn personal injury firm has now closed 538 cases and recovered more than $7.16 million in settlements for injured clients across Southeast Michigan.",
    image: "/assets/office/office-reception-desk.avif",
    body: [
      {
        type: "paragraph",
        text: "ATLAW announced this week that the firm has closed 538 client cases and recovered more than $7,163,973 in settlements for injured people and families across Southeast Michigan since its founding.",
      },
      {
        type: "paragraph",
        text: "“Behind every one of those numbers is a person who was hurt and told they didn’t have a case, or offered a fraction of what they deserved,” said founder and CEO Dewnya Bazzi. “We measure success one client at a time.”",
      },
      {
        type: "heading",
        text: "No fee unless the firm wins",
      },
      {
        type: "paragraph",
        text: "ATLAW handles personal injury matters on a contingency-fee basis, meaning clients pay no attorney fees unless the firm recovers compensation on their behalf. Consultations are free and confidential.",
      },
      {
        type: "paragraph",
        text: "Case results depend on a variety of factors unique to each case. Past results do not guarantee or predict a similar outcome in any future case.",
      },
    ],
  },
  {
    slug: "atlaw-expands-personal-injury-team",
    title:
      "ATLAW Expands Personal Injury Team to Meet Growing Southeast Michigan Demand",
    category: "Firm News",
    date: "2025-11-12",
    dateDisplay: "November 12, 2025",
    dateline: "DEARBORN, MI",
    excerpt:
      "ATLAW has grown to a 29-person team of attorneys and client advocates, adding capacity while preserving the same-day, personal service the firm is known for.",
    image: "/assets/team/team-composite-2026.avif",
    body: [
      {
        type: "paragraph",
        text: "ATLAW announced the continued expansion of its personal injury practice, growing to a 29-person team of attorneys and dedicated client advocates operating out of the firm’s Dearborn headquarters.",
      },
      {
        type: "paragraph",
        text: "“We added people so that no client ever feels like a case number,” said founder and CEO Dewnya Bazzi. “The goal was never to get bigger for its own sake. It was to keep returning every call the same day as our caseload grew.”",
      },
      {
        type: "heading",
        text: "Serving the community in English and Arabic",
      },
      {
        type: "paragraph",
        text: "The firm’s bilingual team serves one of the largest Arab-American communities in the country, handling matters in both English and Arabic. ATLAW represents clients throughout Dearborn, Detroit, Dearborn Heights, Ann Arbor, and Wayne, Oakland, and Macomb counties.",
      },
    ],
  },
];

export const newsBySlug = (slug: string): NewsPost | undefined =>
  newsPosts.find((p) => p.slug === slug);
