#include <stdio.h>
#include <time.h>
#include <stdlib.h>
#include <string.h>

struct card{
  int excecoes; 
  int a1; 
  int a2;
  int a3; 
  int a4; 
  char nome[128];  
}; 
typedef struct card Ccard;

struct player{
  Ccard** cartas;
  int hp;  
}; 
typedef struct player Player; 
 

int main(void) {
  printf("Hello World\n");
  return 0;
}


char* getNomeCarta(Ccard* a){
  return a->nome;  
}

int getAtributoMaisAlto(Ccard* a){
  if(a->a1 > a->a2 && a->a1 > a->a3 && a->a1 > a->a4){
    return a->a1; 
  }else if(a->a2 > a->a1 && a->a2 > a->a3 && a->a2 > a->a4){
    return a->a2; 
  }else if(a->a3 > a->a1 && a->a3 > a->a2 && a->a3 > a->a4){
    return a->a3; 
  }else{
    return a->a4; 
  }
}


void theMother(Ccard* a){
int i;  
srand(time(NULL)); 
i = rand()%4; 
if(i==0){
  i = 1; 
}
if(i == 1){
  a->a1 = 0; 
}else if(i==2){
  a->a2 = 0; 
}else if(i==3){
  a->a3 = 0; 
}else if(i==4){
  a->a4=0; 
}
}

void theNoise(Player* a){
  //Se você tiver um “The Boss" na mão, The Noise não pode sofrer debuffs
  char nome[128]; 
  for(int i=0;i<2;i++){
    strcpy(nome,getNomeCarta(a->cartas[i])); 
    if(strcmp("The Boss",nome)==0){ 
    } a->cartas[i]->excecoes=25; 
  }
} 

int TheSurfer(Ccard* a){
 //Caso perca uma disputa de atributos, tem 50% de chance de se esquivar do ataque pois você não encontrou ele na sala dele.
srand(time(NULL)); 
int i = rand()%100;
if(i >= 50){
  return 1; 
}else{
  return 0; 
}
}

void theDancer(Player *a,Player *b){
  //Aqui teria que passar as mãos dos jogadores. 
  char nome[128]; 
  for(int i=0;i<2;i++){
    strcpy(nome,getNomeCarta(a->cartas[i]));
    if(strcmp("The Mother",nome)==0){
      a->cartas[i]->a1 = 1000; 
      a->cartas[i]->a2 = 1000;
      a->cartas[i]->a3 = 1000;
      a->cartas[i]->a4 = 1000;
    }
  }
  strcpy(nome,"Limpa"); 
  for(int i=0;i<2;i++){
    strcpy(nome,getNomeCarta(b->cartas[i]));
    if(strcmp("The Mother",nome)==0){
      a->cartas[i]->a1 = -1000; 
      a->cartas[i]->a2 = -1000;
      a->cartas[i]->a3 = -1000; 
      a->cartas[i]->a4 = -1000; 
    }
  }
}

void theOptimazer(Ccard*a,Ccard*b){
  //Caso “The Optimazer” supere a carta do adversário em mais da metade dos atributos, ela vence o duelo. 
  int cont = 0;
  if(a->a1 > b->a1){
    cont++; 
  }
  if(a->a2 > b->a2){
    cont++; 
  } 
  if(a->a3 > b->a3){
    cont++; 
  }
  if(a->a4 > b->a4){
    cont++; 
  }
  if(cont >=3){
    a->a1 = 1000; 
    a->a2 = 1000; 
    a->a3 = 1000; 
    a->a4 = 1000; 
  }
}

void theRookie(Player* a){
int aux=0; 
int div = rand()%4;
if(div == 0){
  div=1; 
}
srand(time(NULL));
for(int i=0;i<2;i++){
  if(strcmp("The Rookie",getNomeCarta(a->cartas[i]))==0){
    aux = i;
  }
}
if(aux == 0){
  a->cartas[0]->a1 =(a->cartas[0]->a1 + a->cartas[1]->a1)/div;

  a->cartas[0]->a2 =(a->cartas[0]->a2 + a->cartas[1]->a2)/div;

  a->cartas[0]->a3 =(a->cartas[0]->a3 + a->cartas[1]->a3)/div;

 a->cartas[0]->a4 =(a->cartas[0]->a4 + a->cartas[1]->a4)/div ;

}else{
  a->cartas[1]->a1 =(a->cartas[0]->a1 + a->cartas[0]->a1)/div;

  a->cartas[1]->a2 =(a->cartas[0]->a2 +a->cartas[0]->a2)/div;

  a->cartas[1]->a3 =(a->cartas[0]->a3 + a->cartas[0]->a3)/div;

 a->cartas[1]->a4 =(a->cartas[0]->a4 + a->cartas[0]->a4)/div;
}
}

