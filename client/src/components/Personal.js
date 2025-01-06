import React, { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import { useTranslation } from "./language/LanguageContext";
import icons from "./icons";
import { BiSolidCoffee } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";

const Personal = () => {
    const { t, language } = useTranslation();
    const [currentTime, setCurrentTime] = useState("");

    // Time update logic
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
            });
            setCurrentTime(timeString);
        };

        updateTime();
        const timeInterval = setInterval(updateTime, 60000);

        return () => clearInterval(timeInterval);
    }, []);

    return (
        <section id="personal" lang={language}>
        <div className="personal-wrapper">
        <div className="personal-content">
        <div className={"personal-left lang-${language}"}>
        <h1>
        <span className={`personal-header lang-${language}`}>
        {t("personal.greeting")}
        </span>
        
        </h1>

        <div className="personal-based-in-and-time">
        <p>
        {t("personal.location")} <span className="time-arrow">→</span>
        <span className="time-display">{currentTime} CST (UTC-06)</span>
        </p>
        </div>
        </div>
        <div className="external-links">
  <ul className="links-container">
    <li className="link-wrapper">
      <a
        href="https://github.com/RichardLechko"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="icon-link">
        <icons.LuGithub />
      </a>
    </li>
    <li className="link-wrapper">
      <a
        href="https://www.linkedin.com/in/richard-lechko/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="icon-link">
        <icons.FaLinkedinIn />
      </a>
    </li>
    <li className="link-wrapper">
      <a
        href="https://public-notes-page-react.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Blog"
        className="icon-link">
        <icons.BiNotepad />
      </a>
    </li>
    <li className="link-wrapper">
     <a 
        href="https://ko-fi.com/richardlechko"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ko-fi"
        className="icon-link">
        <icons.BiSolidCoffee />
      </a>
    </li>
  </ul>
</div>       <div className="personal-info-spotify">
        <p className="content-backdrop">
        {t("personal.description")
            .split(/web developer|веб-разработчик/)
            .map((part, index) => (
                <React.Fragment key={index}>
                {index > 0 && (
                    <span className="highlight-text">
                    {t("personal.highlightedProfession")}
                    </span>
                )}
                {part}
                </React.Fragment>
            ))}
        </p>
        </div>
        </div>
        </div>
        <div className="personal-resume-content">
        <h2>{t("personal.resume.title")}</h2>
        <p>{t("personal.resume.subtitle")}</p>
        <div>
        <a
        href="/resumes/Richard_Lechko_Resume.docx"
        download
        target="_blank"
        rel="noopener noreferrer"
        >
        <span>
        <FaDownload /> <span>{t("personal.resume.downloadDOCX")}</span>
        </span>
        </a>
        <a
        href="/resumes/Richard_Lechko_Resume.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        >
        <span>
        <FaDownload /> <span>{t("personal.resume.downloadPDF")}</span>
        </span>
        </a>
        <a
        href="https://docs.google.com/document/d/12ke-YdVWSkEmpOzMdeuCNOntx9kS8yK3oAMHtpThupI/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        >
        <AiOutlineEye /><span>{t("personal.resume.view")}</span>
        </a>
        </div>
        </div>
        </section>
    );
};

export default Personal;
