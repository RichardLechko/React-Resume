import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
      setIsScreenSmall(window.innerWidth <= 1024);
      if (window.innerWidth > 1024) setIsSidebarOpen(false);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
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
      navigateToHomeAndScroll(sectionId);
    }

    if (isScreenSmall) setIsSidebarOpen(false);
  };

  const navigateToHomeAndScroll = (sectionId) => {
    navigate("/", { replace: true });
    setTimeout(() => {
      const targetRef = refs[sectionId]?.current;
      if (targetRef) {
        targetRef.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  const NavItem = ({ sectionId, sectionName }) => (
    <li className="cursor-pointer">
      <div
        role="button"
        className="text-xl text-[#A0C1D1] hover:text-[#80D6F4] max-[1280px]:text-lg"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick(sectionId);
        }}
        tabIndex="0"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleNavClick(sectionId);
          }
        }}
      >
        {sectionName}
      </div>
    </li>
  );

  const NavItemExternal = ({ path, sectionName, shouldOpenInNewTab }) => (
    <li className="cursor-pointer">
      <div
        className="text-xl text-[#A0C1D1] hover:text-[#80D6F4] max-[1280px]:text-lg"
        onClick={(e) => {
          e.preventDefault();
          if (shouldOpenInNewTab) {
            window.open(path, "_blank");
          } else {
            navigate(path);
          }
        }}
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
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
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
            <ul className="cursor-pointer flex gap-6 px-4 max-[1280px]:gap-4 text-center">
              <NavItem sectionId="personal" sectionName="Personal" />
              <NavItem sectionId="skills" sectionName="Skills" />
              <NavItem sectionId="work" sectionName="Work" />
              <NavItem sectionId="education" sectionName="Education" />
              <NavItem sectionId="publications" sectionName="Publications" />
              <NavItemExternal path="/contact" sectionName="Contact" />
              <NavItemExternal path="/widgets" sectionName="Projects" />
              <NavItemExternal
                path="https://public-notes-page-react.vercel.app/"
                sectionName="Notes"
                shouldOpenInNewTab={true}
              />
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
      {isScreenSmall && (
        <div
          className={`fixed left-0 top-[100px] h-[calc(100%-64px)] w-[200px] bg-gray-900 z-40 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300`}
        >
          <ul className="cursor-pointer flex flex-col gap-6 px-4 mt-6">
            <NavItem sectionId="personal" sectionName="Personal" />
            <NavItem sectionId="skills" sectionName="Skills" />
            <NavItem sectionId="work" sectionName="Work" />
            <NavItem sectionId="education" sectionName="Education" />
            <NavItem sectionId="publications" sectionName="Publications" />
            <NavItemExternal path="/contact" sectionName="Contact" />
            <NavItemExternal path="/widgets" sectionName="Projects" />
            <NavItemExternal
              path="https://public-notes-page-react.vercel.app/"
              sectionName="Notes"
              shouldOpenInNewTab={true}
            />
            <div className="flex flex-col max-[1024px]:gap-6">
              <SocialMediaLink
                icon={<DiGithubBadge className="text-white" />}
                link="https://github.com/richardlechko"
              />
              <SocialMediaLink
                icon={<FaLinkedin className="text-white" />}
                link="https://www.linkedin.com/in/richard-lechko"
              />
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
