import { Component } from "react";

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

export class ClassTrafficLight extends Component {
  state = { color: "red" };

  lightOnOrOff = (filter: string) =>
    this.state.color === filter ? filter : "black";

  render() {
    const { color } = this.state;
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          <div className={`circle ${this.lightOnOrOff("red")}`}></div>
          <div className={`circle ${this.lightOnOrOff("yellow")}`}></div>
          <div className={`circle ${this.lightOnOrOff("green")}`}></div>
        </div>
        <button
          className="next-state-button"
          onClick={() => this.setState({ color: nextColor[color] })}
        >
          Next State
        </button>
      </div>
    );
  }
}
