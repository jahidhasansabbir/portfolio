import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="w-11/12 mx-auto bg-[#0D1117]">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#3B82F6] mb-2">Contact Me</h2>
        <div className="w-20 h-1 bg-[#60A5FA] rounded mx-auto"></div>
      </div>

      {/* Split Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Contact Info */}
        <div className="bg-[#161B22]/80 border border-[#30363D] rounded-2xl p-8 backdrop-blur-md shadow-lg space-y-6 text-[#F3F4F6]">
          <h3 className="text-2xl font-semibold text-[#60A5FA] mb-4">Let's Connect</h3>
          <p className="text-base leading-relaxed">
            Whether you have a project idea, a question, or just want to say hello, I’m always open to connecting. 
            Feel free to reach out and I’ll get back to you as soon as possible.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <MdEmail className="text-[#3B82F6] text-xl" />
              <span>sabbir.dev@example.com</span>
            </div>
            <div className="flex items-center gap-4">
              <MdPhone className="text-[#3B82F6] text-xl" />
              <span>+880 1XXXXXXXXX</span>
            </div>
            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-[#3B82F6] text-xl" />
              <span>+880 1XXXXXXXXX</span>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form className="bg-[#161B22]/80 border border-[#30363D] rounded-2xl p-8 backdrop-blur-md shadow-lg space-y-6">
          <h3 className="text-2xl font-semibold text-[#60A5FA] mb-4">Send Me a Message</h3>
          <div>
            <label htmlFor="email" className="block mb-1 text-[#9CA3AF]">Your Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-[#4B5563] text-[#F3F4F6] placeholder-[#9CA3AF] focus:outline-none focus:border-[#3B82F6] transition"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-1 text-[#9CA3AF]">Subject</label>
            <input
              id="subject"
              type="text"
              placeholder="Briefly summarize"
              className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-[#4B5563] text-[#F3F4F6] placeholder-[#9CA3AF] focus:outline-none focus:border-[#3B82F6] transition"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 text-[#9CA3AF]">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write your message here..."
              className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-[#4B5563] text-[#F3F4F6] placeholder-[#9CA3AF] focus:outline-none focus:border-[#3B82F6] transition resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
