import React from "react";
import Navbar from "../components/Navbar";
import "../components/navbar.css"

const Hiring = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Coming Soon Section */}
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-5xl heading font-bold text-gray-800 mb-6">Hiring</h1>
        <p className="text-lg text-gray-600 form">
          We’re always looking for talented individuals to join our team.
        </p>

        <div className="bg-white shadow-lg rounded-lg p-10 mt-10">
          <h2 className="text-3xl heading font-semibold text-gray-800 mb-4">
            Coming Soon
          </h2>
          <p className="form text-gray-600 text-lg">
            Stay tuned! Exciting opportunities will be available soon. Check
            back later for more information on how to join our team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hiring;
