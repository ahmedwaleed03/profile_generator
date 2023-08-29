const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// store questions in an array
const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

// empty object to store each answer in
const answers = {};

// recursive survey function
const survey = function(index) {
  // for the final time the function is called
  if (index === questions.length) {
    console.log(`My name is ${answers[0]}, and I like to ${answers[1]} while listening to ${answers[2]}. My favourite meal is ${answers[3]} where I get to eat ${answers[4]}. My absolute favourite sport is ${answers[5]}. My superpower is ${answers[6]}`);
    rl.close();
    return;
  }
  rl.question(`${questions[index]}  `, (answer) => {
    answers[index] = answer;
    survey(index + 1);
  });
};

// call survey function with the first index of the array
survey(0);