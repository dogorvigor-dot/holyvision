import React from "react";
import { motion } from "framer-motion";
import NavbarMain from "../components/NavbarMain";
import Footer from "../components/Footer";

/* ----------------------------------------------------
   📌 IMPORT REAL TEAM IMAGES (Replace Anytime)
---------------------------------------------------- */

// ⭐ Academic Team Images
import vpImg from "../assets/Team/Viceprincipal.jpeg";
import headAdmImg from "../assets/Team/headofadmissiondepartment.jpeg";
import pharmacyCImg from "../assets/Team/Programcordinatordiploma.jpeg";
import gmCImg from "../assets/Team/Programcordinatorpcl.jpeg";
import basicScienceCImg from "../assets/Team/1styearbasicscience.jpeg";

// ⭐ Administration Team Images
import bishalImg from "../assets/Team/accontantadmin.jpeg";
import dhirendraImg from "../assets/Team/librarian.jpeg";
import gitaImg from "../assets/Team/receptionist.jpeg";
import imranImg from "../assets/Team/assistantaccountant.jpeg";

/* ----------------------------------------------------
   📌 REPLACEABLE MESSAGES (Edit Freely)
---------------------------------------------------- */

const vpMessage = `It gives me immense joy and pride to welcome you all to the new chapter of your academic journey. First of all, I would like to congratulate each one of you for securing good results in SEE and taking the first step towards a bright future.
You must choose a path that will shape your future and determine your career ahead. Education is a blend of academic excellence, discipline and creativity. At our campus, we aim to encourage and empower our students to grow into humble, knowledgeable and responsible individuals who will spread positivity and contribute meaningfully to the society.
As you step into this important phase of your life, I urge you to remain curious, seek growth and embrace every opportunity to learn and explore. Always stay focused on your goals and work hard with determination and passion.
`;
const headAdmMessage = `On behalf of the Admissions Department at Holy Vision Technical Campus, I extend a warm welcome to all prospective students and guardians. Choosing the right institution is a pivotal decision in shaping your professional future, and we are here to guide you through every step of the process.
Enrolling at HVTC opens the door to a transformative educational experience designed for real-world impact. Our CTEVT-affiliated programs in PCL Nursing, PCL General Medicine, and Diploma in Pharmacy are built to equip you with both the knowledge and hands-on skills demanded by today’s healthcare sector. You will benefit from experienced faculty, modern labs, hospital-based training, and career guidance—ensuring you graduate not just with a certificate, but with the confidence and competence to excel in Nepal or abroad.
The admission process at HVTC is simple and transparent. Eligible students can apply online through our website or visit our campus directly. Required documents typically include your SEE mark sheet, character certificate, and citizenship proof, followed by a counseling session. We encourage interested candidates to contact our admission office for detailed entry requirements and support with the application.
In line with CTEVT norms and our institutional commitment to accessibility, HVTC offers scholarships to deserving students. These include merit-based scholarships for top SEE achievers, need-based support for economically challenged students, and special quotas as per government guidelines. Our team is available to help you understand the eligibility criteria and application procedure for these opportunities.
We invite you to become part of a campus that values excellence, empathy, and empowerment. Take the first step toward a meaningful career in healthcare by joining HVTC—where your education is an investment in yourself and the wellbeing of our nation.
Warm regards,
`;
const pharmacyCMessage = `Namaste and a warm welcome to all aspiring healthcare professionals.
I am pleased to serve as the Program Coordinator for the Diploma in Pharmacy at Holy Vision Technical Campus. In today’s world, pharmacy is more than a profession—it is a vital link between medical care and patient well-being. Our program is thoughtfully designed to prepare you for this essential role.
Our CTEVT-affiliated three-year Diploma in Pharmacy combines strong theoretical foundations with extensive practical training. You will learn from experienced faculty, work in well-equipped laboratories, and gain real-world exposure through placements in reputable hospitals, pharmacies, and pharmaceutical industries. The curriculum is aligned with national standards and recognized by the Nepal Pharmacy Council, ensuring your qualifications are valued across Nepal and beyond.
Upon completion, you will be prepared for diverse opportunities—whether as a pharmacy assistant in hospitals and retail pharmacies, a representative in the pharmaceutical industry, or a foundation for further academic advancement. Our focus remains on nurturing not only skilled pharmacy professionals but also responsible, ethical individuals ready to contribute to community health.
I personally oversee each student’s academic journey, offering guidance and support to help you succeed. If you are passionate about healthcare and eager to build a stable, respected career, I invite you to join our pharmacy program at HVTC.
Let’s work together toward a future where your knowledge touches lives.
`;
const gmCMessage = `Dear aspiring healthcare professionals,
I am honored to serve as the Program Coordinator for the Proficiency Certificate Level (PCL) in General Medicine at Holy Vision Technical Campus. With years of experience in medical education and frontline health service, I understand what it takes to become a competent, confident, and compassionate health assistant—the backbone of Nepal's healthcare system.
Our three-year program is thoughtfully designed to prepare you for real-world challenges. Through a balanced curriculum of classroom learning, laboratory practice, and mandatory clinical rotations, you will gain the knowledge and hands-on skills needed to diagnose common illnesses, provide preventive care, assist in emergencies, and support community health initiatives. At HVTC, we emphasize not only clinical competence but also communication, ethics, and empathy—qualities that define a trusted healthcare provider.
Our faculty comprises experienced medical professionals and educators dedicated to your growth. Training takes place in well-equipped labs and through partnerships with reputable hospitals and health centers, ensuring you learn in environments that mirror the professional settings you will soon join.
Upon completion, you will be eligible to work as a certified Health Assistant in government and private hospitals, primary health centers, NGOs, and community health programs across Nepal. Many of our graduates also pursue further studies in fields such as Bachelor in Public Health, Nursing, or Medicine, both within Nepal and abroad.
I invite passionate and determined students to join this program—where you will not only earn a qualification but also embrace a role of responsibility and service. Together, let’s build a healthier Nepal, one community at a time.
`;
const basicScienceMessage = `Welcome to Holy Vision Technical Campus and to the foundational year of your professional journey in healthcare.
I serve as the Coordinator for the First Year (Basic Science) of the PCL program, and it is my privilege to guide you through this essential academic phase. The first year is strategically designed to build a robust scientific foundation in subjects such as Anatomy and Physiology, Zoology, Botany, Physics, Chemistry, Math and Computer, English, Nepali and Social, . These core disciplines are not merely preliminary courses—they are the vital building blocks upon which your entire clinical knowledge and practical skills will depend.
Our approach combines structured classroom learning with hands-on laboratory sessions, encouraging both intellectual curiosity and analytical thinking. You will be supported by experienced faculty members who are dedicated to making complex concepts accessible and relevant to your future roles as nurses, health assistants, and pharmacy professionals. We emphasize not only academic understanding but also the development of disciplined study habits and a spirit of collaborative learning.
I encourage each of you to actively engage with your studies, utilize our learning resources, and approach this year with focus and determination. A strong grasp of basic science will empower you immensely as you advance into your specialized fields. My office is always open for academic guidance, and I am personally committed to supporting your successful transition into the world of health sciences.
Let’s make this first year a solid and inspiring start to your rewarding career.
`;

