// Declaração de variáveis
var cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
var attributes = [1, 2, 3, 4];
var deck = new Array();
var attRound;
var roundMax = 1;
var hpPlayer = 500;
var hpNPC = 500
var playerWins = 0;
var NPCWins = 0;

// Função base
function getDeck(){
    // Cria um novo array 
    var deck = new Array();
        
    // Atribui IDs das cartas 
    for(var x = 0; x < cards.length; x++){
        var card = cards[x];
        deck.push(card);
    }

	return deck;
}

// Função base 
function shuffle(){
    // Troca de posição duas cartas 
	for (var i = 0; i < 1000; i++){
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}

    // Chamada da função de renderização
	renderDeck();
}

// Função auxiliar que retorna o nome do atributo
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

// Função auxiliar que retorna o ID do atributo
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

// Função auxiliar que retorna o nome do personagem
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

// Função base
function switchEffects(playerCard,npcCard,attRound,player,roundMax,hpPlayer,hpNPC){
    let aux;
    let div;
    let cont = 0;     
    let atr1;     
    let atr2;

    switch(playerCard){
        // The Mother
        case 1:
            if(attRound === 2){ // Se for atributo lab retorna máximo + 1
                return 101; 
            } 

            return player;
        break;  
        // The Noise
        case 2:
            aux = getRandomArbitrary(1, 5);
            if(aux === attRound){ // Se o atributo sorteado for o da rodada, é zerado
                return 0; 
            }

            return player;
        break;   
        // The Surfer
        case 3:
            atr2 = switchAttributes(npcCard);  
            if(attRound === 3){ // Se for o atributo de reputação
                if((atr2[2] - player) > 70){ // Vê se o inimigo pontua 70 pontos além
                    return atr2[2]; // Se retornar, empata
                }
            }
            
            return player;
        break;
        // The Dancer
        case 4:
            if(attRound === 3){ // Se for o atributo de reputação  
                aux = roundMax * 5; 
                return player - aux; // Perde cinco pontos de reputação por rodada 
            }

            return player;

        break; 
        // The Optimizer
        case 5:
            atr1 = switchAttributes(playerCard);     
            atr2 = switchAttributes(npcCard); 

            if(atr1[0] > atr2[0]){ // Compara o atributo Coffe Lover
                cont = cont + 1;
            }

            if(atr1[1] > atr2[1]){ // Compara o atributo Lab User
                cont = cont + 1;
            }

            if(atr1[2] > atr2[2]){ // Compara o atributo Reputation
                cont = cont + 1; 
            }

            if(atr1[3] > atr2[3]){ // Compara o atributo Energy
                cont = cont + 1; 
            }

            if(cont > 2){  // Se o contador for maior que dois significa que ganha na maioria dos atributos
                player = 101; // Max + 1
            }

            return player;
        break; 
        // The Rookie
        case 6:
            aux = getRandomArbitrary(1, 5);
            if(aux === attRound){ // Se for o atributo da rodada
                div = getRandomArbitrary(1,5); 
                return (player * 2)/div; // Multiplica por dois e divide por um número entre 1 e 4
            }

            return player;
        break; 
        // 7 não possui efeito
        // The Transformer
        case 8: 
            if(attRound === 4){ // Se for o atributo Energy
                if(roundMax%2 === 0){ // Se for uma rodada par
                    return player + (5 * roundMax); // Retorna 5 pontos a mais no atributo
                }
                
                return  player + (5 * (roundMax - 1)); // Caso seja impar, mantem o anterior
            }

            return player;
        break; 
        // The Intruder
        case 9:
            aux = getRandomArbitrary(1,5); 

            if(aux === attRound){ // Se for o atributo da rodada
                return 0; // Retorna zero
            }

            return player + 40; // Caso não seja, soma 40
        break; 
        //The Oracle
        case 10:
            return player; 
        break; 
        // 11, 12 não possuem efeito
        //The Boss
        case 13:
            aux = getRandomArbitrary(1,5); 

            if(aux === attRound){ // Se for o atributo da rodada
                return player * 2; // Duplica
            }

            return player;
        break; 
        // The Aunt
        case 14:
            if(hpPlayer < 200){ // Se o jogador estiver com menos de 200 hp
                return 100; // O atributo da rodada vira 100
            }

            return player;
        break; 
        // 15, 16 não possuem efeito
        // The Ruler
        case 17:
            atr2 = switchAttributes(npcCard); 

            if(atr2[0] + atr2[1] + atr2[2] + atr2[3] < 260){ // Se a soma dos atributos for menor que 260
                return 101; // Max + 1
            }

            return player;
        break; 
        // The Virtual Machine
        case 18:
            atr1 = switchAttributes(playerCard);
            aux = getRandomArbitrary(1,5); // Escolhe um arbitrário
            div = aux;

            while(div === aux){ // Escolhe um diferente do anterior (Forma utilizada outras vezes)
                div = getRandomArbitrary(1,5);
            }

            if(aux === attRound || div === attRound){ // Se for igual a um dos dois atributos selecionados
                if(atr1[aux - 1] > atr1[div - 1]){ // Esse if é feito para que a subtração saia positiva
                    return atr1[aux - 1] - atr1[div - 1]; // Poderia ser utilizado o método de verificar se a
                }                                         // solução é negativa e então multiplicar por dois.
                                                          // Mas agora já foi.
                return atr1[div - 1] - atr1[aux - 1];
            }

            return player;
        break; 
        // The Silk Touch
        case 19:
            if(roundMax % 2 !== 0){ // Se for rodada par
                aux = getRandomArbitrary(1,5);
                div = aux;

                while(div === aux){
                    div = getRandomArbitrary(1,5);
                }

                if(aux === attRound || div === attRound){ // Se for igual a um dos dois atributos selecionados
                    return player * 2; // Duplica
                }
            }

            return player;
        break; 
        // The Preppy
        case 20:
            aux = getRandomArbitrary(0,2); // Escolha de sim ou não

            if(aux === 0){ // Se "sim"
                if(attRound === 3){ // Se o atributo for Reputação
                    return player - 5; // Perde cinco pontos
                } 

                if(attRound === 2){ // Se o atributo for Lab User
                    return player + 10; // Sobe 10 pontos
                }
            }

            return player;
        break; 
        // The Runaway
        case 21:
            if(attRound === 3){ // Se o atributo for reputação
                return player * 2; // Duplica
            }
            return player;
        break; 
        // The Siren
        case 22:
            if(roundMax > 4){ // A partir da quinta rodada
                if(attRound === 1 || attRound === 2){ // Se for Coffe Lover ou Lab User
                    return player * 3; // Triplica
                }
            }

            return player;
        break; 
        // The Guardian
        case 23:
            aux = getRandomArbitrary(0,2); // Escolha de sim ou não

            if(aux === 0){ // Se "sim"
                return player * 2; // Duplica
            }

            return player;
        break;
        // 25 não possui efeito
        default:
            return player;
        break;
    }

}

