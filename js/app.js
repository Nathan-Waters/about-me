'use strict';

// console.log('hey world hey!');

let userName = prompt('Hello, human. What is your name?');

alert('It is great to meet you ' + userName + '. Now please take a minuite to learn about my second favorite human, Nathan.');

let answerOne = prompt('Does Nathan have kids? beep boop.').toLowerCase();

if(answerOne === 'yes' || answerOne ==='y'){
  // console.log('incorrect question 1');
  alert('No he does not, but he has 3 very cute neices!');
} else if (answerOne === 'no' || answerOne ==='n'){
  // console.log('correct question 1');
  alert('That would be correct! Great job human!');
}

let answerTwo = prompt('Does Nathan like golf? beep boop.').toLowerCase();

if(answerTwo === 'yes' || answerTwo ==='y'){
  // console.log('correct question 2');
  alert('He does! however his short game does not like him.');
} else if (answerTwo === 'no' || answerTwo ==='n'){
  // console.log('incorrect question 2');
  alert('Wrong! Human Nathan enjoys a round of golf from time to');
}

let answerThree = prompt('Is Nathan from Washington? beep beep boop.').toLowerCase();

if(answerThree === 'yes' || answerThree ==='y'){
  // console.log('correct question 3');
  alert('Correct Human! Nathan Was born and raised in Washington');
} else if (answerThree === 'no' || answerThree ==='n'){
  // console.log('incorrect question 3');
  alert('Wrong! Human Nathan did however live in Alaska for a short time growing up.');
}

let answerFour = prompt('Was Nathan a ranked figure skater? beep beep boop.').toLowerCase();

if(answerFour === 'yes' || answerFour ==='y'){
  // console.log('incorrect question 4');
  alert('Nagative. Nathan did however do speed skating!');
} else if (answerFour === 'no' || answerFour ==='n'){
  // console.log('correct question 4');
  alert('That is correct, but he would have been beautiful!');
}

let answerFive = prompt('Does Nathan Like sports? beep beep boop.').toLowerCase();

if(answerFive === 'yes' || answerFive ==='y'){
  // console.log('correct question 5');
  alert('Correct! Nathan enjoys some good sports ball fun, beeeeep.');
} else if (answerFive === 'no' || answerFive ==='n'){
  // console.log('incorrect question 5');
  alert('Wrong! Sports is a good excuse to hang with friends.');
}

//for loop on the 6th question to allow for 4 chances
for(let i = 0; i <= 3; i++){

  let userGuess = prompt('how many times did i move before graduating HS');

  if (userGuess === 1){
    alert('correct!');
    break;
  } else if(userGuess === 2){
    alert('incorrect1');
  } else if(userGuess === 3){
    alert('incorrect2');
  } else if(userGuess === 4){
    alert('incorrect3');
  }
}

alert('I would like to thank you human. I\'m sure you two will be the best of friends. Nathan and ' + userName + ' the dynamic duo!');
