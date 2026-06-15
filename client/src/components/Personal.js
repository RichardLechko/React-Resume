// client/src/components/Personal.js
import React, { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import { useTranslation } from "./language/LanguageContext";
import { renderHighlighted } from "../utils/highlight";
import icons from "./icons";
import { BiSolidCoffee } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import styles from "./Personal.module.css";

const SOCIAL_LINKS = [
    { href: "https://github.com/RichardLechko", Icon: icons.LuGithub, label: "GitHub Profile" },
    { href: "https://www.linkedin.com/in/richard-lechko/", Icon: icons.FaLinkedinIn, label: "LinkedIn Profile" },
    { href: "https://ko-fi.com/richardlechko", Icon: BiSolidCoffee, label: "Support on Ko-fi" },
];

const RESUME_LINKS = [
    { href: "/resumes/Richard_Lechko_Resume.docx", Icon: FaDownload, textKey: "downloadDOCX", download: true },
    { href: "/resumes/Richard_Lechko_Resume.pdf", Icon: FaDownload, textKey: "downloadPDF", download: true },
    {
        href: "https://docs.google.com/document/d/1qnp6U9z-i9OZwFpPzvO9RNwxxwZW9G8FNOcfpdUqMXA/edit?usp=sharing",
        Icon: AiOutlineEye,
        textKey: "view",
        download: false,
    },
];

const Personal = () => {
    const { t, language } = useTranslation();
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(
                now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
            );
        };

        updateTime();
        const timeInterval = setInterval(updateTime, 60000);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("fade-in");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll(
            ".personal-content, .personal-resume-content"
        );
        elements.forEach((el) => {
            el.classList.add("fade-in-hidden");
            observer.observe(el);
        });

        return () => {
            clearInterval(timeInterval);
            observer.disconnect();
        };
    }, []);

    return (
        <section id="personal" lang={language}>
            <div className={styles.personalWrapper}>
                <div className={`${styles.personalContent} personal-content`}>
                    <header className={`${styles.personalLeft} lang-${language}`}>
                        <h1>
                            <span className={`personal-header lang-${language}`}>
                                {t("personal.greeting")}
                            </span>
                        </h1>
                        <div className={styles.personalBasedInAndTime}>
                            <p>
                                <small>
                                    {t("personal.location")}{" "}
                                    <span className={styles.timeArrow}>→</span>
                                    <time className="time-display">
                                        <strong className="highlight-text">
                                            {currentTime} CST (UTC-06)
                                        </strong>
                                    </time>
                                </small>
                            </p>
                        </div>
                    </header>

                    <nav className="external-links" aria-label="Social Links">
                        <ul className={styles.linksContainer}>
                            {SOCIAL_LINKS.map(({ href, Icon, label }) => (
                                <li key={href} className={styles.linkWrapper}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                    >
                                        <Icon />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <article className={styles.personalInfoSpotify}>
                        <p className="content-backdrop">
                            {renderHighlighted(t("personal.tagline"))}
                        </p>
                    </article>
                </div>
            </div>

            <aside className={`${styles.personalResumeContent} personal-resume-content`}>
                <h2>{t("personal.resume.title")}</h2>
                <p>{t("personal.resume.subtitle")}</p>
                <div role="group" aria-label="Resume download options">
                    {RESUME_LINKS.map(({ href, Icon, textKey, download }) => (
                        <a
                            key={href}
                            href={href}
                            download={download}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>
                                <Icon />{" "}
                                <span>{t(`personal.resume.${textKey}`)}</span>
                            </span>
                        </a>
                    ))}
                </div>
            </aside>
        </section>
    );
};

export default Personal;
