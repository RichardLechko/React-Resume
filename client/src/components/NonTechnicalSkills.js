import React from "react";
import PropTypes from "prop-types";
import "../styles/nontechskills.css";

const NonTechnicalSkills = ({ nonTechnicalSkillsRef }) => {
  return (
    <section
      id="non-technical-skills"
      ref={nonTechnicalSkillsRef}
      className="non-technical-skills-container"
    >
      <h1 className="text-4xl font-bold max-[640px]:text-3xl max-[425px]:text-2xl mb-16">
        Non-Technical Skills:
      </h1>
      <div className="non-technical-skills-grid">
        {skillsData.map((skill, index) => (
          <SkillCard key={index} text={skill} />
        ))}
      </div>
    </section>
  );
};

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

const SkillCard = ({ text }) => {
  return (
    <div className="skill-card">
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
