import React, { useState } from "react";
import NavbarMain from "../components/NavbarMain";
import Footer from "../components/Footer";
import notice1 from "../assets/noticepic.jpeg";
import notice2 from "../assets/notice2.jpeg";
import notice3 from "../assets/notice3.jpeg";

const notices = [
  { src: notice1, file: "noticepic.jpeg" },
  { src: notice2, file: "notice2.jpeg" },
  { src: notice3, file: "notice3.jpeg" },
];

const Notice = () => {
  const [open, setOpen] = useState(false);
  const [activeNotice, setActiveNotice] = useState(null);

  return (
    <>
      <NavbarMain />

      {/* Background wrapper */}
      <section
        className="relative"
        style={{
          background:
            "radial-gradient(1200px 600px at 10% -10%, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0) 60%), radial-gradient(1200px 600px at 110% 110%, rgba(16,185,129,0.15) 0%, rgba(16,185,129,0) 60%), linear-gradient(180deg, #0b1220 0%, #0e1326 100%)",
        }}
      >
        {/* Subtle pattern overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "28px 28px, 28px 28px",
            maskImage:
              "radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-4 py-10 sm:py-14 md:py-20">
          <div className="mx-auto max-w-3xl text-center text-white/90">
            <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
              Official Notices
            </h1>
            <p className="mt-3 text-sm sm:text-base text-white/70">
              Tap any notice to zoom · Download available
            </p>
          </div>

          {/* Grid of notices */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {notices.map((notice, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 overflow-hidden"
                style={{ backdropFilter: "blur(2px)" }}
              >
                <button
                  onClick={() => {
                    setActiveNotice(notice.src);
                    setOpen(true);
                  }}
                  className="block w-full cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-label={`Open notice ${idx + 1}`}
                  title="Open notice image"
                >
                  <img
                    src={notice.src}
                    alt={`Notice ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-auto block"
                    style={{
                      aspectRatio: "3 / 4",
                      objectFit: "contain",
                      background:
                        "linear-gradient(180deg, #f7fafc, #ffffff 40%, #f7fafc)",
                    }}
                  />
                </button>

                {/* Actions */}
                <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 bg-white">
                  <span className="text-sm text-gray-600">
                    Last updated: {new Date().toLocaleDateString()}
                  </span>
                  <a
                    href={notice.src}
                    download={notice.file}
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-white text-sm font-medium hover:bg-blue-700 active:bg-blue-800 transition"
                  >
                    Download
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 3a1 1 0 0 1 1 1v9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4A1 1 0 1 1 8.293 11.293L10.586 13.586V4a1 1 0 0 1 1-1ZM5 20a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2H5Z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox / Modal */}
        {open && (
          <div
            className="fixed inset-0 z-50 bg-black/80 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            onClick={(e) => {
              if (e.target === e.currentTarget) setOpen(false);
            }}
          >
            <div className="min-h-full flex items-start justify-center p-4 sm:p-8">
              <div className="w-full max-w-5xl">
                <img
                  src={activeNotice}
                  alt="Notice enlarged"
                  className="w-full h-auto rounded-xl shadow-2xl"
                  loading="eager"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center rounded-lg bg-white/90 px-4 py-2 text-sm font-medium hover:bg-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
};

export default Notice;
