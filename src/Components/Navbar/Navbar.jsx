import React from 'react';
import { FaGithub } from "react-icons/fa";
import logo from "../../assets/logo.png"
import { Link } from 'react-router';

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>

      <li>
        <Link to={"/apps"}>Apps</Link>
      </li>

      <li>
        <Link to={"/installation"}>Installation</Link>
      </li>
    </>
  );
    return (
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Apps</a>
              </li>
              <li>
                <a>Installation</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost flex items-center">
            <img
              className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
              src={logo}
              alt=""
            />
            <span className="text-xl md:text-3xl text-[#632EE3] text-bold">
              Sure.Apps
            </span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 text-xl">{links}</ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://github.com/tajmul-4u" // 🔗 your repo URL
            target="_blank" // 🪟 opens in new tab
            rel="noopener noreferrer" // 🛡️ security best practice
            className="btn bg-[#632EE3] text-xl text-white gap-2 hover:bg-[#5120c0]"
          >
            <FaGithub />
            Contribute
          </a>
        </div>
      </div>
    );
};

export default Navbar;