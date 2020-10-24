const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var stand;
var  slingShot;
var  polygon;

var  block1;
var  block2;
var  block3;
var  block4;
var  block5;
var  block6;
var  block7;
var  block8;
var  block9;
var  block10;
var  block11;
var  block12;
var  block13;
var  block14;
var  block15;
var  block16;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  
  world = engine.world;
  polygon= new Polygon(200,200);
  ground = new Ground(400,380,800,20);
  stand = new Ground(400,290,300,20);
  //level 1
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level 2
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11= new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level 3
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top;;
  block16 = new Block(390,155,30,40);;
  slingShot = new SlingShot(polygon.body,{x:180, y:200});
}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  ground.display();
  stand.display();


  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  //level 2
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  //level 3
  block13.display();
  block14.display();
  block15.display();
  //top
  block16.display();
  polygon.display();
  slingShot.display();
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.polygon.body);
  }
}
function getTime(){
  var response = fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo")
}
async function getTime(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo")
  var responseJSON = await response.json();
  console.log(responseJSON);
}