// client/src/components/NavBar.js
import React, { useState, useEffect, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useTranslation } from "./language/LanguageContext";
import LanguageSelector from "./language/LanguageSelector";
import styles from "./NavBar.module.css";

const NavBar = ({ refs }) => {
  const { t, language } = useTranslation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHamburgerMenu, setIsHamburgerMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleToggle = () => {
    if (isSidebarOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsSidebarOpen(false);
        setIsClosing(false);
      }, 200);
    } else {
      setIsSidebarOpen(true);
    }
  };

  const NAV_ITEMS = [
    { id: "personal", name: t("navItems.personal") },
    { id: "projects", name: t("navItems.projects") },
    { id: "work", name: t("navItems.work") },
    { id: "education", name: t("navItems.education") },
    { id: "skills", name: t("navItems.skills") },
    { id: "contact", name: t("navItems.contact") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (const [id, ref] of Object.entries(refs)) {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
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
    const handleResize = () => {
      const isSmallScreen = window.innerWidth <= 768;
      setIsHamburgerMenu(isSmallScreen);
      if (!isSmallScreen && isSidebarOpen) setIsSidebarOpen(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isSidebarOpen]);

  const handleNavClick = useCallback((sectionId) => {
    if (window.location.pathname === "/") {
      refs[sectionId]?.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { replace: true });
      setTimeout(() => {
        refs[sectionId]?.current?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
    if (isHamburgerMenu) setIsSidebarOpen(false);
  }, [refs, navigate, isHamburgerMenu]);

  const NavItem = useCallback(({ sectionId, sectionName }) => (
    <div className={styles.navItemStableWrapper}>
      <div
        className={`${styles.navUlLi} ${activeSection === sectionId && !isSidebarOpen ? styles.active : ""}`}
        role="button"
        onClick={() => handleNavClick(sectionId)}
        tabIndex="0"
        onKeyDown={(e) => e.key === "Enter" && handleNavClick(sectionId)}
        style={{ cursor: "pointer", pointerEvents: "auto" }}
      >
        <span>{sectionName}</span>
      </div>
    </div>
  ), [activeSection, isSidebarOpen, handleNavClick]);

  return (
    <div className={styles.navbarContainer} lang={language}>
      {isSidebarOpen && <div className={styles.sidebarOverlay} onClick={() => setIsSidebarOpen(false)} />}

      <nav>
        <div className={styles.navbarContent}>
          <div className="navbar-language-support">
            <LanguageSelector />
          </div>

          {!isHamburgerMenu && (
            <ul className={styles.desktopNavbar}>
              <li className={styles.navItemWrapper}>
                <div className={styles.desktopNavItems}>
                  {NAV_ITEMS.map(({ id, name }) => (
                    <NavItem key={id} sectionId={id} sectionName={name} />
                  ))}
                </div>
              </li>
              <li className={styles.externalLinks}>
                <div className="theme-toggle-and-blog">
                  <ThemeToggle />
                </div>
              </li>
            </ul>
          )}

          <div className={styles.navbarActions}>
            {isHamburgerMenu && (
              <>
                <ThemeToggle />
                <button
                  className={styles.hamburgerMenuButton}
                  onClick={handleToggle}
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
        <div className={`${styles.mobileSidebar} ${isSidebarOpen ? styles.open : ''} ${isClosing ? styles.closing : ''}`}>
          <ul className={styles.mobileNavItems}>
            {NAV_ITEMS.map(({ id, name }) => (
              <li key={id} className="mobile-nav-item">
                <NavItem sectionId={id} sectionName={name} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;