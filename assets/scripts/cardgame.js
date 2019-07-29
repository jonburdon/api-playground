let card_api_url = "https://deckofcardsapi.com/api/deck/new/draw/?count=12";

let card1code;
let card1suit;
let card1image;
let card1value;
let card2code;
let card2suit;
let card2image;
let card2value;
let testImgHtml = "<img src='rainbow.jpg'>";
let testImgHtml2;
let snap = false;
let gameover = false;

// ------------------- Functions to access the DOM

function updateDisplay(targetId, dataUpdate) {
    // Update the DOM with text
    document.getElementById(targetId).textContent = dataUpdate;
};

function updateImage(targetId, dataUpdate) {
    // Update the DOM with image src
    document.getElementById(targetId).src = dataUpdate;
};

function updateHtml(targetId, dataUpdate) {
    document.getElementById(targetId).innerHTML += dataUpdate;
};

// ------------------- Shuffle an Array
// From https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

async function getCards() {
  const response = await fetch(card_api_url);
  let data = await response.json();
  console.log(data);
  console.log(data.cards[1]);
  //    Use Javascript destructuring to take data from first card in array and create separate variables
  const { code, value, suit, image } = data.cards[0];
  console.log(code);
  console.log(value);
  console.log(suit);
  console.log(image);

//   Create array with card code data
var cardCodes = [];
var i;
for (i=0; i<12; i++) {
console.log(`For loop ${i}`);
cardCodes[i] = [data.cards[i].code];
console.log("card codes are " + cardCodes);
};

//Create array of 6 cards, storing code and image data in pairs
var cardChosen = [["code1value","image1value"],["code2value","image2value"],["code3value","image3value"],["code4value","image4value"],["code5value","image5value"],["code6value","image6value"]];

var iNested;
var ii;

for (ii=0; ii<6; ii++) {
    console.log(`For loop two ${ii}`);
    
        for (iNested=0; iNested<6; iNested++) {
            console.log(`Nested Loop ${i} loop ${iNested}`);
            cardChosen[iNested][0] = [data.cards[iNested].code];
            cardChosen[iNested][1] = [data.cards[iNested].image];
        }
};

//Console log array data for checking above
console.log(`cardChosen card1 code = ${cardChosen[0][0]}`);
console.log(`cardChosen card1 image = ${cardChosen[0][1]}`);
console.log(`cardChosen card 2 code = ${cardChosen[1][0]}`);
console.log(`cardChosen card 2 image = ${cardChosen[1][1]}`);
console.log(`cardChosen card 6 image = ${cardChosen[5][1]}`);
console.log(`cardChosen full data = ${cardChosen}`);

console.log(`cardChosen array 5 = ${cardChosen[5]}`);


//Create array of 12 cards made of 6 cards used twice, storing code and image data in pairs
var twelveCards = [["code1value","image1value"],["code2value","image2value"],["code3value","image3value"],["code4value","image4value"],["code5value","image5value"],["code6value","image6value"],
["code7value","image7value"],["code8value","image8value"],["code9value","image9value"],["code10value","image10value"],["code11value","image11value"],["code12value","image12value"]];

var iNested;
var ii;

for (ii=0; ii<12; ii++) {
    console.log(`For loop two ${ii}`);
    
        for (iNested=0; iNested<12; iNested++) {
            console.log(`Nested Loop ${i} loop ${iNested}`);
            twelveCards[iNested][0] = [data.cards[iNested].code];
            twelveCards[iNested][1] = [data.cards[iNested].image];
        }
};

//Console log array data for checking above
console.log(`Twelve Cards = ${twelveCards}`);
console.log(`cardChosen array 12 = ${twelveCards[11]}`);
console.log(`cardChosen array 6 = ${twelveCards[5]}`);



// Destructure json for displaying  two single cards
  card1code = data.cards[0].code;
  card1suit = data.cards[0].suit;
  card1image = data.cards[0].image;
  card1value = data.cards[0].value;
  card2value = data.cards[1].value;
  card2code = data.cards[1].code;
  card2suit = data.cards[1].suit;
  card2image = data.cards[1].image;



function displayCards() {
    // Update the DOM

  updateImage("cardimg1",card1image);

};

  displayCards();

// Show a card, wait 2 seconds, show another

function loopShowingCards() {
shuffleArray(twelveCards);
//Set timeout to wait then display
// Do the above 12 times, incrementing each time.

let cardcounter = -1;
let cardtoshownext;


for (ii = 0; ii < 12; ii++ ){
    console.log(`new is ${ii}`);
    console.log(`Game Over is set to ${gameover}`);
  
      setTimeout(function () {
        console.log(`Game Over from Set Timeout is set to ${gameover}`);
        cardcounter ++;
        console.log(`cardcounter is ${cardcounter}`);
        console.log(`cardChosen array ${cardcounter} = ${twelveCards[cardcounter][1]}`);
        console.log(`<img src="${twelveCards[cardcounter][1]}" width=100>`);
        cardtoshownext = `${twelveCards[cardcounter][1]}`;
        console.log(`next card is ${cardtoshownext}`);
        console.log(`card 1 image is ${card1image}`);
        updateImage("cardimg2",cardtoshownext);
    
      if (data.cards[0].code === twelveCards[cardcounter][0][0] )
        {
          console.log("SNAP!!!!!!!!!!!");
          snap = true;
          console.log(`snap = ${snap}`)
        }
        else {
        console.log ("Those two weren't a pair");
        snap=false;
        console.log(`snap = ${snap}`)
        }
        console.log(`cardcounter is ${cardcounter} and gameover is ${gameover}`);
        if (cardcounter === 11 && gameover === false) {
          updateDisplay("gamestatus", "You didn't win. How is that even possible?");
        }

    }, 1500*ii);

  }

}

loopShowingCards();

console.log(twelveCards);
console.log(data.cards[0].code);
console.log(twelveCards[1][1]);

};

getCards();


$(document).ready(function() {

  $("#cardimg2").click(function () {
    console.log("clicked");
    if (snap === true) {
      console.log("You won!");
      gameover = true;
      console.log(`Game Over is set to ${gameover}`);
      updateImage("cardimg3",card1image);
      updateDisplay("gamestatus", "Game Over, you ARE THE WINNER!");
      updateDisplay("gameplayintro", "Here are the rest of the cards, in case you were interested ...");
    } else 
    {
      console.log("Nope!!! That's not snap.")
    }
  });

});