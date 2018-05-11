'use strict';
var userPoints = 0;
// variable to store questions, their correct answers, and a short blurb about the question
var questions = [
  ['Hannah\'s favorite animals are dogs.', 'no', 'Hannah loves parrots more than any other animal and has five of them. But she does also have a dog, so that doesn\'t mean she doesn\'t love dogs.'],
  ['Hannah loves video games and plays them whenever she has a chance.', 'yes', 'Hannah plays video games way too often! She enjoys all genres of games and does not discriminate.'],
  ['Hannah studied computer science in university.', 'no', 'Hannah did not study computer science in university - she actually studied linguistics. Fun fact - linguistics is not studying how to speak multiple languages as most people seem to think (although it can involve studying languages) but rather the study of language itself. This can include breaking down the grammar of multiple languages to find common structure, documenting and studying how people acquire language, reconstructing extinct languages, and so on...'],
  ['Hannah can speak more than one language.', 'yes', 'This was kind of a trick question. Hannah speaks English (fluently), Japanese (fairly well), and Hebrew (poorly).'],
  ['Hannah\'s favorite food is curry.', 'yes', 'Hannah loves most types of curry, but her favorite is Japanese curry. Japanese curry seems to taste almost exactly the same no matter who makes it.']
];
// Welcome messages, getting name
alert('Welcome! In this game, you will be given a fact and asked whether or not you think it is a real fact about me (Hannah!).');
var userName = prompt('To get started, please enter your name.');
alert('Thanks, ' + userName + '! I hope you are excited to learn a little bit about me. To answer the following questions, please type \'Yes\' or \'No\'. Here comes the first question!');
// Questions 1-5: Yes/No Questions
for (let i = 1; i < questions.length + 1; i++) {
  let answer = prompt('Yes or No: ' + questions[i - 1][0]).toLowerCase();
  if (answer === questions[i - 1][1] || answer === questions[i - 1][1].charAt(0)) {
    userPoints++;
    alert('Correct! ' + questions[i - 1][2]);
  }
  else {
    alert('Incorrect!  ' + questions[i - 1][2]);
  }
  console.log('Question ' + i + ': User answered ' + answer + '. The answer was ' + questions[i - 1][1] + '.');
  if (i < questions.length) {
    alert('You now have ' + userPoints + ' points!');
  }
}
// Question 6: number guessing
var randomNumber = Math.floor(5 * Math.random()) + 1;
var guess = prompt('Quick! I\'m thinking of a number between 1 and 5! Try guessing what it is! You only have 4 tries.');
console.log('Random number guess 1: User guessed ' + guess + '.');
for (let i = 1; i < 4; i++) {
  if (Number(guess) === randomNumber) {
    break;
  }
  else if (guess > randomNumber) {
    guess = prompt('Sorry, too high! Try again!');
  }
  else {
    guess = prompt('Uh oh, too low! Try again!');
  }
  console.log('Random number guess ' + (i + 1) + ': User guessed ' + guess + '.');
}
if (Number(guess) === randomNumber) {
  alert('Great! You got it! Anyway, moving on!');
  userPoints++;
  console.log('Question 6: User was able to correctly guess the random number, ' + randomNumber + '.');
} else {
  alert('Sorry, you\'re out of guesses! Moving on!');
  console.log('Question 6: User was not able to correctly guess the random number, ' + randomNumber + '.');
}
// Question 7: Multiple Correct Answers Question

// Final Score
if (userPoints === (questions.length + 2)) {
  alert('Wow! you got 100%! Great job!');
}
else if (userPoints > 0 && userPoints < (questions.length + 2)) {
  alert('You only got ' + userPoints + '/' + (questions.length + 2) + ' questions right. We should hang out more!');
}
else {
  alert('You got no points! Are you sure we\'ve met before?');
}
console.log('User got ' + userPoints + ' point(s) out of ' + (questions.length + 2) + ' possible points.');