/* ----------------------------------------------------
   📌 Animation Variants (Reusable)
---------------------------------------------------- */

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, duration: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

/* ----------------------------------------------------
   ⭐ CARD COMPONENT (No Need to Change)
---------------------------------------------------- */

const TeamCard = ({
  image,
  name,
  title,
  message,
  experience,
  qualification,
}) => {
  const [open, setOpen] = React.useState(false);

  const truncate = (text, n = 200) =>
    text && text.length > n ? text.slice(0, n).trim() + "..." : text;

  return (
    <motion.div
      variants={itemVariants}
      className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition relative"
    >
      {message && (
        <div className="text-center mb-3">
          <span className="px-4 py-1 rounded-full text-sm font-semibold text-blue-700 bg-blue-100">
            Message From {name.split(" ")[0]}
          </span>
        </div>
      )}

      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 object-cover rounded-2xl shadow border border-gray-200"
          loading="lazy"
        />

        <div>
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <p className="text-blue-600 text-sm font-medium">{title}</p>
        </div>
      </div>

      {message && (
        <>
          <p className="text-gray-700 whitespace-pre-line leading-relaxed">
            {open ? message : truncate(message)}
          </p>

          <button
            className="text-blue-600 mt-3 text-sm font-semibold hover:text-blue-700"
            onClick={() => setOpen(!open)}
          >
            {open ? "Show less ▲" : "Read more ▼"}
          </button>
        </>
      )}

      {(experience || qualification) && (
        <div className="mt-3 text-gray-700 text-sm space-y-1">
          {experience && (
            <p>
              <strong>Experience:</strong> {experience}
            </p>
          )}
          {qualification && (
            <p>
              <strong>Qualification:</strong> {qualification}
            </p>
          )}
        </div>
      )}
    </motion.div>
  );
};

