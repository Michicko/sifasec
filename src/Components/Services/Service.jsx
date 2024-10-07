/* eslint-disable react/prop-types */
import styles from "./Service.module.css";

export default function Service({ service, theme }) {
  return (
    <div
      className={`${styles.service} ${theme ? styles[theme] : styles["dark"]}`}
    >
      {service.icon}
      <h3>{service.title}</h3>
      <p>{service.text}</p>
    </div>
  );
}
