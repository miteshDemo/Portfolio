import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white font-serif font-bold flex md:justify-between flex-col md:flex-row min-h-12 items-center p-4 shadow-lg">
     
      <div className="text-xl md:text-2xl mx-auto md:mx-0">PORTFOLIO</div>

      <ul className="flex space-x-6 mt-2 md:mt-0">
        <li>
          <a href="/" className="hover:text-gray-300 transition">About</a>
        </li>
        <li>
          <a href="/" className="hover:text-gray-300 transition">Experience</a>
        </li>
        <li>
          <a href="" className="hover:text-gray-300 transition">Projects</a>
        </li>
        <li>
          <a href="/" className="hover:text-gray-300 transition">Profile</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
