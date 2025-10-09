const snacks: string[] = [];


const funct = require('./animation');
funct.anim();
snacks.push("Oranges");
snacks.push("Tomatoes");
snacks.push("Zucchini");
snacks.push("Cucumber");


function print() {
  for(let i = 0; i < snacks.length; i++) {
    console.log(snacks[i]);
  }
}

print();
