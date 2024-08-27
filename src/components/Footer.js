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
      <div className="w-full my-6 mx-auto py-0 px-12 gap-4">
        <div className="w-full">
          <h1 className="font-mono text-5xl text-center font-bold pb-8">
            About Me ~ Richard Lechko
          </h1>
          <div className="flex m-auto justify-center mb-6">
            <p className="pb-4 text-gray-400 text-xl">
              &copy;{" "}
              <script>
                var today = new Date(); document.write(today.getFullYear());
              </script>
              Richard Lechko | All Rights Reserved&nbsp;|&nbsp;
            </p>
            <nav id="footer-links">
              <ul className="pb-4 text-gray-400 flex">
                <FooterLink
                  link="/"
                  linkName="Home"
                  handleClick={handleNavClick}
                  sectionId="personal"
                />
                <FooterLink
                  link="/"
                  linkName="Personal Life"
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
                  linkName="Work Experience"
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
          </div>
        </div>

        <div className="flex gap-16 m-auto justify-center">
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
          <LastModified />
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ link, linkName, handleClick, sectionId }) => {
  return (
    <li
      className="mr-4 cursor-pointer"
      onClick={() => (sectionId ? handleClick(sectionId) : handleClick(link))}
    >
      <button className="text-xl border-b-1 border-b-white border-b hover:text-red-500">
        {linkName}
      </button>
    </li>
  );
};

const IconLink = ({ link, img, hover }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link}
      className={`text-6xl relative`}
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
    <div id="lastModifiedText" className="mt-4 text-gray-400">
      <p>Last Modified: {formattedDate}</p>
    </div>
  );
};

export default Footer;
