import React, { useEffect } from "react";
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import InfoCards from '../components/InfoCards';


import VisaConsultancySlider from '../components/VisaConsultancySlider';
import Footer from '../components/Footer';
import ServicesComponent from '../components/ServicesComponent ';
import Reviews from '../components/Reviews';
import DirectContactUs from '../components/DirectContact';
import StaffInfo from '../components/StaffInfo';
import CourseDetails from '../components/CourseDetails';
import FAQComponent from '../components/FAQs';
import ContactusComponent from '../components/ContactusComponent';
import AboutIntandem from '../components/AboutComponent';
import GallerySlider from '../components/GallerySlider';
import Achievements from "../components/Achievements";
import AchievementSection from "../components/Achievements";




const Home = () => {
  useEffect(() => {
    // Scroll to the top when the page loads
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {/* Navbar is fixed, so we add a wrapper with padding */}
      <div className="pt-[70px]">
        <Navbar />
      </div>
      
      {/* Main content section */}
      <div className="w-full flex-shrink-0 overflow-hidden">
        <VisaConsultancySlider/>
        <InfoCards/>
     <CourseDetails/>
     <AboutIntandem/>
        <StaffInfo/>
        <DirectContactUs/>
        <ServicesComponent/>
     
    <ContactusComponent/>
        <Contact />
        <AchievementSection/>
        <FAQComponent/>
        <GallerySlider/>
       
        <Reviews/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
