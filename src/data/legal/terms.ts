/* ────────────────────────────────────────────────────────────────────────────
   ATLAW — Terms of Use — content data
   Module-level content moved out of the screen verbatim (strings unchanged).
   The screen keeps all JSX, hooks, helpers, and styling.

   ⚠️ LEGAL SUBSTANCE IS A WORKING DRAFT pending ATLAW attorney review/approval.
   Sections 06–12 ship intentionally-incomplete bracketed clauses, rendered as
   visible "Drafting note" placeholders so they cannot be mistaken for final copy.
   ──────────────────────────────────────────────────────────────────────────── */

export const EMAIL = "info@atlawgroup.com";
// ⚠️ Working draft date — set the real "Last updated" value at publish and
// establish who owns updating it (see pre-ship checklist).
export const LAST_UPDATED = "June 12, 2026";

export type Section = {
  id: string;
  num: string;
  indexLabel: string; // short label for the index rail + section eyebrow
  title: string; // H2
  summary: string; // "In plain English"
  paragraphs: string[];
  pending?: boolean; // bracketed clauses awaiting final attorney language
};

export const sections: Section[] = [
  {
    id: "terms-01",
    num: "01",
    indexLabel: "Acceptance",
    title: "Acceptance of these terms",
    summary:
      "Using this site means you agree to these terms. If you don’t agree, don’t use the site.",
    paragraphs: [
      "By accessing or using atlawgroup.com (the “Site”), you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree, do not use the Site. These terms apply to all visitors and users.",
    ],
  },
  {
    id: "terms-02",
    num: "02",
    indexLabel: "No attorney-client relationship",
    title: "No attorney-client relationship",
    summary:
      "Reading this site, calling us, or sending a message does not make you our client. That only happens when both sides sign an engagement agreement.",
    paragraphs: [
      "Use of this Site, including contacting ATLAW through any form, email, or phone number listed here, does not create an attorney-client relationship. An attorney-client relationship is formed only by a written engagement agreement signed by both you and the firm. Until then, we represent no one by virtue of this Site.",
    ],
  },
  {
    id: "terms-03",
    num: "03",
    indexLabel: "Not legal advice",
    title: "Site content is not legal advice",
    summary:
      "Everything on this site is general information. Your situation is specific. Don’t act on anything here without talking to a lawyer about your facts.",
    paragraphs: [
      "Content on this Site is provided for general informational purposes only and does not constitute legal advice. Laws change and outcomes depend on specific facts. Do not act or refrain from acting based on Site content without obtaining advice from a licensed attorney regarding your particular circumstances.",
    ],
  },
  {
    id: "terms-04",
    num: "04",
    indexLabel: "Confidentiality of submissions",
    title: "Confidentiality of unsolicited submissions",
    summary:
      "Until we’ve agreed to represent you, don’t send us confidential details. Unsolicited information may not be protected and doesn’t prevent us from representing someone else.",
    paragraphs: [
      "Information submitted before an attorney-client relationship exists may not be treated as privileged or confidential, and sending it does not prevent the firm from representing a party adverse to you. Please limit initial communications to general subject matter and contact information; we will tell you when it is appropriate to share details.",
    ],
  },
  {
    id: "terms-05",
    num: "05",
    indexLabel: "Attorney advertising",
    title: "Attorney advertising",
    summary:
      "This website is attorney advertising. Past results don’t guarantee anything about your case.",
    paragraphs: [
      "This Site may be considered attorney advertising under applicable rules of professional conduct. Prior results do not guarantee a similar outcome. Any recognitions or ratings referenced (including Super Lawyers Rising Star) reflect the methodology of the granting organization and are not a promise of results. ATLAW attorneys are licensed in specific jurisdictions; we do not seek to represent anyone in a jurisdiction where this Site fails to comply with applicable rules.",
    ],
  },
  {
    id: "terms-06",
    num: "06",
    indexLabel: "Intellectual property",
    title: "Intellectual property",
    summary:
      "The content, design, and ATLAW name are ours. Read and share links freely; don’t copy or reuse the material commercially.",
    pending: true,
    paragraphs: [
      "Standard IP clause — Site content, trademarks including the ATLAW name and logo, design elements; limited license to view; no reproduction without written consent.",
    ],
  },
  {
    id: "terms-07",
    num: "07",
    indexLabel: "Acceptable use",
    title: "Acceptable use",
    summary:
      "Don’t misuse the site — no scraping, no hacking, no impersonation, no unlawful use.",
    pending: true,
    paragraphs: ["Standard acceptable-use clause."],
  },
  {
    id: "terms-08",
    num: "08",
    indexLabel: "Third-party links",
    title: "Third-party links",
    summary:
      "We link to outside sites sometimes. We don’t control them and aren’t responsible for them.",
    pending: true,
    paragraphs: ["Standard third-party links clause."],
  },
  {
    id: "terms-09",
    num: "09",
    indexLabel: "Disclaimers",
    title: "Disclaimers",
    summary:
      "The site is provided as-is. We work to keep it accurate but can’t warrant that everything is complete, current, or error-free.",
    pending: true,
    paragraphs: ["Standard warranty disclaimer."],
  },
  {
    id: "terms-10",
    num: "10",
    indexLabel: "Limitation of liability",
    title: "Limitation of liability",
    summary:
      "To the extent the law allows, we’re not liable for damages arising from your use of the website itself.",
    pending: true,
    paragraphs: ["Standard limitation clause — attorney to set scope and carve-outs."],
  },
  {
    id: "terms-11",
    num: "11",
    indexLabel: "Governing law",
    title: "Governing law & disputes",
    summary: "Michigan law governs these terms.",
    pending: true,
    paragraphs: [
      "Governing law: Michigan; venue; attorney to confirm dispute-resolution approach.",
    ],
  },
  {
    id: "terms-12",
    num: "12",
    indexLabel: "Changes",
    title: "Changes to these terms",
    summary:
      "If we update these terms, we’ll change the date at the top. Continued use means you accept the update.",
    pending: true,
    paragraphs: ["Standard amendment clause with “Last updated” mechanism."],
  },
  {
    id: "terms-13",
    num: "13",
    indexLabel: "Contact",
    title: "Contact",
    summary: "Questions about these terms? Email us.",
    paragraphs: [
      `Questions regarding these Terms of Use may be directed to ${EMAIL} or ATLAW Group, [address], Detroit, MI.`,
    ],
  },
];
