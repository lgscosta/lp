// var cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
// var suits = ["diamonds", "hearts", "spades", "clubs"];
var cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
var deck = new Array();

function getDeck(){
  var deck = new Array();
	
  for(var x = 0; x < cards.length; x++){
    // var card = {Value: cards[x]};
    var card = cards[x];
    deck.push(card);
  }

	return deck;
}

function shuffle(){
	// for 1000 turns
	// switch the values of two random cards
	for (var i = 0; i < 1000; i++){
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}

	renderDeck();
}

function switchName(id){
  switch(id){
    case 1:
        v = "The Mother";
        break;

    case 2:
        v = "The Noise";
        break;

    case 3:
        v = "The Surfer";
        break;

    case 4:
        v = "The Dancer";
        break;
    
    case 5:
        v = "The Optimizer";
        break;

    case 6:
        v = "The Rookie";
        break;

    case 7:
        v = "The Whisper";
        break;

    case 8:
        v = "The Transformer";
        break;

    case 9:
        v = "The Intruder";
        break;

    case 10:
        v = "The Oracle";
        break;

    case 11:
        v = "The Witcher";
        break;

    case 12:
        v = "The Hunter";
        break;

    case 13:
        v = "The Boss";
        break;

    case 14:
        v = "The Aunt";
        break;
    
    case 15:
        v = "The Poisson";
        break;

    case 16:
        v = "The WHO";
        break;

    case 17:
        v = "The Ruler";
        break;

    case 18:
        v = "The Virtual Machine";
        break;

    case 19:
        v = "The Silk Touch";
        break;

    case 20:
        v = "The Preppy";
        break;

    case 21:
        v = "The Runaway";
        break;

    case 22:
        v = "The Siren";
        break;

    case 23:
        v = "The Guardian";
        break;

    default:
        v = "The SadBoy";
        break;
  }

  return v;
}

function renderDeck(){
	document.getElementById('deck').innerHTML = '';

	for(var i = 0; i < 2; i++){
		var card = document.createElement("div");
		var value = document.createElement("div");
		var suit = document.createElement("div");
		card.className = "card";
		value.className = "value";
		suit.className = "suit " + deck[i].Suit;

    value.innerHTML = switchName(deck[i]);

		// value.innerHTML = deck[i];
		// value.innerHTML = deck[i].Value;
		card.appendChild(value);
		card.appendChild(suit);

		document.getElementById("deck").appendChild(card);
	}

  alert("O seu oponente possui as cartas: " + switchName(deck[2]) + " e " + switchName(deck[3]) + "!");
  // console.log(switchName(deck[2]), switchName(deck[3]));
}

function load(){
	deck = getDeck();
	shuffle();
	// renderDeck();
}

window.onload = load;


// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA