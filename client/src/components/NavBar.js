import React, { useState, useEffect, startTransition } from "react";
import { useNavigate } from "react-router-dom";
import icons from "./icons";
import { FiExternalLink } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

const NavBar = ({ refs }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const navigate = useNavigate();
  const [isHamburgerMenu, setIsHamburgerMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsHamburgerMenu(window.innerWidth <= 1024);
      if (window.innerWidth > 1024 && isSidebarOpen) {
        setIsSidebarOpen(false); // Close sidebar on large screens
      }
    };

    // Initial setup
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Cleanup listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    Object.values(refs).forEach((ref) => {
      if (ref?.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(refs).forEach((ref) => {
        if (ref?.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [refs]);

  const handleNavClick = (sectionId) => {
    if (window.location.pathname === "/") {
      const targetRef = refs[sectionId]?.current;
      if (targetRef) {
        targetRef.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigateToHomeAndScroll(sectionId);
    }

    if (isHamburgerMenu) {
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

  const NavItem = ({ sectionId, sectionName }) => {
    const isActive = activeSection === sectionId;

    return (
      <div
        className={`nav-item ${
          isActive ? "active-nav-item" : ""
        } relative px-4 py-2 cursor-pointer hover:bg-teal-500 dark:hover:bg-[#2d3748] rounded-md transition-all duration-200`}
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
        <span className="z-10">{sectionName}</span>
        {isActive && (
          <span
            className="absolute inset-0 border border-[#1a202c] dark:border-[#f7fafc] rounded-[0.5rem] hover:scale-105 pointer-events-none"
            style={{
              transition: "transform 0.2s ease, border-color 0.3s ease",
              border: "2px solid #1a202c !important",
            }}
          ></span>
        )}
      </div>
    );
  };

  const NavItemExternal = ({ path, sectionName, shouldOpenInNewTab }) => (
    <div
      className={`cursor-pointer flex items-center gap-1 hover:text-blue-400 ${
        isHamburgerMenu
          ? "text-base max-[1024px]:ml-1"
          : "max-[1500px]:text-base max-[1270px]:text-sm"
      }`}
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
  );

  const SocialMediaLink = ({ icon, link, ariaLabel }) => (
    <a
      className={`${
        isHamburgerMenu ? "text-xl" : "text-2xl max-[1200px]:text-base"
      }`}
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
      {/* Overlay for Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Navbar */}
      <nav className="fixed top-0 py-4 right-0 w-full bg-white dark:bg-gray-900 z-50 shadow-lg">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center text-2xl whitespace-nowrap nav-name max-[1200px]:text-xl max-[1024px]:text-3xl max-[640px]:text-xl">
            Richard Lechko
          </div>
          {/* Full Navbar */}
          {!isHamburgerMenu ? (
            <ul className="flex items-center justify-between w-full">
              {/* Left-aligned Navigation Items (Centered on the Left) */}
              <li className="flex items-center justify-center mx-auto">
                <pre className="bg-gradient-to-br from-[#e2e8f0] via-[#edf2f7] to-[#ffffff] dark:bg-gradient-to-br dark:from-[#0a0a0a] dark:via-[#23272a] dark:to-[#1a202c] p-4 rounded-md shadow-lg overflow-auto space-x-10 flex max-[1440px]:space-x-2">
                  {[
                    { id: "personal", name: "《Home》" },
                    { id: "projects", name: "[Projects]" },
                    { id: "work", name: "「Work」" },
                    { id: "education", name: "{Education}" },
                    { id: "skills", name: "⟨Skills⟩" },
                    { id: "contact", name: "〔Contact〕" },
                  ].map(({ id, name }) => (
                    <NavItem key={id} sectionId={id} sectionName={name} />
                  ))}
                </pre>
              </li>

              {/* Right-aligned Theme Toggle & Social Media Links */}
              <li className="flex items-center gap-6 max-[1440px]:gap-3">
                <ThemeToggle />
                <NavItemExternal
                  path="https://public-notes-page-react.vercel.app/"
                  sectionName="Blog"
                  shouldOpenInNewTab
                />
                {[
                  {
                    icon: (
                      <icons.ImGithub className="text-3xl hover:scale-90 transform transition duration-150 max-[1400px]:text-2xl" />
                    ),
                    link: "https://github.com/richardlechko",
                    ariaLabel: "Visit my GitHub profile",
                  },
                  {
                    icon: (
                      <icons.FaLinkedin className="text-3xl hover:scale-90 transform transition duration-150 max-[1400px]:text-2xl" />
                    ),
                    link: "https://www.linkedin.com/in/richard-lechko",
                    ariaLabel: "Visit my LinkedIn profile",
                  },
                ].map(({ icon, link, ariaLabel }, index) => (
                  <SocialMediaLink
                    key={index}
                    icon={icon}
                    link={link}
                    ariaLabel={ariaLabel}
                  />
                ))}
              </li>
            </ul>
          ) : (
            // Hamburger Menu for Smaller Screens
            <div className="flex items-center gap-4 ml-auto">
              <ThemeToggle />
              <button
                className="text-3xl cursor-pointer max-[425px]:text-2xl"
                onClick={() => setIsSidebarOpen((prev) => !prev)}
              >
                &#9776;
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Sidebar for Smaller Screens */}
      {isHamburgerMenu && (
        <div
          className={`fixed left-0 pt-10 top-[64px] h-[calc(100%-64px)] w-[200px] bg-white dark:bg-gray-900 z-40 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300`}
        >
          <ul className="flex flex-col pl-8 py-2 gap-4">
            {[
              { id: "personal", name: "Home" },
              { id: "projects", name: "Projects" },
              { id: "work", name: "Work" },
              { id: "education", name: "Education" },
              { id: "skills", name: "Skills" },
              { id: "contact", name: "Contact" },
            ].map(({ id, name }) => (
              <NavItem key={id} sectionId={id} sectionName={name} />
            ))}
          </ul>

          {/* Sidebar Social Media */}
          <div>
            <div className="flex flex-row mt-8 gap-4 pl-8">
              {[
                {
                  icon: <icons.ImGithub className="text-3xl" />,
                  link: "https://github.com/richardlechko",
                  ariaLabel: "Visit my GitHub profile",
                },
                {
                  icon: <icons.FaLinkedin className="text-3xl" />,
                  link: "https://www.linkedin.com/in/richard-lechko",
                  ariaLabel: "Visit my LinkedIn profile",
                },
              ].map(({ icon, link, ariaLabel }, index) => (
                <SocialMediaLink
                  key={index}
                  icon={icon}
                  link={link}
                  ariaLabel={ariaLabel}
                />
              ))}
            </div>
            <div className="flex flex-col mt-4 gap-4 pl-8">
              <NavItemExternal
                path="https://public-notes-page-react.vercel.app/"
                sectionName="Blog"
                shouldOpenInNewTab
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
