import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "./LanguageContext";
import ReactCountryFlag from "react-country-flag";

const LanguageSelector = () => {
  const { language, setLanguage, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: "en", name: "English", flag: "US" },
    { code: "ru", name: "Русский", flag: "RU" },
  ];

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLanguage = languages.find((lang) => lang.code === language);

  return (
    <div className="language-selector" ref={dropdownRef}>
      <button
        className="language-selector-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="language-selector-content">
          <ReactCountryFlag
            countryCode={currentLanguage.flag}
            svg
            style={{ marginRight: "8px" }}
          />
          <span className="language-name">
            {t(`lang-selector.${language}`)}
          </span>
        </div>
        <div className={`dropdown-arrow ${isOpen ? "open" : ""}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M7 10l5 5 5-5z" fill="currentColor" />
          </svg>
        </div>
      </button>

      {isOpen && (
        <ul className="language-selector-dropdown" id="dropdown">
          {languages
            .filter((lang) => lang.code !== language)
            .map((lang) => (
              <li
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
              >
                <ReactCountryFlag
                  countryCode={lang.flag}
                  svg
                  style={{ marginRight: "8px" }}
                />
                {t(`lang-selector.${lang.code}`)}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
