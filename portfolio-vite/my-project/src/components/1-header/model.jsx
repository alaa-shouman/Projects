// model.jsx
import React from "react";

const Model = ({ onCloseModel }) => {
  const navLinks = [
    { label: "About", href: "#" },
    { label: "Article", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Speaking", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <div className="model opacity-90 ">
      <ul className="w-4/5 mx-auto max-w-md text-left py-3 px-5 rounded-2xl bg-opacity-75 inside">
        <li className="w-full flex justify-end mb-4">
          <button
            className="close_btn"
            onClick={onCloseModel}
            aria-label="Close Menu"
          >
            <span className="icon-close custom-icon"></span>
          </button>
        </li>
        {navLinks.map((link, index) => (
          <li
            key={link.label}
            className={`dark:text-white text-gray-800 hover:text-blue-400 transition-colors  ${
              index !== navLinks.length - 1 ? "border-b border-slate-700" : ""
            }`}
          >
            <a href={link.href} className="block py-2 px-4 last:border-none">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Model;
