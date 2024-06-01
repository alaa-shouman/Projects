import React, { useRef } from "react";
import "./hero.css";
import Lottie from "lottie-react";
import developer from "../../../src/animation/developer.json";
import { motion } from "framer-motion";
function Hero() {
  const lottieRef = useRef();
  return (
    <section className="hero flex mt-8 mx-8" id="hero">
      <div className="leftSection ">
        <div className="parent-avatar list-image-none	flex justify-start my-2 gap-4 items-end min-h-24">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, duration: 2, type: "spring" }}
            src="./pic/remini-modified.png"
            alt="profile"
            className="avatar ml-3 "
          />
          <div className="icon-verified text-blue-500 "></div>
        </div>
        {/*  */}
        <h1 className="title my-5 dark:text-slate-200 text-gray-700 min-h-12">
          React , React Native Developer
        </h1>
        <p className="sub-title dark:text-slate-300 text-gray-600 mb-5">
          Greetings! I'm Alaa Shouman, a recent Computer Science graduate from
          the Lebanese University, and I'm thrilled to be embarking on a journey
          of innovation and growth in the tech world. With a strong foundation
          in computer science principles and a hunger for knowledge, I've
          cultivated a wide range of skills across various technologies.
        </p>
        <div className="all-icons flex gap-4 dark:text-slate-300 text-gray-600">
          <a href="https://github.com/alaa-shouman/">
            <div className="icon icon-github"></div>
          </a>
          <a href="https://www.linkedin.com/in/alaa-shouman-2665691b6/">
            <div className="icon icon-linkedin-square"></div>
          </a>
          <a href="https://www.instagram.com/3ala2_shouman/">
            <div className="icon icon-instagram"></div>
          </a>
          <a href="https://twitter.com/3ala2_shouman">
            <div className="icon icon-twitter"></div>
          </a>
        </div>
        {/*  */}
      </div>
      <div className="rightSection animation">
        <Lottie animationData={developer} className="" lottieRef={lottieRef} />
      </div>
    </section>
  );
}

export default Hero;
