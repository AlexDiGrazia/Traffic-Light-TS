import { useState } from "react";

type Colors = {
  red: string;
  yellow: string;
  green: string;
  [key: string]: string;
};

const nextColor: Colors = {
  red: "green",
  yellow: "red",
  green: "yellow",
};

export const FunctionalTrafficLight = () => {
  const [color, colorSetter] = useState("red");

  const lightOnOrOf = (filter: string) => (color === filter ? filter : "black");

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        <div className={`circle ${lightOnOrOf("red")}`}></div>
        <div className={`circle ${lightOnOrOf("yellow")}`}></div>
        <div className={`circle ${lightOnOrOf("green")}`}></div>
      </div>
      <button
        className="next-state-button"
        onClick={() => colorSetter(nextColor[color])}
      >
        Next State
      </button>
    </div>
  );
};
