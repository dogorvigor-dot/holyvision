import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticularDirectContactUs from "../components/ParticularDirectContactUs";
import generalMedicineImage from "../assets/gm.jpg"; // Use correct image
import NavbarMain from "../components/NavbarMain";

const PclGeneralMedicinePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <NavbarMain />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[350px] flex items-center justify-center mt-[60px]"
        style={{ backgroundImage: `url(${generalMedicineImage})` }}
      >
        <motion.div
          className="bg-black bg-opacity-60 p-8 text-white text-center rounded-lg shadow-lg"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl font-extrabold">PCL in General Medicine (Health Assistant)</h2>
          <p className="text-lg mt-3">
            A comprehensive pathway to becoming a skilled Health Assistant with real-world clinical expertise.
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
            The PCL in General Medicine (HA) at <strong>Holy Vision Technical Campus (HVTC)</strong> offers a comprehensive curriculum emphasizing practical skills and theoretical knowledge in healthcare. With state-of-the-art facilities and experienced faculty, students gain hands-on training in patient care, clinical procedures, and medical ethics, preparing them to excel in the healthcare industry.
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
              SEE with GPA ≥ 2.0<br />
              or TSLC (CMA) with ≥ 68.33%
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
                <li>English, Nepali, Social Studies</li>
                <li>Maths, Statistics & Computer</li>
                <li>Physics, Chemistry, Botany, Zoology</li>
                <li>Anatomy & Physiology</li>
              </ul>
            </div>

            {/* Year 2 */}
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg text-green-800 mb-2">Second Year</h4>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                <li>Medicine I, Surgery I, Gynecology</li>
                <li>First Aid & Health Education</li>
                <li>Clinical Pharmacology, Family Health</li>
                <li>Environmental Health</li>
              </ul>
            </div>

            {/* Year 3 */}
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg text-green-800 mb-2">Third Year</h4>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                <li>Medicine II (Pediatrics, Psychiatry, Dermatology)</li>
                <li>Surgery II (ENT, Dentistry, Ophthalmology)</li>
                <li>Health Management, Epidemiology</li>
                <li>Clinical & Community Practice</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Features & Facilities */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Key Features */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-green-700 mb-4">Key Features</h4>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed text-sm">
              <li>Hands-on clinical training in hospitals</li>
              <li>Urban & rural healthcare experience</li>
              <li>Research & community health projects</li>
              <li>Emphasis on ethics & patient care</li>
            </ul>
          </div>

          {/* Facilities */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-green-700 mb-4">Facilities</h4>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed text-sm">
              <li>Modern labs & simulation centers</li>
              <li>Extensive medical library access</li>
              <li>Experienced faculty & mentors</li>
              <li>Internship & job placement support</li>
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
            <li>Health Assistants (HA)</li>
            <li>Community Health Workers</li>
            <li>Emergency Medical Technicians (EMTs)</li>
            <li>Healthcare Assistant Administrators</li>
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
            Total Fee: NPR 4,04,000/-
          </motion.h3>
          <p className="text-gray-600">Affordable pricing with quality medical education.</p>
        </section>

        {/* Why HVTC Section */}
        <section className="mb-20 bg-green-50 p-10 rounded-lg shadow text-center">
          <h3 className="text-2xl font-bold text-green-800 mb-4">
            Why Choose HVTC for General Medicine?
          </h3>
          <ul className="list-disc list-inside text-gray-700 max-w-2xl mx-auto text-sm leading-relaxed">
            <li>Experienced Faculty in General Medicine</li>
            <li>Advanced Medical Laboratories</li>
            <li>Comprehensive Medical Curriculum</li>
            <li>Strong Hospital Partnerships</li>
            <li>Extensive Clinical Training</li>
            <li>Modern Healthcare Facilities</li>
            <li>Focus on Practical Skills Development</li>
            <li>Supportive Medical Learning Environment</li>
          </ul>
        </section>

        {/* Contact Form */}
        <ParticularDirectContactUs course="PCL in General Medicine (HA)" />
      </main>

      <Footer />
    </div>
  );
};

export default PclGeneralMedicinePage;
