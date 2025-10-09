const guestlist: string[] = [];

music.push("Tom");
music.push("Jerry");
music.push("Mickey");

function listguest(guestlist: string[]): void {
    console.log("Guest List: " + guestlist.join(", "));
}

listMusics(guestlist);