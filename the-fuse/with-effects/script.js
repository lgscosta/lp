var cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
var attributes = [1, 2, 3, 4];
var deck = new Array();
var attRound;
var roundMax = 1;
var hpPlayer = 500;
var hpNPC = 500
var playerWins = 0;
var NPCWins = 0;

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
        v = "The WHO??";
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

function switchEffects(playerCard,npcCard,attRound,player,roundMax,hpPlayer,hpNPC){
    let aux;
    let div;
    let cont = 0;     
    let atr1;     
    let atr2;

    switch(playerCard){
        // The Mother
        case 1:
            if(attRound === 2){
                return 1000; 
            } 

            return player;
        break;  
        // The Noise
        case 2:
            aux = getRandomArbitrary(1, 5);
            if(aux === attRound){
                return 0; 
            }

            return player;
        break;   
        // The Surfer
        case 3:
            atr2 = switchAttributes(npcCard);  
            if(attRound === 3){
                if((atr2[2] - player)> 70){
                    return atr2[2]; 
                }
            }
            
            return player;
        break;
        // The Dancer
        case 4:
            if(attRound === 3){    
                aux = roundMax * 5; 
                return player - aux; 
            }

            return player;

        break; 
        // The Optimizer
        case 5:
            atr1 = switchAttributes(playerCard);     
            atr2 = switchAttributes(npcCard); 

            if(atr1[0] > atr2[0]){
                cont = cont + 1;
            }

            if(atr1[1] > atr2[1]){
                cont = cont + 1;
            }

            if(atr1[2] > atr2[2]){
                cont = cont + 1; 
            }

            if(atr1[3] > atr2[3]){
                cont = cont + 1; 
            }

            if(cont > 2){
                player = 101; 
            }

            return player;
        break; 
        // The Rookie
        case 6:
            aux = getRandomArbitrary(1, 5);
            if(aux === attRound){
                div = getRandomArbitrary(1,5); 
                return (player * 2)/div;
            }

            return player;
        break; 
        // The Transformer
        case 8: 
            if(attRound === 4){
                if(roundMax%2 === 0){
                    return player + (5 * roundMax); 
                }
                
                return  player + (5 * (roundMax - 1));
            }

            return player;
        break; 
        // The Intruder
        case 9:
            aux = getRandomArbitrary(1,5); 

            if(aux === attRound){
                return 0; 
            }

            return player + 40; 
        break; 
        //The Oracle
        case 10:
            return player; 
        break; 
        //The Boss
        case 13:
            aux = getRandomArbitrary(1,5); 

            if(aux === attRound){
                return player * 2; 
            }

            return player;
        break; 
        // The Aunt
        case 14:
            if(hpPlayer < 200){
                return 100; 
            }

            return player;
        break; 
        // The Ruler
        case 17:
            atr2 = switchAttributes(npcCard); 

            if(atr2[0] + atr2[1] + atr2[2] + atr2[3] < 261){
                return player; 
            }

            return player;
        break; 
        // The Virtual Machine
        case 18:
            atr1 = switchAttributes(playerCard);
            aux = getRandomArbitrary(1,5); 
            div = aux;

            while(div === aux){
                div = getRandomArbitrary(1,5);
            }

            if(aux === attRound || div === attRound){
                if(atr1[aux - 1] > atr1[div - 1]){
                    return atr1[aux - 1] - atr1[div - 1];
                }

                return atr1[div - 1] - atr1[aux - 1];
            }

            return player;
        break; 
        // The Silk Touch
        case 19:
            if(roundMax % 2 !== 0){
                aux = getRandomArbitrary(1,5);
                div = aux;

                while(div === aux){
                    div = getRandomArbitrary(1,5);
                }

                if(aux === attRound || div === attRound){
                    return player * 2; 
                }
            }

            return player;
        break; 
        // The Preppy
        case 20:
            aux = getRandomArbitrary(0,2);

            if(aux === 0){
                if(attRound === 3){
                    return player - 5;
                } 

                if(attRound === 2){
                    return player + 10;
                }
            }

            return player;
        break; 
        // The Runaway
        case 21:
            if(attRound === 3){
                return player * 2; 
            }
            return player;
        break; 
        // The Siren
        case 22:
            if(roundMax > 4){
                if(attRound === 1 || attRound === 2){
                    return player * 3;
                }
            }

            return player;
        break; 
        // The Guardian
        case 23:
            aux = getRandomArbitrary(0,2);

            if(aux === 0){
                return player * 2; 
            }

            return player;
        break;

        default:
            return player;
        break;
    }

}

