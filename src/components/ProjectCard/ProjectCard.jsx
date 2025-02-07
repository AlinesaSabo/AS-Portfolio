import { Link } from "react-router-dom";
import s from "./ProjectCard.module.css";

const ProjectCard = ({ project }) => {
  return (
    <div className={s.projectCard}>
      <img src={project.image} alt={project.title} />
      <h3 className={s.projectTitle}>{project.title}</h3>
      <p className={s.projectDescription}>{project.description}</p>

      <div className={s.skills}>
        {project.skills.map((skill, index) => (
          <span key={index} className={s.skillBadge}>
            {skill}
          </span>
        ))}
      </div>

      <div className={s.buttons}>
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className={s.button}
        >
          Live Demo
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={s.button}
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
