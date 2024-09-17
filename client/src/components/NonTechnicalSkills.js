import React from "react";

const NonTechnicalSkills = ({ nonTechnicalSkillsRef }) => {
  return (
    <div>
      <section
        className="container pt-32 flex flex-col m-auto"
        id="non-technical-skills"
        ref={nonTechnicalSkillsRef}
      >
        <div className="justify-around px-6 flex flex-wrap gap-6">
          <h1 className="text-center text-4xl font-bold max-[640px]:text-3xl max-[425px]:text-2xl">
            Non-Technical Skills:
          </h1>
          <div className="w-full mx-auto flex flex-wrap gap-6 md:gap-8 justify-center">
            <NonTechSkills text={"Excel in rapidly changing environments"} />
            <NonTechSkills text={"Proficient technical writing"} />
            <NonTechSkills
              text={"Great team collaboration from various backgrounds"}
            />
            <NonTechSkills text={"A performance-oriented nature"} />
            <NonTechSkills text={"Creative conflict resolution"} />
            <NonTechSkills text={"Maintain an optimistic outlook"} />
            <NonTechSkills text={"Identify and focus on priorities"} />
            <NonTechSkills text={"Introduce new and creative solutions"} />
            <NonTechSkills text={"Communicate ideas effectively"} />
            <NonTechSkills text={"Proactively take on responsibilities"} />
          </div>
        </div>
      </section>
    </div>
  );
};

const NonTechSkills = ({ text }) => {
  return (
    <div className="p-4 border-solid border-black border-4 bg-[#333] text-white rounded-2xl font-bold text-base md:text-xl max-[768px]:text-center transition-transform duration-200 ease-in hover:translate-y-[-10px]">
      <h4>{text}</h4>
    </div>
  );
};

export default NonTechnicalSkills;
