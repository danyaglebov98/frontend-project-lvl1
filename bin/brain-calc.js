#!/usr/bin/env node

import _ from 'lodash';
import architectureGame from '../src/index.js';

const randomize = () => _.random(100);
const description = 'What is the result of the expression?';
const array = [...new Array(3)].map(() => [randomize(), _.sample(['-', '+', '*']), randomize()]);

const question = (expression) => `${expression[0]} ${expression[1]} ${expression[2]}`;
const answer = (expression) => {
  switch (expression[1]) {
    case '-':
      return String(expression[0] - expression[2]);
    case '+':
      return String(expression[0] + expression[2]);
    case '*':
      return String(expression[0] * expression[2]);
    default:
      return null;
  }
};
architectureGame(description, question, answer, array);
