import React from "react";

const projects = [
  {
    name: "Devfolio — Portfolio Website",
    image: "https://i.ibb.co/C3QnCpq4/finder.png",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    description:
      "A personal developer portfolio to showcase projects, skills, and contact info with elegant animations and responsive design.",
    live: "https://devfolio.example.com",
    github: "https://github.com/yourname/devfolio-client",
    challenges:
      "Handling responsive animations across devices and optimizing Lighthouse performance score.",
    future:
      "Add blog support, dark/light toggle, and CMS integration for real-time content updates.",
  },
  {
    name: "ShopSwift — E-commerce Platform",
    image: "https://i.ibb.co/C3QnCpq4/finder.png",
    tech: ["Next.js", "MongoDB", "Stripe", "TailwindCSS"],
    description:
      "A modern e-commerce app with dynamic product listings, shopping cart, Stripe checkout, and user authentication.",
    live: "https://shopswift.example.com",
    github: "https://github.com/yourname/shopswift-client",
    challenges:
      "Integrating secure Stripe payments and implementing SSR with real-time product updates.",
    future:
      "Add admin dashboard, multi-vendor support, and product recommendation engine using AI.",
  },
  {
    name: "ChatterBox — Real-Time Chat App",
    image: "https://i.ibb.co/C3QnCpq4/finder.png",
    tech: ["React", "Socket.io", "Express", "Node.js"],
    description:
      "A real-time web chat app with room creation, user login, and instant messaging using sockets.",
    live: "https://chatterbox.example.com",
    github: "https://github.com/yourname/chatterbox-client",
    challenges:
      "Ensuring reliable socket communication with reconnection handling and user presence updates.",
    future:
      "Implement message history persistence, emoji reactions, and mobile PWA support.",
  },
];

const Projects = () => {
  return (
    <section className="w-full bg-[#0D1117] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#3B82F6] mb-2">Projects</h2>
          <div className="w-20 h-1 bg-[#60A5FA] mx-auto rounded"></div>
        </div>

        {/* Project Cards */}
        <div className="space-y-14">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-[#161B22] border border-[#30363D] rounded-2xl overflow-hidden shadow-lg transition "
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
              <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-[#F3F4F6] mb-3">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-[#F3F4F6] text-base mb-6">
                    {project.description}
                  </p>
                </div>
                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#1F2937] text-[#60A5FA] text-sm px-3 py-1 rounded-full border border-[#30363D]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Button */}
                <div>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#3B82F6] hover:bg-[#2563EB] text-[#F3F4F6] font-medium px-5 py-2 rounded-lg transition-all duration-200"
                  >
                    View Details
                  </a>
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
