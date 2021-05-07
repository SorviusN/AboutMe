'use strict';

//console.log('Welcomes user to webpage.');

//for (let a = 0; a < 5; a++) {
//  console.log(n,' value at loop start');
//  answers[n] = prompt(questions[n]);
//  if ( answers[n].toLowerCase() === 'yes' || answers[n].toLowerCase() ==='no') {

//  }
//  else {
//    alert('Sorry, not a valid answer..please try again.');
//    a--
//  }
//}


let amountCorrect = 0; // Tracker for amount of questions answered correctly

let userName;

function checkUser() {
  userName = prompt('Greetings! Before we begin, what is your name?'); // Prompts user for a name.
  return userName;
}

checkUser();

console.log('Username is ' + userName + '.');



let questionArray = [
  'Hello there ' + userName + '! Welcome to my webpage. How old do you think I am? Please enter in a number (Hint: It\'s between 20 and 30).',
  'Second question - In what month was I born?',
  'Third question - What sport did I play while growing up?',
  'Fourth question - How many languages do I speak? Please answer in number format.',
  'Last question - Can you guess my favorite animal? (Hint: it\'s a reptile.)',
];

let yesArray = [
  'That is correct, great guessing!',
  'Correct!! I was born on December 6th, 1996',
  'You are correct! I played both ice and roller hockey growing up for 10 years.',
  'Yes!, I speak Spanish and obviously English',
  'Correct, I have owned a turtle for most of my life and enjoy their laid-back lifestyle',
];

let noArray = [
  'So close! Thanks for trying, I am 24 years old.',
  'Almost! I was born in December.',
  'I did not play ' + userAnswer[2] + 'unfortunately. I played quite a bit of hockey growing up.',
  'Good guess, I speak two languages - Spanish and English.',
  'While I probably also like ' + userAnswer[4] + ' as well.'   
];

let alternateQuestion = 'While that is technically true, I speak two languages, Spanish and English!'
function firstQuestion() {
  let ageQuestion = prompt();
  if (ageQuestion === '24') {
    amountCorrect++;
    //console.log('That is correct, great guessing!');
    alert('That is correct, great guessing!');
    return true;
  }
  else {
    //console.log('So close! Thanks for trying :), I am 24.');
    alert('So close! Thanks for trying :), I am 24.');
    return false;
  }
}
firstQuestion();

function secondQuestion() {
  let birthdayQuestion = prompt();

  birthdayQuestion = birthdayQuestion.toLowerCase();

  if (birthdayQuestion === 'dec' || birthdayQuestion === 'december') {
    amountCorrect++;
    //console.log('Amazing! You are correct. I was born on December 6th, 1996');
    alert('Amazing! You are correct. I was born on December 6th, 1996');
    return true;
  }
  else {
    //console.log('So close!, I was born in December.');
    alert('So close!, I was born in December.');
    return false;
  }
}
secondQuestion();

function thirdQuestion() {
  let sportQuestion = prompt(;

  sportQuestion = sportQuestion.toLowerCase();

  switch(sportQuestion) {
  case 'hockey':
    amountCorrect++;
    //console.log('That is correct! I played Hockey for 10 years growing up - both on ice and roller blades. I also played a bit of baseball.');
    alert('That is correct! I played Hockey for 10 years growing up - Both on ice and roller blades. I also played a bit of baseball.');
    return true;
  case 'baseball':
    amountCorrect++;
    //console.log('I did play some baseball growing up, however hockey was my main sport.');
    alert('I did play some baseball growing up, however hockey was my main sport.');
    return true;
  default:
    console.log('I did not play ' + sportQuestion + ', unfortunately. The two sports I grew up playing were Hockey and Basebell.');
    return false;
  }
}
thirdQuestion();

function fourthQuestion() {
  let languageQuestion = prompt();

  languageQuestion = languageQuestion.toLowerCase();

  if (languageQuestion === '2') {
    amountCorrect += 1;
    //console.log('You are correct! I speak Spanish as well as English, of course.');
    alert('You are correct! I speak Spanish as well as English, of course.');
    return true;
  }
  else {
    //console.log('Good guess! I speak two languages - Spanish and English.');
    alert('Good guess! I speak two languages - Spanish and English.');
    return false;
  }
}
fourthQuestion();

console.log('pre-initializing num for the while loop. Not entirely sure if necessary.');

function fifthQuestion() {
  let animalQuestion = prompt();

  animalQuestion = animalQuestion.toLowerCase();

  if (animalQuestion === 'turtle') {
    amountCorrect ++;
    //console.log('Correct. I have owned a turtle for most of my life and enjoy their laid-back lifestyle.');
    alert('Correct. I have owned a turtle for most of my life and enjoy their laid-back lifestyle.');
    return true;
  }
  else {
    //console.log('While I probably like ' + animalQuestion + ' as well, my favorite animal is the turtle. I enjoy their resilience and laid-back lifestyle.');
    alert('While I probably like ' + animalQuestion + ' as well, my favorite animal is the turtle. I enjoy their resilience and laid-back lifestyle.');
    return false;
  }
}

fifthQuestion();

function guessNumber() {
  //creating variable named myAnswer for the answer to the numbers question.
  let myAnswer = Math.floor(Math.ceiling() * 10);
  console.log('myAnswer number is ' + myAnswer);
  //creating variable named countDown for the amount of guesses left for the user as well as decrementing a counter for the while loop
  let countDown = 5;
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

function playGame() {
}







