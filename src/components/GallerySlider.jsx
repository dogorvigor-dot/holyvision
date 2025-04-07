// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCreative, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-creative";
// import "swiper/css/autoplay";

// // 🖼️ Gallery Images (replace with your actual image paths)
// import img1 from "../assets/syringe.jpg";
// import img2 from "../assets/abt.jpg";
// import img3 from "../assets/medicine.jpg";
// import img4 from "../assets/gm.jpg";

// const GallerySlider = () => {
//   const images = [img1, img2, img3, img4];

//   return (
//     <section className="w-full py-16 px-4 sm:px-6 bg-white">
//       <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
//         <span className="text-blue-700">Explore</span>{" "}
//         <span className="text-blue-600">Gallery</span>
//         <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto mt-2 rounded-full"></div>
//       </h2>

//       <div className="max-w-6xl mx-auto">
//         <Swiper
//           modules={[EffectCreative, Autoplay]}
//           effect="creative"
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           grabCursor={true}
//           centeredSlides={true}
//           loop={true}
//           slidesPerView={3}
//           spaceBetween={30}
//           speed={900}
//           creativeEffect={{
//             prev: {
//               shadow: true,
//               translate: ["-120%", 0, -500],
//               rotate: [0, 100, 0],
//             },
//             next: {
//               shadow: true,
//               translate: ["120%", 0, -500],
//               rotate: [0, -100, 0],
//             },
//           }}
//           className="gallerySwiper"
//         >
//           {images.map((img, index) => (
//             <SwiperSlide key={index}>
//               <img
//                 src={img}
//                 className="rounded-lg w-full h-64 object-cover shadow-xl border-4 border-white hover:scale-105 transition-transform duration-700 ease-in-out"
//                 alt={`Gallery ${index + 1}`}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default GallerySlider;
