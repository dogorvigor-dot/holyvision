import React from "react";

const BoardOfDirectors = () => {
  const directors = [
    {
      name: "Mr. Dipak Chandra Baral",
      role: `Chairman\nAdmin. Chief, Everest Hospital\nChairman, NIMS`,
    },
    {
      name: "Asso. Prof. Dr. Tulsi Das Shrestha, T.U.",
      role: `Executive Director\nBoard Member of Everest Hospital\nGeneral Secretary, UNAN`,
    },
    {
      name: "Dr. Soni Mahato",
      role: `Executive Director\nBoard Member of Everest Hospital\nTeam Expert, Social Welfare Council`,
    },
    {
      name: "Dr. Moni Mahto",
      role: `Director\nConsultant Micro Biologist\nInterprete Nepal\nBoard Member of \nEverest Hospital`,
    },
    {
      name: "Dr. Sumitra Nakarmi",
      role: `Director\nMember of\nSocial Welfare Council`,
    },
    {
      name: "Mrs. Amrita Mahaseth",
      role: `Director\nBoard Member of\nEverest Hospital`,
    },
    {
      name: "Mrs. Urmila Bhattarai Baral",
      role: `Director`,
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16 bg-gray-50 text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10">Board of Directors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {directors.map((director, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300 ease-in-out"
          >
            <h3 className="text-xl font-semibold mb-2">{director.name}</h3>
            <p className="text-sm text-gray-700 whitespace-pre-line">{director.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BoardOfDirectors;
