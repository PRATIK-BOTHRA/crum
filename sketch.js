
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var log1,log2,log3,paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	ground = new Ground(400,height,800,20);
	//Create the Bodies Here.
    log1=new dustbin(550,587,20,200);
    log2=new dustbin(700,587,20,200)

	log3=new dustbin(625,680,160,20);

	paper=new Paper(100,500,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 log1.display();  


  log2.display();
  
  log3.display();
  paper.display();
  
  ground.display();

  
  
  
  drawSprites();
  
}

