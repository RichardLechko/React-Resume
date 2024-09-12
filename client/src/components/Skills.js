import React, { Suspense } from "react";
import {
  DiJava,
  DiPython,
  DiJavascript1,
  DiWindows,
  DiLinux,
  DiApple,
  DiNodejsSmall,
  DiReact,
  DiAngularSimple,
  DiDatabase,
  DiHtml5,
  DiCss3,
  DiGithubBadge,
  DiNginx,
  DiPostgresql,
  DiGit,
} from "react-icons/di";

import {
  FaSitemap,
  FaDesktop,
  FaCode,
  FaPalette,
  FaMicrochip,
  FaUsers,
  FaMap,
  FaCloud,
} from "react-icons/fa";
import { BiCodeCurly } from "react-icons/bi";
import { SiMicrosoftexcel } from "react-icons/si";
import { PiFileSqlFill } from "react-icons/pi";
import { MdTerminal, MdDashboardCustomize } from "react-icons/md";
import {
  TbBrandTailwind,
  TbBrandFigma,
  TbBrandBootstrap,
} from "react-icons/tb";

const Skills = () => {
  return (
    <div>
      <section className="container flex flex-col m-auto" id="skills">
        <div className="mt-16 mx-auto justify-around px-6 py-0 pt-16 flex flex-wrap gap-6">
          <div className="w-full mb-8 text-center life-text smallText">
            <h1 className="text-4xl mb-4 font-bold max-[640px]:text-3xl max-[425px]:text-2xl">
              Technical Skills:
            </h1>
            <p className="text-xl max-[425px]:text-base text-center">
              I have given a rating from 1-10, categorizing my understanding and
              expertise of these skills. Hover over the image to see the rating!
            </p>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <SkillsCard
              head={"OOP"}
              iconOne={<DiJava className="text-4xl" />}
              iconTwo={<DiPython className="text-4xl" />}
              iconThree={<DiJavascript1 className="text-4xl text-black" />}
              iconOneH={"Java"}
              iconTwoH={"Python"}
              iconThreeH={"JavaScript"}
              bgColorOne="#FF6F61"
              bgColorTwo="#4CAF50"
              bgColorThree="#F7DF1E"
              ratingOne={8}
              ratingTwo={9}
              ratingThree={10}
            />
            <SkillsCard
              head={"OS"}
              iconOne={<DiWindows className="text-4xl" />}
              iconTwo={<DiLinux className="text-4xl" />}
              iconThree={<DiApple className="text-4xl" />}
              iconOneH={"Windows"}
              iconTwoH={"Linux"}
              iconThreeH={"Apple"}
              ratingOne={10}
              ratingTwo={10}
              ratingThree={10}
              bgColorOne="#0078D4"
              bgColorTwo="#FCC624"
              bgColorThree="#A2AAAD"
            />
            <SkillsCard
              head={"JS Frameworks"}
              iconOne={<DiNodejsSmall className="text-4xl" />}
              iconTwo={<DiReact className="text-4xl" />}
              iconThree={<DiAngularSimple className="text-4xl" />}
              iconOneH={"Node JS"}
              iconTwoH={"React"}
              iconThreeH={"Angular"}
              ratingOne={10}
              ratingTwo={9}
              ratingThree={7}
              bgColorOne="#8CC84B"
              bgColorTwo="#61DAFB"
              bgColorThree="#DD0031"
            />
            <SkillsCard
              head={"Comp Sci"}
              iconOne={<FaSitemap className="text-4xl" />}
              iconTwo={<DiDatabase className="text-4xl" />}
              iconThree={<FaDesktop className="text-4xl" />}
              iconOneH={"Computer Net."}
              iconTwoH={"Data Structures"}
              iconThreeH={"Computer Systems"}
              ratingOne={8}
              ratingTwo={8}
              ratingThree={8}
              bgColorOne="#009B77"
              bgColorTwo="#F6C91D"
              bgColorThree="#4B4F56"
            />
            <SkillsCard
              head={"Web Dev CI/CD"}
              iconOne={<FaCode className="text-4xl" />}
              iconTwo={<BiCodeCurly className="text-4xl" />}
              iconThree={<FaPalette className="text-4xl" />}
              iconOneH={"FE Web Development"}
              iconTwoH={"BE Web Development"}
              iconThreeH={"UI/UX Design"}
              ratingOne={10}
              ratingTwo={10}
              ratingThree={10}
              bgColorOne="#FF6F61"
              bgColorTwo="#3B82F6"
              bgColorThree="#FBBF24"
            />
            <SkillsCard
              head={"Web Dev Languages"}
              iconOne={<DiHtml5 className="text-4xl" />}
              iconTwo={<DiCss3 className="text-4xl" />}
              iconThree={<DiJavascript1 className="text-4xl text-black" />}
              iconOneH={"HTML5"}
              iconTwoH={"CSS3"}
              iconThreeH={"JavaScript"}
              ratingOne={10}
              ratingTwo={10}
              ratingThree={10}
              bgColorOne="#E34F26"
              bgColorTwo="#1572B6"
              bgColorThree="#F7DF1E"
            />
            <SkillsCard
              head={"Other"}
              iconOne={<SiMicrosoftexcel className="text-4xl" />}
              iconTwo={<DiGithubBadge className="text-4xl text-white" />}
              iconThree={<PiFileSqlFill className="text-4xl" />}
              iconOneH={"Excel"}
              iconTwoH={"GitHub"}
              iconThreeH={"SQL"}
              ratingOne={9}
              ratingTwo={10}
              ratingThree={9}
              bgColorOne="#217346"
              bgColorTwo="#181717"
              bgColorThree="#003B57"
            />
            <SkillsCard
              head={"Open Source Tools"}
              iconOne={<DiGit className="text-4xl" />}
              iconTwo={<DiPostgresql className="text-4xl" />}
              iconThree={<DiNginx className="text-4xl text-white" />}
              iconOneH={"Git"}
              iconTwoH={"PostgreSQL"}
              iconThreeH={"Nginx"}
              ratingOne={10}
              ratingTwo={8}
              ratingThree={9}
              bgColorOne="#F05032"
              bgColorTwo="#009639"
              bgColorThree="#336791"
            />
            <SkillsCard
              head={"AWS"}
              iconOne={<FaMicrochip className="text-4xl" />}
              iconTwo={<FaMap className="text-4xl text-white" />}
              iconThree={<FaCloud className="text-4xl" />}
              iconOneH={"EC2"}
              iconTwoH={"Route 53"}
              iconThreeH={"AWS Amplify"}
              bgColorOne="#FF9900"
              bgColorTwo="#232F3E"
              bgColorThree="#FF9900"
              ratingOne={10}
              ratingTwo={10}
              ratingThree={10}
            />
            <SkillsCard
              head={"DevOps"}
              iconOne={<MdTerminal className="text-4xl text-white" />}
              iconTwo={<MdDashboardCustomize className="text-4xl" />}
              iconThree={<FaUsers className="text-4xl" />}
              iconOneH={"Bash"}
              iconTwoH={"Agile"}
              iconThreeH={"MS Teams"}
              bgColorOne="#2D2D2D"
              bgColorTwo="#00BFAE"
              bgColorThree="#6264A7"
              ratingOne={8}
              ratingTwo={9}
              ratingThree={10}
            />
            <SkillsCard
              head={"UI/UX Design"}
              iconOne={<TbBrandTailwind className="text-4xl" />}
              iconTwo={<TbBrandFigma className="text-4xl" />}
              iconThree={<TbBrandBootstrap className="text-4xl" />}
              iconOneH={"TailwindCSS"}
              iconTwoH={"Figma"}
              iconThreeH={"Bootstrap"}
              bgColorOne={"#3B82F6"}
              bgColorTwo={"#0ACF83"}
              bgColorThree={"#0D6EFD"}
              ratingOne={10}
              ratingTwo={8}
              ratingThree={9}
            />
          </Suspense>
        </div>
      </section>

      <section className="container flex flex-col m-auto">
        <div className="mt-16 mx-auto justify-around px-6 py-0 flex flex-wrap gap-6">
          <h1 className="text-center text-4xl mb-4 font-bold max-[640px]:text-3xl max-[425px]:text-2xl">
            Non-Technical Skills:
          </h1>
          <div className="w-full my-20 mx-auto flex flex-wrap gap-6 md:gap-8 justify-center">
            <NonTechSkills text={"Excel in rapidly changing environments"} />
            <NonTechSkills text={"Proficient technical writing"} />
            <NonTechSkills
              text={"Great team collaboration from various backgrounds"}
            />
            <NonTechSkills text={"A performance-oriented nature"} />
            <NonTechSkills text={"Creative conflict resolution"} />
            <NonTechSkills text={"Maintain an optimistic outlook"} />
            <NonTechSkills text={"Identify and focus on priorities"} />
            <NonTechSkills text={"Introduce new and creative solutions"} />
            <NonTechSkills text={"Communicate ideas effectively"} />
            <NonTechSkills text={"Proactively take on responsibilities"} />
          </div>
        </div>
      </section>
    </div>
  );
};

