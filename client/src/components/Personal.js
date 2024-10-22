// src/components/Personal.js

import React, { useState, useEffect } from "react";
import { FaAnglesUp } from "react-icons/fa6";
import debounce from "lodash.debounce";

const Personal = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = debounce(() => {
      setShowScrollToTop(window.scrollY > 300);
    }, 100);

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
      className="container flex flex-col mx-auto p-4 overflow-x-hidden"
    >
      <div className="pt-24 mx-auto justify-around px-8 py-0 flex flex-wrap gap-6">
        <h1 className="text-4xl mb-4 font-bold max-[640px]:text-3xl max-[425px]:text-2xl">
          Personal Life:
        </h1>
        <div className="text-xl max-[425px]:text-base">
          <p className="mb-6 leading-relaxed">
            Born and raised in a small suburb in Illinois, with nationality
            being Belarussian. I grew up speaking Russian.
          </p>
          <p className="mb-6 leading-relaxed">
            I have always been fascinated with computers, particularly computer
            systems, operating systems, the internet, the cloud, web
            development, and more.
          </p>
          <p className="mb-6 leading-relaxed">
            My other interests besides computers include philosophy and
            economics.
          </p>
          <ul className="pl-4 leading-relaxed mb-6">
            <li className="text-black leading-10 max-[640px]:leading-8">
              Fun Fact: I have my own section in the{" "}
              <a
                className="text-blue-900 font-bold"
                href="https://www.lewrockwell.com/"
                target="_blank"
                rel="noreferrer"
              >
                Lew Rockwell
              </a>
              , discussing the{" "}
              <a
                className="text-blue-900 underline font-bold"
                target="_blank"
                href="https://www.lewrockwell.com/lrc-blog/is-there-a-right-to-life-in-the-libertarian-philosphy/"
                rel="noreferrer"
              >
                distinction between positive rights and negative rights
              </a>
              . I was 16 at the time of writing this piece, in my junior year of
              high school. I am now in college, still a huge fan of studying
              economics purely for fun.
            </li>
          </ul>
          <p className="mb-6 leading-relaxed">
            Another interest of mine is music. Follow me on{" "}
            <a
              className="text-[#1db954] font-bold"
              href="https://open.spotify.com/user/22j4lmvcuabn2joznuzxd3pdy?si=be67aa3576934843"
              target="_blank"
              rel="noreferrer"
            >
              Spotify
            </a>
            !
          </p>
          <p className="mb-6 leading-relaxed">
            I love to create projects that serve a purpose, whether that's
            increasing my knowledge on a topic (like this one), meeting an
            important deadline, or helping others learn.
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
