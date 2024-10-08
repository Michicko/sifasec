/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import { navLinks } from "../../data";

export default function MobileNav({ isOpened }) {
  return (
    <div className={`${styles["nav-mobile"]} ${isOpened ? styles["isOpened"] : ""}`}>
      {navLinks.map((link) => {
        return (
          <Link to={link.url} key={link.id} className={styles['nav-link']}>
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
