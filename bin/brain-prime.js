#!/usr/bin/env node

import _ from 'lodash';
import architectureGame from '../src/index.js';

const primality = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return false;
  }
  return n > 1;
};

const randomize = () => _.random(100);
const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const question = (number) => `${number}`;
const answer = (number) => (primality(number) ? 'yes' : 'no');
const array = [...new Array(3)].map(() => randomize());
architectureGame(description, question, answer, array);
