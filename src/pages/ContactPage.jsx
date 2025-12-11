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

    // SEO Meta Tag Injection
    const head = document.head;

    const title = document.createElement('title');
    title.innerText = 'Contact | Holy Vision Technical Campus – Get in Touch with Nepal’s Best CTEVT College';
    head.appendChild(title);

    const metaDesc = document.createElement('meta');
    metaDesc.name = 'description';
    metaDesc.content = 'Reach out to Holy Vision Technical Campus in Kathmandu. Contact us for admissions, program details, and campus visits. We are one of Nepal’s leading CTEVT healthcare colleges.';
    head.appendChild(metaDesc);

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'Holy Vision contact, HVTC address, Kathmandu CTEVT college contact, nursing admissions Nepal, general medicine course Nepal, diploma pharmacy contact, caregiver course Kathmandu, best CTEVT college';
    head.appendChild(metaKeywords);
  }, []);

  return (
    <>
      <NavbarMain />
      <div className="pt-[120px] mb-7">
        <DirectContactUs />
      </div>
      <Contact />
        <ContactusComponent />
      <Footer />
    </>
  );
};

export default ContactPage;
