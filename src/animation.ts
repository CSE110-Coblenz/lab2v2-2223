const readline = require('node:readline');
const {stdin: input, stdout: output} = require('node:process');

const rl = readline.createInterface({input, output});

rl.question("input\n", (answer) => {

  console.log(`\x1b[3m\x1b[1m${answer}\x1b[0m`); // Bold

  rl.close();
});
