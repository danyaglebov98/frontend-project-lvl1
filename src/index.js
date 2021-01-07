import readlineSync from 'readline-sync';
import whatsName from './cli.js';

const architectureGame = (description, question, findAnswer, array) => {
  const name = whatsName();
  console.log(description);
  for (let i = 0; i < 3; i += 1) {
    const answer = findAnswer(array[i]);
    console.log(`Question: ${question(array[i])}`);
    const yourAnswer = readlineSync.question('Your Answer: ');
    if (answer !== yourAnswer) {
      return console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`);
    }
    console.log('Correct!');
  }

  return console.log(`Congratulations, ${name}!`);
};

export default architectureGame;
