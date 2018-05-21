var x = 80;
var y = 400

function setup() {
  createCanvas(512, 512);
}

function draw() {
  background(0);
  if (keyIsDown(LEFT_ARROW))
    x=x-10;

  if (keyIsDown(RIGHT_ARROW))
    x=x+10;

  if (keyIsDown(UP_ARROW))
    y=y-10;

  if (keyIsDown(DOWN_ARROW))
    y=y+10;
	
  ellipse(x, y, 50, 50);

  rect(250,310,20,200)
  rect(250,0,20,130)
  
}
