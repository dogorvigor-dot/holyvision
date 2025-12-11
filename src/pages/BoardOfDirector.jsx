import React, { useState } from "react";
import { motion } from "framer-motion";
import NavbarMain from "../components/NavbarMain";
import Footer from "../components/Footer";

// IMPORT REAL PHOTOS FROM src/assets/BOD
import chairmanImg from "../assets/BOD/chairman.PNG";
import director1Img from "../assets/BOD/director1.PNG";
import director2Img from "../assets/BOD/director2.PNG";
import principalImg from "../assets/BOD/principal.PNG";

// Animation Variants
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 45, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const truncate = (text, n = 240) =>
  text.length > n ? text.slice(0, n).trim() + "…" : text;

export default function BoardOfDirectorsAnimatedCards() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  // Replaceable Cards Data
  const cards = [
    {
      id: "chairman",
      img: chairmanImg,
      name: "Mr. Dipak Chandar Baral",
      title: "Chairman, Holy Vision Technical Campus",
      headerLabel: "Message From the Chairman",
      message: `Namaste and warm greetings to all prospective students, esteemed guardians, partners, and well-wishers.
I am Mr. Dipak Chandar Baral, Chairman of Holy Vision Technical Campus, and it is both an honor and a responsibility to address you as we reflect on our journey and look ahead with renewed purpose.
For over 23 years, Holy Vision Technical Campus has stood as a dedicated contributor to Nepal’s healthcare system, with a clear mission: to develop skilled, ethical, and compassionate middle-level health professionals who can serve the diverse needs of our nation. Our commitment is not merely to educate, but to empower—equipping students with the practical knowledge, technical proficiency, and moral foundation required to excel in Nepal’s dynamic health sector.
Throughout these years, our institution has proudly offered CTEVT-affiliated three-year Proficiency Certificate Level programs in General Medicine, Nursing, and Diploma in Pharmacy. These programs are thoughtfully designed to blend rigorous academics with extensive hands-on training, ensuring our graduates meet both national standards and the real-world demands of healthcare delivery. Our affiliations and recognitions—from the Nepal Nursing Council, Nepal Professional Health Council, Nepal Pharmacy Council, and Tribhuvan University—stand as testimony to the quality and credibility of the education we provide.
Our contribution to Nepal’s development is reflected in the thousands of competent health professionals we have graduated—individuals who are today serving in hospitals, clinics, pharmacies, and communities across the country and beyond. Many of our alumni have achieved distinctions and first divisions, and more importantly, they carry forward the values of service, integrity, and excellence instilled during their time at HVTC.
We take immense pride in our experienced faculty, modern training facilities, and a supportive learning ecosystem that emphasizes not only academic success but also personal growth and social responsibility. Through structured fieldwork, hospital placements, and community engagement, our students gain invaluable experience that prepares them to lead with confidence and compassion.
In addition to our core programs, initiatives such as our Caregiver Program further extend our mission, responding to global needs while creating meaningful career pathways for our youth.
As Chairman, I assure you that Holy Vision Technical Campus remains deeply committed to advancing Nepal’s healthcare education landscape. We will continue to innovate, inspire, and invest in the next generation of health leaders.
I warmly invite aspiring students to join our HVTC family and become part of a respected legacy—one built on excellence, empathy, and nation-building.
With best wishes for a fulfilling and impactful future,
`,
    },
    {
      id: "director1",
      img: director1Img,
      name: "Mr. Tulsi Das Shrestha",
      title: "Director, Holy Vision Technical Campus",
      headerLabel: "Message From the Director",
      message: `I extend my warm greetings to all prospective students, parents, and well-wishers of Holy Vision Technical Campus. My name is Mr. Tulsi Das Shrestha, and I have the distinct honor of serving as the Director of this esteemed institution. With a career spanning several decades in academia, including my tenure as a professor at Tribhuvan University and ongoing involvement in various educational bodies, I have maintained a deep commitment to elevating the standards of higher and technical education in Nepal.
Holy Vision Technical Campus has, for over 23 years, dedicated itself to a vital national cause: the development of proficient, ethical, and compassionate middle-level healthcare professionals. In a country where skilled human resources in health are paramount, our role is both a responsibility and a privilege. We achieve this through our rigorous, CTEVT-affiliated programs in Proficiency Certificate Level (PCL) Nursing, PCL General Medicine, and Diploma in Pharmacy.
Our curriculum is designed to transcend textbook learning, emphasizing hands-on clinical practice, critical thinking, and professional ethics. This approach ensures our graduates are not merely certified, but are truly practice-ready, capable of meeting the demands of hospitals, communities, and the broader healthcare ecosystem from day one. The institutional recognition of our programs by the Nepal Nursing Council, Nepal Professional Health Council, and Nepal Pharmacy Council is a testament to the quality and relevance of the education we provide.
The success of our mission is anchored in three pillars: our experienced faculty, who are mentors in the truest sense; our industry-aligned training infrastructure; and a culture of accountability and care. We measure our achievement through the accomplishments of our alumni, who serve with distinction across Nepal and abroad, and through the trust placed in us by the communities and healthcare institutions we partner with.
I view education as the cornerstone of societal progress. At Holy Vision Technical Campus, we are not just imparting skills; we are shaping the future of Nepal's healthcare landscape. I invite you to become part of this impactful journey—to learn, to grow, and to contribute meaningfully to our nation.
nd my warm greetings to all prospective students...`,
    },
    {
      id: "director2",
      img: director2Img,
      name: "Dr. Soni Mahato",
      title: "Director, Holy Vision Technical Campus",
      headerLabel: "Message From the Director",
      message: `Warm greetings to the aspiring students, dedicated guardians, and well-wishers of Holy Vision Technical Campus.
I am Dr. Soni Mahato, and it is with a deep sense of responsibility and pride that I serve as the Director of this institution. My professional journey—as a dentist, a social health advocate, and an entrepreneur—has been driven by a firm belief in the transformative power of education, especially in building a healthier, more equitable Nepal.
At Holy Vision Technical Campus, we have dedicated over two decades to a mission that is both vital and personal to me: empowering the next generation of healthcare professionals through excellence, ethics, and equity. Our CTEVT-affiliated programs—PCL in General Medicine, PCL in Nursing, and Diploma in Pharmacy—are more than academic courses; they are pathways to leadership, dignity, and service.
Having worked closely with communities across Nepal, I recognize the urgent need for skilled, compassionate, and confident health workers—particularly women, who are the backbone of care in our society. Through practical training, mentorship, and a supportive learning environment, we prepare our students not only to succeed in their careers but also to lead and uplift those around them.
As a woman in leadership, I am personally committed to ensuring that Holy Vision Technical Campus remains a place where young women and men can grow, innovate, and realize their potential. Education is the foundation of change, and in the fields of health and social service, your contribution will shape the future of our nation.
I welcome you to join us in this meaningful endeavor—to learn with purpose, to serve with heart, and to build a brighter, healthier Nepal together.
With sincerity and encouragement
ings to the aspiring students...`,
    },
    {
      id: "principal",
      img: principalImg,
      name: "Mr. Bishwa Bandhu Subedi",
      title: "Principal, Holy Vision Technical Campus",
      headerLabel: "Message From the Principal",
      message: `Dear Students, Parents, and Well-Wishers,
I am pleased to congratulate you on your success in the Secondary Education Examination (SEE) and warmly welcome you to Holy Vision Technical Campus (HVTC).
Your achievement marks an important milestone, and choosing the right path forward is the key to shaping a meaningful future. At HVTC, we are committed to guiding you toward becoming a skilled, compassionate, and career-ready healthcare professional.
With over 30 years of experience in technical education and vocational training, including my service as a 1st-class officer at CTEVT, I am proud to lead an institution that blends academic excellence with real-world relevance. Our programs—PCL in Nursing, PCL in General Medicine, Diploma in Pharmacy, and the newly introduced Caregiver Program—are designed to meet national healthcare demands and equip you with practical skills for immediate employment and further studies.
Graduates of our PCL in General Medicine (Health Assistant), Diploma in Pharmacy, and PCL in Nursing programs have strong career prospects both within Nepal and abroad. Pharmacy diploma holders can work as pharmacy assistants in pharmaceutical industries, hospitals, and retail pharmacies. Health Assistant graduates serve critical roles in Nepal’s healthcare system, working in hospitals, health centers, and NGOs, or pursuing further studies. Nursing graduates enjoy excellent job placement domestically and internationally, with high demand in countries such as the USA, Norway, Australia, and the Middle East—supported by recruitment assistance and licensing preparation.
Overall, these programs equip students with the practical and theoretical skills to thrive in diverse healthcare environments worldwide.
Our dedicated faculty, well-equipped labs, and supportive learning environment ensure that you receive both the knowledge and hands-on experience necessary for success. I encourage you to join us at Holy Vision Technical Campus and take your next step toward a rewarding and impactful career in the health sector.
With best wishes for your future,`,
    },
  ];

  return (
    <>
      <NavbarMain />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100/30 pt-36 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <h1
              className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r 
              from-[#2a57e8] via-[#e2b92e] to-[#ff5722] bg-clip-text text-transparent"
            >
              Board of Directors
            </h1>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg">
              Leadership dedicated to vision, excellence, and nation-building.
            </p>
          </motion.div>

          {/* CARDS GRID */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-14"
          >
            {cards.map((c, i) => (
              <motion.div key={c.id} variants={cardVariants}>
                {/* CARD WRAPPER */}
                <motion.div
                  whileHover={{ scale: 1.035 }}
                  transition={{ type: "spring", stiffness: 160, damping: 18 }}
                  className="p-[1px] rounded-3xl bg-gradient-to-br 
                    from-blue-400/40 via-white to-blue-300/40 shadow-2xl"
                >
                  <div className="rounded-3xl bg-white/80 backdrop-blur-2xl shadow-xl p-8">
                    {/* LABEL */}
                    <div className="text-center mb-6">
                      <span className="px-4 py-1.5 rounded-full text-sm font-semibold text-blue-700 bg-blue-100 shadow">
                        {c.headerLabel}
                      </span>
                    </div>

                    {/* PROFILE */}
                    <div className="flex gap-6 items-center mb-6">
                      <div className="relative w-40 h-40 rounded-2xl overflow-hidden bg-white shadow">
                        <img
  src={c.img}
  alt={c.name}
  className="w-full h-full object-cover rounded-2xl border border-gray-300"
  loading="lazy"
/>

                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {c.name}
                        </h3>
                        <p className="text-blue-700 font-medium mt-1 text-sm">
                          {c.title}
                        </p>
                      </div>
                    </div>

                    {/* MESSAGE */}
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {openIndex === i ? c.message : truncate(c.message, 260)}
                    </p>

                    {/* BUTTON */}
                    <button
                      onClick={() => toggle(i)}
                      className="text-sm font-semibold text-blue-600 hover:text-blue-800 mt-4"
                    >
                      {openIndex === i ? "Show less ▲" : "Read more ▼"}
                    </button>
                  </div>
                </motion.div>

                {/* DECORATION */}
                <div className="absolute opacity-10 -top-10 -right-10">
                  <div className="w-28 h-28 rounded-full border-2 border-blue-500"></div>
                </div>
              </motion.div>
            ))}
          </motion.section>
        </div>
      </main>

      <Footer />
    </>
  );
}
