import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticularDirectContactUs from "../components/ParticularDirectContactUs";
import nursingImage from "../assets/syringe.jpg"; // Replace with actual image path
import NavbarMain from "../components/NavbarMain";

const PclNursingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <NavbarMain />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[350px] flex items-center justify-center mt-[60px]"
        style={{ backgroundImage: `url(${nursingImage})` }}
      >
        <motion.div
          className="bg-black bg-opacity-60 p-8 text-white text-center rounded-lg shadow-lg"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl font-extrabold">PCL in Nursing</h2>
          <p className="text-lg mt-3">
            A respected foundation in professional nursing care with extensive clinical training and compassionate practice.
          </p>
        </motion.div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-20">
        {/* Overview */}
        <section className="mb-12 text-center">
          <motion.h3
            className="text-3xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Course Overview
          </motion.h3>
          <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
            The PCL in Nursing program at <strong>Holy Vision Technical Campus (HVTC)</strong> equips students with the knowledge, ethics, and practical training essential for modern nursing. Through intensive clinical experiences and expert instruction, graduates are prepared to contribute effectively to both hospital and community healthcare settings.
          </p>
        </section>

        {/* Quick Info */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-16">
          <div className="bg-white p-6 rounded shadow-md">
            <h4 className="text-lg font-bold text-green-700">Duration</h4>
            <p className="text-gray-600 mt-2">3 Years</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h4 className="text-lg font-bold text-green-700">Affiliation</h4>
            <p className="text-gray-600 mt-2">CTEVT (Nepal)</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h4 className="text-lg font-bold text-green-700">Eligibility</h4>
            <p className="text-gray-600 mt-2">
              SEE with GPA ≥ 2.0 <br />
              Must have studied Science and Compulsory English
            </p>
          </div>
        </section>

        {/* Course Structure */}
        <section className="mb-16">
          <motion.h3
            className="text-2xl font-bold text-gray-800 mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Course Structure
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Year 1 */}
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg text-green-800 mb-2">First Year</h4>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                <li>Fundamentals of Nursing</li>
                <li>Anatomy & Physiology</li>
                <li>Community Health Nursing I</li>
                <li>English & Nepali</li>
              </ul>
            </div>

            {/* Year 2 */}
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg text-green-800 mb-2">Second Year</h4>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                <li>Medical-Surgical Nursing I</li>
                <li>Pharmacology</li>
                <li>Sociology & Psychology</li>
                <li>Health Education & Nutrition</li>
              </ul>
            </div>

            {/* Year 3 */}
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg text-green-800 mb-2">Third Year</h4>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                <li>Midwifery & Gynaecological Nursing</li>
                <li>Child Health Nursing</li>
                <li>Leadership & Management</li>
                <li>On-the-job Training / Clinical Practice</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Features & Facilities */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-green-700 mb-4">Key Features</h4>
            <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed">
              <li>Clinical placement in top hospitals</li>
              <li>Community outreach nursing practices</li>
              <li>Expert faculty with nursing specialization</li>
              <li>Focus on holistic patient care</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-green-700 mb-4">Facilities</h4>
            <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed">
              <li>Modern nursing labs with mannequins</li>
              <li>Access to extensive medical literature</li>
              <li>Internship & licensing preparation</li>
              <li>Secure and supportive campus environment</li>
            </ul>
          </div>
        </section>

        {/* Career Prospects */}
        <section className="mb-16 bg-gray-100 p-8 rounded-lg shadow-md text-center">
          <motion.h3
            className="text-2xl font-bold text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Career Prospects
          </motion.h3>
          <p className="text-gray-700 mt-4 max-w-4xl mx-auto leading-relaxed">
            Graduates can pursue roles as:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-3 text-left max-w-md mx-auto text-sm">
            <li>Staff Nurse</li>
            <li>Midwife</li>
            <li>Community Health Nurse</li>
            <li>Public Health Educator</li>
          </ul>
        </section>

        {/* Fee Structure */}
        <section className="mb-16 text-center">
          <motion.h3
            className="text-2xl font-bold text-green-700 mb-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Total Fee: NPR 4,50,000/-
          </motion.h3>
          <p className="text-gray-600">Affordable, quality nursing education for your future.</p>
        </section>

        {/* Why HVTC Section */}
        <section className="mb-20 bg-green-50 p-10 rounded-lg shadow text-center">
          <h3 className="text-2xl font-bold text-green-800 mb-4">
            Why Choose HVTC for Nursing?
          </h3>
          <ul className="list-disc list-inside text-gray-700 max-w-2xl mx-auto text-sm leading-relaxed">
            <li>Dedicated Nursing Faculty</li>
            <li>Advanced Simulation & Skills Lab</li>
            <li>Strong Clinical & Community Exposure</li>
            <li>Supportive and Empowering Environment</li>
            <li>Licensing Exam Preparation</li>
            <li>Excellent Track Record of Job Placement</li>
          </ul>
        </section>

        {/* Contact Form */}
        <ParticularDirectContactUs course="PCL in Nursing" />
      </main>

      <Footer />
    </div>
  );
};

export default PclNursingPage;
