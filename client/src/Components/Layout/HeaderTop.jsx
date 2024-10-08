import styles from "./Header.module.css";

// eslint-disable-next-line react/prop-types
export default function HeaderTop({ children, noText }) {
  return (
    <div className={`${styles.top} ${noText ? styles["no-text"] : ""}`}>{children}</div>
  );
}
