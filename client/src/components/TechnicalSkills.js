// client/src/components/TechnicalSkills.js
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
  SiDocker,
  SiJavascript,
  SiAstro,
  SiRedis
} from "react-icons/si";
import { FaFigma, FaSass } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { useTranslation } from "./language/LanguageContext";
import { AiFillHtml5 } from "react-icons/ai";
import { FaGolang } from "react-icons/fa6";
import styles from "./TechnicalSkills.module.css";

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
    SiDocker,
    SiJavascript,
    SiAstro,
    FaGolang,
    SiRedis
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
        { iconName: "FaSass", name: "SCSS" },
        { iconName: "AiFillHtml5", name: "HTML" },
        { iconName: "SiCypress", name: "Cypress" },
        { iconName: "SiMongodb", name: "MongoDB" },
        { iconName: "SiDocker", name: "Docker" },
        { iconName: "SiAstro", name: "Astro" },
        { iconName: "SiJavascript", name: "JavaScript" },
        { iconName: "FaGolang", name: "Go" },
        { iconName: "SiRedis", name: "Redis" },
      ],
    },
  ];

  return (
    <main
      id="skills"
      ref={ref}
      className="technical-skills-section"
      lang={language}
    >
      <div className="technical-skills-container">
        <header className={styles.technicalSkillsHeader}>
          <h1 className={styles.technicalSkillsTitle}>
            <span className="content-backdrop">{t("skills.title-name")}</span>
          </h1>
        </header>

        <Suspense
          fallback={
            <p className={styles.loadingSkills} role="status" aria-live="polite">
              Loading skills...
            </p>
          }
        >
          <section className={styles.skillsList} role="list">
            {skillsData[0].skills.map(({ iconName, name }) => {
              const IconComponent = icons[iconName];
              return (
                <article 
                  key={name} 
                  className={styles.skillItem} 
                  role="listitem"
                >
                  <div className={styles.skillContent}>
                    <figure className={styles.skillIconContainer}>
                      <IconComponent 
                        aria-hidden="true" 
                        className={styles.skillIcon}
                      />
                    </figure>
                    <h2 className={styles.skillName}>{name}</h2>
                  </div>
                </article>
              );
            })}
          </section>
        </Suspense>
      </div>
    </main>
  );
});

export default TechnicalSkills;