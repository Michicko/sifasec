/* eslint-disable react/prop-types */
import styles from "./Header.module.css";

export default function HeaderBottom({ children }) {
  return <div className={styles.bottom}>{children}</div>;
}
