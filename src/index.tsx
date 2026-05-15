import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ATLAWLandingPage } from "./screens/ATLAWLandingPage";
import { AboutUsPage } from "./screens/AboutUsPage";
import { OurPeoplePage } from "./screens/OurPeoplePage";
import { ContactPage } from "./screens/ContactPage";
import "../tailwind.css";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ATLAWLandingPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/our-people" element={<OurPeoplePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
