import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import campusImage from "../assets/syringe.jpg";
import PrincipalMessage from "../components/PricipalMessage";

// Container animation
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

// Item animation
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", stiffness: 100 } },
};

// Hover effect
const hoverEffect = {
  whileHover: {
    scale: 1.05,
    rotate: 0.5,
    boxShadow: "0px 12px 24px rgba(0,0,0,0.2)",
    transition: { type: "spring", stiffness: 300 },
  },
};

export default function AboutPage() {
  return (
    <>
     
             <Navbar />
           
      <motion.div
        className="p-6 space-y-16 max-w-7xl mx-auto pt-[140px]" 
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center space-y-4">
          <motion.h1
            className="text-5xl font-extrabold text-blue-700 drop-shadow-md"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            Welcome to Holy Vision Technical Campus
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Shaping compassionate healthcare leaders since 2002.
          </motion.p>
        </motion.div>

        {/* Mission Section */}
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
            <h2 className="text-3xl font-semibold text-blue-600 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To produce skilled middle-level health professionals capable of delivering
              high-quality healthcare—especially in rural areas—through preventive, promotive,
              curative, managerial, and rehabilitative services.
            </p>
          </motion.div>
        </motion.div>

        {/* Academic Programs */}
        <motion.div variants={itemVariants} className="space-y-8 text-center">
          <h2 className="text-4xl font-semibold text-blue-600">Academic Programs</h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {[
              { icon: "🩺", title: "PCL in Nursing (Staff Nurse)" },
              { icon: "👨‍⚕️", title: "General Medicine (Health Assistant)" },
              { icon: "💊", title: "Diploma in Pharmacy" },
              { icon: "❤️", title: "Caregiver Program (New)" },
            ].map((program, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                {...hoverEffect}
                className="p-6 rounded-2xl border border-blue-100 bg-white shadow-lg transition-all duration-300"
              >
                <div className="text-5xl mb-2">{program.icon}</div>
                <h3 className="font-bold text-xl">{program.title}</h3>
              </motion.div>
            ))}
          </motion.div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            All our programs are affiliated with CTEVT, recognized by Tribhuvan University,
            and approved by relevant councils.
          </p>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl shadow-xl"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Why Choose Us?</h2>
          <ul className="text-gray-700 space-y-3 text-lg list-disc list-inside">
            <li>Experienced faculty with real-world expertise</li>
            <li>Excellent academic performance and pass rates</li>
            <li>Strong focus on practical training and rural health service</li>
            <li>Supportive learning environment</li>
            <li>Career-focused programs with job placement assistance</li>
          </ul>
        </motion.div>

        {/* Scholarships */}
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl font-semibold text-blue-600">Scholarship Opportunities</h2>
          <p className="text-gray-700 text-lg">
            HVTC offers inclusive scholarships for students from underrepresented groups and a
            merit-based scholarship for top performers in the General Medicine (HA) program,
            promoting access and excellence in healthcare education.
          </p>
        </motion.div>

        {/* Career Counseling */}
        <motion.div variants={containerVariants} className="space-y-10">
          <h2 className="text-4xl font-semibold text-center text-blue-600">
            Career Counseling & Job Prospects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "General Medicine",
                desc: "Work in hospitals, clinics, NGOs, or pursue MBBS, BPH, and other advanced studies.",
              },
              {
                title: "Pharmacy",
                desc: "Become a registered pharmacist, or work in production, quality control, and sales.",
              },
              {
                title: "Caregiver",
                desc: "Find work in hospitals and elder care homes locally and abroad (Japan, Israel, Canada, Europe).",
              },
            ].map((career, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                {...hoverEffect}
                className="p-6 bg-white rounded-3xl border border-gray-200 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{career.title}</h3>
                <p className="text-gray-700">{career.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Messages */}
        <motion.div
          variants={itemVariants}
          className="bg-white p-6 rounded-3xl shadow-xl space-y-4"
        >
          <h2 className="text-2xl font-semibold text-blue-600">Message from the Coordinators</h2>
          <p className="text-gray-700 italic">
            “We warmly welcome all SEE graduates to a transformative journey at HVTC. Our
            experienced faculty, comprehensive programs, and supportive campus await you.”
          </p>
          <p className="text-right text-blue-600 font-semibold">— Sabina Shah & Tek Maya Thapa</p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-blue-100 to-white p-6 rounded-3xl shadow-xl space-y-4"
        >
          <h2 className="text-2xl font-semibold text-blue-700">Message from the Governing Body</h2>
          <p className="text-gray-700">
            “At HVTC, we strive to bridge the healthcare gap with skilled manpower ready to serve
            both locally and globally. We are committed to excellence and values.”
          </p>
          <p className="text-right text-blue-600 font-semibold">— The Governing Body</p>
        </motion.div>
      </motion.div>
      <PrincipalMessage/>
      <Footer />
    </>
  );
}
