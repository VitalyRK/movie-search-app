import { NavLink } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.not__found}>
      <h1 data-testid={"test-404"} className={styles.not__found__title}>
        Page Not Found
      </h1>
      <NavLink className={styles.not__found__button} to={"/"}>
        Get Back?
      </NavLink>
    </div>
  );
};

export default NotFound;
