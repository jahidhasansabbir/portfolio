import React from "react";
import { NavLink } from "react-router";
import Swal from "sweetalert2";

const Navbar = () => {
const handleResumeClick = ()=>{
  Swal.fire({
    icon: 'info',
    title: 'Resume will be added soon',
    text: 'Thank you for your patience!',
    confirmButtonColor: '#3B82F6',
    background: 'rgba(22, 22, 50, 1)', // Darker, higher contrast glass bg
    color: '#F3F4F6',
    backdrop: `
      rgba(0, 0, 0, 0.7)
      left top
      no-repeat
    `,
    customClass: {
      popup: '  rounded-xl',
      confirmButton: 'text-white font-semibold px-6 py-2 rounded-md shadow-lg',
    },
  });
}
  
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md transition duration-200 ${
              isActive
                ? "text-[#60A5FA]"
                : "text-[#9CA3AF] hover:text-[#60A5FA]"
            }`
          }
        >
          Home
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="border-b bg-[#0D111780] backdrop-blur-sm z-50 sticky top-0 border-[#30363D] shadow-sm">
      <nav className="w-11/12 mx-auto text-[#F3F4F6] ">
        <div className=" mx-auto flex items-center justify-between py-3">
          {/* Left: Logo + Dropdown */}
          <div className="flex items-center gap-4">
            {/* Mobile Dropdown */}
            <div className="dropdown lg:hidden">
              <button
                tabIndex={0}
                className="p-2 pl-0 rounded-md hover:bg-[#161B22]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#F3F4F6]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
              <ul
                tabIndex={0}
                className="dropdown-content mt-3 p-2 w-40 bg-[#161B22] text-[#F3F4F6] border border-[#30363D] rounded-lg shadow-lg z-50"
              >
                {links}
              </ul>
            </div>

            {/* Logo */}
            <a className="text-xl font-bold text-[#60A5FA] tracking-tight">
              NeonBrand
            </a>
          </div>

          {/* Center: Desktop Links */}
          <div className="hidden lg:flex items-center">
            <ul className="flex space-x-4">{links}</ul>
          </div>

          {/* Right: Resume Button */}
          <div>
            <button
            onClick={handleResumeClick}
              className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-4 py-2 rounded-md font-medium shadow-md transition duration-300"
            >
              Resume
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
