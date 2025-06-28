import React from "react";

const Education = () => {
  return (
    <section className="relative w-full bg-[#0D1117] rounded-xl shadow-lg overflow-hidden ">
      {/* Glow Background Circle - Positioned top-right, won't affect layout */}
      <div
        className="pointer-events-none absolute top-20 right-10 w-50 h-50 rounded-full bg-[#60A5FA] opacity-20 blur-3xl z-0"
        aria-hidden="true"
      />

      {/* Main Content */}
      <div className="relative z-10 w-11/12 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3B82F6] tracking-wide">
            Educational Qualification
          </h2>
          <div className="w-20 h-1 bg-[#60A5FA] rounded-full mx-auto mt-2 shadow-[0_0_12px_#3B82F6]"></div>
        </div>

        <div className="mx-auto">
          <article className="bg-[#161B22]/60 backdrop-blur-md border border-[#30363D] rounded-2xl p-6 sm:p-8 md:p-10 space-y-4 ">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#F3F4F6] leading-tight">
              Bachelor of Science in Electrical and Electronic Engineering
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-[#9CA3AF] italic font-medium tracking-wide">
              Jatiya Kabi Kazi Nazrul Islam University
            </p>
            <p className="text-sm sm:text-base md:text-lg text-[#F3F4F6] font-medium tracking-wide">
              Feb 2, 2023 – Present
            </p>
            <p className="text-xs sm:text-sm md:text-base text-[#D1D5DB] leading-relaxed font-normal">
              Currently pursuing my B.Sc. in Electrical and Electronic Engineering, developing strong foundational knowledge and practical expertise in electrical systems and technology. Alongside my academic pursuits, I actively cultivate my skills in web development, continuously integrating my technical education with real-world projects and innovative learning.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Education;
