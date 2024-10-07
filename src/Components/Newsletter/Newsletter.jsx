import styles from "./Newsletter.module.css";
import Icon from "@mdi/react";
import { mdiArrowTopRight } from "@mdi/js";

export default function Newsletter() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.newsletter}>
      <h6>Newsletter</h6>
      <p>
        Sign up for the latest tips, thoughts and insights from us about
        cybersecurity.
      </p>
      <form
        className={styles["newsleter-form"]}
        onSubmit={handleNewsletterSubmit}
      >
        <div className={styles["newsletter-form-group"]}>
          <input
            type="email"
            name="newsleter-email"
            id="newsleter-email"
            className={styles["newsletter-input"]}
            placeholder={"Your email address"}
            required
            autoComplete="on"
          />
          <button
            type="submit"
            className={` ${styles["newsletter-btn"]} icon-box sm`}
          >
            <Icon
              path={mdiArrowTopRight}
              className={`${styles["btn-icon"]} icon sm btn-icon`}
            />
          </button>
        </div>
      </form>
    </div>
  );
}
