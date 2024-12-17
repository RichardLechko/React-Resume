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
        {
          iconName: "DiReact",
          name: "React",
          description: t("skills.skills-list.react.description"),
        },
        {
          iconName: "BiLogoRedux",
          name: "Redux",
          description: t("skills.skills-list.redux.description"),
        },
        {
          iconName: "BiLogoGit",
          name: "Git",
          description: t("skills.skills-list.git.description"),
        },
        {
          iconName: "SiJest",
          name: "Jest",
          description: t("skills.skills-list.jest.description"),
        },
        {
          iconName: "SiTypescript",
          name: "TypeScript",
          description: t("skills.skills-list.typescript.description"),
        },
        {
          iconName: "FaFigma",
          name: "Figma",
          description: t("skills.skills-list.figma.description"),
        },
        {
          iconName: "SiSupabase",
          name: "Supabase",
          description: t("skills.skills-list.supabase.description"),
        },
        {
          iconName: "RiNextjsLine",
          name: "Next.js",
          description: t("skills.skills-list.nextjs.description"),
        },
        {
          iconName: "SiPostgresql",
          name: "PostgreSQL",
          description: t("skills.skills-list.postgresql.description"),
        },
        {
          iconName: "BiLogoAws",
          name: "AWS",
          description: t("skills.skills-list.aws.description"),
        },
        {
          iconName: "DiNodejs",
          name: "Node.js",
          description: t("skills.skills-list.nodejs.description"),
        },

        {
          iconName: "FaSass",
          name: "Sass",
          description: t("skills.skills-list.sass.description"),
        },
        {
          iconName: "AiFillHtml5",
          name: "HTML",
          description: t("skills.skills-list.html.description"),
        },
        {
          iconName: "SiCypress",
          name: "Cypress",
          description: t("skills.skills-list.cypress.description"),
        },
        {
          iconName: "SiMongodb",
          name: "MongoDB",
          description: t("skills.skills-list.mongodb.description"),
        },
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
            {skillsData[0].skills.map(({ iconName, name, description }) => {
              const IconComponent = icons[iconName];
              return (
                <div key={name} className="skill-item">
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
