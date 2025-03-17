"use client";

import { HiOutlineMenu, HiOutlineShoppingCart } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-gray-50 px-6 py-3 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left - Menu Icon */}
        <button className="text-gray-700 md:hidden">
          <HiOutlineMenu size={24} />
        </button>

        {/* Center - Logo */}
        <div className="text-xl font-bold">LOGO</div>

        {/* Right - Profile & Cart */}
        <div className="flex items-center gap-6">
          {/* Profile Dropdown */}
          <div className="flex items-center gap-1 cursor-pointer">
            <Image
              src="/profile.jpg" // Replace with actual profile image
              alt="Profile"
              width={32}
              height={32}
              className="rounded-full"
            />
            <FaAngleDown size={12} className="text-gray-600" />
          </div>

          {/* Divider */}
          <div className="w-[1px] h-6 bg-gray-300"></div>

          {/* Shopping Cart */}
          <div className="relative">
            <HiOutlineShoppingCart size={24} className="text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              3
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
