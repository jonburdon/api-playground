const card_api_url = "https://deckofcardsapi.com/api/deck/new/draw/?count=12";

var card1code;
var card1suit;
var card1image;
var card1value;
var card2code;
var card2suit;
var card2image;
var card2value;
var testImgHtml = "<img src='rainbow.jpg'>";
var testImgHtml2;

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

// for (ii=6; ii<12; ii++) {
//     console.log(`For loop two ${ii}`);
    
//         for (iNested=6; iNested<12; iNested++) {
//             console.log(`Nested Loop ${i} loop ${iNested}`);
//             twelveCards[iNested][0] = [twelveCards[iNested-6][0]];
//             twelveCards[iNested][1] = [twelveCards[iNested-6][1]];
//         }
// };

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
  
  //Display 2 cards only by calling updateDisplay Function
//   updateDisplay("code1",card1code);
//   updateDisplay("value1",card1value);
//   updateDisplay("suit1",card1suit);
  updateImage("cardimg1",card1image);

//   updateDisplay("code2",card2code);
//   updateDisplay("value2",card2value);
//   updateDisplay("suit2",card2suit);
//   updateImage("cardimg2",card2image);

// Display 6 cards
  
//   for (i=0; i<6; i++) {
//     console.log(`For loop for 6 cards${i}`);
//     testImgHtml = `<img src="${cardChosen[i][1]}" width=50>`;
//     updateHtml("6cards",testImgHtml);
//     };

// Display 12 cards
  
//   for (i=0; i<12; i++) {
//     console.log(`For loop for 6 cards${i}`);
    // testImgHtml = `<img src="${twelveCards[i][1]}" width=50>`;
    // updateHtml("12cards",testImgHtml);
    // };

// Shuffle Cards from the 6 and the 12 packs
    // console.log(`6 cards unshuffled = ${cardChosen}`);
    // shuffleArray(cardChosen);
    // console.log(`6 cards shuffled = ${cardChosen}`);

    // console.log(`12 cards unshuffled = ${twelveCards}`);
    // shuffleArray(twelveCards);
    // console.log(`12 cards shuffled = ${twelveCards}`);

    // for (i=0; i<6; i++) {
    //     console.log(`For loop for 6 cards${i}`);
    //     testImgHtml = `<img src="${cardChosen[i][1]}" width=50>`;
        // updateHtml("6cardsshuffled",testImgHtml);
        // };
    
// Display 12 cards
      
    //   for (i=0; i<12; i++) {
    //     console.log(`For loop for 6 cards${i}`);
    //     testImgHtml = `<img src="${twelveCards[i][1]}" width=50>`;
    //     updateHtml("12cardsshuffled",testImgHtml);
    //     };

};

  displayCards();



};

getCards();


