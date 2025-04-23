import React from "react";
import { motion } from "framer-motion";
import principalImage from "../assets/syringe.jpg"; // Replace with the actual image filename

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function PrincipalMessage() {
  return (
    <motion.div
      className="bg-white p-8 rounded-3xl shadow-2xl space-y-6 max-w-6xl mx-auto my-10 pt-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl font-bold text-blue-700 text-center"
        variants={itemVariants}
      >
        Message from the Principal
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
        variants={itemVariants}
      >
        {/* Principal Image */}
        <motion.img
          src={principalImage}
          alt="Principal Bishwa Bandhu Subedi"
          className="w-full h-auto rounded-2xl shadow-lg object-cover"
          whileHover={{ scale: 1.03 }}
        />

        {/* Message Content */}
        <div className="md:col-span-2 space-y-4 text-gray-700 text-lg leading-relaxed">
          <p>
            <strong>Principal Bishwa Bandhu Subedi</strong> leads Holy Vision Technical Campus (HVTC) with a robust
            foundation built upon <strong>30 years of leadership</strong> in technical education and vocational training at
            <strong> CTEVT</strong>, culminating in his retirement as a 1st class officer. His extensive experience in
            the health sector—including service as a <strong>District Health Officer</strong> and
            <strong> Health Coordinator</strong> in remote regions like <strong>Jumla</strong> and
            <strong> Manang</strong>—underscores his deep commitment to community care.
          </p>
          <p>
            Holding a <strong>Post Graduate Diploma in Health Education</strong> and a
            <strong> Master’s in Sociology & Anthropology</strong>, he brings academic depth to his leadership. His
            professional affiliations include life membership in the
            <strong> Public Health Association of Nepal</strong> and the
            <strong> Health Professional Council</strong>.
          </p>
          <p>
            Under his guidance, HVTC remains aligned with CTEVT’s mission of producing skilled health professionals.
            Our graduates excel in government, private, and international sectors due to the institution’s focus on
            <strong> practical skills, quality education</strong>, and community relevance.
          </p>
          <p>
            For <strong>SEE graduates</strong> dreaming of a future in healthcare, HVTC is your launchpad. With
            highly qualified faculty, advanced lab facilities, and a nurturing environment, we are committed to shaping
            the health heroes of tomorrow.
          </p>
          <p className="text-right text-blue-600 font-semibold">
            — Bishwa Bandhu Subedi, Principal
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
