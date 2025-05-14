import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticularDirectContactUs from "../components/ParticularDirectContactUs";
import caregiverImage from "../assets/caregiver.jpg"; // Replace with actual image path
import NavbarMain from "../components/NavbarMain";

const CaregiverProgramPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <NavbarMain />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[350px] flex items-center justify-center mt-[60px]"
        style={{ backgroundImage: `url(${caregiverImage})` }}
      >
        <motion.div
          className="bg-black bg-opacity-60 p-8 text-white text-center rounded-lg shadow-lg"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl font-extrabold">Caregiver Program</h2>
          <p className="text-lg mt-3">
            Build your path to compassionate caregiving — where every act of care brings dignity, support, and trust.
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
            The <strong>Caregiver Program</strong> at <strong>Holy Vision Technical Campus</strong> is designed to prepare dedicated individuals to deliver essential care to elderly, disabled, or chronically ill clients. With a focus on empathy, safety, and wellness, students receive hands-on training to become certified caregivers both locally and abroad.
          </p>
        </section>

        {/* Quick Info */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-16">
          <div className="bg-white p-6 rounded shadow-md">
            <h4 className="text-lg font-bold text-green-700">Duration</h4>
            <p className="text-gray-600 mt-2">1 Year</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h4 className="text-lg font-bold text-green-700">Affiliation</h4>
            <p className="text-gray-600 mt-2">CTEVT (Nepal)</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h4 className="text-lg font-bold text-green-700">Eligibility</h4>
            <p className="text-gray-600 mt-2">
              SEE Passed<br />
              Basic English and Communication Skills Preferred
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
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg text-green-800 mb-2">Key Modules</h4>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                <li>Introduction to Caregiving</li>
                <li>Basic Health & Hygiene</li>
                <li>Nutrition and Meal Prep</li>
                <li>Psychosocial Support</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg text-green-800 mb-2">Clinical Skills</h4>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                <li>Vital Signs Monitoring</li>
                <li>Safe Patient Handling</li>
                <li>Medication Assistance</li>
                <li>Emergency First Aid</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg text-green-800 mb-2">Practical Training</h4>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                <li>Hospital & Home Care Placements</li>
                <li>Client Interaction</li>
                <li>Workplace Readiness</li>
                <li>OJT & Internship</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features & Facilities */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-green-700 mb-4">Key Features</h4>
            <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed">
              <li>Hands-on caregiving practice</li>
              <li>International job placement assistance</li>
              <li>Focus on dignity and empathy in care</li>
              <li>Regular seminars and guest lectures</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-green-700 mb-4">Facilities</h4>
            <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed">
              <li>Skill-based lab simulations</li>
              <li>Modern caregiving equipment</li>
              <li>Library and digital learning tools</li>
              <li>Supportive campus and mentorship</li>
            </ul>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="mb-16 bg-gray-100 p-8 rounded-lg shadow-md text-center">
          <motion.h3
            className="text-2xl font-bold text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Career Opportunities
          </motion.h3>
          <p className="text-gray-700 mt-4 max-w-4xl mx-auto leading-relaxed">
            Graduates can work as:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-3 text-left max-w-md mx-auto text-sm">
            <li>Home Caregiver</li>
            <li>Elderly Care Attendant</li>
            <li>Rehabilitation Assistant</li>
            <li>International Domestic Care Worker</li>
          </ul>
        </section>

        {/* Fee Section */}
        <section className="mb-16 text-center">
          <motion.h3
            className="text-2xl font-bold text-green-700 mb-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Total Fee: NPR 1,80,000/-
          </motion.h3>
          <p className="text-gray-600">Accessible and impactful caregiving education for all.</p>
        </section>

        {/* Why HVTC Section */}
        <section className="mb-20 bg-green-50 p-10 rounded-lg shadow text-center">
          <h3 className="text-2xl font-bold text-green-800 mb-4">
            Why Choose HVTC for Caregiver Training?
          </h3>
          <ul className="list-disc list-inside text-gray-700 max-w-2xl mx-auto text-sm leading-relaxed">
            <li>Focused Caregiver Curriculum</li>
            <li>Dedicated Lab & Tools</li>
            <li>Global Job Market Preparation</li>
            <li>Inclusive, Supportive Learning</li>
            <li>Expert Trainers with Experience Abroad</li>
            <li>Proven Record of Overseas Employment</li>
          </ul>
        </section>

        {/* Contact Form */}
        <ParticularDirectContactUs course="Caregiver Program" />
      </main>

      <Footer />
    </div>
  );
};

export default CaregiverProgramPage;
