'use strict';

let siteVisitor = prompt('What is your name?');

alert(`Howdy, ${siteVisitor}?! Thanks for stopping by. I have a quiz for you about me! Answer each of the following yes or no questions to get to know me a little better.`);

let questionOne = prompt('Am I afraid of heights?').toLowerCase();

if (questionOne === 'y' || questionOne === 'yes') {
  alert('You are correct!');
} else if (questionOne === 'n' || questionOne === 'no') {
  alert('You are wrong ... I am up high often and I am scared every time.');
} else {
  alert('Answer yes or no');
}

let questionTwo = prompt('Is my favorite food pizza?').toLowerCase();

if (questionTwo === 'y' || questionTwo === 'yes') {
  alert('Yes, although I think it is very hard to find really good pizza.');
} else if (questionTwo === 'n' || questionTwo === 'no') {
  alert('You are wrong. I love pizza!');
} else {
  alert('Answer yes or no');
}

let questionThree = prompt('Have I traveled abroad?').toLowerCase();

if (questionThree === 'y' || questionThree === 'yes') {
  alert('Correct! I have been to Mongolia, Thailand, Morocco, American Samoa, Japan and England.');
} else if (questionThree === 'n' || questionThree === 'no') {
  alert('Incorrect. I have been to Mongolia, Thailand, Morocco, American Samoa, Japan and England.');
} else {
  alert('Answer yes or no');
}

let questionFour = prompt('Is summer my favorite season?').toLowerCase();

if (questionFour === 'y' || questionFour === 'yes') {
  alert('Nope, my favorite season is fall.');
} else if (questionFour === 'n' || questionFour === 'no') {
  alert('You are right! I like fall best.');
} else {
  alert('Answer yes or no');
}

let questionFive = prompt('Is my favorite color orange?').toLowerCase();

if (questionFive === 'y' || questionFive === 'yes') {
  alert('Orange is ok. But I prefer blue.');
} else if (questionFive === 'n' || questionFive === 'no') {
  alert('Right! My favorite color is blue.');
} else {
  alert('Answer yes or no');
}

const question = 'Guess what number I am thinking of?';
let myNum = 6;
let attempts = 4;
let userGuess = parseInt(prompt(question));

while (userGuess !== myNum) {
  if (attempts === 0) {
    alert('Sorry, you are out of attempts.');
    break;
  }
  attempts--;
  userGuess = parseInt(prompt(question));
  if (userGuess === myNum) {
    alert('Congratulations, you are correct!');
  }
  if (userGuess < myNum) {
    alert('Guess higher');
  }
  if (userGuess > myNum) {
    alert('Guess lower');
  }
}

const camQuestion = (`What brand of camera do I use? Options:${cameras}`);
let guesses = 6;
let myCam = sony;
let userGuess2 = prompt(camQuestion);
const cameras = ['nikon', 'canon', 'sony', 'fuji', 'panasonic', 'pentax', 'leica'];

console.log(cameras);

