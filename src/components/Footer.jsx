import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "../assets/finallogo2.png";
import bgImage from "../assets/background.jpg"; // Make sure the image exists

const Footer = () => {
  return (
    <footer className="text-white relative">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      ></div>

      {/* Overlay + Content */}
      <div className="relative z-10 py-10 px-6 sm:px-12 bg-black/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* About Section */}
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="h-[100px] w-[120px]" />
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.facebook.com/share/1DvKTYh2j5/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full text-teal-700 hover:bg-teal-500 hover:text-white transition-all duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full text-teal-700 hover:bg-teal-500 hover:text-white transition-all duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Our Courses */}
          <div>
            <h2 className="text-xl font-bold mb-4">Our Courses</h2>
            <ul className="space-y-2 text-sm">
              {[
                { title: "PCL In General Medicine (HA)", link: "/pcl-in-general-medicine" },
                { title: "Diploma In Pharmacy", link: "/diploma-in-pharmacy" },
                { title: "PCL In Nursing", link: "/pcl-in-nursing" },
              ].map((course, index) => (
                <li key={index}>
                  <Link to={course.link} className="hover:text-green-300 transition-all duration-300">
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Helpful Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Helpful Links</h2>
            <ul className="space-y-2 text-sm">
              {["About Us", "Contact Us", "Gallery"].map((link, index) => (
                <li key={index}>
                  <Link
                    to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-green-300 transition-all duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-2">
                <MdEmail className="text-lg text-green-300" />
                <a href="mailto:hvtcampus@gmail.com" className="hover:text-green-300 transition-all duration-300">
                  hvtcampus@gmail.com
                </a>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                <FaPhoneAlt className="text-lg text-green-300" />
                <div className="flex flex-col">
                  <a href="tel:+01-5244745" className="hover:text-green-300 transition-all duration-300">
                  01-5244745
                  </a>
                  <a href="tel:01-4793874" className="hover:text-green-300 transition-all duration-300">
                  01-4793874
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-lg text-green-300" />
                <span className="hover:text-green-300 transition-all duration-300">
                Thapagaun, New Baneshower Kathmandu Nepal
                </span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="relative z-10 bg-gray-800 bg-opacity-80 text-center py-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Holy Vision Technical Campus. All Rights Reserved. Designed by{" "}
          <span className="font-bold hover:text-green-300 transition-all duration-300">
            Clouds Nepal Web
          </span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
