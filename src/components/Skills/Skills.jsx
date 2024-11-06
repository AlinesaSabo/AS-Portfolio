import s from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={s.skillsContainer}>
      <div className={s.title}>
        <p>Technology stack 🔥</p>
      </div>
      <div className={s.imageWrapper}>
        <ul className={s.imageList}>
          <li className={s.imageItem}>
            <div className={s.imageCircle}>
              <img src="../../../public/img/Rectangle 1.png" alt="figma" />
            </div>
          </li>
          <li className={s.imageItem}>
            <div className={s.imageCircle}>
              <img src="../../../public/img/Rectangle 2.png" alt="react" />
            </div>
          </li>
          <li className={s.imageItem}>
            <div className={s.imageCircle}>
              <img src="../../../public/img/Rectangle 4.png" alt="node" />
            </div>
          </li>
          <li className={s.imageItem}>
            <div className={s.imageCircle}>
              <img src="../../../public/img/Rectangle 6.png" alt="js" />
            </div>
          </li>
          <li className={s.imageItem}>
            <div className={s.imageCircle}>
              <img src="../../../public/img/Rectangle 7.png" alt="css" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
