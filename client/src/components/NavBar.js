import React, { useState, useEffect, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import icons from "./icons";
import ThemeToggle from "./ThemeToggle";
import { useTranslation } from "./language/LanguageContext";
import LanguageSelector from "./language/LanguageSelector";

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

const NavBar = ({ refs }) => {
  const { t, language } = useTranslation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHamburgerMenu, setIsHamburgerMenu] = useState(false);
  const [sidebarStyle, setSidebarStyle] = useState({ left: "-250px" });
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();

  const NAV_ITEMS = [
    { id: "personal", name: t("navItems.personal") },
    { id: "projects", name: t("navItems.projects") },
    { id: "work", name: t("navItems.work") },
    { id: "education", name: t("navItems.education") },
    { id: "skills", name: t("navItems.skills") },
    { id: "contact", name: t("navItems.contact") },
  ];

  const MOBILE_NAV_ITEMS = [...NAV_ITEMS];

  const SOCIAL_LINKS = [
    {
      icon: <icons.ImGithub />,
      link: "https://github.com/richardlechko",
      ariaLabel: t("socialLinks.github"),
    },
    {
      icon: <icons.FaLinkedin />,
      link: "https://www.linkedin.com/in/richard-lechko",
      ariaLabel: t("socialLinks.linkedin"),
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const [id, ref] of Object.entries(refs)) {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [refs]);

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

  const handleNavClick = useCallback(
    (sectionId) => {
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
    },
    [refs, navigate, isHamburgerMenu]
  );

  const handleExternalNavigation = (path) => {
    navigate(path);
    setIsSidebarOpen(false);
  };

  const NavItem = useCallback(
    ({ sectionId, sectionName, onNavClick }) => (
      <div className="nav-item-stable-wrapper">
        <div
          className={`nav-ul-li ${
            activeSection === sectionId && !isSidebarOpen ? "active" : ""
          }`}
          role="button"
          onClick={() => onNavClick(sectionId)}
          tabIndex="0"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onNavClick(sectionId);
            }
          }}
          style={{
            cursor: "pointer",
            pointerEvents: "auto",
          }}
        >
          <span>{sectionName}</span>
        </div>
      </div>
    ),
    [activeSection, isSidebarOpen]
  );

  return (
    <div className="navbar-container" lang={language}>
      {isSidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <nav>
        <div className="navbar-content">
          <div className="navbar-language-support">
            <LanguageSelector />
          </div>

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
                    />
                  ))}
                </div>
              </li>

              <li className="external-links">
                <div className="theme-toggle-and-blog">
                  <ThemeToggle />
                  <NavItemExternal
                    path="https://public-notes-page-react.vercel.app/"
                    sectionName={t("externalLinks.blog")}
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
            {isHamburgerMenu && (
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
