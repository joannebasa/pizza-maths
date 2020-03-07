import React from "react";
import "../styles/ToggleSwitch.css";

const ToggleSwitch = ({
  title,
  uniqueId,
  onChangeLeft,
  onChangeRight,
  isMetric
}) => {
  console.log(isMetric, "metric prop");
  return (
    <div className="switch-field">
      <div className="switch-title">{title}</div>
      <input
        type="radio"
        id={`switch_left${uniqueId}`}
        onChange={onChangeLeft}
        checked={!isMetric}
        value="in"
      />
      <label htmlFor={`switch_left${uniqueId}`}>in</label>
      <input
        type="radio"
        id={`switch_right${uniqueId}`}
        onChange={onChangeRight}
        checked={isMetric}
      />
      <label htmlFor={`switch_right${uniqueId}`}>cm</label>
    </div>
  );
};

export default ToggleSwitch;