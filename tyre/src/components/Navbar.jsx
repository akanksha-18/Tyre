import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  // State to handle mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white p-4 text-black shadow-md h-16 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? 'block bg-white w-full absolute top-16 left-0 py-4' : 'hidden'
          } lg:flex lg:items-center lg:space-x-4 space-y-2 lg:space-y-0 lg:static`}
        >
          <a href="#" className="block text-center hover:text-yellow-500 font-medium">
            CarTyres
          </a>
          <a href="#" className="block text-center hover:text-yellow-500 font-medium">
            BikeTyres
          </a>
          <a href="#" className="block text-center hover:text-yellow-500 font-medium">
            TyrePressure
          </a>
          <a href="#" className="block text-center hover:text-yellow-500 font-medium">
            CommercialTyres
          </a>
          <a href="#" className="block text-center hover:text-yellow-500 font-medium">
            Accessories
          </a>
          <a href="#" className="block text-center hover:text-yellow-500 font-medium">
            More
          </a>
        </div>

        {/* Call Now Button */}
        <button className="hidden lg:block bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600">
          Call Now
        </button>
      </div>

      {/* Mobile Call Now Button */}
      {isMenuOpen && (
        <div className="lg:hidden mt-2">
          <button className="w-full bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600">
            Call Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
