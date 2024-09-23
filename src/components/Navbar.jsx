import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import aboutUs from "../assets/aboutUs.png";
import avatar from "../assets/avatar.png";
import feedback from "../assets/feedback.png";
import logout from "../assets/logout.png";
import hiring from "../assets/hiring.png";
import support from "../assets/support.png";
import transfer from "../assets/transfer.png";
import user from "../assets/user.png";
import hamburger from "../assets/hamburger.png";
import arrow from "../assets/arrows.png";
import "./navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Hamburger menu state

  const location = useLocation(); // Get the current path

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to check if a route is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="flex justify-between items-center py-3 px-6 bg-white shadow">
      {/* Left Section - Logo and Slogan */}
      <div className="flex flex-col items-center">
        <Link to="/">
          <div className="flex gap-1">
            <h1 className="heading text-3xl font-bold text-blue-900">
              Scheduler
            </h1>
            <img
              src={arrow}
              alt="Arrow"
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
        <p className="text-[0.8rem] text-gray-600">
          One stop solution for Gov jobs
        </p>
      </div>

      {/* Right Section - Links and User Icon */}
      <div className="hidden links md:flex lg:flex items-center space-x-8 relative">
        <Link
          to="/our-experts"
          className={`links text-[#364374] hover:text-blue-900 ${
            isActive("/our-experts") ? "underline font-bold" : ""
          }`}
        >
          Our IITian Experts
        </Link>
        <Link
          to="/transfers"
          className={`links text-[#364374] hover:text-blue-900 ${
            isActive("/transfers") ? "underline font-bold" : ""
          }`}
        >
          Mutual Transfers
        </Link>
        <Link
          to="/schedules"
          className={`links text-[#364374] hover:text-blue-900 ${
            isActive("/schedules") ? "underline font-bold" : ""
          }`}
        >
          Your Schedules
        </Link>

        {/* User Icon */}
        <div className="relative">
          <div
            className="w-8 h-8 rounded-full cursor-pointer"
            onClick={toggleDropdown}
          >
            <img
              src={user}
              alt="User Icon"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border py-3 border-gray-200 rounded shadow-lg z-10">
              <Link
                to="/profile"
                className="flex gap-2 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <img src={avatar} className="mr-2" alt="Profile" /> Profile
              </Link>
              <Link
                to="/mutual-matches"
                className="flex gap-2 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <img src={transfer} className="mr-2" alt="Mutual Matches" />{" "}
                Mutual matches
              </Link>
              <Link
                to="/contact"
                className="flex gap-2 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <img src={support} className="mr-2" alt="Contact Us" /> Contact
                us
              </Link>
              <Link
                to="/feedback"
                className="flex gap-2 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <img src={feedback} className="mr-2" alt="Feedback" /> Your
                feedback
              </Link>
              <Link
                to="/sign-out"
                className="flex gap-2 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <img src={logout} className="mr-2" alt="Sign Out" /> Sign out
              </Link>
              <hr />
              <Link
                to="/hiring"
                className="flex gap-2 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <img src={hiring} className="mr-2" alt="We are hiring" /> We are
                hiring
              </Link>
              <Link
                to="/about-us"
                className="flex gap-2 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <img src={aboutUs} className="mr-2" alt="About Us" /> About us
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="block z-12 ">
        <img
          src={hamburger}
          alt="hamburger"
          onClick={toggleMobileMenu}
          className="cursor-pointer opacity-80 hover:opacity-100"
        />
      </div>

      {isMobileMenuOpen && (
        <div className="flex flex-col animate-fadeIn absolute items-end md:hidden inset-0 bg-black bg-opacity-20 z-15 h-screen space-y-3">
          <div className="bg-white absolute top-0 p-4 bottom-0 w-[85%] rounded-md">
            <div className="flex justify-between items-end w-full">
              <div></div>
              <div onClick={toggleMobileMenu} className="rounded-full h-5 w-5 border-black cursor-pointer border-2 flex justify-center items-center p-4 font-bold text-2xl">
                X
              </div>
            </div>
            <div className="flex flex-col space-y-6 text-md">
              <Link
                to="/our-experts"
                className="flex gap-2 items-center text-[#364374] hover:text-blue-900"
              >
                <img src={aboutUs} className="mr-2" alt="About Us" />{" "}
                Our IITian Experts
              </Link>
              <Link
                to="/transfers"
                className="flex gap-2 items-center text-[#364374] hover:text-blue-900"
              >
                <img src={avatar} className="mr-2" alt="Profile" />
                Mutual Transfers
              </Link>
              <Link
                to="/schedules"
                className="flex gap-2 items-center text-[#364374] hover:text-blue-900"
              >
                <img src={avatar} className="mr-2" alt="Profile" />
                Your Schedules
              </Link>
              <Link
                to="/profile"
                className="flex gap-2 items-center text-[#364374] hover:text-blue-900"
              >
                <img src={avatar} className="mr-2" alt="Profile" /> Profile
              </Link>
              <Link
                to="/mutual-matches"
                className="flex gap-2 items-center text-[#364374] hover:text-blue-900"
              >
                <img src={transfer} className="mr-2" alt="Mutual Matches" />{" "}
                Mutual matches
              </Link>
              <Link
                to="/contact"
                className="flex gap-2 items-center text-[#364374] hover:text-blue-900"
              >
                <img src={support} className="mr-2" alt="Contact Us" /> Contact
                us
              </Link>
              <Link
                to="/feedback"
                className="flex gap-2 items-center text-[#364374] hover:text-blue-900"
              >
                <img src={feedback} className="mr-2" alt="Feedback" /> Your
                feedback
              </Link>
              <Link
                to="/sign-out"
                className="flex gap-2 items-center text-[#364374] hover:text-blue-900"
              >
                <img src={logout} className="mr-2" alt="Sign Out" /> Sign out
              </Link>
              <hr />
              <Link
                to="/hiring"
                className="flex gap-2 items-center text-[#364374] hover:text-blue-900"
              >
                <img src={hiring} className="mr-2" alt="We are hiring" /> We are
                hiring
              </Link>
              <Link
                to="/about-us"
                className="flex gap-2 items-center text-[#364374] hover:text-blue-900"
              >
                <img src={aboutUs} className="mr-2" alt="About Us" /> About us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
