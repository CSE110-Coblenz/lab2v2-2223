//ce98b1ca Created animation.ts and modified snacks.ts to call anim() functiononst snacks: string[] = [];
const snacks : string[] = [];

module.exports = {
  snacks,
};

const funct = require('./animation.ts');
funct.anim();
snacks.push("Oranges");
snacks.push("Tomatoes");

function print() {
  for(let i = 0; i < snacks.length; i++) {
    console.log(snacks[i]);
  }
}

print();