function switchHpEffects(card,yourHP,otherHP){
    let aux; 
    let div; 
    let atr1;

    const changePlayer = document.querySelector("#player");
    const changeNPC = document.querySelector("#npc");

    switch(card){
        //The Whisper
        case 7:
            aux = getRandomArbitrary(1,5); 

            atr1 = switchAttributes(card); 
            yourHP = yourHP + atr1[aux - 1]; 
            if(yourHP > 500){
                yourHP = 500;
            }

            changePlayer.innerHTML = "Player hp: " + yourHP; 
            return yourHP;
        break; 
        // The Witcher
        case 11:
            aux = getRandomArbitrary(1,5); 

            atr1 = switchAttributes(card); 
            otherHP = otherHP - atr1[aux - 1]; 
            alert(otherHP);

            changeNPC.innerHTML = "NPC hp: " + otherHP;
            return otherHP;
        break; 
        // The Hunter  
        case 12:
            aux = getRandomArbitrary(1,101); 
            
            otherHP = otherHP - aux; 
            changeNPC.innerHTML = "NPC hp: " + otherHP;
            
            div = getRandomArbitrary(1,151); 

            yourHP = yourHP - div; 
            changePlayer.innerHTML = "Player hp: " + yourHP;

            return [yourHP, otherHP];
        break; 
        // The Poisson
        case 15:
            if((otherHP - yourHP) > 100){
                otherHP = otherHP - 50; 

                changeNPC.innerHTML = "Player hp: " + otherHP;
            }

            return otherHP;
        break; 

        default:
            return otherHP;
        break;
    }

    return otherHP;
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

function putEffects(playerCard,npcCard,attRound,player,npc,roundMax,hpPlayer,hpNPC){
    // Player 
    player = switchEffects(playerCard,npcCard,attRound,player,roundMax,hpPlayer,hpNPC);

    if(playerCard === 7){
        hpPlayer = switchHpEffects(playerCard,hpPlayer,hpNPC); 
    }
    else if(playerCard == 12){
        tup = switchHpEffects(playerCard,hpPlayer,hpNPC);

        hpPlayer = tup[0];
        hpNPC = tup[1];
    }
    else{
        hpNPC = switchHpEffects(playerCard,hpPlayer,hpNPC); 
    }

    // NPC 
    if(npcCard === 7){
        hpNPC = switchHpEffects(npcCard,hpNPC,hpPlayer); 
    }
    else if(npcCard == 12){
        tup = switchHpEffects(npcCard,hpNPC,hpPlayer);

        hpNPC = tup[0];
        hpPlayer = tup[1];
    }
    else{
        hpPlayer = switchHpEffects(npcCard,hpNPC,hpPlayer); 
    }
}

function competition(n){
    var playerCard = deck[n];
    var player = switchAttributes(playerCard)[attRound-1];
    var npcCard = choiceNPC();
    var npc = switchAttributes(npcCard)[attRound-1];

    // Aplica efeitos
    putEffects(playerCard,npcCard,attRound,player,npc,roundMax,hpPlayer,hpNPC);

    // Se for The Oracle precisa passar de 1000 pra 100
    if(playerCard === 10 || playerCard === 17){
        npc = 0;
    }

    if(player > npc){
        playerWins = playerWins + 1;
    }
    else if(npc > player){
        NPCWins = NPCWins + 1;
    }

    murder(player, npc);
    printRound(roundMax, playerCard, player, npcCard, npc);
    roundMax = roundMax + 1;

    if(roundMax > 13){
        if(playerWins >= NPCWins){
            window.location.href = "victory.html"
        }
        else{
            window.location.href = "defeat.html";
        }

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

function murder(player, npc){
    if(player > npc){
        if((player - npc) >= 100){
            player = 100; 
            npc = 0;
        }

        hpNPC = hpNPC - (player - npc);
        const changeNPC = document.querySelector("#npc");
        changeNPC.innerHTML = "NPC hp: " + hpNPC;
    }
    else if(npc > player){
        if((npc - player) >= 100){
            npc = 100; 
            player = 0; 
        }
        
        hpPlayer = hpPlayer - (npc - player);
        const changePlayer = document.querySelector("#player");
        changePlayer.innerHTML = "Player hp: " + hpPlayer;
    }

    if(hpPlayer === 0){
        window.location.href = "defeat.html"
    }
    if(hpNPC === 0){
        window.location.href = "victory.html"
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

function printRound(roundMax, playerCard, player, npcCard, npc){
    if(player > npc){
        if(roundMax >= 13){
            swal({
                title: "Round " + roundMax,
                text: "You won with the character " + "\'" + switchName(playerCard) + "\' who made " + player + " points on attribute \'"
                + switchAttArray(attributes[attRound-1]) + "\'.\nThe NPC lost with the character "+ "\'" + switchName(npcCard) + "\' who made " + npc + " points."
                + "\n\nClick out and wait a sec.",
                button: false,
                className: "info-won"
            });
        }
        else{
            swal({
                title: "Round " + roundMax,
                text: "You won with the character " + "\'" + switchName(playerCard) + "\' who made " + player + " points on attribute \'"
                + switchAttArray(attributes[attRound-1]) + "\'.\nThe NPC lost with the character "+ "\'" + switchName(npcCard) + "\' who made " + npc + " points.",
                button: false,
                className: "info-won"
            });
        }
    }
    else if(npc > player){
        if(roundMax >= 13){
            swal({
                title: "Round " + roundMax,
                text: "NPC won with the character " + "\'" + switchName(npcCard) + "\' who made " + npc + " points on attribute \'"
                + switchAttArray(attributes[attRound-1]) + "\'.\nYou lost with the character "+ "\'" + switchName(playerCard) + "\' who made " + player + " points."
                + "\n\nClick out and wait a sec.",
                button: false,
                className: "info-lost"
            });
        }
        else{
            swal({
                title: "Round " + roundMax,
                text: "NPC won with the character " + "\'" + switchName(npcCard) + "\' who made " + npc + " points on attribute \'"
                + switchAttArray(attributes[attRound-1]) + "\'.\nYou lost with the character "+ "\'" + switchName(playerCard) + "\' who made " + player + " points.",
                button: false,
                className: "info-lost"
            });
        }
    }
    else{
        if(roundMax >= 13){
            swal({
                title: "Round " + roundMax,
                text: "There was a tie between you character: " + "\'" + switchName(playerCard) + "\' and NPC's character " + "\'" + switchName(npcCard)
                + "\' with " + player + " points on attribute \'" + switchAttArray(attributes[attRound-1]) + "\'."
                + "\n\nClick out and wait a sec.",
                button: false,
                className: "info-tie"
            });
        }
        else{
            swal({
                title: "Round " + roundMax,
                text: "There was a tie between you character: " + "\'" + switchName(playerCard) + "\' and NPC's character " + "\'" + switchName(npcCard)
                + "\' with " + player + " points on attribute \'" + switchAttArray(attributes[attRound-1]) + "\'.",
                button: false,
                className: "info-tie"
            });
        }
    }
}

function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function infoCard(n){
    switchInfo(deck[n]);
}

function switchInfo(key){
    let message;

    switch(key){
    case 1: 
    //popup
    message = "Cant lose a lab battle.She dont even need to use a lab bro.\n\nCL: 65\nLAB: 20\nREP: 100\nENE: 85";
    break; 

    case 2:
    //popup
    message = "Turn one of your attributes into zero.\n\nCL: 50\nLAB: 60\nREP: 10\nENE: 45";
    break; 

    case 3:
    //popup
    message = "If the enemy have more than 70 reputations points higher than this card, tie the duel.\n\nCL: 40\nLAB: 60\nREP: 15\nENE: 90";
    break; 

    case 4:
    //popup
    message = "Lose 5 points of reputation for each turn ended in the game.\n\nCL: 75\nLAB: 40\nREP: 60\nENE: 75";
    break; 

    case 5:
    //popup
    message = "If she overcome the atributes of the enemy card in more than a half of they, she wins the duel. \n\nCL: 80\nLAB: 90\nREP: 80\nENE: 70";
    break; 

    case 6:
    //popup
    message = "Double a random atribute, but after, divide by a random number into 1 and 4.\n\nCL: 50\nLAB: 100\nREP: 70\nENE: 80";
    break; 

    case 7:
    //popup
    message = "Heals the player health point in the value of one random atribute.\n\nCL: 60\nLAB: 80\nREP: 90\nENE: 45";
    break; 

    case 8:
    //popup
    message = "The energy get increased in 10 points every 2 turns.\n\nCL: 80\nLAB: 70\nREP: 90\nENE: 50";
    break; 

    case 9:
    //popup
    message = "Turn one of his atributes into 0 and increases 40 points to the others atributes.\n\nCL: 80\nLAB: 70\nREP: 70\nENE: 40";
    break; 

    case 10:
    //popup
    message = "Actually,the Oracle cannot be beaten in battle because we didnt used python on our code. Automatic win and 100 damage to enemy.\n\nCL: 60\nLAB: 95\nREP: 100\nENE: 70";
    break; 

    case 11:
    //popup
    message = "Enemy take damage in the value of one random atribute before the duel. If he wins the turn, the damage calculation happens normally.\n\nCL: 85\nLAB: 75\nREP: 100\nENE: 65";
    break; 

    case 12:
    //popup
    message = "Enemy takes 0-100 gamage before duel and you takes 0-150 damage.\n\nCL: 60\nLAB: 30\nREP: 30\nENE: 70";
    break; 

    case 13:
    //popup
    message = "thanks to your authority, double a random atribute.\n\nCL: 75\nLAB: 70\nREP: 50\nENE: 40";
    break; 

    case 14:
    //popup
    message = "If the player have less than 200 hp points, all atributes of this card became 100.\n\nCL: 60\nLAB: 70\nREP: 95\nENE: 85";
    break; 

    case 15:	
    //popup
    message = "If enemy has more than 100 health points more than you, he takes 50 points of damage.\n\nCL: 80\nLAB: 35\nREP: 65\nENE: 80";
    break; 

    case 16:
    //popup
    message = "Actually we dont know nothing about that guy.\n\nCL: 50\nLAB: 50\nREP: 50\nENE: 50";
    break; 

    case 17:
    //popup
    message = "If the sun of your enemy all atributes is less than 260, he do not have autorithy to fight “The Ruler”.Automatic win and 50 damage to your enemy.\n\nCL: 45\nLAB: 35\nREP: 75\nENE: 90";
    break; 

    case 18:
    //popup
    message = "Two of this card attributes get decreased by each other randomly.\n\nCL: 85\nLAB: 70\nREP: 75\nENE: 75";
    break; 

    case 19:
    //popup
    message = "If thats a odd turn, triple two random atributes.\n\nCL: 40\nLAB: 70\nREP: 60\nENE: 50";
    break; 

    case 20:
    //popup
    message = "This card will have -20 points in a reputation duel, in exchange it increase 30 points in Lab.\n\nCL: 75\nLAB: 70\nREP: 65\nENE: 85";
    break; 

    case 21:
    //popup
    message = "Double the reputation, this guy is so cool.\n\nCL: 85\nLAB: 35\nREP: 90\nENE: 80"
    break;

    case 22:
    //popup
    message = "If the turn is more than 4, coffe lover and lab atributtes will triplicate.\n\nCL: 100\nLAB: 60\nREP: 80\nENE: 70";
    break; 

    case 23:
    //popup
    message = "Have 50% of chance to double the duel choiced atribute.\n\nCL: 70\nLAB: 95\nREP: 65\nENE: 80";
    break; 

    case 24: 
    //popup
    message = "He is just sad.\n\nCL: 70\nLAB: 70\nREP: 90\nENE: 50"
    break;
    }

    swal({
        title: switchName(key),
        text: message,
        button: "Got it!",
        className: "info-card"
    });
}

function switchImage(key){
    switch(key){
        case 1:
            return "mother ";
        break;
    
        case 2:
            return "noise ";
        break;
    
        case 3:
            return "surfer ";    
        break;
    
        case 4:
            return "dancer ";    
        break;
        
        case 5:
            return "optimizer ";    
        break;
    
        case 6:
            return "rookie ";    
        break;
    
        case 7:
            return "whisper ";    
        break;
    
        case 8:
            return "transformer ";    
        break;
    
        case 9:
            return "intruder ";    
        break;
    
        case 10:
            return "oracle ";    
        break;
    
        case 11:
            return "witcher ";    
        break;
    
        case 12:
            return "hunter ";    
        break;
    
        case 13:
            return "boss ";    
        break;
    
        case 14:
            return "aunt ";    
        break;
        
        case 15:
            return "poisson ";    
        break;
    
        case 16:
            return "who ";    
        break;
    
        case 17:
            return "ruler ";    
        break;
    
        case 18:
            return "vm ";    
        break;
    
        case 19:
            return "st ";    
        break;
    
        case 20:
            return "preppy ";    
        break;
    
        case 21:
            return "runaway ";    
        break;
    
        case 22:
            return "siren ";    
        break;
    
        case 23:
            return "guardian ";    
        break;
    
        default:
            return "sadboy ";
        break;
      }
}

function renderDeck(){
    let firstImage = switchImage(deck[0]);
    let secondImage = switchImage(deck[1]);

    document.getElementById('deck').innerHTML = '';

  // first card on 
		var card = document.createElement("div");
		var value = document.createElement("div");
		var first = document.createElement("div");
		card.className = "card";
		value.className = "value";
		first.className = firstImage + deck[0].Suit;

    value.innerHTML = switchName(deck[0]);

		card.appendChild(value);
		card.appendChild(first);

		document.getElementById("deck").appendChild(card);
  // first card out 

  // second card on 
    var card = document.createElement("div");
    var value = document.createElement("div");
    var second = document.createElement("div");
    card.className = "card";
    value.className = "value";
    second.className = secondImage + deck[1].Suit;

    value.innerHTML = switchName(deck[1]);

    card.appendChild(value);
    card.appendChild(second);

    document.getElementById("deck").appendChild(card);
  // second card out 

  // returns round attribute
 // attRound = getRandomArbitrary(1, 5);
    attRound = 1;

    changeColor(attRound, 0);
}

function load(){
//   "swal({
//     title: "The Fuse",
//     text: "Both players starts the game with 500 health points.\n" +
//     "In every turn both players receive 2 characters cards. \n" +
//     "In every turn one of the 4 attributes of the characters\n" +
//     "are sorted to be the attribute of the duel in this turn.\n\n" +
//     "The turn's attribute is the black one.\n" +
//     "\nAll character cards have a speciall effect. \n" +
//     "After the effects are called, the calculation between\n" +
//     "the characters sorted attribute.\n" +
//     "The winner of the turn is who have the biggest attribute value.\n" +
//     "The damage calculation in the end of the turn is the value of\n" +
//     "the winner value subtracted by the loser value.\n" +
//     "This game have not card discards, so you can have the sam\n" +
//     "card in your hand more than a time in a row.\n" +
//     "The game ends when a player health points gets 0 or lower,\n" +
//     "or when it cames to the 13 turn. In this case, wins\n" +
//     "who have more hp.\n" +
//     "Ties can happens.",
//     button: "Ready",
//     className: "info-start"
//   });"

	deck = getDeck();
	shuffle();
	// renderDeck();
}

window.onload = load;


// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

    