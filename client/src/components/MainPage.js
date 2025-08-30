import React, { Suspense } from "react";

const Personal = React.lazy(() => import("./Personal.js"));
const TechnicalSkills = React.lazy(() => import("./TechnicalSkills.js"));
const Work = React.lazy(() => import("./Work.js"));
const Education = React.lazy(() => import("./Education.js"));
const Contact = React.lazy(() => import("./Contact.js"));
const Projects = React.lazy(() => import("./Widgets.js"));

const MainPage = ({
  personalRef,
  workRef,
  educationRef,
  skillsRef,
  contactRef,
  projectsRef,
}) => {
  return (
    <div className="container main-page-container">
      <Suspense fallback={<div>Loading...</div>}>
        <section id="personal" ref={personalRef}>
          <Personal />
        </section>
        <section id="projects" ref={projectsRef}>
          <Projects />
        </section>

        <section id="work" ref={workRef}>
          <Work />
        </section>

        <section id="education" ref={educationRef}>
          <Education />
        </section>

        <section id="skills" ref={skillsRef}>
          <TechnicalSkills />
        </section>

        <section id="contact" ref={contactRef}>
          <Contact />
        </section>
      </Suspense>
    </div>
  );
};

export default MainPage;
