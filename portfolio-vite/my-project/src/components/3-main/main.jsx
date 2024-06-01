import { useState } from "react";
import Card from "./card";
import "./main.css";
import myProjects from "./projects.js";
import { AnimatePresence } from "framer-motion";

function Main() {
  const [active, setActive] = useState("All Projects");

  const toggleButton = (category) => {
    setActive(category);
  };
  const gallery = myProjects.filter((item) => {
    return active === "All Projects" || item.category === active;
  });

  return (
    <main className="flex gap-4 mx-auto px-6 align-start" id="projects">
      <section className="flex leftSection ">
        <button
          className={active === "All Projects" ? "active btn" : "btn"}
          onClick={() => toggleButton("All Projects")}
        >
          All Projects
        </button>
        <button
          className={active === "React_JS" ? "active btn" : "btn"}
          onClick={() => toggleButton("React_JS")}
        >
          React JS
        </button>
        <button
          className={active === "React_Native" ? "active btn" : "btn"}
          onClick={() => toggleButton("React_Native")}
        >
          React Native
        </button>
        <button
          className={active === "Laravel" ? "active btn" : "btn"}
          onClick={() => toggleButton("Laravel")}
        >
          Laravel
        </button>
        <button
          className={active === "Others" ? "active btn" : "btn"}
          onClick={() => toggleButton("Others")}
        >
          Others
        </button>
      </section>
      <section className="rightSection flex flex-wrap gap-x-4 gap-y-8">
        <AnimatePresence>
          {gallery.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              img={item.imgPath}
              category={item.category}
              subtitle={item.subtitle}
              link={item.link}
            />
          ))}
        </AnimatePresence>
      </section>
    </main>
  );
}

export default Main;
