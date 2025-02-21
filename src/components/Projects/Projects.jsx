import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projects from "../../data/projectsData";
import s from "./Projects.module.css";
import { IoCaretBackOutline, IoCaretForwardOutline } from "react-icons/io5";

const Projects = () => {
  return (
    <div className={s.projectsContainer}>
      <h3 className={s.title}>My Projects</h3>

      <div className={s.sliderWrapper}>
        <button className={`${s.navButton} ${s.prevButton}`}>
          <IoCaretBackOutline size={20} />
        </button>

        <Swiper
          modules={[Navigation, Autoplay]}
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

        <button className={`${s.navButton} ${s.nextButton}`}>
          <IoCaretForwardOutline size={20} />
        </button>
      </div>
    </div>
  );
};

export default Projects;
