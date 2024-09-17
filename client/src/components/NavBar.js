import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaLinkedin, FaChevronDown } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";

const texts = [
  "Web Developer",
  "UI/UX Designer",
  "IT Student",
  "Software Eng.",
];

const NavBar = ({ refs }) => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [typing, setTyping] = useState(true);
  const [cursorHidden, setCursorHidden] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Refs in NavBar:", refs);
  }, [refs]);

  const dropdownRefs = {
    personal: useRef(null),
    work: useRef(null),
    education: useRef(null),
    publications: useRef(null),
    relevantCoursework: useRef(null),
    skills: useRef(null),
  };

  useEffect(() => {
    const currentText = texts[textIndex];
    const typingSpeed = 100; // Speed of typing
    const pauseDuration = 500; // Pause between texts

    if (typing) {
      let currentIndex = 0;
      setDisplayedText(""); // Reset displayed text

      const typingInterval = setInterval(() => {
        if (currentIndex < currentText.length) {
          setDisplayedText(currentText.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setTyping(false);
          setCursorHidden(true); // Hide cursor when typing is complete
        }
      }, typingSpeed);

      return () => clearInterval(typingInterval);
    } else {
      const flippingInterval = setInterval(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setTyping(true); // Start typing again with new text
        setCursorHidden(false); // Show cursor again for new typing
      }, pauseDuration + typingSpeed * currentText.length);

      return () => clearInterval(flippingInterval);
    }
  }, [typing, textIndex]);

  const handleNavClick = (sectionId) => {
    // Check if you're on the MainPage
    if (window.location.pathname === "/") {
      // Try scrolling to the section
      console.log(`Trying to scroll to section: ${sectionId}`);
      const targetRef = refs[sectionId]?.current;

      if (targetRef) {
        console.log(`Scrolling to:`, targetRef);
        targetRef.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error(`No ref found for ${sectionId}`);
      }
    } else {
      // If you're on an external page, navigate back to MainPage and scroll
      handleExternalNavClick("/", sectionId);
    }
  };

  const handleExternalNavClick = (path, sectionId) => {
    // Navigate to the external page (MainPage, Contact, Projects)
    navigate(path);

    if (sectionId) {
      // After navigating, scroll to the section (delay needed to wait for page to load)
      setTimeout(() => {
        const targetRef = refs[sectionId]?.current;
        if (targetRef) {
          targetRef.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Adjust timeout if needed
    }
  };

  const openDropdown = (dropdown) => {
    setDropdownOpen(dropdown);
  };

  const closeDropdown = () => {
    setDropdownOpen(null);
  };

  const handleMouseEnter = (dropdown) => {
    // Close all other dropdowns
    closeDropdown();
    // Open the hovered dropdown
    openDropdown(dropdown);
  };

  const handleMouseLeave = (event, dropdown) => {
    const { clientY } = event;
    const dropdownElement = dropdownRefs[dropdown]?.current;

    if (
      dropdownElement &&
      clientY < dropdownElement.getBoundingClientRect().bottom
    ) {
      return;
    }

    closeDropdown();
  };

  return (
    <div className="relative">
      {dropdownOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={closeDropdown}
        />
      )}

      <nav className="fixed top-0 py-4 left-0 w-full bg-gray-900 text-white z-40 shadow-lg text-xl">
        <div className="flex flex-row items-center justify-between px-4 py-4">
          <div
            className={`name-wrapper overflow-hidden pr-6 ${
              cursorHidden ? "cursor-hidden" : ""
            }`}
          >
            <div className="name-text text-xl max-[1440px]:text-lg overflow-hidden">
              Richard Lechko -{" "}
              <span className="bg-gray-700 text-white px-2 py-1 rounded overflow-hidden">
                {displayedText}
              </span>
            </div>
          </div>

          <div className="flex justify-center items-center w-full">
            <ul className="flex flex-wrap justify-center gap-6 items-center text-xl max-lg:gap-4 max-lg:text-lg">
              {/* Personal with dropdown */}
              <li
                className="relative text-center max-xl:mb-2"
                onMouseEnter={() => handleMouseEnter("personal")}
                onMouseLeave={(e) => handleMouseLeave(e, "personal")}
              >
                <div
                  className="flex items-center cursor-pointer hover:text-gray-400 hover:border-b-2 border-white"
                  onMouseEnter={() => handleMouseEnter("personal")}
                >
                  Personal <FaChevronDown className="ml-1" />
                </div>
                {dropdownOpen === "personal" && (
                  <div
                    ref={dropdownRefs.personal}
                    className="fixed top-24 left-0 right-0 bg-white text-black shadow-lg z-50 px-8 py-6 flex justify-center items-center max-xl:top-28 "
                    style={{ minHeight: "300px" }}
                  >
                    {/* Close Button */}
                    <button
                      className="absolute top-6 right-6 text-black text-4xl font-bold z-[60]"
                      onClick={closeDropdown}
                    >
                      &times;
                    </button>

                    <ul className="w-full text-center">
                      <li
                        className="w-full px-4 py-8 hover:bg-gray-100 cursor-pointer text-2xl relative group"
                        onClick={() => handleNavClick("personal")}
                      >
                        <span className="relative inline-block font-mono">
                          Personal
                          <span className="underline-expand"></span>
                        </span>
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              {/* Skills with dropdown */}
              <li
                className="relative text-center max-xl:mb-2"
                onMouseEnter={() => handleMouseEnter("skills")}
                onMouseLeave={(e) => handleMouseLeave(e, "skills")}
              >
                <div
                  className="flex items-center cursor-pointer hover:text-gray-400 hover:border-b-2 border-white"
                  onMouseEnter={() => handleMouseEnter("skills")}
                >
                  Skills <FaChevronDown className="ml-1" />
                </div>
                {dropdownOpen === "skills" && (
                  <div
                    ref={dropdownRefs.skills}
                    className="fixed top-24 left-0 right-0 bg-white text-black shadow-lg z-50 px-8 py-6 flex justify-center items-center max-xl:top-28 "
                    style={{ minHeight: "300px" }}
                  >
                    {/* Close Button */}
                    <button
                      className="absolute top-6 right-6 text-black text-4xl font-bold z-[60]"
                      onClick={closeDropdown}
                    >
                      &times;
                    </button>

                    <ul className="w-full text-center">
                      <li
                        className="w-full px-4 py-8 hover:bg-gray-100 cursor-pointer text-2xl relative group"
                        onClick={() => handleNavClick("technicalSkills")}
                      >
                        <span className="relative inline-block font-mono">
                          Technical Skills
                          <span className="underline-expand"></span>
                        </span>
                      </li>
                      <li
                        className="w-full px-4 py-8 hover:bg-gray-100 cursor-pointer text-2xl relative group"
                        onClick={() => handleNavClick("nonTechnicalSkills")}
                      >
                        <span className="relative inline-block font-mono">
                          Non-Technical Skills
                          <span className="underline-expand"></span>
                        </span>
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              {/* Work with dropdown */}
              <li
                className="relative text-center max-xl:mb-2"
                onMouseEnter={() => handleMouseEnter("work")}
                onMouseLeave={(e) => handleMouseLeave(e, "work")}
              >
                <div
                  className="flex items-center cursor-pointer hover:text-gray-400 hover:border-b-2 border-white"
                  onMouseEnter={() => handleMouseEnter("work")}
                >
                  Work <FaChevronDown className="ml-1" />
                </div>
                {dropdownOpen === "work" && (
                  <div
                    ref={dropdownRefs.work}
                    className="fixed top-24 left-0 right-0 bg-white text-black shadow-lg z-50 px-8 py-6 flex justify-center items-center max-xl:top-28"
                    style={{ minHeight: "300px" }}
                  >
                    {/* Close Button */}
                    <button
                      className="absolute top-6 right-6 text-black text-4xl font-bold z-[60]"
                      onClick={closeDropdown}
                    >
                      &times;
                    </button>

                    <ul className="w-full text-center">
                      <li
                        className="w-full px-4 py-8 hover:bg-gray-100 cursor-pointer text-2xl relative group"
                        onClick={() => handleNavClick("work")}
                      >
                        <span className="relative inline-block font-mono">
                          Work
                          <span className="underline-expand"></span>
                        </span>
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              {/* Education with dropdown */}
              <li
                className="relative text-center max-xl:mb-2"
                onMouseEnter={() => handleMouseEnter("education")}
                onMouseLeave={(e) => handleMouseLeave(e, "education")}
              >
                <div
                  className="flex items-center cursor-pointer hover:text-gray-400 hover:border-b-2 border-white"
                  onMouseEnter={() => handleMouseEnter("education")}
                >
                  Education <FaChevronDown className="ml-1" />
                </div>
                {dropdownOpen === "education" && (
                  <div
                    ref={dropdownRefs.education}
                    className="fixed top-24 left-0 right-0 bg-white text-black shadow-lg z-50 px-8 py-6 flex justify-center items-center max-xl:top-28"
                    style={{ minHeight: "300px" }}
                  >
                    {/* Close Button */}
                    <button
                      className="absolute top-6 right-6 text-black text-4xl font-bold z-[60]"
                      onClick={closeDropdown}
                    >
                      &times;
                    </button>

                    <ul className="w-full text-center">
                      <li
                        className="w-full px-4 py-8 hover:bg-gray-100 cursor-pointer text-2xl relative group"
                        onClick={() => handleNavClick("education")}
                      >
                        <span className="relative inline-block font-mono">
                          Education
                          <span className="underline-expand"></span>
                        </span>
                      </li>
                      <li
                        className="w-full px-4 py-8 hover:bg-gray-100 cursor-pointer text-2xl relative group"
                        onClick={() => handleNavClick("relevantCoursework")}
                      >
                        <span className="relative inline-block font-mono">
                          Relevant Coursework
                          <span className="underline-expand"></span>
                        </span>
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              {/* Publications with dropdown */}
              <li
                className="relative text-center max-xl:mb-2"
                onMouseEnter={() => handleMouseEnter("publications")}
                onMouseLeave={(e) => handleMouseLeave(e, "publications")}
              >
                <div
                  className="flex items-center cursor-pointer hover:text-gray-400 hover:border-b-2 border-white"
                  onMouseEnter={() => handleMouseEnter("publications")}
                >
                  Publications <FaChevronDown className="ml-1" />
                </div>
                {dropdownOpen === "publications" && (
                  <div
                    ref={dropdownRefs.publications}
                    className="fixed top-24 left-0 right-0 bg-white text-black shadow-lg z-50 px-8 py-6 flex justify-center items-center max-xl:top-28"
                    style={{ minHeight: "300px" }}
                  >
                    {/* Close Button */}
                    <button
                      className="absolute top-6 right-6 text-black text-4xl font-bold z-[60]"
                      onClick={closeDropdown}
                    >
                      &times;
                    </button>

                    <ul className="w-full text-center">
                      <li
                        className="w-full px-4 py-8 hover:bg-gray-100 cursor-pointer text-2xl relative group"
                        onClick={() => handleNavClick("publications")}
                      >
                        <span className="relative inline-block font-mono">
                          Publications
                          <span className="underline-expand"></span>
                        </span>
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              {/* Contact */}
              <li className="relative text-center">
                <div
                  className="flex items-center cursor-pointer hover:text-gray-400 hover:border-b-2 border-white"
                  onClick={() => handleExternalNavClick("/contact")}
                  onMouseEnter={closeDropdown}
                >
                  Contact
                </div>
              </li>

              {/* Widgets */}
              <li className="relative text-center">
                <div
                  className="flex items-center cursor-pointer hover:text-gray-400 hover:border-b-2 border-white"
                  onClick={() => handleExternalNavClick("/widgets")}
                  onMouseEnter={closeDropdown}
                >
                  Widgets
                </div>
              </li>
              {/* GitHub */}
              <li>
                <a
                  className=" cursor-pointer hover:text-gray-400"
                  onMouseEnter={closeDropdown}
                  href="https://github.com/richardlechko"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <DiGithubBadge size={30} />
                </a>
              </li>

              {/* LinkedIn */}
              <li>
                <a
                  className=" cursor-pointer hover:text-gray-400"
                  onMouseEnter={closeDropdown}
                  href="https://www.linkedin.com/in/richardlechko"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
