import { snacks } from "./snacks";

snacks.push("Cookies");
snacks.push("Chips");

function print() {
  for(let i = 0; i < snacks.length; i++) {
    console.log(snacks[i]);
  }
}

print();
