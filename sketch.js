
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone;
var boyImage,boy;
var mango1,mango2,mango3,mango4,mango5;
var tree;

function preload()
{
	boyImage= loadImage("boy.png");
	
}

function setup() {
	createCanvas(800, 700);

	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new 	Tree(600,500,50,300);
	boy = createSprite(400,350,50,200);
	boy.addImage(boyImage);
	boy.scale= 0.3
	 stone = new Stone (400,350,20,50);

	/* mango1 = new Mango(550,500,30);
	 mango2 = new Mango(590,600,50);
	 mango3 = new Mango(610,500,70);
	 mango4 = new Mango(650,550,10);
	 mango5 = new Mango(690,550,90);
*/


	 var poptions = {
		 bodyA : boy.body,
		 bodyB: stone.body,
		 stiffness : 0.04,
		 lenght:10
	 }
	 
	var chain = Constraint.create(poptions);
World.add(world,chain);	
	Engine.run(engine);
  
}


function draw() {

	Engine.update(engine);
  rectMode(CENTER);
  background("Pink");
  
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
chain.display();
tree.display();













  drawSprites();

 
}

