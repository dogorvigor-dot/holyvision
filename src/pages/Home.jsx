import React from 'react';
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



const Home = () => {
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
        <StaffInfo/>
        <DirectContactUs/>
        <ServicesComponent/>
       
        <Contact />
        <FAQComponent/>
       
        <Reviews/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
