const guestlist: string[] = [];

guestlist.push("Tom");
guestlist.push("Jerry");
guestlist.push("Mickey");

function listguest(guestlist: string[]): void {
    console.log("Guest List: " + guestlist.join(", "));
}

listguest(guestlist);