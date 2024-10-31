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
          className="w-24 h-24 rounded-full border-2 border-[#e2e8f0] ml-[-3.3rem] z-20 max-[768px]:ml-0 max-[768px]:mb-4 max-[425px]:w-16 max-[425px]:h-16" // Center image on small screens
        />

        <div className="flex-grow pl-10 max-[768px]:pl-0 max-[768px]:text-center">
          <p className="text-gray-500 text-sm mb-1 max-[425px]:text-xs">
            <span className="font-semibold">{startTime}</span> -{" "}
            <span className="font-semibold">{endTime}</span>
          </p>
          <h2 className="text-3xl font-bold text-[#e2e8f0] mb-1 max-[425px]:text-2xl">
            {companyName}
          </h2>
          <h3 className="text-lg font-semibold text-gray-400 mb-2 max-[425px]:text-md">
            {position}
          </h3>
          <ul className="list-disc list-inside mt-2 text-gray-200 max-[768px]:text-left max-[768px]:pl-0">
            {descriptions.map(
              (desc, index) =>
                desc && (
                  <li
                    key={index}
                    className="text-gray-200 mb-2 leading-relaxed max-[425px]:text-sm"
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
        <h1 className="text-4xl font-bold text-[#e2e8f0] mb-10 text-center max-[425px]:text-3xl">
          Work Experience:
        </h1>
        {/* Outer wrapper for Company components */}
        <div className="relative border-4 border-transparent rounded-lg">
          <div className="absolute inset-0 border-2 border-[#3b3b3b] rounded-lg p-[2px]">
            <div className="border-4 border-transparent bg-gradient-to-r from-[#e2e8f0] to-[#3b3b3b] rounded-lg"></div>
          </div>
          <div className="border-2 border-[#e2e8f0] max-[768px]:border-none rounded-lg p-12 relative max-[425px]:px-6">
            <div className="absolute left-[5.5rem] top-0 bottom-0 border-l-2 max-[768px]:border-none border-[#e2e8f0]"></div>
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
