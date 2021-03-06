exports.prepRobotAnswers = answers => {
  const robotAnswerObject = Object.keys(answers).reduce(
    (memo, robotInfoKey) => {
      const splitKey = robotInfoKey.split("_");
      memo[splitKey[0]] = memo[splitKey[0]] || {};
      memo[splitKey[0]][splitKey[1]] = answers[robotInfoKey];
      return memo;
    },
    {}
  );

  return Object.keys(robotAnswerObject).reduce((memo, key) => {
    memo.push(robotAnswerObject[key]);
    return memo;
  }, []);
};

exports.buildRobotQuestions = numOfRobots => {
  const robotInfo = [];
  for (var i = 0; i < numOfRobots; i++) {
    robotInfo.push(
      {
        type: "input",
        name: `${i}_position`,
        description: `what is the position of robot ${i + 1}`,
        required: true,
        type: "string"
      },
      {
        type: "input",
        name: `${i}_move`,
        description: `what is the move of robot ${i + 1}`,
        required: true,
        type: "string"
      }
    );
  }

  return robotInfo;
};
