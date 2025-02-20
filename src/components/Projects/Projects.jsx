import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projects from "../../data/projectsData";
import s from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={s.projectsContainer}>
      <h3 className={s.title}>Technology stack</h3>
      <div className={s.projectsGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
