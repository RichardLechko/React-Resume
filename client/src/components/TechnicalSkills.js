import React, { Suspense, useState } from "react";
import skillsData from "./skillsData";

const TechnicalSkills = React.forwardRef((props, ref) => {
  return (
    <section
      className="min-h-screen py-16 px-4 md:px-8"
      id="technical-skills"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-center mb-4 sm:text-5xl">
            Technical Skills
          </h1>
        </header>

        <Suspense
          fallback={<div className="text-center">Loading skills...</div>}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {skillsData[0].skills.map(
              ({ icon, name, description, hoverColor, darkHoverColor }) => {
                const [isHovered, setIsHovered] = useState(false);

                return (
                  <div
                    key={name}
                    className="relative group rounded-xl bg-[#f2f1ef] dark:bg-[#2b2b2b] p-6 transition-all duration-300 hover:scale-102 shadow-md hover:shadow-lg"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`flex-shrink-0 p-4 transition-transform duration-300 ${
                          isHovered ? "scale-125" : "scale-100"
                        }`}
                      >
                        <span
                          className="transition-colors duration-300"
                          style={{
                            color: isHovered
                              ? darkHoverColor || hoverColor
                              : "inherit",
                          }}
                        >
                          {icon}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#4c8bf8] truncate">
                          {name}
                        </h2>
                        <p className="text-sm opacity-90 transition-opacity duration-300 group-hover:opacity-80 line-clamp-3">
                          {description}
                        </p>
                      </div>
                    </div>

                    <div className="absolute inset-0 rounded-xl border-2 border-transparent transition-all duration-300 opacity-0 group-hover:border-[#4c8bf8] group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#4c8bf8] opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl" />
                  </div>
                );
              }
            )}
          </div>
        </Suspense>
      </div>
    </section>
  );
});

export default TechnicalSkills;
