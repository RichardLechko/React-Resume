import React from "react";
import { FaDownload } from "react-icons/fa6";
import "../styles/contact.css";

const Personal = () => {
  return (
    <section
      id="personal"
      className="flex flex-col items-center justify-center px-4 md:px-8"
    >
      <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left">
        <img
          src="/myself/myself.jpg"
          alt="Richard Lechko"
          className="rounded-full w-24 h-32 mb-4 md:mb-0 md:mr-4"
        />
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-5xl font-bold max-[1024px]:text-3xl max-[640px]:text-[1.4rem]">
            Hey, I'm Richard Lechko (letch·koh)
          </h1>
          <p className="text-lg text-gray-500 max-[640px]:text-base">
            Based in Chicago, IL.
          </p>
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
          <p className="text-md m-2 text-center">
            Quick download or view available:
          </p>
          <div className="flex justify-center gap-4 mt-3 button-container">
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

      <div className="mt-6 w-1/2 max-[640px]:w-4/5 mx-auto text-lg md:text-xl space-y-4 text-center max-[425px]:text-center personal-text">
        <p>
          I'm a web developer focused on building innovative and user-friendly
          applications. When I'm not coding, I enjoy playing Old School
          RuneScape, going to concerts, and going on walks.
        </p>
      </div>
    </section>
  );
};

export default Personal;
