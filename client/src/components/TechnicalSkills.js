import React, { Suspense } from "react";
import { DiReact, DiNodejs, DiGithubBadge } from "react-icons/di";
import { BiLogoRedux, BiLogoGit, BiLogoAws } from "react-icons/bi";
import {
  SiJest,
  SiTypescript,
  SiSupabase,
  SiPostgresql,
  SiCypress,
  SiMongodb,
} from "react-icons/si";
import { FaFigma, FaSass } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { useTranslation } from "./language/LanguageContext";
import { AiFillHtml5 } from "react-icons/ai";

const TechnicalSkills = React.forwardRef((props, ref) => {
  const { t, language } = useTranslation();
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
    AiFillHtml5,
    SiCypress,
    SiMongodb,
  };

  const skillsData = [
    {
      skills: [
        { iconName: "DiReact", name: "React" },
        { iconName: "BiLogoRedux", name: "Redux" },
        { iconName: "BiLogoGit", name: "Git" },
        { iconName: "SiJest", name: "Jest" },
        { iconName: "SiTypescript", name: "TypeScript" },
        { iconName: "FaFigma", name: "Figma" },
        { iconName: "SiSupabase", name: "Supabase" },
        { iconName: "RiNextjsLine", name: "Next.js" },
        { iconName: "SiPostgresql", name: "PostgreSQL" },
        { iconName: "BiLogoAws", name: "AWS" },
        { iconName: "DiNodejs", name: "Node.js" },
        { iconName: "FaSass", name: "Sass" },
        { iconName: "AiFillHtml5", name: "HTML" },
        { iconName: "SiCypress", name: "Cypress" },
        { iconName: "SiMongodb", name: "MongoDB" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="technical-skills-section"
      lang={language}
    >
      <div className="technical-skills-container">
        <header className="technical-skills-header">
          <h1 className="technical-skills-title">
            <span className="content-backdrop">{t("skills.title-name")}</span>
          </h1>
        </header>

        <Suspense
          fallback={<div className="loading-skills">Loading skills...</div>}
        >
          <div className="skills-list">
            {skillsData[0].skills.map(({ iconName, name }) => {
              const IconComponent = icons[iconName];
              return (
                <div key={name} className="skill-item">
                  <div className="skill-content">
                    <div className="skill-icon-container">
                      <span className="skill-icon">
                        <IconComponent />
                      </span>
                    </div>
                    <h2 className="skill-name">{name}</h2>
                  </div>
                </div>
              );
            })}
          </div>
        </Suspense>
      </div>
    </section>
  );
});

export default TechnicalSkills;
