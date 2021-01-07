#!/usr/bin/env node

import _ from 'lodash';
import architectureGame from '../src/index.js';

const randomize = () => _.random(100);
const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const question = (number) => `${number}`;
const answer = (number) => (number % 2 === 0 ? 'yes' : 'no');
const array = [...new Array(3)].map(() => randomize());
architectureGame(description, question, answer, array);
