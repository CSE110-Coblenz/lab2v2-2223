const music_1: string[] = [];

music_1.push("Pop");
music_1.push("Rock");
music_1.push("Jazz");

function listMusic(music_1: string[]): void {
    console.log("Available music genres: " + music_1.join(", "));
}

listMusic(music_1);
const table = require('./table');

table.log();
