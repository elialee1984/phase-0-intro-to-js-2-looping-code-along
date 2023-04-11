
// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    //debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapping ${gifts[i]} and added a bow!`);
        //debugger;
    }

    return gifts;
}

wrapGifts(gifts);



const cards = [["Charlie", "Samip", "Ali"], "birthday"];

function writeCards(cards) {
    for (let i = 0; i < cards[0].length; i++) {
    console.log(`Thank you, ${cards[0][i]}, for the wonderful ${cards[1]} gift!`);
    debugger;
    }

    return cards;
}
writeCards(cards);



let number = 0;
let integer;
function countDown(integer) {
    while(number < integer) {
        console.log(number++);
    }
}

countDown(11);