'use strict';

let amountCorrect = 0; // Tracker for amount of questions answered correctly

let userName;

function checkUser() {
  userName = prompt('Greetings! Before we begin, what is your name?'); // Prompts user for a name.
  return userName;
}

checkUser();

console.log('Username is ' + userName + '.');



let questionArray = [
  'Hello there ' + userName + '! Welcome to my webpage. How old do you think I am? Please enter in number format. (Hint: It\'s between 20 and 30).',
  'Second question - In what month was I born?',
  'Third question - What sport did I play while growing up?',
  'Fourth question - How many languages do I speak? Please answer in number format.',
  'Last question - Can you guess my favorite animal? (Hint: it\'s a reptile.)',
];

let correctArray = [
  'That is correct, great guessing!',
  'Correct!! I was born on December 6th, 1996',
  'You are correct! I played both ice and roller hockey growing up for 10 years.',
  'Yes!, I speak Spanish and obviously English',
  'Correct, I have owned a turtle for most of my life and enjoy their laid-back lifestyle',
];

let incorrectArray = [
  'So close! Thanks for trying, I am 24 years old.',
  'Almost! I was born in December.',
  'I did not play that unfortunately. I played quite a bit of hockey growing up.',
  'Good guess, I speak two languages - Spanish and English.',
  'While I probably also like your animal as well, my favorite animal is the turtle.',
];

let answerKey = [
  '24',
  'december',
  'hockey',
  '2',
  'turtle',
];

let alternateQuestion = 'While that is technically true, I speak two languages, Spanish and English!';

function firstFiveQuestion() {
  for (let i = 0; i < 5; i++) {
    let userAnswer = prompt(questionArray[i]);
    if (userAnswer.toLowerCase() === answerKey[i]) {
      amountCorrect++;
      alert(correctArray[i]);
    }
    else if (userAnswer === '') {
      alert('Sorry, it looks like you did\'t answer. Try again!');
      i--;
    }
    else if (userAnswer[3] === 1) {
      alert(alternateQuestion);
    }
    else {
      alert(incorrectArray[i]);
    }
  }
  return true;
}

firstFiveQuestion();

function guessNumber() {
  //creating variable named myAnswer for the answer to the numbers question.
  let myAnswer = Math.floor(Math.ceil() * 10);
  console.log('myAnswer number is ' + myAnswer);
  //creating variable named countDown for the amount of guesses left for the user as well as decrementing a counter for the while loop
  console.log('pre-initializing num for the while loop. Not entirely sure if necessary.');
  for (let i = 5; i > 0; i--) {
    let num = prompt('Try to guess my number between 1 and 10, you have ' + i + ' guesses left. Please answer in number format.');
    if (num > myAnswer) {
      alert('Not quite, try guessing lower.');
    }
    else if (num < myAnswer) {
      alert('Not quite, try guessing higher.');
    }
    else {
      console.log('test');
      alert('You guessed correctly!');
      amountCorrect++;
      return true;
    }
  }
  alert('You ran out of guesses. The correct number was ' + myAnswer);
  return false;
}
guessNumber();

console.log('initializing artists');

let artists = [
  'prince',
  'dolly parton',
  'amy winehouse',
  'micheal jackson',
  'chet atkins',
  'lady gaga',
  'freddie mercury',
  'joni mitchell',
  'frank sinatra',
  'jimi hendrix'];

function isAnswer(artistAnswer) {
  for (let a = 0; a < 10; a++) {
    if (artistAnswer.toLowerCase() === artists[a]) {
      console.log('Correct Artist');
      return true;
    }
  }
  console.log('Artist not found if at the end of the for loop.');
  alert('Artist not found on my list..try again.');
  return false;
}

for (let a = 0; a < 7; a++) {
  let artistAnswer = prompt('Can you guess an American music artist in my top ten list?');
  if (isAnswer(artistAnswer) === true) {
    alert('You found an artist on my list. Congrats!');
    amountCorrect++;
    break;
  }
  alert('Sorry, you ran out of tries!');
}

alert('Thank you very much for answering my questions, correct answers for the artists were ' + artists[0] + ', ' + artists[1] + ', ' + artists[2] +', ' + artists[3] + ',' + artists[4] + ', '
  + artists[5] + ', ' + artists[6] + ', ' + artists[7] + ', ' + artists[8] + ', ' + artists[9] + '. Also - you got ' + amountCorrect + ' out of 7 answers correct! Thanks for your time, ' + userName + '.');








