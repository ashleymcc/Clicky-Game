import React from "react";
import "./style.css";

function Clickitem(props) {
  return (
    <div
      role="imgholder"
      aria-label="click-tile"
      onClick={() => props.handleClick(props.id)}
      style={{ backgroundImage: `url("${props.image}")` }}
      className={`click-tile${props.shake ? " shake" : ""}`}
    />
  );
}

export default Clickitem;
