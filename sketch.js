const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;

var world, engine;

var boy;
var groundObject;

var treeObject;
var stoneObj;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12;

var launcherObject;


var launchingForce = 100;

function preload(){
	boy = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	
	//Creating the ground Object
	groundObject=new ground(width/2,600,width,20);

	//Creating the Tree Object
	treeObject=new tree(1050,900);


	//Creating the Mango Object
	mango1=new mango(1100,100,30);
	mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,40);
	mango8=new mango(1140,150,40);
	mango9=new mango(1100,230,40);
	mango10=new mango(1200,200,40);
	mango11=new mango(1120,50,40);
	mango12=new mango(900,160,40);

	//Creating the Stone Object
	stoneObj=new stone(235,420,30);

	//Creating the Launcher Object
	launcherObject=new launcher(stoneObj.body,{x:235,y:420});
	
	
	
	
	Engine.run(engine);
  
}

function draw() {
  
  background(230);
  Engine.update(engine);

  image(boy, 200,340,200,300);


  groundObject.display();

  treeObject.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  stoneObj.display();

  launcherObject.display();

	detectCollision(stoneObj,mango1);
	detectCollision(stoneObj,mango2);
	detectCollision(stoneObj,mango3);
	detectCollision(stoneObj,mango4);
	detectCollision(stoneObj,mango5);
	detectCollision(stoneObj,mango6);
	detectCollision(stoneObj,mango7);
	detectCollision(stoneObj,mango8);
	detectCollision(stoneObj,mango9);
	detectCollision(stoneObj,mango10);
	detectCollision(stoneObj,mango11);
	detectCollision(stoneObj,mango12);

}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	launcherObject.fly();
}

function detectCollision(lstone,lmango) {
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}