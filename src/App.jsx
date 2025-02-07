import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./App.css";
import { AnimatePresence, motion } from "framer-motion";
import Navigator from "./components/Navigator/Navigator";
import About from "./pages/AboutMe/AboutMe";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import NotFound from "./pages/NotFoud/NotFound";
import ParticlesComponent from "./components/ParticlesBackground/ParticlesBackground"; // Подключаем компонент частиц

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
  const location = useLocation();

  return (
    <div className="App">
      <Navigator />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate to="/about-me" />} />
          <Route
            path="/about-me"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />
          <Route
            path="/skills"
            element={
              <PageTransition>
                <Skills />
              </PageTransition>
            }
          />
          <Route
            path="/projects"
            element={
              <PageTransition>
                <Projects />
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFound />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