// Função base
function switchHpEffects(card,yourHP,otherHP){
    // As funções aqui são explicadas como player e npc, mas podem ser aplicadas
    // nas cartas do npc também (por isso a nomeclatura dos parametros)
    let aux; 
    let div; 
    let atr1;

    const changePlayer = document.querySelector("#player"); // Para alterar o valor do hp na página
    const changeNPC = document.querySelector("#npc");

    switch(card){
        //The Whisper
        case 7:
            aux = getRandomArbitrary(1,5); 

            atr1 = switchAttributes(card); 
            yourHP = yourHP + atr1[aux - 1]; // Soma o hp do player com um atributo aleatório
            if(yourHP > 500){
                yourHP = 500;
            }

            changePlayer.innerHTML = "Player hp: " + yourHP; // Muda na página
            return yourHP;
        break; 
        // The Witcher
        case 11:
            aux = getRandomArbitrary(1,5); 

            atr1 = switchAttributes(card); 
            otherHP = otherHP - atr1[aux - 1]; // Subtrai o hp do NPC com um atributo aleatório

            changeNPC.innerHTML = "NPC hp: " + otherHP;
            return otherHP;
        break; 
        // The Hunter  
        case 12:
            aux = getRandomArbitrary(1,101); 
            
            otherHP = otherHP - aux; // Subtrai o hp do NPC com um número de 1 a 100
            changeNPC.innerHTML = "NPC hp: " + otherHP;
            
            div = getRandomArbitrary(1,151); 

            yourHP = yourHP - div; // Subtrai o hp do player com um número de 1 a 100
            changePlayer.innerHTML = "Player hp: " + yourHP;

            return [yourHP, otherHP];
        break; 
        // The Poisson
        case 15:
            if((otherHP - yourHP) > 100){ // Se a diferença pro NPC for maior que 100
                otherHP = otherHP - 50; // Subtrai 50 do npc

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

// Função auxiliar que retorna os atributos
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

// Função base 
function putEffects(playerCard,npcCard,attRound,player,npc,roundMax,hpPlayer,hpNPC){
    /* Player */
    // Aplicação dos efeitos de rodada
    player = switchEffects(playerCard,npcCard,attRound,player,roundMax,hpPlayer,hpNPC);

    // Aplicação dos efeitos de hp 
    if(playerCard === 7){ // Se for The Whisper
        hpPlayer = switchHpEffects(playerCard,hpPlayer,hpNPC); // Retorna HP do player
    }
    else if(playerCard == 12){ // Se for The Hunter
        tup = switchHpEffects(playerCard,hpPlayer,hpNPC); // Retorna os 2 HPs

        hpPlayer = tup[0];
        hpNPC = tup[1];
    }
    else{ // Se for os outros
        hpNPC = switchHpEffects(playerCard,hpPlayer,hpNPC); // Retorna HP do NPC
    }

    /* NPC */
    // Aplicação dos efeitos de rodada
    npc = switchEffects(npcCard,playerCard,attRound,npc,roundMax,hpNPC,hpPlayer);

    // Aplicação dos efeitos de hp 
    if(npcCard === 7){ // Se for The Whisper
        hpNPC = switchHpEffects(npcCard,hpNPC,hpPlayer); // Retorna HP do NPC
    }
    else if(npcCard == 12){ // Se for The Hunter
        tup = switchHpEffects(npcCard,hpNPC,hpPlayer); // Retorna os 2 HPs

        hpNPC = tup[0];
        hpPlayer = tup[1];
    }
    else{ // Se for os outros
        hpPlayer = switchHpEffects(npcCard,hpNPC,hpPlayer); // Retorna HP do Player
    }

    return player;
}

// Função na chamada de botão
function competition(n){
    var playerCard = deck[n];
    var player = switchAttributes(playerCard)[attRound-1];
    var npcCard = choiceNPC();
    var npc = switchAttributes(npcCard)[attRound-1];

    // Aplica efeitos
    player = putEffects(playerCard,npcCard,attRound,player,npc,roundMax,hpPlayer,hpNPC);

    if(playerCard === 10){ // Se for The Oracle, vitória automática
        npc = 0;
    }

    if(player > npc){ // Se Player ganha
        playerWins = playerWins + 1; // Incrementa contador
    }
    else if(npc > player){ // Se NPC ganha
        NPCWins = NPCWins + 1; // Incrementa contador
    } // Empates apenas não incrementam

    // Função de alteração de HP
    murder(player, npc);

    // Printa o resultado da rodada
    printRound(roundMax, playerCard, player, npcCard, npc);
    // Incrementa o número da rodada
    roundMax = roundMax + 1;

    if(roundMax == 14){ // Se for acima de rodada 13
        document.getElementById('deck').innerHTML = '';

        document.getElementById('i1').remove(); // Retira botão de info carta 1
        document.getElementById('i2').remove(); // Retira botão de info carta 2
        document.getElementById('c1').remove(); // Retira botão de escolha carta 1

        let change = document.getElementById('c2'); // Puxa ID do botão de escolha carta 2 e altera
        change.style.backgroundColor = 'white';
        change.style.color = 'black';
        change.innerHTML="See Results";

        if(playerWins >= NPCWins){ // Se player tiver maior ou igual número de vitórias
            document.getElementById('c2').setAttribute('onclick','victoryPage()'); // Puxa página de vitória
        }
        else{ 
            document.getElementById('c2').setAttribute('onclick','defeatPage()'); // Puxa página de derrota
        }

    } else{ // Caso seja dentro das 13 rodadas
        changeColor(attRound, 1); // Muda a cor por original
        shuffle(); // Embaralha pra nova rodada
    }
}

// Função auxiliar de retorno da página de vitória
function victoryPage(){
    window.location.href = "victory.html"
}

// Função auxiliar de retorno da página de derrota
function defeatPage(){
    window.location.href = "defeat.html";
}

// Função auxiliar de alteração de cor do atributo
function changeColor(attRound, type){
    // Procura o atributo que deseja alterar
    var attribute = switchAttId(attRound);
    // Puxa o ID no html 
    let change = document.getElementById(attribute);

    // Se a entrada for 0, significa que quer mudar o atributo da rodada para preto 
    if(type === 0){
        change.style.backgroundColor = 'black';

    } else{
        // Caso contrário (se for 1), retorna a cor original do atributo.
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

// Função base 
function murder(player, npc){
    if(player > npc){ // Se player tiver ganhado 
        if((player - npc) >= 100){ // Se a diferença for maior que 100 (dano máximo), torna em 100
            player = 100; 
            npc = 0;
        }

        hpNPC = hpNPC - (player - npc); // Incrementa o valor do atributo do Player menos do NPC
        const changeNPC = document.querySelector("#npc");
        changeNPC.innerHTML = "NPC hp: " + hpNPC;
    }
    else if(npc > player){ // Se NPC tiver ganhado 
        if((npc - player) >= 100){ // Se a diferença for maior que 100 (dano máximo), torna em 100
            npc = 100; 
            player = 0; 
        }
        
        hpPlayer = hpPlayer - (npc - player); // Incrementa o valor do atributo do NPC menos do Player
        const changePlayer = document.querySelector("#player");
        changePlayer.innerHTML = "Player hp: " + hpPlayer;
    } // Empates não alteram HP

    if(hpPlayer <= 0){ // Se HP do Player for menor ou igual a zero acaba em derrota
        window.location.href = "defeat.html"
    }
    if(hpNPC <= 0){ // Se HP do NPC for menor ou igual a zero acaba em vitória
        window.location.href = "victory.html"
    }
}

// Função auxiliar de escolha da carta do NPC 
function choiceNPC(){
    // Em resumo, escolhe uma carta ou outra para competir
    let number = getRandomArbitrary(1, 3);

    switch(number){
        case 1:
            return deck[2];
        break;
    
        default:
            return deck[3];
        break;
    }
}

// Função auxiliar para alert de resultado de rodada
function printRound(roundMax, playerCard, player, npcCard, npc){
    if(player > npc){
        swal({
            title: "Round " + roundMax,
            text: "You won with the character " + "\'" + switchName(playerCard) + "\' who made " + player + " points on attribute \'"
            + switchAttArray(attributes[attRound-1]) + "\'.\nThe NPC lost with the character "+ "\'" + switchName(npcCard) + "\' who made " + npc + " points.",
            button: false,
            className: "info-won"
        });
    }
    else if(npc > player){
        swal({
            title: "Round " + roundMax,
            text: "NPC won with the character " + "\'" + switchName(npcCard) + "\' who made " + npc + " points on attribute \'"
            + switchAttArray(attributes[attRound-1]) + "\'.\nYou lost with the character "+ "\'" + switchName(playerCard) + "\' who made " + player + " points.",
            button: false,
            className: "info-lost"
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

// Função auxiliar de escolha de número randômico
function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
}

// Função auxiliar praticamente inútil
function infoCard(n){
    switchInfo(deck[n]);
}

// Função da escolha de descrição da carta
function switchInfo(key){
    let message;

    switch(key){
    case 1: 
    //popup
    message = "Can't lose a lab battle. She dont even need to use a lab, bro.\n\nCL: 65\nLAB: 20\nREP: 100\nENE: 85";
    break; 

    case 2:
    //popup
    message = "Turn one of his attributes into zero.\n\nCL: 50\nLAB: 60\nREP: 10\nENE: 45";
    break; 

    case 3:
    //popup
    message = "If the enemy have more than 70 reputation points higher than him, it's a tie.\n\nCL: 40\nLAB: 60\nREP: 15\nENE: 90";
    break; 

    case 4:
    //popup
    message = "Lose 5 points of reputation for each turn ended in the game.\n\nCL: 75\nLAB: 40\nREP: 60\nENE: 75";
    break; 

    case 5:
    //popup
    message = "If she overcome the attributes of the enemy card in more than half, she wins the duel. \n\nCL: 80\nLAB: 90\nREP: 80\nENE: 70";
    break; 

    case 6:
    //popup
    message = "Double a random attribute, but then, divide by a random number into 1 and 4.\n\nCL: 50\nLAB: 100\nREP: 70\nENE: 80";
    break; 

    case 7:
    //popup
    message = "Heals the player health point in the value of one random attribute.\n\nCL: 60\nLAB: 80\nREP: 90\nENE: 45";
    break; 

    case 8:
    //popup
    message = "The energy get increased in 10 points every 2 turns.\n\nCL: 80\nLAB: 70\nREP: 90\nENE: 50";
    break; 

    case 9:
    //popup
    message = "Turn one of his attributes into 0 and increases 40 points to the others attributes.\n\nCL: 80\nLAB: 70\nREP: 70\nENE: 40";
    break; 

    case 10:
    //popup
    message = "Actually, the Oracle can't be beaten in battle because we didn't use python in our code. Automatic win and 100 damage points to NPC.\n\nCL: 60\nLAB: 95\nREP: 100\nENE: 70";
    break; 

    case 11:
    //popup
    message = "Enemy take damage in the value of one random attribute before the duel. If he wins the turn, the damage calculation happens normally.\n\nCL: 85\nLAB: 75\nREP: 100\nENE: 65";
    break; 

    case 12:
    //popup
    message = "Enemy takes 0-100 damage before duel and you takes 0-150 damage.\n\nCL: 60\nLAB: 30\nREP: 30\nENE: 70";
    break; 

    case 13:
    //popup
    message = "Thanks to his authority, double a random attribute.\n\nCL: 75\nLAB: 70\nREP: 50\nENE: 40";
    break; 

    case 14:
    //popup
    message = "If the player have less than 200 hp, all attributes of this card became 100.\n\nCL: 60\nLAB: 70\nREP: 95\nENE: 85";
    break; 

    case 15:	
    //popup
    message = "If enemy has more than 100 health points over you, he takes 50 points of damage.\n\nCL: 80\nLAB: 35\nREP: 65\nENE: 80";
    break; 

    case 16:
    //popup
    message = "Actually we don't know nothing about this guy.\n\nCL: 50\nLAB: 50\nREP: 50\nENE: 50";
    break; 

    case 17:
    //popup
    message = "If the sum of all attributes of your enemy is less than 260, he don't have autorithy to fight \“The Ruler\”.Automatic win and 50 damage to your enemy.\n\nCL: 45\nLAB: 35\nREP: 75\nENE: 90";
    break; 

    case 18:
    //popup
    message = "Two of this card attributes get decreased by each other randomly.\n\nCL: 85\nLAB: 70\nREP: 75\nENE: 75";
    break; 

    case 19:
    //popup
    message = "If that's an odd turn, triple two random attributes.\n\nCL: 40\nLAB: 70\nREP: 60\nENE: 50";
    break; 

    case 20:
    //popup
    message = "This card will have -20 points in a reputation duel, in exchange of increasing 30 points in Lab.\n\nCL: 75\nLAB: 70\nREP: 65\nENE: 85";
    break; 

    case 21:
    //popup
    message = "Double the reputation, this guy is so cool.\n\nCL: 85\nLAB: 35\nREP: 90\nENE: 80"
    break;

    case 22:
    //popup
    message = "If the turn is more than 4, Coffe Lover and Lab attributtes will triplicate.\n\nCL: 100\nLAB: 60\nREP: 80\nENE: 70";
    break; 

    case 23:
    //popup
    message = "Have 50% of chance to double the duel chosen attribute.\n\nCL: 70\nLAB: 95\nREP: 65\nENE: 80";
    break; 

    case 24: 
    //popup
    message = "He's just sad.\n\nCL: 70\nLAB: 70\nREP: 90\nENE: 50"
    break;
    }

    swal({
        title: switchName(key),
        text: message,
        button: "Got it!",
        className: "info-card"
    });
}

// Função de escolha da imagem para renderização da carta
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

// Função base 
function renderDeck(){
    // Atribui duas primeiras posições do vetor embaralhado como cartas da rodadas
    let firstImage = switchImage(deck[0]);
    let secondImage = switchImage(deck[1]);

    // Puxa o id do arquivo html 
    document.getElementById('deck').innerHTML = '';

    // Renderiza a primeira carta
		var card = document.createElement("div"); // Cria div
		var value = document.createElement("div");
		var first = document.createElement("div");
		card.className = "card";
		value.className = "value";
		first.className = firstImage + deck[0].Suit;

    // Nomeia a primeira carta
    value.innerHTML = switchName(deck[0]);

		card.appendChild(value);
		card.appendChild(first);

    document.getElementById("deck").appendChild(card);

    // Renderiza a segunda carta 
    var card = document.createElement("div"); // Cria div
    var value = document.createElement("div");
    var second = document.createElement("div");
    card.className = "card";
    value.className = "value";
    second.className = secondImage + deck[1].Suit;

    // Nomeia a segunda carta
    value.innerHTML = switchName(deck[1]);

        card.appendChild(value);
        card.appendChild(second);

    document.getElementById("deck").appendChild(card);

    // Retorna o atributo da rodada
    attRound = getRandomArbitrary(1, 5);

    // Muda cor do atributo da rodada
    changeColor(attRound, 0);
}

// Função inicial
function load(){
    // Sweet alert
    swal({
        title: "The Fuse",
        text: "Player vs Bot\n" + "The player start the game with 500 health points.\n" +
        "In every turn the player receive 2 characters cards, so does the NPC. \n" +
        "One of the 4 attributes of the characters will be sorted in each turn.\n" +
        "The chosen attribute will be black.\n\n" +
        "\nAll character cards have a special effect that will affect\n" +
        "the result of the current round.\n" +
        "If there's no effect the winner will be the\n" +
        "one with the biggest attribute value.\n\n" +
        "The health damage calculation is the value of\n" +
        "the winner attribute subtracted by the loser attribute.\n" +
        "The game ends when a player health points gets 0,\n" +
        "or when it cames to the 13th turn. In this case, the winner\n" +
        "is who won the most rounds.\n",
        button: "Ready",
        className: "info-start"
    });

	deck = getDeck();
	shuffle();
}

// Quando abre o index html chama a função load()
window.onload = load;


// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

    