import React, { Suspense } from "react";
import skillsData from "./skillsData";

const TechnicalSkills = React.forwardRef(({ technicalSkillsRef }) => (
  <section
    className="flex flex-col mx-auto mb-24 w-[80%] max-[768px]:w-full"
    id="technical-skills"
    ref={technicalSkillsRef}
  >
    <div className="mt-16 mx-auto px-6 pt-16 flex flex-col items-center gap-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold max-[640px]:text-3xl max-[425px]:text-2xl">
          Technical Skills:
        </h1>
      </header>

      <Suspense
        fallback={
          <div className="text-center text-gray-500">Loading skills...</div>
        }
      >
        <div className="flex flex-wrap gap-6 justify-center max-[768px]:grid max-[768px]:grid-cols-2 max-[425px]:grid-cols-1">
          {skillsData[0].skills.map(({ icon, name, description }) => (
            <div
              key={name}
              className="flex items-center p-6 max-[768px]:p-4 max-[425px]:p-6 rounded-lg bg-[#2b2b2b] transition-colors duration-300 relative overflow-hidden border-2 border-transparent hover:bg-[#3c3c3c] group"
            >
              <div className="mr-4 p-3 rounded-xl bg-gray-700 text-white">
                {icon}
              </div>
              <div>
                <h4 className="text-xl max-[768px]:text-sm max-[425px]:text-lg font-bold text-gray-200 mb-2 max-[768px]:mb-4">
                  {name}
                </h4>
                <p className="text-gray-300 max-[768px]:text-xs max-[425px]:text-sm">
                  {description}
                </p>
              </div>
              <div className="absolute inset-0 rounded-lg border-2 border-transparent transition-all duration-300 opacity-0 group-hover:border-[#3b82f6] group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </Suspense>
    </div>
  </section>
));

export default TechnicalSkills;
