import React, { useRef, Suspense, useMemo } from "react";
import skillsData from "./skillsData";

const TechnicalSkills = ({ technicalSkillsRef }) => {
  return (
    <section
      className="container flex flex-col m-auto"
      id="technical-skills"
      ref={technicalSkillsRef}
    >
      <div className="mt-16 mx-auto justify-around px-6 py-0 pt-16 flex flex-wrap gap-6">
        <div className="w-full mb-8 text-center life-text smallText">
          <h1 className="text-4xl mb-4 font-bold max-[640px]:text-3xl max-[425px]:text-2xl">
            Technical Skills:
          </h1>
          <p className="text-xl max-[425px]:text-base text-center">
            I have given a rating from 1-10, categorizing my understanding and
            expertise of these skills. Hover over the image to see the rating!
          </p>
        </div>
        <Suspense
          fallback={<div className="text-center">Loading skills...</div>}
        >
          {skillsData.map((skillCategory) => (
            <SkillsCard
              key={skillCategory.head}
              head={skillCategory.head}
              skills={skillCategory.skills}
            />
          ))}
        </Suspense>
      </div>
    </section>
  );
};

const SkillsCard = React.memo(({ head, skills }) => {
  const averageRating = useMemo(() => {
    if (skills.length === 0) return 0; // Handle division by zero
    const totalRating = skills.reduce(
      (total, skill) => total + skill.rating,
      0
    );
    return (totalRating / skills.length).toFixed(1);
  }, [skills]);

  return (
    <div className="relative p-8 max-md:p-4 bg-gray-800 text-white rounded-xl shadow-lg hover:translate-y-[-15px] transition-transform duration-200 ease-in group">
      <h4 className="text-xl text-center font-bold mb-8">
        <span className="border-b-2 border-white">{head}</span>
      </h4>
      <div className="flex flex-col items-center">
        {skills.map((skill) => (
          <div
            key={`${skill.name}-${skill.rating}`}
            className="flex flex-col items-center mb-4"
          >
            <div
              className="w-20 h-20 flex items-center justify-center rounded-lg text-5xl max-md:w-16 max-md:h-16"
              style={{ backgroundColor: skill.bgColor }}
              aria-label={skill.name}
            >
              {skill.icon}
            </div>
            <div className="text-lg font-semibold mt-2">{skill.name}</div>
            <div className="text-sm text-white bg-gray-900 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
              {skill.rating}/10
            </div>
          </div>
        ))}
      </div>
      <div className="absolute rounded-xl inset-0 bg-gray-800 bg-opacity-75 flex text-center items-center justify-center text-xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p>Average Rating: {averageRating}/10</p>
      </div>
    </div>
  );
});

export default TechnicalSkills;
