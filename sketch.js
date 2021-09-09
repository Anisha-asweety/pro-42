var hr,min,sec

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)

}

function draw() {
  background(0,0,0);
  translate(200,200)
  rotate(-90)

  //Calculating time using predifined func from p5.js
  hr=hour();
  min=minute();
  sec=second();
  
  hrAngle=map(hr%12,0,12,0,360)
  secAngle=map(sec,0,60,0,360)
  minAngle=map(min,0,60,0,360)
  
   //drawing hours hand
   push();
   rotate(hrAngle);//rotate the hand based on angle calculated
   stroke(0,255,0);
   strokeWeight(7);
   line(0,0,50,0);
   pop();
 
  //drawing seconds hand
  push();
  rotate(secAngle);//rotate the hand based on angle calculated
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  //drawing minutes hand
  push();
  rotate(minAngle);//rotate the hand based on angle calculated
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  drawSprites();
}