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
        <section
          id="personal"
          ref={personalRef}
          className="pt-32 container mx-auto px-4 max-[1024px]:pt-20"
        >
          <Personal />
        </section>

        <section
          id="technical-skills"
          ref={skillsRef}
          className="min-h-screen pt-32 px-4 md:px-8 container mx-auto max-[1024px]:pt-20"
        >
          <TechnicalSkills />
        </section>

        <section
          id="work"
          ref={workRef}
          className="pt-32 container mx-auto px-4 max-[1024px]:pt-20"
        >
          <Work />
        </section>

        <section
          id="education"
          ref={educationRef}
          className="container flex flex-col mx-auto pt-32 max-[1024px]:pt-20"
        >
          <Education />
        </section>

        <section
          id="relevantCoursework"
          className="container flex flex-col mx-auto pt-32 max-[1024px]:pt-20"
        >
          <Coursework />
        </section>

        <section
          id="publications"
          ref={publicationsRef}
          className="container flex flex-col mx-auto pt-32 max-[1024px]:pt-20"
        >
          <Publications />
        </section>

        <section
          id="contact"
          ref={contactRef}
          className="container flex flex-col mx-auto pt-32 max-[1024px]:pt-20"
        >
          <Contact />
        </section>

        <section
          id="projects"
          ref={projectsRef}
          className="container flex flex-col mx-auto pt-32 max-[1024px]:pt-20"
        >
          <Projects />
        </section>
      </Suspense>
    </div>
  );
};

export default MainPage;
