
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//1.let engine;
//2.let world;
//let ball, ground;

function setup()
{
  createCanvas(400,400);
  //3.engine = Engine.create();
  //4.world = engine.world;

  /*
  5.
  var ball_options = {
    restitution:0.95,
    frictionAir:0.01
  }
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);


  8.
  var ground_options ={
    isStatic: true
  }
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  */

}

function draw() 
{
  background(51);
  /*
  6. Engine.update(engine);
  7. ellipse(ball.position.x, ball.position.y,20);
  9. rect(ground.position.x, ground.position.y,400,20);
   */
 
}

