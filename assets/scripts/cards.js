const card_api_url = "https://deckofcardsapi.com/api/deck/new/draw/?count=12";

var card1code;
var card1suit;
var card1image;
var card1value;
var card2code;
var card2suit;
var card2image;
var card2value;

function updateDisplay(targetId, dataUpdate) {
    // Update the DOM
    document.getElementById(targetId).textContent = dataUpdate;
};

function updateImage(targetId, dataUpdate) {
    // Update the DOM
    document.getElementById(targetId).src = dataUpdate;
};

function displayCards() {
      // Update the DOM
    //   document.getElementById("code1").textContent = card1code;
    updateDisplay("code1",card1code);
    updateDisplay("value1",card1value);
    updateDisplay("suit1",card1suit);
    updateImage("cardimg1",card1image);

    updateDisplay("code2",card2code);
    updateDisplay("value2",card2value);
    updateDisplay("suit2",card2suit);
    updateImage("cardimg2",card2image);

    //   document.getElementById("value1").textContent = card1value;
    //   document.getElementById("suit1").textContent = card1suit;
    //   document.getElementById("cardimg1").src = card1image;
    
    //   document.getElementById("code2").textContent = card2code;
    //   document.getElementById("value2").textContent = card2value;
    //   document.getElementById("suit2").textContent = card2suit;
    //   document.getElementById("cardimg2").src = card2image;
};

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
cardCodes[i] = [data.cards[i].code]
console.log("card codes are " + cardCodes);
};

  card1code = data.cards[0].code;
  console.log(card1code);

  card1suit = data.cards[0].suit;
  console.log(card1suit);

  card1image = data.cards[0].image;
  console.log(card1image);

  card1value = data.cards[0].value;
  console.log(card1value);

  card2value = data.cards[1].value;
  console.log(card2value);

  card2code = data.cards[1].code;
  console.log(card2code);

  card2suit = data.cards[1].suit;
  console.log(card2suit);

  card2image = data.cards[1].image;
  console.log(card2image);

  displayCards();

};

getCards();


