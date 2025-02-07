import { Link } from "react-router-dom";
import s from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={s.notFoundContainer}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className={s.button}>
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
