var jogx = 250;
var jogy = 470;
var inimx = 250;
var inimy = 15;
var dispx,dispy; 
var disparo = false; 
var vidas = 3;
var pontos = 0;
var raio_inim = 40;
var raio_jog = 50;
var raio_disp = 10;
var colisao = false;
var tela = 1;


function setup() {
  createCanvas(500,500);
  frameRate(60);
}

function draw() {
  background(100); // fundo cor
  if (tela == 1){
    textSize(36);
		fill(200);
		text("Pressione Enter para Começar", 5, 250);
		if ( keyIsDown(13) ) {
			tela = 2; 
        }
    }
  if ( tela == 2 ) {	
  ellipse(jogx, jogy, raio_jog, raio_jog); //jogador
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
    rect(inimx, inimy, raio_inim, raio_inim); // inimigo
  	inimy = inimy + 0.8
    
   if (inimy > 500){
    inimy= random(-50,-200); // movimentação aleatoria
   }
   if (keyIsDown(32) && (!disparo) ){ 
    disparo = true; 
    dispx = jogx; // disparo e jogador
    dispy = jogy;
  }
  if (disparo) {
    ellipse(dispx,dispy,raio_disp,raio_disp) // propriedades do disparo
    dispy = dispy - 12;
   	if ( dist(dispx,dispy,inimx,inimy) < raio_inim ) {
      inimy = -inimy;
      pontos = pontos + 100;
	}
      if (colisao == false){
        colisao = true;
    }
   	  if ( inimy < length ) {
      	disparo = false;
 	  }
	}
  	if (dist(inimx,inimy,jogx,jogy) < 40){
    	jogx = 250;
    	jogy = 470;
    	vidas = vidas - 1;
  	}
textSize(24) // texto
fill('red');
text("Vidas: "+vidas, 10, 35);
text("Pontuação: "+pontos, 330, 35);
    
    if (vidas == 0){
      tela = 3;
   	}
  }
    if (tela == 3){
      	textSize(36); 
		fill("red");
		text("GAME OVER",150, 250);
    }
}
