import React from "react";
import {
  FaTrophy,
  FaUsers,
  FaBookOpen,
  FaGraduationCap,
  FaMedal,
} from "react-icons/fa";

const Education = () => {
  return (
    <div className="container flex flex-col m-auto p-8 pt-32 education-fade-in">
      {/* Hero Section */}
      <h1 className="text-4xl text-center mb-4 font-bold text-[#e2e8f0] max-[640px]:text-3xl max-[425px]:text-2xl">
        Education:
      </h1>
      <section className="text-center bg-gray-900 py-8 px-4 rounded-lg shadow-lg mb-12 transition duration-300 hover:bg-gray-700 transform hover:scale-105">
        <p className="text-xl text-[#e2e8f0] max-[768px]:text-xl max-[640px]:text-base">
          Full-time student at{" "}
          <a
            className="underline font-bold text-red-500"
            href="https://www.depaul.edu/Pages/default.aspx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-red-600">DePaul</span>{" "}
            <span className="text-blue-500">University</span>
          </a>
          , pursuing a Bachelor's in Information Technology with a concentration
          in Web Development.
        </p>
      </section>

      {/* Two-Column Layout */}
      <section className="grid grid-cols-2 gap-8 max-[768px]:grid-cols-1">
        {/* Major GPA */}
        <div className="bg-gray-900 shadow-md rounded-lg flex flex-col items-center justify-center text-center transition duration-300 hover:bg-gray-700 transform hover:scale-105">
          <FaTrophy className="text-yellow-400 text-6xl mb-2 transition-transform duration-300 hover:scale-125 max-[768px]:my-8" />
          <h2 className="text-2xl font-bold text-[#e2e8f0]">Major GPA</h2>
          <p className="text-xl text-[#e2e8f0] max-[425px]:text-base max-[768px]:mb-8">
            3.5 / 4.0
          </p>
        </div>

        {/* Organizations */}
        <div className="bg-gray-900 p-8 shadow-md rounded-lg flex flex-col items-start transition duration-300 hover:bg-gray-700 transform hover:scale-105 max-[375px]:p-[0.2rem]">
          <FaUsers className="text-blue-500 text-6xl mb-2 transition-transform duration-300 hover:scale-125 mx-auto" />
          <h2 className="text-2xl font-bold mb-4 text-[#e2e8f0] text-center mx-auto">
            Organizations
          </h2>
          <ul className="list-disc pl-4 w-full text-[#e2e8f0] max-[425px]:list-none max-[425px]:pl-0">
            {[
              "DePaul Computer Science Society",
              "DePaul Math Club",
              "DePaul Chess Club",
              "DePaul UI/UX Association",
              "DePaul Cloud Club",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center mb-2 max-[425px]:bg-gray-800 max-[425px]:p-2 max-[425px]:rounded-md"
              >
                <FaBookOpen className="inline mr-2 text-blue-400 text-2xl max-[640px]:text-xl max-[375px]:text-base" />
                <span className="max-[425px]:text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-gray-900 py-8 mt-12 text-center rounded-lg shadow-lg transition duration-300 hover:bg-gray-700 transform hover:scale-105">
        <div className="flex flex-col items-center">
          <FaMedal className="text-yellow-400 text-6xl mb-2 transition-transform duration-300 hover:scale-125" />
          <p className="text-2xl font-bold text-[#e2e8f0] max-[768px]:text-xl max-[425px]:text-base">
            2-time Dean's List student
          </p>
        </div>
      </section>

      {/* Graduation */}
      <section className="bg-gray-900 py-8 mt-8 text-center rounded-lg shadow-md transition duration-300 hover:bg-gray-700 transform hover:scale-105">
        <div className="flex flex-col items-center">
          <FaGraduationCap className="text-blue-500 text-6xl mb-2 transition-transform duration-300 hover:scale-125" />
          <p className="text-2xl font-bold text-[#e2e8f0] max-[768px]:text-xl max-[425px]:text-base">
            Expected Graduation: <span className="underline">06/2026</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Education;
