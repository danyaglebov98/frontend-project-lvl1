import readlineSync from 'readline-sync';

const whatsName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export { whatsName as default };
