const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

function preload()
{
	
}

var ball;
var ground;


function setup() {
	createCanvas(816, 360);

	engine = Engine.create();
	world = engine.world;


	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(100,-10,20,ball_options)
	World.add(world,ball);

	ground = new Ground(408,350,816,20)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
  	rectMode(CENTER);
	background(0);

	ground.display();
	
	ellipse(ball.position.x,ball.position.y,20)

	drawSprites();
 
}



