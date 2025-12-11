import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { FiAlignJustify } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import logo from "../assets/finallogo3.webp";
import logo1 from "../assets/finallogo3.webp";

import img1 from "../assets/facebook.png";
import img2 from "../assets/googlemap.png";
import img3 from "../assets/whatsapp.png";

import slide2 from "../assets/55555.webp";
import slide3 from "../assets/np8.jpeg";
import slide4 from "../assets/work4.webp";

/* ------------------------
   ACADEMIC LINKS
-------------------------*/
const academic = [
  { path: "/pcl-in-general-medicine", label: "PCL In General Medicine (HA)" },
  { path: "/diploma-in-pharmacy", label: "Diploma In Pharmacy" },
  { path: "/pcl-in-nursing", label: "PCL IN NURSING" },
  { path: "/caregiver-program", label: "Caregiver Program" },
  { path: "/scholarship", label: "Scholarship" },
];

/* ------------------------
   ABOUT DROPDOWN LINKS
-------------------------*/
const aboutLinks = [
  { path: "/introduction", label: "Introduction" },
  { path: "/board-of-directors", label: "Board of Directors" },
  { path: "/team", label: "Team" },
];

const navLinks = [
  { path: "/contact", label: "CONTACT US" },
  { path: "/gallery", label: "GALLERY" },
  { path: "/notice", label: "NOTICE" },
];

const images = [slide2, slide3, slide4];

export default function NavbarWithSliderOverlay() {
  const [dropdown, setDropdown] = useState(null); // 'about', 'academic', null
  const [showSidebar, setShowSidebar] = useState(false);

  // Toggle dropdowns with unique names
  const toggleDropdown = (name) => {
    setDropdown(dropdown === name ? null : name);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
    setDropdown(null);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* BACKGROUND SLIDER */}
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

      {/* TOP NAVBAR */}
      <nav className="absolute top-0 left-0 w-full px-4 sm:px-6 md:px-10 py-4 flex justify-between items-center z-10">
        <Link to="/" onClick={() => window.location.reload()}>
          <img
            src={logo}
            alt="Logo"
            className="w-[60px] sm:w-[100px] md:w-[130px] cursor-pointer"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex gap-8 items-center text-md text-white font-extrabold">

          <Link to="/" className="hover:text-blue-400">HOME</Link>

          {/* ABOUT DROPDOWN */}
          <div
            className="relative cursor-pointer"
            onClick={() => toggleDropdown("about")}
          >
            <div className="flex items-center gap-1 hover:text-blue-400">
              ABOUT {dropdown === "about" ? <AiOutlineUp /> : <AiOutlineDown />}
            </div>

            {dropdown === "about" && (
              <div className="absolute top-8 bg-white text-black shadow-md rounded-md mt-2 w-64 z-50">
                {aboutLinks.map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className="block px-4 py-2 hover:bg-[#07A2BB]"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* ACADEMIC DROPDOWN */}
          <div
            className="relative cursor-pointer"
            onClick={() => toggleDropdown("academic")}
          >
            <div className="flex items-center gap-1 hover:text-blue-400">
              ACADEMIC 
              {dropdown === "academic" ? <AiOutlineUp /> : <AiOutlineDown />}
            </div>

            {dropdown === "academic" && (
              <div className="absolute top-8 bg-white text-black shadow-md rounded-md mt-2 w-64 z-50">
                {academic.map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className="block px-4 py-2 hover:bg-[#07A2BB]"
                  >
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

          {/* SOCIAL ICONS */}
          <div className="flex gap-2">
            <a href="https://facebook.com" target="_blank">
              <img src={img1} className="h-8 w-8" />
            </a>
            <a href="https://maps.google.com" target="_blank">
              <img src={img2} className="h-8 w-8" />
            </a>
            <a href="https://wa.me/+9779851380074" target="_blank">
              <img src={img3} className="h-8 w-8" />
            </a>
          </div>

        </div>

        {/* MOBILE MENU BUTTON */}
        <FiAlignJustify
          className="text-3xl text-white lg:hidden"
          onClick={() => setShowSidebar(true)}
        />
      </nav>

      {/* MOBILE SIDEBAR */}
      {showSidebar && (
        <div className="fixed top-0 left-0 w-[300px] h-full bg-white shadow-2xl z-[60] flex flex-col">
          <MdOutlineClose
            className="absolute top-4 right-4 text-3xl text-gray-700 cursor-pointer hover:text-red-500"
            onClick={closeSidebar}
          />

          <div className="flex justify-center my-6">
            <Link to="/" onClick={() => window.location.reload()}>
              <img src={logo1} alt="logo" className="h-[80px]" />
            </Link>
          </div>

          <nav className="flex flex-col px-4 gap-1">

            <Link
              to="/"
              className="py-3 border-b text-[#099BA4] font-semibold hover:bg-gray-100"
              onClick={closeSidebar}
            >
              Home
            </Link>

            {/* ABOUT MOBILE DROPDOWN */}
            <div className="border-b">
              <button
                className="flex justify-between items-center w-full py-3 text-gray-800 font-semibold"
                onClick={() => toggleDropdown("about")}
              >
                ABOUT {dropdown === "about" ? <AiOutlineUp /> : <AiOutlineDown />}
              </button>

              {dropdown === "about" && (
                <div className="mt-1">
                  {aboutLinks.map(({ path, label }) => (
                    <Link
                      key={path}
                      to={path}
                      className="block px-4 py-2 hover:bg-[#07A2BB] hover:text-white rounded"
                      onClick={closeSidebar}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* ACADEMIC MOBILE DROPDOWN */}
            <div className="border-b">
              <button
                className="flex justify-between items-center w-full py-3 text-gray-800 font-semibold"
                onClick={() => toggleDropdown("academic")}
              >
                ACADEMIC {dropdown === "academic" ? <AiOutlineUp /> : <AiOutlineDown />}
              </button>

              {dropdown === "academic" && (
                <div className="mt-1">
                  {academic.map(({ path, label }) => (
                    <Link
                      key={path}
                      to={path}
                      className="block px-4 py-2 hover:bg-[#07A2BB] hover:text-white rounded"
                      onClick={closeSidebar}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className="py-3 border-b hover:bg-[#07A2BB] hover:text-white rounded"
                onClick={closeSidebar}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center gap-3 mt-auto py-6">
            <img src={img1} className="h-8 w-8" />
            <img src={img2} className="h-8 w-8" />
            <img src={img3} className="h-8 w-8" />
          </div>
        </div>
      )}
    </div>
  );
}
