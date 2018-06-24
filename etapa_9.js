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
var inimx = [];
var inimy = [];
var inimVel = [];
var raio = 40;    
var qtInim = 8; 
var nivel = 1;
var limitedepontos = 10;
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
  for (i = 0; i < 8; i++) {
		inimx[i] = random(0,500);
		inimy[i] = random(-40,-40); 
		inimVel[i] = 1.2+random(0,10)/10; 
	} 
}

function draw() {
  background(0); // fundo cor
  if (tela == 1){
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
    if (jogx > width || jogx<0){
    jogx = -jogx;
  }
    // INIMIGO
    fill("green")
    for(i = 0; i < 2*nivel; i++){
    rect(inimx[i], inimy[i], raio_inim, raio_inim); // inimigo
    }
    for(i = 0; i < 2*nivel; i++) { 
	  inimy[i] = inimy[i] + inimVel[i]; 
	  if (inimy[i] >= height) {
		inimx[i] = random(0,500);
		inimy[i] = -random(0,500); 	
      }
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
  }
    if (disparo) {
    for(i = 0;i < 2*nivel; i++){
   	if ( dist(dispx,dispy,inimx[i],inimy[i]) < raio_inim ) {
      inimy[i] = -70;
      pontos=pontos+1;
      disparo = false;
	}
      if (colisao == false){
        colisao = true;
    }
   	  if ( dispy < length ) {
      	disparo = false;
 	  }
	}
    }
    for(i = 0; i < 2*nivel; i++) {
  	if (dist(inimx[i],inimy[i],jogx,jogy) < 40){
    	inimy[i] = - inimy[i];
      	jogx = 250;
    	jogy = 470;
    	vidas = vidas - 1;
  	}
  }
textSize(24) // texto
fill('red');
text("Vidas: "+ vidas, 10, 35);
text("Pontuação: "+pontos, 330, 35);
text("Fase: " + nivel,175,35);    
    if(pontos  == limitedepontos){
      nivel = nivel +1;
      limitedepontos = limitedepontos + (10*nivel)

for (i = 0; i < 2*(nivel-1); i++) {
		inimx[i] = random(0,500);
		inimy[i] = random(-40,-40); 
		inimVel[i] = 1.2+random(0,10)/10; 
	} 
 }     
    
    if (vidas == 0){
      tela = 3;
   	}
  }
    if (tela == 3){
textSize(36); 
fill("red");
text("GAME OVER",157, 250);
  	textSize(12);
    fill("red");
    text("Pressione Enter para jogar novamente", 160, 270);
	if ( keyIsDown(13) ) {
	   tela = 1; 
        }
    }
  	if(pontos == 100){
    tela = 4;
  }
  	if(tela == 4){
textSize(36); 
fill("red");
text("YOU WIN",175, 250);
  }   
}
