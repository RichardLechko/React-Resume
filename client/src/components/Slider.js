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
    <div className="relative max-w-4xl mx-auto mb-8 py-4 px-4 max-[1024px]:max-w-2xl">
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-4">
        Relevant Coursework:
      </h1>
      <div className="w-full h-[300px] rounded-2xl bg-gray-900 relative overflow-hidden">
        <div className="flex flex-col justify-center items-center h-full text-center px-4">
          <h2 className="text-base sm:text-lg font-bold text-yellow-400 mb-2">
            {courses[currentIndex].title}
          </h2>
          <ul className="mt-2 text-white text-xs sm:text-sm">
            {courses[currentIndex].description.map((item, index) => (
              <li key={index} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute top-1/2 left-2 transform -translate-y-1/2 text-lg rounded-full p-1 bg-black/50 text-white cursor-pointer z-5">
          <BsChevronCompactLeft onClick={prevSlide} size={20} />
        </div>
        <div className="absolute top-1/2 right-2 transform -translate-y-1/2 text-lg rounded-full p-1 bg-black/50 text-white cursor-pointer z-5">
          <BsChevronCompactRight onClick={nextSlide} size={20} />
        </div>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {courses.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`cursor-pointer text-lg ${
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
