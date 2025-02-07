import { NavLink } from "react-router-dom";
import s from "./Navigator.module.css";
import Logo from "../Logo/Logo";

const Navigator = () => {
  const navLinks = [
    { path: "/about-me", label: "About me" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
  ];

  return (
    <div className={s.wrapper}>
      <Logo className={s.logo} />
      <div className={s.links}>
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            className={({ isActive }) =>
              isActive ? `${s.link} ${s.active}` : s.link
            }
            to={link.path}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navigator;
