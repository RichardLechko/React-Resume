import React from "react";

// Array of work experiences
const workExperiences = [
  {
    companyName: "RL IT Firm",
    position: "IT Consultant",
    address: "Orland Park, IL",
    startTime: "12/2022",
    endTime: "Present",
    descriptions: [
      "Designed and maintained a personal website showcasing technical skills, projects, and a coding playground.",
      "Created a website for a local business, for free, enhancing their online presence.",
    ],
    link: "https://freedombutchers.vercel.app/",
  },
  {
    companyName: "Mariano's",
    position: "Bakery Clerk",
    address: "Orland Park, IL",
    startTime: "05/2022",
    endTime: "Present",
    descriptions: [
      "Enhanced communication skills through daily interactions with diverse customers.",
      "Developed resilience by handling demanding situations with a positive attitude.",
      "Expanded responsibilities over time, mastering various tasks and areas of the bakery.",
    ],
  },
  {
    companyName: "McDonald's",
    position: "Morning Crew",
    address: "Orland Park, IL",
    startTime: "06/2023",
    endTime: "Present",
    descriptions: [
      "Strengthened teamwork abilities through collaboration on challenging tasks.",
      "Improved problem-solving skills by addressing and resolving issues promptly.",
    ],
  },
];

// Memoized Company component
const Company = React.memo(
  ({
    companyName,
    position,
    address,
    startTime,
    endTime,
    descriptions,
    link,
  }) => {
    return (
      <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg w-full max-w-6xl">
        <div className="text-left mb-4 max-[640px]:text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            {companyName}
          </h2>
          {position && (
            <h3 className="text-xl font-medium text-gray-700">{position}</h3>
          )}
          <p className="text-gray-500">{address}</p>
          <p className="text-black">
            {startTime} - {endTime}
          </p>
        </div>
        <ul className="list-disc pl-5 mt-2 text-gray-600 max-[640px]:mx-auto">
          {descriptions.map(
            (desc, index) => desc && <li key={index}>{desc}</li>
          )}
        </ul>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline mt-2 block max-[640px]:text-center"
          >
            View Project
          </a>
        )}
      </div>
    );
  }
);

const Work = () => {
  return (
    <section className="px-4 mx-auto mb-24" id="work">
      <div className="mt-16 pt-16">
        <h1 className="text-4xl text-center mb-4 font-bold max-[640px]:text-3xl max-[425px]:text-2xl">
          Work Experience:
        </h1>
        <div className="flex flex-col items-center gap-8">
          {workExperiences.map((experience, index) => (
            <Company key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
