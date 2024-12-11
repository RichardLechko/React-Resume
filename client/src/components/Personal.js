import React, { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa6";

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
    <section id="personal">
      <div className="personal-content">
        <div>
          <h1 className="content-backdrop">
            Hey, I'm Richard Lechko (letch·koh)👋
          </h1>
          <div className="personal-based-in-and-time content-backdrop">
            <p>Based in Chicago, IL.</p>
            <div>
              <span
                onMouseEnter={() => setIsSameTimezone(true)}
                onMouseLeave={() => setIsSameTimezone(false)}
              >
                {currentTime} CST (UTC-06)
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="personal-info-spotify">
        <p className="content-backdrop">
          I'm a web developer focused on building innovative and user-friendly
          applications. When I'm not coding, I enjoy playing video games, going
          to concerts, and going on walks.
        </p>
      </div>

      <div className="personal-resume-content">
        <h2>Resume</h2>
        <p>Quick download or view available:</p>
        <div>
          <a
            href="/resumes/Richard_Lechko_Resume.docx"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <FaDownload /> <span>DOCX</span>
            </span>
          </a>
          <a
            href="/resumes/Richard_Lechko_Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <FaDownload /> <span>PDF</span>
            </span>
          </a>
          <a
            href="/resumes/Richard_Lechko_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Personal;
