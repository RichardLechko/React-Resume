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
} from "react-icons/di";
import {
  FaSitemap,
  FaDesktop,
  FaCode,
  FaPalette,
  FaFileCode,
  FaMicrochip,
  FaUsers,
  FaMap,
  FaSync,
} from "react-icons/fa";
import { BiCodeCurly } from "react-icons/bi";
import { SiMicrosoftexcel } from "react-icons/si";
import { PiFileSqlFill } from "react-icons/pi";
import { BsFillLockFill } from "react-icons/bs";
import { MdCable, MdTerminal, MdDashboardCustomize } from "react-icons/md";

const Skills = () => {
  return (
    <div>
      <section
        className="container flex flex-col m-auto main-content"
        id="skills"
      >
        <div className="mt-16 mx-auto justify-around px-6 py-0 pt-16 flex flex-wrap gap-6">
          <div className="w-full mb-8 text-center life-text smallText">
            <h1 className="text-3xl md:text-4xl mb-4 font-bold">
              Technical Skills:
            </h1>
            <p className="text-center text-base md:text-xl">
              I have given a rating from 1-10, categorizing my understanding and
              expertise of these skills. Hover over the image to see the rating!
            </p>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <SkillsCard
              head={"OOP"}
              iconOne={<DiJava size={50} />}
              iconTwo={<DiPython size={50} />}
              iconThree={<DiJavascript1 size={50} className="text-black" />}
              iconOneH={"Java"}
              iconTwoH={"Python"}
              iconThreeH={"JavaScript"}
              bgColorOne="#FF6F61" // Coral for Java
              bgColorTwo="#4CAF50" // Green for Python
              bgColorThree="#F7DF1E" // Yellow for JavaScript
              ratingOne={8}
              ratingTwo={9}
              ratingThree={10}
            />
            <SkillsCard
              head={"Operating Systems"}
              iconOne={<DiWindows size={50} />}
              iconTwo={<DiLinux size={50} />}
              iconThree={<DiApple size={50} />}
              iconOneH={"Windows"}
              iconTwoH={"Linux"}
              iconThreeH={"Apple"}
              ratingOne={10}
              ratingTwo={10}
              ratingThree={10}
              bgColorOne="#0078D4" // Windows blue
              bgColorTwo="#FCC624" // Linux yellow
              bgColorThree="#A2AAAD" // Apple gray
            />
            <SkillsCard
              head={"JS Frameworks"}
              iconOne={<DiNodejsSmall size={50} />}
              iconTwo={<DiReact size={50} />}
              iconThree={<DiAngularSimple size={50} />}
              iconOneH={"Node JS"}
              iconTwoH={"React"}
              iconThreeH={"Angular"}
              ratingOne={10}
              ratingTwo={9}
              ratingThree={7}
              bgColorOne="#8CC84B" // Node.js green
              bgColorTwo="#61DAFB" // React blue
              bgColorThree="#DD0031" // Angular red
            />
            <SkillsCard
              head={"Computer Science"}
              iconOne={<FaSitemap size={50} />}
              iconTwo={<DiDatabase size={50} />}
              iconThree={<FaDesktop size={50} />}
              iconOneH={"Computer Net."}
              iconTwoH={"Data Structures"}
              iconThreeH={"Computer Systems"}
              ratingOne={8}
              ratingTwo={8}
              ratingThree={8}
              bgColorOne="#009B77" // Networking teal
              bgColorTwo="#F6C91D" // Data Structures yellow
              bgColorThree="#4B4F56" // Systems gray
            />
            <SkillsCard
              head={"Web Development CI/CD"}
              iconOne={<FaCode size={50} />}
              iconTwo={<BiCodeCurly size={50} />}
              iconThree={<FaPalette size={50} />}
              iconOneH={"FE Web Development"}
              iconTwoH={"BE Web Development"}
              iconThreeH={"UI/UX Design"}
              ratingOne={10}
              ratingTwo={10}
              ratingThree={10}
              bgColorOne="#FF6F61" // FE Development coral
              bgColorTwo="#3B82F6" // BE Development blue
              bgColorThree="#FBBF24" // UI/UX Design amber
            />
            <SkillsCard
              head={"Web Dev Languages"}
              iconOne={<DiHtml5 size={50} />}
              iconTwo={<DiCss3 size={50} />}
              iconThree={<DiJavascript1 size={50} className="text-black" />}
              iconOneH={"HTML5"}
              iconTwoH={"CSS3"}
              iconThreeH={"JavaScript"}
              ratingOne={10}
              ratingTwo={10}
              ratingThree={10}
              bgColorOne="#E34F26" // HTML5 red
              bgColorTwo="#1572B6" // CSS3 blue
              bgColorThree="#F7DF1E" // JavaScript yellow
            />
            <SkillsCard
              head={"Other"}
              iconOne={<SiMicrosoftexcel size={50} />}
              iconTwo={<DiGithubBadge size={50} className="text-white" />}
              iconThree={<PiFileSqlFill size={50} />}
              iconOneH={"Excel"}
              iconTwoH={"GitHub"}
              iconThreeH={"SQL"}
              ratingOne={9}
              ratingTwo={10}
              ratingThree={9}
              bgColorOne="#217346" // Excel green
              bgColorTwo="#181717" // GitHub black
              bgColorThree="#003B57" // SQL dark blue
            />
            <SkillsCard
              head={"Open Source Tools"}
              iconOne={<BsFillLockFill size={50} />}
              iconTwo={<FaSync size={50} />}
              iconThree={<FaFileCode size={50} className="text-white" />}
              iconOneH={"Caddy"}
              iconTwoH={"Rsync"}
              iconThreeH={"GNU Emacs"}
              ratingOne={9}
              ratingTwo={9}
              ratingThree={8}
              bgColorOne="#FF5A5F" // Caddy red
              bgColorTwo="#0D6EFD" // Rsync blue
              bgColorThree="#2D2D2D" // GNU Emacs dark gray
            />
            <SkillsCard
              head={"AWS"}
              iconOne={<FaMicrochip size={50} />}
              iconTwo={<FaMap size={50} className="text-white" />}
              iconThree={<MdCable size={50} />}
              iconOneH={"EC2"}
              iconTwoH={"Route 53"}
              iconThreeH={"Direct Connect"}
              bgColorOne="#FF9900" // EC2 orange
              bgColorTwo="#232F3E" // Route 53 dark blue
              bgColorThree="#7D3F8C" // Direct Connect purple
              ratingOne={10}
              ratingTwo={10}
              ratingThree={10}
            />
            <SkillsCard
              head={"DevOps"}
              iconOne={<MdTerminal size={50} className="text-white" />}
              iconTwo={<MdDashboardCustomize size={50} />}
              iconThree={<FaUsers size={50} />}
              iconOneH={"Bash (Scripting)"}
              iconTwoH={"Agile Development"}
              iconThreeH={"Microsoft Teams"}
              bgColorOne="#2D2D2D" // Bash black
              bgColorTwo="#00BFAE" // Agile teal
              bgColorThree="#6264A7" // Teams purple
              ratingOne={8}
              ratingTwo={9}
              ratingThree={10}
            />
          </Suspense>
        </div>
      </section>

      <section className="container flex flex-col m-auto main-content">
        <div className="mt-16 mx-auto justify-around px-6 py-0 flex flex-wrap gap-6">
          <h1 className="text-3xl md:text-4xl mb-4 font-bold text-center">
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
    <div className="relative p-8 bg-gray-800 text-white rounded-xl shadow-lg hover:translate-y-[-15px] transition-transform duration-200 ease-in group">
      <h4 className="text-xl text-center font-bold mb-8">
        <span className="border-b-2 border-white">{head}</span>
      </h4>
      <div className="flex flex-col items-center">
        {/* Pyramid layout */}
        <div className="flex flex-col items-center">
          {/* Top item */}
          <div className="flex flex-col items-center mb-4">
            <div
              className="w-20 h-20 flex items-center justify-center rounded-lg text-5xl"
              style={{ backgroundColor: bgColorOne }}
            >
              {iconOne}
            </div>
            <div className="text-lg font-semibold mt-2">{iconOneH}</div>
            <div className="text-sm text-white bg-gray-900 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
              {ratingOne}/10
            </div>
          </div>
          {/* Bottom items */}
          <div className="flex flex-col gap-4 md:flex-row md:gap-8">
            <div className="flex flex-col items-center">
              <div
                className="w-20 h-20 flex items-center justify-center rounded-lg text-5xl"
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
                className="w-20 h-20 flex items-center justify-center rounded-lg text-5xl"
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
      <div className="absolute inset-0 bg-gray-800 bg-opacity-75 flex text-center items-center justify-center text-xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p>Average Rating: {averageRating}/10</p>
      </div>
    </div>
  );
};

const NonTechSkills = ({ text }) => {
  return (
    <div
      id="non-tech-text"
      className="p-4 border-solid border-black border-4 bg-[#333] text-white rounded-2xl font-bold text-base md:text-xl transition-transform duration-200 ease-in hover:translate-y-[-10px]"
    >
      <h4>{text}</h4>
    </div>
  );
};

export default Skills;
