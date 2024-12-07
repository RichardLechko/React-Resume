import React, { useEffect, useRef, useState } from "react";
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
    tags: ["Algorithm Design", "Complexity Analysis", "Data Organization"],
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
    tags: ["Low-Level Programming", "Systems Engineering", "Debugging Tools"],
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
    tags: [
      "Mathematical Proofs",
      "Combinatorial Optimization",
      "Logic Puzzles",
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
    tags: [
      "Web Content Management",
      "Digital Publishing",
      "System Integration",
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
    tags: [
      "Back-End Development",
      "Web Application Architecture",
      "API Design",
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
    tags: ["Database Management", "SQL Programming", "Data Modeling"],
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
    tags: ["UX/UI Design", "Responsive Design", "Web Accessibility"],
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
    tags: ["Web Frameworks", "Front-End Development", "Dynamic Interfaces"],
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
    tags: ["Network Security", "IP Protocols", "Cyber Defense"],
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
    tags: ["Programming Concepts", "Scripting Languages", "Automation"],
  },
  {
    title: "Interactive Web Scripting",
    description: [
      "jQuery",
      "DOM Manipulation",
      "JavaScript",
      "Advanced Scripting",
    ],
    tags: ["Front-End Scripting", "DOM Interaction", "Web Animation"],
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
    tags: [
      "Quantitative Analysis",
      "Statistical Methods",
      "Predictive Modeling",
    ],
  },
];

const Coursework = () => {
  const sliderRef = useRef(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    prevArrow: <SamplePrevArrow onClick={() => setIsUserInteracting(true)} />,
    nextArrow: <SampleNextArrow onClick={() => setIsUserInteracting(true)} />,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isUserInteracting && sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isUserInteracting]);

  return (
    <div className="px-2 max-[375px]:p-0">
      <h1 className="text-4xl font-bold text-center mb-4 sm:text-5xl backdrop-blur-sm">
        Relevant Coursework
      </h1>
      <Slider
        {...settings}
        ref={sliderRef}
        className="mx-auto max-w-3xl max-[1024px]:w-[600px] max-[768px]:w-[500px] max-[640px]:w-[340px] max-[425px]:w-[250px]"
        beforeChange={() => setIsUserInteracting(true)}
        afterChange={() => setIsUserInteracting(false)}
      >
        {coursework.map((course, index) => (
          <div key={index} className="flex justify-center">
            <div
              className="p-4 m-auto slider-courses rounded-xl  shadow-lg bg-[#f2f1ef] text-center dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-700 max-[375px]:p-3 max-[375px]:h-[260px] flex flex-col items-center justify-center"
              style={{ height: "300px" }}
            >
              <h2 className="text-lg font-bold mb-4 max-[375px]:text-[16px] max-[335px]:text-[15px] ">
                {course.title}
              </h2>
              <ul className="list-disc list-inside mt-4 space-y-2 overflow-hidden flex flex-col  items-center justify-center max-[375px]:text-sm max-[335px]:text-xs">
                {course.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              {/* Horizontal Tagline */}
              <div className="course-info-tags mt-4 flex justify-center gap-4 text-sm">
                {course.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-300 text-gray-800 py-1 px-4 rounded-full dark:bg-gray-600 dark:text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SamplePrevArrow = ({ onClick }) => (
  <button
    className="arrow prev-arrow absolute left-10 z-10 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md cursor-pointer hover:bg-gray-200 max-[640px]:left-1 max-[640px]:w-8 max-[640px]:h-8 min-[320px]:w-6 min-[320px]:h-6 dark:bg-gray-800 dark:hover:bg-gray-600"
    style={{ top: "50%", transform: "translateY(-50%)" }}
    onClick={onClick}
    aria-label="Previous Slide"
  >
    <FiChevronLeft className="max-[425px]:w-4 max-[425px]:h-4" />
  </button>
);

const SampleNextArrow = ({ onClick }) => (
  <button
    className="arrow next-arrow absolute right-10 z-10 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md cursor-pointer hover:bg-gray-200 max-[640px]:right-1 max-[640px]:w-8 max-[640px]:h-8 min-[320px]:w-6 min-[320px]:h-6 dark:bg-gray-800 dark:hover:bg-gray-600"
    style={{ top: "50%", transform: "translateY(-50%)" }}
    onClick={onClick}
    aria-label="Next Slide"
  >
    <FiChevronRight className="max-[425px]:w-4 max-[425px]:h-4" />
  </button>
);

export default Coursework;
