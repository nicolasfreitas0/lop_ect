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
var estrelasX = [];
var estrelasY = [];
var estrelasVel = [];
var estrelasTam = [];    
var qtEstrelas = 75; 


function setup() {
  createCanvas(500,500);
  frameRate(60);
  for (i = 0; i < qtEstrelas; i++) {
	estrelasX[i] = random(0,width);
	estrelasY[i] = random(0,height); 
	estrelasVel[i] = 2+random(0,12)/10; 
	estrelasTam[i] = random(2,4); 
  }
 
}

function draw() {
  background(0); // fundo cor
  if (tela == 1){
    textSize(36);
    fill("red");
    text("Pressione Enter para Começar", 5, 250);
	if ( keyIsDown(13) ) {
	   tela = 2; 
        }
    }
  if ( tela == 2 ) {	
  	background (0);
    
  for(i = 0; i < qtEstrelas; i++) {    // desenha as estrelas na tela
	  rect(estrelasX[i],estrelasY[i],estrelasTam[i],estrelasTam[i])
  }
  
  
  for(i = 0; i < qtEstrelas; i++) { 	// movimenta as estrelas aleatoriamente
	  estrelasY[i] = estrelasY[i] + estrelasVel[i]; 
	  if (estrelasY[i] > height) {
	 	estrelasX[i] = random(0,width);
		estrelasY[i] = -random(0,height); 		  
	  }
  }
    // NIVEIS
    if(pontos < 1000){
      textSize(28)
      text("LEVEL 1",175,35)
      }
    if(pontos >= 1000 && pontos < 2000){
      inimy = inimy + 1.2
      textSize(28)
      text("LEVEL 2",175,35)
      }
    if(pontos >= 2000){
      inimy = inimy + 1.4
      textSize(28)
      text("LEVEL 3",175,35)
      }
      
      
    // JOGADOR
    fill("blue")
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
    // INIMIGO
    fill("green")
    rect(inimx, inimy, raio_inim, raio_inim); // inimigo
  	inimy = inimy + 1
    
   if (inimy > 500){
    inimy= random(-50,-200); // movimentação aleatoria
   }
    // DISPARO
   if (keyIsDown(32) && (!disparo) ){ 
    disparo = true; 
    dispx = jogx; // disparo e jogador
    dispy = jogy;
  }
  if (disparo) {
    fill("yellow")
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
    	inimy = -inimy
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
