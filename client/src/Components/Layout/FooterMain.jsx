import { Link } from "react-router-dom";
import { navLinks, services } from "../../data";
import styles from "./Footer.module.css";
import { v4 as uuid } from "uuid";
import Newsletter from "../Newsletter/Newsletter";

export default function FooterMain() {
  return (
    <div className={styles["footer-main"]}>
      <div className="footer-contact">
        <Link to={"/"} className={styles["footer-logo-link"]}>
          <img
            src="/images/logo-black.png"
            alt="sifasec logo"
            className={styles["footer-logo"]}
          />
        </Link>
        <p>Miami, Florida,</p>
        <p>Email: support@sifasec.com</p>
        <p>phone: +1 (786) 309-3032</p>
      </div>
      <div className={styles["footer-quicklinks"]}>
        <h5>Quicklinks</h5>
        {navLinks.map((link) => {
          return (
            <Link className={styles["footer-link"]} key={uuid()} to={link.url}>
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className={styles["footer-service-links"]}>
        <h5>Services</h5>
        {services.map((service) => {
          return (
            <Link
              to={service.link}
              key={uuid()}
              className={styles["footer-link"]}
            >
              {service.title}
            </Link>
          );
        })}
      </div>
      <Newsletter />
    </div>
  );
}
