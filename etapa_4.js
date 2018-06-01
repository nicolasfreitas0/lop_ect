var jogx = 250;
var jogy = 470;
var inimx = 15;
var inimy = 15;
var inimdx,inimdx; 
var disparo = false; 

function setup() {
  createCanvas(500,500);
  frameRate(60);
}

function draw() {
  background(0); // fundo cor
  ellipse(jogx, jogy, 50, 50); //personagem movimentaçao em teclado
  if(jogx > width){
    jogx = random(-500,-50) // aparecer na tela mais devagar
  }
  if (keyIsDown(LEFT_ARROW)){ 
    jogx = jogx - 5;
  }
  if (keyIsDown(RIGHT_ARROW)){
    jogx = jogx + 5;
  }
  if (keyIsDown(UP_ARROW)){
    jogy = jogy - 5;
  }
  if (keyIsDown(DOWN_ARROW)){
    jogy = jogy + 5;
  }
  
    rect(inimx, 170, 40, 40); // retangulo
  inimx = inimx - 2; 
  if (inimx < 0){
    inimx = random(600,600); // movimentação aleatoria
   }
   if (keyIsDown(ENTER) && (! disparo) ){ 
    disparo = true; 
    inimdx = jogx; // disparo e jogador
    inimdy = jogy;
  }
  if (disparo) {
    ellipse(inimdx,inimdy,4,10) // propriedades do disparo
    inimdy = inimdy - 10; 
   	if ( inimdy < length ) {
      disparo = false;
    }
  }
  
                
}
