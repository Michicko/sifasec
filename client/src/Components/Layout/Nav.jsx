import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import Icon from "@mdi/react";
import { mdiMenu, mdiClose, mdiArrowTopRight } from "@mdi/js";
import { useState } from "react";
import MobileNav from "./MobileNav";
import { navLinks } from "../../data";
import Navlink from "./Navlink";

export default function Nav() {
  const [isMobileNavOpened, setIsMobileNavOpened] = useState(false);

  return (
    <nav className={styles.nav}>
      <Link to={"/"} className={styles["nav-logo"]}>
        <img src="/images/logo.png" alt="sifasec logo" />
        <span>Sifasec</span>
      </Link>
      <div className={styles["nav-links"]}>
        {navLinks.map((link) => {
          return <Navlink link={link} key={link.id} />;
        })}
      </div>
      <MobileNav isOpened={isMobileNavOpened} />
      <button
        className={styles["nav-btn"]}
        onClick={() => setIsMobileNavOpened(!isMobileNavOpened)}
      >
        {isMobileNavOpened ? (
          <Icon className={styles["nav-icon"]} path={mdiClose} />
        ) : (
          <Icon className={styles["nav-icon"]} path={mdiMenu} />
        )}
      </button>
      <Link to={"/contact"} className={`${styles["nav-contact-btn"]} btn`}>
        <span className="icon-box">
          <Icon path={mdiArrowTopRight} className="icon btn-icon" />
        </span>
        <span>Get a quote</span>
      </Link>
    </nav>
  );
}
