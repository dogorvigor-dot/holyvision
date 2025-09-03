import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'; // Add this for styling
import whatsappImage from './assets/whatsapp.png'; // Import WhatsApp image
import Home from './pages/Home';
import About from './pages/About';
import PclGeneralMedicinePage from './pages/GeneralMedicine';
import PclNursingPage from './pages/PCLNursing';
import DiplomaInPharmacyPage from './pages/DiplomaPharmacy';
import GalleryContent from './pages/Gallery';
import ContactPage from './pages/ContactPage';
import CaregiverProgramPage from './pages/Caregiver';
import Scholarship from './pages/Scholarship';
import Notice from './pages/Notice';





const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* Routes for different pages */}
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/holyvision" element={<Home />} />
          <Route path="/pcl-in-general-medicine" element={<PclGeneralMedicinePage />} />
          <Route path="/pcl-in-nursing" element={<PclNursingPage />} />
          <Route path="/diploma-in-pharmacy" element={<DiplomaInPharmacyPage />} />
          <Route path="/caregiver-program" element={<CaregiverProgramPage />} />
         
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<GalleryContent />} /> 
          <Route path="/scholarship" element={<Scholarship />} /> 
          <Route path="/notice" element={<Notice />} /> 
         
        
        
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
