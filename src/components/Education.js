import React from "react";
import Slider from "./Slider.js";

const courseworkItems = [
  {
    title: "CSC 300 & 301: Data Structures I & II",
    details: [
      "Data Structures",
      "Java",
      "Recursion",
      "Efficiency",
      "Problem Solving",
    ],
  },
  {
    title: "CSC 373: Computer Systems I",
    details: [
      "Machine-level Programming",
      "Architecture",
      "Assembly Language",
      "C Programming",
      "Debuggers",
    ],
  },
  {
    title: "MAT 140 & 141: Discrete Math I & II",
    details: [
      "Combinatorics",
      "Probability",
      "Graph Theory",
      "Logic",
      "Set Theory",
    ],
  },
  {
    title: "IT 320: Content Management Systems",
    details: [
      "CMSs",
      "Enterprise Digital Media",
      "Web Content Publication",
      "Database-Driven Website",
      "Open-Source Software",
    ],
  },
  {
    title: "IT 339: Server-Side Web Development",
    details: [
      "Server-Side Web Application",
      "MVC Architectures",
      "API Development",
      "Code Libraries",
      "Comparative Analysis",
    ],
  },
  {
    title: "IT 240: Introduction to Databases",
    details: [
      "Desktop Databases",
      "ER Diagrams",
      "SQL Queries",
      "Forms and Reports",
      "Database Integration",
    ],
  },
  {
    title: "UXD 270: User-Centered Web Design",
    details: [
      "Interactive Design",
      "Information Navigation",
      "HTML & CSS",
      "Standards Compliance",
      "Dynamic Content",
    ],
  },
  {
    title: "IT 231: Web Development I",
    details: [
      "Framework-Based",
      "Interactive",
      "Dynamic",
      "Web Development",
      "Object-Based",
    ],
  },
  {
    title: "IT 263: Applied Networks and Security",
    details: [
      "Networking Technologies",
      "Security Measures",
      "Client/Server Configuration",
      "Network Administration",
      "Lab Component",
    ],
  },
  {
    title: "CSC 243: Intro to CS for Programmers",
    details: [
      "Python",
      "Recursion",
      "Programming",
      "Namespaces",
      "Webscraping",
    ],
  },
  {
    title: "IT 238: Interactive Web Scripting",
    details: ["jQuery", "DOM Manipulation", "JavaScript", "Advanced Scripting"],
  },
  {
    title: "IT 223: Data Analysis",
    details: [
      "Statistics",
      "Data Science",
      "Sampling & Distributions",
      "Confidence Intervals",
      "Hypothesis Testing",
    ],
  },
];

const Education = () => {
  return (
    <div id="education" className="px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Education Section */}
      <section className="container mx-auto flex flex-col items-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl mt-16 mb-8 font-bold text-center">
          Education
        </h1>
        <p className="text-center text-lg sm:text-xl max-w-4xl">
          Currently a full-time student at{" "}
          <a
            className="underline font-bold"
            href="https://www.richardlechko.com"
          >
            <span className="text-red-600">DePaul</span>{" "}
            <span className="text-blue-600">University</span>
          </a>
          , pursuing a Bachelor's in Science in Information Technology, with a
          concentration in Web Development.
        </p>
        <p className="text-center text-lg sm:text-xl mt-4">
          Major GPA: 3.5/4.0
        </p>
        <p className="text-center text-lg sm:text-xl mt-4 max-w-2xl">
          <span className="font-bold">Organizations:</span>
          <ul className="list-disc list-inside">
            <li>
              Member of{" "}
              <span className="underline">DePaul Computer Science Society</span>
            </li>
            <li>
              Member of <span className="underline">DePaul Math Club</span>
            </li>
            <li>
              Member of <span className="underline">DePaul Chess Club</span>
            </li>
            <li>
              Member of{" "}
              <span className="underline">
                DePaul User Experience Association
              </span>
            </li>
          </ul>
        </p>
        <p className="text-center text-lg sm:text-xl mt-4">
          2-time Dean's List student.
        </p>
        <p className="text-center text-xl sm:text-2xl mt-12 mb-8">
          <span className="underline">Enrollment: 9/2022 - 6/2026</span>
        </p>
      </section>

      {/* Coursework Section */}
      <section className="container mx-auto flex flex-col items-center mb-12 px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl mb-8 font-bold text-center">
          Relevant Coursework
        </h1>
        <div className="w-full max-w-full lg:max-w-4xl">
          <Slider items={courseworkItems} />
        </div>
      </section>
    </div>
  );
};

export default Education;
