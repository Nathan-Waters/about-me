'use strict';

console.log('hey world hey!');

let userName = prompt('Hello, human. What is your name?');

alert('It is great to meet you ' + userName + '. Now please take a minuite to learn about my second favorite human, Nathan.');

let answerOne = prompt('Does Nathan have kids? beep boop.').toLowerCase();

if(answerOne === 'yes' || answerOne ==='y'){
  console.log('incorrect question 1');
  alert('No he does not, but he has 3 very cute neices!');
} else if (answerOne === 'no' || answerOne ==='n'){
  console.log('correct question 1');
  alert('That would be correct! Great job human!');
}

let answerTwo = prompt('Does Nathan like golf? beep boop.').toLowerCase();

if(answerTwo === 'yes' || answerTwo ==='y'){
  console.log('correct question 2');
  alert('He does! however his short game does not like him.');
} else if (answerTwo === 'no' || answerTwo ==='n'){
  console.log('incorrect question 2');
  alert('Wrong! Human Nathan enjoys a round of golf from time to');
}

let answerThree = prompt('Is Nathan from Washington? beep beep boop.').toLowerCase();

if(answerThree === 'yes' || answerThree ==='y'){
  console.log('correct question 3');
  alert('Correct Human! Nathan Was born and raised in Washington');
} else if (answerThree === 'no' || answerThree ==='n'){
  console.log('incorrect question 3');
  alert('Wrong! Human Nathan did however live in Alaska for a short time growing up.');
}
