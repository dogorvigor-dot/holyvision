import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ContactusComponent from '../components/ContactusComponent';
import DirectContactUs from '../components/DirectContact';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import NavbarMain from '../components/NavbarMain';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <NavbarMain />
      <div className="pt-[120px] mb-7">
        <ContactusComponent />
      </div>
      <DirectContactUs />
      <Contact />
      <Footer />
    </>
  );
};

export default ContactPage;
