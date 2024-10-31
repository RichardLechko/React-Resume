import React, { Suspense } from "react";

const Personal = React.lazy(() => import("./Personal.js"));
const TechnicalSkills = React.lazy(() => import("./TechnicalSkills.js"));
const Work = React.lazy(() => import("./Work.js"));
const Education = React.lazy(() => import("./Education.js"));
const Publications = React.lazy(() => import("./Publications.js"));
const Coursework = React.lazy(() => import("./Coursework.js"));
const Contact = React.lazy(() => import("./Contact.js"));
const Projects = React.lazy(() => import("./Widgets.js"));

const MainPage = ({
  personalRef,
  workRef,
  educationRef,
  publicationsRef,
  skillsRef,
  contactRef,
  projectsRef,
}) => {
  return (
    <div className="overflow-x-hidden relative">
      <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
        <section id="personal" ref={personalRef}>
          <Personal />
        </section>

        <section id="technical-skills" ref={skillsRef}>
          <TechnicalSkills />
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

        <section id="contact" ref={contactRef}>
          <Contact />
        </section>

        <section id="projects" ref={projectsRef}>
          <Projects />
        </section>
      </Suspense>
    </div>
  );
};

export default MainPage;
