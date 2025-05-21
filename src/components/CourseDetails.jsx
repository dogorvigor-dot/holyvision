import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Images
import australiaImage from "../assets/gm.jpg";
import canadaImage from "../assets/pharmacy.jpg";
import usaImage from "../assets/nursing.jpg";
import australiaFlag from "../assets/red.jpg";
import canadaFlag from "../assets/medicine.jpg";
import usaFlag from "../assets/syringe.jpg";
import bgem from "../assets/caregiver.jpg";
import agem from "../assets/help.jpg";

const CourseDetails = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...prev, entry.target.dataset.index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = document.querySelectorAll(".destination-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const destinations = [
    {
      image: australiaImage,
      flag: australiaFlag,
      title: "PCL In General Medicine (HA)",
      description:
        "Step into the world of primary healthcare with PCL in General Medicine (HA) at HVTC — a dynamic program focused on clinical proficiency, preventive care, and hands-on experience to prepare versatile Health Assistants ready to serve communities.",
      link: "/pcl-in-general-medicine",
    },
    {
      image: canadaImage,
      flag: canadaFlag,
      title: "Diploma In Pharmacy",
      description:
        "Kickstart your pharmacy career with D. Pharm at HVTC — a future-ready program combining clinical skills, pharmaceutical science, and industry exposure to shape confident, competent healthcare professionals.",
      link: "diploma-in-pharmacy",
    },
    {
      image: usaImage,
      flag: usaFlag,
      title: "PCL In Nursing",
      description:
        "Begin your journey in healthcare with PCL in Nursing at HVTC — a comprehensive program blending compassionate care, clinical expertise, and real-world training to nurture skilled and empathetic nursing professionals.",
      link: "/pcl-in-nursing",
    },
    {
      image: bgem,
      flag: agem,
      title: "Caregiver Program",
      description:
        "Step into the world of caregiving with HVTC’s Caregiver Program — designed to equip you with the skills, compassion, and global readiness needed to support the elderly and vulnerable with dignity, respect, and professional care.",
      link: "/caregiver-program",
    },
  ];

  return (
    <div className="bg-gray-100 py-8 px-4 scroll-smooth">
      {/* Page Title */}
      <div className="text-center mb-10">
      <h2 className="text-4xl font-bold animate-fadeIn text-center">
  <span className="text-blue-700">Explore</span>{" "}
  <span className="text-red-600">Our Courses</span>
</h2>

        <p className="text-gray-600 mt-2">Your academic goals are waiting to be achieved</p>
      </div>

      {/* Cards Section */}
      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {destinations.map((destination, index) => (
          <div
            key={index}
            data-index={index}
            className={`destination-card relative group py-5 px-5 bg-white shadow-md rounded-lg overflow-hidden transition-all duration-700 hover:shadow-xl transform hover:-translate-y-3 ${
              visibleCards.includes(index.toString()) ? "animate-zoomIn opacity-100" : "opacity-0"
            }`}
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-48 object-cover rounded"
              />
              <div className="absolute -bottom-5 right-5 bg-white rounded-full p-1 shadow-lg border-4 border-gray-200">
                <img
                  src={destination.flag}
                  alt={`${destination.title} Flag`}
                  className="w-10 h-10 rounded-full object-contain"
                />
              </div>
            </div>

            {/* Hover Overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-center bg-cover flex flex-col justify-center items-center text-white p-4"
              style={{
                backgroundImage: `url(${destination.image})`,
                backgroundBlendMode: "overlay",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <h3 className="text-xl font-bold">{destination.title}</h3>
              <Link
                to={destination.link}
                className="mt-4 px-4 py-2 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:bg-gray-100"
              >
                Learn more
              </Link>
            </div>

            {/* Content Section */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800">{destination.title}</h3>
              <p className="text-gray-600 mt-2">{destination.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes zoomIn {
          0% { transform: scale(0.85); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-zoomIn {
          animation: zoomIn 0.9s ease-out forwards;
        }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CourseDetails;
