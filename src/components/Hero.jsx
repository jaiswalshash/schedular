import React from 'react'

import User from '../assets/hero.png'; 
import "./navbar.css"
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  const handleForm = () =>  {
    navigate("/form")
  }
  return (
    <div className="bg-[#2f3b6b] dropdown flex items-center justify-center h-screen absolute inset-0 -z-10">
      <div className="container mx-auto flex items-center justify-between w-[75%]">
        {/* Text Section */}
        <div className="hero-content text-left space-y-10 text-cyan-400">
          <ul className="space-y-4 list-disc pl-5">
            <li>Assess yourself</li>
            <li>Get customized schedule</li>
            <li>Progress with us</li>
          </ul>
          <button onClick={handleForm} className="bg-cyan-400 text-[#2f3b6b] font-bold py-2 px-4 rounded">
            GET CUSTOMIZED SCHEDULE
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0">
          <img src={User}/>
        </div>
      </div> 
    </div>
  );
}
