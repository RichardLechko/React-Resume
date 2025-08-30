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
      category: "Frontend",
      skills: [
        { iconName: "DiReact", name: "React" },
        { iconName: "RiNextjsLine", name: "Next.js" },
        { iconName: "SiJavascript", name: "JavaScript" },
        { iconName: "SiTypescript", name: "TypeScript" },
        { iconName: "AiFillHtml5", name: "HTML" },
        { iconName: "FaSass", name: "SCSS" },
        { iconName: "SiAstro", name: "Astro" },
        { iconName: "BiLogoRedux", name: "Redux" }
      ]
    },
    {
      category: "Backend & Database",
      skills: [
        { iconName: "DiNodejs", name: "Node.js" },
        { iconName: "FaGolang", name: "Go" },
        { iconName: "SiPostgresql", name: "PostgreSQL" },
        { iconName: "SiMongodb", name: "MongoDB" },
        { iconName: "SiSupabase", name: "Supabase" },
        { iconName: "SiRedis", name: "Redis" }
      ]
    },
    {
      category: "Tools & DevOps",
      skills: [
        { iconName: "BiLogoGit", name: "Git" },
        { iconName: "SiJest", name: "Jest" },
        { iconName: "SiCypress", name: "Cypress" },
        { iconName: "SiDocker", name: "Docker" },
        { iconName: "BiLogoAws", name: "AWS" },
        { iconName: "FaFigma", name: "Figma" }
      ]
    }
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
          <section className={styles.skillsContainer}>
            {skillsData.map(({ category, skills }) => (
              <article key={category} className={styles.skillsCategory}>
                <header className={styles.categoryHeader}>
                  <h2 className={styles.categoryTitle}>{category}</h2>
                </header>
                
                <div className={styles.skillsList} role="list">
                  {skills.map(({ iconName, name }) => {
                    const IconComponent = icons[iconName];
                    return (
                      <div key={name} className={styles.skillItem} role="listitem">
                        <figure className={styles.skillIconContainer}>
                          <IconComponent 
                            aria-hidden="true" 
                            className={styles.skillIcon}
                          />
                        </figure>
                        <h3 className={styles.skillName}>{name}</h3>
                      </div>
                    );
                  })}
                </div>
              </article>
            ))}
          </section>
        </Suspense>
      </div>
    </main>
  );
});

export default TechnicalSkills;