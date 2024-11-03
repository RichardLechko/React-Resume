import React, { Suspense } from "react";
import skillsData from "./skillsData";

const TechnicalSkills = React.forwardRef((props, ref) => (
  <section
    className="flex flex-col mx-auto mb-24 w-[80%] max-[768px]:w-full"
    id="technical-skills"
    ref={ref}
  >
    <div className="mt-16 mx-auto px-6 pt-16 flex flex-col items-center gap-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold max-[640px]:text-3xl max-[425px]:text-2xl">
          Technical Skills:
        </h1>
      </header>

      <Suspense fallback={<div className="text-center">Loading skills...</div>}>
        <div className="flex flex-wrap gap-8 justify-center max-[768px]:grid max-[768px]:grid-cols-2 max-[425px]:grid-cols-1">
          {skillsData[0].skills.map(({ icon, name, description }) => (
            <div
              key={name}
              className="flex items-center p-6 max-[768px]:p-4 max-[425px]:p-4 rounded-xl bg-[#f2f1ef] dark:bg-[#2b2b2b] transition-transform duration-300 transform hover:scale-105 relative overflow-hidden border-2 border-transparent group shadow-md"
            >
              <div className="mr-6 p-4 rounded-xl bg-stone-300 dark:bg-gray-700 transition-transform duration-300 transform group-hover:rotate-12">
                {icon}
              </div>
              <div>
                <h2 className="text-2xl max-[768px]:text-lg max-[425px]:text-xl font-bold mb-2 max-[768px]:mb-1 transition-colors duration-300 group-hover:text-[#4c8bf8]">
                  {name}
                </h2>
                <p className=" max-[768px]:text-xs max-[425px]:text-xs opacity-90 transition-opacity duration-300 group-hover:opacity-80">
                  {description}
                </p>
              </div>
              <div className="absolute inset-0 rounded-xl border-2 border-transparent transition-all duration-300 opacity-0 group-hover:border-[#4c8bf8] group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#4c8bf8] opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg" />
            </div>
          ))}
        </div>
      </Suspense>
    </div>
  </section>
));

export default TechnicalSkills;
