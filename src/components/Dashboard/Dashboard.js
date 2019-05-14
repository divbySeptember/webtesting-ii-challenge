import React from "react";

const Dashboard = props => {
  return (
    <div>
      <h2>Dashboard</h2>
      <h3>
        Balls:{" "}
        <span>
          <button id="add-ball" onClick={props.addBall}>
            Add Ball
          </button>
          <button id="sub-ball" onClick={props.subBall}>
            Subtract Ball
          </button>
        </span>
      </h3>
      <h3>
        Strikes:{" "}
        <span>
          <button id="add-strike" onClick={props.addStrike}>
            Add Strike
          </button>
          <button id="sub-ball" onClick={props.subStrike}>
            Subtract Strike
          </button>
        </span>
      </h3>
      <h3>
        Fouls:{" "}
        <span>
          <button id="add-foul" onClick={props.addFoul}>
            Add Foul
          </button>
          <button id="sub-foul" onClick={props.subFoul}>
            Subtract Foul
          </button>
        </span>
      </h3>
      <h3>
        Hit:{" "}
        <span>
          <button id="add-hit" onClick={props.addHit}>
            Runner Hits
          </button>
        </span>
      </h3>
    </div>
  );
};

export default Dashboard;
