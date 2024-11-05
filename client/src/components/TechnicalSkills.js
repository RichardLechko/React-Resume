import React, { Suspense, useState } from "react";
import { DiReact, DiNodejs, DiGithubBadge } from "react-icons/di";
import { BiLogoRedux, BiLogoGit, BiLogoAws } from "react-icons/bi";
import { SiJest, SiTypescript, SiSupabase, SiPostgresql } from "react-icons/si";
import { FaFigma, FaSass } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";

const icons = {
  DiReact,
  DiNodejs,
  DiGithubBadge,
  BiLogoRedux,
  BiLogoGit,
  BiLogoAws,
  SiJest,
  SiTypescript,
  SiSupabase,
  SiPostgresql,
  FaFigma,
  RiNextjsLine,
  FaSass,
};

const skillsData = [
  {
    skills: [
      {
        iconName: "DiReact",
        name: "React",
        description: "JavaScript Library",
        hoverColor: "#61DAFB",
        darkHoverColor: "#1E90FF",
      },
      {
        iconName: "BiLogoRedux",
        name: "Redux",
        description: "State Management",
        hoverColor: "#764ABC",
        darkHoverColor: "#A052C6",
      },
      {
        iconName: "BiLogoGit",
        name: "Git",
        description: "Version Control",
        hoverColor: "#F05033",
        darkHoverColor: "#FF6347",
      },
      {
        iconName: "SiJest",
        name: "Jest",
        description: "Testing Framework",
        hoverColor: "#99424F",
        darkHoverColor: "#D3003F",
      },
      {
        iconName: "SiTypescript",
        name: "TypeScript",
        description: "JavaScript but better",
        hoverColor: "#3178C6",
        darkHoverColor: "#004B87",
      },
      {
        iconName: "FaFigma",
        name: "Figma",
        description: "Design Tool",
        hoverColor: "#F24E1E",
        darkHoverColor: "#D95B0D",
      },
      {
        iconName: "SiSupabase",
        name: "Supabase",
        description: "Backend tool",
        hoverColor: "#3ECF8E",
        darkHoverColor: "#2CA67B",
      },
      {
        iconName: "RiNextjsLine",
        name: "Next.js",
        description: "React Framework",
        hoverColor: "#0070f3",
        darkHoverColor: "#1a73e8",
      },
      {
        iconName: "SiPostgresql",
        name: "PostgreSQL",
        description: "Relational Database",
        hoverColor: "#336791",
        darkHoverColor: "#154360",
      },
      {
        iconName: "BiLogoAws",
        name: "AWS",
        description: "Cloud Services",
        hoverColor: "#FF9900",
        darkHoverColor: "#FFA500",
      },
      {
        iconName: "DiNodejs",
        name: "Node.js",
        description: "JavaScript Runtime",
        hoverColor: "#83CD29",
        darkHoverColor: "#5F7B1E",
      },

      {
        iconName: "FaSass",
        name: "Sass",
        description: "CSS Preprocessor",
        hoverColor: "#CC6699",
        darkHoverColor: "#C37D9D",
      },
    ],
  },
];

const TechnicalSkills = React.forwardRef((props, ref) => {
  return (
    <section id="technical-skills" ref={ref}>
      <div>
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-center mb-4 sm:text-5xl">
            Technical Skills
          </h1>
        </header>

        <Suspense
          fallback={<div className="text-center">Loading skills...</div>}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {skillsData[0].skills.map(
              ({ iconName, name, description, hoverColor, darkHoverColor }) => {
                const IconComponent = icons[iconName];
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
                          className="transition-colors duration-300 text-4xl"
                          style={{
                            color: isHovered
                              ? darkHoverColor || hoverColor
                              : "inherit",
                          }}
                        >
                          <IconComponent />
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
