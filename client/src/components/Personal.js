import React from "react";

const Personal = () => {
  return (
    <section
      id="personal"
      className="container mx-auto pt-32 flex flex-col items-center justify-center px-4 md:px-8 max-[1024px]:pt-32"
    >
      <div className="flex items-center text-center max-[640px]:flex-col ">
        <img
          src="/myself/myself.jpg"
          alt="Richard Lechko"
          className="rounded-full w-24 h-32 mb-4 max-[640px]:mb-8"
        />
        <h1 className="text-5xl font-bold max-[1024px]:text-3xl ml-4">
          Hey, I'm Richard Lechko (lech·koh)
        </h1>
      </div>
      <div className="flex justify-center my-6">
        <div id="resume-container" className="resume-card p-6">
          <h2
            id="resume-title"
            className="resume-title text-3xl font-bold mb-2"
          >
            <span className="resume-icon text-yellow-400">📄</span> Resume
          </h2>
          <p
            id="resume-description"
            className="resume-description text-md mb-4"
          >
            Quick download or view available:
          </p>
          <div className="flex justify-center gap-6 button-container">
            <a
              id="download-docx"
              href="/resumes/Richard_Lechko_Resume.docx"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button docx-button text-center"
            >
              Download DOCX
            </a>
            <a
              id="download-pdf"
              href="/resumes/Richard_Lechko_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button pdf-button text-center"
            >
              Download PDF
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

      <div className="mt-6 text-lg md:text-xl text-[#e2e8f0] space-y-4 text-left max-[425px]:text-center">
        <p>
          I'm a web developer focused on building innovative and user-friendly
          applications.
        </p>
        <p>
          I work with various programming languages and frameworks and enjoy
          tackling complex challenges.
        </p>
        <p>
          Outside of coding, I dive into tech blogs and contribute to online
          communities.
        </p>
      </div>
    </section>
  );
};

export default Personal;
