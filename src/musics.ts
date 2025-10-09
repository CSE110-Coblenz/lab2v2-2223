const music: string[] = [];

music.push("Pop");
music.push("Rock");
music.push("Jazz");

function listMusics(music: string[]): void {
    console.log("Available music genres: " + music.join(", "));
}

listMusics(music);