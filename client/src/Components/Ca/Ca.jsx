import styles from "./Ca.module.css";
import Button from "../Button";

export default function Ca() {
  return (
    <section className={`${styles["ca"]}`}>
      <div className={styles["ca-box"]}>
        <h3>Solve your toughest cybersecurity challenges</h3>
        <p>
          Get the professional services, managed services and technology
          platforms used by companies across a broadset of industries.
        </p>
        <Button text={"Get started now"} url={"/contact"} />
      </div>
    </section>
  );
}
