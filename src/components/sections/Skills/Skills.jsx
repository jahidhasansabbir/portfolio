import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiJsonwebtokens,
  SiReactrouter,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: FaHtml5, color: "#e34c26" },
  { name: "CSS", icon: FaCss3Alt, color: "#264de4" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DBFB" },
  { name: "React Router", icon: SiReactrouter, color: "#f43f5e" },
  { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
  { name: "Express", icon: SiExpress, color: "#D1D5DB" },
  { name: "MongoDB", icon: SiMongodb, color: "#4DB33D" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCB2B" },
  { name: "JWT", icon: SiJsonwebtokens, color: "#EC4899" },
];

const Skills = () => {
  return (
    <section className="relative w-11/12 mx-auto bg-[#0D1117]">
    
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3B82F6] mb-2">
          My Skills
        </h2>
        <div className="w-20 h-1 bg-[#60A5FA] rounded mx-auto"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map(({ name, icon: Icon, color }, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center cursor-default bg-[#161B22]/75 border-2 border-[#30363D] rounded-xl p-4 sm:p-6 transition-transform duration-300 hover:scale-105"
          >
            <Icon style={{ color }} className="text-3xl sm:text-4xl md:text-5xl mb-3" />
            <p className="text-sm sm:text-base md:text-lg text-[#F3F4F6] font-semibold text-center">
              {name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
