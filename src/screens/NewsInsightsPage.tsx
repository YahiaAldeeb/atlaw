import { Link } from "react-router-dom";
import { Header } from "../components/ATLAW/Header";
import { Footer } from "../components/ATLAW/Footer";

/* ────────────────────────────────────────────────────────────────────────────
   ATLAW — News & Insights (placeholder)
   The Header dropdown, FeaturedInsights, and RepresentativeMatters sections all
   already linked to /news-insights, but no route existed — a site-wide dead
   link. This minimal landing makes those links (and the footer's) resolve.
   Replace with the real editorial index when article content is ready.
   ──────────────────────────────────────────────────────────────────────────── */

const GOLD = "#C9A24B";
const INK = "#0E1B2C";

export const NewsInsightsPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white text-[#0E1B2C]">
      <Header />
      <main>
        <section className="mx-auto w-full max-w-[760px] px-6 pb-28 pt-24 sm:px-10 md:pt-32">
          <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.24em]" style={{ color: GOLD }}>
            News &amp; Insights
          </p>
          <h1
            className="mt-5 font-serifDisplay text-[44px] font-normal leading-[1.06] tracking-[-0.02em] sm:text-[56px]"
            style={{ color: INK }}
          >
            Editorials &amp; firm announcements
          </h1>
          <div className="mt-6 h-px w-14" style={{ backgroundColor: GOLD }} />
          <p className="mt-8 font-serifDisplay text-[19px] leading-[1.6] text-[#3A4A5E]">
            Content pending. Our newsroom is being built — field briefings, firm
            announcements, and editorials will be published here shortly.
          </p>
          <p className="mt-5 font-sans text-[15px] leading-[1.7] text-[#3A4A5E]">
            For media inquiries, email us at{" "}
            <a
              href="mailto:info@atlawgroup.com"
              className="font-medium text-[#0E1B2C] underline underline-offset-4 transition hover:text-[#C9A24B]"
            >
              info@atlawgroup.com
            </a>
            .
          </p>
          <Link
            to="/"
            className="mt-10 inline-flex items-center font-sans text-[14px] font-medium text-[#0E1B2C] transition hover:text-[#C9A24B]"
          >
            <span aria-hidden="true" className="mr-2">&larr;</span>
            Back to home
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};
