import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const Hero = () => {
  const handleResumeClick = () => {
    Swal.fire({
      icon: "info",
      title: "Resume will be added soon",
      text: "Thank you for your patience!",
      confirmButtonColor: "#3B82F6",
      background: "rgba(22, 22, 50, 1)", // Darker, higher contrast glass bg
      color: "#F3F4F6",
      backdrop: `
    rgba(0, 0, 0, 0.7)
    left top
    no-repeat
  `,
      customClass: {
        popup: "  rounded-xl",
        confirmButton:
          "text-white font-semibold px-6 py-2 rounded-md shadow-lg",
      },
    });
  };
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
       <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#60A5FA]">
  Hi, I'm{" "}
  <motion.span
    className="inline-block text-transparent bg-clip-text"
    animate={{ backgroundPositionX: ["0%", "100%", "0%"] }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    style={{
      backgroundImage:
        "linear-gradient(270deg, #60A5FA, #38BDF8, #7DB0FC, #818CF8, #A78BFA, #C084FC, #A78BFA, #60A5FA)",
      backgroundSize: "1000% 100%",
      backgroundPosition: "0% center",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
    }}
  >
    Jahid Hasan Sabbir
  </motion.span>
</h1>




          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[#38BDF8]">
            Frontend Developer
          </p>

          <p className="text-base sm:text-lg md:text-xl text-[#9CA3AF] max-w-lg leading-relaxed mx-auto md:mx-0">
            I build responsive, accessible, and high-performance websites using
            HTML, CSS, JavaScript, and Tailwind CSS to deliver clean,
            user-friendly interfaces.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 items-center pt-4">
            <button
              onClick={handleResumeClick}
              className="inline-block bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-8 py-3 rounded-md shadow-lg transition"
              title="Download Resume"
            >
              Resume
            </button>

            {/* Social Links */}
            <div className="flex gap-5 text-[#60A5FA] text-xl sm:text-2xl">
              <a
                href="https://github.com/jahidhasansabbir"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-[#38BDF8] transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/jahid-hasan-sabbir-035ab2290/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[#38BDF8] transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/jahid_sabbir1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-[#38BDF8] transition-colors"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
          <img
            src="https://i.ibb.co/fdnRSgRD/f.jpg"
            alt="Your portrait"
            className="rounded-xl shadow-2xl ring-4 ring-[#60A5FA] w-full sm:w-52 md:w-64 lg:w-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
