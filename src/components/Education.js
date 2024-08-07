const Education = () => {
  return (
    <div>
      <section
        className="container flex flex-col m-auto main-content"
        id="education"
      >
        <div className="mt-16 mx-auto justify-around px-16 py-0 pt-16 flex flex-wrap gap-6 ">
          <h1 className="text-4xl mb-12 font-bold text-center">Education:</h1>
          <div className="edu-text text-center">
            <p>
              Currently a full-time student at{" "}
              <a
                href="https://www.depaul.edu/Pages/default.aspx"
                target="_blank"
                rel="noreferrer"
              >
                DePaul{" "}
              </a>
              <a
                href="https://www.depaul.edu/Pages/default.aspx"
                target="_blank"
                id="uni"
                rel="noreferrer"
              >
                University
              </a>
              , pursuing a Bachelor's in Science, as a Information Technology
              major, with a concentration in Web Development.
            </p>
            <p>
              <span className="border-b-2 border-black font-bold text-black">
                Enrollment: 9/2022 - 6/2026
              </span>
            </p>
            <p>
              Currently looking for career internships, with the title of Web
              Developer, Front-End Web Developer, Back-End Web Developer, or
              UI/UX Designer (this may change in the future).
            </p>
          </div>
        </div>
      </section>

      <section className="container flex flex-col m-auto main-content">
        <div className="mt-16 mx-auto justify-around px-16 py-0 flex flex-wrap gap-6 ">
          <h1 className="text-4xl mb-12 font-bold text-center">
            Relevant Coursework:
          </h1>
          <div className="font-mono flex container">
            <ul className="flex flex-wrap w-full gap-[1px]">
              <CourseItem
                className={"Data Structures I & II"}
                classDescOne={"Data Structures"}
                classDescTwo={"Java"}
                classDescThree={"Recursion"}
              />
              <CourseItem
                className={"Computer Systems I"}
                classDescTwo={"Assembly Language"}
                classDescThree={"C Programming"}
                classDescFour={"Debuggers"}
              />

              <CourseItem
                className={"Discrete Math I & II"}
                classDescTwo={"Probability"}
                classDescThree={"Set Theory"}
                classDescFour={"Graph Theory"}
              />

              <CourseItem
                className={"Content Management Systems"}
                classDescTwo={"Enterprise Digital Media"}
                classDescThree={"Web Content Publication"}
                classDescFour={"Database-Driven Website"}
              />

              <CourseItem
                className={"Server-Side Web Development"}
                classDescTwo={"MVC Architectures"}
                classDescThree={"API Development"}
                classDescFour={"Code Libraries"}
              />

              <CourseItem
                className={"Introduction to Databases"}
                classDescOne={"Desktop Databases"}
                classDescTwo={"ER Diagrams"}
                classDescThree={"SQL Queries"}
              />

              <CourseItem
                className={"User-Centered Web Design"}
                classDescTwo={"Information Navigation"}
                classDescThree={"HTML & CSS"}
                classDescFour={"Standards Compliance"}
              />

              <CourseItem
                className={"Web Development I"}
                classDescOne={"Framework-Based"}
                classDescTwo={"Interactive"}
                classDescThree={"Dynamic"}
              />

              <CourseItem
                className={"Applied Networks and Security"}
                classDescTwo={"Security Measures"}
                classDescThree={"Client/Server Configuration"}
                classDescFour={"Network Administration"}
              />
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

const CourseItem = ({
  className,
  classDescOne,
  classDescTwo,
  classDescThree,
  classDescFour,
}) => {
  return (
    <li className="text-white bg-[#000] rounded-3xl p-8 mt-4 mr-auto mb-auto ml-auto">
      <h4 className="text-2xl">{className}</h4>
      <ul className="m-auto justify-center flex flex-col text-xl">
        {classDescOne && (
          <li className="m-4 list-disc ml-6">
            <span className="border-b-2 border-white">{classDescOne}</span>
          </li>
        )}
        {classDescTwo && (
          <li className="m-4 list-disc ml-6">
            <span className="border-b-2 border-white">{classDescTwo}</span>
          </li>
        )}
        {classDescThree && (
          <li className="m-4 list-disc ml-6">
            <span className="border-b-2 border-white">{classDescThree}</span>
          </li>
        )}
        {classDescFour && (
          <li className="m-4 list-disc ml-6">
            <span className="border-b-2 border-white">{classDescFour}</span>
          </li>
        )}
      </ul>
    </li>
  );
};

export default Education;
