import React, { useState, useEffect } from "react";
import { FaAnglesUp } from "react-icons/fa6";

const Personal = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="personal"
      className=" container flex flex-col mx-auto p-4  main-content"
    >
      <div className="mt-24 mx-auto justify-around px-8  py-0 flex flex-wrap gap-6">
        <h1 className="text-4xl mb-4 font-bold fontName">Personal Life:</h1>
        <div className="life-text smallText ">
          <p className="mb-6 leading-relaxed">
            <span>
              Born and raised in a small suburb in Illinois, with nationality
              being Belarussian. I grew up speaking Russian.
            </span>
          </p>
          <p className="mb-6 leading-relaxed">
            <span>
              I have always been fascinated with computers. Specifically with
              computer systems, operating systems, the internet, the cloud, web
              development, and lots more.
            </span>
          </p>
          <p className="mb-6 leading-relaxed">
            <span>
              My other interests other than computers is philosophy. Another big
              interest of mine is Economics.
            </span>
            <li className="pl-16 pt-6 leading-10 text-black" id="personal-item">
              Fun Fact: I have my own section in the{" "}
              <a
                className="text-blue-900 underline"
                href="https://www.lewrockwell.com/"
                target="_blank"
                rel="noreferrer"
              >
                Lew Rockwell
              </a>
              , about the{" "}
              <a
                className="text-blue-900 underline"
                target="_blank"
                href="https://www.lewrockwell.com/lrc-blog/is-there-a-right-to-life-in-the-libertarian-philosphy/"
                rel="noreferrer"
              >
                distinction between positive rights and negative rights
              </a>
              . I was 16 years at the time of writing this email, in my Junior
              year of High School; I am now in college, and I am still a huge
              fan of studying economics purely just for fun.
            </li>
          </p>
          <p className="mb-6 leading-relaxed">
            <span>
              Another interest of mine is music. Follow me on{" "}
              <a
                className="text-[#1db954]"
                href="https://open.spotify.com/user/22j4lmvcuabn2joznuzxd3pdy?si=be67aa3576934843"
                target="_blank"
                id="spotify"
                rel="noreferrer"
              >
                Spotify
              </a>
              !
            </span>
          </p>
          <p className="mb-6 leading-relaxed">
            <span>
              I love to make projects that serve a purpose. Whether that is
              increasing my knowledge on a topic (like this one), to reach an
              important deadline for an assignment, or to help others learn.
            </span>
          </p>
        </div>
      </div>
      {showScrollToTop && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-4 right-4 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-300"
          aria-label="Scroll to top"
        >
          <FaAnglesUp size={24} />
        </button>
      )}
    </section>
  );
};

export default Personal;
