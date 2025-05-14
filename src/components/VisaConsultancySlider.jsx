import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { FiAlignJustify } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import logo from "../assets/finallogo.jpeg";
import img1 from "../assets/facebook.png";
import img2 from "../assets/googlemap.png";
import img3 from "../assets/whatsapp.png";
import slider1 from "../assets/22222.jpeg";
import slider2 from "../assets/work1.jpeg";
import slider3 from "../assets/55555.jpeg";
import slider4 from "../assets/work4.jpeg";

const abroad = [
  { path: '/pcl-in-general-medicine', label: 'PCL In General Medicine (HA)' },
  { path: '/diploma-in-pharmacy', label: 'Diploma In Pharmacy' },
  { path: '/pcl-in-nursing', label: 'PCL IN NURSING' },
  { path: '/caregiver-program', label: 'Caregiver Program' },
];

const navLinks = [
  { path: '/contact', label: 'CONTACT US' },
  { path: '/gallery', label: 'GALLERY' },
];

const images = [
  { src: slider1, alt: "1" },
  { src: slider2, alt: "2" },
  { src: slider3, alt: "3" },
  { src: slider4, alt: "4" },
];

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobile, setShowMobile] = useState(false);
  const [loaded, setLoaded] = useState(Array(images.length).fill(false));

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const toggleMobile = () => setShowMobile(!showMobile);

  const handleImageLoad = (index) => {
    const copy = [...loaded];
    copy[index] = true;
    setLoaded(copy);
  };

  return (
    <div className="relative">
      {/* NAVBAR */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-20 bg-black bg-opacity-40 text-white">
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-[120px]" />

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 items-center text-sm font-medium">
          <Link to="/" className="hover:text-[#07A2BB]">HOME</Link>
          <Link to="/about" className="hover:text-[#07A2BB]">ABOUT</Link>
          <div className="relative cursor-pointer" onClick={toggleDropdown}>
            <div className="flex items-center gap-1 hover:text-[#07A2BB]">
              ACADEMIC PROGRAM
              {showDropdown ? <AiOutlineUp /> : <AiOutlineDown />}
            </div>
            {showDropdown && (
              <div className="absolute top-8 bg-white text-black shadow-md rounded-md mt-2 w-64">
                {abroad.map((item) => (
                  <Link key={item.path} to={item.path} className="block px-4 py-2 hover:bg-[#07A2BB]">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {navLinks.map(({ path, label }) => (
            <Link key={path} to={path} className="hover:text-[#07A2BB]">
              {label}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden lg:flex gap-2">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img src={img1} alt="Facebook" className="h-6 w-6" />
          </a>
          <a href="https://maps.google.com" target="_blank" rel="noreferrer">
            <img src={img2} alt="Map" className="h-6 w-6" />
          </a>
          <a href="https://wa.me/+9779801125262" target="_blank" rel="noreferrer">
            <img src={img3} alt="WhatsApp" className="h-6 w-6" />
          </a>
        </div>

        {/* Mobile toggle */}
        <FiAlignJustify className="lg:hidden text-white text-2xl" onClick={toggleMobile} />
      </nav>

      {/* SLIDER */}
      <Swiper
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Autoplay]}
        loop
        className="relative z-10"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full h-[100vh] flex items-center justify-center relative">
              {!loaded[idx] && (
                <div className="absolute inset-0 bg-gray-300 animate-pulse flex items-center justify-center text-white text-lg">Loading...</div>
              )}
              <img
                src={img.src}
                alt={img.alt}
                onLoad={() => handleImageLoad(idx)}
                className={`w-full h-full object-cover transition-opacity duration-700 ${
                  loaded[idx] ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Optional mobile sidebar (to be added as needed) */}
    </div>
  );
};

export default Navbar;
