import React, { useRef } from "react";
import "../styles/work.css";

const workExperiences = [
  {
    companyName: "Hendrickson",
    position: "IT Intern",
    address: "Woodridge, IL",
    startTime: "11/2024",
    endTime: "Present",
    descriptions: [
      "Assist in processing and reporting data to determine KPIs while creating PowerBI dashboards for business process owners and collaborating with teams to identify data needs.",
      "Participate in data analysis sessions to provide insights that drive decision-making.",
    ],
  },
  {
    companyName: "RL IT Firm",
    position: "Frontend Engineer",
    address: "Orland Park, IL",
    startTime: "12/2022",
    endTime: "Present",
    descriptions: [
      "Develop a full-stack application for a local business, collaborating with clients to gather requirements and utilizing Astro, ShadCN, Tailwind, NodeJS, and Express for a robust, responsive app deployed on Vercel.",
      "Ensure optimal viewing experiences through responsive design and conduct user testing to refine features and usability.",
    ],
  },
  {
    companyName: "Mariano's",
    position: "Bakery Clerk",
    address: "Orland Park, IL",
    startTime: "05/2022",
    endTime: "Present",
    descriptions: [
      "Enhance communication skills through customer interactions while developing resilience by handling demanding situations positively and mastering various bakery tasks over time.",
    ],
  },
];

// Wrap Company component with React.forwardRef
const Company = React.forwardRef(
  (
    { companyName, position, address, startTime, endTime, descriptions, link },
    ref
  ) => {
    return (
      <div className="company-container fade-in" ref={ref}>
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
