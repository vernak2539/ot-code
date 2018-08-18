const parseInteger = int => parseInt(int, 10);

module.exports = class Arena {
  constructor(dimensionsString) {
    const [x, y] = dimensionsString.split(" ");

    this.robots = [];
    this.dimensions = { x: parseInteger(x), y: parseInteger(y) };
  }
  addRobot(robot) {
    this.robots.push(robot);
  }
  moveRobot(robotId, pattern) {
    const robotToMove = this.robots.find(robot => robot.id === robotId);

    robotToMove.move(pattern);
  }
  getRobotsPosition() {
    return this.robots.reduce((memo, robot) => {
      memo.push(robot.getPosition());
      return memo;
    }, []);
  }
};
