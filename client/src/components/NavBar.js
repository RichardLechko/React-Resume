import React, { useState, useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";
import icons from "./icons";
import ThemeToggle from "./ThemeToggle";

const NavItem = ({ sectionId, sectionName, onNavClick }) => (
  <div
    className="nav-item relative cursor-pointer hover:scale-105 transition-transform duration-150"
    role="button"
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
    <span className="text-base max-[1200px]:text-sm relative z-10">
      {sectionName}
    </span>
  </div>
);

const NavItemExternal = memo(
  ({ path, sectionName, shouldOpenInNewTab, isHamburgerMenu, onNavigate }) => (
    <div
      className={`cursor-pointer flex items-center gap-1 transition-transform duration-150 hover:scale-105 ${
        isHamburgerMenu
          ? "text-base max-[1024px]:ml-1"
          : "max-[1500px]:text-base max-[1270px]:text-sm"
      }`}
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
    className={`transition-transform duration-150 hover:scale-90`}
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
    icon: <icons.ImGithub className="text-3xl max-[1400px]:text-2xl" />,
    link: "https://github.com/richardlechko",
    ariaLabel: "Visit my GitHub profile",
  },
  {
    icon: <icons.FaLinkedin className="text-3xl max-[1400px]:text-2xl" />,
    link: "https://www.linkedin.com/in/richard-lechko",
    ariaLabel: "Visit my LinkedIn profile",
  },
];

const NavBar = ({ refs, activeSection }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHamburgerMenu, setIsHamburgerMenu] = useState(false);
  const navigate = useNavigate();

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
    <div className="relative">
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <nav className="fixed top-0 w-full bg-[#e2e8f0] z-50">
        <div className="flex items-center justify-between px-4 py-2 max-[1200px]:px-2">
          <div className="flex items-center text-2xl whitespace-nowrap nav-name max-[1440px]:text-xl max-[1024px]:text-3xl max-[640px]:text-xl">
            Richard Lechko
          </div>

          {!isHamburgerMenu ? (
            <ul className="flex items-center justify-between w-full">
              <li className="flex items-center justify-center mx-auto">
                <pre className="p-4 max-[1200px]:px-2 overflow-auto">
                  <div className="flex space-x-10 max-[1440px]:space-x-2">
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
                </pre>
              </li>

              <li className="flex items-center gap-6 max-[1440px]:gap-3">
                <ThemeToggle />
                <NavItemExternal
                  path="https://public-notes-page-react.vercel.app/"
                  sectionName="Blog"
                  shouldOpenInNewTab
                  isHamburgerMenu={isHamburgerMenu}
                  onNavigate={handleExternalNavigation}
                />
                {SOCIAL_LINKS.map(({ icon, link, ariaLabel }, index) => (
                  <SocialMediaLink
                    key={index}
                    icon={icon}
                    link={link}
                    ariaLabel={ariaLabel}
                    isHamburgerMenu={isHamburgerMenu}
                  />
                ))}
              </li>
            </ul>
          ) : (
            <div className="flex items-center gap-4 ml-auto">
              <ThemeToggle />
              <button
                className="text-3xl cursor-pointer max-[425px]:text-2xl"
                onClick={() => setIsSidebarOpen((prev) => !prev)}
                aria-label="Toggle navigation menu"
              >
                &#9776;
              </button>
            </div>
          )}
        </div>
      </nav>

      {isHamburgerMenu && (
        <div
          className={`fixed left-0 pt-10 top-[40px] h-[calc(100%-64px)] w-[200px] bg-white dark:bg-gray-900 z-40 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform`}
        >
          <ul>
            {MOBILE_NAV_ITEMS.map(({ id, name }) => (
              <li key={id} className="px-4 py-2">
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
