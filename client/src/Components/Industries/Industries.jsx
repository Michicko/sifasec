/* eslint-disable react/prop-types */
import { industries } from "../../data";
import Industry from "./Industry";
import { v4 as uuid } from "uuid";
import styles from "./Industry.module.css";

export default function Industries({theme}) {
  return (
    <div className={styles["industry-list"]}>
      {industries.map((industry) => {
        return <Industry industry={industry} theme={theme} key={uuid()} />;
      })}
    </div>
  );
}
