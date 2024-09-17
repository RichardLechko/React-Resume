import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";

const texts = [
  "Web Developer",
  "UI/UX Designer",
  "IT Student",
  "Software Eng.",
];

const NavBar = ({ refs }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [typing, setTyping] = useState(true);
  const [cursorHidden, setCursorHidden] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScreenSmall, setIsScreenSmall] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsScreenSmall(true);
      } else {
        setIsScreenSmall(false);
        setIsSidebarOpen(false); // Close the sidebar when resizing back past 1024px
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check on component mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const currentText = texts[textIndex];
    const typingSpeed = 100;
    const pauseDuration = 500;

    if (typing) {
      let currentIndex = 0;
      setDisplayedText("");
      const typingInterval = setInterval(() => {
        if (currentIndex < currentText.length) {
          setDisplayedText(currentText.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setTyping(false);
          setCursorHidden(true);
        }
      }, typingSpeed);

      return () => clearInterval(typingInterval);
    } else {
      const flippingInterval = setInterval(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setTyping(true);
        setCursorHidden(false);
      }, pauseDuration + typingSpeed * currentText.length);

      return () => clearInterval(flippingInterval);
    }
  }, [typing, textIndex]);

  const handleNavClick = (sectionId) => {
    if (window.location.pathname === "/") {
      const targetRef = refs[sectionId]?.current;

      if (targetRef) {
        targetRef.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      handleExternalNavClick("/", sectionId);
    }
    if (isScreenSmall) setIsSidebarOpen(false); // Close sidebar after navigating
  };

  const handleExternalNavClick = (path, sectionId) => {
    navigate(path);

    if (sectionId) {
      setTimeout(() => {
        const targetRef = refs[sectionId]?.current;
        if (targetRef) {
          targetRef.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    if (isScreenSmall) setIsSidebarOpen(false); // Close sidebar after navigating
  };

  const NavItem = ({ sectionId, sectionName }) => (
    <li>
      <div
        className="text-xl text-[#A0C1D1] hover:text-[#80D6F4] max-[1280px]:text-lg"
        onClick={() => handleNavClick(sectionId)}
      >
        {sectionName}
      </div>
    </li>
  );

  const NavItemExternal = ({ path, sectionName }) => (
    <li>
      <div
        className="text-xl text-[#A0C1D1] hover:text-[#80D6F4] max-[1280px]:text-lg"
        onClick={() => handleExternalNavClick(path)}
      >
        {sectionName}
      </div>
    </li>
  );

  const SocialMediaLink = ({ icon, link }) => (
    <li>
      <a
        className="text-2xl max-[1280px]:text-xl max-[1024px]:text-3xl"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}
      </a>
    </li>
  );

  return (
    <div className="relative">
      {/* Dimmed background when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40" // Increased z-index of the overlay
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
      <nav className="fixed top-0 py-4 left-0 w-full bg-gray-900 text-white z-50 shadow-lg">
        <div className="flex items-center justify-between px-4 py-4">
          <div
            className={`name-wrapper overflow-hidden pr-6 ${
              cursorHidden ? "cursor-hidden" : ""
            }`}
          >
            <div className="name-text text-xl overflow-hidden max-[1280px]:text-base max-[425px]:text-sm max-[375px]:text-xs">
              Richard Lechko -{" "}
              <span className="bg-gray-700 text-white px-2 py-1 rounded overflow-hidden">
                {displayedText}
              </span>
            </div>
          </div>

          {isScreenSmall && (
            <div
              className="text-3xl cursor-pointer"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              &#9776;
            </div>
          )}

          {!isScreenSmall && (
            <ul className="cursor-pointer flex gap-6 px-4 max-[1280px]:gap-4">
              <NavItem sectionId="personal" sectionName="Personal" />
              <NavItem sectionId="skills" sectionName="Skills" />
              <NavItem sectionId="work" sectionName="Work" />
              <NavItem sectionId="education" sectionName="Education" />
              <NavItem sectionId="publications" sectionName="Publications" />
              <NavItemExternal path="/contact" sectionName="Contact" />
              <NavItemExternal path="/widgets" sectionName="Projects" />
              <SocialMediaLink
                icon={<DiGithubBadge />}
                link="https://github.com/richardlechko"
              />
              <SocialMediaLink
                icon={<FaLinkedin />}
                link="https://www.linkedin.com/in/richard-lechko"
              />
            </ul>
          )}
        </div>
      </nav>

      {/* Sidebar for small screens */}
      {isScreenSmall && (
        <div
          className={`fixed left-0 top-[100px] h-[calc(100%-64px)] w-[200px] bg-gray-900 z-40 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300`} // Sidebar starts below the header (adjust `top` if the header height changes)
        >
          <ul className="cursor-pointer flex flex-col gap-6 px-4 mt-6">
            <NavItem sectionId="personal" sectionName="Personal" />
            <NavItem sectionId="skills" sectionName="Skills" />
            <NavItem sectionId="work" sectionName="Work" />
            <NavItem sectionId="education" sectionName="Education" />
            <NavItem sectionId="publications" sectionName="Publications" />
            <NavItemExternal path="/contact" sectionName="Contact" />
            <NavItemExternal path="/widgets" sectionName="Projects" />
            <div className="flex flex-col max-[1024px]:gap-6">
              <SocialMediaLink
                icon={<DiGithubBadge className="text-white" />}
                link="https://github.com/richardlechko"
              />
              <SocialMediaLink
                icon={<FaLinkedin className="text-white" />}
                link="https://www.linkedin.com/in/richardlechko"
              />
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
