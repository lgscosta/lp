var cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
var attributes = [1, 2, 3, 4];
var deck = new Array();
var attRound;
var roundMax = 1;

function getDeck(){
  var deck = new Array();
	
  for(var x = 0; x < cards.length; x++){
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

function switchInfo(key){
  let message;

  switch(key){
    case 1: 
    //popup
    message = "The Mother/nPeculiaridade: Turn a random enemy attribute into zero./nCL: 65/nLAB: 20/nREP: 100/nENE: 85";
    break; 

    case 2:
    //popup
    message = "The Noise/nPeculiaridade: Turn one of your attributes into zero./nCL: 50/nLAB: 60/nREP: 10/nENE: 45";
    break; 

    case 3:
    //popup
    message = "The Surfer/nPeculiaridade: Have 50% of run chance. No damage if this happens./nCL: 40/nLAB: 60/nREP: 15/nENE: 90";
    break; 

    case 4:
    //popup
    message = "The Dancer/nPeculiaridade: Lose 5 points of reputation for each turn ended in the game./nCL: 75/nLAB: 40/nREP: 60/nENE: 75";
    break; 

    case 5:
    //popup
    message = "The Optimizer/nPeculiaridade: If “The Optimazer” overcome the atributes of the enemy card in more than a half of they, she wins the duel. /nCL: 80/nLAB: 90/nREP: 80/nENE: 70";
    break; 

    case 6:
    //popup
    message = "The Rookie/nPeculiaridade: Double a random atribute, but after, divide by a random number into 1 and 4./nCL: 50/nLAB: 100/nREP: 70/nENE: 80";
    break; 

    case 7:
    //popup
    message = "The Whisper/nPeculiaridade: Heals the player health point in the value of one random atribute./nCL: 60/nLAB: 80/nREP: 90/nENE: 45";
    break; 

    case 8:
    //popup
    message = "The Transformer/nPeculiaridade: The energy get increased in 10 points every 2 turns./nCL: 80/nLAB: 70/nREP: 90/nENE: 50";
    break; 

    case 9:
    //popup
    message = "The Intruder/nPeculiaridade: Turn one of his atributes into 0 and increases 40 points to the others atributes./nCL: 80/nLAB: 70/nREP: 70/nENE: 40";
    break; 

    case 10:
    //popup
    message = "The Oracle/nPeculiaridade: Actually,the Oracle cannot be beaten in battle because we didnt used python on our code. Automatic win and 100 damage to enemy./nCL: 60/nLAB: 95/nREP: 100/nENE: 70";
    break; 

    case 11:
    //popup
    message = "The Witcher/nPeculiaridade: Enemy take damage in the value of one random atribute before the duel. If he wins the turn, the damage calculation happens normally./nCL: 85/nLAB: 75/nREP: 100/nENE: 65";
    break; 

    case 12:
    //popup
    message = "The Hunter/nPeculiaridade: Enemy takes 0-100 gamage before duel and you takes 0-150 damage./nCL: 60/nLAB: 30/nREP: 30/nENE: 70";
    break; 

    case 13:
    //popup
    message = "The Boss/nPeculiaridade: thanks to your authority, double a random atribute./nCL: 75/nLAB: 70/nREP: 50/nENE: 40";
    break; 

    case 14:
    //popup
    message = "The Aunt/nPeculiaridade: If the player have less than 300 hp points, all atributes of this card became 100./nCL: 60/nLAB: 70/nREP: 95/nENE: 85";
    break; 

    case 15:	
    //popup
    message = "The Poisson/nBase: Magnos/nPeculiaridade:If enemy has more than 100 health points more than you, he takes 50 points of damage./nCL: 80/nLAB: 35/nREP: 65/nENE: 80";
    break; 

    case 16:
    //popup
    message = "The WHO?/nPeculiaridade: Actually we dont know nothing about that guy./nCL: 50/nLAB: 50/nREP: 50/nENE: 50";
    break; 

    case 17:
    //popup
    message = "The Ruler/nPeculiaridade: If the sun of your enemy all atributes is less than260, he do not have autorithy to fight “The Ruler”.Automatic win and 50 damage to your enemy./nCL: 45/nLAB: 35/nREP: 75/nENE: 90";
    break; 

    case 18:
    //popup
    message = "The Virtual Machine/nPeculiaridade: Two of this card attributes get increased by each other randomly./nCL: 85/nLAB: 70/nREP: 75/nENE: 75";
    break; 

    case 19:
    //popup
    message = "The Silk Touch/nPeculiaridade: If thats a odd turn, double two random atributes./nCL: 40/nLAB: 70/nREP: 60/nENE: 50";
    break; 

    case 20:
    //popup
    message = "The Preppy/nPeculiaridade: This card can randomly, decrease 5 points of reputation, in exchange it increase 10 points in Lab./nCL: 75/nLAB: 70/nREP: 65";
    break; 

    case 21:
    //popup
    message = "The Runaway/nPeculiaridade: Double the reputation, this guy is so cool./nCL: 85/nLAB: 35/nREP: 90/nENE: 80"
    break;

    case 22:
    //popup
    message = "The Siren/nPeculiaridade: If the turn is less than 5 this card atributes triplicate./nCL: 100/nLAB: 60/nREP: 80/nENE: 70";
    break; 

    case 23:
    //popup
    message = "The Guardian/nPeculiaridade: Have 50% of chance to double the duel choiced atribute./nCL: 70/nLAB: 95/nREP: 65/nENE: 80";
    break; 

    case 24: 
    //popup
    message = "The SadBoy/nPeculiaridade: He is just sad./nCL: 70/nLAB: 70/nREP: 90/nENE: 50"
    break;
  }

  alert(message);
}

function competition(n){
  var player = switchAttributes(deck[n])[attRound-1];
  var npc = switchAttributes(choiceNPC())[attRound-1];
  // alert(player + switchName(deck[n]) + " " + npc + switchName(choiceNPC()));

  if(player > npc){
    alert("Go girll");
  }
  else if(npc > player){
    alert("Welcome to real world");
  }
  else{
    alert("Oh, ok... unexpected");
  }

  roundMax = roundMax + 1;

  if(roundMax === 13){
    alert("fim de jogo");
  } else{
    changeColor(attRound, 1);
    shuffle();
  }
}

function changeColor(attRound, type){
  var attribute = switchAttId(attRound);
  let change = document.getElementById(attribute);

  if(type === 0){
    change.style.backgroundColor = 'black';
  } else{
    switch(attRound){
      case 1:
        change.style.backgroundColor = 'rgb(146, 85, 16)';
        break;
  
      case 2:
        change.style.backgroundColor = 'rgb(17, 112, 37)';
        break;
  
      case 3:
        change.style.backgroundColor = 'rgb(231, 30, 187)';
        break;
    
      default:
        change.style.backgroundColor = 'rgb(25, 93, 196)';
        break;
    }
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

function infoCard(n){
  alert(switchInfo(deck[n]));
}

function renderDeck(){
	document.getElementById('deck').innerHTML = '';

  // first card on 
		var card = document.createElement("div");
		var value = document.createElement("div");
		var suit = document.createElement("div");
		card.className = "card";
		value.className = "value";
		suit.className = "suit " + deck[0].Suit;

    value.innerHTML = switchName(deck[0]);

		card.appendChild(value);
		card.appendChild(suit);

		document.getElementById("deck").appendChild(card);
  // first card out 

  // second card on 
    var card = document.createElement("div");
    var value = document.createElement("div");
    var suit = document.createElement("div");
    card.className = "card";
    value.className = "value";
    suit.className = "suit " + deck[1].Suit;

    value.innerHTML = switchName(deck[1]);

    card.appendChild(value);
    card.appendChild(suit);

    card.onmouseenter = console.log("aaaa");
    
    document.getElementById("deck").appendChild(card);
  // second card out 

  // returns round attribute
  attRound = getRandomArbitrary(1, 5);
  
  changeColor(attRound, 0);
  // var attribute = switchAttId(attRound);
  // var change = document.getElementById(attribute);
  // change.style.backgroundColor = 'black';
  
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
