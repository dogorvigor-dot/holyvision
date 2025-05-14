import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticularDirectContactUs from "../components/ParticularDirectContactUs";
import pharmacyImage from "../assets/pharmacy.jpg"; // Replace with actual image path
import NavbarMain from "../components/NavbarMain";

const DiplomaInPharmacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <NavbarMain />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[350px] flex items-center justify-center mt-[60px]"
        style={{ backgroundImage: `url(${pharmacyImage})` }}
      >
        <motion.div
          className="bg-black bg-opacity-60 p-8 text-white text-center rounded-lg shadow-lg"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl font-extrabold">Diploma in Pharmacy (D. Pharm)</h2>
          <p className="text-lg mt-3">
            Build a solid foundation in pharmaceutical science and patient care through practical training and theoretical knowledge.
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
            The <strong>Diploma in Pharmacy</strong> program at <strong>Holy Vision Technical Campus (HVTC)</strong> is a three-year course designed to produce competent pharmacy professionals. The curriculum blends classroom teaching, lab-based learning, and real-world training to help students thrive in hospitals, clinics, and community pharmacies across Nepal.
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
            <p className="text-gray-600 mt-2">Council for Technical Education and Vocational Training (CTEVT)</p>
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
            {/* First Year */}
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg text-green-800 mb-2">First Year</h4>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                <li>English</li>
                <li>Nepali</li>
                <li>Social Studies (Nepali Parichaya)</li>
                <li>Mathematics, Statistics & Computer Application</li>
                <li>Physics</li>
                <li>Chemistry</li>
                <li>Zoology</li>
                <li>Botany</li>
                <li>Anatomy & Physiology</li>
              </ul>
            </div>

            {/* Second Year */}
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg text-green-800 mb-2">Second Year</h4>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                <li>Pharmaceutics I</li>
                <li>Pharmacology I</li>
                <li>Pharmaceutical Chemistry I</li>
                <li>Pharmacotherapeutics I</li>
                <li>Biochemistry & Microbiology</li>
                <li>Pharmaceutical Management</li>
                <li>Public Health Pharmacy</li>
              </ul>
            </div>

            {/* Third Year */}
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg text-green-800 mb-2">Third Year</h4>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                <li>Pharmaceutics II</li>
                <li>Pharmacology II</li>
                <li>Pharmaceutical Chemistry II</li>
                <li>Hospital and Clinical Pharmacy</li>
                <li>Pharmaceutical Jurisprudence & Community Pharmacy</li>
                <li>Pharmacotherapeutics II</li>
                <li>Comprehensive Field Practice</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Features & Facilities */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-green-700 mb-4">Key Features</h4>
            <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed">
              <li>Hands-on training in pharmaceutical labs and dispensaries</li>
              <li>Focus on patient-oriented pharmacy practice</li>
              <li>Introduction to pharmaceutical regulatory practices</li>
              <li>Practical experience in drug formulation and compounding</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-green-700 mb-4">Facilities</h4>
            <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed">
              <li>Well-equipped pharmaceutical laboratories</li>
              <li>Access to pharmacy reference books and journals</li>
              <li>Experienced faculty with industry experience</li>
              <li>Internship opportunities in leading pharmacies</li>
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
            <li>Assistant Pharmacist</li>
            <li>Assistant Hospital Pharmacist</li>
            <li>Assistant Clinical Pharmacist</li>
            <li>Medical Sales Representative</li>
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
            Total Fee: NPR 3,37,800/-
          </motion.h3>
          <p className="text-gray-600">Affordable fee with maximum return on career investment.</p>
        </section>

        {/* Why HVTC Section */}
        <section className="mb-20 bg-green-50 p-10 rounded-lg shadow text-center">
          <h3 className="text-2xl font-bold text-green-800 mb-4">
            Why Choose HVTC for Diploma in Pharmacy?
          </h3>
          <ul className="list-disc list-inside text-gray-700 max-w-2xl mx-auto text-sm leading-relaxed">
            <li>Experienced Faculty in Pharmacy Education</li>
            <li>State-of-the-art Pharmaceutical Laboratories</li>
            <li>Comprehensive Pharmacy Curriculum</li>
            <li>Industry Tie-ups for Internships and Placements</li>
            <li>Practical Exposure to Pharmacy Practices</li>
            <li>Supportive Learning Environment for Pharmacy Students</li>
          </ul>
        </section>

        {/* Contact Form */}
        <ParticularDirectContactUs course="Diploma in Pharmacy" />
      </main>

      <Footer />
    </div>
  );
};

export default DiplomaInPharmacyPage;
