/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Navigator from "./components/Navigator/Navigator";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import "./App.css";
import SkillsCard from "./components/SkillsCard/SkillsCard";
import Contact from "./components/Contsct/Contact";
import Waves from "./components/Waves/Waves";
import Footer from "./components/Footer/Footer";

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <div className="App">
      <Navigator />
      <div className="waves-background">
        <Waves
          lineColor="#2a2a2a"
          backgroundColor="#3a2d3d"
          waveSpeedX={0.03}
          waveSpeedY={0.06}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.05}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </div>
      <PageTransition>
        <div id="about" className="section">
          <About />
        </div>
      </PageTransition>
      <PageTransition>
        <div id="skills" className="section">
          <SkillsCard />
        </div>
      </PageTransition>
      <PageTransition>
        <div id="projects" className="section">
          <Projects />
        </div>
      </PageTransition>
      <PageTransition>
        <div id="contscts" className="section">
          <Contact />
        </div>
      </PageTransition>
      <Footer />
    </div>
  );
}

export default App;
