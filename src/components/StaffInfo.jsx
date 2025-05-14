import React from "react";

const BoardOfDirectors = () => {
  const directors = [
    { name: "Dipak Chandra Baral", role: "Chairman, Holyvision Technical Campus" },
    { name: "Dr. Tulshi Das Shrestha", role: "Executive Director" },
    { name: "Dr. Soni Mahato", role: "Executive Director" },
    { name: "Dr. Moni Mahto", role: "Board Member" },
    { name: "Dr. Sumintra Nakarmi", role: "Board Member" },
    { name: "Mrs. Amrita Mahaseth", role: "Board Member, Holyvision Technical Campus" },
    { name: "Mrs. Urmila Bhattrai Baral", role: "Board Member" },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4 sm:px-10">
      <h2 className="text-4xl font-bold text-center mb-10">
        <span className="text-blue-600">Board</span>{" "}
        <span className="text-red-600">of Directors</span>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto mt-2 rounded-full" />
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {directors.map((director, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md px-6 py-8 w-full max-w-xs border border-blue-100 text-center"
          >
            <div className="text-xl font-bold text-gray-800 mb-2">{director.name}</div>
            <div className="text-sm text-gray-500">{director.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BoardOfDirectors;
