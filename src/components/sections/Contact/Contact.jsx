import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="relative w-11/12 mx-auto bg-[#0D1117] ">
      {/* Glow Background Circles */}
      <div
        className="absolute bottom-16 right-4 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 rounded-full bg-[#3b83f69b] opacity-30 blur-2xl"
        aria-hidden="true"
      />

      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3B82F6] mb-2">
          Contact Me
        </h2>
        <div className="w-20 h-1 bg-[#60A5FA] rounded mx-auto"></div>
      </div>

      {/* Split Layout */}
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Contact Info */}
        <div className="bg-[#161B22]/60 backdrop-blur-md border border-[#30363D] rounded-2xl p-8 shadow-lg space-y-6 text-[#F3F4F6]">
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#60A5FA] mb-4">
            Let's Connect
          </h3>
          <p className="text-base sm:text-lg leading-relaxed">
            Whether you have a project idea, a question, or just want to say hello, I’m always open to connecting. 
            Feel free to reach out and I’ll get back to you as soon as possible.
          </p>
          <div className="space-y-4 text-base sm:text-lg">
            <div className="flex items-center gap-4">
              <MdEmail className="text-[#3B82F6] text-2xl sm:text-3xl" />
              <span>sabbir.dev@example.com</span>
            </div>
            <div className="flex items-center gap-4">
              <MdPhone className="text-[#3B82F6] text-2xl sm:text-3xl" />
              <span>+880 1XXXXXXXXX</span>
            </div>
            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-[#3B82F6] text-2xl sm:text-3xl" />
              <span>+880 1XXXXXXXXX</span>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form className="bg-[#161B22]/60 backdrop-blur-md border border-[#30363D] rounded-2xl p-8 shadow-lg space-y-6">
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#60A5FA] mb-4">
            Send Me a Message
          </h3>
          <div>
            <label htmlFor="email" className="block mb-1 text-[#9CA3AF] text-sm sm:text-base">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-[#4B5563] text-[#F3F4F6] placeholder-[#9CA3AF] focus:outline-none focus:border-[#3B82F6] transition text-sm sm:text-base"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-1 text-[#9CA3AF] text-sm sm:text-base">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Briefly summarize"
              className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-[#4B5563] text-[#F3F4F6] placeholder-[#9CA3AF] focus:outline-none focus:border-[#3B82F6] transition text-sm sm:text-base"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 text-[#9CA3AF] text-sm sm:text-base">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write your message here..."
              className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-[#4B5563] text-[#F3F4F6] placeholder-[#9CA3AF] focus:outline-none focus:border-[#3B82F6] transition resize-none text-sm sm:text-base"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-6 py-3 rounded-lg transition text-base sm:text-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
