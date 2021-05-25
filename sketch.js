const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1, box2;


function setup() {
  createCanvas(1200,700);
  engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,700,20);
    box1 = new Box(400, 50);
    box2 = new Box(400,100);
    box3 = new Box(400,150);
    box4 = new Box(400,200);
    box5 = new Box(400,250);
    box6 = new Box(400,300);
    box7 = new Box(400,350);
    box8 = new Box(400,400);
    box9 = new Box(400,450)
    box10 = new Box(400,500);
    box11 = new Box(400,550);
    box12 = new Box(400,600);
    box13 = new Box(400,650)



}

function draw() {
  background(255,255,255); 
  Engine.update(engine);

  ground.display();
  box1.display() ;
  box2.display() ;
  box3.display() ;
  box4.display() ;
  box5.display() ;
  box6.display() ;
  box7.display() ;
  box8.display() ;
  box9.display() ;
  box10.display() ;
  box11.display() ;
  box12.display() ;
  box13.display() ;
  drawSprites();
}