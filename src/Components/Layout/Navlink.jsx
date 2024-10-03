/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Navlink({ link }) {
  const { pathname: path, search } = useLocation();
  const pathname = path + search;
  return (
    <Link
      key={link.id}
      to={link.url}
      className={`${styles["nav-link"]} ${
        pathname === link.url ? styles["active"] : ""
      }`}
    >
      {link.name}
    </Link>
  );
}
