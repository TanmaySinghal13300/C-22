const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world,ground,ball;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var options={
  isStatic : true
  }
  ground=Bodies.rectangle(200,380,800,50,options);
  var options1={
  restitution:1.0
  }
  ball=Bodies.circle(200,100,10,options1);
  World.add(world,ground);
  World.add(world,ball);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,50);
  circle(ball.position.x,ball.position.y,50);
}