import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import s from "./About.module.css";
import foto from "../../assets/img/foto.webp"; // Убедитесь, что путь к изображению правильный

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={s.aboutContainer}
    >
      <div className={s.textSection}>
        <h1 className={s.title}>
          Hi, I'm <span className={s.highlight}>Alina</span>, a <br />
          <span className={s.uiux}>Front-End Developer</span>.
        </h1>
        <p className={s.description}>
          A passionate and motivated Developer. My expertise lies in building
          engaging and interactive web applications using modern technologies
          like HTML, CSS, JavaScript/TypeScript, and React.
        </p>
        <p className={s.description}>
          With every project, I aim to improve my skills and stay up-to-date
          with the latest industry trends. I thrive on challenges and embrace
          opportunities to learn and grow, which drives my determination and
          persistence. I approach every task with a methodical mindset, ensuring
          I always meet deadlines and deliver high-quality results.
        </p>
        <p className={s.description}>
          My journey as a developer is driven by my love for problem-solving,
          creativity, and continuous learning. I am always eager to explore new
          technologies, improve my craft, and build intuitive, user-friendly
          digital solutions.
        </p>
        <div className={s.buttons}>
          <Link to="/projects" className={s.seeProjects}>
            See My Projects
          </Link>
        </div>
      </div>
      <div className={s.imageSection}>
        <img src={foto} alt="Alina" className={s.profileImage} />
      </div>
    </motion.div>
  );
};

export default About;
