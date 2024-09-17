import React from "react";

const Education = () => {
  return (
    <div className="container flex flex-col m-auto p-8 pt-32">
      {/* Hero Section */}
      <section className="text-center bg-gray-100 py-8 px-4 rounded-lg shadow-lg mb-12">
        <h1 className="text-4xl mb-4 font-bold max-[640px]:text-3xl max-[425px]:text-2xl">
          Education
        </h1>
        <p className="text-xl max-[768px]:text-xl max-[640px]:text-base">
          Full-time student at{" "}
          <a
            className="underline font-bold"
            href="https://www.depaul.edu/Pages/default.aspx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-red-600">DePaul</span>{" "}
            <span className="text-blue-600">University</span>
          </a>
          , pursuing a Bachelor's in Information Technology with a concentration
          in Web Development.
        </p>
      </section>

      {/* Two-Column Layout */}
      <section className="grid grid-cols-2 gap-8 max-[768px]:grid-cols-1">
        {/* Major GPA */}
        <div className="bg-white p-8 shadow-md rounded-lg flex flex-col">
          <h2 className="text-2xl font-bold m-auto">Major GPA</h2>
          <p className="text-xl max-[425px]:text-base m-auto">3.5 / 4.0</p>
        </div>

        {/* Organizations */}
        <div className="bg-white p-8 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Organizations</h2>
          <ul className="list-disc pl-6 text-left">
            <li>DePaul Computer Science Society</li>
            <li>DePaul Math Club</li>
            <li>DePaul Chess Club</li>
            <li>DePaul User Experience Association</li>
          </ul>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-gray-50 py-8 mt-12 text-center rounded-lg shadow-lg">
        <p className="text-2xl font-bold max-[768px]:text-xl max-[425px]:text-base">
          2-time Dean's List student
        </p>
      </section>

      {/* Graduation */}
      <section className="bg-white py-8 mt-8 text-center rounded-lg shadow-md">
        <p className="text-2xl font-bold max-[768px]:text-xl max-[425px]:text-base">
          Expected Graduation: <span className="underline">06/2026</span>
        </p>
      </section>
    </div>
  );
};

export default Education;
