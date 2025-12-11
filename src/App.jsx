import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import whatsappImage from "./assets/whatsapp.png";

// Existing Pages
import Home from "./pages/Home";
import About from "./pages/About";
import PclGeneralMedicinePage from "./pages/GeneralMedicine";
import PclNursingPage from "./pages/PCLNursing";
import DiplomaInPharmacyPage from "./pages/DiplomaPharmacy";
import GalleryContent from "./pages/Gallery";
import ContactPage from "./pages/ContactPage";
import CaregiverProgramPage from "./pages/Caregiver";
import Scholarship from "./pages/Scholarship";
import Notice from "./pages/Notice";
import ApplyPage from "./components/ApplyPage";

// NEW PAGES
import Introduction from "./pages/Introduction";
import BoardOfDirector from "./pages/BoardOfDirector";   // ✔ correct
import Team from "./pages/Team";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/holyvision" element={<Home />} />

          {/* Academic Programs */}
          <Route path="/pcl-in-general-medicine" element={<PclGeneralMedicinePage />} />
          <Route path="/pcl-in-nursing" element={<PclNursingPage />} />
          <Route path="/diploma-in-pharmacy" element={<DiplomaInPharmacyPage />} />
          <Route path="/caregiver-program" element={<CaregiverProgramPage />} />

          {/* General Pages */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<GalleryContent />} />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/apply" element={<ApplyPage />} />

          {/* NEW PAGES */}
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/board-of-directors" element={<BoardOfDirector />} />  {/* ✔ FIXED */}
          <Route path="/team" element={<Team />} />
        </Routes>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/+9779851380074"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <img src={whatsappImage} alt="WhatsApp" />
        </a>
      </div>
    </BrowserRouter>
  );
};

export default App;
