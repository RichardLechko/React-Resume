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
    <section id="skills" ref={ref} className="technical-skills-section">
      <div className="technical-skills-container">
        <header className="technical-skills-header">
          <h1 className="technical-skills-title">
            <span className="content-backdrop">Skills</span>
          </h1>
        </header>

        <Suspense
          fallback={<div className="loading-skills">Loading skills...</div>}
        >
          <div className="skills-list">
            {skillsData[0].skills.map(
              ({ iconName, name, description, hoverColor, darkHoverColor }) => {
                const IconComponent = icons[iconName];
                const [isHovered, setIsHovered] = useState(false);

                return (
                  <div
                    key={name}
                    className="skill-item"
                    style={{
                      "--hover-color": hoverColor,
                      "--dark-hover-color": darkHoverColor,
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <div className="skill-content">
                      <div className="skill-icon-container">
                        <span className="skill-icon">
                          <IconComponent />
                        </span>
                      </div>

                      <div className="skill-description-container">
                        <h2 className="skill-name">{name}</h2>
                        <p className="skill-description">{description}</p>
                      </div>
                    </div>

                    <div className="skill-divider" />
                    <div className="skill-divider" />
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
