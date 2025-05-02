import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

// 📸 Your image imports
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
    <section className="w-full py-16 px-4 sm:px-6 bg-white">
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
          slidesPerView="auto"
          speed={4000} // how fast one full transition moves
          autoplay={{
            delay: 0, // ⚠️ this makes it continuous!
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 25,
            stretch: 0,
            depth: 250,
            modifier: 2.5,
            slideShadows: false,
          }}
          className="gallerySwiper"
        >
          {images.map((img, index) => (
            <SwiperSlide
              key={index}
              className="w-[250px] sm:w-[280px] md:w-[300px]"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="rounded-2xl w-full h-64 object-cover shadow-xl border-4 border-white"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GallerySlider;
