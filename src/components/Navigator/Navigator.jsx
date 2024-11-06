import { NavLink } from "react-router-dom";
import s from "./Navigator.module.css";
import Logo from "../Logo/Logo";

const Navigator = () => {
  return (
    <div className={s.wrapper}>
      <Logo className={s.logo} />
      <p className={s.name}>Alina Sabo</p>
      <div className={s.links}>
        <NavLink className={s.link} to="about-me">
          About me
        </NavLink>
        <NavLink className={s.link} to="skills">
          Skills
        </NavLink>
        <NavLink className={s.link} to="projects">
          Projects
        </NavLink>
      </div>
    </div>
  );
};

export default Navigator;
