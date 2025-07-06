import React, { useEffect } from "react";
import { motion } from "framer-motion";
import NavbarMain from "../components/NavbarMain";
import Footer from "../components/Footer";
import scholarshipHero from "../assets/scholarshippic.jpg"; // Make sure this image exists in your assets folder

const ScholarshipPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const head = document.head;

    const title = document.createElement("title");
    title.innerText = "Scholarship Program | Holy Vision Technical Campus";
    head.appendChild(title);

    const metaDesc = document.createElement("meta");
    metaDesc.name = "description";
    metaDesc.content =
      "Holy Vision Technical Campus offers scholarships for Pharmacy and General Medicine (HA) students under CTEVT guidelines. Learn more about eligibility and award details.";
    head.appendChild(metaDesc);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavbarMain />

      {/* Hero Section with Background Image */}
      <section
        className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] flex items-center justify-center mt-[60px] bg-black/60 bg-blend-overlay"
        style={{
          backgroundImage: `url(${scholarshipHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.div
          className="text-white text-center px-6"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">
            HVTC Scholarship Program
          </h1>
          <p className="text-base sm:text-lg max-w-3xl mx-auto">
            Empowering students through need-based and merit-based scholarships in healthcare education.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-16 space-y-14">
        {/* Pharmacy Scholarship */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Scholarship – Diploma in Pharmacy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Holy Vision Technical Campus (HVTC) offers a distinguished scholarship program for the PCL in Diploma in
            Pharmacy (D. Pharm) program, specifically targeting students classified under Category 3 by the Council for
            Technical Education and Vocational Training (CTEVT). Each year, three students from this category are
            selected to receive this scholarship, highlighting HVTC’s dedication to supporting diverse talent.
            Additionally, a separate merit-based scholarship is awarded to one outstanding student, recognizing
            exceptional academic achievement and potential. This dual scholarship initiative underscores HVTC’s
            commitment to fostering educational opportunities and rewarding excellence in the field of healthcare.
          </p>
        </section>

        {/* General Medicine Scholarship */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Scholarship – General Medicine (HA)
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Holy Vision Technical Campus (HVTC) offers a distinguished scholarship program for the PCL in General
            Medicine (HA) program, specifically targeting students classified under Category 3 by the Council for
            Technical Education and Vocational Training (CTEVT). Three students from this category are selected each
            year to receive this scholarship, highlighting HVTC’s dedication to supporting diverse talent. Additionally,
            a separate merit-based scholarship is awarded to one outstanding student, recognizing exceptional academic
            achievement and potential. This dual scholarship initiative underscores HVTC’s commitment to fostering
            educational opportunities and rewarding excellence in the field of healthcare.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ScholarshipPage;
