const { prepRobotAnswers, buildRobotQuestions } = require('./lib/prep-answers');
const game = require('./lib/game');
const prompt = require('prompt');

const initialQuestions = [
	{
		type: 'input',
		name: 'arenaSize',
		description: 'what is the size of the arena?',
		required: true,
		type: 'string'
	},
	{
		type: 'input',
		name: 'numOfRobots',
		description: 'how many robots are there?',
		required: true,
		type: 'number'
	}
];

prompt.message = '';
prompt.delimiter = '';
prompt.start();

const processRobotQuestions = initialResults => (err, results) => {
	const robotMoves = prepRobotAnswers(results);

	game(initialResults.arenaSize, robotMoves);
};

const processInitialQuestions = (err, results) => {
	const robotInfoQuestions = buildRobotQuestions(results.numOfRobots);

	prompt.get(robotInfoQuestions, processRobotQuestions(results));
};

prompt.get(initialQuestions, processInitialQuestions);
