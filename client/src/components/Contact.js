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
    <section id="contact" className="contact-section" lang={language}>
      <h1 className="contact-heading">
        <span className="content-backdrop">Get in touch</span>
      </h1>

      <div className="contact-info">
        <p className="location-text">Based in <span className="location-text-name">Chicago, Illinois</span></p>

        <div className="social-links">
          <a href="https://github.com/RichardLechko" target="_blank" rel="noopener noreferrer" className="social-item">
            <icons.LuGithub />
          </a>
          <a href="https://www.linkedin.com/in/richard-lechko/" target="_blank" rel="noopener noreferrer" className="social-item">
            <icons.FaLinkedinIn />
          </a>
          <a href="https://public-notes-page-react.vercel.app/" target="_blank" rel="noopener noreferrer" className="social-item">
            <icons.BiNotepad />
          </a>
          <a href="https://ko-fi.com/richardlechko" target="_blank" rel="noopener noreferrer" className="social-item">
            <icons.BiSolidCoffee />
          </a>
<a href="mailto:richardlechko@gmail.com" className="social-item">
  <icons.MdOutlineEmail />
</a>
        </div>
      </div>
    </section>
  );};

export default Contact;
