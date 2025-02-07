import s from "./SkillsCard.module.css";
import figma from "../../assets/img/figma.png";
import react from "../../assets/img/react.png";
import node from "../../assets/img/node.png";
import js from "../../assets/img/js.png";
import css from "../../assets/img/css.png";

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
      <div className={s.title}>
        <p>Technology stack 🔥</p>
      </div>
      <div className={s.imageWrapper}>
        <ul className={s.imageList}>
          {skills.map((skill, index) => (
            <li key={index} className={s.imageItem}>
              <div className={s.imageCircle}>
                <img src={skill.img} alt={skill.alt} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsCard;
