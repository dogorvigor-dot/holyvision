import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'; // Add this for styling
import whatsappImage from './assets/whatsapp.png'; // Import WhatsApp image

import Home from './pages/Home';
import Contact from './pages/Contact';

import About from './pages/About';


import PclGeneralMedicinePage from './pages/GeneralMedicine';
import PclNursingPage from './pages/PCLNursing';
import DiplomaInPharmacyPage from './pages/DiplomaPharmacy';





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
         
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/gallery" element={<Gallery />} /> */}
         
        
        
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
