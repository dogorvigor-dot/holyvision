import React, { useEffect, useState, useRef } from "react";
import NavbarMain from "../components/NavbarMain";
import Footer from "../components/Footer";

import img11 from "../assets/11.jpeg";
import img22 from "../assets/22.jpeg";
import img44 from "../assets/44.jpeg";
import img55 from "../assets/55.jpeg";
import img88 from "../assets/88.jpeg";
import img111 from "../assets/111.jpeg";
import img3333 from "../assets/3333.jpeg";
import work3 from "../assets/work3.jpeg";
import work6 from "../assets/34.jpeg";
import np1 from "../assets/np1.jpeg";
import np2 from "../assets/np2.jpeg";
import np3 from "../assets/np3.jpeg";
import np4 from "../assets/np4.jpeg";
import np5 from "../assets/np5.jpeg";
import np6 from "../assets/np6.jpeg";
import np7 from "../assets/np7.jpeg";
import festival1 from "../assets/444.jpeg";
import festival2 from "../assets/22222.jpeg";
import festival3 from "../assets/6666.jpeg";

const CATEGORIES = [
  { id: "sports", title: "Sports Activities", thumb: img11 },
  { id: "labs", title: "Practical Labs", thumb: work3 },
  { id: "community", title: "Community & Learning", thumb: np1 },
  { id: "welcome", title: "Welcome & Farewell", thumb: img3333 },
  { id: "festival", title: "Festival", thumb: festival1 },
];

const MEDIA_POOL = {
  sports: [img11, img22, img88, img111, img44].map((s, i) => ({
    id: `s-${i}`,
    src: s,
    type: "image",
    tags: ["sports"],
  })),
  labs: [work3, work6, img55, img44].map((s, i) => ({
    id: `l-${i}`,
    src: s,
    type: "image",
    tags: ["labs"],
  })),
  community: [np1, np2, np3, np4, np5, np6, np7].map((s, i) => ({
    id: `c-${i}`,
    src: s,
    type: "image",
    tags: ["community"],
  })),
  welcome: [img3333, img55, img88].map((s, i) => ({
    id: `w-${i}`,
    src: s,
    type: "image",
    tags: ["welcome"],
  })),
  festival: [festival1, festival2, festival3].map((s, i) => ({
    id: `f-${i}`,
    src: s,
    type: "image",
    tags: ["festival"],
  })),
};

const allMedia = Object.values(MEDIA_POOL).flat();

