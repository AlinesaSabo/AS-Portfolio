import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projects from "../../data/projectsData";
import s from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={s.projectsContainer}>
      <h3 className={s.title}>My Projects</h3>
      <div className={s.sliderWrapper}>
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            nextEl: `.${s.nextButton}`,
            prevEl: `.${s.prevButton}`,
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className={s.swiperContainer}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className={s.projectSlide}>
                <ProjectCard project={project} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
