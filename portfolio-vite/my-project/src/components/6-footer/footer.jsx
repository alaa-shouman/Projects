import React from "react";
import "./footer.css";
function Footer() {
  return (
    <footer className="flex justify-between mx-6 my-5 ">
      <ul className="flex gap-4 dark:text-slate-300 text-gray-600 bg-transparent	border-none">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Speaking</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <p className="dark:text-slate-300 text-gray-600">
        © 2024 , All rights reserved to Alaa Shouman
      </p>
    </footer>
  );
}

export default Footer;
