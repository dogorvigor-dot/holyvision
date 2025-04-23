import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Doctor images
import doctor1 from "../assets/syringe.jpg";
import doctor2 from "../assets/pharmacy.jpg";

const StaffInfo = () => {
  const doctors = [
    {
      name: "Dr. Ujjwal Dotel, MPT",
      description:
        "Executive Director, Senior Consultant Physiotherapist\nNHPC: 242 PHY\nA dedicated, hardworking physiotherapist specialized in MSK & Sports Physiotherapy who believes in the application of updated knowledge into patient care. I believe applying what you have studied and learned into clinical practice helps not only the patient but also strengthens our professional foundation.",
      image: doctor1,
    },
    {
      name: "Dr. Mamata Subba, BPT",
      description:
        "Physiotherapist\nNHPC: A-1743 PHY\nA dedicated physiotherapist committed to helping individuals restore, maintain, and improve their mobility, strength, and overall physical function.",
      image: doctor2,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-50 py-16 px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#005A9C] mb-12">
        MEET OUR FACULTY
      </h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {doctors.map((doctor, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-16">
              <div className="flex-shrink-0 transition-transform duration-500 ease-in-out transform hover:scale-105">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-72 h-72 md:w-80 md:h-80 rounded-lg object-cover shadow-lg"
                />
              </div>
              <div className="text-center md:text-left max-w-lg whitespace-pre-line">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {doctor.name}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {doctor.description}
                </p>
                <div className="mt-6 h-[2px] bg-blue-500 w-16 mx-auto md:mx-0"></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StaffInfo;
