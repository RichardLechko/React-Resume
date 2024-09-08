import React from "react";
import Personal from "./Personal.js";
import Skills from "./Skills.js";
import Work from "./Work.js";
import Education from "./Education.js";
import Publications from "./Publications.js";
import Coursework from "./Coursework.js";

const MainPage = ({
  personalRef,
  skillsRef,
  workRef,
  educationRef,
  publicationsRef,
}) => {
  return (
    <div>
      <section id="personal" ref={personalRef}>
        <Personal />
      </section>
      <section id="skills" ref={skillsRef}>
        <Skills />
      </section>
      <section id="work" ref={workRef}>
        <Work />
      </section>
      <section id="education" ref={educationRef}>
        <Education />
      </section>
      <section>
        <Coursework />
      </section>
      <section id="publications" ref={publicationsRef}>
        <Publications />
      </section>
    </div>
  );
};

export default MainPage;
