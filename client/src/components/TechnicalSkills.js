// client/src/components/TechnicalSkills.js
import React, { Suspense } from "react";
import { DiReact, DiNodejs } from "react-icons/di";
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
  SiRedis,
  SiTailwindcss,
  SiPython,
  SiSharp,
  SiDotnet,
  SiExpress,
  SiFlask,
  SiMysql,
  SiDatadog,
  SiCaddy,
} from "react-icons/si";
import { FaFigma, FaSass, FaDatabase } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { useTranslation } from "./language/LanguageContext";
import { AiFillHtml5 } from "react-icons/ai";
import { FaGolang } from "react-icons/fa6";
import styles from "./TechnicalSkills.module.css";

const ICONS = {
  DiReact,
  DiNodejs,
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
  SiRedis,
  SiTailwindcss,
  SiPython,
  SiSharp,
  SiDotnet,
  SiExpress,
  SiFlask,
  SiMysql,
  SiDatadog,
  SiCaddy,
  FaDatabase,
};

const SKILL_GROUPS = [
  {
    categoryKey: "frontend",
    skills: [
      { iconName: "DiReact", name: "React" },
      { iconName: "RiNextjsLine", name: "Next.js" },
      { iconName: "SiJavascript", name: "JavaScript" },
      { iconName: "SiTypescript", name: "TypeScript" },
      { iconName: "AiFillHtml5", name: "HTML" },
      { iconName: "FaSass", name: "SCSS" },
      { iconName: "SiTailwindcss", name: "Tailwind" },
      { iconName: "SiAstro", name: "Astro" },
      { iconName: "BiLogoRedux", name: "Redux" },
    ],
  },
  {
    categoryKey: "backendDb",
    skills: [
      { iconName: "DiNodejs", name: "Node.js" },
      { iconName: "SiExpress", name: "Express" },
      { iconName: "FaGolang", name: "Go" },
      { iconName: "SiPython", name: "Python" },
      { iconName: "SiFlask", name: "Flask" },
      { iconName: "SiSharp", name: "C#" },
      { iconName: "SiDotnet", name: ".NET Core" },
      { iconName: "FaDatabase", name: "SQL" },
      { iconName: "SiPostgresql", name: "PostgreSQL" },
      { iconName: "SiMysql", name: "MySQL" },
      { iconName: "SiMongodb", name: "MongoDB" },
      { iconName: "SiSupabase", name: "Supabase" },
      { iconName: "SiRedis", name: "Redis" },
    ],
  },
  {
    categoryKey: "toolsDevops",
    skills: [
      { iconName: "BiLogoGit", name: "Git" },
      { iconName: "SiJest", name: "Jest" },
      { iconName: "SiCypress", name: "Cypress" },
      { iconName: "SiDocker", name: "Docker" },
      { iconName: "BiLogoAws", name: "AWS" },
      { iconName: "SiDatadog", name: "Datadog" },
      { iconName: "SiCaddy", name: "Caddy" },
      { iconName: "FaFigma", name: "Figma" },
    ],
  },
];

const TechnicalSkills = React.forwardRef((props, ref) => {
  const { t, language } = useTranslation();

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
            <span className="content-backdrop">{t("skills.title")}</span>
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
            {SKILL_GROUPS.map(({ categoryKey, skills }) => (
              <article key={categoryKey} className={styles.skillsCategory}>
                <header className={styles.categoryHeader}>
                  <h2 className={styles.categoryTitle}>
                    {t(`skills.categories.${categoryKey}`)}
                  </h2>
                </header>

                <div className={styles.skillsList} role="list">
                  {skills.map(({ iconName, name }) => {
                    const IconComponent = ICONS[iconName];
                    return (
                      <div
                        key={name}
                        className={styles.skillItem}
                        role="listitem"
                      >
                        <figure className={styles.skillIconContainer}>
                          {IconComponent && (
                            <IconComponent
                              aria-hidden="true"
                              className={styles.skillIcon}
                            />
                          )}
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
