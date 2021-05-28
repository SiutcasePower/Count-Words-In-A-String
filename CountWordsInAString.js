const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Please enter your text...  ", (text) => {
  count(text)

  rl.close();
});

function count(str) {
  console.log(`Your text has ${str.split(" ").length} words`);
}
