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
    <footer className="bg-[#002240] text-[#fff] p-8 w-full min-w-full">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="font-mono text-3xl text-center font-bold">
          About Me ~ Richard Lechko
        </h1>

        <p className="pb-4 text-gray-400 text-lg text-center">
          &copy; {new Date().getFullYear()} Richard Lechko | All Rights Reserved
        </p>

        <nav>
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

const LastModified = () => {
  const lastModified = new Date(document.lastModified);
  const formattedDate = `${
    lastModified.getMonth() + 1
  }/${lastModified.getDate()}/${lastModified.getFullYear()}`;
  return (
    <div className="text-center text-gray-400">
      <p>Last Modified: {formattedDate}</p>
    </div>
  );
};

export default Footer;
