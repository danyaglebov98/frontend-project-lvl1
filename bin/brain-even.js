#!/usr/bin/env node

import readlineSync from 'readline-sync';
import whatsName from '../src/cli.js';

const randomize = (max) => Math.floor(Math.random() * Math.floor(max));
const name = whatsName();
const rightAnswer = 'Correct!';
const wrongAnswer = `'yes' is wrong answer ;(. Correct answer was 'no'.\n Let's try again, ${name}!`;
console.log('Answer "yes" if the number is even, otherwise answer "no".');
for (let i = 0; i < 3; i += 1) {
  const randomNumber = randomize(100);
  console.log(`Question: ${randomNumber}`);
  const yourAnswer = readlineSync.question('Your Answer: ');
  const answer = randomNumber % 2 === 0 ? 'yes' : 'no';
  if (answer !== yourAnswer) {
    console.log(wrongAnswer);
    break;
  }
  console.log(rightAnswer);

  if (i === 2) {
    console.log(`Congratulations, ${name}!`);
  }
}
