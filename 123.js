var estrelasX = [];
var estrelasY = [];
var estrelasVel = [];
var estrelasTam = [];    

var qtEstrelas = 5; 

// os códigos de "setup" só executam uma vez 
function setup() {
	createCanvas(500, 500); 
	frameRate(30);   
	for (i = 0; i < qtEstrelas; i++) {
		estrelasX[i] = random(0,500);
		estrelasY[i] = random(0,500); 
		estrelasVel[i] = 2+random(0,10)/8; 
		estrelasTam[i] = random(40,40); 
	} 
}

// os códigos de "draw" executam constantemente 
function draw() {
  background(0); 

  // desenha objetos 
  for(i = 0; i < qtEstrelas; i++) {
	  rect(estrelasX[i],estrelasY[i],estrelasTam[i],estrelasTam[i])
  }
  
  // movimenta objetos 
  for(i = 0; i < qtEstrelas; i++) { 
	  estrelasY[i] = estrelasY[i] + estrelasVel[i]; 
	  if (estrelasY[i] > height) {
		estrelasX[i] = random(0,500);
		estrelasY[i] = -random(0,500); 		  
	  }
  }
  
  
}
