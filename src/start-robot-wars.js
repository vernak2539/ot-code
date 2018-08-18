const Robot = require("./robot");
const Arena = require("./arena");

module.exports = (arenaSize, robotsInfo) => {
  const arena = new Arena(arenaSize);

  robotsInfo.forEach((robotInfo, index) => {
    const robot = new Robot(index, robotInfo.position, arena.dimensions);

    arena.addRobot(robot);
  });

  robotsInfo.forEach((robotInfo, index) => {
    arena.moveRobot(index, robotInfo.move);
  });

  console.log(
    `Final positions of robots --> ${arena.getRobotsPosition().join(", ")}`
  );
};
