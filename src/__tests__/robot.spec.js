const Robot = require("../robot");

describe("Robot", () => {
  it("should store robot id correctly", () => {
    const robotId = 1;
    const robot = new Robot(robotId, "3 2 E");

    expect(robot.id).toBe(robotId);
  });

  it("should parse position and direction correctly", () => {
    const robot = new Robot(1, "3 2 E");

    // bad tdd, but limited time
    expect(robot.position.x).toBe(3);
    expect(robot.position.y).toBe(2);
    expect(robot.direction).toBe("E");
  });

  it("should return position information", () => {
    const positionInfo = "3 3 N";
    const robot = new Robot(1, positionInfo);

    robot.move("LM");

    const result = robot.getPosition();

    expect(result).toBe("2 3 W");
  });

  describe("changing robot direction", () => {
    const directionChangeTestCases = [
      // left turn cases
      ["3 3 N", "L", "W"],
      ["3 3 W", "L", "S"],
      ["3 3 S", "L", "E"],
      ["3 3 E", "L", "N"],

      // right turn cases
      ["3 3 N", "R", "E"],
      ["3 3 E", "R", "S"],
      ["3 3 S", "R", "W"],
      ["3 3 W", "R", "N"]
    ];

    test.each(directionChangeTestCases)(
      "when starting with %s it should rotate %s to face %s",
      (initialPosition, wayToTurn, expected) => {
        const robot = new Robot(1, initialPosition);

        robot.move(wayToTurn);

        expect(robot.direction).toBe(expected);
      }
    );
  });

  describe("moving robot", () => {
    const movingRobotTestCases = [
      ["x", "E", "1 1", 2],
      ["x", "W", "1 1", 0],
      ["y", "N", "1 1", 2],
      ["y", "S", "1 1", 0]
    ];

    test.each(movingRobotTestCases)(
      "should move robot along %s axis when direction is %s",
      (axis, direction, coordinates, expected) => {
        const startPosition = `${coordinates} ${direction}`;
        const robot = new Robot(1, startPosition);

        robot.move("M");

        expect(robot.position[axis]).toBe(expected);
      }
    );
  });
});
