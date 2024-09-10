const Work = () => {
  return (
    <section className="container flex flex-col m-auto mb-24" id="work">
      <div className="mt-16 mx-auto justify-around px-4 py-0 pt-16 flex flex-wrap gap-6 ">
        <h1 className="text-4xl mb-4 font-bold max-[640px]:text-3xl max-[425px]:text-2xl">
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
  position,
  address,
  startTime,
  endTime,
  descOne,
  descTwo,
  descThree,
  descFour,
  link,
}) => {
  return (
    <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg">
      <div className="max-[640px]:text-center max-[640px]:mb-4 ">
        <h2 className="text-2xl font-semibold text-gray-800 max-[425px]:text-xl">
          {companyName}
        </h2>
        {position && (
          <h3 className="text-xl font-medium text-gray-700 max-[425px]:text-lg">
            {position}
          </h3>
        )}
        <p className="text-gray-500">{address}</p>
        <p className="text-black">
          {startTime} - {endTime}
        </p>
      </div>
      <ul className="list-disc pl-5 mt-2 text-gray-600">
        {descOne && <li>{descOne}</li>}
        {descTwo && <li>{descTwo}</li>}
        {descThree && <li>{descThree}</li>}
        {descFour && <li>{descFour}</li>}
      </ul>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline mt-2 block max-[640px]:text-center max-[640px]:font-bold"
        >
          View Project
        </a>
      )}
    </div>
  );
};

export default Work;
