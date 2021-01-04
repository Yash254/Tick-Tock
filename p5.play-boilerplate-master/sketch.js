function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  
  hr=hour();
  mn=minute();
  sc=second();
  angleMode(DEGREES);
  
  drawSprites();
}

function map() {
  scAngle=map(sc,0,60,0,360);
}