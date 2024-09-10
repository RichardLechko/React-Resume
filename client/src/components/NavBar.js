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
  FaSpotify,
  FaSoundcloud,
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
      className={`fixed top-0 h-screen ${
        isSidebarVisible ? "w-20 max-[768px]:w-16 max-[425px]:w-10" : "w-0"
      } bg-gray-900 text-white shadow-lg transition-all duration-300 z-40`}
    >
      <nav>
        <ul>
          <NavItem
            icon={<FaUser />}
            onClick={() => handleNavClick("personal")}
          />
          <NavItem
            icon={<FaTools />}
            onClick={() => handleNavClick("skills")}
          />
          <NavItem
            icon={<FaBriefcase />}
            onClick={() => handleNavClick("work")}
          />
          <NavItem
            icon={<FaGraduationCap />}
            onClick={() => handleNavClick("education")}
          />
          <NavItem
            icon={<FaBook />}
            onClick={() => handleNavClick("publications")}
          />
          <NavItem
            icon={<FaEnvelope />}
            onClick={() => handleExternalNavClick("/contact")}
          />
          <NavItem
            icon={<FaTools />}
            onClick={() => handleExternalNavClick("/widgets")}
          />
          <div className="mt-8 bg-darkviolet">
            <NavItem
              icon={
                <DiGithubBadge className="text-4xl hover:text-gray-400 max-[768px]:text-3xl max-[425px]:text-2xl" />
              }
              link="https://github.com/RichardLechko"
            />
            <NavItem
              icon={
                <FaLinkedin className="text-4xl hover:text-blue-600 max-[768px]:text-3xl max-[425px]:text-2xl" />
              }
              link="https://www.linkedin.com/in/richard-lechko/"
            />
            <NavItem
              icon={
                <FaSpotify className="text-4xl hover:text-green-500 max-[768px]:text-3xl max-[425px]:text-2xl" />
              }
              link="https://open.spotify.com/user/22j4lmvcuabn2joznuzxd3pdy?si=be67aa3576934843"
            />
            <NavItem
              icon={
                <FaSoundcloud className="text-4xl hover:text-orange-500 max-[768px]:text-3xl max-[425px]:text-2xl" />
              }
              link="https://soundcloud.com/richardlechko"
            />
          </div>
        </ul>
      </nav>
    </div>
  );
};

const NavItem = ({ icon, onClick }) => {
  return (
    <li onClick={onClick}>
      <div className="flex justify-center items-center p-3 hover:bg-gray-700 transition-colors cursor-pointer text-2xl max-[768px]:text-[1.3em] max-[425px]:pr-0 max-[425px]:pl-0">
        {icon}
      </div>
    </li>
  );
};

export default NavBar;
