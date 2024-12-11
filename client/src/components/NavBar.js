import React, { useState, useEffect, memo, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import icons from "./icons";
import ThemeToggle from "./ThemeToggle";

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

const MOBILE_NAV_ITEMS = [...NAV_ITEMS];

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

const useScrollTracking = (refs) => {
  const [currentSection, setCurrentSection] = useState("personal");
  const [sectionProgress, setSectionProgress] = useState({});

  const handleScroll = useCallback(() => {
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition <= 50) {
      setCurrentSection("personal");
      setSectionProgress({
        personal: { progress: 1, intersection: 1 },
        ...Object.keys(refs)
          .filter((id) => id !== "personal")
          .reduce(
            (acc, id) => ({ ...acc, [id]: { progress: 0, intersection: 0 } }),
            {}
          ),
      });
      return;
    }

    const updatedSectionProgress = {};
    let bestMatchSection = "personal";
    let largestIntersectionRatio = 0;

    Object.entries(refs).forEach(([sectionId, ref]) => {
      if (!ref.current) return;

      const sectionElement = ref.current;
      const rect = sectionElement.getBoundingClientRect();

      const elementTop = rect.top + scrollPosition;
      const sectionHeight = rect.height;

      const sectionCenterOffset = sectionHeight / 2;
      const progress = Math.max(
        0,
        Math.min(
          1,
          (scrollPosition - elementTop + sectionCenterOffset) / sectionHeight
        )
      );

      const visibleHeight = Math.min(
        windowHeight,
        Math.max(0, windowHeight - rect.top),
        Math.max(0, rect.bottom)
      );
      const intersectionRatio = visibleHeight / sectionHeight;

      const isInView = intersectionRatio > 0.4;

      if (isInView) {
        updatedSectionProgress[sectionId] = {
          progress: Number(progress.toFixed(2)),
          intersection: Number(intersectionRatio.toFixed(2)),
        };

        if (intersectionRatio > largestIntersectionRatio) {
          bestMatchSection = sectionId;
          largestIntersectionRatio = intersectionRatio;
        }
      } else {
        updatedSectionProgress[sectionId] = {
          progress: 0,
          intersection: 0,
        };
      }
    });

    setSectionProgress(updatedSectionProgress);
    setCurrentSection(bestMatchSection);
  }, [refs]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return { currentSection, sectionProgress };
};

const NavBar = ({ refs, activeSection }) => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHamburgerMenu, setIsHamburgerMenu] = useState(false);

  const { currentSection, sectionProgress } = useScrollTracking(refs);

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
    ({ sectionId, sectionName, onNavClick }) => {
      const sectionData = sectionProgress[sectionId] || {
        progress: 0,
        intersection: 0,
      };

      return (
        <div className="nav-item-stable-wrapper">
          <div
            className={`nav-ul-li ${
              currentSection === sectionId ? "active" : ""
            }`}
            role="button"
            onClick={() => onNavClick(sectionId)}
            tabIndex="0"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onNavClick(sectionId);
              }
            }}
          >
            <span>{sectionName}</span>
            <div
              className="section-progress-indicator"
              style={{
                width: `${sectionData.progress * 100}%`,
                position: "absolute",
                bottom: 0,
                left: 0,
                height: "3px",
                backgroundColor: "var(--secondary)",
              }}
            />
          </div>
        </div>
      );
    },
    [currentSection, sectionProgress]
  );

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
                    />
                  ))}
                </div>
              </li>

              <li className="external-links">
                <div className="theme-toggle-and-blog">
                  <ThemeToggle />
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
                  isActive={currentSection === id}
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
