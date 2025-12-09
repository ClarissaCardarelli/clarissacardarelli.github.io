import { Link } from "react-router";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
    </>
  );
}
export default Home;
