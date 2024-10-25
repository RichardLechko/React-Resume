import React, { useRef } from "react";
import "../styles/work.css";

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

const Company = React.memo(
  ({
    companyName,
    position,
    address,
    startTime,
    endTime,
    descriptions,
    link,
    ref,
  }) => {
    return (
      <div className="company-container fade-in " ref={ref}>
        <div>
          <h2 className="company-name">{companyName}</h2>
          {position && <h3 className="company-position">{position}</h3>}
          <p className="company-address">{address}</p>
          <p className="company-dates">
            {startTime} - {endTime}
          </p>
        </div>
        <ul className="description-list">
          {descriptions.map(
            (desc, index) => desc && <li key={index}>{desc}</li>
          )}
        </ul>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project
          </a>
        )}
      </div>
    );
  }
);

const Work = () => {
  const itemsRef = useRef([]);

  return (
    <section id="work-section">
      <div className="pt-24">
        <h1 className="text-4xl font-bold max-[640px]:text-3xl max-[425px]:text-2xl mb-16">
          Work Experience:
        </h1>
        <div>
          {workExperiences.map((experience, index) => (
            <Company
              key={index}
              {...experience}
              ref={(el) => (itemsRef.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
