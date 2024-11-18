import icons from "./icons";

const Footer = () => {
  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <footer className="mt-8 py-8 px-4 text-center bg-[#f5f3f5] dark:bg-[#2c2c2c] border-t border-[#bcbcbc] dark:border-[#6b4f4f]">
      <div className="max-w-screen-xl mx-auto relative z-10">
        <h1 className="text-4xl max-[640px]:text-3xl font-bold mb-4 text-[#333333] dark:text-[#ffffff]">
          Richard Lechko
        </h1>
        <p className="pb-4 text-lg max-[640px]:text-base max-[425px]:text-sm text-[#333333] dark:text-[#ffffff]">
          &copy; {new Date().getFullYear()} Richard Lechko | All Rights Reserved
        </p>
        <p className="text-sm text-[#333333] dark:text-[#ffffff]">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              openLink("https://github.com/RichardLechko");
            }}
            aria-label="Visit my GitHub profile"
            className="transition-transform duration-300"
          >
            <icons.ImGithub className="text-3xl text-[#333333] dark:text-[#ffffff] transition-transform duration-300 hover:scale-110 hover:text-blue-500 dark:hover:text-blue-500" />
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              openLink("https://www.linkedin.com/in/richard-lechko/");
            }}
            aria-label="Visit my LinkedIn profile"
            className="transition-transform duration-300"
          >
            <icons.FaLinkedin className="text-3xl text-[#333333] dark:text-[#ffffff] transition-transform duration-300 hover:scale-110 hover:text-blue-500 dark:hover:text-blue-500" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
