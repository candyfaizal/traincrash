const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1,chain2;
var trainSound 
var crashSound
var flag = 0;
var coachImg,rockImg;
var rock1;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
  
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
  boggie1=new Coach(200,150,200,100)
  boggie2=new Coach(400,150,200,100)
  boggie3=new Coach(600,150,200,100)
  chain1=new SlingShot(boggie1.body,boggie2.body)
  chain2=new SlingShot(boggie2.body,boggie3.body)
  rock1=new Rock(1000,140,200,100)




}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  boggie1.show();
  boggie2.show();
  boggie3.show();
  chain1.show();
  chain2.show();
  rock1.show();

  var collision = Matter.SAT.collides(boggie3.body,rock1.body);
  if(collision.collided)
  {
    flag=1;
    
    
  }
  if(flag ===1){
    textSize(30);
    stroke(3);
    fill('blue');
    text("CRASH",500,200);
    crashSound.play();
  }



 
  }

  function keyPressed()
  {
    if(keyCode === RIGHT_ARROW){
      Matter.Body.applyForce(boggie3.body,{x:boggie3.body.position.x,y:boggie3.body.position.y},
        {x:1,y:0});
        trainSound.play();
    }

  }
