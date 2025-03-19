"use client";

import { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import img1 from "../../../public/image2.png";
import img2 from "../../../public/image.jpg";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gray-00 text-white">
      {/* Background Split Images */}
      <div className="absolute inset-0 flex">
        <div className="w-[100%] relative">
          <Image src={img1} alt="Room" layout="fill" objectFit="cover" className="opacity-90" />
        </div>
        <div className="w- abvsolute">
          <Image src={img2} alt="Keys" layout="fill" objectFit="cover" className="opacity-0" />
        </div>
      </div>
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-100"></div>
      
      {/* Content */}
      <div className="relative z-10 text-left px-6 sm:px-12 max-w-2xl">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4">
          Welcome to <span className="text-blue-400">Logo</span>
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          Comfortable rooms and flats with all-in-one services for students, professionals, and families!
        </p>
        {/* Email Subscription Form */}
        <form onSubmit={handleSubmit} className="flex items-center bg-white bg-opacity-20 p-2 rounded-lg w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            className="flex-grow p-3 bg-transparent text-white placeholder-gray-300 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-black text-white rounded-lg font-semibold flex items-center hover:bg-gray-800 transition"
          >
            Subscribe <FaArrowRight className="ml-2" />
          </button>
        </form>
        {/* Room Types */}
        <div className="flex flex-wrap gap-4 mt-6">
          {["Suite", "Studio", "Shared Room", "Double Room", "Single Room"].map((room, index) => (
            <div key={index} className="px-6 py-3 bg-white bg-opacity-20 rounded-lg text-white font-semibold hover:bg-opacity-30 transition cursor-pointer">
              {room}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
