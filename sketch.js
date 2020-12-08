
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(100,600,60);
	bob2=new Bob(160,600,60);
	bob3=new Bob(210,600,60);
	bob3=new Bob(260,600,60);
	bob4=new Bob(310,600,60);
	bob5=new Bob(360,600,60);

	roof=new Roof(350,100,500,50);

	rope1=new Rope(bob1.body,roof.body);
	rope2=new Rope(bob2.body,roof.body);
	rope3=new Rope(bob3.body,roof.body);
	rope4=new Rope(bob4.body,roof.body);
	rope5=new Rope(bob5.body,roof.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(255);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.dispaly();
  rope2.dispaly();
  rope3.dispaly();
  rope4.dispaly();
  rope5.dispaly();

  drawSprites();
 
}



