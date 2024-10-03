/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiCardsDiamond } from '@mdi/js';
import styles from './Industry.module.css';

export default function Industry({ industry }) {
  return (
    <Link to={industry.link} className={styles.industry}>
      <span>{industry.title}</span>
      <Icon path={mdiCardsDiamond} className={styles["industry-icon"]} />
    </Link>
  );
}
