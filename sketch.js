var ball;
var button;
var rectangular;
var Matter;




function setup() {
  createCanvas(800,400);
  ball = new Ball(400, 200, 50, 50);

 
  
  


  button = createButton("click to Blow");
  button.position(600,200);
  button.class("blowButton");
  button.mousePressed(blow);


}

function draw() {
  background(255,255,255);  
  drawSprites();

  
  
}

function blow() {
  Matter.body.applyForce(ball.body, {x: 0, y: 0 }, { x: 0, y: 0.05});
}