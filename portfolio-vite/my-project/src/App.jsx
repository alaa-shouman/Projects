import Main from "./components/3-main/main";
import Header from "./components/1-header/header";
import Hero from "./components/2-hero/hero";
import Contact from "./components/5-contact/contact";
import Footer from "./components/6-footer/footer";
import "./App.css";
import Courses from "./components/4-courses/course";

function App() {
  return (
    <div className="container" id="up">
      <Header />
      <Hero />
      <div className="devider" />
      <Main />
      <div className="devider" />
      <Courses />
      <div className="devider" />
      <Contact />
      <div className="devider" />
      <Footer />
    </div>
  );
}

export default App;
