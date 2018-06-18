var inimx = [];
var inimy = [];
var inimVel = [];
var raio = 40;    
var qtInim = 4; 

// os códigos de "setup" só executam uma vez 
function setup() {
	createCanvas(500, 500); 
	frameRate(30);   
	for (i = 0; i < qtInim; i++) {
		inimx[i] = random(0,500);
		inimy[i] = random(-40,-40); 
		inimVel[i] = 1.2+random(0,10)/6; 
		 
	} 
}

// os códigos de "draw" executam constantemente 
function draw() {
  background(0); 

  // desenha objetos 
  for(i = 0; i < qtInim; i++) {
	  rect(inimx[i],inimy[i],raio,raio)
  }
  
  // movimenta objetos 
  for(i = 0; i < qtInim; i++) { 
	  inimy[i] = inimy[i] + inimVel[i]; 
	  if (inimy[i] >= height) {
		inimx[i] = random(0,500);
		inimy[i] = -random(0,500); 		  
	  }
  }
  
  
}
