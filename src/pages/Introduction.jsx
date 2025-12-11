import React, { useEffect } from "react";
import { motion } from "framer-motion";
import NavbarMain from "../components/NavbarMain";
import Footer from "../components/Footer";
import campusImage from "../assets/555.jpeg";

// Animation Containers
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, type: "spring", stiffness: 100 },
  },
};

const hoverEffect = {
  whileHover: {
    scale: 1.05,
    rotate: 0.5,
    boxShadow: "0px 12px 24px rgba(0,0,0,0.2)",
    transition: { type: "spring", stiffness: 300 },
  },
};

export default function IntroductionPage({
  titleText = "Introduction to Holy Vision Technical Campus",
  descriptionText = "Dedicated to producing skilled healthcare professionals since 2002.",
  whoWeAreTitle = "Who We Are",
  whoWeAreText = "Holy Vision Technical Campus (HVTC) is a CTEVT-affiliated academic institution established in 2002 with the aim of producing capable and compassionate mid-level healthcare professionals in Nepal. Over the years, HVTC has grown into a trusted training hub for students seeking quality education in Nursing, General Medicine, Pharmacy, and Caregiving.",
  objectives = [
    "To provide high-quality technical education based on CTEVT standards.",
    "To prepare competent health professionals capable of serving urban and rural communities.",
    "To integrate practical training with academic excellence.",
    "To promote social responsibility, ethics, and leadership.",
    "To support students in career placement and skill development.",
  ],
  values = [
    { icon: "🎓", title: "Excellence" },
    { icon: "🤝", title: "Integrity" },
    { icon: "🌍", title: "Community Service" },
    { icon: "⚕️", title: "Compassion" },
  ],
  managementMessage = "HVTC is committed to nurturing health professionals who can bring positive changes to the healthcare sectors of Nepal and beyond.",
}) {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <NavbarMain />

      <motion.div
        className="p-6 space-y-16 max-w-7xl mx-auto pt-[140px]"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >

        {/* HERO SECTION */}
        <motion.div variants={itemVariants} className="text-center space-y-4">
          <motion.h1
            className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-yellow-400 to-red-500"
          >
            {titleText}
          </motion.h1>

          <motion.p className="text-lg text-gray-600">
            {descriptionText}
          </motion.p>
        </motion.div>

        {/* MAIN INTRO + IMAGE */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
        >
          <motion.img
            src={campusImage}
            alt="HVTC Campus"
            className="rounded-3xl shadow-2xl hover:shadow-3xl transition-transform duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.02, rotate: -1 }}
          />

          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-semibold text-blue-600 mb-4">
              {whoWeAreTitle}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {whoWeAreText}
            </p>
          </motion.div>
        </motion.div>

        {/* =============================== */}
        {/*   ACADEMIC PROGRAMS SECTION     */}
        {/* =============================== */}

        <motion.div
          className="text-center space-y-10"
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-blue-600"
          >
            Academic Programs
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {[
              { icon: "🩺", name: "PCL in Nursing (Staff Nurse)" },
              { icon: "👨‍⚕️", name: "General Medicine (Health Assistant)" },
              { icon: "💊", name: "Diploma in Pharmacy" },
              { icon: "❤️", name: "Caregiver Program (New)" },
            ].map((p, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 12px 24px rgba(0,0,0,0.15)",
                }}
                className="p-6 bg-white rounded-2xl border shadow-md cursor-pointer"
              >
                <div className="text-5xl mb-3">{p.icon}</div>
                <h3 className="font-semibold text-lg text-gray-800">{p.name}</h3>
              </motion.div>
            ))}
          </motion.div>

          <motion.p variants={itemVariants} className="text-gray-600 text-sm">
            All our programs are affiliated with CTEVT, recognized by Tribhuvan University,
            and approved by relevant councils.
          </motion.p>
        </motion.div>

        {/* OBJECTIVES */}
        <motion.div variants={itemVariants} className="bg-blue-50 p-8 rounded-3xl shadow-xl space-y-4">
          <h2 className="text-3xl font-bold text-blue-700">Our Objectives</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
            {objectives.map((obj, idx) => (
              <li key={idx}>{obj}</li>
            ))}
          </ul>
        </motion.div>

        {/* VALUES */}
        <motion.div variants={itemVariants} className="text-center space-y-8">
          <h2 className="text-4xl font-semibold text-blue-600">Our Core Values</h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {values.map((value, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                {...hoverEffect}
                className="p-6 rounded-2xl bg-white border shadow-lg"
              >
                <div className="text-5xl mb-2">{value.icon}</div>
                <h3 className="font-bold text-xl">{value.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* MANAGEMENT MESSAGE */}
        <motion.div
          variants={itemVariants}
          className="bg-white p-6 rounded-3xl shadow-xl space-y-4"
        >
          <h2 className="text-2xl font-semibold text-blue-600">Message from the Management</h2>
          <p className="text-gray-700 italic">“{managementMessage}”</p>
          <p className="text-right text-blue-600 font-semibold">— The Management Team</p>
        </motion.div>

      </motion.div>

      <Footer />
    </>
  );
}
