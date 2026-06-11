import { Link } from "react-router-dom";

/* ────────────────────────────────────────────────────────────────────────────
   ATLAW — Privacy Policy content data

   Extracted verbatim from PrivacyPolicyPage.tsx. Holds the legal section copy,
   cookie table data, content-bound constants, and the small content-markup
   components those sections embed (CrossLink, DraftingNote, CookieTable). The
   screen owns all layout JSX, hooks, motion, icons, and SectionBlock.
   ──────────────────────────────────────────────────────────────────────────── */

const GOLD = "#C9A24B";
const INK = "#0E1B2C";
const INK_SOFT = "#3A4A63";
const STONE = "#7A7466";

export const EMAIL = "info@atlawgroup.com";
// ⚠️ Working draft date — set the real "Last updated" value at publish, and use
// the SAME owner/date as the Terms page (they are a matched set).
export const LAST_UPDATED = "June 12, 2026";

export type Section = {
  id: string;
  num: string;
  indexLabel: string; // short label for the index rail + section eyebrow
  title: string; // H2
  summary: string; // "In plain English" — plain text default
  summaryNode?: React.ReactNode; // optional rich summary (e.g. with a cross-link)
  paragraphs: string[]; // legal text (rendered when `body` is absent)
  body?: React.ReactNode; // custom full-text content (01 cross-link, 05 table)
  pending?: boolean; // bracketed clauses awaiting final attorney language
};

/* Cross-reference between the two legal pages — rendered with a small gold ¶ so
   it reads as a legal cross-reference, distinct from an ordinary link. */
const CrossLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}): JSX.Element => (
  <span className="whitespace-normal">
    <span aria-hidden="true" className="mr-0.5 font-serifDisplay text-[0.95em]" style={{ color: GOLD }}>
      ¶
    </span>
    <Link
      to={to}
      className="font-medium underline underline-offset-2 transition hover:text-[#C9A24B]"
      style={{ color: INK }}
    >
      {children}
    </Link>
  </span>
);

/* Visible placeholder for clauses whose final language is pending attorney /
   developer-audit input — never mistakable for final copy. */
const DraftingNote = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <p
    className="rounded-md border border-dashed px-4 py-3 font-sans text-[14px] leading-[1.6]"
    style={{
      borderColor: "rgba(201,162,75,0.55)",
      backgroundColor: "rgba(201,162,75,0.06)",
      color: STONE,
    }}
  >
    <span
      className="mr-2 inline-block font-semibold uppercase tracking-[0.16em]"
      style={{ color: GOLD, fontSize: "10.5px" }}
    >
      Drafting note
    </span>
    {children}
  </p>
);

/* The only table on the site — hairline rules only, no zebra striping, sans
   14px, generous row height. Bracketed values are intentional: this is a
   template to be completed from the build audit (see section 05 drafting note). */
const cookieRows = [
  {
    name: "__session",
    purpose: "Keeps the site functioning during a visit",
    duration: "Session",
    type: "Essential",
  },
  {
    name: "[analytics_id]",
    purpose: "Anonymous usage measurement — pages viewed, device type",
    duration: "[duration]",
    type: "Analytics",
  },
  {
    name: "[embed_cookie]",
    purpose: "Set by an embedded map or font provider, where used",
    duration: "[duration]",
    type: "Third-party",
  },
];

