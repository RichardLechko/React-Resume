import React from "react";
import { FaTrophy, FaBookOpen, FaGraduationCap, FaMedal } from "react-icons/fa";

const Education = () => {
  const organizations = [
    {
      name: "DePaul Computer Science Society",
      startDate: "09/2022",
      endDate: "Present",
      description: "Engaged in various tech projects and networking events.",
    },
    {
      name: "DePaul Math Club",
      startDate: "09/2022",
      endDate: "Present",
      description: "Collaborated on math challenges and study groups.",
    },
    {
      name: "DePaul Chess Club",
      startDate: "09/2022",
      endDate: "Present",
      description:
        "Participated in regional chess tournaments and strategy sessions.",
    },
    {
      name: "DePaul UI/UX Association",
      startDate: "01/2024",
      endDate: "Present",
      description: "Worked on design sprints and user research initiatives.",
    },
    {
      name: "DePaul Cloud Club",
      startDate: "10/2024",
      endDate: "Present",
      description:
        "Explored cloud computing technologies and hosted workshops.",
    },
  ];

  return (
    <div className="container flex flex-col m-auto p-8 pt-32 education-fade-in space-y-8">
      <h1 className="text-4xl text-center font-bold text-[#e2e8f0] max-[640px]:text-3xl max-[425px]:text-2xl mb-6">
        Education
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Current Program Section */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-4 transition duration-300 border border-gray-700 flex flex-col space-y-4">
          <h2 className="text-lg font-semibold text-[#e2e8f0] mb-2">
            Current Program
          </h2>
          <p className="text-md text-gray-400 mb-1">
            Full-time student at{" "}
            <a
              className="underline font-bold text-red-500"
              href="https://www.depaul.edu/Pages/default.aspx"
              target="_blank"
              rel="noopener noreferrer"
            >
              DePaul University
            </a>
          </p>
          <p className="text-md text-gray-400 mb-1">
            Bachelor of Science in Information Technology
          </p>
          <p className="text-md text-gray-400">
            Concentration: Web Development | Expected Graduation:{" "}
            <span className="underline">06/2026</span>
          </p>
        </div>

        {/* GPA & Achievements Section */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-4 transition duration-300 border border-gray-700">
          <h2 className="text-lg font-semibold text-[#e2e8f0] mb-4">
            GPA & Achievements
          </h2>
          <div className="flex items-center mb-3">
            <FaTrophy className="text-yellow-400 text-3xl mr-3" />
            <div>
              <h3 className="text-md font-bold text-[#e2e8f0]">
                Major GPA: <span className="text-lg">3.5 / 4.0</span>
              </h3>
              <p className="text-md text-[#e2e8f0] max-[375px]:text-[0.9rem]">
                2-time Dean's List Student
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 rounded-lg shadow-lg p-4 transition duration-300 border border-gray-700">
        <h2 className="text-lg font-semibold text-[#e2e8f0] mb-2">
          Organizations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {organizations
            .sort((a, b) => {
              const dateA = new Date(
                a.startDate.split("/")[1],
                a.startDate.split("/")[0] - 1
              ); // Convert to Date object
              const dateB = new Date(
                b.startDate.split("/")[1],
                b.startDate.split("/")[0] - 1
              );
              return dateB - dateA; // Sort in descending order
            })
            .map((org, index) => (
              <div
                key={index}
                className="flex items-start p-2 bg-gray-700 rounded-md shadow-sm transition duration-300"
              >
                <FaBookOpen className="text-blue-400 text-3xl mr-2" />
                <div className="flex flex-col space-y-2">
                  <span className="font-bold text-[#e2e8f0] text-sm">
                    {org.name}
                  </span>
                  <span className="text-gray-400 text-xs">
                    {org.startDate} - {org.endDate}
                  </span>
                  <p className="text-xs text-gray-400">{org.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
