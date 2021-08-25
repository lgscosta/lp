// var cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
// var suits = ["diamonds", "hearts", "spades", "clubs"];
var cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
var attributes = [1, 2, 3, 4];
var deck = new Array();
var attRound;

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

function switchAttArray(id){
  switch(id){
    case 1:
        v = "Coffe Lover";
        break;

    case 2:
        v = "Lab User";
        break;

    case 3:
        v = "Reputation";
        break;

    default:
      v = "Energy";
      break;
    }
  
  return v;
}

function switchAttId(id){
  switch(id){
    case 1:
        v = 'coffe';
        break;

    case 2:
        v = 'lab';
        break;

    case 3:
        v = 'reputation';
        break;

    default:
      v = 'energy';
      break;
    }
  
  return v;
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

function switchAttributes(id){
  switch(id){
    case 1:
        v = [65, 20, 100, 85];
        break;

    case 2:
        v = [50, 60, 10, 45];
        break;

    case 3:
        v = [40, 60, 15, 90];
        break;

    case 4:
        v = [75, 40, 60, 75];
        break;
    
    case 5:
        v = [80, 90, 80, 70];
        break;

    case 6:
        v = [50, 100, 70, 80];
        break;

    case 7:
        v = [60, 80, 90, 45];
        break;

    case 8:
        v = [80, 70, 90, 50];
        break;

    case 9:
        v = [80, 70, 70, 40];
        break;

    case 10:
        v = [60, 95, 100, 70];
        break;

    case 11:
        v = [85, 75, 100, 65];
        break;

    case 12:
        v = [60, 30, 30, 70];
        break;

    case 13:
        v = [75, 70, 50, 40];
        break;

    case 14:
        v = [60, 70, 95, 85];
        break;
    
    case 15:
        v = [80, 35, 65, 80];
        break;

    case 16:
        v = [50, 50, 50, 50];
        break;

    case 17:
        v = [45, 35, 75, 90];
        break;

    case 18:
        v = [85, 70, 75, 75];
        break;

    case 19:
        v = [40, 70, 60, 50];
        break;

    case 20:
        v = [75, 70, 65, 85];
        break;

    case 21:
        v = [85, 35, 90, 80];
        break;

    case 22:
        v = [100, 60, 80, 70];
        break;

    case 23:
        v = [70, 95, 65, 80];
        break;

    default:
        v = [70, 70, 90, 50];
        break;
  }

  return v;
}

function competition(n){
  var player = switchAttributes(deck[n])[attRound-1];
  var npc = switchAttributes(choiceNPC())[attRound-1];
  alert(player + switchName(deck[n]) + " " + npc + switchName(choiceNPC()));

  if(player > npc){
    alert("Go girll");
  }
  else if(npc > player){
    alert("Welcome to real world");
  }
  else{
    alert("Oh, ok... unexpected");
  }
}

function choiceNPC(){
  let number = getRandomArbitrary(1, 3);
  
  switch (number) {
    case 1:
      return deck[2];
      break;
  
    default:
      return deck[3];
      break;
  }
}

function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
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

  // returns round attribute
  attRound = getRandomArbitrary(1, 5);
  
  var attribute = switchAttId(attRound)
  let change = document.getElementById(attribute);
  change.style.backgroundColor = 'black';
  
  // alert(attRound);

  // var npc = choiceNPC();
  // var player1 = switchAttributes(deck[0])[attRound-1];
  // var player2 = switchAttributes(deck[1])[attRound-1];
  // var npc1 = switchAttributes(deck[2])[attRound-1];
  // var npc2 = switchAttributes(deck[3])[attRound-1];


  // alert(player1 + switchName(deck[0]));
  // alert(player2 + switchName(deck[1]));
  // alert(pc1 + switchName(deck[2]));
  // alert(pc2 + switchName(deck[3]));
  // alert("O seu oponente possui as cartas: " + switchName(deck[2]) + " e " + switchName(deck[3]) + "!");
}

function load(){
	deck = getDeck();
	shuffle();
	// renderDeck();
}

window.onload = load;


// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA