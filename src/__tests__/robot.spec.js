const Robot = require("../robot");

describe("Robot", () => {
  it("should parse position and direction correctly", () => {
    const robot = new Robot("3 2 E");

    // bad tdd, but limited time
    expect(robot.position.x).toBe(3);
    expect(robot.position.y).toBe(2);
    expect(robot.direction).toBe("E");
  });

  it("should return position information", () => {
    const positionInfo = "3 3 N";
    const robot = new Robot(positionInfo);

    const result = robot.getPosition();

    expect(result).toBe(positionInfo);
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
        const robot = new Robot(initialPosition);

        robot.move(wayToTurn);

        expect(robot.direction).toBe(expected);
      }
    );
  });
});
