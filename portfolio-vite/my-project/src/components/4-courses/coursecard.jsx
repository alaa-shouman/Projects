import React from "react";
import doneAnimation from "../../animation/done.json";
import Lottie from "lottie-react";

const Coursecard = ({ title, subtitle, certified, img, link,source }) => {
  return (
    <article
      style={{ width: "w-64", minWidth: "200px" ,maxWidth:"300px" }}
      className="card border border-slate-400 dark:border-slate-700 hover:border-2 transition duration-300 rounded-md hover:rotate-3 hover:cursor-pointer"
    >
      <header>
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-around items-center gap-4">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-green-300 w-2/3">
            {title}
          </h1>
          <div className="flex items-center">
            <span className="text-gray-600 dark:text-gray-400">{source}</span>
            {link && <a className="icon-link ml-1 hover:text-red-500 dark:text-white text-gray-700" href={link}></a>}
          </div>
        </div>
        <div className="px-3 pb-3 dark:text-slate-300 text-slate-700">
          {subtitle}
          {certified && (
            <span className="icon-verified dark:text-green-300 text-green-700 pl-1"></span>
          )}
        </div>
      </header>
    </article>
  );
};

export default Coursecard;
