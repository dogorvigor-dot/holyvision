import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaBriefcase, FaGlobe, FaUserTie, FaUsers } from "react-icons/fa";

// 🎯 Your data
const stats = [
  { icon: <FaUsers size={28} />, label: "Students Enrolled", value: 2287, suffix: "", color: "bg-blue-600" },
  { icon: <FaUserTie size={28} />, label: "Govt. Service", value: 17.66, suffix: "%", color: "bg-green-600" },
  { icon: <FaBriefcase size={28} />, label: "Private Sector", value: 35.16, suffix: "%", color: "bg-yellow-500" },
  { icon: <FaGlobe size={28} />, label: "Foreign Study/Work", value: 27.61, suffix: "%", color: "bg-indigo-600" },
  { icon: <FaUserGraduate size={28} />, label: "Self-Employed", value: 19.55, suffix: "%", color: "bg-pink-600" },
];

// 🔢 Counting hook using requestAnimationFrame
const CountUp = ({ end, suffix, triggerKey }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = parseFloat((end * progress).toFixed(2));
      setCount(current);
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(end);
    };

    requestAnimationFrame(animate);
  }, [triggerKey, end]);

  return <span>{count}{suffix}</span>;
};

// 💠 3D Diamond Card
const AchievementCard = ({ icon, label, value, suffix, color, delay }) => {
  const [countKey, setCountKey] = useState(0);

  return (
    <motion.div
      className="relative w-full max-w-[180px] h-[200px] mx-auto transform hover:scale-105 transition-transform"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.5 }}
      transition={{ duration: 0.5, delay }}
      onViewportEnter={() => setCountKey(prev => prev + 1)}
    >
      {/* Diamond background */}
      <div className="absolute inset-0 transform rotate-45 bg-gradient-to-br from-white to-gray-100 shadow-xl rounded-xl z-0" />

      {/* Inner content in upright orientation */}
      <div className="absolute inset-0 transform -rotate-45 flex flex-col items-center justify-center z-10">
        <div className={`p-4 rounded-full shadow-md mb-3 ${color} text-white`}>
          {icon}
        </div>
        <h3 className="text-xs font-medium text-gray-600 text-center">{label}</h3>
        <div className="mt-2 text-xl font-bold text-gray-900">
          <CountUp end={value} suffix={suffix} triggerKey={countKey} />
        </div>
      </div>
    </motion.div>
  );
};

// 🚀 Main Section Component
const AchievementSection = () => {
  return (
    <section className="bg-blue-50 py-16 px-4 text-center">
      <motion.h2
        className="text-4xl font-bold mb-4 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        Our <span className="text-red-600">Achievements</span>
      </motion.h2>

      <p className="max-w-3xl mx-auto text-gray-600 mb-12">
        Holy Vision Campus celebrates success through excellence in academics and professional placements,
        reflecting our dedication and dynamic learning environment.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {stats.map((item, i) => (
          <AchievementCard key={i} {...item} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
};

export default AchievementSection;
