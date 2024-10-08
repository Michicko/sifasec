/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiArrowTopRight } from "@mdi/js";

export default function Button({ text, url }) {
  return (
    <Link to={url} className={"btn"}>
      <span className="icon-box">
        <Icon path={mdiArrowTopRight} className="icon btn-icon" />
      </span>
      <span>{text}</span>
    </Link>
  );
}
