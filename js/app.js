'use strict';

console.log('hey world hey!');

let userName = prompt('Hello, human. What is your name?');

alert('It is great to meet you ' + userName + '. Now please take a minuite to learn about my second favorite human, Nathan.');

let answerOne = prompt('Does Nathan have kids? beep boop.').toLowerCase;

if(answerOne === 'yes' || answerOne ==='y'){
  alert('No he does not, but he has 3 very cute neices!');
} else if (answerOne === 'no' || answerOne ==='n'){
  alert('That would be correct! Great job human!');
}
