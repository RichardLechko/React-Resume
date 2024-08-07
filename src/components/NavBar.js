// NavBar.js
import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaUser,
  FaTools,
  FaBriefcase,
  FaGraduationCap,
  FaBook,
  FaEnvelope,
} from "react-icons/fa";

const NavBar = ({ isSidebarVisible, refs, toggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId) => {
    if (refs[sectionId] && refs[sectionId].current) {
      refs[sectionId].current.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        if (refs[sectionId] && refs[sectionId].current) {
          refs[sectionId].current.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const handleExternalNavClick = (path) => {
    navigate(path, { replace: true });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div
      className={`fixed top-0 h-screen ${
        isSidebarVisible ? "w-20" : "w-0"
      } bg-gray-900 text-white shadow-lg transition-all duration-300 z-40`}
    >
      <nav>
        <ul>
          <NavItem icon={<FaUser size={28} />} onClick={() => handleNavClick('personal')} />
          <NavItem icon={<FaTools size={28} />} onClick={() => handleNavClick('skills')} />
          <NavItem icon={<FaBriefcase size={28} />} onClick={() => handleNavClick('work')} />
          <NavItem icon={<FaGraduationCap size={28} />} onClick={() => handleNavClick('education')} />
          <NavItem icon={<FaBook size={28} />} onClick={() => handleNavClick('publications')} />
          <NavItem icon={<FaEnvelope size={28} />} onClick={() => handleExternalNavClick('/contact')} />
          <NavItem icon={<FaTools size={28} />} onClick={() => handleExternalNavClick('/widgets')} />
        </ul>
      </nav>
    </div>
  );
};

const NavItem = ({ icon, onClick }) => {
  return (
    <li onClick={onClick}>
      <div className="flex justify-center items-center p-4 hover:bg-gray-700 transition-colors cursor-pointer">
        {icon}
      </div>
    </li>
  );
};

export default NavBar;