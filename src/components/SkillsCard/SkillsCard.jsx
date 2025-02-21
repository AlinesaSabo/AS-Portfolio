import s from "./SkillsCard.module.css";
import StarBorder from "../StarBorder/StarBorder";
import { skills } from "../../data/skillsData";

const SkillsCard = () => {
  return (
    <div className={s.skillsContainer}>
      <h3 className={s.title}>Technology stack</h3>
      <div className={s.imageWrapper}>
        <ul className={s.imageList}>
          {skills.map((skill, index) => (
            <li key={index} className={s.imageItem}>
              <StarBorder
                as="button"
                className="custom-class"
                color="#f7aaa0"
                speed="2s"
              >
                <div className={s.imageCircle}>{skill.svg}</div>
              </StarBorder>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsCard;
