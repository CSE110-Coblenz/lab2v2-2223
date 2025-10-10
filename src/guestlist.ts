const guestlist: string[] = [];

guestlist.push("Tom");
guestlist.push("Jerry");
guestlist.push("Mickey");
guestlist.push("Minnie");
guestlist.push("Jake");
guestlist.push("Finn");

function listguest(guestlist: string[]): void {
    console.log("Guest List: " + guestlist.join(", "));
}

listguest(guestlist);