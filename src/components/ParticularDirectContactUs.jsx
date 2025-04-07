import React, { useState } from "react";
import bgImage from "../assets/gm.jpg";

const ParticularDirectContactUs = ({ course }) => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=hvtcampus@gmail.com&su=Direct Contact Request&body=
      Name: ${encodeURIComponent(data.name)}
      %0AEmail: ${encodeURIComponent(data.email)}
      %0APhone: ${encodeURIComponent(data.phone)}
      %0AAddress: ${encodeURIComponent(data.address)}
      %0ACourse: ${encodeURIComponent(course)}`;

    const mailtoLink = `mailto:hvtcampus@gmail.com?subject=Direct Contact Request&body=
      Name: ${encodeURIComponent(data.name)}
      %0AEmail: ${encodeURIComponent(data.email)}
      %0APhone: ${encodeURIComponent(data.phone)}
      %0AAddress: ${encodeURIComponent(data.address)}
      %0ACourse: ${encodeURIComponent(course)}`;

    window.open(gmailLink, "_blank") || (window.location.href = mailtoLink);
    setMessageSent(true);
  };

  return (
    <div className="w-full">
      <section
        className="relative bg-cover bg-center py-12 px-6"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white p-8 rounded-xl shadow-2xl w-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Direct Contact Us
            </h2>
            {messageSent ? (
              <p className="text-green-600 font-bold text-lg text-center">
                Message Sent Successfully! Please check your Gmail app.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { label: "Name", name: "name", type: "text", placeholder: "Enter your name" },
                  { label: "E-mail", name: "email", type: "email", placeholder: "example@gmail.com" },
                  { label: "Phone Number", name: "phone", type: "tel", placeholder: "Enter your phone number" },
                  { label: "Address", name: "address", type: "text", placeholder: "Enter your address" },
                ].map((field, i) => (
                  <div key={i}>
                    <label className="block text-sm font-medium text-gray-700">{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      className="w-full p-3 rounded-lg bg-gray-50 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-medium text-gray-700">Course</label>
                  <input
                    type="text"
                    name="course"
                    value={course}
                    readOnly
                    className="w-full p-3 rounded-lg bg-gray-100 text-gray-600 shadow-inner cursor-not-allowed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info Text */}
          <div className="text-white text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">Holy Vision Technical Campus</h1>
            <p className="text-lg leading-relaxed mb-4">
              HVTC offers a 3-year academic program in Proficiency Certificate Level (PCL) Nursing (Staff Nurse),
              General Medicine (Health Assistant), and Diploma in Pharmacy. The curriculum is prescribed by CTEVT,
              recognized by Tribhuvan University, and approved by the Nepal Nursing Council, Nepal Health Professional
              Council, and Nepal Pharmacy Council.
            </p>
            <p className="text-lg leading-relaxed">
              Our state-of-the-art simulation labs and expert-led courses ensure a comprehensive, hands-on learning
              experience that upholds the highest standards of patient care and safety.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParticularDirectContactUs;
