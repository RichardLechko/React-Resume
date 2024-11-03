import React, { useRef } from "react";

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
    logo: "/work-images/hendricksons-logo.png",
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
    logo: "/work-images/rl-it-firm-logo.png",
  },
  {
    companyName: "Mariano's",
    position: "Bakery Clerk",
    address: "Orland Park, IL",
    startTime: "05/2022",
    endTime: "11/2024",
    descriptions: [
      "Enhance communication skills through customer interactions while developing resilience by handling demanding situations positively and mastering various bakery tasks over time.",
    ],
    logo: "/work-images/marianos-logo.png",
  },
];

const Company = React.forwardRef(
  ({ companyName, position, startTime, endTime, descriptions, logo }, ref) => {
    return (
      <div
        ref={ref}
        className="flex items-start mb-8 relative max-[768px]:flex-col max-[768px]:items-center"
      >
        <img
          src={logo}
          alt={`${companyName} logo`}
          className="w-24 h-24 rounded-full border-2 border-gray-800 ml-[-3.3rem] z-20 max-[768px]:ml-0 max-[768px]:mb-4 max-[425px]:w-16 max-[425px]:h-16"
        />

        <div className="flex-grow pl-10 max-[768px]:pl-0 max-[768px]:text-center">
          <p className="text-sm mb-1 max-[425px]:text-xs text-gray-600 dark:text-gray-400 italic">
            <span className="font-semibold">{startTime}</span> -{" "}
            <span className="font-semibold">{endTime}</span>
          </p>
          <h2 className="text-3xl font-bold mb-1 max-[425px]:text-2xl text-gray-800 dark:text-gray-200">
            {companyName}
          </h2>
          <h3 className="text-lg font-semibold mb-2 max-[425px]:text-md text-gray-700 dark:text-gray-300">
            {position}
          </h3>
          <ul className="list-disc list-inside mt-2 max-[768px]:text-left max-[768px]:pl-0 text-gray-700 dark:text-gray-300">
            {descriptions.map(
              (desc, index) =>
                desc && (
                  <li
                    key={index}
                    className="mb-2 leading-relaxed max-[425px]:text-sm"
                  >
                    {desc}
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
    );
  }
);

const Work = () => {
  const itemsRef = useRef([]);

  return (
    <section className="pt-32">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-10 text-center max-[425px]:text-3xl text-gray-800 dark:text-gray-200">
          Work Experience:
        </h1>
        <div className="relative rounded-3xl bg-white dark:bg-gray-800 border-4 border-gray-300 dark:border-gray-600">
          <div className="absolute inset-0 rounded-lg p-[2px]">
            <div className="bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-700 dark:to-gray-900 rounded-lg"></div>
          </div>
          <div className="max-[768px]:border-none p-12 relative max-[425px]:px-6">
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
