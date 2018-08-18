const { parseInteger } = require("./utils");

module.exports = class Robot {
  constructor(positionString) {
    const [x, y, direction] = positionString.split(" ");

    this.position = { x: parseInteger(x), y: parseInteger(y) };
    this.direction = direction;
  }
  move(pattern) {
    const splitMovePattern = pattern.split("");

    splitMovePattern.forEach(command => {
      if (["L", "R"].includes(command)) {
        this._changeDirection(command);
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
  getPosition() {
    return `${this.position.x} ${this.position.y} ${this.direction}`;
  }
};
