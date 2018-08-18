const Arena = require("../arena");

describe("Arena", () => {
  it("should have dimensions of arena", () => {
    const arena = new Arena("5 4");

    // bad tdd, but limited time
    expect(arena.dimensions.x).toBe(5);
    expect(arena.dimensions.y).toBe(4);
  });

  it("should add robot to arena", () => {
    const arena = new Arena("5 5");
    const sampleInitialisedRobot = {
      id: 1,
      position: { x: 1, y: 1 },
      direction: "N"
    };

    arena.addRobot(sampleInitialisedRobot);

    // bad tdd, but limited time
    expect(arena.robots).toHaveLength(1);
    expect(arena.robots[0]).toBe(sampleInitialisedRobot);
  });

  it("should tell robot to move", () => {
    const moveSpy = jest.fn();
    const sampleMovePattern = "LLMMLRM";
    const arena = new Arena("5 5");
    const sampleInitialisedRobot = {
      id: 1,
      position: { x: 1, y: 1 },
      direction: "N",
      move: moveSpy
    };

    arena.addRobot(sampleInitialisedRobot);
    arena.moveRobot(sampleInitialisedRobot.id, sampleMovePattern);

    expect(moveSpy).toHaveBeenCalledWith(sampleMovePattern);
  });

  it("should ask for robots position and direction", () => {
    const sampleReturn = "1 1 N";
    const positionSpy = jest.fn(() => sampleReturn);
    const arena = new Arena("5 5");
    const sampleInitialisedRobot = {
      id: 1,
      position: { x: 1, y: 1 },
      direction: "N",
      getPosition: positionSpy
    };

    arena.addRobot(sampleInitialisedRobot);
    const robotsPositions = arena.getRobotsPosition();

    // bad tdd, but limited time
    expect(positionSpy).toHaveBeenCalledTimes(1);
    expect(robotsPositions).toEqual([sampleReturn]);
  });
});
