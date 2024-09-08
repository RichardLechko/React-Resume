import React from "react";
import CourseSlider from "./Slider.js";

const coursework = [
  {
    title: "CSC 300 & 301: Data Structures I & II",
    description: [
      "Data Structures",
      "Java",
      "Recursion",
      "Efficiency",
      "Problem Solving",
    ],
  },
  {
    title: "CSC 373: Computer Systems I",
    description: [
      "Machine-level Programming",
      "Architecture",
      "Assembly Language",
      "C Programming",
      "Debuggers",
    ],
  },
  {
    title: "MAT 140 & 141: Discrete Math I & II",
    description: [
      "Combinatorics",
      "Probability",
      "Graph Theory",
      "Logic",
      "Set Theory",
    ],
  },
  {
    title: "IT 320: Content Management Systems",
    description: [
      "CMSs",
      "Enterprise Digital Media",
      "Web Content Publication",
      "Database-Driven Website",
      "Open-Source Software",
    ],
  },
  {
    title: "IT 339: Server-Side Web Development",
    description: [
      "Server-Side Web Application",
      "MVC Architectures",
      "API Development",
      "Code Libraries",
      "Comparative Analysis",
    ],
  },
  {
    title: "IT 240: Introduction to Databases",
    description: [
      "Desktop Databases",
      "ER Diagrams",
      "SQL Queries",
      "Forms and Reports",
      "Database Integration",
    ],
  },
  {
    title: "UXD 270: User-Centered Web Design",
    description: [
      "Interactive Design",
      "Information Navigation",
      "HTML & CSS",
      "Standards Compliance",
      "Dynamic Content",
    ],
  },
  {
    title: "IT 231: Web Development I",
    description: [
      "Framework-Based",
      "Interactive",
      "Dynamic",
      "Web Development",
      "Object-Based",
    ],
  },
  {
    title: "IT 263: Applied Networks and Security",
    description: [
      "Networking Technologies",
      "Security Measures",
      "Client/Server Configuration",
      "Network Administration",
      "Lab Component",
    ],
  },
  {
    title: "CSC 243: Intro to CS for Programmers",
    description: [
      "Python",
      "Recursion",
      "Programming",
      "Namespaces",
      "Webscraping",
    ],
  },
  {
    title: "IT 238: Interactive Web Scripting",
    description: [
      "jQuery",
      "DOM Manipulation",
      "JavaScript",
      "Advanced Scripting",
    ],
  },
  {
    title: "IT 223: Data Analysis",
    description: [
      "Statistics",
      "Data Science",
      "Sampling & Distributions",
      "Confidence Intervals",
      "Hypothesis Testing",
    ],
  },
];

const Coursework = () => {
  return (
    <div className="mt-0 mb-48">
      <CourseSlider courses={coursework} />
    </div>
  );
};

export default Coursework;
