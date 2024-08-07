const Work = () => {
  return (
    <section className="container flex flex-col m-auto main-content" id="work">
      <div className="mt-16 mx-auto justify-around px-16 py-0 pt-16 flex flex-wrap gap-6 ">
        <h1 className="text-4xl mb-12 font-bold text-center">
          Work Experience:
        </h1>
        <div className="flex flex-col container m-auto">
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
    <div>
      <div className="container flex flex-row border-b-4 border-black mb-8">
        <div className="flex flex-col mr-24 text-black text-xl leading-10 font-bold w-60 ">
          <h4>{companyName}</h4>
          <time>
            {startTime} - {endTime}
          </time>

          <address>{address}</address>
          <p className="mb-4">
            <span className="border-b-2 border-black ">{position}</span>
          </p>
        </div>

        <div className="text-darkviolet text-xl flex flex-col leading-[3rem] list-disc container">
          <ul>
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
