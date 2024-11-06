import Particles from "@tsparticles/react";
import Navigator from "./components/Navigator/Navigator";
import "./App.css";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div>
      <Particles id="particles" />
      <Navigator />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
