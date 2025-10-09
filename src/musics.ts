const music: string[] = [];

music.push("Indie Pop");
music.push("Rock");
music.push("Jazz");
music.push("Classical");

function listMusics(music: string[]): void {
    console.log("Available music genres: " + music.join(", "));
}

listMusics(music);