const ComplexGalleryPage = () => {
  const [activeCat, setActiveCat] = useState(null);
  const [viewAll, setViewAll] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [idx, setIdx] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [autoplay, setAutoplay] = useState(false);
  const autoplayRef = useRef(null);
  const modalRef = useRef(null);
  const [likes, setLikes] = useState({});

  useEffect(() => {
    if (autoplay && modalOpen) {
      autoplayRef.current = setInterval(() => {
        setIdx((i) => (i + 1) % items.length);
        setZoom(1);
        setRotate(0);
      }, 3000);
    }
    return () => clearInterval(autoplayRef.current);
  }, [autoplay, modalOpen, items.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (!modalOpen) return;
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % items.length);
      if (e.key === "ArrowLeft") setIdx((i) => (i - 1 + items.length) % items.length);
      if (e.key === "Escape") setModalOpen(false);
      if (e.key === "+") setZoom((z) => Math.min(3, z + 0.2));
      if (e.key === "-") setZoom((z) => Math.max(1, z - 0.2));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen, items.length]);

  const openCategory = (catId) => {
    setActiveCat(catId);
    setViewAll(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openModal = (list, startIndex = 0) => {
    setItems(list);
    setIdx(startIndex);
    setZoom(1);
    setRotate(0);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setAutoplay(false);
    clearInterval(autoplayRef.current);
  };

  const toggleLike = (id) => setLikes((s) => ({ ...s, [id]: !s[id] }));

  const download = (src, name = "download") => {
    const a = document.createElement("a");
    a.href = src;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const share = async (src) => {
    try {
      if (navigator.share) await navigator.share({ title: "Gallery item", url: src });
      else navigator.clipboard.writeText(src) && alert("Link copied");
    } catch (e) {
      console.error(e);
    }
  };

  /** UPDATED FILTER (NO SEARCH TAG) **/
  const filtered =
    viewAll ? allMedia : activeCat ? MEDIA_POOL[activeCat] : [];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <NavbarMain />

      <div className="pt-[120px] px-6 sm:px-12 pb-20 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Campus Gallery</h1>
        </div>

        {/* Categories */}
        {!viewAll && !activeCat && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((c) => (
              <div
                key={c.id}
                onClick={() => openCategory(c.id)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition hover:-translate-y-2 hover:scale-105 cursor-pointer"
              >
                <div className="relative h-56">
                  <img src={c.thumb} className="w-full h-full object-cover" alt={c.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4">
                    <div>
                      <h3 className="text-xl text-white font-semibold">{c.title}</h3>
                      <p className="text-sm text-white/80">Click to view photos</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {(viewAll || activeCat) && (
          <div className="mt-8 mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              {viewAll ? "All Photos" : CATEGORIES.find((x) => x.id === activeCat).title}
            </h2>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setActiveCat(null);
                  setViewAll(false);
                }}
                className="text-sm text-red-600"
              >
                Back
              </button>

              <button onClick={() => setActiveCat(null)} className="text-sm">
                Categories
              </button>

              <button onClick={() => setViewAll(true)} className="text-sm">
                View All
              </button>
            </div>
          </div>
        )}

        {(viewAll || activeCat) && (
          <div className="gallery-masonry" style={{ columnCount: 1, columnGap: "1rem" }}>
            <style>{`
              @media(min-width:640px){ .gallery-masonry{ column-count:2 }}
              @media(min-width:1024px){ .gallery-masonry{ column-count:3 }}
              .gallery-item{ break-inside: avoid; margin-bottom:1rem; }
            `}</style>

            {filtered.map((m, i) => (
              <div className="gallery-item" key={m.id + i}>
                <div className="relative rounded-lg overflow-hidden shadow-md">
                  {m.type === "image" && (
                    <img
                      src={m.src}
                      loading="lazy"
                      className="w-full rounded-lg object-cover cursor-pointer transform transition hover:scale-105"
                      onClick={() => openModal(filtered, filtered.indexOf(m))}
                    />
                  )}

                  <div className="p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">#{m.tags?.[0] || "photo"}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleLike(m.id)}
                        className={`px-2 py-1 rounded ${
                          likes[m.id] ? "bg-red-100 text-red-600" : "bg-gray-100"
                        }`}
                      >
                        ♥ {likes[m.id] ? 1 : 0}
                      </button>

                      <button
                        onClick={() => download(m.src)}
                        className="px-2 py-1 rounded bg-blue-600 text-white"
                      >
                        ⬇
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div ref={modalRef} className="relative max-w-[90vw] max-h-[90vh] w-full">
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 text-white bg-white/10 px-3 py-1 rounded"
            >
              ✕
            </button>

            <button
              onClick={() => setIdx((i) => (i - 1 + items.length) % items.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl"
            >
              ‹
            </button>

            <button
              onClick={() => setIdx((i) => (i + 1) % items.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl"
            >
              ›
            </button>

            <div className="flex items-center justify-center">
              {items[idx]?.type === "image" && (
                <img
                  src={items[idx].src}
                  style={{ transform: `scale(${zoom}) rotate(${rotate}deg)` }}
                  className="max-h-[80vh] max-w-[80vw] object-contain rounded-lg"
                />
              )}
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/40 p-3 rounded">
              <button onClick={() => setZoom((z) => Math.max(1, z - 0.2))} className="px-3 py-1 text-white border rounded">
                -
              </button>
              <div className="text-white">Zoom: {zoom.toFixed(1)}</div>
              <button onClick={() => setZoom((z) => Math.min(3, z + 0.2))} className="px-3 py-1 text-white border rounded">
                +
              </button>

              <button onClick={() => setRotate((r) => (r + 90) % 360)} className="px-3 py-1 text-white border rounded">
                Rotate
              </button>

              <button onClick={() => download(items[idx].src)} className="px-3 py-1 text-white bg-blue-600 rounded">
                Download
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed right-6 bottom-6 bg-[#034694] text-white p-3 rounded-full shadow-lg"
      >
        ↑
      </button>

      <Footer />
    </div>
  );
};

export default ComplexGalleryPage;
