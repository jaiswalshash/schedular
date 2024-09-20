import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SSC from "../assets/SSC.png";
import Banking from "../assets/RRB.png";
import RRB from "../assets/Railway.png";
import Others from "../assets/Others.png";
import pre from "../assets/PreLimsT1.png";
import mains from "../assets/Mains.png";
import both from "../assets/Both.png";
import fresher from "../assets/Fresher.png";
import repeater from "../assets/Repeater.png";
import less5 from "../assets/Less5.png";
import more5 from "../assets/more5.png";
import "../components/navbar.css";
import Navbar from "../components/Navbar";

const Form = () => {
  // Define the form steps dynamically with option names and images
  const formData = [
    {
      title: "Choose your goal",
      options: [
        { name: "SSC", image: SSC },
        { name: "RRB", image: RRB },
        { name: "BANKING", image: Banking },
        { name: "OTHER", image: Others },
      ],
    },
    {
      title: "Choose your Exam",
      options: {
        SSC: [
          { name: "SSC CGL", image: SSC },
          { name: "SSC CHSL", image: SSC },
          { name: "SSC MTS", image: SSC },
          { name: "SSC GD", image: SSC },
        ],
        RRB: [
          { name: "RRB NTPC", image: RRB },
          { name: "RRB JE", image: RRB },
          { name: "RRB ALP", image: RRB },
        ],
        BANKING: [
          { name: "IBPS PO", image: Banking },
          { name: "IBPS Clerk", image: Banking },
          { name: "SBI PO", image: Banking },
          { name: "SBI Clerk", image: Banking },
        ],
        OTHER: [
          { name: "Other Exam 1", image: Others },
          { name: "Other Exam 2", image: Others },
        ],
      },
    },
    {
      title: "Which category you fall",
      options: [
        { name: "Fresher", image: fresher },
        { name: "Repeater", image: repeater },
      ],
    },
    {
      title: "Preparation Tier",
      options: [
        { name: "Prelims", image: pre },
        { name: "Mains", image: mains },
        { name: "Both", image: both },
      ],
    },
    {
      title: "Time dedication",
      options: [
        { name: "Less than 5 hours a day", image: less5 },
        { name: "More than 5 hours a day", image: more5 },
      ],
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({});
  const totalSteps = 5;
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentPage < totalSteps) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleExit = () => {
    navigate(-1); // Navigate to homepage on exit
  };

  const handleOptionChange = (pageIndex, option) => {
    setSelectedOptions((prev) => ({ ...prev, [pageIndex]: option }));
  };

  const handleSubmit = () => {
    console.log("Form submitted with answers:", selectedOptions);
    navigate("/customised-schedule")
  };

  // Dynamically determine the current options based on previous answers
  const getCurrentOptions = () => {
    if (currentPage === 2) {
      const selectedGoal = selectedOptions[1]?.name;
      return formData[1].options[selectedGoal] || [];
    }
    return formData[currentPage - 1].options;
  };

  // Determine the image to display based on the selected goal
  const getImageForCurrentPage = () => {
    const selectedGoal = selectedOptions[1]?.image;
    return selectedGoal || "";
  };

  return (
    <>
      <Navbar />
      <div className="form w-full max-w-lg mx-auto mt-10">
        {/* Progress Bar with breaks */}
        <div className="flex flex-col space-y-3 items-center justify-between mb-[3rem]">
          <div className="flex justify-between w-full">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="text-black font-semibold text-sm underline"
            >
              &larr; Previous
            </button>

            <button
              onClick={handleExit}
              className="text-black font-semibold text-sm underline"
            >
              Exit
            </button>
          </div>

          <div className="flex justify-between w-full h-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`h-1 w-full rounded-full ${
                  index < currentPage ? "bg-green-700" : "bg-gray-300"
                }`}
                style={{ marginRight: index < totalSteps - 1 ? "10px" : "0" }}
              ></div>
            ))}
          </div>
        </div>

        {/* Form Page Content */}
        <div className="w-full">
          <h2 className="text-center text-lg font-semibold mb-4">
            {formData[currentPage - 1].title}
          </h2>
          {/* Radio options */}
          <div className="flex flex-col space-y-5">
            {getCurrentOptions().map((option) => (
              <label
                key={option.name}
                className="container flex items-center bg-[#D9D9D9] rounded-md py-2 px-4 cursor-pointer hover:bg-gray-200 transition-colors"
              >
                <div className="flex items-center flex-1">
                  {/* Display the image for the current option */}
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3">
                    <img
                      src={option.image || getImageForCurrentPage()}
                      alt={option.name}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {option.name}
                  </span>
                </div>
                <div className="ml-3 mr-2">
                  <input
                    type="radio"
                    name={`step-${currentPage}`}
                    value={option.name}
                    checked={selectedOptions[currentPage]?.name === option.name}
                    onChange={() => handleOptionChange(currentPage, option)}
                    className="mr-2"
                  />
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end mt-6">
          {/* <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
        >
          Previous
        </button> */}
          {currentPage < totalSteps ? (
            <button
              onClick={handleNext}
              disabled={!selectedOptions[currentPage]}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Form;
