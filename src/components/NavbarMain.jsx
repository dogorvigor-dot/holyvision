import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { FiAlignJustify } from "react-icons/fi";

import logo from "../assets/finallogo3.webp";
import img1 from "../assets/facebook.png";
import img2 from "../assets/googlemap.png";
import img3 from "../assets/whatsapp.png";

const academicLinks = [
  { path: '/pcl-in-general-medicine', label: 'PCL In General Medicine (HA)' },
  { path: '/diploma-in-pharmacy', label: 'Diploma In Pharmacy' },
  { path: '/pcl-in-nursing', label: 'PCL IN NURSING ' },
  { path: '/caregiver-program', label: 'Caregiver Program' },
  { path: "/scholarship", label: "Scholarship" },
];

const aboutLinks = [
  { path: "/introduction", label: "Introduction" },
  { path: "/board-of-directors", label: "Board of Directors" },
  { path: "/team", label: "Team" },
];

const navLinks = [
  { path: '/contact', label: 'CONTACT US' },
  { path: '/gallery', label: 'GALLERY' },
  { path: '/notice', label: 'NOTICE' },
];

const NavbarMain = () => {
  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(null); // "academic" | "about" | null
  const [showSidebar, setShowSidebar] = useState(false);

  const dropdownRef = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  // CLICK OUTSIDE
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(null);
      }
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setShowSidebar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogoClick = () => {
    navigate('/');
    window.location.reload();
  };

  return (
    <>
      <nav className="w-full bg-white shadow-md sm:px-6 sm:py-3 pr-4 flex justify-between items-center fixed top-0 left-0 z-50">

        {/* LOGO */}
        <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
          <img src={logo} alt="HolyVision Logo" className="w-[100px] md:w-[130px]" />
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-8 text-lg">

          <Link to="/" className="text-[#099BA4] font-medium hover:text-[#038A58]">HOME</Link>

          {/* ABOUT DROPDOWN */}
          <div
            className="relative text-gray-700 cursor-pointer hover:text-[#038A58]"
            onClick={() => setShowDropdown(showDropdown === "about" ? null : "about")}
          >
            <div className="flex items-center gap-1">
              <span>ABOUT</span>
              {showDropdown === "about" ? <AiOutlineUp /> : <AiOutlineDown />}
            </div>

            {showDropdown === "about" && (
              <div ref={dropdownRef} className="absolute top-12 bg-white p-2 grid grid-cols-1 gap-2 z-[100] shadow-lg rounded-lg w-[220px]">
                {aboutLinks.map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className="block bg-gray-100 hover:bg-[#07A2BB] text-gray-700 text-sm text-center py-2 px-2 rounded-md shadow transition-all"
                    onClick={() => setShowDropdown(null)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* ACADEMIC DROPDOWN */}
          <div
            className="relative text-gray-700 cursor-pointer hover:text-[#038A58]"
            onClick={() => setShowDropdown(showDropdown === "academic" ? null : "academic")}
          >
            <div className="flex items-center gap-1">
              <span>ACADEMIC</span>
              {showDropdown === "academic" ? <AiOutlineUp /> : <AiOutlineDown />}
            </div>

            {showDropdown === "academic" && (
              <div ref={dropdownRef} className="absolute top-12 bg-white p-2 grid grid-cols-1 sm:grid-cols-2 gap-2 z-[100] shadow-lg rounded-lg w-[250px]">
                {academicLinks.map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className="block bg-gray-100 hover:bg-[#07A2BB] text-gray-700 text-sm text-center py-2 px-2 rounded-md shadow transition-all"
                    onClick={() => setShowDropdown(null)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT LINKS */}
          {navLinks.map(({ path, label }) => (
            <Link key={path} to={path} className="text-gray-700 hover:text-[#07A2BB] transition-all">
              {label}
            </Link>
          ))}

          {/* SOCIAL ICONS */}
          <div className="flex gap-2">
            <a href="https://www.facebook.com/share/1DvKTYh2j5/?mibextid=wwXIfr" target="_blank">
              <img src={img1} className="h-[40px] w-[40px]" />
            </a>
            <a href="https://www.google.com/maps/place/Holy+Vision+Technical+Campus" target="_blank">
              <img src={img2} className="h-[40px] w-[40px]" />
            </a>
            <a href="https://wa.me/+9779851380074" target="_blank">
              <img src={img3} className="h-[40px] w-[40px]" />
            </a>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <FiAlignJustify
          className="text-3xl lg:hidden cursor-pointer text-[#286CFF]"
          onClick={() => setShowSidebar(true)}
        />

        {/* MOBILE SIDEBAR */}
        {showSidebar && (
          <div className="fixed top-0 left-0 w-[300px] h-full bg-white shadow-lg z-[200] flex flex-col" ref={sidebarRef}>

            <MdOutlineClose
              className="absolute top-4 right-4 text-3xl text-gray-700 cursor-pointer"
              onClick={() => setShowSidebar(false)}
            />

            <div className="flex justify-center mt-8 cursor-pointer" onClick={handleLogoClick}>
              <img src={logo} alt="Logo" className="h-[100px]" />
            </div>

            <Link to="/" className="py-3 px-6 border-b hover:bg-gray-100" onClick={() => setShowSidebar(false)}>HOME</Link>

            {/* MOBILE ABOUT DROPDOWN */}
            <div className="border-b px-6">
              <button
                className="flex justify-between items-center w-full py-3 text-gray-700"
                onClick={() => setShowDropdown(showDropdown === "about" ? null : "about")}
              >
                <span>ABOUT</span>
                {showDropdown === "about" ? <AiOutlineUp /> : <AiOutlineDown />}
              </button>

              {showDropdown === "about" && (
                <div className="mt-2">
                  {aboutLinks.map(({ path, label }) => (
                    <Link
                      key={path}
                      to={path}
                      className="block bg-gray-100 hover:bg-[#07A2BB] py-2 px-2 text-center rounded-md shadow transition-all mb-1"
                      onClick={() => setShowSidebar(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* MOBILE ACADEMIC DROPDOWN */}
            <div className="border-b px-6">
              <button
                className="flex justify-between items-center w-full py-3 text-gray-700"
                onClick={() => setShowDropdown(showDropdown === "academic" ? null : "academic")}
              >
                <span>ACADEMIC</span>
                {showDropdown === "academic" ? <AiOutlineUp /> : <AiOutlineDown />}
              </button>

              {showDropdown === "academic" && (
                <div className="mt-2">
                  {academicLinks.map(({ path, label }) => (
                    <Link
                      key={path}
                      to={path}
                      className="block bg-gray-100 hover:bg-[#07A2BB] py-2 px-2 text-center rounded-md shadow transition-all mb-1"
                      onClick={() => setShowSidebar(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map(({ path, label }) => (
              <Link key={path} to={path} className="py-3 px-6 border-b hover:bg-[#07A2BB]" onClick={() => setShowSidebar(false)}>
                {label}
              </Link>
            ))}

            {/* SOCIAL ICONS */}
            <div className="flex justify-center gap-2 mt-4 px-6">
              <a href="#" target="_blank"><img src={img1} className="h-[40px] w-[40px]" /></a>
              <a href="#" target="_blank"><img src={img2} className="h-[40px] w-[40px]" /></a>
              <a href="#" target="_blank"><img src={img3} className="h-[40px] w-[40px]" /></a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavbarMain;