const CookieTable = (): JSX.Element => (
  <div className="overflow-x-auto">
    <p className="mb-2.5 font-sans text-[11px] uppercase tracking-[0.16em]" style={{ color: STONE }}>
      Illustrative — replace with the audited cookie list
    </p>
    <table className="w-full border-collapse text-left font-sans text-[14px]">
      <caption className="sr-only">Cookies used on this site</caption>
      <thead>
        <tr className="border-b" style={{ borderColor: "rgba(14,27,44,0.20)" }}>
          {["Cookie", "Purpose", "Duration", "Type"].map((h) => (
            <th
              key={h}
              scope="col"
              className="py-3 pr-5 align-bottom font-sans text-[11px] font-semibold uppercase tracking-[0.16em]"
              style={{ color: STONE }}
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {cookieRows.map((row) => (
          <tr key={row.name} className="border-b" style={{ borderColor: "rgba(14,27,44,0.09)" }}>
            <td className="py-4 pr-5 align-top font-medium tabular-nums" style={{ color: INK }}>
              {row.name}
            </td>
            <td className="py-4 pr-5 align-top leading-[1.5]" style={{ color: INK_SOFT }}>
              {row.purpose}
            </td>
            <td className="py-4 pr-5 align-top whitespace-nowrap" style={{ color: INK_SOFT }}>
              {row.duration}
            </td>
            <td className="py-4 align-top whitespace-nowrap" style={{ color: INK_SOFT }}>
              {row.type}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const sections: Section[] = [
  {
    id: "privacy-01",
    num: "01",
    indexLabel: "What you send us",
    title: "What you send us",
    summary:
      "When you contact us, we use what you share to respond and evaluate your matter. Until we formally take you on as a client, limit details.",
    summaryNode: (
      <>
        When you contact us, we use what you share to respond and evaluate your matter. Until we
        formally take you on as a client, limit details &mdash;{" "}
        <CrossLink to="/terms#terms-04">here&rsquo;s why</CrossLink>.
      </>
    ),
    paragraphs: [],
    body: (
      <p className="font-serifDisplay text-[16px] leading-[1.65]" style={{ color: INK_SOFT }}>
        When you submit a form, email us, or call, we collect what you choose to provide: your name,
        contact details, and a description of your situation. We use it to respond, run conflict
        checks, and evaluate whether we can help. Note: information sent before an engagement
        agreement exists may not be privileged &mdash; see{" "}
        <CrossLink to="/terms#terms-04">
          Terms of Use, &ldquo;Confidentiality of unsolicited submissions.&rdquo;
        </CrossLink>{" "}
        We will tell you when it is appropriate to share details.
      </p>
    ),
  },
  {
    id: "privacy-02",
    num: "02",
    indexLabel: "Collected automatically",
    title: "What we collect automatically",
    summary:
      "Like most websites, we get basic technical data — pages visited, device type, approximate location — through analytics.",
    pending: true,
    paragraphs: [
      "Complete only after the developer confirms what actually runs: analytics platform, hosting logs (Vercel), embedded maps/fonts, and the newsletter provider. List each honestly — do not list tools that aren’t in use.",
    ],
  },
  {
    id: "privacy-03",
    num: "03",
    indexLabel: "How we use it",
    title: "How we use information",
    summary:
      "To respond to you, evaluate matters, run the firm, improve the site, and meet legal obligations. That’s it.",
    pending: true,
    paragraphs: [
      "Standard purposes clause: responding, conflict checks, client onboarding, newsletter (consent-based), site improvement, legal compliance, and security.",
    ],
  },
  {
    id: "privacy-04",
    num: "04",
    indexLabel: "When we share it",
    title: "When we share information",
    summary:
      "We don’t sell it. We share only with service providers who help us operate (under contract), within the firm and its affiliates working on your matter, or when the law requires.",
    pending: true,
    paragraphs: [
      "Categories: service providers (hosting, email, analytics, case management); affiliated attorneys working on your matter — including Dubai/Manila where applicable; legal and regulatory requirements. Never sold; never shared for third-party marketing.",
    ],
  },
  {
    id: "privacy-05",
    num: "05",
    indexLabel: "Cookies & analytics",
    title: "Cookies & analytics",
    summary:
      "We use a small set of cookies to make the site work and to understand how it’s used. You can control them.",
    paragraphs: [],
    body: (
      <div className="space-y-5">
        <DraftingNote>
          Complete this table from the actual build — analytics platform, hosting logs (Vercel),
          embedded maps/fonts, and the newsletter provider. List only tools that are in use. If the
          audited list plus an EU/UK audience requires it, add a consent banner and describe the
          mechanism here.
        </DraftingNote>
        <CookieTable />
      </div>
    ),
  },
  {
    id: "privacy-06",
    num: "06",
    indexLabel: "Data retention",
    title: "Data retention",
    summary:
      "We keep information as long as needed for the purpose we collected it — and where you become a client, as long as professional rules require us to keep files.",
    pending: true,
    paragraphs: [
      "Retention clause. Attorney records-retention obligations differ from marketing data — distinguish the two.",
    ],
  },
  {
    id: "privacy-07",
    num: "07",
    indexLabel: "Security",
    title: "Security",
    summary:
      "We use reasonable safeguards to protect your information. No website can promise perfect security, and we won’t pretend otherwise.",
    pending: true,
    paragraphs: [
      "Standard safeguards clause — honest, no overpromising. Describe actual measures at a general level: encryption in transit, access controls.",
    ],
  },
  {
    id: "privacy-08",
    num: "08",
    indexLabel: "Your rights & choices",
    title: "Your rights & choices",
    summary:
      "You can ask what we have about you, ask us to correct or delete it, and unsubscribe from the newsletter anytime. Email us and we’ll handle it.",
    pending: true,
    paragraphs: [
      "Rights clause. Michigan has no comprehensive state privacy law as of drafting, but the firm serves clients from other states and countries — attorney to decide whether to extend CCPA/GDPR-style rights voluntarily (simpler, and better optics, than jurisdiction-gating). Include: access, correction, deletion, newsletter opt-out, how to exercise (email info@atlawgroup.com), and a response timeframe.",
    ],
  },
  {
    id: "privacy-09",
    num: "09",
    indexLabel: "International transfers",
    title: "International data transfers",
    summary:
      "We operate from the US, with offices in Dubai and Manila. If your matter involves them, relevant information may be handled there under the same confidentiality obligations.",
    pending: true,
    paragraphs: [
      "Attorney + ops to confirm: where data is actually stored, whether cross-office transfers occur, and applicable safeguards. UAE and the Philippines both have data-protection statutes (PDPL; Data Privacy Act) — counsel should confirm obligations if data genuinely flows there.",
    ],
  },
  {
    id: "privacy-10",
    num: "10",
    indexLabel: "Children",
    title: "Children",
    summary:
      "This site isn’t directed at children, and we don’t knowingly collect their information.",
    pending: true,
    paragraphs: [
      "Standard under-13/COPPA clause; note that injury matters involving minors are handled through parents or guardians.",
    ],
  },
  {
    id: "privacy-11",
    num: "11",
    indexLabel: "Changes",
    title: "Changes to this policy",
    summary:
      "If we change this policy, we’ll update the date at the top. Material changes get a notice on this page.",
    pending: true,
    paragraphs: ["Standard amendment clause with the “Last updated” mechanism."],
  },
  {
    id: "privacy-12",
    num: "12",
    indexLabel: "Contact",
    title: "Contact",
    summary: "Privacy questions or requests: email us.",
    paragraphs: [
      `Privacy questions or requests may be directed to ${EMAIL} or ATLAW Group, [address], Detroit, MI. [Designate internally who answers privacy requests.]`,
    ],
  },
];
