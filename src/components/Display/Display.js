import React from "react";

const Display = props => {
  return (
    <div>
      <h2>At Bat:</h2>
      <div>
        <h3>Balls: {props.stats.balls}</h3>
        <h3>Strikes: {props.stats.strikes}</h3>
      </div>
    </div>
  );
};

export default Display;
