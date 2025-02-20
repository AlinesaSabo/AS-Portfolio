import { Link } from "react-scroll";
import s from "./Navigator.module.css";
import Logo from "../Logo/Logo";

const Navigator = () => {
  const navLinks = [
    { path: "about", label: "About me" },
    { path: "skills", label: "Skills" },
    { path: "projects", label: "Projects" },
  ];

  return (
    <div className={s.wrapper}>
      <Logo className={s.logo} />
      <div className={s.links}>
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            smooth={true}
            duration={500}
            className={s.link}
            activeClass={s.active}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigator;
