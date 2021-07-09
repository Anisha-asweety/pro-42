var hr,min,sec

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
   
  //Calculating time using predifined func from p5.js
  hr=hour();
  min=minute();
  sec=second();
}

function draw() {
  background(255,255,255);
  
  hrAngle=map(hr,0,100,0,360)
  secAngle=map(sec,0,60,0,360)
  angleMode(DEGREES)
  
   //drawing hours hand
   push();
   rotate(hrAngle);//rotate the hand based on angle calculated
   stroke(0,255,0);
   strokeWeight(7);
   line(100,100,50,0);
   pop();
 
  //drawing seconds hand
  push();
  rotate(secAngle);//rotate the hand based on angle calculated
  stroke(255,0,0);
  strokeWeight(7);
  line(400,0,75,0);
  pop();

  drawSprites();
}