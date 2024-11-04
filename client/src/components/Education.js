import React from "react";
import { FaTrophy, FaBookOpen } from "react-icons/fa";

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
      <h1 className="text-4xl text-center font-bold max-[640px]:text-3xl max-[425px]:text-2xl mb-6 text-gray-800 dark:text-gray-200">
        Education
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-xl p-4 transition duration-300 border border-gray-300 dark:border-gray-600 flex flex-col space-y-4">
          <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Current Program
          </h2>
          <p className="text-md mb-1 text-gray-800 dark:text-gray-300">
            Full-time student at{" "}
            <a
              className="font-bold"
              href="https://www.depaul.edu/Pages/default.aspx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-[#005EB8] underline hover:text-[#004080] dark:text-[#0094E0]">
                DePaul University
              </span>
            </a>
          </p>
          <p className="text-md mb-1 text-gray-800 dark:text-gray-300">
            Bachelor of Science in Information Technology
          </p>
          <p className="text-md text-gray-800 dark:text-gray-300">
            Concentration: Web Development | Expected Graduation:{" "}
            <span className="underline">06/2026</span>
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-xl p-4 transition duration-300 border border-gray-300 dark:border-gray-600">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
            GPA & Achievements
          </h2>
          <div className="flex items-center mb-3">
            <FaTrophy className="text-yellow-400 text-3xl mr-3" />
            <div>
              <h3 className="text-md font-bold text-gray-800 dark:text-gray-200">
                Major GPA:{" "}
                <span className="text-lg">
                  <span className="underline">3.5</span> / 4.0
                </span>
              </h3>
              <p className="text-md text-gray-800 dark:text-gray-300">
                2-time Dean's List Student
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-xl p-4 transition duration-300 border border-gray-300 dark:border-gray-600">
        <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
          Organizations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {organizations
            .sort((a, b) => {
              const dateA = new Date(
                a.startDate.split("/")[1],
                a.startDate.split("/")[0] - 1
              );
              const dateB = new Date(
                b.startDate.split("/")[1],
                b.startDate.split("/")[0] - 1
              );
              return dateB - dateA;
            })
            .map((org, index) => (
              <div
                key={index}
                className="flex items-start p-2 bg-gray-200 dark:bg-gray-700 shadow-sm transition duration-300 border border-transparent rounded-xl"
              >
                <FaBookOpen className="text-blue-400 text-3xl mr-2" />
                <div className="flex flex-col space-y-2">
                  <span className="font-bold text-sm text-gray-800 dark:text-gray-200">
                    {org.name}
                  </span>
                  <span className="text-xs text-gray-700 dark:text-gray-300">
                    {org.startDate} - {org.endDate}
                  </span>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {org.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
