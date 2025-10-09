const snacks: string[] = [];


const funct = require('./animation');
funct.anim();
snacks.push("Oranges");
snacks.push("Tomatoes");

function print() {
  for(let i = 0; i < snacks.length; i++) {
    console.log(snacks[i]);
  }
}

print();
