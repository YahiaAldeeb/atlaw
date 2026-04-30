import { Header } from "../components/ATLAW/Header";
import { Hero } from "../components/ATLAW/Hero";
import { Capabilities } from "../components/ATLAW/Capabilities";
import { HowWeWork } from "../components/ATLAW/HowWeWork";
import { Commitments } from "../components/ATLAW/Commitments";
import { FeaturedInsights } from "../components/ATLAW/FeaturedInsights";
import { GlobalReach } from "../components/ATLAW/GlobalReach";
import { Contact } from "../components/ATLAW/Contact";
import { Footer } from "../components/ATLAW/Footer";

const capabilities = [
  { title: "Compensation", category: "Advisory" },
  { title: "Employee Benefits", category: "Advisory" },
  { title: "Franchising & Scaling", category: "Advisory" },
  { title: "Government Relations & Policy", category: "Advisory" },
  { title: "Impact & ESG", category: "Advisory" },
  { title: "Mergers & Acquisitions", category: "Advisory" },
  { title: "Planning", category: "Advisory" },
  { title: "Privacy & Cybersecurity", category: "Advisory" },
  { title: "Recovery & Renewal", category: "Advisory" },
  { title: "Residency", category: "Advisory" },
  { title: "Trusts & Estate", category: "Advisory" },
];

const commitments = [
  {
    title: "Ethical Conduct",
    body: "Acting with integrity, transparency, and accountability.",
  },
  {
    title: "Social Responsibility",
    body: "Addressing social and environmental impacts while contributing to the community.",
  },
  {
    title: "Customer Focus",
    body: "Keeping clients at the center and striving to deliver an exceptional customer experience.",
  },
  {
    title: "Innovation",
    body: "Using innovation to provide stronger solutions for clients.",
  },
  {
    title: "Continuous Learning",
    body: "Staying up-to-date and adapting to an ever-changing market.",
  },
  {
    title: "Collaboration",
    body: "Sharing knowledge and working together to achieve meaningful outcomes.",
  },
];

const insights = [
  {
    category: "Advisory",
    title: "Seeking New Frontiers: ATLAW Team Explores Investment Prospects in Kuwait",
  },
  {
    category: "Blog",
    title: "Mohamed Ali Banoon Joins ATLAW's Estate Planning Team",
  },
  {
    category: "Blog",
    title: "Nadia Hamade Joins ATLAW's Corporate Team",
  },
];

const locations = [
  "San Antonio, Texas",
  "Atlanta, Georgia",
  "Chicago, IL",
  "Kuala Lumpur, Malaysia",
  "New York, NY",
  "Erbil, Iraq",
  "Windsor, ON",
  "Manila, Philippines",
  "Washington, D.C.",
  "Phoenix, AZ",
  "Tampa, FL",
  "London, United Kingdom",
  "Beirut, Lebanon",
  "Baghdad, Iraq",
  "Detroit, MI",
  "Kuwait City, Kuwait",
  "Dubai, UAE",
];

export const ATLAWLandingPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-ivory text-ink [zoom:1.12]">
      <Header />
      <main>
        <Hero />
        <FeaturedInsights items={insights} />
        <Capabilities items={capabilities} />
        <HowWeWork />
        <Commitments items={commitments} />
        <GlobalReach locations={locations} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
