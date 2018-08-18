const { prepRobotAnswers, buildRobotQuestions } = require("./prompt-utils");
const startRobotWars = require("./start-robot-wars");
const prompt = require("prompt");

const initialQuestions = [
  {
    type: "input",
    name: "arenaSize",
    description: "what is the size of the arena?",
    required: true,
    type: "string"
  },
  {
    type: "input",
    name: "numOfRobots",
    description: "how many robots are there?",
    required: true,
    type: "number"
  }
];

prompt.message = "";
prompt.delimiter = "";
prompt.start();

const processRobotQuestions = initialResults => (err, results) => {
  if (err) {
    console.log(`Oops, something went wrong. Error message: ${err.message}`);
    return;
  }

  const robotsInfo = prepRobotAnswers(results);

  startRobotWars(initialResults.arenaSize, robotsInfo);
};

const processInitialQuestions = (err, results) => {
  if (err) {
    console.log(`Oops, something went wrong. Error message: ${err.message}`);
    return;
  }

  const robotInfoQuestions = buildRobotQuestions(results.numOfRobots);

  prompt.get(robotInfoQuestions, processRobotQuestions(results));
};

prompt.get(initialQuestions, processInitialQuestions);
