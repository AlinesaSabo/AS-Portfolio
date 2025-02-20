import s from "./SkillsCard.module.css";
import figma from "../../assets/img/figma.png";
import react from "../../assets/img/react.png";
import node from "../../assets/img/node.png";
import js from "../../assets/img/js.png";
import css from "../../assets/img/css.png";
import StarBorder from "../StarBorder/StarBorder";

const SkillsCard = () => {
  const skills = [
    { img: figma, alt: "Figma" },
    { img: react, alt: "React" },
    { img: node, alt: "Node.js" },
    { img: js, alt: "JavaScript" },
    { img: css, alt: "CSS" },
  ];

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
                <div className={s.imageCircle}>
                  <img src={skill.img} alt={skill.alt} />
                </div>
              </StarBorder>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsCard;
