import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6 px-[4rem]">
      {/* Welcome Message Section */}
      <div className="text-center mb-4">
        <p className="text-sm lg:text-base">
          Welcome to our Ultimate Study Scheduler! Tailored for students preparing for competitive exams, our daily
          schedules help maximize productivity and efficiency. Stay organized and focused with our expertly crafted study
          plans and integrated resources. Start your journey to success today!
        </p>
      </div>

      {/* Links Section */}
      <div className="border-t border-blue-800 pt-4">
        <ul className="flex justify-center space-x-8 text-sm">
          <li>
            <a href="#" className="hover:underline">
              PRIVACY POLICY
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              CONTACT US
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              ABOUT US
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
