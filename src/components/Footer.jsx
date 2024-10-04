import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#8C7147] text-white p-4 py-6 md:px-[4rem] lg:px-[4rem]">
      {/* Welcome Message Section */}
      <div className="text-center mb-4">
        <p className="text-sm lg:text-base">
          Welcome to our Ultimate Study Scheduler! Tailored for students preparing for competitive exams, our daily
          schedules help maximize productivity and efficiency. Stay organized and focused with our expertly crafted study
          plans and integrated resources. Start your journey to success today!
        </p>
      </div>

      {/* Links Section */}
      <div className="border-t border-black pt-4">
        <ul className="flex justify-center space-x-8 text-sm">
          <li>
            <Link to="/privacy-policy" className="hover:underline">
              PRIVACY POLICY
            </Link>
          </li>
          <li>

            <Link to="/contact" className="hover:underline">
              CONTACT US
            </Link>
          </li>
          <li>
          <Link to="/about-us" className="hover:underline">
              ABOUT US
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
