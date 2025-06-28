import React from "react";

const Education = () => {
  return (
    <section className="w-11/12 mx-auto bg-[#0D1117] rounded-xl shadow-lg overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-[#3B82F6] tracking-wide">
          Educational Qualification
        </h2>
        <div className="w-20 h-1 bg-[#60A5FA] rounded-full mx-auto mt-2 shadow-[0_0_12px_#3B82F6]"></div>
      </div>

      <div className="max-w-3xl mx-auto">
        <article className="bg-[#161B22]/80 border border-[#30363D] rounded-2xl p-10 shadow-[0_0_25px_rgba(59,130,246,0.2)]">
          <h3 className="text-3xl font-semibold text-[#F3F4F6] mb-2 leading-tight">
            Bachelor of Science in Electrical and Electronic Engineering
          </h3>
          <p className="text-[#9CA3AF] italic font-medium mb-3 tracking-wide">
            Jatiya Kabi Kazi Nazrul Islam University
          </p>
          <p className="text-[#F3F4F6] font-medium mb-5 tracking-wide">
            Feb 2, 2023 – Present
          </p>
          <p className="text-[#D1D5DB] text-base leading-relaxed font-normal max-w-prose mx-auto">
            Currently pursuing my B.Sc. in Electrical and Electronic Engineering, developing strong foundational knowledge and practical expertise in electrical systems and technology. Alongside my academic pursuits, I actively cultivate my skills in web development, continuously integrating my technical education with real-world projects and innovative learning.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Education;
