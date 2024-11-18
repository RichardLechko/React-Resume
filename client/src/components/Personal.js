import React, { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa6";
import "../styles/contact.css";
import Spotify from "./Spotify";

const Personal = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [isSameTimezone, setIsSameTimezone] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const cstOffset = -6;
      const userOffset = new Date().getTimezoneOffset() / 60;
      const isInSameTimezone = userOffset === cstOffset;

      setIsSameTimezone(isInSameTimezone);

      const options = { hour: "2-digit", minute: "2-digit", hour12: true };
      const now = new Date().toLocaleTimeString("en-US", options);
      setCurrentTime(now);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      id="personal"
      className="flex flex-col items-center justify-center px-4 md:px-8 max-[425px]:px-2 max-[375px]:px-1"
    >
      <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left mb-8 max-[768px]:mb-12">
        <img
          src="/myself/myself.jpg"
          alt="Richard Lechko"
          className="rounded-full w-24 h-32 mb-4 md:mb-0 md:mr-4"
        />
        <div className="flex flex-col items-center md:items-start ">
          <h1 className="text-5xl font-bold max-[1024px]:text-3xl max-[640px]:text-[1.3rem] max-[425px]:text-[1rem] max-[425px]:mr-auto">
            Hey, I'm Richard Lechko (letch·koh)
          </h1>
          <div className="flex items-center gap-4 text-lg max-[640px]:text-base max-[640px]:flex-col max-[640px]:mr-auto max-[375px]:text-sm">
            <p className="max-[640px]:mr-auto">Based in Chicago, IL.</p>
            <div className="relative">
              <span
                className="cursor-pointer"
                onMouseEnter={() => setIsSameTimezone(true)}
                onMouseLeave={() => setIsSameTimezone(false)}
              >
                ({currentTime} CST - hover to check timezone)
              </span>
              {isSameTimezone && (
                <div
                  className="absolute top-full mt-2 px-4 py-2 rounded-xl text-sm whitespace-nowrap shadow-sm bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100"
                  style={{ maxWidth: "100vw", whiteSpace: "normal" }}
                >
                  {`We're ${
                    isSameTimezone
                      ? "in the same timezone!"
                      : "in different timezones!"
                  }`}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Resume Container - Now centered without the timezone */}
      <div className="my-6 w-full flex justify-center">
        <div
          id="resume-container"
          className="bg-stone-200 dark:bg-zinc-900 p-6 rounded-xl max-w-xl w-full flex flex-col items-center overflow-hidden"
        >
          <h2 className="text-[2rem] my-2 text-center font-bold">Resume</h2>
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

      {/* Rest of the content */}
      <div className="mt-6 w-1/2 max-[640px]:w-4/5 mx-auto text-lg md:text-xl space-y-4 text-center max-[425px]:text-center max-[375px]:w-full">
        <p>
          I'm a web developer focused on building innovative and user-friendly
          applications. When I'm not coding, I enjoy playing video games, going
          to concerts, and going on walks. Follow me on{" "}
          <a
            href="https://open.spotify.com/user/22j4lmvcuabn2joznuzxd3pdy?si=b8273b935c894611"
            target="_blank"
            className="underline hover:text-green-500"
          >
            Spotify
          </a>
          !
        </p>
      </div>

      <div className="mt-6">
        <Spotify />
      </div>
    </section>
  );
};

export default Personal;
