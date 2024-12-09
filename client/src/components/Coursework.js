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
    centerMode: true,
    centerPadding: "0px",
    variableWidth: false,
    prevArrow: <SamplePrevArrow onClick={() => setIsUserInteracting(true)} />,
    nextArrow: <SampleNextArrow onClick={() => setIsUserInteracting(true)} />,
    beforeChange: () => setIsUserInteracting(true),
    afterChange: () => setIsUserInteracting(false),
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
    <div className="coursework-container">
      <h1 className="coursework-title">
        <span className="content-backdrop">Coursework</span>
      </h1>
      <Slider
        {...settings}
        ref={sliderRef}
        className="coursework-slider content-backdrop"
      >
        {coursework.map((course, index) => (
          <div key={index} className="coursework-slide">
            <div className="coursework-card">
              <h2 className="coursework-card-title">{course.title}</h2>
              <ul className="coursework-card-description">
                {course.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="coursework-info-tags">
                {course.tags.map((tag, idx) => (
                  <span key={idx} className="coursework-tag">
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
    className="arrow prev-arrow"
    onClick={onClick}
    aria-label="Previous Slide"
  >
    <FiChevronLeft className="arrow-icon" />
  </button>
);

const SampleNextArrow = ({ onClick }) => (
  <button
    className="arrow next-arrow"
    onClick={onClick}
    aria-label="Next Slide"
  >
    <FiChevronRight className="arrow-icon" />
  </button>
);

export default Coursework;
