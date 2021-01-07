#!/usr/bin/env node

import _ from 'lodash';
import { cons, car, cdr } from '@hexlet/pairs';
import architectureGame from '../src/index.js';

const description = 'What number is missing in the progression?';
const array = [...new Array(3)].map(() => {
  const randomFirst = _.random(100);
  const randomLength = _.random(5, 10);
  const randomIndex = _.random(randomLength - 1);
  const randomStep = _.random(100);
  const arifmProgression = [randomFirst];
  for (let i = 1; i < randomLength; i += 1) {
    arifmProgression.push(arifmProgression[i - 1] + randomStep);
  }
  const result = arifmProgression.map((item) => {
    const newItem = arifmProgression[randomIndex] === item ? '..' : item;
    return newItem;
  });
  return cons(result.join(' '), String(arifmProgression[randomIndex]));
});
const question = (arifmProgression) => car(arifmProgression);
const answer = (arifmProgression) => cdr(arifmProgression);
architectureGame(description, question, answer, array);
