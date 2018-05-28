var x = 0;
var y = 400;
var dx = 500;
var dy = 364;

function setup() {
  createCanvas(500,425);
}

function draw() {
  background(0); // fundo cor
  ellipse(x, y, 50, 50); //personagem movimentaçao em teclado
  if(x > width){
    x = random(-500,-50)
  }
  if (keyIsDown(LEFT_ARROW)){ 
    x = x - 5;
  }
  if (keyIsDown(RIGHT_ARROW)){
    x = x + 5;
  }
  if (keyIsDown(UP_ARROW)){
    y = y - 5;
  }
  if (keyIsDown(DOWN_ARROW)){
    y = y + 5;
  }
  
  rect(dx,dy,20,60) // personagem movimentação aleatória
   dx = dx - 2
   if(dx < 0){
     dx = random(500,500)
     
   }
    
                
}
  
