import React from "react";

const About = () => {
  return (
    <section   className="relative w-11/12 mx-auto">
      {/* Glow Background Circles */}
      <div
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#60a5fa93] opacity-20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-[#3b83f67c] opacity-30 blur-2xl"
        aria-hidden="true"
      />

      <div className="bg-[#0D1117] flex justify-center items-center">
        <div className="w-full bg-[#161B22]/60 backdrop-blur-md border border-[#30363D] rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-10 transition duration-300">
          {/* Section Heading */}
          <div className="mb-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3B82F6] mb-2">
              About Me
            </h2>
            <div className="w-20 h-1 bg-[#60A5FA] rounded mx-auto"></div>
          </div>

          {/* Body Text */}
          <div className="space-y-6 text-sm sm:text-base md:text-lg leading-relaxed text-[#F3F4F6] text-left">
            <p>
              I started my programming journey in 2020 through my academic syllabus, where I was introduced to HTML and C programming. As I explored coding, I became fascinated by how ideas could come to life through the web — a discovery that sparked my passion for frontend development.
            </p>

            <p>
              One of my biggest inspirations was Istiaq Sir, an ICT lecturer at Jahangirnagar University School and College, whose guidance motivated me to take programming more seriously and pursue it beyond the classroom.
            </p>

            <p>
              Since then, I’ve built a solid foundation in HTML, CSS, TailwindCSS, DaisyUI, JavaScript, and React. I enjoy creating responsive, accessible, and engaging web interfaces. My focus is always on writing clean code, following best practices, and continuously improving my skills by learning modern tools and techniques.
            </p>

            <p>
              I’ve worked on projects like landing pages, dashboards, and dynamic web applications — prioritizing performance, usability, and user experience. While I’m not a UI/UX designer, I pay attention to design trends and aim to build visually pleasing, functional interfaces.
            </p>

            <p>
              I’m currently pursuing a B.Sc. in Electrical and Electronic Engineering (EEE) at Jatiya Kabi Kazi Nazrul Islam University. Alongside my studies, I actively continue to learn and build in the field of web development, constantly expanding my skills through real-world projects and exploration of new technologies.
            </p>

            <p>
              Outside of tech, I enjoy playing cricket, football, and PUBG, as well as taking early morning and afternoon walks — activities that help me stay refreshed and inspired.
            </p>

            <p className="italic text-[#60A5FA]">
              I'm a fast learner, always curious, and driven by the thrill of mastering new tools and creating something meaningful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
