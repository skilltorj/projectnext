'use client';
import React, { useState } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white py-4 flex justify-between items-center drop-shadow-md z-50 sticky top-0">
      {/* Left Section: Logo and Location */}
      <div className="flex items-center space-x-3 ml-4 lg:ml-20">
      <a href="#"><img src="/city_logo.svg" alt="CityQuest Logo" className="w-12 h-12" /></a>
  <div className="flex flex-col">
    <p className="text-lg font-semibold text-gray-700">CityQuest</p>
    <div className="flex items-center space-x-1">
      <p className="text-sm text-gray-500 tracking-wide ">Coimbatore</p>
      <img src="/location.svg" alt="Location Icon" className="w-2 h-2" />
    </div>
  </div>
</div>


      {/* Center Section: Menu Items (hidden on large screens and below) */}
      <div className="hidden lg:flex space-x-10 font-[600]">
        <a href="#" className="text-gray-800 hover:text-purple-600">Home</a>
        <a href="#" className="text-gray-800 hover:text-purple-600">My Favourites</a>
        <a href="#" className="text-gray-800 hover:text-purple-600">Notifications</a>
        <a href="#" className="text-gray-800 hover:text-purple-600">Help & Support</a>
      </div>

      {/* Hamburger Menu Button (visible on large screens and below) */}
      <button 
        className="lg:hidden mr-4" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <img src="/hamburger.svg" alt="Menu" className="w-6 h-6" />
      </button>

      {/* Mobile Menu (visible when hamburger is clicked) */}
      {isMenuOpen && (
        <div className="fixed top-24 left-0 w-full bg-white shadow-md p-4 lg:hidden">
          <a href="#" className="block py-2 text-gray-800 hover:text-purple-600">Home</a>
          <a href="#" className="block py-2 text-gray-800 hover:text-purple-600">My Favourites</a>
          <a href="#" className="block py-2 text-gray-800 hover:text-purple-600">Notifications</a>
          <a href="#" className="block py-2 text-gray-800 hover:text-purple-600">Help & Support</a>
          <button className="w-full mt-2 border border-purple-600 text-purple-600 px-4 py-2 rounded-full hover:bg-purple-100">
            Login
          </button>
        </div>
      )}

      {/* Right Section: Buttons (only visible on large screens and above) */}
      <div className="hidden lg:flex space-x-4 mr-4 lg:mr-20">
        <button className=" px-4 py-1 rounded-full border border-purple-600 text-purple-600  hidden lg:block">
          Create Post
        </button>
        <button className=" bg-purple-600 text-white px-4 py-1 rounded-full ">
          Login
        </button>
      </div>
    </div>
  );
};
