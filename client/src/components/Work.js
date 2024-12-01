import React, { useRef } from "react";
import { TbCircleLetterHFilled } from "react-icons/tb";

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
    logo: <TbCircleLetterHFilled size={120} />,
    tools: [
      "PowerBi",
      "KPIs",
      "SQL",
      "Microsoft Teams",
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
    ],
  },
];

const Company = React.forwardRef(
  (
    { companyName, position, startTime, endTime, descriptions, logo, tools },
    ref
  ) => {
    const logoSize = 96;

    return (
      <div
        ref={ref}
        className="flex items-start relative max-[768px]:flex-col max-[768px]:items-center max-[768px]:w-full"
      >
        {/* Logo Wrapper */}
        <div className="flex items-center justify-center z-10 relative max-[768px]:w-full max-[768px]:mb-6">
          <div className="relative flex justify-center items-center -ml-[3.3rem] max-[768px]:ml-0">
            {typeof logo === "string" ? (
              <img
                src={logo}
                alt={`${companyName} logo`}
                className="rounded-full border-gray-400 border-8 z-10"
                style={{
                  width: `${logoSize}px`,
                  height: `${logoSize}px`,
                }}
              />
            ) : (
              <div
                className="rounded-full flex items-center justify-center dark:text-[#2b2b2b] bg-gray-400 z-10"
                style={{
                  width: `${logoSize}px`,
                  height: `${logoSize}px`,
                }}
              >
                {logo}
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow pl-10 max-[768px]:pl-0 max-[768px]:text-center max-[768px]:w-full">
          <p className="text-xs mb-1 max-[425px]:text-xs text-gray-600 dark:text-gray-400">
            <span>{startTime}</span> - <span>{endTime}</span>
          </p>

          <h2 className="font-bold mb-1 text-3xl max-[425px]:text-2xl text-gray-800 dark:text-gray-200">
            {companyName}
          </h2>

          <h3 className="mb-2 text-lg font-semibold max-[425px]:text-md text-gray-700 dark:text-gray-300">
            {position}
          </h3>

          <ul className="list-disc list-inside mt-2 max-[768px]:text-left max-[768px]:list-none max-[768px]:space-y-2 text-gray-700 dark:text-gray-300">
            {descriptions.map((desc, index) => (
              <li key={index} className="mb-2 leading-relaxed text-md">
                {desc}
              </li>
            ))}
          </ul>
          <div className="mt-2 flex flex-wrap gap-2 w-full max-[768px]:justify-center">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

const Work = () => {
  const itemsRef = useRef([]);

  return (
    <section>
      <div>
        <h1 className="text-4xl font-bold mb-8 text-center max-[425px]:text-3xl text-gray-800 dark:text-gray-200 backdrop-blur-sm">
          Work Experience
        </h1>
        <div className="relative rounded-3xl bg-white dark:bg-gray-800 border-4 border-gray-300 dark:border-gray-600">
          <div className="absolute inset-0 rounded-lg p-[2px]">
            <div className="bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-700 dark:to-gray-900 rounded-lg"></div>
          </div>
          <div className="max-[768px]:border-none p-12 relative max-[425px]:px-6 max-[375px]:px-3">
            <div className="absolute left-[5rem] top-0 bottom-0 border-l-4 max-[768px]:border-none border-gray-300 dark:border-gray-600"></div>
            <div className="pl-10 space-y-10 max-[768px]:pl-0">
              {workExperiences.map((experience, index) => (
                <Company
                  key={index}
                  {...experience}
                  ref={(el) => (itemsRef.current[index] = el)}
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
