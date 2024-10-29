import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#1a1a1a] py-8 px-4 text-center border-t border-gray-700 overflow-hidden footer-fade-in">
      <div className="max-w-screen-xl mx-auto relative z-10">
        <h1 className="font-mono text-4xl font-bold mb-4 sm:text-3xl xs:text-2xl transition-transform duration-300 hover:scale-105 hover:text-blue-400">
          <span className="inline-block transition-transform duration-300 hover:translate-y-1">
            Richard Lechko
          </span>
        </h1>
        <p className="pb-4 text-gray-400 text-lg sm:text-base xs:text-sm transition-opacity duration-300 text-highlight hover:opacity-70">
          &copy; {new Date().getFullYear()} Richard Lechko | All Rights Reserved
        </p>

        <div className="border-t border-gray-400 mb-4" />

        <div className="flex justify-center space-x-4 mt-4 text-[#e2e8f0]">
          <a
            href="https://github.com/RichardLechko"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon transition-transform duration-300 hover:text-blue-500"
            aria-label="Visit my GitHub profile"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/richard-lechko/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon transition-transform duration-300 hover:text-blue-500"
            aria-label="Visit my LinkedIn profile"
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

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 20%, transparent 20%, transparent 100%)
          `,
          backgroundSize: "20px 100%, 100% 20px",
          backgroundColor: "#1a1a1a",
        }}
      />
    </footer>
  );
};

export default Footer;
