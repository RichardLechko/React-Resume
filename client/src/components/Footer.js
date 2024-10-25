import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] py-8 px-4 text-center border-t border-gray-700 overflow-hidden footer-fade-in">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="font-mono text-4xl font-bold mb-4 sm:text-3xl xs:text-2xl transition-transform duration-300 hover:scale-105 hover:text-blue-400">
          <span className="inline-block transition-transform duration-300 hover:translate-y-1">
            Richard Lechko
          </span>
        </h1>
        <p className="pb-4 text-gray-400 text-lg sm:text-base xs:text-sm transition-opacity duration-300 text-highlight hover:opacity-70">
          &copy; {new Date().getFullYear()} Richard Lechko | All Rights Reserved
        </p>

        <div className="border-t border-gray-600 mb-4" />

        <div className="flex justify-center space-x-4 mt-4 text-[#e2e8f0]">
          <a
            href="https://github.com/RichardLechko"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon transition-transform duration-300 hover:text-blue-500"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/richard-lechko/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon transition-transform duration-300 hover:text-blue-500"
          >
            <FaLinkedin className="text-3xl" />
          </a>
        </div>

        <div className="mt-4 text-gray-400 transition-opacity duration-300 hover:opacity-70">
          <p>Follow me on social media!</p>
        </div>

        <div className="flex justify-center mt-4">
          <div className="w-12 h-1 bg-blue-500 animate-pulse rounded-lg" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
