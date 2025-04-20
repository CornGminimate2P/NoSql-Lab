//const readline = require('readline');
//const readInterface = readline.createInterface({
//	input: process.stdin,
//	output: process.stdout
//});
//readInterface.question('Enter your score 0 - 100: ', (score) => {
//	readInterface.close();
//	score = Number(score);
//	if (score < 0 || score > 100) {
//		console.log('You entered an invalid score.');
//		return;
//	}
//	if (score >= 80) {
//		console.log('Excellent! You got A.');
//	} else if (score >= 70) {
//		console.log('Good job! You got A.');
//	} else if (score >= 60) {
//		console.log('Not bad! C is your grade.');
//	} else if (score >= 50) {
//		console.log('Becareful! D is your grade.');
//	} else {
//		console.log('Try it harder, You have F.');
//	}
//});

const readline = require('readline');
const readInterface = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

readInterface.question('Enter your Homework 0 - 30: ', (hw) => {

	readInterface.question('Enter your Midterm 0 - 30: ', (mid) => {

		readInterface.question('Enter your Final 0 - 40: ', (final) => {
			readInterface.close();
			score = Number(hw) + Number(mid) + Number(final);
			console.log("Your Final score is %d", score);
			calGrade(score);
		});
	});
});

function calGrade(score) {
	if (score < 0 || score > 100) {
		console.log('You entered an invalid score.');
		return;
	} if (score >= 80) {
		console.log('Excellent! You got A.');
	} else if (score >= 70) {
		console.log('Good job! You got A.');
	} else if (score >= 60) {
		console.log('Not bad! C is your grade.');
	} else if (score >= 50) {
		console.log('Becareful! D is your grade.');
	} else {
		console.log('Try it harder, You have F.');
	}
}
