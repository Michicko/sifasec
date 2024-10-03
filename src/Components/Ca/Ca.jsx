import { Link } from "react-router-dom";
import styles from "./Ca.module.css";
import Icon from "@mdi/react";
import { mdiArrowTopRight } from "@mdi/js";

export default function Ca() {
  return (
    <section className={`${styles["ca"]}`}>
      <div className={styles['ca-box']}>
        <h3>Solve your toughest cybersecurity challenges</h3>
        <p>
          Get the professional services, managed services and technology
          platforms used by companies across a broadset of industries.
        </p>
        <Link to={"/contact"} className={`${styles["nav-contact-btn"]} btn`}>
          <span className="icon-box">
            <Icon path={mdiArrowTopRight} className="icon btn-icon" />
          </span>
          <span>Get Started now</span>
        </Link>
      </div>
    </section>
  );
}
