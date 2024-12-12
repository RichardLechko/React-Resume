import React, { useRef } from "react";

const workExperiences = [
  {
    companyName: "Hendrickson",
    position: "IT Intern",
    address: "Woodridge, IL",
    startTime: "11/2024",
    endTime: "Present",
    descriptions: [
      "Assist in processing and reporting data to determine KPIs while creating PowerBI dashboards.",
      "Participate in data analysis sessions to provide insights that drive decision-making.",
    ],
    logo: "/work-images/hendrickson-logo.png",
    tools: [
      "PowerBi",
      "KPIs",
      "SQL",
      "Microsoft Products",
      "VPNs",
      "QAD",
      "ERP Systems",
    ],
  },
  {
    companyName: "RL IT Firm",
    position: "Frontend Engineer",
    address: "Orland Park, IL",
    startTime: "12/2022",
    endTime: "Present",
    descriptions: [
      "Develop a full-stack application for a local business using Astro, ShadCN, and Tailwind.",
      "Ensure optimal viewing experiences through responsive design and user testing.",
    ],
    logo: "/work-images/rl-it-firm-logo.png",
    tools: [
      "Astro",
      "Tailwind",
      "React",
      "Consulting",
      "SASS",
      "TypeScript",
      "Node.js",
      "ShadCN",
    ],
  },
];

const Company = React.forwardRef(
  (
    { companyName, position, startTime, endTime, descriptions, logo, tools },
    ref
  ) => {
    return (
      <div ref={ref} className="company-container">
        <div className="company-info">
          <div className="company-logo-container">
            <div className="company-logo">
              <img
                src={logo}
                alt={`${companyName} logo`}
                className="company-logo-img"
              />
            </div>
          </div>

          <div className="company-header">
            <p className="company-duration">
              <span className="start-time">{startTime}</span> -{" "}
              <span className="end-time">{endTime}</span>
            </p>
            <h2 className="company-name">{companyName}</h2>
            <h3 className="company-position">{position}</h3>
          </div>

          <div className="company-content">
            <ul className="company-descriptions">
              {descriptions.map((desc, index) => (
                <li key={index} className="company-description-item">
                  {desc}
                </li>
              ))}
            </ul>

            <div className="company-tools">
              {tools.map((tool, index) => (
                <span key={index} className="company-tool">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

const Work = () => {
  const itemsRef = useRef([]);

  return (
    <section id="work" className="work-section">
      <div className="work-container">
        <h1>
          <span className="content-backdrop">Work</span>
        </h1>
        <div className="work-content">
          <div className="work-left">
            <div className="work-left-inner"></div>
          </div>
          <div className="work-right">
            <div className="work-right-inner"></div>
            <div className="work-experiences">
              {workExperiences.map((experience, index) => (
                <Company
                  key={index}
                  {...experience}
                  ref={(el) => (itemsRef.current[index] = el)}
                  className="work-experience-item"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
