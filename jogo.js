var jogx = 250;
var jogy = 430;
var inimx = 250;
var inimy = 15;
var dispx,dispy; 
var disparo = false; 
var vidas = 3;
var pontos = 0;
var raio_inim = 60;
var raio_jog = 80;
var raio_disp = 10;
var colisao = false;
var inimx = [];
var inimy = [];
var inimVel = [];
var qtInim = 8; 
var nivel = 1;
var limitedepontos = 10;    
var qtInim = 4; 
var tela = 1;
var estrelasX = [];
var estrelasY = [];
var estrelasVel = [];
var estrelasTam = [];    
var qtEstrelas = 75; 
var bonusqt = 1
var bonusx = [];
var bonusy = [];
var bonusVel = [];
var bonusTam = [];
var nave;
var meteoro;
var bala;
var estrela;
var song;



function preload (){
 nave = loadImage('nave.png');
 meteoro = loadImage('meteoro.png');
 bala = loadImage('bala.png');
 estrela = loadImage('estrela.png');
}

function setup() {
  createCanvas(500,500);
  frameRate(60);
  song = loadSound("musica.mp3", loaded);
  song.setVolume(0.1);
  // Fundo
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

for (i = 0; i < bonusqt; i++) {
	bonusx[i] = random(0,width);
	bonusy[i] = random(-1000,-1000); 
	bonusVel[i] = 1.5; 
	bonusTam[i] = 25; 
  	}
}

function loaded (){
	song.play();
}

function draw() {
  background(0); // fundo cor
  if (tela == 1){
	  fill("white")
	  //Fundo
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
    text("Press ENTER", 130, 250);
	if ( keyIsDown(13) ) {
	   tela = 2; 
        }
    }
  if ( tela == 2 ) {	
  	background (0);
  	fill("white")
  	
  	//FUNDO
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
    image(nave,jogx, jogy, raio_jog, raio_jog); //jogador
  if(jogx > width){
    jogx = random(-500,-50) // aparecer na tela mais devagar
  }
  if (keyIsDown(LEFT_ARROW)){ 
    jogx = jogx - 5;
  }
  if (keyIsDown(RIGHT_ARROW)){
    jogx = jogx + 5;
  } 
    if (jogx > 500 || jogx < 0){
    jogx = -jogx;
  }
  
    // INIMIGO
    fill("green")
    for(i = 0; i < 2*nivel; i++){
    image(meteoro,inimx[i], inimy[i], raio_inim, raio_inim); // inimigo
    }
    for(i = 0; i < 2*nivel; i++) { 
	  inimy[i] = inimy[i] + inimVel[i]; 
	  if (inimy[i] >= height) {
		inimx[i] = random(0,500);
		inimy[i] = -random(0,500); 	
      }
	}
	
	// BONUS
	for(i = 0; i < bonusqt; i++) {    // desenha as estrelas na tela
	  image(estrela,bonusx[i],bonusy[i],bonusTam[i],bonusTam[i])
  }
  if (disparo) {
    for(i = 0;i < 2*nivel; i++){
   	if ( dist(dispx,dispy,bonusx[i],bonusy[i]) < bonusTam){
		vidas = vidas + 1
		bonusy[i] = -1000;
		 disparo = false;
   	}
  }
}
  for(i = 0; i < bonusqt; i++) { 	// movimenta as estrelas aleatoriamente
	  bonusy[i] = bonusy[i] + bonusVel[i]; 
	  if (bonusy[i] > height) {
	 	bonusx[i] = random(0,width);
		bonusy[i] = -random(0,height); 		  
	  }
  }
  
    // DISPARO
   if (keyIsDown(32) && (!disparo) ){ 
    disparo = true; 
    dispx = jogx+30; // disparo e jogador
    dispy = jogy;
  }
  if (disparo) {
    fill("yellow")
    image(bala,dispx,dispy,raio_disp,raio_disp) // propriedades do disparo
    dispy = dispy - 10;
  }
    if (disparo) {
    for(i = 0;i < 2*nivel; i++){
   	if ( dist(dispx,dispy,inimx[i],inimy[i]) < raio_inim - 30 ) {
      inimy[i] = -70;
      pontos = pontos + 1;
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
  	if (dist(inimx[i],inimy[i],jogx,jogy) < raio_inim -30){
    	inimy[i] = - inimy[i];
      	jogx = 250;
    	jogy = 430;
    	vidas = vidas - 1;
  	}
}
  
  //TEXTO
textSize(24) // texto
fill("red");
text("Vidas: "+vidas, 10, 35);
text("Pontuação: "+pontos, 330, 35);
textSize(24);
text("Fase " + nivel,400,470);    
	
	//MUDANÇA DE NIVEL
    if(pontos  == limitedepontos){
      nivel = nivel +1;
      limitedepontos = limitedepontos + (10*nivel)

for (i = 0; i < 2*(nivel-1); i++) {
		inimx[i] = random(0,500);
		inimy[i] = random(-40,-40); 
		inimVel[i] = 1.2+random(0,10)/10; 
	} 
}

	//PERDEU
    if (vidas == 0){
      tela = 3;
   	}
  }
    if (tela == 3){
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
text("GAME OVER",135, 250);
  	textSize(12);
    fill("red");
    }
    
    
	//GANHOU
  	if(pontos == 100){
    tela = 4;
  }
  	if(tela == 4){
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
fill("green");
text("YOU WIN",175, 250);
  }   
}
