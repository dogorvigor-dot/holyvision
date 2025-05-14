import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { FiAlignJustify } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import logo from "../assets/finallogo3.png";
import img1 from "../assets/facebook.png";
import img2 from "../assets/googlemap.png";
import img3 from "../assets/whatsapp.png";


import slide2 from "../assets/55555.jpeg";
import slide3 from "../assets/work1.jpeg";
import slide4 from "../assets/work4.jpeg";

const abroad = [
  { path: "/pcl-in-general-medicine", label: "PCL In General Medicine (HA)" },
  { path: "/diploma-in-pharmacy", label: "Diploma In Pharmacy" },
  { path: "/pcl-in-nursing", label: "PCL IN NURSING" },
  { path: "/caregiver-program", label: "Caregiver Program" },
];

const navLinks = [
  { path: "/contact", label: "CONTACT US" },
  { path: "/gallery", label: "GALLERY" },
];

const images = [ slide2,slide4, slide3];

export default function NavbarWithSliderOverlay() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Swiper
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        modules={[Autoplay]}
        className="w-full h-screen absolute top-0 left-0 z-0"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-screen object-cover"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <nav className="absolute top-0 left-0 w-full px-4 md:px-10 py-4 flex justify-between  items-center z-10">
        <img src={logo} alt="Logo" className="w-[100px] md:w-[130px]  " />
        <div className="hidden lg:flex gap-8 items-center text-md text-white font-extrabold">
          <Link to="/" className="hover:text-blue-400">HOME</Link>
          <Link to="/about" className="hover:text-blue-400">ABOUT</Link>
          <div className="relative cursor-pointer" onClick={() => setShowDropdown(!showDropdown)}>
            <div className="flex items-center gap-1 hover:text-blue-400">
              ACADEMIC PROGRAM
              {showDropdown ? <AiOutlineUp /> : <AiOutlineDown />}
            </div>
            {showDropdown && (
              <div className="absolute top-8 bg-white text-yellow-500 shadow-md rounded-md mt-2 w-64">
                {abroad.map(({ path, label }) => (
                  <Link key={path} to={path} className="block px-4 py-2 hover:bg-[#07A2BB]">
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {navLinks.map(({ path, label }) => (
            <Link key={path} to={path} className="hover:text-blue-400">
              {label}
            </Link>
          ))}
          <div className="flex gap-2">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src={img1} alt="Facebook" className="h-8 w-8" />
            </a>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer">
              <img src={img2} alt="Map" className="h-8 w-8" />
            </a>
            <a href="https://wa.me/+9779801125262" target="_blank" rel="noreferrer">
              <img src={img3} alt="WhatsApp" className="h-8 w-8" />
            </a>
          </div>
        </div>
        <FiAlignJustify className="text-3xl text-white lg:hidden" onClick={() => setShowSidebar(true)} />
      </nav>

      {showSidebar && (
        <div className="fixed top-0 left-0 w-[300px] h-full bg-white shadow-lg z-20 flex flex-col">
          <MdOutlineClose
            className="absolute top-4 right-4 text-3xl text-black cursor-pointer"
            onClick={() => setShowSidebar(false)}
          />
          <img src={logo} alt="Sidebar Logo" className="h-[100px] object-contain mt-4" />
          <Link to="/" className="py-3 px-6 border-b" onClick={() => setShowSidebar(false)}>Home</Link>
          <Link to="/about" className="py-3 px-6 border-b" onClick={() => setShowSidebar(false)}>About</Link>
          {abroad.map(({ path, label }) => (
            <Link key={path} to={path} className="py-3 px-6 border-b" onClick={() => setShowSidebar(false)}>
              {label}
            </Link>
          ))}
          {navLinks.map(({ path, label }) => (
            <Link key={path} to={path} className="py-3 px-6 border-b" onClick={() => setShowSidebar(false)}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
