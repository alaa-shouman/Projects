import { useState } from "react";
import Card from "./coursecard";
import "./course.css";
import courses from "./courses.js";
import { AnimatePresence } from "framer-motion";

function Courses() {
  const [active, setActive] = useState("All Projects");


  const gallery = courses;

  return (
    <main className="gap-4 mx-auto px-8 " id="Courses">
      <h1 className="dark:text-slate-200 text-slate-700 text-3xl mb-5">
        Courses & Certificates
      </h1>
      <section className="flex flex-wrap gap-x-4 gap-y-8 justify-center">
        {gallery.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            img={item.imgPath}
            certified={item.certified}
            subtitle={item.subtitle}
            link={item.link}
            source={item.source}
          />
        ))}
      </section>
    </main>
  );
}

export default Courses;
