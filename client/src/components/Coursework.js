import React from "react";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const coursework = [
  {
    title: "Data Structures I & II",
    description: [
      "Data Structures",
      "Java",
      "Recursion",
      "Efficiency",
      "Problem Solving",
    ],
  },
  {
    title: "Computer Systems I",
    description: [
      "Machine-level Programming",
      "Architecture",
      "Assembly Language",
      "C Programming",
      "Debuggers",
    ],
  },
  {
    title: "Discrete Math I & II",
    description: [
      "Combinatorics",
      "Probability",
      "Graph Theory",
      "Logic",
      "Set Theory",
    ],
  },
  {
    title: "Content Management Systems",
    description: [
      "CMSs",
      "Enterprise Digital Media",
      "Web Content Publication",
      "Database-Driven Website",
      "Open-Source Software",
    ],
  },
  {
    title: "Server-Side Web Development",
    description: [
      "Server-Side Web Application",
      "MVC Architectures",
      "API Development",
      "Code Libraries",
      "Comparative Analysis",
    ],
  },
  {
    title: "Introduction to Databases",
    description: [
      "Desktop Databases",
      "ER Diagrams",
      "SQL Queries",
      "Forms and Reports",
      "Database Integration",
    ],
  },
  {
    title: "User-Centered Web Design",
    description: [
      "Interactive Design",
      "Information Navigation",
      "HTML & CSS",
      "Standards Compliance",
      "Dynamic Content",
    ],
  },
  {
    title: "Web Development I",
    description: [
      "Framework-Based",
      "Interactive",
      "Dynamic",
      "Web Development",
      "Object-Based",
    ],
  },
  {
    title: "Applied Networks and Security",
    description: [
      "Networking Technologies",
      "Security Measures",
      "Client/Server Configuration",
      "Network Administration",
      "Lab Component",
    ],
  },
  {
    title: "Intro to CS",
    description: [
      "Python",
      "Recursion",
      "Programming",
      "Namespaces",
      "Webscraping",
    ],
  },
  {
    title: "Interactive Web Scripting",
    description: [
      "jQuery",
      "DOM Manipulation",
      "JavaScript",
      "Advanced Scripting",
    ],
  },
  {
    title: "Data Analysis",
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <div className="pt-32 mb-36 mx-auto">
      <h1 className="text-4xl font-bold max-[640px]:text-3xl max-[425px]:text-2xl mb-8">
        Relevant Coursework:
      </h1>
      <Slider
        {...settings}
        className="max-w-[1000px] max-[1024px]:w-[600px] mx-auto max-[640px]:w-[300px]"
      >
        {coursework.map((course, index) => (
          <div key={index} className="flex justify-center ">
            <div className="p-6 m-auto slider-courses rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-center h-64">
              <h3 className="text-2xl font-bold mb-8 max-[768px]:text-xl max-[640px]:mb-4">
                {course.title}
              </h3>
              <ul className="list-disc list-inside mt-2 space-y-2 overflow-hidden">
                {course.description.map((item, i) => (
                  <li key={i} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="arrow prev-arrow absolute left-10 z-10 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md cursor-pointer hover:bg-gray-200 max-[640px]:left-1 max-[640px]:w-8 max-[640px]:h-8"
      style={{ top: "50%", transform: "translateY(-50%)" }}
      onClick={onClick}
    >
      <FiChevronLeft className="text-gray-600" />
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="arrow next-arrow absolute right-10 z-10 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md cursor-pointer hover:bg-gray-200 max-[640px]:right-1 max-[640px]:w-8 max-[640px]:h-8"
      style={{ top: "50%", transform: "translateY(-50%)" }}
      onClick={onClick}
    >
      <FiChevronRight className="text-gray-600" />
    </div>
  );
};

export default Coursework;
