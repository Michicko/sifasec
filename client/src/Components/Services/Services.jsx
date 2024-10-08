import { v4 as uuidv4 } from "uuid";
import { services } from "../../data";
import Service from "./Service";
import styles from './Service.module.css';

export default function Services() {
  return (
    <div className={styles["service-list"]}>
      {services.slice(0, 6).map((service) => {
        return <Service service={service} key={uuidv4()} />;
      })}
    </div>
  );
}
