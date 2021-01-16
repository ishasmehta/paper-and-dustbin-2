
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,dustbin,paper;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,690,800,20);
	paper = new Paper(200,200,30);
	dustbin = new Dustbin(650,600);
	
	Engine.run(engine);  
}

function draw() {
	background(150);
	Engine.update(engine);
	
	ground.display();
	paper.display();
	dustbin.display();  
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper.body,paper.body.position,{x:100,y:-200});
	}
}


