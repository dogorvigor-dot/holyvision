import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

// Import all consultancy-related images
import consultancy1 from "../assets/jj.jpg";
import consultancy2 from "../assets/abt.jpg";
import consultancy3 from "../assets/dj.jpg";


// Define the images in an array
const images = [
  { src: consultancy1, alt: "1" },
  { src: consultancy2, alt: "2" },
  { src: consultancy3, alt: "3" },
  
];

export default function VisaConsultancySlider() {
  const [loaded, setLoaded] = useState(Array(images.length).fill(false));

  const handleImageLoad = (index) => {
    setLoaded((prev) => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  return (
    <div className="w-full relative z-[0] bg-gray-100">
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="swiper-container"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full relative">
              {/* Placeholder/Loader */}
              {!loaded[index] && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
                  <span className="text-gray-400 text-lg">Loading...</span>
                </div>
              )}
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-[300px] sm:h-[620px] md:h-[640px] 2xl:h-[900px] object-cover object-center transition-opacity duration-700 ${
                  loaded[index] ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => handleImageLoad(index)}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Optional Inline CSS for Loader Animation */}
      <style>{`
  /* Fade In - Smooth and Soothing */
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Slide Down - Fluid Entry */
  @keyframes slideDown {
    0% {
      opacity: 0;
      transform: translateY(-40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Zoom In - Gentle Pop */
  @keyframes zoomIn {
    0% {
      opacity: 0;
      transform: scale(0.92);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .animate-fadeIn {
    animation: fadeIn 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
  }

  .animate-slideDown {
    animation: slideDown 1.3s cubic-bezier(0.25, 1, 0.5, 1) forwards;
  }

  .animate-zoomIn {
    animation: zoomIn 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
  }

  /* Optional: Slight delay support */
  .delay-300 {
    animation-delay: 0.3s;
  }
  .delay-500 {
    animation-delay: 0.5s;
  }
  .delay-700 {
    animation-delay: 0.7s;
  }
  .delay-900 {
    animation-delay: 0.9s;
  }
`}</style>
    </div>
  );
}
