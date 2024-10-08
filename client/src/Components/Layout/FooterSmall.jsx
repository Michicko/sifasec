import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function FooterSmall() {
  return (
    <div className={styles["footer-small"]}>
      <p>&copy; {new Date().getUTCFullYear()} All rights reserved.</p>
      <p>
        <Link className={styles["footer-link"]} to={"/terms-of-use"}>
          Terms of use
        </Link>
        <Link className={styles["footer-link"]} to={"/privacy-policy"}>
          Privacy policy
        </Link>
      </p>
    </div>
  );
}
