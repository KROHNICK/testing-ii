import React from "react";

const Display = props => {
  return (
    <div className="display">
      <h3>{props.strike} Strikes</h3>
      <h3>{props.ball} Balls</h3>
    </div>
  );
};

export default Display;
