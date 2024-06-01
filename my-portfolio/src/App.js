import "./App.css";
import Aboutme from "./components/aboutme";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import Projects from "./components/projects";

function App() {
  return (
    <div>
      <Navbar />
      <Aboutme />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
