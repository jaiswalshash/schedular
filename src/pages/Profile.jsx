import React from "react";
import Camera from "../assets/camera.png";
import Navbar from "../components/Navbar";
import "../components/navbar.css";
import { useNavigate } from "react-router-dom";

// Dummy data (replace with actual data from backend)
const profileData = {
  name: "Nadeem",
  phone: "9131778461",
  email: "nadeemahmed81@gmail.com",
  schedules: [
    { name: "SSC CGL PRE", duration: "3 months" },
    { name: "SSC CGL PRE", duration: "3 months" },
    { name: "SSC CGL PRE", duration: "3 months" },
  ],
};

const Profile = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/form")
  }
  return (
    <>
      <Navbar />
      <div className=" mx-auto p-4 md:px-[4rem] lg:px-[4rem] mt-4 animate-fadeIn">
        <h1 className="text-lg font-semibold mb-4 flex items-center">
          Profile
        </h1>

        <div className="md:w-[40%] lg:w-[40%] border-[1px] shadow py-10 p-5 rounded-lg mb-[3rem] flex items-center gap-[1.2rem]">
          <div className="flex items-center justify-center w-[5.2rem] h-[5.2rem] bg-gray-300 rounded-full ">
            <img src={Camera} alt="Camera" width="40" />
          </div>
          <div className="form">
            <h2 className="md:text-lg text-sm lg:text-lg mb-1 text-[#364374] font-semibold">
              {profileData.name}
            </h2>
            <p className="text-gray-600">{profileData.phone}</p>
            <p className="text-gray-600">{profileData.email}</p>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-2">Your schedules</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {profileData.schedules.map((schedule, index) => (
            <div
              key={index}
              className="bg-[#1A6400] text-white p-2 px-6 rounded flex justify-between items-center"
            >
              <div>
                <span>{schedule.name}</span>
                <span>({schedule.duration})</span>
              </div>
              <p>{">"}</p>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold mb-2">Get more schedule</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <button onClick={handleClick} className="bg-[#00D1FF] text-[#364374] px-6 p-2 rounded font-semibold text-start text-md transition-colors">
            GET CUSTOMIZED SCHEDULE
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
