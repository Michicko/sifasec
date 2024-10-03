import styles from "./Header.module.css";

// eslint-disable-next-line react/prop-types
export default function HeaderTop({ children }) {
  return <div className={styles.top}>{children}</div>;
}
