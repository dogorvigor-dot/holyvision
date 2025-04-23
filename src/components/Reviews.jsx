import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { AiFillStar } from "react-icons/ai";
import { FaQuoteRight } from "react-icons/fa";

// Import images

import imgNandini from "../assets/nandini.jpeg";
import imgBipana from "../assets/bipana.jpeg";
import imgSaraswati from "../assets/bb.jpg";
import imgMausam from "../assets/cd.jpg";
import imgYubraj from "../assets/yubraj.jpeg";
import imgSusmita from "../assets/susmita.jpeg";

const reviews = [
 
  {
    image: imgBipana,
    name: "Nandini Kumari",
    title: "DPH 1st Year",
    review:
      "Holy Vision offers quality education with experienced teachers, well-equipped labs and a supportive environment. I feel proud to be part of a college that values knowledge, discipline and service.",
    rating: 5,
  },
  {
    image: imgSusmita,
    name: "Bipana Bajyu",
    title: "PCL in General Medicine, 1st Year",
    review:
      "HVTC is a life-changing experience. From uncertainty to pride, this journey has been incredible — great teachers, friendly campus and personal growth. Truly a second home!",
    rating: 5,
  },
  {
    image: imgSaraswati,
    name: "Saraswati Ayer",
    title: "DPh 2nd Year",
    review:
      "Choosing HVTC was one of my best decisions. The supportive faculties, academic environment and extra activities like quizzes and sports make it truly dynamic.",
    rating: 5,
  },
  {
    image: imgMausam,
    name: "Mausam Kumari Mahato",
    title: "PCL in General Medicine, 2nd Year",
    review:
      "HVTC is the most destined place for quality health education. Theoretical and practical learning here is top-notch. I’m extremely overwhelmed to be part of this college.",
    rating: 5,
  },
  {
    image: imgNandini,
    name: "Yubraj Khanal",
    title: "DPh 3rd Year",
    review:
      "Every activity at HVTC helped me feel comfortable and challenged. I’m grateful for the opportunities and guidance this college provided.",
    rating: 5,
  },
  {
    image:imgYubraj,
    name: "Susmita Sah",
    title: "PCL in General Medicine, 3rd Year",
    review:
      "Proud to be part of HVTC! Supportive faculty, diverse opportunities and a nurturing environment make this a perfect place for success and growth.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className="bg-blue-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-4">
          What Students Say About HVTC
        </h2>

        <Swiper
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-white p-6 rounded-lg shadow-md border-b-4 border-pink-400 h-full flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
                <FaQuoteRight className="text-3xl text-gray-500 absolute bottom-4 right-4 opacity-70" />

                <div className="mb-6">
                  <p className="text-gray-600 text-sm leading-relaxed">{review.review}</p>
                </div>

                <div className="flex items-center mt-auto">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-pink-400 mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">{review.name}</h4>
                    <p className="text-xs text-gray-500">{review.title}</p>
                    <div className="flex mt-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <AiFillStar key={i} className="text-yellow-500 text-sm" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
