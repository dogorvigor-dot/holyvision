import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

import { MdOutlineClose } from 'react-icons/md';
import { FiAlignJustify } from "react-icons/fi";
import logo from '../assets/finallogo.jpeg'; // Main logo
import logo1 from '../assets/finallogo.jpeg'; // Sidebar logo
import img1 from '../assets/facebook.png';
import img2 from '../assets/googlemap.png';
import img3 from '../assets/whatsapp.png';
import img4 from '../assets/linkedin.png';

const services = [


  
 
  
  
];

const abroad = [
  { path: '/pcl-in-general-medicine', label: 'PCL In General Medicine (HA)' },
  { path: '/diploma-in-pharmacy', label: 'Diploma In Pharmacy' },
  { path: '/pcl-in-nursing', label: 'PCL IN NURSING ' },

];

const navLinks = [
  
 
  { path: '/contact', label: 'CONTACT US' },
  { path: '/gallery', label: 'GALLERY' },
];

const Navbar = () => {
   useEffect(() => {
      // Scroll to the top when the page loads
      window.scrollTo(0, 0);
    }, []);
  
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showSidebar1, setShowSidebar1] = useState(false);


  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  const toggleDropdown1 = () => setShowDropdown1(!showDropdown1);
  const toggleSidebar1 = () => setShowSidebar1(!showSidebar1);


  const renderServicesDropdown = () => (
    <div className="bg-white mt-2 rounded-lg shadow-lg">
      {services.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          className="block bg-gray-100 hover:bg-[#07A2BB] text-gray-700 text-sm text-center py-2 px-2 rounded-md shadow transition-all"
          onClick={() => {
            setShowDropdown(false);
            setShowSidebar(false);
          }}
        >
          {label}
        </Link>
      ))}
    </div>
  );

  
  const renderStudyAbroadDropdown = () => (
    <div className="bg-white mt-2 rounded-lg shadow-lg">
      {abroad.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          className="block bg-gray-100 hover:bg-[#07A2BB] text-gray-700 text-sm text-center py-2 px-2 rounded-md shadow transition-all"
          onClick={() => {
            setShowDropdown1(false);
            setShowSidebar1(false);
          }}
        >
          {label}
        </Link>
      ))}
    </div>
  );

  return (
    <>
      <style>{`
        .zoom-effect {
          transition: transform 0.3s ease-in-out;
        }
        .zoom-effect:hover {
          transform: scale(1.1);
        }
      `}</style>

<nav className="w-full bg-white shadow-md sm:px-6 sm:py-3 pr-4 flex justify-between items-center fixed top-0 left-0 z-50">


        {/* Logo */}
        <div className="flex items-center  ">
          <img src={logo} alt="Intandem Scholars Logo" className="w-[100px]  md:w-[130px] " />
          
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-lg">
          <Link to="/" className="text-[#099BA4] font-medium hover:text-[#038A58]">
           HOME
          </Link>
          
          <Link to="/about" className=" text-gray-700 hover:text-[#07A2BB]">
           ABOUT
          </Link>
         

          <div
            className="relative text-gray-700 cursor-pointer hover:text-[#038A58]"
            onClick={toggleDropdown1}
          >
            <div className="flex items-center gap-1">
              <span>ACADEMIC PROGRAM AND SCHOLARSHIP</span>
              {showDropdown1 ? <AiOutlineUp /> : <AiOutlineDown />}
            </div>
            {showDropdown1 && (
              <div className="absolute top-12 bg-white p-2 grid grid-cols-1 sm:grid-cols-2 gap-2 z-[1] shadow-lg rounded-lg w-[250px]">
                {abroad.map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className="block bg-gray-100 hover:bg-[#07A2BB] text-gray-700 text-sm text-center py-2 px-2 rounded-md shadow transition-all"
                    onClick={() => setShowDropdown1(false)}
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
              className="text-gray-700 hover:text-[#07A2BB] transition-all"
            >
              {label}
            </Link>
          ))}
         <div className="flex gap-2">
  <a
    href="https://www.facebook.com/share/1DvKTYh2j5/?mibextid=wwXIfr"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transform transition-transform duration-300"
  >
    <img src={img1} alt="Facebook" className="h-[40px] w-[40px] object-contain" />
  </a>
  <a
    href="https://www.google.com/maps/place/Holy+Vision+Technical+Campus/@27.6907731,85.3335731,17.75z/data=!4m6!3m5!1s0x39eb19957c935b35:0x75b06ec216c597d5!8m2!3d27.691029!4d85.3336338!16s%2Fg%2F11b6gdw10d?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transform transition-transform duration-300"
  >
    <img src={img2} alt="Google Maps" className="h-[40px] w-[40px] object-contain" />
  </a>
  <a
    href="https://wa.me/+9779801125262"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transform transition-transform duration-300"
  >
    <img src={img3} alt="WhatsApp" className="h-[40px] w-[40px] object-contain" />
  </a>
  <a
    href="https://www.linkedin.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transform transition-transform duration-300"
  >
    <img src={img4} alt="LinkedIn" className="h-[40px] w-[40px] object-contain" />
  </a>
</div>

        </div>

        {/* Mobile Menu Button */}
        <FiAlignJustify className="text-3xl lg:hidden cursor-pointer text-[#286CFF]" onClick={toggleSidebar} />

        {/* Mobile Sidebar */}
        {showSidebar && (
          <div className="fixed top-0 left-0 w-[300px] h-full bg-white shadow-lg z-[2] flex flex-col">
            <MdOutlineClose
              className="absolute top-4 right-4 text-3xl text-gray-700 cursor-pointer hover:text-gray-900"
              onClick={toggleSidebar}
            />
            <div className="flex justify-center    ">
              <img
                src={logo1}
                alt="Intandem Scholars Sidebar Logo"
                className="h-[100px] object-contain zoom-effect  "
              />
            </div>
            <Link
              to="/"
              className="text-[#099BA4] font-medium py-3 px-6 border-b border-gray-200 hover:bg-gray-100"
              onClick={toggleSidebar1}
            >
              Home
            </Link>
            <Link
              to="/about"
              className=" py-3 px-6 border-b border-gray-200 hover:bg-[#07A2BB]"
              onClick={toggleSidebar1}
            >
              ABOUT
            </Link>
          
          
            <div className="border-b border-gray-200 px-6">
              <button
                onClick={toggleDropdown1}
                className="flex justify-between items-center w-full py-3 text-gray-700"
              >
                <span>COURSES</span>
                {showDropdown1 ? <AiOutlineUp /> : <AiOutlineDown />}
              </button>
              {showDropdown1 && <div className="mt-2">{renderStudyAbroadDropdown()}</div>}
            </div>
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className="py-3 px-6 border-b border-gray-200 hover:bg-[#07A2BB]"
                onClick={toggleSidebar}
              >
                {label}
              </Link>
            ))}
           <div className="flex justify-center gap-2 mt-4 px-6">
  <a
    href="https://www.facebook.com/share/1DvKTYh2j5/?mibextid=wwXIfr"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transform transition-transform duration-300"
  >
    <img src={img1} alt="Facebook" className="h-[40px] w-[40px] object-contain" />
  </a>
  <a
    href="https://www.google.com/maps/place/Holy+Vision+Technical+Campus/@27.6907731,85.3335731,17.75z/data=!4m6!3m5!1s0x39eb19957c935b35:0x75b06ec216c597d5!8m2!3d27.691029!4d85.3336338!16s%2Fg%2F11b6gdw10d?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transform transition-transform duration-300"
  >
    <img src={img2} alt="Google Maps" className="h-[40px] w-[40px] object-contain" />
  </a>
  <a
    href="https://wa.me/+9779801125262"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transform transition-transform duration-300"
  >
    <img src={img3} alt="WhatsApp" className="h-[40px] w-[40px] object-contain" />
  </a>
  <a
    href="https://www.linkedin.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transform transition-transform duration-300"
  >
    <img src={img4} alt="LinkedIn" className="h-[40px] w-[40px] object-contain" />
  </a>
</div>

          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;