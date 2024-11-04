import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer py-8 px-4 text-center bg-[#f5f3f5] dark:bg-[#2c2c2c] border-t border-[#bcbcbc] dark:border-[#6b4f4f]">
      <div className="max-w-screen-xl mx-auto relative z-10">
        <h1 className="text-4xl font-bold mb-4 sm:text-3xl xs:text-2xl text-[#333333] dark:text-[#ffffff] ">
          Richard Lechko
        </h1>
        <p className="pb-4 text-lg sm:text-base xs:text-sm text-[#333333] dark:text-[#ffffff]">
          &copy; {new Date().getFullYear()} Richard Lechko | All Rights Reserved
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://github.com/RichardLechko"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
            className="transition-transform duration-300 "
          >
            <FaGithub className="text-3xl text-[#333333] dark:text-[#ffffff] transition-transform duration-300 hover:scale-110 hover:text-blue-500 dark:hover:text-blue-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/richard-lechko/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
            className="transition-transform duration-300 "
          >
            <FaLinkedin className="text-3xl text-[#333333] dark:text-[#ffffff] transition-transform duration-300 hover:scale-110 hover:text-blue-500 dark:hover:text-blue-500" />
          </a>
        </div>
        <p className="mt-4 text-[#333333] dark:text-[#ffffff]">
          Follow me on social media!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
