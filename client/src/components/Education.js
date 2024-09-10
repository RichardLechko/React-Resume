import React from "react";

const Education = () => {
  return (
    <div className="container flex flex-col m-auto">
      <section className="container mx-auto flex flex-col items-center mt-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl mt-12 sm:mt-16 mb-6 sm:mb-8 font-bold text-center">
          Education
        </h1>
        <p className="text-center text-2xl pl-8 pr-8 mb-8 max-[768px]:text-xl max-[425px]:text-base">
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
        <p className="text-center text-2xl mb-8 max-[768px]:text-xl max-[425px]:text-base">
          Major GPA: 3.5/4.0
        </p>
        <div className="text-center text-2xl mb-8 max-[768px]:text-xl max-[425px]:text-base">
          <p className="font-bold mb-4">Organizations:</p>
          <ul className="list-disc flex flex-col gap-4 list-inside max-[768px]:text-lg max-[640px]:pl-8 max-[640px]:pr-8 max-[425px]:text-base">
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

        <p className="text-center text-2xl mb-8 max-[768px]:text-xl max-[425px]:text-base">
          2-time Dean's List student.
        </p>
        <p className="text-center text-2xl max-[768px]:text-xl max-[425px]:text-base">
          <span className="underline ">Enrollment: 9/2022 - 6/2026</span>
        </p>
      </section>
    </div>
  );
};

export default Education;
