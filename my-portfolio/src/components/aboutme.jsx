import React, { useState } from "react";
import profileImage from "../img/remini.jpg";
import Subdetails from "./subdetails";
function Aboutme() {
  return (
    <section className="about-section bg-gray-100 py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Brief Introduction
        </h2>
        <img
          src={profileImage}
          alt="Your Profile Picture"
          className="rounded-full w-48 h-48 mx-auto mb-8 border-4 border-blue-500"
        />
        <Subdetails />
      </div>
    </section>
  );
}

export default Aboutme;
