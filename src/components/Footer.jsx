import React, { useEffect, useRef } from 'react';
import aawazLogo from '../assets/logo.png';
import facebookImg from '../assets/facebook.png';
import googleImg from '../assets/googlemap.png';
import whatsappImg from '../assets/whatsapp.png';
import footerbgimage from '../assets/ttt.jpg';
import { Link } from 'react-router-dom';
import { HiOutlineMail } from 'react-icons/hi';
import { MdLocationOn } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import img4 from '../assets/linkedin.png';
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  const navItems1 = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
  ];

  const contactItems = [
    { icon: <BsTelephoneFill />, link: "tel: +977 01-4534655", label: "01-4534655" },
    { icon: <FaWhatsapp   />, link: "tel: +977  9801025694", label: "977 9801025694" },
    { icon: <HiOutlineMail />, link: "mailto:intandemscholars@gmail.com", label: "intandemscholars@gmail.com" },
    { icon: <MdLocationOn />, label: "Battisputali Marg, Purano Baneshwor, Kathmandu,Nepal" },
  ];

  const footerRef = useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.5 };
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        entry.target.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
      });
    };
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <div
      className="w-full relative"
      style={{
        backgroundImage: `url(${footerbgimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Darker red overlay */}
    

      <div
        ref={footerRef}
        className="flex flex-col gap-2 py-4 px-4 sm:px-7 md:flex-row justify-center items-center md:gap-4 lg:gap-8 relative z-10"
        style={{
          animation: 'fadeIn 1s ease forwards',
          animationPlayState: 'paused',
        }}
      >
        {/* Logo Section */}
        <div className="flex flex-col items-center ">
  <Link to="/">
    <img
      src={aawazLogo}
      alt="Intandem Logo"
      className=" w-[250px] transition-transform duration-700 ease-in-out hover:scale-110 mb-1"
    />
  </Link>
  <div className="flex gap-1 mt-0">
    <a href="https://www.facebook.com/share/1A6FSDCwy8/?mibextid=LQQJ4d" className="hover:scale-110 transform transition-transform duration-300">
      <img src={facebookImg} alt="Facebook" className="w-8 h-8" />
    </a>
    <a href="https://www.google.com/maps/dir//Intandem+Scholars,+Battisputali+Marg,+Kathmandu+44600/@27.7020787,85.3406429,17z" className="hover:scale-110 transform transition-transform duration-300">
      <img src={googleImg} alt="Google" className="w-8 h-8" />
    </a>
    <a href="https://wa.me/+9779801025694" className="hover:scale-110 transform transition-transform duration-300">
      <img src={whatsappImg} alt="WhatsApp" className="w-8 h-8" />
    </a>
    <a href="https://www.linkedin.com/company/intandemscholars/?originalSubdomain=np"
    target="_blank" className="hover:scale-110 transform transition-transform duration-300">
      <img src={img4} alt="Linkedin" className="w-8 h-8" />
    </a>
  </div>
</div>

        {/* Quick Links */}
        <NavSection title="Quick Links" items={navItems1} />

        {/* Contact Info */}
        <div className="flex flex-col items-center font-semibold text-[16px] gap-2">
         
          {contactItems.map((item, index) => (
            <ContactItem key={index} icon={item.icon} link={item.link} label={item.label} />
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-2 font-semibold text-gray-800 bg-[#1FD1D7]">
        <span>&copy; 2025 Intandem Scholars, Developed & Design by{" "}
          <a href="https://www.cloudsnepalweb.com/" target="_blank" rel="noopener noreferrer">
            Clouds Nepal Web Pvt. Ltd.
          </a>
        </span>
      </div>

      {/* Inline CSS for Custom Animations */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

const NavSection = ({ items }) => (
  <div className="flex flex-col items-center font-semibold text-[16px] gap-2">
    {items.map((item, index) => (
      <NavItem key={index} link={item.link} label={item.label} />
    ))}
  </div>
);

const NavItem = ({ link, label }) => (
  <div className="flex gap-2 items-center">
    <Link to={link} className="text-gray-700 hover:text-gray-500 transition-colors duration-300">
      {label}
    </Link>
  </div>
);

const ContactItem = ({ icon, link, label }) => (
  <div className="flex gap-2 items-center text-gray-800 hover:text-gray-500 transition-colors duration-300">
    {icon}
    {link ? <a href={link}>{label}</a> : <span>{label}</span>}
  </div>
);

export default Footer;
