import React from "react";
import { FaDownload } from "react-icons/fa6";
import "../styles/contact.css";

const Personal = () => {
  return (
    <section
      id="personal"
      className="container mx-auto pt-32 flex flex-col items-center justify-center px-4 md:px-8"
    >
      <div className="flex items-center text-center max-[640px]:flex-col">
        <img
          src="/myself/myself.jpg"
          alt="Richard Lechko"
          className="rounded-full w-24 h-32 mb-4 max-[640px]:mb-8"
        />
        <div className="ml-4 text-left flex flex-col space-y-2">
          <h1 className="text-5xl font-bold max-[1024px]:text-3xl">
            Hey, I'm Richard Lechko (lech·koh)
          </h1>
          <p className="text-lg text-gray-500">Based in Chicago, IL.</p>
        </div>
      </div>

      <div className="flex justify-center my-6">
        <div
          id="resume-container"
          className="bg-stone-200 dark:bg-zinc-900 p-6 rounded-xl max-w-xl mx-auto flex flex-col items-center overflow-hidden"
        >
          <h2 className="text-[2rem] my-2 text-center font-bold">
            <span className="resume-icon text-[2rem] inline-block mr-4">
              📄
            </span>
            Resume
          </h2>
          <p className="text-md m-2">Quick download or view available:</p>
          <div className="flex justify-center space-x-2 mt-3 button-container">
            <a
              id="download-docx"
              href="/resumes/Richard_Lechko_Resume.docx"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button docx-button"
            >
              <FaDownload /> DOCX
            </a>
            <a
              id="download-pdf"
              href="/resumes/Richard_Lechko_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button pdf-button text-center"
            >
              <FaDownload /> PDF
            </a>
            <a
              id="view-pdf"
              href="/resumes/Richard_Lechko_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button view-button text-center"
            >
              View PDF
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 w-1/2 mx-auto text-lg md:text-xl space-y-4 text-center max-[425px]:text-center personal-text">
        <p>
          I'm a web developer focused on building innovative and user-friendly
          applications. I work with various programming languages and frameworks
          and enjoy tackling complex challenges. Outside of coding, I like to
          play video games and listen to music.
        </p>
      </div>
    </section>
  );
};

export default Personal;
