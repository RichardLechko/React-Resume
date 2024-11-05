import React, { useState, useEffect, startTransition } from "react";
import { useNavigate } from "react-router-dom";
import icons from "./icons";

import { FiExternalLink } from "react-icons/fi";

import ThemeToggle from "./ThemeToggle";

const NavBar = ({ refs }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScreenSmall, setIsScreenSmall] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth <= 1024;
      startTransition(() => {
        setIsScreenSmall(isSmall);
        if (!isSmall) setIsSidebarOpen(false);
      });
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

    if (isScreenSmall) {
      startTransition(() => setIsSidebarOpen(false));
    }
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
      className="cursor-pointer text-xl max-[1440px]:text-lg hover:text-blue-400 max-[1200px]:text-base"
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
      className="cursor-pointer flex items-center gap-1 text-xl max-[1440px]:text-lg hover:text-blue-400 max-[1200px]:text-base "
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
      className="text-2xl max-[1200px]:text-base"
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
      <nav className="fixed top-0 py-4 max-[1024px]:py-1 right-0 w-full bg-white dark:bg-gray-900 z-50 shadow-lg">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center text-2xl whitespace-nowrap nav-name max-[1200px]:text-xl max-[1024px]:text-3xl max-[640px]:text-xl">
            Richard Lechko
          </div>
          {isScreenSmall && (
            <div
              className="text-2xl cursor-pointer flex items-center gap-4 max-[640px]:text-xl"
              onClick={() => setIsSidebarOpen((prev) => !prev)}
            >
              <ThemeToggle />
              <span>&#9776;</span>
            </div>
          )}

          {!isScreenSmall && (
            <ul className="flex items-center justify-between text-center w-full">
              <li className="flex items-center justify-center mx-auto gap-8 w-full max-[1200px]:gap-6">
                <NavItem sectionId="personal" sectionName="Personal" />

                <NavItem sectionId="skills" sectionName="Skills" />
                <NavItem sectionId="projects" sectionName="Projects" />
                <NavItem sectionId="work" sectionName="Work" />
                <NavItem sectionId="education" sectionName="Education" />
                <NavItem sectionId="publications" sectionName="Publications" />
                <NavItem sectionId="contact" sectionName="Contact" />

                <NavItemExternal
                  path="https://public-notes-page-react.vercel.app/"
                  sectionName="Notes"
                  shouldOpenInNewTab={true}
                />
              </li>

              <li className="flex-none flex flex-row items-center justify-center space-x-3">
                <ThemeToggle />
                <SocialMediaLink
                  icon={
                    <icons.ImGithub className="text-3xl hover:scale-90 transform transition duration-150" />
                  }
                  link="https://github.com/richardlechko"
                  ariaLabel="Visit my GitHub profile"
                />
                <SocialMediaLink
                  icon={
                    <icons.FaLinkedin className="text-3xl hover:scale-90 transform transition duration-150" />
                  }
                  link="https://www.linkedin.com/in/richard-lechko"
                  ariaLabel="Visit my LinkedIn profile"
                />
              </li>
            </ul>
          )}
        </div>
      </nav>

      {isScreenSmall && (
        <div
          className={`fixed left-0 pt-10 top-[50px] h-[calc(100%-64px)] w-[200px] max-[768px]:w-[150px] max-[640px]:w-[120px] bg-white dark:bg-gray-900 z-40 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300`}
        >
          <ul className="flex flex-col pl-8 py-2 gap-4 max-[640px]:pl-4">
            <NavItem sectionId="personal" sectionName="Personal" />

            <NavItem sectionId="skills" sectionName="Skills" />
            <NavItem sectionId="projects" sectionName="Projects" />
            <NavItem sectionId="work" sectionName="Work" />
            <NavItem sectionId="education" sectionName="Education" />
            <NavItem sectionId="publications" sectionName="Publications" />
            <NavItem sectionId="contact" sectionName="Contact" />

            <NavItemExternal
              path="https://public-notes-page-react.vercel.app/"
              sectionName="Notes"
              shouldOpenInNewTab={true}
            />
            <div className="flex mt-8 gap-4">
              <SocialMediaLink
                icon={<icons.ImGithub />}
                link="https://github.com/richardlechko"
                ariaLabel="Visit my GitHub profile"
              />
              <SocialMediaLink
                icon={<icons.FaLinkedin />}
                link="https://www.linkedin.com/in/richard-lechko"
                ariaLabel="Visit my LinkedIn profile"
              />
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
