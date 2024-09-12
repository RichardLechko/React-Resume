import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaTools,
  FaBriefcase,
  FaGraduationCap,
  FaBook,
  FaEnvelope,
  FaLinkedin,
  FaCube,
} from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";

const NavBar = ({ isSidebarVisible, refs, toggleSidebar }) => {
  const navigate = useNavigate();

  const handleNavClick = (sectionId) => {
    if (refs[sectionId] && refs[sectionId].current) {
      refs[sectionId].current.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const handleExternalNavClick = (path) => {
    navigate(path, { replace: true });
  };

  return (
    <div
      className={`fixed top-0 h-screen bg-gray-900 text-white shadow-lg transition-all duration-300 z-40 ${
        isSidebarVisible
          ? "w-20 max-[768px]:w-16 max-[425px]:w-12 opacity-100"
          : "w-0 opacity-0 overflow-hidden"
      }`}
    >
      <nav>
        <ul className="flex flex-col items-center space-y-4 mt-4">
          <NavItem
            icon={<FaUser className="text-2xl" />}
            onClick={() => handleNavClick("personal")}
            text="Personal"
            isSidebarVisible={isSidebarVisible}
          />
          <NavItem
            icon={<FaTools className="text-2xl" />}
            onClick={() => handleNavClick("skills")}
            text="Skills"
            isSidebarVisible={isSidebarVisible}
          />
          <NavItem
            icon={<FaBriefcase className="text-2xl" />}
            onClick={() => handleNavClick("work")}
            text="Work"
            isSidebarVisible={isSidebarVisible}
          />
          <NavItem
            icon={<FaGraduationCap className="text-2xl" />}
            onClick={() => handleNavClick("education")}
            text="School"
            isSidebarVisible={isSidebarVisible}
          />
          <NavItem
            icon={<FaBook className="text-2xl" />}
            onClick={() => handleNavClick("publications")}
            text="Publishes"
            isSidebarVisible={isSidebarVisible}
          />
          <NavItem
            icon={<FaEnvelope className="text-2xl" />}
            onClick={() => handleExternalNavClick("/contact")}
            text="Contact"
            isSidebarVisible={isSidebarVisible}
          />
          <NavItem
            icon={<FaCube className="text-2xl" />}
            onClick={() => handleExternalNavClick("/widgets")}
            text="Projects"
            isSidebarVisible={isSidebarVisible}
          />
          <div className="mt-8 space-y-4">
            <NavItem
              icon={<DiGithubBadge className="text-4xl hover:text-gray-900" />}
              link="https://github.com/RichardLechko"
              isSidebarVisible={isSidebarVisible}
            />
            <NavItem
              icon={<FaLinkedin className="text-4xl hover:text-blue-500" />}
              link="https://www.linkedin.com/in/richard-lechko/"
              isSidebarVisible={isSidebarVisible}
            />
          </div>
        </ul>
      </nav>
    </div>
  );
};

const NavItem = ({ icon, onClick, link, text, isSidebarVisible }) => {
  return (
    <li className="flex flex-col items-center">
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex flex-col px-3 py-1 items-center hover:bg-gray-700 transition-colors cursor-pointer ${
            isSidebarVisible ? "justify-center" : "justify-center"
          }`}
        >
          {icon}
          {isSidebarVisible && (
            <span className="mt-2 text-xs max-[768px]:text-[12px] max-[425px]:text-[10px]">
              {text}
            </span>
          )}
        </a>
      ) : (
        <div
          onClick={onClick}
          className={`flex flex-col items-center px-3 py-1 hover:bg-gray-700 transition-colors cursor-pointer ${
            isSidebarVisible ? "justify-center" : "justify-center"
          }`}
        >
          {icon}
          {isSidebarVisible && (
            <span className="mt-1 text-xs max-[768px]:text-[12px] max-[425px]:text-[10px]">
              {text}
            </span>
          )}
        </div>
      )}
    </li>
  );
};

export default NavBar;
