#!/usr/bin/env node

import _ from 'lodash';
import architectureGame from '../src/index.js';

const randomize = () => _.random(100);
const description = 'Find the greatest common divisor of given numbers.';
const array = [...new Array(3)].map(() => [randomize(), randomize()]);

const question = (expression) => `${expression[0]} ${expression[1]}`;

const gcdRec = (a, b) => {
  if (b) {
    return gcdRec(b, a % b);
  }
  return Math.abs(a);
};
const answer = (expression) => String(gcdRec(expression[0], expression[1]));

architectureGame(description, question, answer, array);
