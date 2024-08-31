import React from "react";

const Education = () => {
  return (
    /* <section className="container flex flex-col m-auto main-content" id="skills"> */
    <div id="education" className="container flex flex-col m-auto main-content">
      {/* Education Section */}
      <section className="container mx-auto flex flex-col items-center mt-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl mt-12 sm:mt-16 mb-6 sm:mb-8 font-bold text-center">
          Education
        </h1>
        <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl md:max-w-4xl">
          Currently a full-time student at{" "}
          <a
            className="underline font-bold"
            href="https://www.richardlechko.com"
          >
            <span className="text-red-600">DePaul</span>{" "}
            <span className="text-blue-600">University</span>
          </a>
          , pursuing a Bachelor's in Science in Information Technology, with a
          concentration in Web Development.
        </p>
        <p className="text-center text-base sm:text-lg md:text-xl mt-4">
          Major GPA: 3.5/4.0
        </p>
        <div className="text-center text-base sm:text-lg md:text-xl mt-4 max-w-2xl">
          <p className="font-bold">Organizations:</p>
          <ul className="list-disc list-inside">
            <li>
              Member of{" "}
              <span className="underline">DePaul Computer Science Society</span>
            </li>
            <li>
              Member of <span className="underline">DePaul Math Club</span>
            </li>
            <li>
              Member of <span className="underline">DePaul Chess Club</span>
            </li>
            <li>
              Member of{" "}
              <span className="underline">
                DePaul User Experience Association
              </span>
            </li>
          </ul>
        </div>

        <p className="text-center text-base sm:text-lg md:text-xl mt-4">
          2-time Dean's List student.
        </p>
        <p className="text-center text-lg sm:text-xl md:text-2xl mt-10 sm:mt-12">
          <span className="underline">Enrollment: 9/2022 - 6/2026</span>
        </p>
      </section>
    </div>
  );
};

export default Education;
