console.log("Up and running!");
/*
var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

console.log("User flipped " + cardOne);
console.log("User flipped " + cardFour);
*/

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

function checkForMatch(){
    if (cardsInPlay[0] === cardsInPlay[1]) {
            console.log("You found a match!");
    } else {
            console.log("Sorry, try again.");
    }
}

function flipCard(cardId){
    console.log('User flipped '+cards[cardId]);
    cardsInPlay.push(cards[cardId]);
    if (cardsInPlay.length === 2){
        checkForMatch()};
}

flipCard(0);
flipCard(2);



/*
var cardOne = cards[0]
cardsInPlay.push(cardOne)
console.log("User flipped " + cardsInPlay[0]);

cardTwo = cards[2]
cardsInPlay.push(cardTwo)
console.log("User flipped " + cardsInPlay[1]);

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]){
    alert('You found a match!');
}else {
    alert('Sorry, try again.');
}
*/

