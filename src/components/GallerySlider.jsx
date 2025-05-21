import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

// 🖼️ Replace with your real image imports
import img1 from "../assets/22222.jpeg";
import img2 from "../assets/555.jpeg";
import img3 from "../assets/999.jpeg";
import img4 from "../assets/77.jpeg";
import img5 from "../assets/333.jpeg";
import img6 from "../assets/444.jpeg";
import img7 from "../assets/4444.jpeg";

const GallerySlider = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <section className="w-full py-8 px-4 sm:px-6 bg-white relative">
      {/* 💅 Shadow override injected directly */}
      <style>
        {`
          .swiper-slide-shadow-left,
          .swiper-slide-shadow-right {
            background: rgba(0, 0, 0, 0.4) !important;
            border-radius: 1rem;
            filter: blur(6px);
            transition: background 0.3s ease;
          }
        `}
      </style>

      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        <span className="text-blue-700">Explore</span>{" "}
        <span className="text-pink-600">Gallery</span>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto mt-2 rounded-full"></div>
      </h2>

      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          speed={3500}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          className="gallerySwiper"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-64 sm:h-72 md:h-80">
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl shadow-lg border-4 border-white"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GallerySlider;
