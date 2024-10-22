// src/components/NonTechnicalSkills.js

import React from "react";
import PropTypes from "prop-types";

const NonTechnicalSkills = ({ nonTechnicalSkillsRef }) => {
  return (
    <section
      className="container pt-32 flex flex-col m-auto"
      id="non-technical-skills"
      ref={nonTechnicalSkillsRef}
    >
      <h1 className="text-center text-4xl font-bold max-[640px]:text-3xl max-[425px]:text-2xl mb-6">
        Non-Technical Skills:
      </h1>
      <div className="w-full mx-auto flex flex-wrap gap-6 md:gap-8 justify-center">
        {skillsData.map((skill, index) => (
          <SkillCard key={index} text={skill} />
        ))}
      </div>
    </section>
  );
};

// Define your non-technical skills as an array
const skillsData = [
  "Excel in rapidly changing environments",
  "Proficient technical writing",
  "Great team collaboration from various backgrounds",
  "A performance-oriented nature",
  "Creative conflict resolution",
  "Maintain an optimistic outlook",
  "Identify and focus on priorities",
  "Introduce new and creative solutions",
  "Communicate ideas effectively",
  "Proactively take on responsibilities",
];

// Rename the inner component for clarity
const SkillCard = ({ text }) => {
  return (
    <div className="p-4 border-solid border-black border-4 bg-[#333] text-white rounded-2xl font-bold text-base md:text-xl max-[768px]:text-center transition-transform duration-200 ease-in hover:translate-y-[-10px]">
      <h4>{text}</h4>
    </div>
  );
};

SkillCard.propTypes = {
  text: PropTypes.string.isRequired,
};

NonTechnicalSkills.propTypes = {
  nonTechnicalSkillsRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
};

export default NonTechnicalSkills;