void theWhisper(Player*a,int dano){
//Se vencer um duelo, recupera vida do jogador na mesma quantidade que causa dano ao adversário. 
a->hp += dano; 
}

void theTransformer(){
 //Pode aleatoriamente ter um efeito chamado "trampling", que duplica o dano de cartas de efeito
 }

 void theIntruder(){
   //Qualquer buff é automaticamente direcionado a seu maior atributo, e qualquer debuff vai para o menor. 
 }

 void theOracle(){
   //Recebe o dobro de buffs de qualquer carta de efeito, e metade dos debuffs.
 }

 void theWitcher(Ccard* a){
   //Imune a qualquer debuff 
  a->excecoes=25; 
 }

int theHunter(int dano){
 //Causa 1.5x de dano ao atacar graças a sua arma. 
  dano *= 1.5; 
  return dano; 
}

void theBoss(Ccard*a){
  //Graças a sua autoridade, dobra aleatoriamente um dos seus atributos
  srand(time(NULL));
  int i= rand()%4; 
  if(i == 0){
    i=1; 
  }
  if(i==1){
    a->a1*= a->a1*2; 
  }else if(i==2){
    a->a2*= a->a2*2;
  }else if(i==3){
    a->a3*= a->a3*2;
  }else{
    a->a4*= a->a4*2;
  }
}

int theAunt(Player* a, int dano){
//Se perder um duelo e o jogador estiver com menos de 60% de vida, o jogador não recebe dano.
if(a->hp < 300){
  dano = 0; 
}
return dano; 
}

int thePoisson(Player* a,int dano){
//Se ganhar um duelo e o jogador estiver com menos de 60% de vida, causa 2x de dano ao adversário. 
if(a->hp < 300){
  dano = dano*2;
}
return dano; 
}

void theRuler(Ccard* b){
  //Se a soma total dos atributos do adversário não superar X, ele não tem autorização para enfrentar “The Ruler”.
  int soma=0; 
  soma += b->a1 + b->a2 + b->a3 + b->a4; 
  if(soma < 270){
    b->a1 = -1000; 
    b->a2 = -1000; 
    b->a3 = -1000; 
    b->a4 = -1000; 
  }
}

void theVirtualMachine(Ccard* a){
  //Quando jogado, dois de seus atributos se somam em um e depois dois deles se subtraem em outro.
  srand(time(NULL));
  int i= rand()%4; 
  int j= rand()%4; 
  if(i == 0){
    i=1; 
  }
  if(j == 0){
    j=1; 
  }

  if(i==1){
    a->a1 += a->a2;  
  }else if(i==2){
    a->a2 += a->a3; 
  }else if(i==3){
    a->a3 += a->a4; 
  }else if(i==4){
    a->a4 += a->a1; 
  }

  if(j==1){
    a->a1 -= a->a2; 
  }else if(j==2){
    a->a2-= a->a3; 
  }else if(j==3){
    a->a3 -= a->a4; 
  }else if(j==4){
    a->a4 -= a->a1; 
  }
}

void theSilkTouch(){}

void thePreepy(Ccard* a){
  //Pode, aleatoriamente, reduzir 5 pontos de seu atributo de reputação, em troca de adicionar 10 pontos ao atributo de Uso do Lab.
  srand(time(NULL)); 
  int i=rand()%100; 
  if(i>=50){
    a->a3 -= 5; 
    a->a2 += 10; 
  }
}

void theRunaway(Ccard* a){
  //Quando chamado duplica o atributo de reputação, pois é um ícone.
  a->a3 = a->a3*2; 
}

void theSirenGuardian(Ccard* a,Ccard* b){
  srand(time(NULL)); 
  int i=rand()%100; 
  if(i>= 50){
  a->a1 += getAtributoMaisAlto(b); 
  a->a2 += getAtributoMaisAlto(b); 
  a->a3+= getAtributoMaisAlto(b); 
  a->a4+= getAtributoMaisAlto(b); 
  }
}

void theSadBoy(Ccard* a,Ccard* b){
  a->excecoes=25; 
  // falta achar um jeito de virar o debuff pro inimigo 
}