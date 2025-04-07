import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    question: "What does the PCL in General Medicine (HA) program at HVTC focus on?",
    answer: "It focuses on training students in medical science fundamentals and healthcare practices to become Health Assistants.",
  },
  {
    question: "What practical experience is included in the PCL in General Medicine (HA) program?",
    answer: "The program includes clinical rotations and internships in hospitals and healthcare centers.",
  },
  {
    question: "What career paths can graduates of the PCL in General Medicine (HA) pursue?",
    answer: "Graduates can work as Health Assistants in hospitals, clinics, community health centers, and NGOs, or further their education in medical sciences.",
  },
  {
    question: "What is the main goal of the Diploma in Pharmacy program at HVTC?",
    answer: "The goal is to train students in pharmaceutical sciences, medication dispensing, and patient care.",
  },
  {
    question: "What practical training is included in the Diploma in Pharmacy program?",
    answer: "The program includes laboratory work, internships in hospitals and pharmacies, and hands-on drug formulation and patient counseling experience.",
  },
];

const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-teal-50 py-12 px-4 sm:px-8 md:px-16 lg:px-24 w-full">
      <div className="text-center mb-12">
        <h1
          className="text-3xl sm:text-4xl font-bold text-[#005A9C]"
          data-aos="fade-down"
        >
          Frequently Asked Questions
        </h1>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#2E5090] text-white rounded-lg overflow-hidden shadow-lg transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <div
              className="flex justify-between items-center p-4 cursor-pointer hover:bg-[#3E8EDE] transition-colors duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="text-lg font-medium">{faq.question}</h2>
              <span
                className={`transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </div>
            {activeIndex === index && (
              <div
                className="p-4 text-gray-100 bg-[#2774AE] transition-all duration-300"
                data-aos="fade-in"
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
