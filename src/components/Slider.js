import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const CourseSlider = ({ courses }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? courses.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === courses.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative max-w-[1400px] h-[450px] w-full m-auto mb-16 py-16 px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl mt-12 sm:mt-16 mb-6 sm:mb-8 font-bold text-center">
        Relevant Coursework:
      </h1>
      <div className="w-full h-full rounded-2xl bg-gray-900 relative">
        <div className="flex flex-col justify-center items-center h-full text-center transition-transform duration-500 ease-in-out">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            {courses[currentIndex].title}
          </h2>
          <ul className="mt-4 text-white">
            {courses[currentIndex].description.map((item, index) => (
              <li key={index} className="text-lg">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div
          id="bL"
          className="absolute top-1/2 left-5 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer z-4"
        >
          <BsChevronCompactLeft
            className="max-sm:size-6"
            onClick={prevSlide}
            size={30}
          />
        </div>
        <div
          id="bR"
          className="absolute top-1/2 right-5 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer z-4"
        >
          <BsChevronCompactRight
            className="max-sm:size-6"
            onClick={nextSlide}
            size={30}
          />
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {courses.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`cursor-pointer text-2xl ${
                currentIndex === slideIndex
                  ? "text-yellow-400"
                  : "text-gray-600"
              }`}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSlider;
