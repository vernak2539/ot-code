const { parseInteger } = require("./utils");

module.exports = class Robot {
  constructor(id, positionString, arenaSize) {
    const [x, y, direction] = positionString.split(" ");

    this.id = id;
    this.position = { x: parseInteger(x), y: parseInteger(y) };
    this.direction = direction;
    this.arenaSize = arenaSize;
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
    const newPosition = changeOptions.change(this.position[changeOptions.axis]);

    if (this._canMove(changeOptions.axis, newPosition)) {
      this.position[changeOptions.axis] = newPosition;
    }
  }
  _canMove(axis, potentialPosition) {
    const maxMove = this.arenaSize[axis];
    const minMove = 0;

    return potentialPosition >= minMove && potentialPosition <= maxMove;
  }
  getPosition() {
    return `${this.position.x} ${this.position.y} ${this.direction}`;
  }
};
