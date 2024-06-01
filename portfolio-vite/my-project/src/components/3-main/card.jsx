import { motion } from "framer-motion";
import React from "react";

const Card = ({ title, subtitle, category, img, link }) => {
  return (
    <motion.article
      layout
      initial={{ transform: "scale(0)" }} // Initial filter property
      animate={{ transform: "scale(1)" }} // Filter property on hover
      transition={{ duration: 1, type: "spring" }} // Transition duration
      style={{ width: "266px" }}
      className="card border border-slate-400 dark:border-slate-700 hover:border-2 transition duration-300 rounded-md hover:rotate-3 hover:cursor-pointer"
    >
      <img src={img} className="w-ful object-cover h-40 rounded mb-1" alt="" />
      <div className="box w-full">
        <h1 className="title dark:text-slate-200 text-gray-700 text-3xl text-center">
          {title}
        </h1>
        <p className="sub dark:text-slate-300 text-gray-600 mt-3 mx-3">
          {subtitle}
        </p>
        <div className="flex gap-4 justify-between mt-3 dark:text-slate-300 text-gray-600 icons mb-3 ">
          <div className="flex gap-4 text-lg ml-3 self-end">
            <div className="icon-link hover:text-blue-400 transition duration-300 hover:cursor-pointer "></div>
            <div className="icon-github hover:text-blue-400 transition duration-300 hover:cursor-pointer "></div>
          </div>
          <a
            href={link}
            className="flex hover:text-blue-400 transition duration-300 hover:cursor-pointer text-sm mr-3"
          >
            more<span className="icon-arrow-right self-center"></span>
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default Card;
