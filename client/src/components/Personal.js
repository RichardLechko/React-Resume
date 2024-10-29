import React, { useState, useEffect } from "react";
import debounce from "lodash.debounce";
import { useScroll } from "./ScrollToTop.js";

const Personal = () => {
  const { scrollToTop } = useScroll();

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

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
      className="container mx-auto pt-32 overflow-x-hidden px-4 md:px-8"
    >
      <div className="mx-auto justify-around py-6 flex flex-col gap-6">
        <h1 className="text-4xl font-bold max-[640px]:text-3xl max-[425px]:text-2xl">
          Personal Life:
        </h1>
        <div className="text-base md:text-lg text-[#e2e8f0] px-5">
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
          <ul className="pl-8 leading-relaxed mb-6 list-disc">
            <li className="text-[#e2e8f0] leading-8">
              <span className="text-yellow-400 font-bold">Fun Fact:</span> I
              have my own section in the{" "}
              <a
                className="text-blue-500 font-bold hover:text-blue-300 transition duration-300"
                href="https://www.lewrockwell.com/"
                target="_blank"
                rel="noreferrer"
              >
                Lew Rockwell
              </a>
              , discussing the{" "}
              <a
                className="text-blue-500 underline hover:text-blue-300 transition duration-300"
                href="https://www.lewrockwell.com/lrc-blog/is-there-a-right-to-life-in-the-libertarian-philosphy/"
                target="_blank"
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
              className="text-[#1db954] font-bold hover:underline transition duration-300"
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
    </section>
  );
};

export default Personal;
