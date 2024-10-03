/* eslint-disable react/prop-types */
import styles from "./Header.module.css";
import Nav from "./Nav";

export default function Header({ children }) {
  return (
    <header className={styles.header}>
      <Nav />
      <div className={styles.container}>{children}</div>
    </header>
  );
}
