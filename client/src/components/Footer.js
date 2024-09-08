import { DiGithubBadge } from "react-icons/di";
import { useState } from "react";
import { FaSoundcloud, FaSpotify, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = ({ refs }) => {
  const navigate = useNavigate();

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
    navigate(path);
  };

  return (
    <footer className="bg-[#002240] text-[#fff] p-8 w-full">
      <div className="max-w-screen-xl mx-auto">
        <h1
          id="footer-h1"
          className="font-mono text-5xl text-center font-bold pb-8"
        >
          About Me ~ Richard Lechko
        </h1>

        <p
          id="copyright"
          className="pb-4 text-gray-400 text-xl text-center mb-6"
        >
          &copy; {new Date().getFullYear()} Richard Lechko | All Rights Reserved
        </p>

        <nav id="nav-link">
          <ul className="link-container">
            <FooterLink
              link="/"
              linkName="Home"
              handleClick={handleNavClick}
              sectionId="personal"
            />
            <FooterLink
              link="/"
              linkName="Personal"
              handleClick={handleNavClick}
              sectionId="personal"
            />
            <FooterLink
              link="/"
              linkName="Skills"
              handleClick={handleNavClick}
              sectionId="skills"
            />
            <FooterLink
              link="/"
              linkName="Work"
              handleClick={handleNavClick}
              sectionId="work"
            />
            <FooterLink
              link="/"
              linkName="Education"
              handleClick={handleNavClick}
              sectionId="education"
            />
            <FooterLink
              link="/contact"
              linkName="Contact"
              handleClick={handleExternalNavClick}
            />
            <FooterLink
              link="/widgets"
              linkName="Widgets"
              handleClick={handleExternalNavClick}
            />
          </ul>
        </nav>

        <div id="icon-links" className="flex justify-center gap-4 mb-6">
          <IconLink
            link="https://github.com/RichardLechko"
            img={<DiGithubBadge />}
            hover="#333"
          />
          <IconLink
            link="https://www.linkedin.com/in/richard-lechko/"
            img={<FaLinkedin />}
            hover="#0077b5"
          />
          <IconLink
            link="https://open.spotify.com/user/22j4lmvcuabn2joznuzxd3pdy?si=be67aa3576934843"
            img={<FaSpotify />}
            hover="#1db954"
          />
          <IconLink
            link="https://soundcloud.com/richardlechko"
            img={<FaSoundcloud />}
            hover="#ff7700"
          />
        </div>

        <LastModified />
      </div>
    </footer>
  );
};

const FooterLink = ({ link, linkName, handleClick, sectionId }) => (
  <li>
    <button
      onClick={() => (sectionId ? handleClick(sectionId) : handleClick(link))}
    >
      <span>{linkName}</span>
    </button>
  </li>
);

const IconLink = ({ link, img, hover }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="text-4xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ color: isHovered ? hover : "inherit" }}
    >
      {img}
    </a>
  );
};

const LastModified = () => {
  const lastModified = new Date(document.lastModified);
  const formattedDate = `${
    lastModified.getMonth() + 1
  }/${lastModified.getDate()}/${lastModified.getFullYear()}`;
  return (
    <div className="text-center text-gray-400 mt-4">
      <p>Last Modified: {formattedDate}</p>
    </div>
  );
};

export default Footer;
