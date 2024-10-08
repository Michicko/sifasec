/* eslint-disable react/prop-types */
import styles from "./Header.module.css";
import Nav from "./Nav";

export default function Header({ children, noBottom }) {
  return (
    <header
      className={`${styles.header} ${noBottom ? styles["no-bottom"] : ""}`}
    >
      <Nav />
      <div className={styles.container}>{children}</div>
    </header>
  );
}
