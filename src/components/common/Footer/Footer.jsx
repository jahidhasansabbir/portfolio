import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#161B22] text-[#F3F4F6] rounded p-10 border-t border-[#30363D]">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover text-[#60A5FA] hover:text-[#3B82F6]">About us</a>
        <a className="link link-hover text-[#60A5FA] hover:text-[#3B82F6]">Contact</a>
        <a className="link link-hover text-[#60A5FA] hover:text-[#3B82F6]">Jobs</a>
        <a className="link link-hover text-[#60A5FA] hover:text-[#3B82F6]">Press kit</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a className="text-[#60A5FA] hover:text-[#3B82F6]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775..."></path>
            </svg>
          </a>
          <a className="text-[#60A5FA] hover:text-[#3B82F6]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245..."></path>
            </svg>
          </a>
          <a className="text-[#60A5FA] hover:text-[#3B82F6]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l..."></path>
            </svg>
          </a>
        </div>
      </nav>
      <aside>
        <p className="text-[#9CA3AF]">
          Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
