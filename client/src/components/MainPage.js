import React, { useRef } from "react";
import Personal from "./Personal.js";
import TechnicalSkills from "./TechnicalSkills.js";
import NonTechnicalSkills from "./NonTechnicalSkills.js";
import Work from "./Work.js";
import Education from "./Education.js";
import Publications from "./Publications.js";
import Coursework from "./Coursework.js";

const MainPage = ({
  personalRef,
  workRef,
  educationRef,
  publicationsRef,
  skillsRef,
}) => {
  return (
    <div className="overflow-x-hidden relative">
      <section id="personal" ref={personalRef}>
        <Personal />
      </section>
      <section id="technical-skills" ref={skillsRef}>
        <TechnicalSkills />
      </section>
      <section id="non-technical-skills">
        <NonTechnicalSkills />
      </section>
      <section id="work" ref={workRef}>
        <Work />
      </section>
      <section id="education" ref={educationRef}>
        <Education />
      </section>
      <section id="relevantCoursework">
        <Coursework />
      </section>
      <section id="publications" ref={publicationsRef}>
        <Publications />
      </section>
    </div>
  );
};

export default MainPage;
