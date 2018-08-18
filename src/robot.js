const { parseInteger } = require("./utils");

module.exports = class Robot {
  constructor(id, positionString) {
    const [x, y, direction] = positionString.split(" ");

    this.id = id;
    this.position = { x: parseInteger(x), y: parseInteger(y) };
    this.direction = direction;
  }
  move(pattern = "") {
    const splitMovePattern = pattern.split("");

    splitMovePattern.forEach(command => {
      if (["L", "R"].includes(command)) {
        this._changeDirection(command);
      }

      if (command === "M") {
        this._moveRobot();
      }
    });
  }
  _changeDirection(command) {
    const leftDirectionChangeMap = {
      N: "W",
      W: "S",
      S: "E",
      E: "N"
    };

    const rightDirectionChangeMap = {
      N: "E",
      E: "S",
      S: "W",
      W: "N"
    };

    switch (command) {
      case "L":
        this.direction = leftDirectionChangeMap[this.direction];
        break;
      case "R":
        this.direction = rightDirectionChangeMap[this.direction];
        break;
      default:
        this.direction = this.direction;
    }
  }
  _moveRobot() {
    const increment = value => value + 1;
    const decrement = value => value - 1;
    const directionMoveMap = {
      E: { axis: "x", change: increment },
      W: { axis: "x", change: decrement },
      N: { axis: "y", change: increment },
      S: { axis: "y", change: decrement }
    };

    const changeOptions = directionMoveMap[this.direction];

    this.position[changeOptions.axis] = changeOptions.change(
      this.position[changeOptions.axis]
    );
  }
  getPosition() {
    return `${this.position.x} ${this.position.y} ${this.direction}`;
  }
};
