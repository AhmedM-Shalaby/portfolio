import React from "react";
import { FaBook, FaSwimmer, FaChessKnight } from "react-icons/fa";

const InterestsSection = () => {
  const interests = [
    {
      name: "Learning",
      icon: <FaBook className="text-2xl text-blue-500" />,
    },
    {
      name: "Swimming",
      icon: <FaSwimmer className="text-2xl text-teal-500" />,
    },
    {
      name: "Chess",
      icon: <FaChessKnight className="text-2xl text-amber-600" />,
    },
  ];

  return (
    <section className=" bg-[var(--background-color)] rounded-lg shadow-md p-4">
      <h2 className="text-2xl font-bold  mb-6">INTERESTS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {interests.map((interest, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-[var(--secandaryColor)] rounded-lg transition-colors"
          >
            <span className={`${interest.color} mb-2`}>{interest.icon}</span>
            <span className=" font-medium">{interest.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InterestsSection;
