import React, { useEffect } from "react";
import { motion } from "framer-motion";
import TeamImage from "../assets/tps.png";
import bgImage from "../assets/abt.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.25, 1, 0.5, 1] },
  },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: [0.25, 1, 0.5, 1] },
  },
};

const AboutIntandem = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="w-full flex-shrink-0 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="min-h-screen flex flex-col items-center py-10 backdrop-saturate-200 bg-white/80">
        {/* Title */}
        <motion.h1
          className="text-4xl font-bold text-blue-900 mb-6 text-center px-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          About Holy Vision Technical Campus
        </motion.h1>

        {/* Content Card */}
        <motion.div
          className="max-w-7xl w-full flex flex-col md:flex-row shadow-xl rounded-lg overflow-hidden backdrop-blur-md bg-white/90"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Image Section */}
          <motion.div
            className="w-full md:w-1/2 group relative"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <img
              src={TeamImage}
              alt="HVTC Team"
              className="w-full h-[280px] md:h-[380px] object-cover transition-transform transform hover:scale-105 duration-500"
            />
          </motion.div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 p-8 space-y-6">
            {[
              {
                tag: "h2",
                content: "Welcome to Holy Vision Technical Campus",
              },
              {
                content:
                  "The establishment of Holy Vision Technical Campus has been inspired by twin objectives of producing the middle level health professionals and preparing them for employment on completion of their education and training. The graduates of this campus will be able to provide quality health care to mainly rural population in all preventive, promotive, curative, drug management and rehabilitative aspects.",
              },
              {
                content:
                  "Among these three programs—PCL in Nursing, General Medicine, and Diploma in Pharmacy—Nursing was initiated in 2002 followed by General Medicine in 2003 and Pharmacy in 2004. Many students have graduated with distinction and first division marks.",
              },
              {
                content:
                  "These 3-year academic programs are offered under CTEVT curricula and are recognized by Tribhuvan University, Nepal Nursing Council, Nepal Health Professional Council, and Nepal Pharmacy Council. Join us and build your future with quality technical education and hands-on healthcare training.",
              },
            ].map((item, i) =>
              item.tag === "h2" ? (
                <motion.h2
                  key={i}
                  className="text-3xl font-semibold text-[#2D4591]"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                >
                  {item.content}
                </motion.h2>
              ) : (
                <motion.p
                  key={i}
                  className="text-base leading-relaxed text-justify text-gray-800"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {item.content}
                </motion.p>
              )
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutIntandem;
