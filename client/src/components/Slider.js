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
    <div
      id="test"
      className="container relative max-w-4xl mx-auto mb-8 py-4 px-4 lg:max-w-2xl md:max-w-xl sm:max-w-md xs:max-w-sm transition-all duration-300 max-[480px]:max-w-xs"
    >
      <h1 className="text-4xl text-center mb-4 font-bold max-[640px]:text-3xl max-[425px]:text-2xl">
        Relevant Coursework:
      </h1>
      <div className="container text-xl py-8 w-full text-center max-[425px]:text-base">
        <p className="mb-6 leading-relaxed">
          Here is the relevant coursework that I took at DePaul University.
          These classes are not exclusively related to Web Development, but have
          shaped my understanding of computers and engineering as a whole.
        </p>
      </div>
      <div className="w-full h-[300px] rounded-2xl bg-gray-900 relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {courses.map((course, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 bg-gray-900 rounded-lg p-4 flex flex-col justify-center items-center text-center"
            >
              <h2 className="text-base sm:text-xl font-bold text-yellow-400 mb-2">
                {course.title}
              </h2>
              <ul className=" mt-6 text-white text-xs sm:text-sm">
                {course.description.map((item, idx) => (
                  <li key={idx} className="mb-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
              className={`cursor-pointer text-lg transition-all duration-300 max-[375px]:text-sm ${
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
