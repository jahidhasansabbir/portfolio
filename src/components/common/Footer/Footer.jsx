import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"; // modern icons

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#161B22] text-[#F3F4F6] rounded p-10 border-t border-[#30363D]">
      {/* Logo & Info */}
      <div className="flex flex-col items-center gap-2">
        <img src="/logo.png" alt="Logo" className="w-12 h-12 rounded-full shadow-md" />
        <h2 className="text-lg font-semibold text-[#60A5FA]">Jahid Hasan Sabbir</h2>
        <p className="text-sm text-[#9CA3AF]">Frontend Web Developer</p>
      </div>

      {/* Social Icons */}
      <nav className=" flex gap-6">
        <a
          href="https://github.com/jahidhasansabbir"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#60A5FA] hover:text-[#3B82F6] text-xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jahid-hasan-sabbir-035ab2290/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#60A5FA] hover:text-[#3B82F6] text-xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/jahid_sabbir1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#60A5FA] hover:text-[#3B82F6] text-xl"
        >
          <FaXTwitter />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
