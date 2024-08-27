const Work = () => {
  return (
    <section
      className="container flex flex-col m-auto main-content mb-24"
      id="work"
    >
      <div className="mt-16 mx-auto justify-around px-4 sm:px-16 py-0 pt-16 flex flex-wrap gap-6 ">
        <h1 className="text-4xl mb-12 font-bold text-center">
          Work Experience:
        </h1>
        <div className="flex flex-col container m-auto gap-8">
          <Company
            companyName={"RL IT Firm"}
            position={"IT Consultant"}
            address={"Orland Park, IL"}
            startTime={"12/2022"}
            endTime={"Present"}
            descOne={
              "Designed and maintained a personal website showcasing technical skills, projects, and a coding playground."
            }
            descTwo={
              "Created a website for a local business, for free, enhancing their online presence."
            }
            descThree={null}
            descFour={null}
            link={"https://github.com/RichardLechko/freedombutchers"}
          />
          <Company
            companyName={"Mariano's"}
            address={"Orland Park, IL"}
            descOne={
              "Enhanced communication skills through daily interactions with diverse customers."
            }
            descTwo={null}
            descThree={
              "Developed resilience by handling demanding situations with a positive attitude."
            }
            descFour={
              "Expanded responsibilities over time, mastering various tasks and areas of the bakery."
            }
            startTime={"05/2022"}
            endTime={"Present"}
            position={"Bakery Clerk"}
          />
          <Company
            companyName={"McDonald's"}
            address={"Orland Park, IL"}
            descOne={
              "Strengthened teamwork abilities through collaboration on challenging tasks."
            }
            descTwo={
              "Improved problem-solving skills by addressing and resolving issues promptly."
            }
            descThree={null}
            descFour={null}
            startTime={"06/2023"}
            endTime={"Present"}
            position={"Morning Crew"}
          />
        </div>
      </div>
    </section>
  );
};

const Company = ({
  companyName,
  address,
  descOne,
  descTwo,
  descThree,
  descFour,
  startTime,
  endTime,
  position,
  link,
}) => {
  return (
    <div className="px-4 lg:px-8">
      <div
        id="workFunction"
        className="container flex flex-col lg:flex-row border-b-4 border-black"
      >
        {/* Company Info */}
        <div className="flex flex-col  text-black text-xl leading-10 font-bold w-full lg:w-60 pb-6 max-lg:pb-0 max-lg:mb-0">
          <h4 className="text-2xl mb-2">{companyName}</h4>
          <time className="text-lg text-gray-700">
            {startTime} - {endTime}
          </time>
          <address className="text-lg text-gray-600 pt-4">{address}</address>
          <p className="mt-4">
            <span className="border-b-2 border-black">{position}</span>
          </p>
        </div>

        {/* Work Descriptions */}
        <div className="text-darkviolet text-xl flex flex-col leading-8 md:leading-10 list-disc container justify-center max-xl:text-lg">
          <ul id="workText" className="space-y-2 max-2xl:pb-8">
            {descOne && <li>{descOne}</li>}
            {descTwo && <li>{descTwo}</li>}
            {descThree && <li>{descThree}</li>}
            {descFour && <li>{descFour}</li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Work;
