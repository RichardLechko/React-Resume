import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import icons from "./icons.js";
import React, { useEffect } from "react";
import { useScroll } from "./ScrollToTop.js";
import { useTranslation } from "./language/LanguageContext";

const Contact = () => {
  const { scrollToTop } = useScroll();
  const { t, language } = useTranslation();

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  return (
    <main id="contact" className="contact-section" lang={language}>
      <header>
        <h1 className="contact-heading">
          <span className="content-backdrop">Get in touch</span>
        </h1>
      </header>

      <section className="contact-info">
        <address>
          <p className="location-text">
            Based in <strong className="location-text-name">Chicago, Illinois</strong>
          </p>
        </address>

        <nav className="social-links" aria-label="Social media links">
          <a 
            href="https://github.com/RichardLechko" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-item"
            aria-label="GitHub Profile"
          >
            <icons.LuGithub aria-hidden="true" />
          </a>
          <a 
            href="https://www.linkedin.com/in/richard-lechko/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-item"
            aria-label="LinkedIn Profile"
          >
            <icons.FaLinkedinIn aria-hidden="true" />
          </a>
          <a 
            href="https://public-notes-page-react.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-item"
            aria-label="Personal Blog"
          >
            <icons.BiNotepad aria-hidden="true" />
          </a>
          <a 
            href="https://ko-fi.com/richardlechko" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-item"
            aria-label="Support on Ko-fi"
          >
            <icons.BiSolidCoffee aria-hidden="true" />
          </a>
          <a 
            href="mailto:richardlechko@gmail.com" 
            className="social-item"
            aria-label="Send Email"
          >
            <icons.MdOutlineEmail aria-hidden="true" />
          </a>
        </nav>
      </section>
    </main>
  );
};

export default Contact;
