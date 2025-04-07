import React, { useEffect, useRef } from 'react';

import aawazlocation from '../assets/holyvisionmap.png';


const mapImageUrl =
  'https://www.google.com/maps/place/Holy+Vision+Technical+Campus/@27.6907731,85.3335731,17.75z/data=!4m6!3m5!1s0x39eb19957c935b35:0x75b06ec216c597d5!8m2!3d27.691029!4d85.3336338!16s%2Fg%2F11b6gdw10d?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D';

const ContactusComponent = () => {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const mapRef = useRef(null);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);

    const observerOptions = {
      threshold: 0.1,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          entry.target.style.opacity = '1';
        } else {
          entry.target.style.animationPlayState = 'paused';
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (headingRef.current) observer.observe(headingRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (mapRef.current) observer.observe(mapRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
      if (mapRef.current) observer.unobserve(mapRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Navbar */}
    
      {/* Main Content with Padding */}
      <div className="flex-grow">
        <div className="p-8 text-center">
          <h1
            ref={headingRef}
            className=" text-[#2D4591] text-2xl sm:text-4xl font-semibold opacity-0"
            style={{ animation: 'fadeInDown 1s ease-out forwards', animationPlayState: 'paused' }}
          >
            Welcome to Holy Vision Technical Campus
          </h1>

          <p
            ref={textRef}
            className="mt-4 text-[15px] sm:text-lg text-gray-700"
            style={{ animation: 'fadeInUp 1s ease-out forwards', animationPlayState: 'paused' }}
          >
            A leading institution dedicated to excellence in technical and healthcare education. At Holy Vision Technical Campus, we empower students through practical training, academic rigor, and community-focused learning. Whether you're pursuing nursing, general medicine, pharmacy, or other CTEVT-affiliated programs, HVTC is your foundation for a purposeful career in service and science.
          </p>
        </div>

        <div ref={mapRef} className="text-center mt-8">
          <a href={mapImageUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={aawazlocation}
              alt="Map"
              className="mx-auto max-w-full h-auto"
            />
          </a>
        </div>
      </div>

   

      {/* Inline CSS for custom animations */}
      <style>{`
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 1.5rem;
            animation-duration: 0.8s;
          }
          p {
            font-size: 1rem;
            animation-duration: 0.8s;
          }
          img {
            animation-duration: 0.8s;
          }
        }
      `}</style>
    
    </div>
  );
};

export default ContactusComponent;
