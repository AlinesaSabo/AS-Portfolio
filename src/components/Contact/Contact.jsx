import s from "./Contact.module.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTelegram,
  FaDiscord,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className={s.contactContainer}>
      <h2 className={s.title}>Get In Touch</h2>
      <p className={s.text}>
        Hello visitors!!! Thank you for stopping by my place. If you have any
        questions/ideas/projects, feel free to message me. I am always open for
        discussion. You can contact me just by clicking on the social media
        icon.
      </p>
      <div className={s.socialMedia}>
        <a
          href="https://github.com/AlinesaSabo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className={s.socialIcon} />
        </a>
        <a
          href="https://www.linkedin.com/in/alina-sabo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className={s.socialIcon} />
        </a>
        <a
          href="https://www.instagram.com/alinesa322"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className={s.socialIcon} />
        </a>
        <a
          href="https://t.me/alinesa322"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram className={s.socialIcon} />
        </a>
        <a
          href="https://discord.com/users/alinesa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord className={s.socialIcon} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
