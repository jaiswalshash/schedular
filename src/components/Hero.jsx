import React, { useEffect, useState } from 'react';
import User from '../assets/hero.png'; 
import "./navbar.css";
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 100); 
  }, []);

  const handleForm = () => {
    navigate("/form");
  };

  return (
    <div className="bg-[#2f3b6b] flex items-center justify-center h-screen absolute inset-0 -z-10">
      <div className={`container mx-auto flex flex-col mt-[5rem] md:flex-row items-center justify-between md:w-[75%] px-5 md:px-0 transform transition-all duration-1000 ease-in-out ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
        {/* Text Section */}
        <div className="hero-content text-center md:text-left space-y-10 text-cyan-400 mb-10 md:mb-0">
          <ul className="space-y-4 list-disc pl-5">
            <li>Assess yourself</li>
            <li>Get customized schedule</li>
            <li>Progress with us</li>
          </ul>
          <button 
            onClick={handleForm} 
            className="bg-cyan-400 text-[#2f3b6b] font-bold py-2 px-4 rounded transition-transform transform hover:translate-y-1 hover:scale-105 duration-300 ease-in-out"
          >
            GET CUSTOMIZED SCHEDULE
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 flex justify-center">
          <img 
            src={User} 
            alt="Hero" 
            className="w-[80%] md:w-full lg:w-full max-w-x md:max-w-md lg:max-w-lg transition-transform transform hover:scale-105 duration-300 ease-in-out"
          />
        </div>
      </div> 
    </div>
  );
}
