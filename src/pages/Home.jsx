import React, { useEffect } from "react";
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import InfoCards from '../components/InfoCards';



import Footer from '../components/Footer';
import ServicesComponent from '../components/ServicesComponent ';
import Reviews from '../components/Reviews';
import DirectContactUs from '../components/DirectContact';

import CourseDetails from '../components/CourseDetails';
import FAQComponent from '../components/FAQs';
import ContactusComponent from '../components/ContactusComponent';
import AboutIntandem from '../components/AboutComponent';
import GallerySlider from '../components/GallerySlider';

import AchievementSection from "../components/Achievements";
import BoardOfDirectors from "../components/StaffInfo";




const Home = () => {
  useEffect(() => {
    // Scroll to the top when the page loads
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {/* Navbar is fixed, so we add a wrapper with padding */}
      <div>
        <Navbar />
      </div>
      
      {/* Main content section */}
      <div className="w-full flex-shrink-0 overflow-hidden">
      
        <InfoCards/>
     <CourseDetails/>
     <AboutIntandem/>
     <ServicesComponent/>
       <BoardOfDirectors/>
       <AchievementSection/>
       <FAQComponent/>
        <DirectContactUs/>
        <GallerySlider/>
        <Contact />
    <ContactusComponent/>
      
       
       
       
        <Reviews/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
