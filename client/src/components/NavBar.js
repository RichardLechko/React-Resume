import React, { useState, useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";
import icons from "./icons";
import ThemeToggle from "./ThemeToggle";

const NavItem = ({ sectionId, sectionName, onNavClick, isActive }) => (
  <div
    className="nav-ul-li"
    role="button"
    data-active={isActive}
    onClick={(e) => {
      e.preventDefault();
      onNavClick(sectionId);
    }}
    tabIndex="0"
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        onNavClick(sectionId);
      }
    }}
  >
    <span>{sectionName}</span>
  </div>
);

const NavItemExternal = memo(
  ({ path, sectionName, shouldOpenInNewTab, onNavigate }) => (
    <div
      onClick={() => {
        if (shouldOpenInNewTab) {
          window.open(path, "_blank", "noopener noreferrer");
        } else {
          onNavigate(path);
        }
      }}
    >
      {sectionName}
    </div>
  )
);

const SocialMediaLink = memo(({ icon, link, ariaLabel }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
  >
    {icon}
  </a>
));

const NAV_ITEMS = [
  { id: "personal", name: "Home" },
  { id: "projects", name: "Projects" },
  { id: "work", name: "Work" },
  { id: "education", name: "Education" },
  { id: "skills", name: "Skills" },
  { id: "contact", name: "Contact" },
];

const MOBILE_NAV_ITEMS = [
  { id: "personal", name: "Home" },
  { id: "projects", name: "Projects" },
  { id: "work", name: "Work" },
  { id: "education", name: "Education" },
  { id: "skills", name: "Skills" },
  { id: "contact", name: "Contact" },
];

const SOCIAL_LINKS = [
  {
    icon: <icons.ImGithub />,
    link: "https://github.com/richardlechko",
    ariaLabel: "Visit my GitHub profile",
  },
  {
    icon: <icons.FaLinkedin />,
    link: "https://www.linkedin.com/in/richard-lechko",
    ariaLabel: "Visit my LinkedIn profile",
  },
];

const NavBar = ({ refs, activeSection }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHamburgerMenu, setIsHamburgerMenu] = useState(false);
  const [sidebarStyle, setSidebarStyle] = useState({ left: "-250px" });
  const navigate = useNavigate();

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarStyle({ left: "0px" });
    } else {
      setSidebarStyle({ left: "-250px" });
    }
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth <= 1024;
      setIsHamburgerMenu(isSmallScreen);
      if (!isSmallScreen && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isSidebarOpen]);

  const handleNavClick = (sectionId) => {
    if (window.location.pathname === "/") {
      refs[sectionId]?.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { replace: true });
      setTimeout(() => {
        refs[sectionId]?.current?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }

    if (isHamburgerMenu) {
      setIsSidebarOpen(false);
    }
  };

  const handleExternalNavigation = (path) => {
    navigate(path);
    setIsSidebarOpen(false);
  };

  return (
    <div className="navbar-container">
      {isSidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <nav>
        <div className="navbar-content">
          <div className="navbar-logo">Richard Lechko</div>

          {!isHamburgerMenu ? (
            <ul className="desktop-navbar">
              <li className="nav-item-wrapper">
                <div className="desktop-nav-items">
                  {NAV_ITEMS.map(({ id, name }) => (
                    <NavItem
                      key={id}
                      sectionId={id}
                      sectionName={name}
                      onNavClick={handleNavClick}
                      isActive={activeSection === id}
                    />
                  ))}
                </div>
              </li>

              <li className="external-links">
                <div className="theme-toggle-and-blog">
                  <ThemeToggle /> {/* Theme toggle for desktop */}
                  <NavItemExternal
                    path="https://public-notes-page-react.vercel.app/"
                    sectionName="Blog"
                    shouldOpenInNewTab
                    isHamburgerMenu={isHamburgerMenu}
                    onNavigate={handleExternalNavigation}
                  />
                </div>
                <div className="social-links">
                  {SOCIAL_LINKS.map(({ icon, link, ariaLabel }, index) => (
                    <SocialMediaLink
                      key={index}
                      icon={icon}
                      link={link}
                      ariaLabel={ariaLabel}
                      isHamburgerMenu={isHamburgerMenu}
                    />
                  ))}
                </div>
              </li>
            </ul>
          ) : null}

          <div className="navbar-actions">
            {isHamburgerMenu /* Only show theme toggle on mobile */ && (
              <>
                <ThemeToggle />
                <button
                  className="hamburger-menu-button"
                  onClick={() => setIsSidebarOpen((prev) => !prev)}
                  aria-label="Toggle navigation menu"
                >
                  &#9776;
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {isHamburgerMenu && isSidebarOpen && (
        <div
          className="mobile-sidebar"
          style={{
            ...sidebarStyle,
            transition: "left 0.3s ease",
          }}
        >
          <ul className="mobile-nav-items">
            {MOBILE_NAV_ITEMS.map(({ id, name }) => (
              <li key={id} className="mobile-nav-item">
                <NavItem
                  sectionId={id}
                  sectionName={name}
                  onNavClick={handleNavClick}
                  isActive={activeSection === id}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