const SkillsCard = ({
  head,
  iconOne,
  iconTwo,
  iconThree,
  iconOneH,
  iconTwoH,
  iconThreeH,
  ratingOne,
  ratingTwo,
  ratingThree,
  bgColorOne,
  bgColorTwo,
  bgColorThree,
}) => {
  const averageRating = ((ratingOne + ratingTwo + ratingThree) / 3).toFixed(1);

  return (
    <div className="relative p-8 max-md:p-4 bg-gray-800 text-white rounded-xl shadow-lg hover:translate-y-[-15px]  transition-transform duration-200 ease-in group">
      <h4 className="text-xl text-center font-bold mb-8">
        <span className="border-b-2 border-white">{head}</span>
      </h4>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center mb-4 max-md:mb-0">
            <div
              className="w-20 h-20 flex items-center justify-center rounded-lg text-5xl max-md:w-16 max-md:h-16"
              style={{ backgroundColor: bgColorOne }}
            >
              {iconOne}
            </div>
            <div className="text-lg font-semibold mt-2">{iconOneH}</div>
            <div className="text-sm text-white bg-gray-900 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
              {ratingOne}/10
            </div>
          </div>
          <div className="flex flex-col gap-4 md:flex-row max-md:gap-0">
            <div className="flex flex-col items-center">
              <div
                className="w-20 h-20 flex items-center justify-center rounded-lg text-5xl max-md:w-16 max-md:h-16"
                style={{ backgroundColor: bgColorTwo }}
              >
                {iconTwo}
              </div>
              <div className="text-lg font-semibold mt-2">{iconTwoH}</div>
              <div className="text-sm text-white bg-gray-900 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                {ratingTwo}/10
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="w-20 h-20 flex items-center justify-center rounded-lg text-5xl max-md:w-16 max-md:h-16"
                style={{ backgroundColor: bgColorThree }}
              >
                {iconThree}
              </div>
              <div className="text-lg font-semibold mt-2">{iconThreeH}</div>
              <div className="text-sm text-white bg-gray-900 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                {ratingThree}/10
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute rounded-xl hover:rounded-xl inset-0 bg-gray-800 bg-opacity-75 flex text-center items-center justify-center text-xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p>Average Rating: {averageRating}/10</p>
      </div>
    </div>
  );
};

const NonTechSkills = ({ text }) => {
  return (
    <div className="p-4 border-solid border-black border-4 bg-[#333] text-white rounded-2xl font-bold text-base md:text-xl max-[768px]:text-center transition-transform duration-200 ease-in hover:translate-y-[-10px]">
      <h4>{text}</h4>
    </div>
  );
};

export default Skills;
