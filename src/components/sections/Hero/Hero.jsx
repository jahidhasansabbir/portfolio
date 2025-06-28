import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative bg-[#0D1117] text-[#F3F4F6] flex items-center justify-center">
      {/* Glow Background Circles */}
      <div
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#60a5fa7f] opacity-20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-[#3b83f675] opacity-30 blur-2xl"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative w-11/12 mx-auto flex flex-col md:flex-row items-center md:gap-12 lg:gap-20">
        
        {/* Left Text */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#60A5FA] drop-shadow-lg">
            Hi, I'm <span className="text-[#3B82F6]">[Your Name]</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[#38BDF8]">
            Frontend Developer & UI/UX Enthusiast
          </p>

          <p className="text-base sm:text-lg md:text-xl text-[#9CA3AF] max-w-lg leading-relaxed mx-auto md:mx-0">
            I build sleek, neon-inspired web applications with React and modern UI/UX principles.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 items-center pt-4">
            <a
              href="#"
              download
              className="inline-block bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-8 py-3 rounded-md shadow-lg transition"
              title="Download Resume"
            >
              Download Resume
            </a>

            {/* Social Links */}
            <div className="flex gap-5 text-[#60A5FA] text-xl sm:text-2xl">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-[#38BDF8] transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[#38BDF8] transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-[#38BDF8] transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="https://facebook.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-[#38BDF8] transition-colors"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
          <img
            src="https://i.ibb.co/whq0X7wS/img-1-1751098726972.jpg"
            alt="Your portrait"
            className="rounded-xl shadow-2xl ring-4 ring-[#60A5FA] w-full sm:w-52 md:w-64 lg:w-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
