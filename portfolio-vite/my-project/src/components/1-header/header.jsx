// header.jsx
import { useEffect, useState } from "react";
import "./header.css";
import Model from "./model";
import FileSaver from "file-saver";
function Header() {
  const [mode, setMode] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
  const [modelShown, setModelShown] = useState(false);
  const saveFile = () => {
    FileSaver.saveAs("./alaa.pdf", "Alaa_CV.pdf");
  };
  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
    const handleResize = () => setIsMobile(window.innerWidth < 800);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mode]);

  const toggleModel = () => setModelShown(!modelShown);
  const toggleMode = () => {
    localStorage.setItem("currentMode", mode === "dark" ? "light" : "dark");

    setMode(localStorage.getItem("currentMode"));
  };

  const navLinks = [
    { label: "About", href: "#" },
    { label: "Article", href: "#hero" },
    { label: "Projects", href: "#projects" },
    { label: "Courses", href: "#Courses" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="mt-3 px-4 relative">
      {isMobile ? (
        <MobileMenu
          toggleModel={toggleModel}
          modelShown={modelShown}
          toggleMode={toggleMode}
          mode={mode}
          cv={saveFile}
        />
      ) : (
        <DesktopMenu
          navLinks={navLinks}
          toggleMode={toggleMode}
          mode={mode}
          cv={saveFile}
        />
      )}
      {modelShown && <div className="model-overlay" />}
    </header>
  );
}

const MobileMenu = ({ toggleModel, modelShown, toggleMode, mode, cv }) => (
  <div className="">
    <div className="flex items-center justify-between ">
      <button
        className="btn-primary mr-4 animate_btn "
        onClick={toggleModel}
        aria-label="Toggle Menu"
      >
        <span className="icon-menu custom-icon"></span>
        {modelShown && (
          <div className="absolute top-full left-0 mt-2 bg-white rounded-md shadow-lg py-2">
            <Model onCloseModel={toggleModel} />
          </div>
        )}
      </button>
      <button className="btn-primary mr-4 animate_btn" onClick={cv}>
        <span className="icon-link"></span>
      </button>
      <button
        className="btn-primary animate_btn"
        aria-label="Toggle Theme"
        onClick={toggleMode}
      >
        <span className={mode === "dark" ? "icon-sun" : "icon-moon-o"}></span>
      </button>
    </div>
  </div>
);

const DesktopMenu = ({ navLinks, toggleMode, mode, cv }) => (
  <nav className="flex justify-between items-center">
    <div />
    <ul className="flex gap-4 px-10 justify-center items-center rounded-full font-bold">
      {navLinks.map((link) => (
        <li
          key={link.label}
          className="nav-link dark:hover:text-blue-400 hover:text-blue-400 hover:tracking-wide rounded-full p-3 dark:text-white text-slate-500 "
        >
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
    </ul>
    <div className="flex items-center">
      <button
        className="btn-primary mr-4 animate_btn"
        aria-label="Toggle Theme"
        onClick={toggleMode}
      >
        <span className={mode === "dark" ? "icon-sun" : "icon-moon-o"}></span>
      </button>
      <button className="btn-primary mr-4 animate_btn" onClick={cv}>
        <span className="icon-link"></span>
      </button>
    </div>
  </nav>
);

export default Header;
