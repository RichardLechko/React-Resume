import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import { FiExternalLink } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

const NavBar = ({ refs }) => {
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
    <div
      className="cursor-pointer text-xl max-[1280px]:text-lg"
      role="button"
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
  );

  const NavItemExternal = ({ path, sectionName, shouldOpenInNewTab }) => (
    <div
      className="cursor-pointer flex items-center gap-1 text-xl max-[1280px]:text-lg"
      onClick={(e) => {
        e.preventDefault();
        if (shouldOpenInNewTab) {
          window.open(path, "_blank");
        } else {
          navigate(path);
          setIsSidebarOpen(false);
        }
      }}
    >
      {sectionName} <FiExternalLink className="inline-block" />
    </div>
  );

  const SocialMediaLink = ({ icon, link, ariaLabel }) => (
    <a
      className="text-2xl max-[1280px]:text-xl max-[1024px]:text-3xl"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {icon}
    </a>
  );

  return (
    <div className="relative">
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
      <nav className="fixed top-0 py-4 right-0 w-full bg-white dark:bg-gray-900 z-50 shadow-lg">
        <div className="flex items-center justify-center px-4 py-4">
          {isScreenSmall && (
            <div
              className="text-3xl cursor-pointer"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              &#9776;
            </div>
          )}
          {!isScreenSmall && (
            <ul className="flex items-center justify-center gap-6 max-[1280px]:gap-4 text-center">
              <ThemeToggle />
              <NavItem sectionId="personal" sectionName="Personal" />
              <NavItem sectionId="skills" sectionName="Skills" />
              <NavItem sectionId="work" sectionName="Work" />
              <NavItem sectionId="education" sectionName="Education" />
              <NavItem sectionId="publications" sectionName="Publications" />
              <NavItem sectionId="contact" sectionName="Contact" />
              <NavItem sectionId="projects" sectionName="Projects" />
              <NavItemExternal
                path="https://public-notes-page-react.vercel.app/"
                sectionName="Notes"
                shouldOpenInNewTab={true}
              />
              <SocialMediaLink
                icon={<DiGithubBadge />}
                link="https://github.com/richardlechko"
                ariaLabel="Visit my GitHub profile"
              />
              <SocialMediaLink
                icon={<FaLinkedin />}
                link="https://www.linkedin.com/in/richard-lechko"
                ariaLabel="Visit my LinkedIn profile"
              />
            </ul>
          )}
        </div>
      </nav>
      {isScreenSmall && (
        <div
          className={`fixed left-0 top-[100px] h-[calc(100%-64px)] w-[200px] bg-white dark:bg-gray-900 z-40 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300`}
        >
          <ul className="flex flex-col items-center py-4 gap-4">
            <NavItem sectionId="personal" sectionName="Personal" />
            <NavItem sectionId="skills" sectionName="Skills" />
            <NavItem sectionId="work" sectionName="Work" />
            <NavItem sectionId="education" sectionName="Education" />
            <NavItem sectionId="publications" sectionName="Publications" />
            <NavItem sectionId="contact" sectionName="Contact" />
            <NavItem sectionId="projects" sectionName="Projects" />
            <NavItemExternal
              path="https://public-notes-page-react.vercel.app/"
              sectionName="Notes"
              shouldOpenInNewTab={true}
            />
            <SocialMediaLink
              icon={<DiGithubBadge />}
              link="https://github.com/richardlechko"
              ariaLabel="Visit my GitHub profile"
            />
            <SocialMediaLink
              icon={<FaLinkedin />}
              link="https://www.linkedin.com/in/richard-lechko"
              ariaLabel="Visit my LinkedIn profile"
            />
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
