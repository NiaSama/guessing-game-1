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
var questionOne = prompt('Are dogs Hannah\'s favorite animal?').toLowerCase();

// conditional statement checks if the response is correct
// if correct, add a point, send user message that they were correct and current points
if (questionOne === 'no') {
  alert('Right! Hannah loves birds more than any other animal and has five of them. But she does also have a dog, so that doesn\'t mean she doesn\'t love dogs.');
  userPoints++;
}

// else - send them a message that they were not correct
else {
  alert('Wrong! Too bad! Hannah loves birds more than any other animal and has five of them. But she does also have a dog, so that doesn\'t mean she doesn\'t love dogs.');
}

// console log answer to question and correct or not
console.log('User answered ' + questionOne + '. The answer was no.');

alert('Okay, ' + userName + '. Moving on.');

// questions below follow same format as above

// Q2
var questionTwo = prompt('').toLowerCase();
if (questionTwo === '') {
  alert('');
  userPoints++;
}
else {
  alert('Wrong!');
}
console.log('User answered ' + questionTwo + '. The answer was no.');

// Q3
var questionThree = prompt('').toLowerCase();
if (questionThree === '') {
  alert('');
  userPoints++;
}
else {
  alert('Wrong!');
}
console.log('User answered ' + questionThree + '. The answer was no.');

// Q4
var questionFour = prompt('').toLowerCase();
if (questionFour === '') {
  alert('');
  userPoints++;
}
else {
  alert('Wrong!');
}
console.log('User answered ' + questionFour + '. The answer was no.');

// Q5
var questionFive = prompt('').toLowerCase();
if (questionFive === '') {
  alert('');
  userPoints++;
}
else {
  alert('Wrong!');
}
console.log('User answered ' + questionFive + '. The answer was no.');

// conditional alert based on score that gives user final score
if (userPoints === 5) {
  alert('Wow! you got 100%! You must be some kind of mind reader!');
}
else {
  alert('You only got ' + userPoints + '/5 questions right. We should hang out more!');
}