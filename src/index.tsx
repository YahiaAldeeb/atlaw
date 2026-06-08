import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ATLAWLandingPage } from "./screens/ATLAWLandingPage";
import { AboutUsPage } from "./screens/AboutUsPage";
import { OurPeoplePage } from "./screens/OurPeoplePage";
import { ContactPage } from "./screens/ContactPage";
import { PracticeAreaPage } from "./screens/PracticeAreaPage";
import { BusinessLawPage } from "./screens/BusinessLawPage";
import { PersonalInjuryPage } from "./screens/PersonalInjuryPage";
import { AutoAccidentsPage } from "./screens/AutoAccidentsPage";
import { MedicalMalpracticePage } from "./screens/MedicalMalpracticePage";
import { WorkersCompensationPage } from "./screens/WorkersCompensationPage";
import { WrongfulDeathPage } from "./screens/WrongfulDeathPage";
import { FranchisingPage } from "./screens/FranchisingPage";
import { MergersAcquisitionsPage } from "./screens/MergersAcquisitionsPage";
import { SecuritiesPage } from "./screens/SecuritiesPage";
import { ContractsPage } from "./screens/ContractsPage";
import { IntellectualPropertyPage } from "./screens/IntellectualPropertyPage";
import { EstatePlanningPage } from "./screens/EstatePlanningPage";
import { TrustLitigationPage } from "./screens/TrustLitigationPage";
import { RealEstatePage } from "./screens/RealEstatePage";
import { TaxPage } from "./screens/TaxPage";
import { ImmigrationPage } from "./screens/ImmigrationPage";
import { CriminalDefensePage } from "./screens/CriminalDefensePage";
import { DuiPage } from "./screens/DuiPage";
import { FederalCriminalPage } from "./screens/FederalCriminalPage";
import { WhiteCollarPage } from "./screens/WhiteCollarPage";
import { CivilLitigationPage } from "./screens/CivilLitigationPage";
import { CapabilitiesLandingPage } from "./screens/CapabilitiesLandingPage";
import { BackToTop } from "./components/ATLAW/BackToTop";
import { ScrollToTop } from "./components/ATLAW/ScrollToTop";
import "../tailwind.css";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<ATLAWLandingPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/our-people" element={<OurPeoplePage />} />
        <Route path="/contact" element={<ContactPage />} />
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
      <BackToTop />
    </BrowserRouter>
  </StrictMode>,
);
