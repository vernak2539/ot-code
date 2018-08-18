const { prepRobotAnswers, buildRobotQuestions } = require("../prompt-utils");

describe("building robot questions", () => {
  it("should build two questions based for each robot", () => {
    const numOfRobots = 3;

    const result = buildRobotQuestions(numOfRobots);

    expect(result).toHaveLength(numOfRobots * 2);
  });

  const questionTypesTestCases = [["position", 2, 2], ["move", 3, 3]];

  test.each(questionTypesTestCases)(
    "it should have a %s question for each robot",
    (questionType, numOfRobots, expected) => {
      const questions = buildRobotQuestions(numOfRobots);
      const result = questions.reduce((memo, question) => {
        if (question.name.indexOf(questionType) > -1) {
          memo.push(question);
        }
        return memo;
      }, []);

      expect(result).toHaveLength(expected);
    }
  );
});

describe("prepping answers", () => {
  it("should return correct format of answers", () => {
    const answers = {
      "0_position": "1",
      "0_move": "1s",
      "1_position": "2",
      "1_move": "2s"
    };
    const expected = [
      { position: "1", move: "1s" },
      { position: "2", move: "2s" }
    ];

    const result = prepRobotAnswers(answers);

    expect(result).toEqual(expected);
  });
});
