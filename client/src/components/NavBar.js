import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import TypingEffect from "./TypingEffect";

const NavBar = ({ refs }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScreenSmall, setIsScreenSmall] = useState(false);
  const navigate = useNavigate();
  const roles = [
    "Web Dev",
    "SWE",
    "UI/UX Designer",
    "IT Student",
    "Full Stack Eng.",
  ];

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
            setIsSidebarOpen(false);
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
      <nav className="fixed top-0 py-4 right-0 w-full bg-gray-900 text-white z-50 shadow-lg">
        <div className="flex items-center justify-between px-4 py-4">
          <TypingEffect texts={roles} />

          {isScreenSmall && (
            <div
              className="text-3xl cursor-pointer"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              &#9776;
            </div>
          )}
          {!isScreenSmall && (
            <ul className="flex gap-6 px-4 max-[1280px]:gap-4 text-center ml-auto">
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
          <ul className="flex flex-col items-center py-4 gap-4 text-[#e2e8f0]">
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
        </div>
      )}
    </div>
  );
};

export default NavBar;
