import React, { useState } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = (
    <>
      <li>
        <Link
          to="/"
          className="hover:text-[#632EE3] transition-colors duration-300"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/apps"
          className="hover:text-[#632EE3] transition-colors duration-300"
        >
          Apps
        </Link>
      </li>
      <li>
        <Link
          to="/installation"
          className="hover:text-[#632EE3] transition-colors duration-300"
        >
          Installation
        </Link>
      </li>
    </>
  );

  return (
    <nav className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Sure.Apps Logo"
            className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
          />
          <span className="text-2xl md:text-3xl font-bold text-[#632EE3]">
            Sure.Apps
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium text-gray-700">
          {links}
        </ul>

        {/* GitHub Button */}
        <div className="hidden md:block">
          <a
            href="https://github.com/tajmul-4u"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-5 py-2 rounded-lg text-white font-medium hover:opacity-90 transition-all duration-300"
          >
            <FaGithub size={22} />
            Contribute
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none text-gray-700"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-inner">
          <ul className="flex flex-col items-center py-4 space-y-3 text-lg text-gray-700">
            {links}
            <li>
              <a
                href="https://github.com/tajmul-4u"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-4 py-2 rounded-lg text-white font-medium hover:opacity-90 transition-all duration-300"
              >
                <FaGithub size={22} />
                Contribute
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