/* ----------------------------------------------------
   ⭐ MAIN PAGE
---------------------------------------------------- */

export default function TeamPage() {
  const gradientTitle =
    "bg-gradient-to-r from-blue-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent";

  return (
    <>
      <NavbarMain />

      <div className="w-full py-16 px-4 md:px-10 bg-gray-50 min-h-screen">
        {/* HEADER */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="text-center mb-16"
        >
          <div className="pt-[120px] mb-7">
            <h1
              className={`text-4xl md:text-5xl font-extrabold ${gradientTitle}`}
            >
              Our Team
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto mt-3">
              Meet the dedicated academic and administrative staff who help run
              our institution.
            </p>
          </div>
        </motion.div>

        {/* ⭐ Academic Team */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mb-20"
        >
          <h2 className={`text-3xl font-extrabold mb-6 ${gradientTitle}`}>
            Academic Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamCard
              image={vpImg}
              name="Ms. Reena Mool Rajbhan"
              title="Vice Principal"
              message={vpMessage}
            />
            <TeamCard
              image={headAdmImg}
              name="Mr. Niranjan Bhattarai"
              title="Head of Admissions Department"
              message={headAdmMessage}
            />
            <TeamCard
              image={pharmacyCImg}
              name="Sabina Shah Bam"
              title="Program Coordinator, Diploma in Pharmacy"
              message={pharmacyCMessage}
            />
            <TeamCard
              image={gmCImg}
              name="Tek Maya Thapa"
              title="Program Coordinator, PCL in General Medicine"
              message={gmCMessage}
            />
            <TeamCard
              image={basicScienceCImg}
              name="Manisha Dahal"
              title="1st Year (Basic Science) Coordinator"
              message={basicScienceMessage}
            />
          </div>
        </motion.div>

        {/* ⭐ Administration Team */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mb-10"
        >
          <h2 className={`text-3xl font-extrabold mb-6 ${gradientTitle}`}>
            Administration Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamCard
              image={bishalImg}
              name="Bishal Baral"
              title="Accountant / Admin"
              experience="15 years"
              qualification="BSCIT"
            />
            <TeamCard
              image={dhirendraImg}
              name="Dhirendra Sharma"
              title="Librarian"
              experience="20 years"
              qualification="IA"
            />
            <TeamCard
              image={gitaImg}
              name="Gita Timalsina Budhathoki"
              title="Receptionist"
              experience="20 years"
              qualification="+2"
            />
            <TeamCard
              image={imranImg}
              name="Imran Chandra Dahal"
              title="Assistant Accountant & Computer Teacher"
              experience="8 years"
              qualification="+2 & Diploma in Hardware & Networking"
            />
          </div>
        </motion.div>
      </div>

      <Footer />
    </>
  );
}
