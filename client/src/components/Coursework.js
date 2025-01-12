import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "./language/LanguageContext";

const Coursework = () => {
  const { t, language } = useTranslation();
  const [expandedCourse, setExpandedCourse] = useState(null);

  const coursework = [
    {
      title: t("coursework.coursework-list.data-structures.title"),
      description: [
        t("coursework.coursework-list.data-structures.description.0"),
        t("coursework.coursework-list.data-structures.description.1"),
        t("coursework.coursework-list.data-structures.description.2"),
        t("coursework.coursework-list.data-structures.description.3"),
        t("coursework.coursework-list.data-structures.description.4"),
      ],
      tags: [
        t("coursework.coursework-list.data-structures.tags.0"),
        t("coursework.coursework-list.data-structures.tags.1"),
        t("coursework.coursework-list.data-structures.tags.2"),
      ],
    },
    {
      title: t("coursework.coursework-list.computer-systems.title"),
      description: [
        t("coursework.coursework-list.computer-systems.description.0"),
        t("coursework.coursework-list.computer-systems.description.1"),
        t("coursework.coursework-list.computer-systems.description.2"),
        t("coursework.coursework-list.computer-systems.description.3"),
        t("coursework.coursework-list.computer-systems.description.4"),
      ],
      tags: [
        t("coursework.coursework-list.computer-systems.tags.0"),
        t("coursework.coursework-list.computer-systems.tags.1"),
        t("coursework.coursework-list.computer-systems.tags.2"),
      ],
    },
    {
      title: t("coursework.coursework-list.server-side-web-dev.title"),
      description: [
        t("coursework.coursework-list.server-side-web-dev.description.0"),
        t("coursework.coursework-list.server-side-web-dev.description.1"),
        t("coursework.coursework-list.server-side-web-dev.description.2"),
        t("coursework.coursework-list.server-side-web-dev.description.3"),
        t("coursework.coursework-list.server-side-web-dev.description.4"),
      ],
      tags: [
        t("coursework.coursework-list.server-side-web-dev.tags.0"),
        t("coursework.coursework-list.server-side-web-dev.tags.1"),
        t("coursework.coursework-list.server-side-web-dev.tags.2"),
      ],
    }
  ];

const toggleCourse = (index) => {
    setExpandedCourse(expandedCourse === index ? null : index);
  };

 useEffect(() => {
    

    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    const cards = document.querySelectorAll('.coursework-card-wrapper');
    cards.forEach((card, index) => {
      card.classList.add('fade-in-hidden');
      card.style.animationDelay = `${index * 0.1}s`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="coursework-container" lang={language}>
      <header className="coursework-header">
        <h1 className="coursework-title">
          <span className="content-backdrop">{t("coursework.title-name")}</span>
        </h1>
      </header>
      
      <section className="coursework-cards">
        {coursework.map((course, index) => (
          <div className="coursework-card-wrapper" key={index}>
            <article 
              className={`coursework-card ${expandedCourse === index ? 'active' : ''}`}
              onClick={() => toggleCourse(index)}
            >
              <header className="coursework-card-header">
                <h2 className="coursework-card-title">{course.title}</h2>
                <span className="expand-indicator"></span>
              </header>
              
              <div className={`coursework-card-content ${expandedCourse === index ? 'expanded' : ''}`}>
                <ul className="coursework-list">
                  {course.description.map((item, i) => (
                    <li key={i} className="coursework-item">{item}</li>
                  ))}
                </ul>
                
                <footer className="coursework-tags">
                  {course.tags.map((tag, idx) => (
                    <span key={idx} className="coursework-tag">{tag}</span>
                  ))}
                </footer>
              </div>
            </article>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Coursework;
