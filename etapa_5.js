var jogx = 250;
var jogy = 470;
var inimx = 15;
var inimy = 15;
var inimdx,inimdx; 
var disparo = false; 
var vidas = 3;
var pontos = 0;

function setup() {
  createCanvas(500,500);
  frameRate(60);
}

function draw() {
  background(100); // fundo cor
  textSize(24) // texto
  fill('red');
  text("Vidas: "+vidas, 10, 35);
  text("Pontuação: "+pontos, 350, 35);
  
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
    rect(inimx, inimy, 40, 40); // retangulo
    inimy = inimy + 2
   if (inimx < 0){
    inimx = random(500,500); // movimentação aleatoria
   }
   if (keyIsDown(32) && (! disparo) ){ 
    disparo = true; 
    inimdx = jogx; // disparo e jogador
    inimdy = jogy;
  }
  if (disparo) {
    ellipse(inimdx,inimdy,4,10) // propriedades do disparo
    inimdy = inimdy - 12; 
   	if ( inimdy < length ) {
      disparo = false;
    }
  }
                 
}
