'use strict';

// declare points variable
var userPoints = 0;

// alert - welcome user to game
alert('Welcome! In this game, you will be given a fact and asked whether or not you think it is a real fact about me (Hannah!).');

// prompt - ask name and store in userName variable
var userName = prompt('To get started, please enter your name.');

// alert - give instructions
alert('Thanks, ' + userName + '! I hope you are excited to learn a little bit about me. To answer the following questions, please type \'Yes\' or \'No\'. Here comes the first question!');

// prompts user to answer a question yes or no then changes the answer to lowercase
var questionOne = prompt('Yes or No: Hannah\'s favorite animals are dogs.').toLowerCase();

// conditional statement checks if the response is correct
// if correct, add a point, send user message that they were correct and current points
if (questionOne === 'no' || questionOne === 'n') {
  alert('Correct! Hannah loves parrots more than any other animal and has five of them. But she does also have a dog, so that doesn\'t mean she doesn\'t love dogs.');
  userPoints++;
}

// else - send them a message that they were not correct
else {
  alert('Incorrect! Too bad! Hannah loves parrots more than any other animal and has five of them. But she does also have a dog, so that doesn\'t mean she doesn\'t love dogs.');
}

// console log answer to question and correct or not
console.log('Question 1: User answered ' + questionOne + '. The answer was no.');

alert('Okay, ' + userName + '. Moving on.');

// questions below follow same format as above

// Q2
var questionTwo = prompt('Yes or No: Hannah loves video games and plays them whenever she has a chance.').toLowerCase();
if (questionTwo === 'yes' || questionTwo === 'y') {
  alert('Correct! Hannah plays video games way too often! She enjoys all genres of games and does not discriminate.');
  userPoints++;
}
else {
  alert('Incorrect! If only that were the case! Hannah plays video games too much. She enjoys all genres of games and does not discriminate.');
}
console.log('Question 2: User answered ' + questionTwo + '. The answer was yes.');

alert('Okay, ' + userName + '. You have ' + userPoints + ' point(s) so far. Let\'s keep going!');

// Q3
var questionThree = prompt('Yes or No: Hannah studied computer science in university.').toLowerCase();
if (questionThree === 'no' || questionThree === 'n') {
  alert('Correct! Hannah did not study computer science in university - she actually studied linguistics. Fun fact - linguistics is not studying how to speak multiple languages as most people seem to think (although it can involve studying languages) but rather the study of language itself. This can include breaking down the grammar of multiple languages to find common structure, documenting and studying how people acquire language, reconstructing extinct languages, and so on...');
  userPoints++;
}
else {
  alert('Incorrect! Hannah did not study computer science in university - she actually studied linguistics. Fun fact - linguistics is not studying how to speak multiple languages as most people seem to think (although it can involve studying languages) but rather the study of language itself. This can include breaking down the grammar of multiple languages to find common structure, documenting and studying how people acquire language, reconstructing extinct languages, and so on...');
}
console.log('Question 3: User answered ' + questionThree + '. The answer was no.');

alert('I hope you learned something new, ' + userName + '. You have ' + userPoints + ' point(s) now. The next question is related to the last one.');

// Q4
var questionFour = prompt('Yes or No: Hannah can speak more than one language.').toLowerCase();
if (questionFour === 'yes' || questionFour === 'y') {
  alert('Correct! This was kind of a trick question. Hannah speaks English (fluently), Japanese (fairly well), and Hebrew (poorly).');
  userPoints++;
}
else {
  alert('Incorrect! This was kind of a trick question. Hannah speaks English (fluently), Japanese (fairly well), and Hebrew (poorly).');
}
console.log('Question 4: User answered ' + questionFour + '. The answer was yes.');

alert('We\'re almost there, ' + userName + '. Keep going!');

// Q5
var questionFive = prompt('Yes or No: Hannah\'s favorite food is curry.').toLowerCase();
if (questionFive === 'yes' || questionFive === 'y') {
  alert('Correct! Hannah loves most types of curry, but her favorite is Japanese curry. Japanese curry seems to taste almost exactly the same no matter who makes it.');
  userPoints++;
}
else {
  alert('Incorrect! Hannah loves most types of curry, but her favorite is Japanese curry. Japanese curry seems to taste almost exactly the same no matter who makes it.');
}
console.log('Question 5: User answered ' + questionFive + '. The answer was yes.');

// conditional alert based on score that gives user final score
if (userPoints === 5) {
  alert('Wow! you got 100%! You must be some kind of mind reader!');
}
else if (userPoints > 0 && userPoints < 5)  {
  alert('You only got ' + userPoints + '/5 questions right. We should hang out more!');
}
else {
  alert('You got no points! Are you sure we\'ve met before?');
}
// log final score

console.log('User got ' + userPoints + ' point(s).');