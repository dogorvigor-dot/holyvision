import React, { useEffect } from "react";

import Footer from "../components/Footer";

import img11 from "../assets/11.jpeg";
import img22 from "../assets/22.jpeg";
import img44 from "../assets/44.jpeg";
import img55 from "../assets/55.jpeg";
import img88 from "../assets/88.jpeg";
import img111 from "../assets/111.jpeg";

import img444 from "../assets/444.jpeg";
import img555 from "../assets/555.jpeg";

import img999 from "../assets/999.jpeg";

import img2222 from "../assets/2222.jpeg";
import img3333 from "../assets/3333.jpeg";

import img5555 from "../assets/5555.jpeg";
import img6666 from "../assets/6666.jpeg";

import img9999 from "../assets/9999.jpeg";
import img11111 from "../assets/11111.jpeg";
import img22222 from "../assets/22222.jpeg";
import img33333 from "../assets/33333.jpeg";
import img44444 from "../assets/44444.jpeg";

import img66666 from "../assets/66666.jpeg";
import img77777 from "../assets/77777.jpeg";
import img88888 from "../assets/88888.jpeg";
import work3 from "../assets/work3.jpeg";

import work6 from "../assets/34.jpeg";


import LOTCGallery from "../components/LOTCGallery";
import NavbarMain from "../components/NavbarMain";

const images = [
  img11, img22, work3, img44, img55, img88,
  img111, img444, img555, img999, img2222, img3333, img5555, img6666, img9999,
  img11111, img22222, img33333, img44444, img66666, img77777, img88888,work6
];

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <NavbarMain />
      <section id="gallery" className="bg-gray-50 py-12 px-6 sm:px-12 pt-[140px]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#034694] mb-6 text-center">
            Holy Vision Campus Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg flex items-center justify-center h-64 overflow-hidden"
              >
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <LOTCGallery />
      <Footer />
    </div>
  );
};

export default GalleryPage;
