
        const card_api_url = 'https://deckofcardsapi.com/api/deck/new/draw/?count=2';
        
        async function getCards() {
            const response = await fetch(card_api_url); 
            let data = await response.json();
            console.log(data);
            console.log(data.cards[1]);
            //    Use Javascript destructuring to take data from first card in array and create separate variables
            const {code, value, suit, image} = data.cards[0];
            console.log(code);
            console.log(value);
            console.log(suit);
            console.log(image);

            let card1code = data.cards[0].code;
            console.log(card1code);
            let card1suit = data.cards[0].suit;
            console.log(card1suit);
            let card1image = data.cards[0].image;
            console.log(card1image);
            let card1value = data.cards[0].value;
            console.log(card1value);
            let card2value = data.cards[1].value;
            console.log(card2value);
            let card2code = data.cards[1].code;
            console.log(card2code);
            let card2suit = data.cards[1].suit;
            console.log(card2suit);
            let card2image = data.cards[1].image;
            console.log(card2image);

            
           
            // Update the DOM
    document.getElementById('code1').textContent = code;
    document.getElementById('value1').textContent = value;
    document.getElementById('suit1').textContent = suit;
    document.getElementById('cardimg1').src = image;

    document.getElementById('code2').textContent = card2code;
    document.getElementById('value2').textContent = card2value;
    document.getElementById('suit2').textContent = card2suit;
    document.getElementById('cardimg2').src = card2image;
            
        }
        
        getCards();
        
        
            