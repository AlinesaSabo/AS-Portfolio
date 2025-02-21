/* eslint-disable react/prop-types */
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import s from "./ProjectCard.module.css";

const ProjectCard = ({ project }) => {
  return (
    <div className={s.projectCard}>
      <div
        className={s.imageWrapper}
        onClick={() => window.open(project.liveDemo, "_blank")}
      >
        <img
          src={project.image}
          alt={project.title}
          className={s.projectImage}
        />
        <div className={s.hoverOverlay}>
          Live Demo <HiOutlineArrowNarrowRight />
        </div>
      </div>

      <h3 className={s.projectTitle}>{project.title}</h3>
      <p className={s.projectDescription}>{project.description}</p>

      <div className={s.skills}>
        {project.skills.map((skill, index) => (
          <span key={index} className={s.skillBadge}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
