// client/src/components/Contact.js
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import icons from "./icons.js";
import React, { useEffect } from "react";
import { useScroll } from "./ScrollToTop.js";
import { useTranslation } from "./language/LanguageContext";
import styles from "./Contact.module.css";

const Contact = () => {
  const { scrollToTop } = useScroll();
  const { t, language } = useTranslation();

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  return (
    <main id="contact" className="contact-section" lang={language}>
      <header>
        <h1 className={styles.contactHeading}>
          <span className="content-backdrop">Get in touch</span>
        </h1>
      </header>

      <section className={styles.contactInfo}>
        <address>
          <p className={styles.locationText}>
            Based in <strong className={styles.locationTextName}>Chicago, Illinois</strong>
          </p>
        </address>

        <nav className={styles.socialLinks} aria-label="Social media links">
          <a 
            href="https://github.com/RichardLechko" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.socialItem}
            aria-label="GitHub Profile"
          >
            <icons.LuGithub aria-hidden="true" />
          </a>
          <a 
            href="https://www.linkedin.com/in/richard-lechko/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.socialItem}
            aria-label="LinkedIn Profile"
          >
            <icons.FaLinkedinIn aria-hidden="true" />
          </a>
          <a 
            href="https://public-notes-page-react.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.socialItem}
            aria-label="Personal Blog"
          >
            <icons.BiNotepad aria-hidden="true" />
          </a>
          <a 
            href="https://ko-fi.com/richardlechko" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.socialItem}
            aria-label="Support on Ko-fi"
          >
            <icons.BiSolidCoffee aria-hidden="true" />
          </a>
          <a 
            href="mailto:richardlechko@gmail.com" 
            className={styles.socialItem}
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