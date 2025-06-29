import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FaExternalLinkAlt, FaGithub, FaTools, FaLightbulb, FaCode } from "react-icons/fa";
import Loading from "../../components/common/Loading/Loading";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (!data) return <Loading />;

  const projectData = data.find((project) => project.id == id);


  return (
    <section className=" bg-[#0D1117] text-[#F3F4F6] py-8 md:py-8 w-11/12 mx-auto">
      <div className=" mx-auto space-y-12">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-[#3B82F6]">{projectData.name}</h2>
          <div className="w-16 h-1 bg-[#60A5FA] mx-auto mt-3 rounded" />
        </div>

        {/* Image */}
        <div className="rounded-2xl border border-[#30363D] overflow-hidden shadow-xl">
          <img
            src={projectData.image}
            alt={projectData.name}
            className="w-full object-cover"
          />
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 flex items-center gap-2">
            <FaCode className="text-[#60A5FA]" /> Technologies Used
          </h3>
          <div className="flex flex-wrap gap-3">
            {projectData.tech.map((tech, i) => (
              <span
                key={i}
                className="bg-[#1F2937] text-[#60A5FA] border border-[#30363D] px-3 py-1 text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <h3 className="text-xl font-semibold text-[#60A5FA] mb-2 flex items-center gap-2">
            <FaLightbulb className="text-[#60A5FA]" /> Project Description
          </h3>
          <p className="text-base leading-relaxed">{projectData.description}</p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4">
          <a
            href={projectData.live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-5 py-2 rounded-lg transition inline-flex items-center gap-2"
          >
            <FaExternalLinkAlt /> Live Site
          </a>
          <a
            href={projectData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#30363D] text-[#60A5FA] px-5 py-2 rounded-lg hover:bg-[#161B22] transition inline-flex items-center gap-2"
          >
            <FaGithub /> GitHub Repo
          </a>
        </div>

        {/* Challenges */}
        <div>
          <h3 className="text-xl font-semibold text-[#60A5FA] mb-2 flex items-center gap-2">
            <FaTools className="text-[#60A5FA]" /> Development Challenges
          </h3>
          <p className="text-base leading-relaxed">{projectData.challenges}</p>
        </div>

        {/* Future Plans */}
        <div>
          <h3 className="text-xl font-semibold text-[#60A5FA] mb-2 flex items-center gap-2">
            <FaLightbulb className="text-[#60A5FA]" /> Future Improvements
          </h3>
          <p className="text-base leading-relaxed">{projectData.future}</p>
        </div>
      </div>
    </section>
  );
};

export default Details;
