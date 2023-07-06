import { useState } from "react";

type Colors = {
  red: string;
  yellow: string;
  green: string;
  [key: string]: string;
};

export const FunctionalTrafficLight = () => {
  const [color, colorSetter] = useState("red");
  const nextColor: Colors = {
    red: "yellow",
    yellow: "green",
    green: "red",
  };

  const colorFilter = (filter: string) => (color === filter ? filter : "black");

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        <div className={`circle ${colorFilter("red")}`}></div>
        <div className={`circle ${colorFilter("yellow")}`}></div>
        <div className={`circle ${colorFilter("green")}`}></div>
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
