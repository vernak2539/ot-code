const Robot = require("./robot");
const Arena = require("./arena");

module.exports = (arenaSize, robotsInfo) => {
  const arena = new Arena(arenaSize);

  robotsInfo.forEach((robotInfo, index) => {
    const robot = new Robot(index, robotInfo.position);

    arena.addRobot(robot);
  });

  robotsInfo.forEach((robotInfo, index) => {
    arena.moveRobot(index, robotInfo.move);
  });

  console.log(arena.getRobotsPosition());
};
