import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import Loading from "../../common/Loading/Loading";

const Projects = () => {
  const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch("/projects.json")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);


  const projects = data;
  if (!projects) return <Loading />;
  return (
    <section  className="relative bg-[#0D1117] ">
      {/* Glow Background Circles */}
      <div
        className="absolute -top-20 -left-20 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 rounded-full bg-[#60a5fa85] opacity-20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-32 sm:bottom-40 right-8 sm:right-16 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 rounded-full bg-[#3b83f66c] opacity-30 blur-2xl"
        aria-hidden="true"
      />

      <div className="w-11/12 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3B82F6] mb-2">
            Projects
          </h2>
          <div className="w-20 h-1 bg-[#60A5FA] mx-auto rounded"></div>
        </div>

        {/* Project Cards */}
        <div className="space-y-14">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-[#161B22]/60 backdrop-blur-md border border-[#30363D] rounded-2xl overflow-hidden shadow-lg transition"
            >
              {/* Image */}
              <div className="md:w-1/2 w-full">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="md:w-1/2 w-full p-6 flex flex-col justify-between md:pl-10 space-y-6 md:space-y-0">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#F3F4F6] mb-3">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-[#F3F4F6] text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
                    {project.description.split(" ").slice(0, 20).join(" ") +
                      "..."}
                  </p>
                </div>

                {/* Button */}
                <div>
                  <NavLink
                    to={`/details/${project.id}`}
                    className="inline-block bg-[#3B82F6] hover:bg-[#2563EB] text-[#F3F4F6] font-medium px-5 py-2 rounded-lg transition-all duration-200 text-sm sm:text-base"
                  >
                    View Details
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
