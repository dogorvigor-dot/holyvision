import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'; // Add this for styling
import whatsappImage from './assets/whatsapp.png'; // Import WhatsApp image

import Home from './pages/Home';
import Contact from './pages/Contact';
import AustraliaPage from './pages/AustraliaPage';
import USAPage from './pages/USAPage ';
import CanadaPage from './pages/CanadaPage';
import UKPage from './pages/UkPage';
import About from './pages/About';

import NewzealandPage from './pages/NewzealandPage';
import EuropePage from './pages/EuropePage';
import UniversitySelectionPage from './pages/UniversitySelection';
import CourseGuidancePage from './pages/CourseGuidancePage';
import ScholarshipAssistancePage from './pages/ScholarshipAssistancePage';
import AdmissionsCounselingPage from './pages/AdmissionsCounselingPage';
import PreDepartureOrientationPage from './pages/PreDepartureOrientationPage';
import VisaProcessingPage from './pages/VisaProcessingPage';
import AcademicPlanningPage from './pages/AcademicPlanningPage';
import PostArrivalSupportPage from './pages/PostArrivalSupportPage';





const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* Routes for different pages */}
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/intandem" element={<Home />} />
          <Route path="/study-in-canada" element={<CanadaPage />} />
          <Route path="/study-in-usa" element={<USAPage />} />
          <Route path="/study-in-uk" element={<UKPage />} />
          <Route path="/study-in-australia" element={<AustraliaPage />} />
          <Route path="/study-in-new-zealand" element={<NewzealandPage />} />
          <Route path="/study-in-europe" element={<EuropePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
         
          <Route path="/services/university-selection" element={<UniversitySelectionPage />} />
         
        
          <Route path="/services/course-guidance" element={<CourseGuidancePage />} />
          <Route path="/services/scholarship-assistance" element={<ScholarshipAssistancePage />} />
          <Route path="/services/admissions-counseling" element={<AdmissionsCounselingPage />} />
          <Route path="/services/visa-processing" element={<VisaProcessingPage />} />
          <Route path="/services/academic-planning" element={<AcademicPlanningPage />} />
          <Route path="/services/pre-departure-orientation" element={<PreDepartureOrientationPage />} />
          <Route path="/services/post-arrival-support" element={<PostArrivalSupportPage />} />
       
        
        </Routes>

        {/* WhatsApp button as an image */}
        <a
          href="https://wa.me/+9779801125262"
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
