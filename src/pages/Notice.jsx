import React, { useState } from "react";
import NavbarMain from "../components/NavbarMain";
import Footer from "../components/Footer";

// SAMPLE IMAGE IMPORTS
import notice1 from "../assets/newnotice.jpeg";
import notice2 from "../assets/update2.jpeg";

// -------------------- DATA --------------------

const noticeData = [
  { src: notice1, file: "newnotice.jpeg", type: "image" },
  { src: notice2, file: "update2.jpeg", type: "image" },
];

const eventData = [
  {
    title: "New Year Special Event",
    date: "2025-01-01",
    time: "11:00 AM",
    description: "Celebration program for students with fun activities.",
    banner: notice1,
  },
  {
    title: "Clouds Nepal Tech Meetup",
    date: "2025-05-10",
    time: "02:00 PM",
    description: "Meetup for all batches to share project ideas.",
    banner: notice2,
  },
];

// -------------------- MAIN COMPONENT --------------------

const Notice = () => {
  const [activeTab, setActiveTab] = useState("notice");

  // Viewer States
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(1);

  const openViewer = (index) => {
    setCurrentIndex(index);
    setZoom(1);
    setViewerOpen(true);
  };

  const closeViewer = () => setViewerOpen(false);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % noticeData.length);

  const prevImage = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? noticeData.length - 1 : prev - 1
    );

  const downloadFile = (fileURL, fileName) => {
    const link = document.createElement("a");
    link.href = fileURL;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const shareFile = async (fileURL) => {
    if (navigator.share) {
      await navigator.share({ title: "Notice", url: fileURL });
    } else {
      alert("Sharing not supported on this device.");
    }
  };

  return (
    <>
      <NavbarMain />
<div className="pt-[120px] mb-7">
      <section className="relative bg-[#0b1220] min-h-screen text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">

          {/* PAGE HEADER */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold">Official Portal</h1>
            <p className="text-white/70 mt-2">
              View notices · Track events · Academic calendar
            </p>
          </div>

          {/* TABS */}
          <div className="flex justify-center gap-4 mb-8">
            {["notice", "event", "calendar"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-xl font-medium transition ${
                  activeTab === tab
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          {/* TAB 1 — NOTICE IMAGES */}
          {activeTab === "notice" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {noticeData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-xl"
                >
                  <button
                    className="cursor-zoom-in"
                    onClick={() => openViewer(index)}
                  >
                    <img
                      src={item.src}
                      alt="notice"
                      className="w-full h-72 object-contain bg-gray-50"
                    />
                  </button>

                  <div className="flex justify-between items-center px-4 py-3 bg-white">
                    <span className="text-sm text-gray-600">
                      Last updated: {new Date().toLocaleDateString()}
                    </span>

                    <button
                      onClick={() => downloadFile(item.src, item.file)}
                      className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm"
                    >
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2 — EVENTS */}
          {activeTab === "event" && (
            <div className="grid sm:grid-cols-2 gap-6">
              {eventData.map((event, i) => (
                <div
                  key={i}
                  className="bg-white/95 text-black rounded-xl shadow-xl p-5"
                >
                  <img
                    src={event.banner}
                    className="rounded-lg w-full h-52 object-cover"
                  />
                  <h2 className="text-xl font-semibold mt-3">{event.title}</h2>
                  <p className="text-gray-700 text-sm mt-2">
                    {event.description}
                  </p>

                  <div className="flex justify-between text-sm mt-3 text-gray-600">
                    <span>📅 {event.date}</span>
                    <span>⏰ {event.time}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3 — GOOGLE CALENDAR */}
          {activeTab === "calendar" && (
            <iframe
              title="Academic Calendar"
              src="https://calendar.google.com/calendar/embed?src=en.nepalian%40gmail.com&ctz=Asia%2FKathmandu"
              className="w-full h-[600px] rounded-xl shadow-xl bg-white"
            ></iframe>
          )}
        </div>

        {/* ---------------- FULLSCREEN VIEWER ---------------- */}
        {viewerOpen && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

            {/* CLOSE BUTTON */}
            <button
              onClick={closeViewer}
              className="absolute top-6 right-6 text-white text-2xl bg-white/20 px-4 py-1 rounded-lg"
            >
              ✕
            </button>

            {/* LEFT BUTTON */}
            <button
              onClick={prevImage}
              className="absolute left-6 text-white text-4xl"
            >
              ❮
            </button>

            {/* IMAGE */}
            <img
              src={noticeData[currentIndex].src}
              style={{ transform: `scale(${zoom})` }}
              className="max-h-[80vh] max-w-[90vw] transition-transform duration-300 rounded-xl"
            />

            {/* RIGHT BUTTON */}
            <button
              onClick={nextImage}
              className="absolute right-6 text-white text-4xl"
            >
              ❯
            </button>

            {/* ZOOM & DOWNLOAD BUTTONS */}
            <div className="absolute bottom-10 flex gap-4">

              <button
                onClick={() => setZoom((z) => Math.min(z + 0.2, 3))}
                className="bg-white/30 px-4 py-2 rounded-lg text-white text-xl"
              >
                ➕ Zoom
              </button>

              <button
                onClick={() => setZoom((z) => Math.max(z - 0.2, 1))}
                className="bg-white/30 px-4 py-2 rounded-lg text-white text-xl"
              >
                ➖ Zoom
              </button>

              <button
                onClick={() =>
                  downloadFile(
                    noticeData[currentIndex].src,
                    noticeData[currentIndex].file
                  )
                }
                

              >
                ⬇️ Download
              </button>

              <button
                onClick={() => shareFile(noticeData[currentIndex].src)}
                className="bg-white/30 px-4 py-2 rounded-lg text-white text-xl"
              >
                🔗 Share
              </button>
            </div>
          </div>
        )}
      </section>
      <Footer />
</div>
    </>
  );
};

export default Notice;