import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Home is eager: it is the landing/LCP route, so it ships in the initial chunk
// and renders without a second network round-trip.
import { ATLAWLandingPage } from "./screens/ATLAWLandingPage";
import { BackToTop } from "./components/ATLAW/BackToTop";
import { NavigationLoader } from "./components/ATLAW/NavigationLoader";
import { LoaderOverlay } from "./components/ATLAW/LoaderOverlay";
import { ScrollToTop } from "./components/ATLAW/ScrollToTop";
import { SmoothScroll } from "./motion/SmoothScroll";
import { MotionReady } from "./motion/MotionReady";
import "../tailwind.css";

// Every non-home screen is route-split: each emits its own chunk and is fetched
// on demand. The <Suspense> fallback is the same branded overlay the
// NavigationLoader uses, so chunk-load time hides inside the page transition.
const AboutUsPage = lazy(() => import("./screens/AboutUsPage").then((m) => ({ default: m.AboutUsPage })));
const OurPeoplePage = lazy(() => import("./screens/OurPeoplePage").then((m) => ({ default: m.OurPeoplePage })));
const ContactPage = lazy(() => import("./screens/ContactPage").then((m) => ({ default: m.ContactPage })));
const PracticeAreaPage = lazy(() => import("./screens/PracticeAreaPage").then((m) => ({ default: m.PracticeAreaPage })));
const BusinessLawPage = lazy(() => import("./screens/BusinessLawPage").then((m) => ({ default: m.BusinessLawPage })));
const PersonalInjuryPage = lazy(() => import("./screens/PersonalInjuryPage").then((m) => ({ default: m.PersonalInjuryPage })));
const AutoAccidentsPage = lazy(() => import("./screens/AutoAccidentsPage").then((m) => ({ default: m.AutoAccidentsPage })));
const MedicalMalpracticePage = lazy(() => import("./screens/MedicalMalpracticePage").then((m) => ({ default: m.MedicalMalpracticePage })));
const WorkersCompensationPage = lazy(() => import("./screens/WorkersCompensationPage").then((m) => ({ default: m.WorkersCompensationPage })));
const WrongfulDeathPage = lazy(() => import("./screens/WrongfulDeathPage").then((m) => ({ default: m.WrongfulDeathPage })));
const FranchisingPage = lazy(() => import("./screens/FranchisingPage").then((m) => ({ default: m.FranchisingPage })));
const MergersAcquisitionsPage = lazy(() => import("./screens/MergersAcquisitionsPage").then((m) => ({ default: m.MergersAcquisitionsPage })));
const SecuritiesPage = lazy(() => import("./screens/SecuritiesPage").then((m) => ({ default: m.SecuritiesPage })));
const ContractsPage = lazy(() => import("./screens/ContractsPage").then((m) => ({ default: m.ContractsPage })));
const IntellectualPropertyPage = lazy(() => import("./screens/IntellectualPropertyPage").then((m) => ({ default: m.IntellectualPropertyPage })));
const EstatePlanningPage = lazy(() => import("./screens/EstatePlanningPage").then((m) => ({ default: m.EstatePlanningPage })));
const TrustLitigationPage = lazy(() => import("./screens/TrustLitigationPage").then((m) => ({ default: m.TrustLitigationPage })));
const RealEstatePage = lazy(() => import("./screens/RealEstatePage").then((m) => ({ default: m.RealEstatePage })));
const TaxPage = lazy(() => import("./screens/TaxPage").then((m) => ({ default: m.TaxPage })));
const ImmigrationPage = lazy(() => import("./screens/ImmigrationPage").then((m) => ({ default: m.ImmigrationPage })));
const CriminalDefensePage = lazy(() => import("./screens/CriminalDefensePage").then((m) => ({ default: m.CriminalDefensePage })));
const DuiPage = lazy(() => import("./screens/DuiPage").then((m) => ({ default: m.DuiPage })));
const FederalCriminalPage = lazy(() => import("./screens/FederalCriminalPage").then((m) => ({ default: m.FederalCriminalPage })));
const WhiteCollarPage = lazy(() => import("./screens/WhiteCollarPage").then((m) => ({ default: m.WhiteCollarPage })));
const CivilLitigationPage = lazy(() => import("./screens/CivilLitigationPage").then((m) => ({ default: m.CivilLitigationPage })));
const CapabilitiesLandingPage = lazy(() => import("./screens/CapabilitiesLandingPage").then((m) => ({ default: m.CapabilitiesLandingPage })));
const GlobalReachPage = lazy(() => import("./screens/GlobalReachPage").then((m) => ({ default: m.GlobalReachPage })));
const PrivacyPolicyPage = lazy(() => import("./screens/PrivacyPolicyPage").then((m) => ({ default: m.PrivacyPolicyPage })));
const TermsOfUsePage = lazy(() => import("./screens/TermsOfUsePage").then((m) => ({ default: m.TermsOfUsePage })));
const NewsInsightsPage = lazy(() => import("./screens/NewsInsightsPage").then((m) => ({ default: m.NewsInsightsPage })));

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <SmoothScroll>
    <BrowserRouter>
      <NavigationLoader />
      <ScrollToTop />
      <MotionReady />
      <Suspense fallback={<LoaderOverlay />}>
      <Routes>
        <Route path="/" element={<ATLAWLandingPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/our-people" element={<OurPeoplePage />} />
        <Route path="/global-reach" element={<GlobalReachPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfUsePage />} />
        <Route path="/news-insights" element={<NewsInsightsPage />} />
        <Route path="/practice-areas" element={<CapabilitiesLandingPage />} />
        <Route path="/practice-areas/business-law" element={<BusinessLawPage />} />
        <Route path="/practice-areas/personal-injury" element={<PersonalInjuryPage />} />
        <Route path="/practice-areas/auto-accidents" element={<AutoAccidentsPage />} />
        <Route path="/practice-areas/medical-malpractice" element={<MedicalMalpracticePage />} />
        <Route path="/practice-areas/workers-compensation" element={<WorkersCompensationPage />} />
        <Route path="/practice-areas/wrongful-death" element={<WrongfulDeathPage />} />
        <Route path="/practice-areas/franchising" element={<FranchisingPage />} />
        <Route path="/practice-areas/m-and-a" element={<MergersAcquisitionsPage />} />
        <Route path="/practice-areas/securities" element={<SecuritiesPage />} />
        <Route path="/practice-areas/contracts" element={<ContractsPage />} />
        <Route path="/practice-areas/intellectual-property" element={<IntellectualPropertyPage />} />
        <Route path="/practice-areas/estate-planning" element={<EstatePlanningPage />} />
        <Route path="/practice-areas/trust-litigation" element={<TrustLitigationPage />} />
        <Route path="/practice-areas/real-estate" element={<RealEstatePage />} />
        <Route path="/practice-areas/tax" element={<TaxPage />} />
        <Route path="/practice-areas/immigration" element={<ImmigrationPage />} />
        <Route path="/practice-areas/criminal-defense" element={<CriminalDefensePage />} />
        <Route path="/practice-areas/dui" element={<DuiPage />} />
        <Route path="/practice-areas/federal-criminal" element={<FederalCriminalPage />} />
        <Route path="/practice-areas/white-collar" element={<WhiteCollarPage />} />
        <Route path="/practice-areas/civil-litigation" element={<CivilLitigationPage />} />
        <Route path="/practice-areas/:slug" element={<PracticeAreaPage />} />
      </Routes>
      </Suspense>
      <BackToTop />
    </BrowserRouter>
    </SmoothScroll>
  </StrictMode>,
);
