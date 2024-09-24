import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import SSC from "../assets/SSC.png";
import Railway from "../assets/Railway.png";
import Banking from "../assets/RRB.png";
import "../components/navbar.css";
import Navbar from "../components/Navbar";

const Transfer = () => {
  const [selectedOptions, setSelectedOptions] = useState(null); // Initialize with null or empty string
  const navigate = useNavigate(); // Initialize the navigate function

  // Sample formData object
  const formData = {
    title: "Choose your goal",
    options: [
      { name: "SSC", image: SSC, route: "/transfers/ssc" },
      { name: "RRB", image: Railway, route: "/transfers/rrb" },
      { name: "BANKING", image: Banking, route: "/transfers/banking" },
    ],
  };

  // Handle option change
  const handleOptionChange = (option) => {
    setSelectedOptions(option.name); // Store only the name in state
  };

  // Handle navigation on "Next" button click
  const handleNextClick = () => {
    const selectedOption = formData.options.find(
      (option) => option.name === selectedOptions
    );
    if (selectedOption) {
      navigate(selectedOption.route); // Navigate to the selected route
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-lg p-4 mx-auto animate-fadeIn">
        <div className="form font-semibold w-full mt-5 flex justify-center">
          Select Organisation
        </div>

        {/* Use formData.options.map() to iterate over options */}
        {formData.options.map((option) => (
          <label
            key={option.name}
            className="container max-w-lg mx-auto mt-5 flex items-center bg-[#D9D9D9] rounded-md py-2 px-4 cursor-pointer hover:bg-gray-200 transition-colors"
          >
            <div className="flex items-center flex-1">
              {/* Display the image for the current option */}
              <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3">
                <img src={option.image} alt={`${option.name} logo`} />
              </div>
              <span className="text-sm font-medium text-gray-700">
                {option.name}
              </span>
            </div>

            <div className="ml-3 mr-2">
              <input
                type="radio"
                value={option.name}
                checked={selectedOptions === option.name} // Correct checked condition
                onChange={() => handleOptionChange(option)}
                className="mr-2"
              />
            </div>
          </label>
        ))}

        <div className="flex justify-end">
          <button
            onClick={handleNextClick} // Handle click to navigate
            disabled={!selectedOptions} // Enable button only when an option is selected
            className={`mt-5 text-white py-2 px-4 rounded ${
              selectedOptions
                ? "bg-[#1A6400] hover:bg-green-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Transfer;
