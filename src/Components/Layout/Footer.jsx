import styles from "./Footer.module.css";
import FooterMain from "./FooterMain";
import FooterSmall from "./FooterSmall";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <FooterMain />
      <FooterSmall />
    </footer>
  );
}
