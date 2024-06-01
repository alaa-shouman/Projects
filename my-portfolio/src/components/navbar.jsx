import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-gray-200 px-4 py-2 flex items-center justify-between">
      <div>
        <FontAwesomeIcon icon={faReact} className="mr-2 text-white" />
        <span className="text-xl font-bold">Alaa Shouman</span>
      </div>
      {/* Navigation links */}
      <ul className="flex">
        <li className="mr-4">
          <a href="#about">About</a>
        </li>
        <li className="mr-4">
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
